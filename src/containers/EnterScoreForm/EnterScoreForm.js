import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Aux from '../../hoc/Aux'
import axios from 'axios';
import './EnterScoreForm.css'

class EnterScoreForm extends Component {

    state = {
        challengerList: [],
        ruleList: [],
        submission: {
            week: null,
            challenger: null,
            rule: null
        }
    }
    BASE_URL = process.env.REACT_APP_API_URL;

    componentDidMount(){
        fetch(`${this.BASE_URL}/challengers`)
        .then(res=>res.json())
        .then(data=>{
            const challs = data.map(chall=> 
                {
                    return {
                        id: chall.id,
                        name: chall.name
                    }
            })
            this.setState({challengerList: challs})
        })
        fetch(`${this.BASE_URL}/scoring`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({ruleList: data})
        })
    }

    updateEntry = (key, id) => {
        const submission = {...this.state.submission};
        submission[key] = parseInt(id);
        this.setState({submission: submission});
    }

    submitEntry =()=> {
        const submission = {...this.state.submission};
        const isNotNull = Object.values(submission).every(x => (x !== null && x !== ''));
        if (isNotNull){
            axios.post(`${this.BASE_URL}/scores`, submission)
            .then(res=>{
                if(res.status === 201){
                    alert('Score successfully entered!')
                }
            }, err =>{
                console.log(err);
                alert('Something went wrong. Please try again.')
            }
            )
        } else if(!isNotNull){
            alert('One or more fields is null');
        }
    }
    
    render(){

        const challengerOptions = this.state.challengerList.map(chall =>{
            return (
            <option key={chall.id} value={chall.id}>{chall.name}</option>
            )
        })

        const ruleOptions = this.state.ruleList.map(rule=>{
            return (
            <option key={rule.id} value={rule.id}>{rule.type}</option>
            )
        })

        return (
            <Aux>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId='week'>
                                <Form.Label>Week</Form.Label>
                                <Form.Control type='number'
                                onChange={(e)=>{this.updateEntry('week',e.target.value)}}/>
                            </Form.Group>
                         </Col>
                        <Col>
                            <Form.Group controlId='challenger'>
                                <Form.Label>Challenger</Form.Label>
                                <Form.Control as='select'
                                onChange={(e)=>this.updateEntry('challenger', e.target.value)}>
                                    {challengerOptions}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId='rule'>
                                <Form.Label>Score Type</Form.Label>
                                <Form.Control as='select'
                                onChange={(e)=>this.updateEntry('rule', e.target.value)}>
                                    {ruleOptions}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Button
                    variant='dark'
                    size='lg'
                    block
                    onClick={(e)=>{this.submitEntry()}}>Submit</Button>
                </Form>

            </Aux>

        )
    }
}

export default EnterScoreForm;