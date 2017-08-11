import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const AlignCenter = styled.div`
    text-align:center;
    margin:auto;
`

class Home extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            redirect: false,
            email: '',
            password: '',
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
    
    _handleChangeEmail = (e) => {
        this.setState({ email: e.target.value});
    }
    _handleChangePassword = (e) => {
        this.setState({ password: e.target.value});
    }
    _logIn = (e) => {
        e.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        axios.get(`/api/game`)
        .then(res => {

        })
    }
    render() {
        return (
            <AlignCenter>
                <form>
                <div>
                <input 
                    type="text" 
                    onChange={this._handleChangeEmail} 
                    value={this.state.email} 
                    placeholder="Email Address"
                />
                </div>
                <div>
                <input 
                    type="text" 
                    onChange={this._handleChangePassword} 
                    value={this.state.password} 
                    placeholder="Password"
                />
                </div>
                <div>
                    <button>Create Account</button>
                    <button>Login</button>
                </div>

                </form>


                {this.state.users.map((user, i) => (
                    <div key={i}>
                        <Link to={`/user/${user._id}`}>
                        {user.firstName}'s Tracker
                        </Link>
                    </div>
                ))}
            </AlignCenter>
        );
    }
}

export default Home;