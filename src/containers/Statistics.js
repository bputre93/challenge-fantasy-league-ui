import React, { Component } from 'react';
import RuleInstanceChart from '../components/RuleInstanceChart';
import PointsByWeek from '../components/PointsByWeek';
import LineGraph from '../components/LineGraph';
import { Container, Row, Col } from 'reactstrap'


class Statistics extends Component {

    state = {
        runningScoreGraphData: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/scores/teamTotalPointsByWeek')
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
            theme: "light2",
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
                <Row>
                    <Col md={12}>
                    <LineGraph options={runningScoreOptions}/>
                    <RuleInstanceChart/>
                    <PointsByWeek/>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Statistics;