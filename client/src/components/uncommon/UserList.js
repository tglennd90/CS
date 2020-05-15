import React, { Component } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';

class UserList extends Component {
    state = {
        users: []
    }

    componentDidMount = () => {
        this.getUserList();
    };
    
    getUserList = () => {
        axios.get('/')
            .then((response) => {
                const data = response.data;
                this.setState({ users: data });
                console.log('Success getting data');
                console.log(this.state.users)
            })
            .catch(() => {
                console.log('Error getting data');
            });
    };

    displayUserList = (users) => {
        if (!users.length) return null;

        return users.map((user, index) => (
            <div key={index}>
                <p>
                    Name: {user.name},  
                    Username: {user.userName}, 
                    Password: {user.password}, 
                    Email: {user.email}
                </p>
            </div>
        ));
    };

    render() { 
        return(
            <div>
                <Container>
                    {this.displayUserList(this.state.users)}
                </Container>
            </div>
        ) 
    };

};

export default UserList;
