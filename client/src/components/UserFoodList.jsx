import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import UserFoodItem from './UserFoodItem';

class UserFoodList extends Component {
    constructor() {
        super();
        this.state = {  
            user: {
                today: [
                    {
                        foodConsumed: []
                    }
                ],
            },
            }      
        }
    componentWillMount() {
        this._getUserData();
    }
    _getUserData = () => {
        const userId = this.props.userId
        axios.get(`/api/user/${userId}`)
        .then(res => {
            console.log(res.data);
            this.setState({user: res.data})
            console.log("User Object")
            console.log(this.state.user);
        })
    }
    render() {
        console.log("Inside the Render")
        
        const userFoodArray = this.state.user.today[0].foodConsumed
        console.log("ARRAY FROM STATE: " + userFoodArray.length)
        const userFoodComponents = this.state.user.today[0].foodConsumed.map((userFoodItem, i) => {
            return <UserFoodItem
                    {...userFoodItem}
                    getUserData={this._getUserData}
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