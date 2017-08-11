import React, { Component } from 'react';

class Day extends Component {
    render() {
        return (
            <div>
                <h1>Data for Date: {this.props.date}</h1>
                <p>Servings consumed:{this.props.waterRatio[0].servingsConsumed}</p>
                <p>Servings desired:{this.props.waterRatio[0].servingsDesired}</p>
                

            </div>
        );
    }
}

export default Day;