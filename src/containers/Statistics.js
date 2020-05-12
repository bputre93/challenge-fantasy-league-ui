import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Chart from '../components/Chart';


class Statistics extends Component {

    state = {
        runningScoreGraphData: [],
        weeklyPointsData: [],
        pointsbySexData: [],
        ruleData: []
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
        fetch(`${this.BASE_URL}/scores/countsByRule`)
        .then(res=>res.json())
        .then(data =>{
            data.forEach(el => {
                el.count = parseInt(el.count)
            });
            const ruleData = data.map(el=> {
                return {
                    label: el.type,
                    y: el.count
                }
            })
            this.setState({ruleData: ruleData})
        })
        fetch(`${this.BASE_URL}/challengers`)
        .then(res=>res.json())
        .then(data => {
            let male = 0;
            let female = 0;
            data.forEach(chall => {
                if(chall.sex === 'female'){
                    female += chall.points
                } else if(chall.sex === 'male'){
                    male += chall.points
                }
            })
            const malePerc = male/(male+female)*100
            const femalePerc = female/(male+female)*100
            const percData = [
                {y: malePerc, name: 'Male'},
                {y: femalePerc, name: 'Female'}
            ]
            this.setState({pointsbySexData: percData})
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

        const pointsBySexOptions = {
            animationEnabled: true,
            theme: 'dark2',
            title: {
                text: 'Points Scored by Sex'
            },
            data:[{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: this.state.pointsbySexData
			}]
        }
        const ruleOptions = {
            animationEnabled: true,
            theme: "dark2",
            title: {
                text: "Instances of Each Rule"
              },
              data: [{				
                        type: "bar",
                        dataPoints: this.state.ruleData
               }]
        }

        return (
            <Container>
                <Row style={{padding: 10}}>
                    <Col md={12}>
                    <Chart options={runningScoreOptions}/>
                    </Col>
                </Row>
                <Row style={{padding: 10}}>
                    <Col md={6}>
                        <Chart options={pointsBySexOptions}/>
                    </Col>
                    <Col md={6}>
                    <Chart options={weeklyPointsOptions}/>
                    </Col>
                </Row>
                <Row style={{padding: 10}}>
                    <Col md={12}>
                        <Chart options={ruleOptions}/> 
                    </Col>    
                </Row>
            </Container>
        )
    }
}

export default Statistics;