import React, { Component } from 'react';
import TeamStandings from '../components/TeamStandings/TeamStandings';
import TopChallengers from '../components/TopChallengers';
import Table from '../components/Table';


class Main extends Component {

    state = {
        fullStandingsData: [],
    }

    componentDidMount() {
        fetch('http://localhost:3000/scores/challengerWeeklyScores')
        .then(res=>res.json())
        .then(data =>{
            this.setState({fullStandingsData: data});
        })
    }

    findObjectIndex(arr, attr, value) {
        for(var i = 0; i < arr.length; i += 1) {
            if(arr[i][attr] === value) {
                return i;
            }
        }
        return -1;
    }

    fullStandingsColumns = [
        {title: "Challenger", field: "challenger", hozAlign: 'left'},
        {title: "Wk 1", field: "1", hozAlign: 'left'},
        {title: "Wk 2", field: "2", hozAlign: 'left'},
        {title: "Wk 3", field: "3", hozAlign: 'left'},
        {title: "Wk 4", field: "4", hozAlign: 'left'},
        {title: "Wk 5", field: "5", hozAlign: 'left'},
        {title: "Wk 6", field: "6", hozAlign: 'left'},
        {title: "Wk 7", field: "7", hozAlign: 'left'},
        {title: "Wk 8", field: "8", hozAlign: 'left'},
        {title: "Wk 9", field: "9", hozAlign: 'left'},
        {title: "Wk 10", field: "10", hozAlign: 'left'},
        {title: "Total", field: "total", hozAlign: 'left'},
    ]

    fullStandingsOptions = {
        "initialSort": [
            {column: "total", dir: "asc"},
            {column: "challenger", dir: "asc"}
        ]
    }

    render() {
        return (
            <div>
              <TeamStandings/>
              <TopChallengers/>  
              <Table
              columns={this.fullStandingsColumns}
              data={this.state.fullStandingsData}
              options={this.fullStandingsOptions}
              />
            </div>
        )
    }
}

export default Main;