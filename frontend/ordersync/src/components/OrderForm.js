import React, { Component } from 'react';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      notes: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount, customerName, customerEmail, customerPhone, notes } = this.state;
    this.props.createOrder({ amount, customerName, customerEmail, customerPhone, notes });
    this.setState({
      amount: '',
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      notes: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="order-form">
        <h2>Create New Order</h2>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={this.state.customerName}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerEmail">Customer Email:</label>
          <input
            type="email"
            id="customerEmail"
            name="customerEmail"
            value={this.state.customerEmail}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerPhone">Customer Phone:</label>
          <input
            type="tel"
            id="customerPhone"
            name="customerPhone"
            value={this.state.customerPhone}
            onChange={this.handleChange}
            required
          />
          <small>Format: 10 digits</small>
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            name="notes"
            value={this.state.notes}
            onChange={this.handleChange}
            rows={4}
          />
        </div>
        <button type="submit">Create Order</button>
      </form>
    );
  }
}

export default OrderForm;



