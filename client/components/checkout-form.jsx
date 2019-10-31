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
    const { formErrors } = this.state;

    return (
      <div>
        <h1>Checkout</h1>
        <form onSubmit={this.handleSubmit} className="mt-5" noValidate>
          <div className="form-row">
            <div className="col">
              <label htmlFor="firstName">First name</label>
              <input
                id="firstName"
                type="text"
                className={formErrors.firstName.length > 0 ? 'error form-control' : 'form-control'}
                placeholder="First name"
                name="firstName"
                noValidate
                onChange={this.handleChange} />
              {formErrors.firstName.length > 0 && (
                <span className="invalidInput">{formErrors.firstName}</span>
              )}
            </div>
            <div className="col mb-3">
              <label htmlFor="lastName">Last name</label>
              <input
                id="lastName"
                type="text"
                className={formErrors.lastName.length > 0 ? 'error form-control' : 'form-control'}
                placeholder="Last name"
                name="lastName"
                noValidate
                onChange={this.handleChange} />
              {formErrors.lastName.length > 0 && (
                <span className="invalidInput">{formErrors.lastName}</span>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="creditCard">Credit Card</label>
            <input
              id="creditCard"
              type="text"
              className={formErrors.lastName.length > 0 ? 'error form-control' : 'form-control'}
              placeholder="xxxx-xxxx-xxxx-xxxx"
              name="creditCard"
              noValidate
              onChange={this.handleChange} />
            {formErrors.creditCard.length > 0 && (
              <span className="invalidInput">{formErrors.creditCard}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              className={formErrors.address.length > 0 ? 'error form-control' : 'form-control'}
              placeholder="1234 Main St"
              name="address"
              noValidate
              onChange={this.handleChange} />
            {formErrors.address.length > 0 && (
              <span className="invalidInput">{formErrors.address}</span>
            )}
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                className={formErrors.city.length > 0 ? 'error form-control' : 'form-control'}
                placeholder="City"
                name="city"
                noValidate
                onChange={this.handleChange} />
              {formErrors.city.length > 0 && (
                <span className="invalidInput">{formErrors.city}</span>
              )}
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="state">State</label>
              <input
                id="state"
                type="text"
                className={formErrors.state.length > 0 ? 'error form-control' : 'form-control'}
                placeholder="State"
                name="state"
                noValidate
                onChange={this.handleChange} />
              {formErrors.state.length > 0 && (
                <span className="invalidInput">{formErrors.state}</span>
              )}
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="zip">Zip</label>
              <input
                id="zip"
                type="text"
                className={formErrors.zip.length > 0 ? 'error form-control' : 'form-control'}
                placeholder="Zip Code"
                name="zip"
                noValidate
                onChange={this.handleChange} />
              {formErrors.zip.length > 0 && (
                <span className="invalidInput">{formErrors.zip}</span>
              )}
            </div>
          </div>
          <button type="submit" className="btn btn-primary mb-2">Submit Order</button>
          <div className="invalidInput">{this.state.earlySubmit}</div>
        </form>
      </div>

    );
  }
}

export default CheckoutForm;
