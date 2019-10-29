import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'hello',
      lastName: 'you',
      creditCard: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.id === 'firstName') {
      this.setState({
        firstName: event.target.value
      });
    } else if (event.target.id === 'lastName') {
      this.setState({
        lastName: event.target.value
      });
    } else if (event.target.id === 'creditCard') {
      this.setState({
        creditCard: event.target.value
      });
    } else if (event.target.id === 'address') {
      this.setState({
        address: event.target.value
      });
    } else if (event.target.id === 'city') {
      this.setState({
        city: event.target.value
      });
    } else if (event.target.id === 'state') {
      this.setState({
        state: event.target.value
      });
    } else if (event.target.id === 'zip') {
      this.setState({
        zip: event.target.value
      });
    }
  }

  handleSubmit() {
    event.preventDefault();
    let contact = this.state;

    this.props.placeOrder(contact, this.props.cart);
    this.setState({
      firstName: 'hello',
      lastName: 'you',
      creditCard: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    });
    this.props.setView('confirmation', {});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mt-5">
        <div className="form-row">
          <div className="col">
            <label className="text-white" htmlFor="firstName">First name</label>
            <input id="firstName" type="text" className="form-control" placeholder="First name" onChange={this.handleChange} pattern="[a-zA-Z\-'\s]+"></input>
          </div>
          <div className="col mb-3">
            <label className="text-white" htmlFor="lastName">Last name</label>
            <input id="lastName" type="text" className="form-control" placeholder="Last name" onChange={this.handleChange} pattern="[a-zA-Z\-'\s]+"></input>
          </div>
        </div>
        <div className="form-group">
          <label className="text-white" htmlFor="creditCard">Credit Card</label>
          <input id="creditCard" type="text" className="form-control" onChange={this.handleChange} pattern="\b(?:\d[ -]*?){13,16}\b"></input>
        </div>
        <div className="form-group">
          <label className="text-white" htmlFor="address">Address</label>
          <input id="address" type="text" className="form-control" placeholder="1234 Main St" onChange={this.handleChange}></input>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label className="text-white" htmlFor="city">City</label>
            <input id="city" type="text" className="form-control" onChange={this.handleChange} pattern="[a-zA-Z\-'\s]+"></input>
          </div>
          <div className="form-group col-md-4">
            <label className="text-white" htmlFor="state">State</label>
            <input id="state" type="text" className="form-control" onChange={this.handleChange} pattern="[a-zA-Z\-'\s]+"></input>
          </div>
          <div className="form-group col-md-2">
            <label className="text-white" htmlFor="zip">Zip</label>
            <input id="zip" type="text" className="form-control" onChange={this.handleChange} pattern="^\d{5,}$"></input>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit Order</button>
      </form>

    );
  }
}

export default CheckoutForm;
