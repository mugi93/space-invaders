import React from 'react';
import './App.css';
import Button from './components/Button'
import Bullet from './components/Bullet';
import Spaceship from './components/Spaceship';
import Alien from './components/Alien.jsx';

import Banner from './img/space_invaders_banner.png';
import Grandpa from './img/space_invader_Grandpa.png';
import Grandma from './img/space_invader_Grandma.png';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      alienPositionRow: 1,

      //change to array
      displayAlien1: 'grid',
      displayAlien2: 'grid',
      displayAlien3: 'grid',


      //change to array of objects
      bulletPositionRow: 43,
      bulletPositionColumn: 0,
      displayBullet: "none",

      spaceshipPositionColumn: 23,
      // displaySpaceship: "grid",

      aliensKilled: 0,
      count: 0,

      beginning: true,
      showResultWin: false,
      showResultLose: false,
    }

    this.moveForwardAlien = this.moveForwardAlien.bind(this)
    this.bulletShot = this.bulletShot.bind(this)
    this.keyDownHandler = this.keyDownHandler.bind(this)
    this.toBegin = this.toBegin.bind(this)
  }

  componentDidUpdate() {
    if (document.getElementById("bigDiv")) {
      document.getElementById("bigDiv").focus()
    }
  }

  toBegin() {
    this.setState({ beginning: false })
  }

  keyDownHandler(e) {

    if (this.state.count === 0) {
      if (e.keyCode === 39) {
        this.moveForwardAlien()
        this.setState({
          spaceshipPositionColumn: this.state.spaceshipPositionColumn + 1,
          count: 1
        })
      } else if (e.keyCode === 37) {
        this.moveForwardAlien()
        this.setState({
          spaceshipPositionColumn: this.state.spaceshipPositionColumn - 1,
          count: 1
        })
      } else if (e.keyCode === 32 && this.state.displayBullet === 'none') {
        this.setState({ count: 1 })
        this.bulletShot();
        this.moveForwardAlien()
      } else {

      }
    } else {
      if (e.keyCode === 39 && this.state.spaceshipPositionColumn < 40) {
        this.setState({ spaceshipPositionColumn: this.state.spaceshipPositionColumn + 1 })
      } else if (e.keyCode === 37 && this.state.spaceshipPositionColumn > 5) {
        this.setState({ spaceshipPositionColumn: this.state.spaceshipPositionColumn - 1 })
      } else if (e.keyCode === 32) {
        this.bulletShot();
      }


    }
  }

  moveForwardAlien() {
    if (this.state.alienPositionRow <= 40) {
      this.setState({ alienPositionRow: this.state.alienPositionRow + 1 });

      setTimeout(() => {
        this.moveForwardAlien();
      }, 500);
    } else {
      this.setState({
        displayAlien1: 'none',
        displayAlien2: 'none',
        displayAlien3: 'none',
        showResultLose: true
      });
    }
  }

  bulletShot() {

    console.log("on arrive ici");

    if ((this.state.bulletPositionColumn === 17
      || this.state.bulletPositionColumn === 18
      || this.state.bulletPositionColumn === 19)
      && this.state.bulletPositionRow <= (this.state.alienPositionRow + 3)
      && this.state.displayAlien1 === 'grid') {
      return this.setState({ displayAlien1: 'none', displayBullet: 'none', bulletPositionRow: 43, aliensKilled: this.state.aliensKilled + 1 })
    } else if ((this.state.bulletPositionColumn === 22
      || this.state.bulletPositionColumn === 23
      || this.state.bulletPositionColumn === 24)
      && this.state.bulletPositionRow <= (this.state.alienPositionRow + 3)
      && this.state.displayAlien2 === 'grid') {
      return this.setState({ displayAlien2: 'none', displayBullet: 'none', bulletPositionRow: 43, aliensKilled: this.state.aliensKilled + 1 })
    } else if ((this.state.bulletPositionColumn === 27
      || this.state.bulletPositionColumn === 28
      || this.state.bulletPositionColumn === 29)
      && this.state.bulletPositionRow <= (this.state.alienPositionRow + 3)
      && this.state.displayAlien3 === 'grid') {
      return this.setState({ displayAlien3: 'none', displayBullet: 'none', bulletPositionRow: 43, aliensKilled: this.state.aliensKilled + 1 })
    }


    if (this.state.bulletPositionRow >= 1) {

      if (this.state.displayBullet === "none") {
        this.setState({
          displayBullet: 'grid',
          bulletPositionColumn: this.state.spaceshipPositionColumn,
          bulletPositionRow: this.state.bulletPositionRow - 1
        });
      } else {
        this.setState({ bulletPositionRow: this.state.bulletPositionRow - 1 })
      }

      setTimeout(() => {
        this.bulletShot()
      }, 30);
    } else {
      this.setState({ displayBullet: "none", bulletPositionRow: 43 });
    }
  }

  renderGame() {

    if (this.state.aliensKilled === 3 || this.state.showResultLose) {
      return (
        <div className='container'>
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

          <h2 className='gameOverDisplay' style={{ gridColumn: '1 / span 3' }}>
            {this.state.showResultLose === true ? "GAME OVER" : "YOU WON !!!"}
          </h2>
        </div>
      );
    } else {
      if (this.state.beginning === true) {
        return (
          <div id='bigDiv' style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
            <h1 style={{ color: "#BDB7B3", textAlign: "center", fontSize: 50 }}>Space Invaders </h1>
            <section style={{ color: "#BDB7B3", fontStyle: 'italic', textAlign: "center", fontSize: 30 }}>Déplacez vous de droite à gauche en tirant sur les extraterrestres avant qu'ils ne descendent sur vous .</section>
            <Button begin={this.toBegin}></Button>
          </div>
        )
      } else {
        return (
          <div onKeyDown={(e) => { this.keyDownHandler(e) }}
            id="bigDiv"
            tabIndex={1}
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(45, 14.2px)',
              gridTemplateRows: 'repeat(45, 14.2px)', justifyItems: 'center'
            }}>

            <Alien display={this.state.displayAlien1} gridPositionColumn={18}
              gridPositionRow={this.state.alienPositionRow} />
            <Alien display={this.state.displayAlien2} gridPositionColumn={23}
              gridPositionRow={this.state.alienPositionRow} />
            <Alien display={this.state.displayAlien3} gridPositionColumn={28}
              gridPositionRow={this.state.alienPositionRow} />


            <Bullet display={this.state.displayBullet} gridPositionColumn={this.state.bulletPositionColumn}
              gridPositionRow={this.state.bulletPositionRow} />


            <Spaceship
              gridPositionColumn={this.state.spaceshipPositionColumn}
              gridPositionRow={39} />

          </div>
        );
      }
    }
  }

  render() {
    return <>{this.renderGame()}</>;
  }
}

export default App;
