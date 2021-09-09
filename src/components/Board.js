import React, { Component } from 'react';
import './Board.css';
import Card from "./Card"

export default class Board extends Component {
    render() {
        // const cards =[1,2,3,4,5]
        return (
            <div className="board">
                {
                    this.props.deck.map((card)=><Card icon={card.icon}/>)
                }
            </div>
        )
    }
}
