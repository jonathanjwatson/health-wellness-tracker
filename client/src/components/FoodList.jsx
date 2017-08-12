import React, { Component } from 'react';
import axios from 'axios';




class FoodList extends Component {
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
                This is a list of my food
            </div>
        );
    }
}

export default FoodList;