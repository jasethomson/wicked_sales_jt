import React from 'react';
import Coffee from './carousel';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }
  componentDidMount() {
    fetch('/api/products.php?id=' + this.props.view.id)
      .then(res => res.json())
      .then(product => this.setState({ product }));
  }
  render() {
    if (this.state.product) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <button className="btn btn-link text-white" onClick={() => { this.props.setView('catalog', {}); }}>Back To Catalog</button>
              <div className="card row">
                <div className="card-body row">
                  <div className="col-6">
                    <Coffee className="card-img-top" images={this.state.product[0].imageUrl}/>
                    {/* <img className="card-img-top" src={this.state.product[0].imageUrl[0]} alt="Card image cap"></img> */}
                  </div>
                  <div className="col-6">
                    <h3 className="card-title" onClick={() => this.props.setView('details', { id: this.state.product[0].id })}>{this.state.product[0].name}</h3>
                    <p className="card-text" style={{ 'fontSize': '1.5rem' }}>${((this.state.product[0].price / 100).toFixed(2))}</p>
                    <p className="card-text" style={{ 'fontSize': '1.4rem' }}>{this.state.product[0].shortDescription}</p>
                    <button className="btn btn-outline-dark" onClick={() => this.props.addToCart(this.state.product[0])}>Add to Cart</button>
                  </div>
                  <p className="card-text col-12 mt-3" style={{ 'fontSize': '1.2rem' }}>{this.state.product[0].longDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProductDetails;
