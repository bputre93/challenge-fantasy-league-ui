import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Table from '../components/Table';

class Scoring extends Component {

    state = {
        rules: []
    };

    componentDidMount() {
        fetch('http://localhost:3000/scoring')
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
            <Container>
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