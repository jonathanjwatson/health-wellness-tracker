import React, { Component } from 'react';

class FoodItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name} : {this.props.calories}</p>
            </div>
        );
    }
}

export default FoodItem;