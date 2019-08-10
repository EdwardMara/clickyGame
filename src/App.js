import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import friends from './friends.json';
import Wrapper from './components/Wrapper';

class App extends Component {
  state = {
    friends,
    guessed: [],
    score: 0,
    topScore: 0
  };


  shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }


  handleClick = event => {
    const friendName = event.target.alt;
    let currentScore = this.state.score + 1;
    const guessedList = this.state.guessed;

    if (guessedList.includes(friendName)) {
      this.restart()
    } else {
      this.setState({
        friends: this.shuffleArray(this.state.friends),
        score: currentScore,
        guessed: [...guessedList, friendName]
      })
    }
  };

  restart() {
    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.score
      })
    }
    this.setState({
      score: 0,
      guessed: []
    })
  };

  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        {/* <Header /> */}
        <Wrapper>
          {this.state.friends.map(friend => {
            return <Card
              key={friend.id}
              id={friend.id}
              name={friend.name}
              image={friend.image}
              onClick={this.handleClick}
            />
          })}
        </Wrapper>

      </div>
    )
  };
}

export default App;