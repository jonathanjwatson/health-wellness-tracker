import React, { Component } from 'react';

class UserFoodItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name} : {this.props.calories}  : {this.props._id}<button>Remove from my day</button></p>
            </div>
        );
    }
}

export default UserFoodItem;