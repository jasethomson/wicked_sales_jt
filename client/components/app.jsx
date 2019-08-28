import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';

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
      .then(res => res.json())
      .then(item => {
        const allProducts = this.state.cart.concat(item);
        this.setState({ cart: allProducts });
      });
  }
  sumCost() {
    let total = null;
    for (let priceIndex = 0; priceIndex < this.state.cart.length; priceIndex++) {
      total += parseFloat(this.state.cart[priceIndex].price);
    }
    return total;
  }
  placeOrder(object) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object)
    };
    fetch('/api/cart.php', req)
      .then(res => res.json())
      .then(item => {
        const allProducts = this.state.cart.concat(item);
        this.setState({ cart: allProducts });
      });
  }
  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <div className="container">
            <Header text="Wicked Sales" cartItemCount={this.state.cart.length} setView={this.setView}/>
          </div>
          <div className="container">
            <div className="row">
              <ProductList setView={this.setView} />
            </div>
          </div>
        </div>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <div>
          <div className="container">
            <Header text="Wicked Sales" cartItemCount={this.state.cart.length} setView={this.setView}/>
          </div>
          <ProductDetails setView={this.setView} view={this.state.view.params} addToCart={this.addToCart}/>
        </div>
      );
    } else {
      return (
        <div>
          <div className="container">
            <Header text="Wicked Sales" cartItemCount={this.state.cart.length} setView={this.setView}/>
          </div>
          <div className="container">
            <div className="row justify-self-start">
              <button className="d-flex col btn btn-link" onClick={() => { this.setView('catalog', {}); }}>Back To Catalog</button>
            </div>
            <div className="row justify-self-start">
              <h4 className="col">My Cart</h4>
            </div>
            <CartSummary cart={this.state.cart} />
            <div className="row justify-self-start">
              <h4 className="col">Item Total ${(this.sumCost() / 100).toFixed(2)}</h4>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
