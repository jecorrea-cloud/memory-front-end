import React, { Component } from 'react';
import './Board.css';

export default class Board extends Component {
    render() {
        const cards =['🙉','🚺','😭','💌','🗯','🍂','❌','👌','🗿']
        return (
            <div className="board">
                {cards.map(card=><span>{card}</span>)}
            </div>
        )
    }
}
