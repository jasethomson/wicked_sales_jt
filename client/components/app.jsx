import React from 'react';
import Header from './header';
import ProductList from './product-list';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header text="Wicked Sales" />
        <div className="d-flex justify-content-between ">
          <ProductList />
        </div>
      </div>

    );
  }
}
