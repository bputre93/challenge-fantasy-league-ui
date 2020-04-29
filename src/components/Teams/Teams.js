import React, { Component } from 'react';
import Team from './Team/Team';


class Teams extends Component {

    state = {
        teams: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/teams')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({teams: data})
        })
    }

    columns = [
        {title: "Challenger", field: "name", hozAlign: 'center'},
        {title: "Points", field: "points", hozAlign: 'center'},
        {title: "Alive", field: "eliminated", hozAlign: 'center', formatter: "tickCross"}
    ]


    render() {

        const teamCards = this.state.teams.map(team => {
            return (
                <Team
                key={team.id}
                owner={team.owner}
                teamName={team.name}
                columns={this.columns}
                data={team.challengers}
                />
            )
        })

        return (
        <div>{teamCards}</div>
        )
    }
}

export default Teams;