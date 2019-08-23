import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <div className="headerContainer d-flex">
          <Header text="Wicked Sales" />
        </div>
        <div className="container">
          <div className="d-flex justify-content-center row">
            <ProductList />
          </div>
        </div>
        <ProductDetails />
      </div>

    );
  }
}
