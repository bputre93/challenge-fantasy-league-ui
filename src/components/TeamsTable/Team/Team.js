import React from 'react';
import { ReactTabulator } from 'react-tabulator';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css';

const team = (props) => {

    return (
        <div>
            <h3>{props.teamName}</h3>
            <h4>{props.owner}</h4>
            <ReactTabulator
            data={props.data}
            columns={props.columns}
            />
        </div>
    )

}

export default team;