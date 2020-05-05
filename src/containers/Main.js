import React, { Component } from 'react';
import TeamStandings from '../components/TeamStandings/TeamStandings';
import TopChallengers from '../components/TopChallengers';
import Table from '../components/Table';
import { Container, Row, Col } from 'reactstrap';
import Aux from '../hoc/Aux';;


class Main extends Component {

    state = {
        fullStandingsData: [],
    }

    componentDidMount() {
        fetch('http://localhost:3000/scores/challengerWeeklyScores')
        .then(res=>res.json())
        .then(data =>{
            this.setState({fullStandingsData: data});
        })
    }

    fullStandingsColumns = [
        {title: "Challenger", field: "challenger", hozAlign: 'left'},
        {title: "Wk 1", field: "week1", hozAlign: 'left'},
        {title: "Wk 2", field: "week2", hozAlign: 'left'},
        {title: "Wk 3", field: "week3", hozAlign: 'left'},
        {title: "Wk 4", field: "week4", hozAlign: 'left'},
        {title: "Wk 5", field: "week5", hozAlign: 'left'},
        {title: "Wk 6", field: "week6", hozAlign: 'left'},
        {title: "Wk 7", field: "week7", hozAlign: 'left'},
        {title: "Wk 8", field: "week8", hozAlign: 'left'},
        {title: "Wk 9", field: "week9", hozAlign: 'left'},
        {title: "Wk 10", field: "week10", hozAlign: 'left'},
        {title: "Total", field: "total", hozAlign: 'left', sorter: "number", bottomCalc: 'sum'},
    ]

    fullStandingsOptions = {
        "initialSort": [
            {column: "total", dir: "desc"},
        ]
    }

    render() {
        return (
            <Aux>
                <Container>
                    <Row>
                        <Col>
                        <TeamStandings/>
                        </Col>
                        <Col>
                        <TopChallengers/> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h2>Full Challenger Standings</h2>
                        <Table
                        columns={this.fullStandingsColumns}
                        data={this.state.fullStandingsData}
                        options={this.fullStandingsOptions}
                        />
                        </Col>
                    </Row>
                </Container> 

            </Aux>

        )
    }
}

export default Main;