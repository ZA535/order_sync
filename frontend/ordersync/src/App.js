import React, { Component } from 'react';
import axios from 'axios';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import DateTimeSelector from './components/DateTimeSelector';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentTime: new Date().toISOString(),
      venueStartTime: '08:00',
      venueEndTime: '02:00',
    };
  }

  setCurrentTime = (currentTime) => {
    this.setState({ currentTime });
  };

  setVenueStartTime = (e) => {
    this.setState({ venueStartTime: e.target.value });
  };

  setVenueEndTime = (e) => {
    this.setState({ venueEndTime: e.target.value });
  };

  createOrder = async (amount) => {
    try {
      const { currentTime, venueStartTime, venueEndTime } = this.state;
      const response = await axios.post('http://localhost:5000/orders', {
        amount,
        currentTime,
        venueStartTime,
        venueEndTime,
      });
      this.setState((prevState) => ({
        orders: [...prevState.orders, response.data],
      }));
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  render() {
    const { orders, currentTime, venueStartTime, venueEndTime } = this.state;

    return (
      <div className="App">
        <h1>Restaurant Order System</h1>
        <DateTimeSelector currentTime={currentTime} setCurrentTime={this.setCurrentTime} />
        <div>
          <label>Venue Start Time:</label>
          <input
            type="time"
            value={venueStartTime}
            onChange={this.setVenueStartTime}
          />
        </div>
        <div>
          <label>Venue End Time:</label>
          <input
            type="time"
            value={venueEndTime}
            onChange={this.setVenueEndTime}
          />
        </div>
        <OrderForm createOrder={this.createOrder} />
        <OrderList orders={orders} />
      </div>
    );
  }
}

export default App;
