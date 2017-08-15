import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import axios from 'axios';

class UserFoodItem extends Component {
    _removeFromDay = (e) => {
        const foodId = this.props._id;
        const userId = this.props.userId;
        console.log(`Tried to remove ${foodId}`)
        axios.delete(`/api/user/${userId}/food/${foodId}`)
        .then(res => {
            this.props.getUserData();
        })
        
    }
    render() {
        return (
            <div>
                <p>{this.props.name} : {this.props.calories}  : {this.props._id}<button onClick={this._removeFromDay}>Remove from my day</button></p>
            </div>
        );
    }
}

export default UserFoodItem;