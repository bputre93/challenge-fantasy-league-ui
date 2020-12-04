import React from 'react';
import './Table.css'
import { ReactTabulator } from 'react-tabulator';
import 'react-tabulator/lib/css/tabulator.min.css';
import Aux from '../../hoc/Aux'

const table = (props) => {
    return (
        <Aux>
            <h2 className="title">{props.title}</h2>
            <ReactTabulator
            columns={props.columns}
            data={props.data}
            options={props.options}
            layout='fitColumns'
            style={{opacity: 0.90}}
            />
        </Aux>
    )
}

export default table;