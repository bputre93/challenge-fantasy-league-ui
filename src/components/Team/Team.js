import React from 'react';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css';
import Table from '../Table/Table';
import Aux from '../../hoc/Aux'

const team = (props) => {

    return (
        <Aux> 
            <h4>{props.teamName}</h4>
            <h5>{props.owner}</h5>
            <Table
            data={props.data}
            columns={props.columns}
            />
        </Aux>
    )

}

export default team;