import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import characters from "./characters.json";

class App extends Component {

  state = {
    characters,
    clickedChar: [],
    score: 0
  };

  // Check if player has won.
  checkWin = () => {
    if (this.state.score === 12) {
      alert("You won! Play again?");
      this.setState({
        clickedChar: [],
        score: 0
      })
    };
  };

  // Main logic function.
  shuffle = id => {
    // Change the (state) accordingly.
    this.setState({
      // Change the (state) render order of the characters object.
      characters: this.state.characters.sort(function (a, b) {
        return 0.5 - Math.random();
      }),
      // Add the id of the clicked character to the clickedChar array.
      clickedChar: this.state.clickedChar.concat(id),
      // Increase the score (state) if the character hasn't been clicked yet.
      score: this.state.score + 1
    });

    // If the character has already been clicked, the game is lost and all states are reset.
    if (this.state.clickedChar.includes(id)) {
      alert("You lose! Play again?");
      this.setState({
        clickedChar: [],
        score: 0
      })
    };

  };

  // Render a CharacterCard component for each character object.
  render() {
    // Call the checkWin function before a character is clicked.
    this.checkWin();
    return (
      <Wrapper>
        <Title>Marvel Memory</Title>
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            shuffle={this.shuffle}
          />
        ))}
        <Score>{this.state.score}</Score>
      </Wrapper>
    );
  };

};

export default App;
