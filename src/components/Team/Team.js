import React from 'react';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css';
import Table from '../Table/Table';
import Aux from '../../hoc/Aux'

const team = (props) => {

    return (
        <Aux> 
            <h3 style={{color: 'white', fontWeight: 'bold'}}>
                {props.teamName}
                <h4 style={{color: 'white'}}>{props.owner}</h4>
            </h3>
            <Table
            data={props.data}
            columns={props.columns}
            />
        </Aux>
    )

}

export default team;