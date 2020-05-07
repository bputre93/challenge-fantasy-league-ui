import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Table from '../components/Table';

class Scoring extends Component {

    state = {
        rules: []
    };

    BASE_URL = process.env.REACT_APP_API_URL;

    componentDidMount() {
        fetch(`${this.BASE_URL}/scoring`)
        .then(res =>res.json())
        .then((data) => {
            this.setState({rules: data})
        })
        .catch(console.log)
    }

    ruleColumns = [
        {title: "Rule", field: "type", hozAlign: 'left'},
        {title: "Points", field: "points", hozAlign: 'left'},
    ];

    render() {
        return (
            <Container style={{padding: 50}}>
                <Table
                data={this.state.rules}
                columns={this.ruleColumns}
                title="Scoring Rules" 
                />
            </Container>
                

        )
    }
}

export default Scoring;