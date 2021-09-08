import React, {Component} from "react";

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="title">Memory-Game</div>
                <div>
                    <button className="restart-button">Reset</button>
                </div>
                <div className="title">
                    Tries:
                </div>
                <div className="title">
                    Scores:
                </div>
            </header>
        )
    }
}
