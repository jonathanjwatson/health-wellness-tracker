import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Link, Redirect } from 'react-router-dom';
import UserDashboard from "./UserDashboard";


const AlignCenter = styled.div`
    text-align:center;
    margin:auto;
`

class Home extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            user: [],
            id: '',
            email: '',
            password: '',
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
        axios.post(`/api/user/email/${email}`)
        .then(res => {
            console.log("Successfully Inputed Email");
            console.log(res.data);
            console.log(res.data.password);
            if (password === res.data.password){
                console.log("Password matches")
                this.setState({ redirect: true, id: res.data._id, user: res.data })
            } else {
                console.log("Password don't match")
            }
        })
    }
    render() {
        if (this.state.redirect) {
             return <Redirect to={{
                 pathname: `/user/${this.state.id}`,
                 state: {user: this.state.user}
                }}
                 />;
        } else {
                    return (
            <div className="row">
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

                    <button className="primary" onClick={this._logIn}>Login</button>
                </div>

                </form>

                <div className="userList">
                {this.state.users.map((user, i) => (
                    <div key={i}>
                        <Link to={`/user/${user._id}`}>
                        {user.firstName}'s Tracker
                        </Link>
                    </div>
                ))}
                </div>
            </AlignCenter>
            </div>
        );
        }
    }
}

export default Home;