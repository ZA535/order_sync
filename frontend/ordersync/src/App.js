import React, { Component } from "react";
import axios from "axios";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import DateTimeSelector from "./components/DateTimeSelector";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentTime: new Date().toISOString(),
      venueStartTime: "08:00",
      venueEndTime: "02:00"
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

  createOrder = async (orderData) => {
    try {
      const { currentTime, venueStartTime, venueEndTime } = this.state;
      const apiUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await axios.post(`${apiUrl}/orders`, {
        ...orderData,
        currentTime,
        venueStartTime,
        venueEndTime
      });
      this.setState((prevState) => ({
        orders: [...prevState.orders, response.data]
      }));
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  render() {
    const { orders, currentTime, venueStartTime, venueEndTime } = this.state;

    return (
      <>
        <h1>Restaurant Order System</h1>
        <div className="App">
          <div className="left-side">
            <DateTimeSelector
              currentTime={currentTime}
              setCurrentTime={this.setCurrentTime}
            />
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
            <br />
            <OrderForm createOrder={this.createOrder} />
          </div>
          <div className="right-side">
            <OrderList orders={orders} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
