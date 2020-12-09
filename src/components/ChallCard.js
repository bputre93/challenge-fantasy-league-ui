import React from 'react';
import Card from 'react-bootstrap/Card'
import { ListGroup, Row, Container, Col } from 'react-bootstrap';

const cardStyle = {
    margin: '4px',
    borderRadius: '4px',
    backgroundColor: 'black',
    opacity: 0.9    
}

const titleStyle = {
    fontSize: 'x-large',
    color: 'white',
}

const bodyStyle = {
    color: 'white'
}

const listGroupStyle = {
    padding: '4px',
    backgroundColor: 'inherit'
}

const listItemStyle = {
    fontSize: 'medium',
    backgroundColor: 'inherit'
}


const challCard = (props) => {
    return (
            <Container>
                <Row>
                    <Col lg={12}>
                        <Card style={cardStyle}>
                            <div style={{display: 'flex', flex:'1 1 auto', margin:'2px'}}>
                            <img src={props.imageUrl} alt='chall-pic' height='225' width='200'/>
                            <Card.Body style={bodyStyle}>
                                <Card.Title style={titleStyle}>{props.name}</Card.Title>
                                <ListGroup style={listGroupStyle} variant='flush'>
                                    <Container>
                                        <Col md={6}>
                                            <ListGroup.Item style={listItemStyle}><b>Points:</b> {props.points}</ListGroup.Item>
                                            <ListGroup.Item style={listItemStyle}><b>Red Skulls:</b> {props.redSkulls}</ListGroup.Item>
                                            <ListGroup.Item style={listItemStyle}><b>Status:</b> {props.status}</ListGroup.Item>
                                        </Col>
                                        <Col md={6}>
                                            <ListGroup.Item style={listItemStyle}><b>Seasons:</b> {props.seasons}</ListGroup.Item>
                                            <ListGroup.Item style={listItemStyle}><b>Original Show:</b> {props.originalShow}</ListGroup.Item>
                                            <ListGroup.Item style={listItemStyle}><b>Instagram:</b> <a href={props.instagramUrl} target="_blank" rel="noopener noreferrer" style={{color: "white"}}>{props.instagramHandle}</a></ListGroup.Item>
                                        </Col>
                                        <Row style={{paddingLeft: '32px'}}>
                                            <ListGroup.Item style={listItemStyle}><b>Fun Fact: </b>{props.funFact}</ListGroup.Item>
                                        </Row>
                                    </Container>
                                </ListGroup>
                            </Card.Body>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

    )
}

export default challCard;