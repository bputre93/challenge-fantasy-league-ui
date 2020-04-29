import React, { Component } from 'react';
import { ReactTabulator } from 'react-tabulator';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css';

class TopChallengers extends Component {
    
    state = {
        standings: []
    };

    componentDidMount() {
        fetch('http://localhost:3000/challengers')
        .then(res =>res.json())
        .then((data) => {
            const topFive = data.sort((a,b)=>(b.points > a.points ? 1: -1)).slice(0,5)
            topFive[0].name = topFive[0].name + " 👑";
            this.setState({standings: topFive})
        })
        .catch(console.log)
    }

    columns = [
        {title: "Challenger", field: "name", hozAlign: 'left'},
        {title: "Points", field: "points", hozAlign: 'center'},
    ];

    render() {
        return (
            <div>
                <h2>Top 5 Challengers</h2>
            <ReactTabulator
            columns={this.columns}
            data={this.state.standings}
            layout="fitColumns"
            className="Table"
            />
            </div>
        )
    }


}

export default TopChallengers;