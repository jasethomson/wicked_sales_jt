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
          product="Product Name"
          cost="$0.00"
          description="Please buy my product. Buy one, get one free!" />
      </div>

    );
  }
}
