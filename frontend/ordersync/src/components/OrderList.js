import React, { Component } from "react";

class OrderList extends Component {
  render() {
    return (
      <div className="OrderList">
        <h2>Order List</h2>
        <ul>
          {this.props.orders.map((order) => (
            <li key={order.id}>
             <span className="order-label">Order ID:</span> <strong>{order.id}</strong>, 
              <span className="order-label">Amount:</span> <strong>{order.amount}</strong>, 
              <span className="order-label">Customer Name:</span> <strong>{order.customer_name}</strong>, 
              <span className="order-label">Email:</span> <strong>{order.customer_email}</strong>, 
              <span className="order-label">Contact #:</span> <strong>{order.customer_phone}</strong>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default OrderList;
