import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const lineGraph = (props) => {
    return (
        <CanvasJSChart
        options={props.options}
        />
    )
}

export default lineGraph;