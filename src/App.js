import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";

class App extends Component {

  state = {
    characters
  };

  // Map over this.state.friends and render a FriendCard component for each character object
  render() {
    return (
      <Wrapper>
        <Title>Marvel Memory</Title>
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
