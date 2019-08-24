import React from 'react';
import ProductListItem from './product-list-item';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.id = null;
    this.name = null;
    this.price = null;
    this.image = null;
    this.shortDescription = null;
    this.endpoint = this.setId();

  }
  setId() {
    let endpoint = '/api/products.php?id=' + this.props.view.id;
    return endpoint;
  }
  componentDidMount() {
    fetch(this.endpoint)
      .then(res => res.json())
      .then(product => this.setState({ product }));
  }

  render() {
    if (this.state.product) {
      return (
        <div className="d-flex">
          <ProductListItem
            key={this.state.product.id}
            id={this.state.product.id}
            name={this.state.product.name}
            price={this.state.product.price}
            image={this.state.product.image}
            shortDescription={this.state.product.shortDescription}
            longDescription={this.state.product.longDescription} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProductDetails;
