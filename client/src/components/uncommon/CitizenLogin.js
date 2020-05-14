import React, { Component } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

class CitizenLogin extends Component {
    state = {
        name: '',
        userName: '',
        password: '',
        email: '',
    }

    handleChange = ({ target }) => {
        const { name, value } = target;

        this.setState({
            [name]: value
        })
    };
    
    handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            name: this.state.name,
            userName: 'example',
            password: 'example',
            email: this.state.email
        };

        axios({
            url: '/cs/save',
            method: 'POST',
            data: payload
        })
            .then((result) => {
                console.log('Data sent successfully!');
                this.resetUserInputs();
            })
            .catch(() => {
                console.log('Data was not sent.')
            });
    };

    resetUserInputs = () => {
        this.setState({
            name: '',
            userName: '',
            password: '',
            email: ''
        });
    };

    render() {

        console.log('State: ', this.state);

        return(
            <div>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formGroupName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>
                        {/* <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group> */}
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="name@example.com" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>
                        <Button type="submit">Login</Button>
                    </Form>
                </Container>
            </div>
        );
    }
};

export default CitizenLogin;