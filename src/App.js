import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import deckBuilder from './components/utils/deckBuilder';
import React, { Component } from 'react'

const getInitialState = () => {
  const deck = deckBuilder();
  return { deck};
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = getInitialState();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Board 
          deck = {this.state.deck}
        />
      </div>
    )
  }
}
