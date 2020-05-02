import React, { Component } from 'react';
import Team from '../components/Team/Team';
import Table from '../components/Table'
import Aux from '../hoc/Aux';
import { Container, Row, Col } from 'react-bootstrap';

class Teams extends Component {

    state = {
        teams: [],
        draftData: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/teams')
        .then(res => res.json())
        .then(data => {
            this.setState({teams: data})
            const draftData = [];
            data.forEach(team => {
                const owner = team.owner
                team.challengers.forEach(chall=>{
                    console.log(chall)
                    draftData.push({name: chall.name, owner: owner, draftPosition: chall.draftPosition})
                })
            })
            this.setState({draftData: draftData});
        })
    }

    teamColumns = [
        {title: "Challenger", field: "name", hozAlign: 'center'},
        {title: "Points", field: "points", hozAlign: 'center'},
        {title: "Alive", field: "eliminated", hozAlign: 'center', formatter: "tickCross"}
    ]

    draftColumns = [
        {title: "Pick", field: "draftPosition", hozAlign: 'center', sorter:'number'},
        {title: "Owner", field: "owner", hozAlign: 'center'},
        {title: "Selection", field: "name", hozAlign: 'center'}
    ]

    draftTableOptions = {
        "initialSort": [
            {column: "draftPosition", dir: "asc"},
        ]
    }


    render() {

        const teamCards = this.state.teams.map(team => {
            return (
                    <Col md={6} key={team.id}>
                        <Team
                        owner={team.owner}
                        teamName={team.name}
                        columns={this.teamColumns}
                        data={team.challengers}
                        />
                        <br></br>
                    </Col>

            )
        })

        return (
        <Aux>
            <Container fluid>
                <Col md={4}>
                    <Table
                    title="Draft Recap"
                    columns={this.draftColumns}
                    data={this.state.draftData}
                    options={this.draftTableOptions}
                    />
                </Col>
                <Col md={8}>
                    <Container fluid>
                        <Row>
                        {teamCards}
                        </Row>
                    </Container>
                </Col>
            </Container>
        </Aux>
        )
    }
}

export default Teams;