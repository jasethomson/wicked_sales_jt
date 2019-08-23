import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }
  componentDidMount() {
    fetch('/api/products.php?id=1')
      .then(res => res.json())
      .then(product => this.setState({ product }));
  }
  render() {
    return null;
  }
}

export default ProductDetails;
