import React, { Component } from 'react';

class OrderList extends Component {
  render() {
    return (
      <div>
        <h2>Order List</h2>
        <ul>
          {this.props.orders.map((order) => (
            <li key={order.id}>
              Order ID: {order.id}, Amount: {order.amount}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default OrderList;
