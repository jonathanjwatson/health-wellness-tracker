import React, { Component } from 'react';
import axios from 'axios';
import FoodItem from './FoodItem';
import { Link, Redirect } from 'react-router-dom';
import FoodAddForm from './FoodAddForm';
import UserFoodList from './UserFoodList';




class FoodList extends Component {
    constructor() {
        super();
        this.state = {
            foodList: [],    
            }      
        }
    componentWillMount() {
        this._getFoodItems();
        // this._getUserData();
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

    render() {
        const foodList = this.state.foodList
        console.log(foodList)
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
                <UserFoodList userId={userId}/>
                <h1>Available Food Items in Database</h1>
                {foodComponent}
                <FoodAddForm {...this.props} getFoodItems={this._getFoodItems}/>
            </div>
        );
    }
}

export default FoodList;