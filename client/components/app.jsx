import React from 'react';
import Header from './header';
import ProductListItem from './product-list-item';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header text="Wicked Sales" />
        <ProductListItem
          text="Product Name"
          cost="$0.00"
          description="This is an awesome product, buy me or else..." />
      </div>

    );
  }
}
