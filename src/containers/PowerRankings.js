import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import RankingCard from '../components/PowerRankingCard';

class PowerRankings extends Component {
    state = {
        rankings: [],
    }

    BASE_URL = process.env.REACT_APP_API_URL;

    componentDidMount(){
        fetch(`${this.BASE_URL}/rankings/week/0`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({rankings: data})
        })
    }

    //TODO: Add dropdown for each week.
    //Default to most recent week
    //Add previous rank and increase/decrease


    render() {


        const rankingCards = this.state.rankings.map(ranking =>{
            return (
                <RankingCard
                key={ranking.id}
                week={ranking.week}
                teamName={ranking.team.name}
                owner={ranking.team.owner}
                writeup={ranking.writeup}
                powerRank={ranking.powerRank}
                />
            )
        })

        return (
            <Aux>
                <h1 style={{color: 'white', textAlign: 'center', paddingTop: '16px'}}>Team Power Rankings</h1>
                <h3 style={{color: 'white', textAlign: 'center', padding: '4px'}}>Courtesy of the Original Big T Haloway</h3>
                <div style={{height: '95vh',overflow: 'auto'}}>
                    {rankingCards}
                </div>
            </Aux>
        )
    }
}

export default PowerRankings;