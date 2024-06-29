import React, { Component } from "react";

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount } = this.state;
    this.props.createOrder({ amount });
    this.setState({
      amount: ""
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
        <button type="submit">Create Order</button>
      </form>
    );
  }
}

export default OrderForm;
