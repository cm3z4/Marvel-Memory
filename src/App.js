import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import characters from "./characters.json";

class App extends Component {

  state = {
    characters,
    clickedArr: [],
    score: 0
  };

  shuffle = event => {
    this.setState({
      characters: this.state.characters.sort(function (a, b) {
        return 0.5 - Math.random();
      }),
      clickedArr: this.state.clickedArr.concat(event),
      score: this.state.score + 1
    });

    if (this.state.clickedArr.includes(event)) {
      console.log("Card has already been clicked!");
      alert("You lose! Play again?");
      this.setState({
        clickedArr: [],
        score: 0
      })
    };
    
    if (this.state.score === 11) {
      alert("You won! Play again?");
      this.setState({
        clickedArr: [],
        score: 0
      })
    }
  };

  // Map over this.state.friends and render a FriendCard component for each character object
  render() {
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
  }

}

export default App;
