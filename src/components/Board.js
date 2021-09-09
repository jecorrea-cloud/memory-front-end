import React, { Component } from 'react';
import './Board.css';
import Card from "./Card"

export default class Board extends Component {
    render() {
        // const cards =[1,2,3,4,5]
        return (
            <div className="board">
                {
                    this.props.deck
                    .map((card, index)=>{
                    const isBeingCompared = this.props.selectedPair.indexOf(card) > -1;
                    return <Card
                    key={index} 
                    icon={card.icon}
                    isBeingCompared = {isBeingCompared}
                    selectCard = {()=>this.props.selectCard(card)}
                    wasGuessed={card.wasGuessed}
                    />;
                })
                }
            </div>
        )
    }
}
