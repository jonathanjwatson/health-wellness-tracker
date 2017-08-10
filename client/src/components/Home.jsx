import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            redirect: false
        }
    }
    componentWillMount() {
        axios.get('/api/user')
        .then(res => {
            console.log(res.data);
            this.setState({user: res.data})
            
        })
    }
    render() {
        return (
            <div>
                Welcome to the HomePage
            </div>
        );
    }
}

export default Home;