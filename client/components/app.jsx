import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

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
  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <div className="container">
            <Header text="Wicked Sales" />
          </div>
          <div className="container">
            <div className="row">
              <ProductList setView={this.setView} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="container">
            <Header text="Wicked Sales" cartItemCount={this.state.cart}/>
          </div>
          <ProductDetails setView={this.setView} view={this.state.view.params}/>
        </div>
      );
    }
  }
}

export default App;
