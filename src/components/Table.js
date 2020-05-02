import React from 'react';
import { ReactTabulator } from 'react-tabulator';
import 'react-tabulator/lib/css/tabulator.min.css';
import Aux from '../hoc/Aux'

const table = (props) => {
    return (
        <Aux>
            <h4>{props.title}</h4>
            <ReactTabulator
            columns={props.columns}
            data={props.data}
            options={props.options}
            />
        </Aux>
    )
}

export default table;