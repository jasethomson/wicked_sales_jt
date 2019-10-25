import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import Confirmation from './confirmation';
import LandingModal from './modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: [],
      modal: true
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.sumCost = this.sumCost.bind(this);
    this.numOfItems = this.numOfItems.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  deleteFromCart(event) {
    let idToDelete = parseInt(event.currentTarget.id);
    let deleteId = { id: idToDelete };
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(deleteId)
    };
    fetch('/api/cart_delete.php', req)
      .finally(() => this.getCartItems());
  }

  sumCost() {
    let total = null;
    for (let priceIndex = 0; priceIndex < this.state.cart.length; priceIndex++) {
      total += parseFloat(this.state.cart[priceIndex].price) * parseFloat(this.state.cart[priceIndex].count);
    }
    return total;
  }

  placeOrder(contact) {
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
      fetch('/api/cart_delete.php', req);
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
    this.setState({ modal: false });
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
          <ProductDetails numOfItems={this.numOfItems} setView={this.setView} view={this.state.view.params} addToCart={this.addToCart}/>
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
            <CartSummary deleteFromCart={this.deleteFromCart} numOfItems={this.numOfItems} cart={this.state.cart} setView={this.setView}/>
            <div className="row justify-self-start mb-4">
              <h4 className="col text-white">Item Total ${(this.sumCost() / 100).toFixed(2)}</h4>
              <button className="col-3 col-xl-2 mr-3 btn btn-outline-light checkout" onClick={() => { this.setView('checkout', {}); }}>Checkout</button>
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
          <div className="container">
            <CheckoutForm placeOrder={this.placeOrder} sumCost={this.sumCost} setView={this.setView}/>
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
            <Confirmation setView={this.setView} />
          </div>
        </div>
      );
    }
  }
}

export default App;
