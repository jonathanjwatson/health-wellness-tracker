import React, { Component } from 'react';
import axios from 'axios';
import FoodItem from './FoodItem';
import { Link, Redirect } from 'react-router-dom';
import FoodAddForm from './FoodAddForm';
import UserFoodItem from './UserFoodItem';




class FoodList extends Component {
    constructor() {
        super();
        this.state = {
            foodList: [],    
            user: {
                today: [
                    {
                        foodConsumed: {}
                    }
                ],
            },
            }      
        }
    componentWillMount() {
        this._getFoodItems();
        this._getUserData();
    }
    _getFoodItems = () => {
        axios.get('/api/food')
        .then(res => {
            console.log(res.data);
            this.setState({foodList: res.data})
            console.log("FoodList Array:")
            console.log(this.state.foodList);
        })
        
        console.log(this.state.user);
    }
    _getUserData = () => {
        const userId = this.props.match.params.userId
        axios.get(`/api/user/${userId}`)
        .then(res => {
            console.log(res.data);
            this.setState({user: res.data})
            console.log("User Object")
            console.log(this.state.user);
        })
    }
    render() {
        const foodList = this.state.foodList
        console.log(foodList)
        const userFoodArray = this.state.user.today[0].foodConsumed
        console.log("ARRAY FROM STATE: " + userFoodArray.length)
        const userFoodComponent = userFoodArray.map((userFoodItem, i) => {
            return <UserFoodItem
                    {...userFoodItem}
                    key={i}
                    />;
        })
        const foodComponent = foodList.map((foodItem, i) => {
            return <FoodItem 
                {...foodItem}
                {...this.props}
                key={i}
                 />;
        })
        const userId = this.props.match.params.userId
        return (
            <div>
                <Link to={`/user/${userId}`}><button>Return to Dashboard</button></Link>
                <h1>Today's Food Items</h1>

                <h1>Available Food Items in Database</h1>
                {foodComponent}
                <FoodAddForm {...this.props} getFoodItems={this._getFoodItems}/>
            </div>
        );
    }
}

export default FoodList;