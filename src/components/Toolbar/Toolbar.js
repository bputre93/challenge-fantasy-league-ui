import React from 'react';
import './Toolbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import thumbnail from '../../assets/challenge-trans-logo.png';
import { Container, Col, Row } from 'reactstrap';

const toolbar = (props) => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="/"><img src={thumbnail} width='150' height='50' alt="Home"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">   
            <Nav variant="pills" className="nav-item">
                <Container>
                    <Row>
                        <Col>
                            <Nav.Link href='/teams' exact={true}>Teams</Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link href='/stats' exact={true}>Statistics</Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link href='/scoring' exact={true}>Scoring</Nav.Link>
                        </Col>
                    </Row>
                </Container>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default toolbar;