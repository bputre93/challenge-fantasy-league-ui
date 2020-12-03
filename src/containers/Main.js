import React, { Component } from 'react';
import Table from '../components/Table/Table';
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
            data.forEach(ch =>{
                if(ch.redSkulls >= 1){
                    ch.name = ch.name + '💀';
                }
            })
            const topFive = data.sort((a,b)=>(b.points > a.points ? 1: -1)).slice(0,5)
            topFive[0].name = topFive[0].name + " 👑";
            this.setState({topChallengers: topFive})
        })
        .catch(console.log)
    }

    fullStandingsColumns = [
        {title: "Challenger", field: "challenger", hozAlign: 'left', width: 125},
        {title: "1", field: "week1", hozAlign: 'left'},
        {title: "2", field: "week2", hozAlign: 'left'},
        {title: "3", field: "week3", hozAlign: 'left'},
        {title: "4", field: "week4", hozAlign: 'left'},
        {title: "5", field: "week5", hozAlign: 'left'},
        {title: "6", field: "week6", hozAlign: 'left'},
        {title: "7", field: "week7", hozAlign: 'left'},
        {title: "8", field: "week8", hozAlign: 'left'},
        {title: "9", field: "week9", hozAlign: 'left'},
        {title: "10", field: "week10", hozAlign: 'left'},
        {title: "11", field: "week11", hozAlign: 'left'},
        {title: "12", field: "week12", hozAlign: 'left'},
        {title: "13", field: "week13", hozAlign: 'left'},
        {title: "14", field: "week14", hozAlign: 'left'},
        {title: "15", field: "week15", hozAlign: 'left'},
        {title: "16", field: "week16", hozAlign: 'left'},
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
        {title: "Total", field: "points", hozAlign: 'center', width: 100},
    ];

    topChallengerColumns = [
        {title: "Challenger", field: "name", hozAlign: 'left'},
        {title: "Points", field: "points", hozAlign: 'center'},
    ];

    render() {

        return (
            <Aux>
                <div style={{height:'95vh', overflow: 'auto'}}>
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
                </div>
            </Aux>

        )
    }
}

export default Main;