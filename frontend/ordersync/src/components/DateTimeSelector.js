import React, { Component } from 'react';

class DateTimeSelector extends Component {
  handleChange = (e) => {
    this.props.setCurrentTime(e.target.value);
  };

  render() {
    return (
      <div>
        <label>Current Date/Time:</label>
        <input
          type="datetime-local"
          value={this.props.currentTime}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default DateTimeSelector;
