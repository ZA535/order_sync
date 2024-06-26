import React, { Component } from 'react';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import DateTimeSelector from './components/DateTimeSelector';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            venueStartTime: '08:00',
            venueEndTime: '02:00',
            currentDateTime: new Date().toISOString().slice(0, 16)
        };
    }

    componentDidMount() {
        this.fetchOrders();
    }

    fetchOrders = () => {
        fetch('http://localhost:5000/api/orders')
            .then(res => res.json())
            .then(data => this.setState({ orders: data }));
    }

    createOrder = (amount) => {
        fetch('http://localhost:5000/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount })
        })
            .then(res => res.json())
            .then(order => {
                this.setState({ orders: [...this.state.orders, order] });
            });
    }

    handleDateTimeChange = (currentDateTime) => {
        this.setState({ currentDateTime });
    }

    render() {
        return (
            <div>
                <h1>Order Sync</h1>
                <DateTimeSelector onDateTimeChange={this.handleDateTimeChange} />
                <OrderForm createOrder={this.createOrder} />
                <OrderList orders={this.state.orders} />
            </div>
        );
    }
}

export default App;
