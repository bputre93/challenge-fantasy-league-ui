import React, { Component } from 'react';
import RuleInstanceChart from '../components/RuleInstanceChart';
import PointsByWeek from '../components/PointsByWeek';
import LineGraph from '../components/LineGraph';
import { Container, Row, Col } from 'reactstrap'


class Statistics extends Component {

    state = {
        runningScoreGraphData: []
    }

    BASE_URL = process.env.REACT_APP_API_URL;

    componentDidMount() {
        fetch(`${this.BASE_URL}/scores/teamTotalPointsByWeek`)
        .then(res=> res.json())
        .then(data=>{
            const graphData = data.map(el=> {
                const dataPoints = el.totals.map((num,i)=>{
                    const index = i +1
                    return {y: num, label: `${index}`}
                })
                return (
                    {
                        type:"spline",
                        name: el.owner,
                        showInLegend: true,
                        dataPoints: dataPoints
                    }
                )
            })
            console.log(graphData);
            this.setState({runningScoreGraphData: graphData})
        })
    }

    render() {

       const runningScoreOptions = {
            animationEnabled: true,
            theme: "dark2",
            title: {
                text: "Team Scores by Week"
              },
              axisY: {
                title: "Points",
            },
            axisX: {
                title: "Week",
            },
              data: this.state.runningScoreGraphData
        }
        return (
            <Container>
                <Row style={{padding: 10}}>
                    <Col md={12}>
                    <LineGraph options={runningScoreOptions}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <RuleInstanceChart/>
                    </Col>
                    <Col md={6}>
                    <PointsByWeek/>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Statistics;