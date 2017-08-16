import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import axios from 'axios';

class UserFoodItem extends Component {
constructor() {
        super();
        this.state = {
            showEdit: false,
            foodItem: {
                name: '',
                calories: 0
            }
        }    
        }
    componentWillMount() {
        const foodItem = this.props;
        this.setState({foodItem})
    }
    _removeFromDay = (e) => {
        const foodId = this.props._id;
        const userId = this.props.userId;
        console.log(`Tried to remove ${foodId}`)
        axios.delete(`/api/user/${userId}/food/${foodId}`)
        .then(res => {
            this.props.getUserData();
        })
        
    }
    _editFood = (e) => {
        const foodId = this.props._id;
        const userId = this.props.userId;
        console.log(`You want to edit food: ${foodId}`)
        const showEdit = !this.state.showEdit;
        this.setState({showEdit})
        
    }
    _updateFood = (e) => {
        e.preventDefault();
        const foodId = this.props._id;
        const userId = this.props.userId;
        const payload = this.state.foodItem;
        console.log(`User ID: ${userId}`)
        console.log(`You want to update food: ${foodId}`)
        axios.put(`/api/user/${userId}/editFoodItem/${foodId}`, payload)
        .then((res) => {
            this.props.getUserData();
            const showEdit = !this.state.showEdit;
            this.setState({showEdit})
        }).catch(err => console.log(err));
        
    }
    _handleChange = (e) => {
        const attributeName = e.target.name;;
        const attributeValue = e.target.value;
        const foodItem = {...this.state.foodItem};
        foodItem[attributeName] = attributeValue;
        this.setState({ foodItem })
    }
    render() {
        return (
            <div>
                <p>{this.props.name} : {this.props.calories}  : {this.props._id}
                <button onClick={this._removeFromDay}>Remove from my day</button>
                </p>
                <p>
                <button onClick={this._editFood}>Edit Item</button>
                </p>
                <div>
                    {this.state.showEdit ? 
                                <div>
                            <form onSubmit={this._updateFood}>
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
                            <button>Update Food</button>
                            </form>
                        </div>
                    : null}
                </div>
            </div>
        );
    }
}

export default UserFoodItem;