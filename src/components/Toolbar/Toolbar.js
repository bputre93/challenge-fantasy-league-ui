import React from 'react';
import './Toolbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import thumbnail from '../../assets/challenge-trans-logo.png';
import { Container, Col, Row } from 'reactstrap';

const toolbar = (props) => (
    <Navbar className="color-navbar" collapseOnSelect expand="lg" /*bg="dark"*/ variant="dark" sticky="top">
        <Navbar.Brand href="/"><img src={thumbnail} width='150' height='50' alt="Home"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">   
            <Nav variant="pills" className="nav-item">
                <Container>
                    <Row>
                        <Col>
                            <Nav.Link href='/teams'>Teams</Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link href='/challengers'>Challengers</Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link href='/stats'>Stats</Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link href='/recaps'>Recaps</Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link href='/rankings'>Rankings</Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link href='/scoring'>Scoring</Nav.Link>
                        </Col>
                    </Row>
                </Container>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default toolbar;