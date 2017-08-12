import React, { Component } from 'react';
import axios from 'axios';
import FoodItem from './FoodItem';




class FoodList extends Component {
    constructor() {
        super();
        this.state = {
            foodList: [],            
        }
    }
    componentWillMount() {
        axios.get('/api/food')
        .then(res => {
            console.log(res.data);
            this.setState({foodList: res.data})
            console.log(this.state.food);
        })
    }

    render() {
        const foodList = this.state.foodList
        console.log(foodList)
        const foodComponent = foodList.map((foodItem, i) => {
            return <FoodItem 
                {...foodItem}
                key={i}
                 />;
        })
        return (
            <div>
                {foodComponent}
            </div>
        );
    }
}

export default FoodList;