import React, { Component } from 'react';
import Aux from '../hoc/Aux';
import RecapCard from '../components/RecapCard/RecapCard';

class Recaps extends Component {
    state = {
        recaps: [],
    }

    BASE_URL = process.env.REACT_APP_API_URL;

    componentDidMount(){
        fetch(`${this.BASE_URL}/recaps`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({recaps: data})
        })
    }


    render() {


        const recapCards = this.state.recaps.map(recap =>{
            return (
                <RecapCard
                key={recap.id}
                week={recap.week}
                mvp={recap.mvp}
                skulls={recap.skulls}
                eliminations={recap.eliminations}
                writeup={recap.writeup}
                episodeTitle={recap.episodeTitle}
                />
            )
        })

        return (
            <Aux>
                <div style={{height: '95vh',overflow: 'auto'}}>
                    {recapCards}
                </div>
            </Aux>
        )
    }
}

export default Recaps;