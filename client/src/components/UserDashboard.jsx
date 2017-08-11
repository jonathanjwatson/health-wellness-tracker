import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'
import Day from './Day'

class UserDashboard extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                today: [],
            },
            servingsDesired: 0,
            servingsConsumed: 0,
            
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
        this.setState({ servingsConsumed: waterConsumed + 1});
        axios.put(`/api/user/addNewServingConsumed/${id}`, {userId: this.state.user.id})
        .then(res => {
            // console.log("Successfully Updated Servings");
            // console.log(res.data);
        })
    }


    render() {
        const days = this.state.user.today
        const dateComponents = days.map((day, i) => {
            return <Day 
                {...day}
                key={i}
                 />;
        })

        return (
            <div>
                <h1>Your User Dashbaord</h1>
                <h2>{this.state.user.firstName}</h2>
                <div>
                    { dateComponents }
                </div>
                <p>Servings Desired: {this.state.servingsDesired}</p>
                <p>Servings Consumed: {this.state.servingsConsumed}</p>
                <button onClick={this._drinkWaterButton}>I drank water!</button>
            </div>
        );
    }
}

export default UserDashboard;