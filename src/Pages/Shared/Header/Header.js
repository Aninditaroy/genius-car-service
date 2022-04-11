import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo-black.png';
const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light" className='fixed-top'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            height='40'
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#experts">Experts</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;