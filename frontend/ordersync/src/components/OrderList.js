import React, { Component } from 'react';

class OrderList extends Component {
    render() {
        const { orders } = this.props;
        return (
            <ul>
                {orders.map(order => (
                    <li key={order.id}>Order ID: {order.id}, Amount: {order.amount}</li>
                ))}
            </ul>
        );
    }
}

export default OrderList;
