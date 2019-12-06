import React, { Component } from 'react'
import axios from 'axios';
import PlayerCard from './PlayerCard';

export class PlayerComponent extends Component {
    constructor(){
        super();
        this.state = {
            players: []
        };
    }

    componentDidMount() {
        axios
        .get('http://localhost:5000/api/players')
        .then(res => {
            this.setState({
                players: res.data
            })
        })
    }


    render() {
        return (
            <div>
                {this.state.players.map(player => <PlayerCard player={player} key={player.id} />)}
            </div>
        )
    }
}

export default PlayerComponent
