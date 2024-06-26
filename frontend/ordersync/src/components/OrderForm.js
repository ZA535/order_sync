import React, { Component } from 'react';

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: ''
        };
    }

    handleChange = (e) => {
        this.setState({ amount: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createOrder(this.state.amount);
        this.setState({ amount: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="number"
                    value={this.state.amount}
                    onChange={this.handleChange}
                    placeholder="Amount"
                    required
                />
                <button type="submit">Create Order</button>
            </form>
        );
    }
}

export default OrderForm;
