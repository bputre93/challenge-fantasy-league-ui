import React, { Component } from 'react';
import { ReactTabulator } from 'react-tabulator';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css';

class RulesTable extends Component {
    
    state = {
        rules: []
    };

    componentDidMount() {
        fetch('http://localhost:3000/scoring')
        .then(res =>res.json())
        .then((data) => {
            this.setState({rules: data})
        })
        .catch(console.log)
    }

    columns = [
        {title: "Rule", field: "type", hozAlign: 'left'},
        {title: "Points", field: "points", hozAlign: 'left'},
    ];

    render() {
        return (
            <div>
                <h2>Scoring Rules</h2>
            <ReactTabulator
            columns={this.columns}
            data={this.state.rules}
            className="Table"
            />
            </div>
        )
    }


}

export default RulesTable;