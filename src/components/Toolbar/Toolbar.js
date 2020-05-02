import React from 'react';
import './Toolbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const toolbar = (props) => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Challenge Fantasy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">   
            <Nav>
                <Nav.Link href='/teams' exact={true}>Teams</Nav.Link>
                <Nav.Link href='/stats' exact={true}>Statistics</Nav.Link>
                <Nav.Link href='/scoring' exact={true}>Scoring</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default toolbar;