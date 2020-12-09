import React from 'react'
import Card from 'react-bootstrap/Card'
import { ListGroup, Row, Container, Col } from 'react-bootstrap';

const recapCard = (props) => {

    const cardStyle = {
        margin: '6px',
        borderRadius: '4px',
        backgroundColor: 'black',
        opacity: 0.9,
        padding: '6px',    
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
        fontSize: 'large',
        backgroundColor: 'inherit'
    }

    const writeUpStyle = {
        fontSize: 'medium',
        backgroundColor: 'inherit'
    }

    return (
        <Container>
        <Row>
            <Col lg={12}>
                <Card style={cardStyle}>
                    <Card.Body style={bodyStyle}>
                        <Card.Title style={titleStyle}>Week {props.week} - {props.episodeTitle}</Card.Title>
                        <ListGroup style={listGroupStyle} variant='flush'>
                            <Container>
                                <Col md={4}>
                                    <ListGroup.Item style={listItemStyle}><b>MVP:</b> {props.mvp}</ListGroup.Item>
                                </Col>
                                <Col md={4}>
                                    <ListGroup.Item style={listItemStyle}><b>Skulls:</b> {props.skulls}</ListGroup.Item>
                                </Col>
                                <Col md={4}>
                                    <ListGroup.Item style={listItemStyle}><b>Eliminations:</b> {props.eliminations}</ListGroup.Item>
                                </Col>
                                <Row style={{paddingLeft: '32px'}}>
                                    <ListGroup.Item style={writeUpStyle}>{props.writeup}</ListGroup.Item>
                                </Row>
                            </Container>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    )
}

export default recapCard;