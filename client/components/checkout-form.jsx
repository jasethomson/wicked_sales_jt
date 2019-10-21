import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'hello',
      creditCard: '',
      address: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange() {
    if (event.target.className === 'name') {
      this.setState({
        name: event.target.value
      });
    } else if (event.target.className === 'creditCard') {
      this.setState({
        creditCard: event.target.value
      });
    } else if (event.target.className === 'address') {
      this.setState({
        address: event.target.value
      });
    }
  }
  handleSubmit() {
    event.preventDefault();
  }
  render() {
    return (
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-10 text-white">
            <h4>Checkout</h4>
            <div>Order Total: ${(this.props.sumCost() / 100).toFixed(2)}</div>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row justify-content-center">
            <div className="mt-4 col-10 text-white">
            Name<input className="name form-control" type="text" onChange={this.handleChange} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="mt-3 col-10 text-white">
            Credit Card<input className="creditCard form-control" type="text" onChange={this.handleChange} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="mt-3 col-10 text-white">
            Shipping Address<textarea className="address form-control" type="text" onChange={this.handleChange} />
            </div>
          </div>
          <div className="container col-10">
            <div className=" row justify-content-between">
              <button type="reset" className="d-flex col-3 mt-3 px-0 btn btn-link text-white" onReset={() => { this.props.setView('catalog'); }}>Continue Shopping</button>
              <button type="submit" className="d-flex col-2 mt-3 btn btn-outline-light" onSubmit={() => { this.props.placeOrder('catalog', {}); }}>Place Order</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
