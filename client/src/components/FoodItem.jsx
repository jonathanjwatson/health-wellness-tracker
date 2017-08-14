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
            
        })
    }

    render() {
        return (
            <div>
                <p>{this.props.name} : {this.props.calories}  : {this.props._id}<button onClick={this._addToDay}>Add to my day</button></p>
            </div>
        );
    }
}

export default FoodItem;