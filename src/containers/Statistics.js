import React, { Component } from 'react';
import RuleInstanceChart from '../components/RuleInstanceChart';
import LineGraph from '../components/LineGraph';
import { Container, Row, Col } from 'reactstrap'


class Statistics extends Component {

    state = {
        runningScoreGraphData: [],
        weeklyPointsData: []
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
            this.setState({runningScoreGraphData: graphData})
        })
        fetch(`${this.BASE_URL}/scores`)
        .then(res=>res.json())
        .then(data =>{
            let dataPoints = []
            data.forEach(el => {
                const weekIndex = this.findObjectIndex(dataPoints,'label', el.week);
                if (weekIndex !== -1) {
                    dataPoints[weekIndex].y += el.rule.points;
                } else if (weekIndex === -1) {
                    dataPoints.push({label: el.week, x: el.week, y: 0})
                    const newWeek = dataPoints.length - 1;
                    dataPoints[newWeek].y += el.rule.points;
                }
            });
            dataPoints.sort((a,b)=> a.x - b.x)
            this.setState({weeklyPointsData: dataPoints})
        })
    }

    findObjectIndex(arr, attr, value) {
        for(var i = 0; i < arr.length; i += 1) {
            if(arr[i][attr] === value) {
                return i;
            }
        }
        return -1;
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

        const weeklyPointsOptions = {
            animationEnabled: true,
            theme: "dark2",
            title: {
                text: "Points Scored by Week"
              },
              axisY: {
				title: "Points",
            },
            axisX: {
				title: "Week",
			},
              data: [{				
                        type: "spline",
                        dataPoints: this.state.weeklyPointsData
               }]
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
                    <LineGraph options={weeklyPointsOptions}/>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Statistics;