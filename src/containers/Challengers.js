import React, { Component } from 'react';
import ChallCard from '../components/ChallCard';
import Aux from '../hoc/Aux';

class Challengers extends Component {

    state = {
        challengers: [],
    }

    BASE_URL = process.env.REACT_APP_API_URL;

    componentDidMount(){
        fetch(`${this.BASE_URL}/challengers`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({challengers: data})
        })
    }

    render(){

        const challengerCards = this.state.challengers.map(chall =>{
            return (
                <ChallCard
                name={chall.name}
                points={chall.points}
                seasons={chall.seasons}
                originalShow={chall.originalShow}
                sex={chall.sex}
                redSkulls={chall.redSkulls}
                status={chall.eliminated ? 'Eliminated' : 'Active'}
                imageUrl={chall.imageUrl}
                instagramHandle={chall.instagramHandle}
                instagramUrl={chall.instagramUrl}
                funFact={chall.funFact}
                />
            )
        })


        return (
            <Aux>
                <div style={{height: '95vh',overflow: 'auto'}}>
                        {challengerCards}
                </div>
            </Aux>

        )
    }
}

export default Challengers