import React, {Component} from "react";
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="title">Memory-Game</div>
                <div>
                    <div className="title">
                    Scores:
                    </div>
                    <button className="restart-button">Reset</button>
                </div>
                <div className="title">
                    Tries: {this.props.numOfGuesses}
                </div>
            </header>
        )
    }
}