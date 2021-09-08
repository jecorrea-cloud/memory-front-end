import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import deckBuilder from './components/utils/deckBuilder';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Board />
      </div>
    )
  }
}
