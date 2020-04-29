import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class RuleInstanceChart extends Component {

    state = {
        dataPoints: null
    }

    componentDidMount() {
        fetch('http://localhost:3000/scores/countsByRule')
        .then(res=>res.json())
        .then(data =>{
            data.forEach(el => {
                el.count = parseInt(el.count)
            });
            const dataPoints = data.map(el=> {
                return {
                    label: el.type,
                    y: el.count
                }
            })
            this.setState({dataPoints: dataPoints})
        })
    }


    render(){

    
        const options = {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "Instances of Each Rule"
              },
              data: [{				
                        type: "bar",
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

export default RuleInstanceChart;