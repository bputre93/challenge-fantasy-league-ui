import React from 'react';
import { ReactTabulator } from 'react-tabulator';
import 'react-tabulator/lib/css/tabulator.min.css';

const table = (props) => {
    return (
        <ReactTabulator
        columns={props.columns}
        data={props.data}
        options={props.options}
        />
    )
}

export default table;