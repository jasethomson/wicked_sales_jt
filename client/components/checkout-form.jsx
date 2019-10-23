import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'hello',
      lastName: 'you',
      creditCard: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
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
      <form className="mt-5">
        <div className="form-row">
          <div className="col">
            <label className="text-white" htmlFor="inputAddress">First name</label>
            <input type="text" className="form-control" placeholder="First name"></input>
          </div>
          <div className="col mb-3">
            <label className="text-white" htmlFor="inputAddress">Last name</label>
            <input type="text" className="form-control" placeholder="Last name"></input>
          </div>
        </div>
        <div className="form-group">
          <label className="text-white" htmlFor="inputZip">Credit Card</label>
          <input type="text" className="form-control" id="creditCard"></input>
        </div>
        <div className="form-group">
          <label className="text-white" htmlFor="inputAddress">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"></input>
        </div>
        <div className="form-group">
          <label className="text-white" htmlFor="inputAddress2">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label className="text-white" htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity"></input>
          </div>
          <div className="form-group col-md-4">
            <label className="text-white" htmlFor="inputState">State</label>
            <input type="text" className="form-control" id="inputState"></input>
          </div>
          <div className="form-group col-md-2">
            <label className="text-white" htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip"></input>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onSubmit={() => { this.props.placeOrder('catalog', {}); }}>Submit Order</button>
      </form>

    );
  }
}

export default CheckoutForm;
