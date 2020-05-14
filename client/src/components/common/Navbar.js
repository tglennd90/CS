import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Navigation = () => {
    return(
        <div>
            <Navbar bg="success">
                <Container>
                    <Navbar.Brand href="#home">Citizen Service</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;