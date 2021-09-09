import React, { Component } from 'react'
import "./Card.css"

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <i className={`fa ${this.props.icon} fa-5x`}></i>
            </div>
        )
    }
}
