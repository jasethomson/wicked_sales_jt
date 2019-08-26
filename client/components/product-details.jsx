import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
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
        <div className="container">
          <div className="row">
            <div className="col">
              <button className="btn btn-link" onClick={() => { this.props.setView('catalog', {}); }}>Back To Catalog</button>
              <div className="card row">
                <div className="card-body row">
                  <div className="col-6">
                    <img className="card-img-top" src={this.state.product.image} alt="Card image cap"></img>
                  </div>
                  <div className="col-6">
                    <h3 className="card-title" onClick={() => this.props.setView('details', { id: this.state.product.id })}>{this.state.product.name}</h3>
                    <p className="card-text" style={{ 'font-size': '1.5rem' }}>${((this.state.product.price / 100).toFixed(2))}</p>
                    <p className="card-text" style={{ 'font-size': '1.4rem' }}>{this.state.product.shortDescription}</p>
                  </div>
                  <p className="card-text col-12 mt-3" style={{ 'font-size': '1.2rem' }}>{this.state.product.longDescription}</p>
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
