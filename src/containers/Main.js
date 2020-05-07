import React, { Component } from 'react';
import Table from '../components/Table';
import { Container, Row, Col } from 'reactstrap';
import Aux from '../hoc/Aux';;


class Main extends Component {

    state = {
        standings:[],
        fullStandingsData: [],
        topChallengers:[],
    }

    BASE_URL = process.env.REACT_APP_API_URL;

    componentDidMount() {
        fetch(`${this.BASE_URL}/scores/challengerWeeklyScores`)
        .then(res=>res.json())
        .then(data =>{
            this.setState({fullStandingsData: data});
        })
        fetch(`${this.BASE_URL}/teams/standings`)
        .then(res =>res.json())
        .then((data) => {
            data[0].owner = data[0].owner + " 🥇";
            data[1].owner = data[1].owner + " 🥈";
            data[2].owner = data[2].owner + " 🥉";
            this.setState({standings: data})
        })
        .catch(console.log)
        fetch(`${this.BASE_URL}/challengers`)
        .then(res =>res.json())
        .then((data) => {
            const topFive = data.sort((a,b)=>(b.points > a.points ? 1: -1)).slice(0,5)
            topFive[0].name = topFive[0].name + " 👑";
            this.setState({topChallengers: topFive})
        })
        .catch(console.log)
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

    standingsColumns = [
        {title: "Team", field: "name", hozAlign: 'left'},
        {title: "Owner", field: "owner", hozAlign: 'left'},
        {title: "Total", field: "points", hozAlign: 'center'},
    ];

    topChallengerColumns = [
        {title: "Challenger", field: "name", hozAlign: 'left'},
        {title: "Points", field: "points", hozAlign: 'center'},
    ];

    render() {

        return (
            <Aux>
                <Container style={{padding: 50}}>
                    <Row>
                        <Col>
                        <Table
                        title='Standings'
                        columns={this.standingsColumns}
                        data={this.state.standings}
                        />
                        </Col>
                        <Col>
                        <Table
                        title='Top 5 Challengers'
                        columns={this.topChallengerColumns}
                        data={this.state.topChallengers}
                        /> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Table
                        title='Full Challenger Standings'
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