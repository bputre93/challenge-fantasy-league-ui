import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const chart = (props) =>{
    return (
        <CanvasJSChart
        options={props.options}
        />
    )
}

export default chart;