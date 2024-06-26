import React, { Component } from 'react';

class DateTimeSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDateTime: new Date().toISOString().slice(0, 16)
        };
    }

    handleChange = (e) => {
        this.setState({ currentDateTime: e.target.value });
        this.props.onDateTimeChange(e.target.value);
    }

    render() {
        return (
            <input
                type="datetime-local"
                value={this.state.currentDateTime}
                onChange={this.handleChange}
            />
        );
    }
}

export default DateTimeSelector;
