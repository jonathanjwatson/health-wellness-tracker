import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import Days from './Days'
import Day from './Day'
import FoodList from './FoodList'

class UserDashboard extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                today: [],
            },
            servingsDesired: 0,
            servingsConsumed: 0,
            historicalDataDisplayed: false,
            foodDataDisplayed: false,
            redirect: false
            
        }
    }
    componentWillMount() {
        const id = this.props.match.params.userId
        axios.get(`/api/user/${id}`)
        .then(res => {
            this.setState({
                user: res.data, 
                servingsDesired: res.data.today[0].waterRatio[0].servingsDesired, 
                servingsConsumed: res.data.today[0].waterRatio[0].servingsConsumed,
                historicalDataDisplayed: false,
                redirect: false
            })
            // console.log(this.state.user);
            // console.log(this.state.servingsConsumed);
        })
        
    }
    _drinkWaterButton = () => {
        // console.log("You drank water!")
        // console.log(this.state.servingsConsumed);
        const waterConsumed = this.state.servingsConsumed;
        const id = this.props.match.params.userId;
        const servingsConsumed = this.state.user.today[0].waterRatio[0].servingsConsumed;
        this.setState({ servingsConsumed: waterConsumed + 1});
        axios.put(`/api/user/addNewServingConsumed/${id}`, {userId: this.state.user.id})
        .then(res => {
            // console.log("Successfully Updated Servings");
            // console.log(res.data);
        })
    }
    _showHistoricalData = () => {
        const historicalDataDisplayed = !this.state.historicalDataDisplayed;
        this.setState({historicalDataDisplayed})
    }
    _showFoodData = () => {
        const foodDataDisplayed = !this.state.foodDataDisplayed;
        this.setState({ redirect: true })
    }



    render() {
        if (this.state.redirect) {
             return <Redirect to={{
                 pathname: `/user/${this.state.user._id}/food`,
                 state: {user: this.state.user}
                }}
                 />;
        } else {

        return (
            <div className="row">
                <h1>Your User Dashbaord</h1>
                <h2>{this.state.user.firstName}</h2>
                <p>Servings Desired: {this.state.servingsDesired}</p>
                <p>Servings Consumed: {this.state.servingsConsumed}</p>
                <button onClick={this._drinkWaterButton}>I drank water!</button>
                <div>
                    <button className="secondary" onClick={this._showHistoricalData}>{this.state.historicalDataDisplayed ? 'Hide Historical Data' : 'Show Historical Data'}</button>
                </div>
                <div>
                    {this.state.historicalDataDisplayed ? <Days user={this.state.user} /> : null}
                </div>
                <div>
                    <button onClick={this._showFoodData}>Show Food</button>
                </div>

                
            </div>
        );
        }
    }
}

export default UserDashboard;