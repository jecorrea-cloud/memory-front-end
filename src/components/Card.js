import React, { Component } from 'react'
import "./Card.css"
import FlipCard from 'react-flipcard-2'

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <FlipCard>
                    <div className="back"></div>
                    <div className="front"> <i className={`fa ${this.props.icon} fa-5x`}></i> </div>
                </FlipCard>
            </div>
        )
    }
}
