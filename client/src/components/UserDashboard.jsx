import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom'

class UserDashboard extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            servingsDesired: 0,
            servingsConsumed: 0
        }
    }
    componentWillMount() {
        const id = this.props.match.params.userId
        axios.get(`/api/user/${id}`)
        .then(res => {
            console.log(res.data);
            this.setState({user: res.data})
            this.setState({servingsDesired: res.data.today[0].waterRatio[0].servingsDesired})
            this.setState({servingsConsumed: res.data.today[0].waterRatio[0].servingsConsumed})
            console.log(this.state.user);
            console.log("This is my water Ratio")
            console.log(this.state.user.today[0].waterRatio[0].servingsDesired)
        })
    }

    render() {
        return (
            <div>
                <h1>Your User Dashbaord</h1>
                <h2>{this.state.user.firstName}</h2>
                <h3>Today</h3>
                <p>Servings Desired: {this.state.servingsDesired}</p>
                <p>Servings Consumed: {this.state.servingsConsumed}</p>
                <button>I drank water!</button>
            </div>
        );
    }
}

export default UserDashboard;