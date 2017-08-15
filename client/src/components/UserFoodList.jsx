import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import axios from 'axios';
import UserFoodItem from './UserFoodItem';

class UserFoodList extends Component {

    render() {
        const userFoodArray = this.props.user.today[0].foodConsumed
        const userFoodComponents = this.props.user.today[0].foodConsumed.map((userFoodItem, i) => {
            return <UserFoodItem
                    {...userFoodItem}
                    getUserData={this.props.getUserData}
                    userId={this.props.user._id}
                    key={i}
                    />;
        })
        console.log(userFoodArray);

        // userFoodArray.forEach((food) => {
        //     console.log("a food")
        // })
        return (
            <div>
                {userFoodComponents}
            </div>
        );
    }
}

export default UserFoodList
;