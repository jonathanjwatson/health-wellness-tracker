import React, { Component } from 'react';
import axios from 'axios';

class FoodItem extends Component {

    _addToDay = (e) => {
        const foodId = this.props._id;
        const userId = this.props.match.params.userId;
        console.log(userId);
        const payload = {
            foodId: foodId,
            userId: userId
        }
        axios.post(`/api/food`, payload)
        .then(res => {
            this.props.getUserData();
        })
    }

    render() {
        return (
            <div>
            <div className="foodItem">
                <p>{this.props.name} : {this.props.calories}  </p>
            </div>
            <div className="foodButton">
                <button onClick={this._addToDay}>Add to my day</button>
            </div>
            </div>
        );
    }
}

export default FoodItem;