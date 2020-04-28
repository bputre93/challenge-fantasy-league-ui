import React, { Component } from 'react';
import { ReactTabulator } from 'react-tabulator';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css';

class TeamStandings extends Component {
    
    state = {
        standings: []
    };

    componentDidMount() {
        fetch('http://localhost:3000/teams/standings')
        .then(res =>res.json())
        .then((data) => {
            this.setState({standings: data})
        })
        .catch(console.log)
    }

    columns = [
        {title: "Rank", field: "rank", hozAlign: 'left'},
        {title: "Team", field: "name", hozAlign: 'left'},
        {title: "Owner", field: "owner", hozAlign: 'left'},
        {title: "Total", field: "points", hozAlign: 'center'},
    ];

    render() {
        return (
            <div>
                <h2>Standings</h2>
            <ReactTabulator
            columns={this.columns}
            data={this.state.standings}
            className="Table"
            />
            </div>
        )
    }


}

export default TeamStandings;