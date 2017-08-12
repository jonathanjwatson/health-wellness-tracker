import React, { Component } from 'react';
import Day from "./Day"

class Days extends Component {
    render() {
        const days = this.props.user.today
        const dateComponents = days.map((day, i) => {
            return <Day 
                {...day}
                key={i}
                 />;
        })
        return (
            <div>
                { dateComponents }
            </div>
        );
    }
}

export default Days;