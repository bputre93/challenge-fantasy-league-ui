import React, { Component } from 'react';
import Team from '../components/Team/Team';
import Table from '../components/Table/Table'
import Aux from '../hoc/Aux';
import { Container, Row, Col } from 'react-bootstrap';

class Teams extends Component {

    state = {
        teams: [],
        draftData: []
    }

    BASE_URL = process.env.REACT_APP_API_URL;

    componentDidMount() {
        fetch(`${this.BASE_URL}/teams`)
        .then(res => res.json())
        .then(data => {
            const draftData = [];
            data.forEach(team => {
                const owner = team.owner
                team.challengers.forEach(chall=>{
                    if(chall.redSkulls !== null || 0){
                        let i =0
                        for(i = 0; i < chall.redSkulls; i++){
                            chall.name = chall.name +'💀'
                        }
                    }
                    if (chall.finals) {
                        chall.name = chall.name +'🏁'
                    }
                    draftData.push({name: chall.name, owner: owner, draftPosition: chall.draftPosition})
                })
            })
            this.setState({teams: data});
            this.setState({draftData: draftData});
        })
    }

    teamColumns = [
        {title: "Challenger", field: "name", hozAlign: 'center', width: 125},
        {title: "Points", field: "points", hozAlign: 'center'},
        {title: "Alive", field: "alive", hozAlign: 'center', formatter: "tickCross"}
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
            team.challengers.forEach(chall=>{
                chall.alive =  !chall.eliminated;
            })
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
            <div style={{height:'95vh', overflow: 'auto'}}>
            <Container fluid style={{padding: 50}}>
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
            </div>
        </Aux>
        )
    }
}

export default Teams;