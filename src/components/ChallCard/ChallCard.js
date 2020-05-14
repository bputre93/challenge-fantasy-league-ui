import React from 'react';
import Card from 'react-bootstrap/Card'
import { ListGroup, Row, Container, Col } from 'react-bootstrap';
import './ChallCard.css'

const cardStyle = {
    margin: '4px',
    borderRadius: '4px',
    backgroundColor: '#e8e3e3'
}

const titleStyle = {
    fontSize: 'x-large',
    color: 'black',
}

const bodyStyle = {

}

const listGroupStyle = {
    padding: '4px',
    backgroundColor: 'inherit'
}

const listItemStyle = {
    fontSize: 'small',
    backgroundColor: 'inherit'
}


const challCard = (props) => {
    return (
            <Container>
                <Row>
                    <Col lg={12}>
                        <Card style={cardStyle}>
                            <div style={{display: 'flex', flex:'1 1 auto', margin:'2px'}}>
                            <img src={props.imageUrl} alt='chall-pic' height='200' width='150'/>
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
                                            <ListGroup.Item style={listItemStyle}><b>Sex:</b> {props.sex}</ListGroup.Item>
                                        </Col>
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