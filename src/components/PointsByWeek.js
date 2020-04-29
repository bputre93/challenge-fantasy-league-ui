import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PointsByWeek extends Component {

    state = {
        dataPoints: null
    }

    componentDidMount() {
        fetch('http://localhost:3000/scores')
        .then(res=>res.json())
        .then(data =>{
            let dataPoints = []
            data.forEach(el => {
                const index = this.findObjectIndex(dataPoints,'label', el.week);
                if (index !== -1) {
                    dataPoints[index].y += el.rule.points;
                } else if (index === -1) {
                    dataPoints.push({label: el.week, x: el.week, y: 0})
                }
            });
            dataPoints.sort((a,b)=> a.x - b.x)
            this.setState({dataPoints: dataPoints})
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


    render(){

    
        const options = {
            animationEnabled: true,
            theme: "light2",
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
                        dataPoints: this.state.dataPoints
               }]
        }

        return (
            <div>
                <CanvasJSChart
                options={options}
                />
            </div>
        )
    }
}

export default PointsByWeek;