import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            redirect: false
        }
    }
    componentWillMount() {
        axios.get('/api/user')
        .then(res => {
            console.log(res.data);
            this.setState({users: res.data})
            console.log(this.state.users);
        })
    }
    render() {
        return (
            <div>
                {this.state.users.map((user, i) => (
                    <div key={i}>
                        <Link to={`/user/${user._id}`}>
                        {user.firstName}'s Tracker
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default Home;