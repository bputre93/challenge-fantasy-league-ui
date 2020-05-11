import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Table from '../components/Table/Table';
import EnterScoreForm from './EnterScoreForm/EnterScoreForm';
import Aux from '../hoc/Aux';
import Mousetrap from 'mousetrap'

class Scoring extends Component {

    state = {
        rules: [],
        showForm: false
    };

    BASE_URL = process.env.REACT_APP_API_URL;

    componentDidMount() {
        fetch(`${this.BASE_URL}/scoring`)
        .then(res =>res.json())
        .then((data) => {
            this.setState({rules: data})
        })
        .catch(console.log)
        Mousetrap.bind('t e e j',()=>{
            this.setState({showForm: true})
        })
    }

    

    ruleColumns = [
        {title: "Rule", field: "type", hozAlign: 'left'},
        {title: "Points", field: "points", hozAlign: 'left'},
    ];

    render() {

        return (
            <Aux>
                <Container style={{padding: 50}}>
                    <Table
                    data={this.state.rules}
                    columns={this.ruleColumns}
                    title="Scoring Rules" 
                    />
                </Container>
                {this.state.showForm ? <EnterScoreForm/> : null}
            </Aux>
        )
    }
}

export default Scoring;