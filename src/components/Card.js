import React, { Component } from 'react';
import "./Card.css";
//Importing module for flipping effect
import FlipCard from 'react-flipcard-2';

export default class Card extends Component {
    render() {
        return (
            <div className="card" onClick={this.props.selectCard}>
                <FlipCard
                    flipped={this.props.isBeingCompared || 
                        this.props.wasGuessed}
                    disabled = {true}
                >
                    <div className="back"></div>
                    <div className="front"> <i className={`fa ${this.props.icon} fa-5x`}></i> </div>
                </FlipCard>
            </div>
        )
    }
}
