import React from 'react';
import './App.css';
import Alien from './components/Alien';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      alienPositionRow: 1,
      displayAlien: 'grid',
      showResultWin: true,
      showResultLose: false,
      // showResult: false,
    };

    this.moveForwardAlien = this.moveForwardAlien.bind(this);
    this.renderGame = this.renderGame.bind(this);
  }

  moveForwardAlien() {
    if (this.state.alienPositionRow <= 43) {
      this.setState({ alienPositionRow: this.state.alienPositionRow + 1 });

      setTimeout(() => {
        this.moveForwardAlien();
      }, 1000);
    } else {
      this.setState({ displayAlien: 'none' });
    }
  }

  renderGame() {
    const messageStyle = {
      margin: '0 auto',
      width: '100vh',
      height: '100vh',
      backgroundColor: 'black',
      fontFamily: 'space invaders',
      color: 'white',
      fontSize: '1.5rem',
      textAlign: 'center',
    };

    if (this.state.showResultWin === true) {
      return (
        <div style={messageStyle}>
          <h1>You Win !!</h1>
        </div>
      );
    } else if (this.state.showResultLose === true) {
      return <h1>You Lose !!</h1>;
    } else {
      return (
        <div
          style={{
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(11,1fr)',
            gridTemplateRows: 'repeat(44, 14.2px)',
            justifyItems: 'center',
          }}
        >
          <Alien
            myFunc={this.moveForwardAlien}
            display={this.state.displayAlien}
            gridPositionColumn={6}
            gridPositionRow={this.state.alienPositionRow}
          />

          <Alien
            myFunc={this.moveForwardAlien}
            display={this.state.displayAlien}
            gridPositionColumn={7}
            gridPositionRow={this.state.alienPositionRow}
          />

          <Alien
            myFunc={this.moveForwardAlien}
            display={this.state.displayAlien}
            gridPositionColumn={5}
            gridPositionRow={this.state.alienPositionRow}
          />
        </div>
      );
    }
  }

  render() {
    return <>{this.renderGame()}</>;
  }
}

export default App;
