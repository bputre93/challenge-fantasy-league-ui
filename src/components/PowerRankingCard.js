import React from 'react'
import Card from 'react-bootstrap/Card'
import { ListGroup, Row, Container, Col } from 'react-bootstrap';

const rankingCard = (props) => {

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
        margin: '6px',
        padding: '4px'
    }

    const bodyStyle = {
        color: 'white'
    }

    const listGroupStyle = {
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
                        <Card.Title style={titleStyle}>#{props.powerRank} - {props.teamName}</Card.Title>
                        <ListGroup style={listGroupStyle} variant='flush'>
                            <Container>
                                <Row>
                                    <ListGroup.Item style={listItemStyle}><b>Owner:</b> {props.owner}</ListGroup.Item>
                                </Row>
                                <Row>
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

export default rankingCard;