import React, { Component } from 'react';
import axios from 'axios';
import FoodItem from './FoodItem';
import { Link } from 'react-router-dom';
import FoodAddForm from './FoodAddForm';
import UserFoodList from './UserFoodList';




class FoodList extends Component {
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
            foodList: [],    
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
            this.setState({user: res.data})
        })
    }

    render() {
        const foodList = this.state.foodList
        console.log(foodList)
        const foodComponent = foodList.map((foodItem, i) => {
            return <FoodItem 
                {...foodItem}
                {...this.props}
                getUserData={this._getUserData}
                key={i}
                 />;
        })
        const userId = this.props.match.params.userId
        return (
            <div className="userDashboard">
                <div>
                    <div className="header">
                <Link to={`/user/${userId}`}><button className="primary">Return to Dashboard</button></Link>
                </div>
                <h1>Today's Food Items</h1>
                <UserFoodList user={this.state.user} userId={userId} getUserData={this._getUserData}/>
                <h1>Available Food Items in Database</h1>
                </div>
                <div className="wholeFoodItem">
                {foodComponent}
                </div>
                <FoodAddForm {...this.props} getFoodItems={this._getFoodItems}/>
            </div>
        );
    }
}

export default FoodList;