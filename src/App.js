import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";
import deckBuilder from "./components/utils/deckBuilder";
import React, { Component } from "react";

const getInitialState = () => {
  const deck = deckBuilder();
  return {
    deck,
    selectedPair: [],
    isFlipped: false,
    numOfGuesses: 0,
  };
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  selectCard(card) {
    if (
      this.state.isFlipped ||
      this.state.selectedPair.indexOf(card) > -1 ||
      card.wasGuessed
    ) {
      return;
    }

    const selectedPair = [...this.state.selectedPair, card];
    this.setState({ 
      selectedPair 
    });

    if (selectedPair.length === 2) {
      this.compareCards(selectedPair);
    }
  }

  compareCards(selectedPair) {
    this.setState({ isFlipped: true });

    setTimeout(() => {
      const [firstCard, secondCard] = 
      selectedPair;
      let deck = this.state.deck;

      if (firstCard.icon === secondCard.icon) {
        deck = deck.map((card) => {
          if (card.icon !== firstCard.icon) {
            return card;
          }

          return { ...card, wasGuessed: true };
        });
      }
      this.verifyWinner(deck);
      this.setState({
        selectedPair: [],
        deck,
        isFlipped: false,
        numOfGuesses: this.state.numOfGuesses + 1,
      });
    }, 1000)
  }

  verifyWinner(deck) {
    deck.forEach((card) => (card.wasGuessed = true));
    if (
      deck.filter((card) => !card.wasGuessed).length === 0) 
      {
        alert(`You've won on ${this.state.numOfGuesses} tries!`);
      }
  }

  // resetGame() {
  //   window.location.reload();
  // }

  render() {
    return (
      <div className="App">
        <Header
          numOfGuesses={this.state.numOfGuesses}
          resetGame={this.resetGame()}
        />
        <Board
          deck={this.state.deck}
          selectedPair={this.state.selectedPair}
          selectCard={(card) => {
            this.selectCard(card);
          }}
        />
      </div>
    );
  }
}
