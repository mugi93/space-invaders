import React from 'react';
import './App.css';
import Alien from './components/Alien.jsx';
import Banner from './img/space_invaders_banner.png';
import Grandpa from './img/space_invader_Grandpa.png';
import Grandma from './img/space_invader_Grandma.png';

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
    const displayResultPageStyle = {
      // margin: '0', A FAIRE SUR BODY DANS APP.CSS ?
      width: '100%',
      height: '1000px',
      backgroundColor: 'black',
      fontFamily: 'space invaders',
      color: 'white',
      fontSize: '2.5rem',
      textAlign: 'center',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 300px',
      gridTemplateRows:
        '250px repeat(2, 120px) repeat(2, 20px) repeat(2,90px) )',
      justifyItems: 'center',
      alignItems: 'center',
    };

    if (this.state.showResultWin === true) {
      return (
        <div className='container' style={displayResultPageStyle}>
          <img
            className='banner img'
            style={{ gridColumn: '1 / span 3' }}
            src={Banner}
            alt='Title Game Banner'
          />

          <img
            className='grandpaImg img'
            src={Grandpa}
            alt='Space Invader Grandpa'
            style={{ gridColumn: '1/3' }}
          />
          <img
            className='grandmaImg img'
            src={Grandma}
            alt='Space Invader Grandma'
            style={{ gridColumn: '3/4' }}
          />

          <span className='grandpa' style={{ gridColumn: '1/3' }}>
            Grandpa
          </span>
          <span className='grandma' style={{ gridColumn: '3/4' }}>
            Grandma
          </span>

          <h2 className='resultDisplay' style={{ gridColumn: '1 / span 3' }}>
            You Win !!!
          </h2>
          <h2 className='gameOverDisplay' style={{ gridColumn: '1 / span 3' }}>
            GAME OVER
          </h2>
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
