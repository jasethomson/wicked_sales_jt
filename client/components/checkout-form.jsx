import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      firstName: null,
      lastName: null,
      creditCard: null,
      address: null,
      city: null,
      state: null,
      zip: null,
      formErrors: {
        firstName: '',
        lastName: '',
        creditCard: '',
        address: '',
        city: '',
        state: '',
        zip: ''
      },
      earlySubmit: ''
    };

  }

  formValid(submission) {
    let errorsCopy = submission.formErrors;
    let firstNameCopy = submission.firstName;
    let lastNameCopy = submission.lastName;
    let creditCardCopy = submission.creditCard;
    let addressCopy = submission.address;
    let cityCopy = submission.city;
    let stateCopy = submission.state;
    let zipCopy = submission.zip;
    let valid = true;

    Object.values(errorsCopy).forEach(val => {
      val.length > 0 && (valid = false);
    });

    if (!firstNameCopy) {
      valid = false;
    } else if (!lastNameCopy) {
      valid = false;
    } else if (!creditCardCopy) {
      valid = false;
    } else if (!addressCopy) {
      valid = false;
    } else if (!cityCopy) {
      valid = false;
    } else if (!stateCopy) {
      valid = false;
    } else if (!zipCopy) {
      valid = false;
    }

    return valid;
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

    const ccRegex = RegExp(
      /^\d{4}([ -]?)((\d{6}\1?\d{5})|(\d{4}\1?\d{4}\1?\d{4}))$/
    );

    const letterRegex = RegExp(
      /^[a-zA-Z\s]*$/
    );

    const zipRegex = RegExp(
      /^[0-9]{5}(?:-[0-9]{4})?$/
    );

    switch (name) {
      case 'firstName':
        formErrors.firstName =
          letterRegex.test(value)
            ? ''
            : 'must input valid name, letters only';
        break;
      case 'lastName':
        formErrors.lastName =
          letterRegex.test(value)
            ? ''
            : 'must input valid name, letters only';
        break;
      case 'creditCard':
        formErrors.creditCard =
          ccRegex.test(value)
            ? ''
            : 'invalid credit card number';
        break;
      case 'address':
        formErrors.address =
          value.length < 6
            ? 'mininum 6 characters required'
            : '';
        break;
      case 'city':
        formErrors.city =
          letterRegex.test(value)
            ? ''
            : 'must input valid city, letters only';
        break;
      case 'state':
        formErrors.state =
          letterRegex.test(value)
            ? ''
            : 'must input valid state, letters only';
        break;
      case 'zip':
        formErrors.zip =
          zipRegex.test(value)
            ? ''
            : 'must input valid zip code, numbers only';
        break;
    }
    this.setState({ formErrors, [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let contact = this.state;

    if (this.formValid(this.state)) {
      this.props.placeOrder(contact, this.props.cart);
      this.setState({
        firstName: null,
        lastName: null,
        creditCard: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        formErrors: {
          firstName: '',
          lastName: '',
          creditCard: '',
          address: '',
          city: '',
          state: '',
          zip: ''
        },
        earlySubmit: ''
      });
      this.props.setView('confirmation', {});
    } else {
      this.setState({ earlySubmit: 'Please correctly fill out all fields before submitting.' });
    }
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
