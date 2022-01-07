import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const navbarSryle = {
    backgroundColor: '#6610F2'
}

const Header = ({ title }) => {
    return (
        <Navbar style={navbarSryle} variant="dark">
            <Container>
                <Navbar.Brand href="/">{title}</Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Header;
