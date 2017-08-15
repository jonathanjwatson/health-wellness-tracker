import React, { Component } from 'react';
import axios from 'axios';

class FoodAddForm extends Component {

    constructor() {
        super();
        this.state = {
            foodItem: {
                name: '',
                calories: 0
            }
        }
    }
    _handleChange = (e) => {
        const attributeName = e.target.name;;
        const attributeValue = e.target.value;
        const foodItem = {...this.state.foodItem};
        foodItem[attributeName] = attributeValue;
        this.setState({ foodItem })
    }
    _handleSubmit = (e) => {
        e.preventDefault();
        const payload = this.state;
        axios.post(`/api/food/create`, payload)
        .then((res) => {
            console.log("success")
            this.props.getFoodItems();
            this.setState({foodItem: {name: '', calories: 0}})
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                    <label htmlFor="name">Food Name</label>
                        <input 
                            type="text" 
                            onChange={this._handleChange} 
                            value={this.state.foodItem.name} 
                            name="name"
                            placeholder="Food Name"
                        />
                <label htmlFor="calories">Food Calories</label>
                        <input 
                            type="text" 
                            onChange={this._handleChange} 
                            value={this.state.foodItem.calories} 
                            name="calories"
                            placeholder="Food Calories"
                        />
                <button>Add new Food to Database</button>
                </form>
            </div>
        );
    }
}

export default FoodAddForm;