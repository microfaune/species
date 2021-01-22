import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/logos/logoWazo2.png'
import './Navbar.css'

function NavBar () {
    return (
        <Navbar className="navbar">
            <Navbar.Brand href="https://wazo.fr">
                <img
                    alt=""
                    src={logo}
                    width="50"
                    height="71"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Brand href="/"><h1>BirdMania</h1></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link className="link" href="/about-the-app">About the app</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
