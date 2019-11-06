import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import Confirmation from './confirmation';
import LandingModal from './modal';
import DeleteModal from './deleteModal';
import AddModal from './addModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: [],
      modal: true,
      deleteModal: false,
      deleteId: null,
      addModal: false,
      addModalProduct: {},
      purchAddress: {},
      purchCart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.sumCost = this.sumCost.bind(this);
    this.numOfItems = this.numOfItems.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderDeleteModal = this.renderDeleteModal.bind(this);
    this.doNotDelete = this.doNotDelete.bind(this);
    this.renderAddModal = this.renderAddModal.bind(this);
  }

  setView(name, params) {
    this.setState({ view: { name, params } });
  }

  getCartItems() {
    fetch('/api/cart.php')
      .then(res => res.json())
      .then(cart => this.setState({ cart }));
  }

  componentDidMount() {
    this.getCartItems();
  }

  addToCart(product) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    };

    fetch('/api/cart.php', req)
      .then(() => {
        const allProducts = this.state.cart.concat(product);
        this.setState({ cart: allProducts });
      })
      .finally(() => this.getCartItems());
  }

  updateCart(item) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    };
    fetch('/api/cart_update.php', req);
  }

  deleteFromCart() {
    let idToDelete = parseInt(this.state.deleteId);
    let deleteId = { id: idToDelete };
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(deleteId)
    };
    fetch('/api/cart_delete.php', req)
      .finally(() => this.getCartItems());
    this.setState({
      deleteModal: false,
      deleteId: null
    });
  }

  doNotDelete() {
    this.setState({
      deleteModal: false,
      deleteId: null
    });
  }

  sumCost() {
    let total = null;
    for (let priceIndex = 0; priceIndex < this.state.cart.length; priceIndex++) {
      total += parseFloat(this.state.cart[priceIndex].price) * parseFloat(this.state.cart[priceIndex].count);
    }
    return total;
  }

  placeOrder(contact, cartSum) {
    let purchaseInfo = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      creditCard: contact.creditCard,
      address: contact.address,
      city: contact.city,
      state: contact.state,
      zip: contact.zip,
      cart: this.state.cart
    };
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(purchaseInfo)
    };
    fetch('/api/orders.php', req);

    let cartStateCopy = this.state.cart;
    for (let cartItem = 0; cartItem < cartStateCopy.length; cartItem++) {
      let currentProduct = cartStateCopy[cartItem];
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentProduct)
      };
      fetch('/api/cart_delete.php', req)
        .finally(() => this.setState({
          purchAddress: purchaseInfo,
          purchCart: cartSum,
          lastFour: this.grabDigits(purchaseInfo.creditCard)
        }));
    }
    this.setState({ cart: [] });
  }

  numOfItems(event) {
    if (this.state.view === 'details') {
      let itemsCopy = this.state.items;
      let productCopy = this.state.product;

      if (event.currentTarget.id === 'up' && itemsCopy >= 1) {
        itemsCopy += 1;
      } else if (event.currentTarget.id === 'down' && itemsCopy > 1) {
        itemsCopy -= 1;
      }

      productCopy[0].count = itemsCopy;
      this.setState({
        items: itemsCopy,
        product: productCopy
      });
    } else {
      let cartCopy = this.state.cart;
      let itemsCopy = null;
      let index = null;

      for (index = 0; index < cartCopy.length; index++) {
        if (cartCopy[index].id === event.currentTarget.id) {
          itemsCopy = parseInt(cartCopy[index].count);
          break;
        }
      }

      if (event.currentTarget.className === 'btn btn-outline-dark up' && itemsCopy >= 1) {
        itemsCopy += 1;
      } else if (event.currentTarget.className === 'mr-2 btn btn-outline-dark down' && itemsCopy > 1) {
        itemsCopy -= 1;
      }

      cartCopy[index].count = itemsCopy;
      this.updateCart(cartCopy[index]);
      this.setState({ cart: cartCopy });
    }

  }

  sumItemsInCart() {
    let countOfCart = 0;
    for (let currentItem = 0; currentItem < this.state.cart.length; currentItem++) {
      let currentAddition = parseInt(this.state.cart[currentItem].count);
      countOfCart += currentAddition;
    }
    return countOfCart;
  }

  closeModal() {
    if (this.state.view.name === 'catalog') {
      this.setState({ modal: false });
    } else if (this.state.view.name === 'details') {
      this.setState({
        addModal: false,
        addModalProduct: {}
      });
    }

  }

  renderDeleteModal(id) {
    this.setState({
      deleteModal: true,
      deleteId: id
    });
  }

  renderAddModal(product) {
    this.setState({
      addModal: true,
      addModalProduct: product
    });
  }

  grabDigits(creditCard) {
    let cardLength = creditCard.length - 1;
    let lastFour = creditCard[cardLength - 3];
    lastFour += creditCard[cardLength - 2];
    lastFour += creditCard[cardLength - 1];
    lastFour += creditCard[cardLength];
    return lastFour;
  }

  sumPurchase(cart) {
    let total = null;
    for (let priceIndex = 0; priceIndex < cart.length; priceIndex++) {
      total += parseFloat(cart[priceIndex].price) * parseFloat(cart[priceIndex].count);
    }
    return total;
  }

  render() {
    if (this.state.cart) {
      this.cartAmount = this.sumItemsInCart();
    }
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          { this.state.modal ? <LandingModal closeModal={this.closeModal}/> : null}
          <div>
            <Header text="BrewSource" cartItemCount={this.cartAmount} setView={this.setView}/>
          </div>
          <div>
            <img className="banner-image mt-3" src="images/coffee-shop.jpg" alt="Coffee Bar Image" />
          </div>
          <div>
            <div className="justify-content-md-center mr-2 ml-2 row">
              <ProductList setView={this.setView} />
            </div>
          </div>
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div>
          <div className="container">
            <Header text="BrewSource" cartItemCount={this.cartAmount} setView={this.setView}/>
          </div>
          <ProductDetails renderAddModal={this.renderAddModal} numOfItems={this.numOfItems} setView={this.setView} view={this.state.view.params} addToCart={this.addToCart}/>
          {this.state.addModal ? <AddModal closeModal={this.closeModal} addModalProduct={this.state.addModalProduct} setView={this.setView} /> : null}
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <div className="container">
            <Header text="BrewSource" cartItemCount={this.cartAmount} setView={this.setView}/>
          </div>
          <div className="container">
            <div className="row justify-self-start">
              <button className="d-flex col btn btn-link text-white" onClick={() => { this.setView('catalog', {}); }}>Back To Catalog</button>
            </div>
            <div className="row justify-self-start">
              <h4 className="col text-white">My Cart</h4>
            </div>
            <CartSummary renderDeleteModal={this.renderDeleteModal} deleteFromCart={this.deleteFromCart} numOfItems={this.numOfItems} cart={this.state.cart} setView={this.setView}/>
            {this.state.deleteModal ? <DeleteModal doNotDelete={this.doNotDelete} deleteFromCart={this.deleteFromCart} /> : null}
            <div className="row justify-self-start mb-4">
              <h4 className="col text-white">Item Total ${(this.sumCost() / 100).toFixed(2)}</h4>
              <button className={this.state.cart.length > 0 ? 'col-3 col-xl-2 mr-3 btn btn-outline-light' : 'col-3 col-xl-2 mr-3 checkout'} onClick={() => {
                if (this.state.cart.length > 0) {
                  this.setView('checkout', {});
                }
              }} >Checkout</button>
            </div>
          </div>
        </div>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <div>
          <div className="container">
            <Header text="BrewSource" cartItemCount={this.cartAmount} setView={this.setView} />
          </div>
          <div className="container checkoutScreen mt-2">
            <CheckoutForm cart={this.state.cart} placeOrder={this.placeOrder} sumCost={this.sumCost} setView={this.setView}/>
          </div>
        </div>
      );
    } else if (this.state.view.name === 'confirmation') {
      return (
        <div>
          <div className="container">
            <Header text="BrewSource" cartItemCount={this.cartAmount} setView={this.setView} />
          </div>
          <div className="container">
            <Confirmation sumPurchase={this.sumPurchase} lastFour={this.state.lastFour} purchCart={this.state.purchCart} purchAddress={this.state.purchAddress} setView={this.setView} />
          </div>
        </div>
      );
    }
  }
}

export default App;
