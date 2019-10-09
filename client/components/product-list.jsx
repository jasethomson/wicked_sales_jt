import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts() {
    fetch('/api/products.php')
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }
  render() {
    return (
      this.state.products.map(product => {
        return (
          <ProductListItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.imageUrl[0]}
            shortDescription={product.shortDescription}
            setView={this.props.setView} />
        );
      })
    );
  }
}

export default ProductList;
