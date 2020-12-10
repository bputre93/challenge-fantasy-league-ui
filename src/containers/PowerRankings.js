import React, { Component } from 'react';
import RankingCard from '../components/PowerRankingCard';
import { Select } from 'react-dropdown-select'
import { Container } from 'react-bootstrap';

class PowerRankings extends Component {
    state = {
        rankings: [],
        weeks:[],
        selectOptions: [],
    }

    BASE_URL = process.env.REACT_APP_API_URL;

    componentDidMount(){
        this.loadRankingsForWeek(0)
        this.determineWeeks();
    }

    loadRankingsForWeek = (week) => {
        fetch(`${this.BASE_URL}/rankings/week/${week}`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({rankings: data})
        })
    }

    determineWeeks = () => {
        fetch(`${this.BASE_URL}/rankings`)
        .then(res =>res.json())
        .then(data=>{
            const weeks = [];
            data.forEach(el => {
                if (!weeks.includes(el.week)) {
                    weeks.push(el.week)
                }
            });
            weeks.sort()
            this.setState({weeks: weeks})

            const selectOptions = [];
            weeks.forEach(el => {
                selectOptions.push({label: `Week ${el}`, value: el})
            })

            this.setState({selectOptions: selectOptions});
        })
    }
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
                prevRank={ranking.prevRank}
                />
            )
        })

        return (
            <Container>
                <h1 style={{color: 'white', textAlign: 'center', paddingTop: '16px'}}>Team Power Rankings</h1>
                <h3 style={{color: 'white', textAlign: 'center', padding: '4px'}}>Courtesy of the Original Big T Holaway</h3>
                <Select
                options={this.state.selectOptions} 
                onChange={(week) => this.loadRankingsForWeek(week[0].value)}
                labelField={this.state.selectOptions.label}
                valueField={this.state.selectOptions.value}
                placeholder={'Week 0'}
                color={'#870b1b'}
                keepSelectedInList={true}
                searchable={false}
                createNewLabel={false}
                style={{maxWidth: '25%', marginLeft: '24px', backgroundColor: 'lightgrey', fontSize: 'small'}}
                />
                <div style={{height: '95vh',overflow: 'auto'}}>
                    {rankingCards}
                </div>
            </Container>
        )
    }
}

export default PowerRankings;