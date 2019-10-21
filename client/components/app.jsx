import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.sumCost = this.sumCost.bind(this);
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
    fetch('/api/cart.php', req);
    const allProducts = this.state.cart.concat(product);
    this.setState({ cart: allProducts });
  }
  sumCost() {
    let total = null;
    for (let priceIndex = 0; priceIndex < this.state.cart.length; priceIndex++) {
      total += parseFloat(this.state.cart[priceIndex].price);
    }
    return total;
  }
  placeOrder(contact) {
    let purchaseInfo = {
      name: contact.name,
      creditCard: contact.creditCard,
      shippingAddress: contact.shippingAddress,
      cart: this.state.cart
    };
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(purchaseInfo)
    };
    fetch('/api/orders.php', req)
      .then(res => res.json())
      .then(item => {
        this.setState({ view: { name: 'catalog', params: {} }, cart: [] });
      });
  }
  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <div className="">
            <Header text="BrewSource" cartItemCount={this.state.cart.length} setView={this.setView}/>
          </div>
          <div className="row">
            {/* <div className="jchan font text-center">Coffee is a <br></br>language in itself.<br></br> <div id="chan" className="d-flex justify-content-center">-Jackie Chan</div></div> */}
            <img className="banner-image mt-3" src="images/coffee-shop.jpg" alt="Coffee Bar Image" />
          </div>
          <div className="">
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
            <Header text="BrewSource" cartItemCount={this.state.cart.length} setView={this.setView}/>
          </div>
          <ProductDetails setView={this.setView} view={this.state.view.params} addToCart={this.addToCart}/>
        </div>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <div>
          <div className="container">
            <Header text="BrewSource" cartItemCount={this.state.cart.length} setView={this.setView}/>
          </div>
          <div className="container">
            <div className="row justify-self-start">
              <button className="d-flex col btn btn-link text-white" onClick={() => { this.setView('catalog', {}); }}>Back To Catalog</button>
            </div>
            <div className="row justify-self-start">
              <h4 className="col text-white">My Cart</h4>
            </div>
            <CartSummary cart={this.state.cart} />
            <div className="row justify-self-start mb-4">
              <h4 className="col text-white">Item Total ${(this.sumCost() / 100).toFixed(2)}</h4>
              <button className="col-2 mr-3 btn btn-outline-light" onClick={() => { this.setView('checkout', {}); }}>Checkout</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="container">
            <Header text="BrewSource" cartItemCount={this.state.cart.length} setView={this.setView} />
          </div>
          <div className="container">
            <CheckoutForm placeOrder={this.placeOrder} sumCost={this.sumCost} setView={this.setView}/>
          </div>
        </div>
      );
    }
  }
}

export default App;
