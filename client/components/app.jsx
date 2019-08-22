import React from 'react';
import Header from './header';
import ProductListItem from './product-list-item';
// import ProductList from './product-list';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header text="Wicked Sales" />
        <ProductListItem
          text="Product"
          cost="$0.00"
          description="buy me!"/>
      </div>

    );
  }
}
