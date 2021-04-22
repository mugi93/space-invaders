import React from "react";
import './App.css';
import Button from './components/Button'

import Alien from './components/Alien';
import Bullet from './components/Bullet';
import Spaceship from './components/Spaceship';




class App extends React.Component {

  constructor() {
    super()

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

      count: 0,

      beginning: true,
      youLose: false,
      youWin: 0
    }

    this.moveForwardAlien = this.moveForwardAlien.bind(this)
    this.bulletShot = this.bulletShot.bind(this)
    this.keyDownHandler = this.keyDownHandler.bind(this)
    this.toBegin = this.toBegin.bind(this)

  }

  componentDidMount() {
    document.getElementById("bigDiv").focus()
  }

  componentDidUpdate(prevState, prevProps) {
    document.getElementById("bigDiv").focus()
  }

  toBegin() {
    this.setState({ beginning: false })
  }

  keyDownHandler(e) {

    if (this.state.count === 0) {
      if (e.keyCode === 39) {
        this.moveForwardAlien()
        this.setState({ spaceshipPositionColumn: this.state.spaceshipPositionColumn + 1, count: 1 })
      } else if (e.keyCode === 37) {
        this.moveForwardAlien()
        this.setState({ spaceshipPositionColumn: this.state.spaceshipPositionColumn - 1, count: 1 })
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
    if (this.state.alienPositionRow <= 43) {

      this.setState({ alienPositionRow: this.state.alienPositionRow + 1 });

      setTimeout(() => {
        this.moveForwardAlien()
      }, 1000);

    } else {
      this.setState({ displayAlien1: 'none', displayAlien2: 'none', displayAlien3: 'none', youLose: true });
      console.log(this.state.youLose);
    }
  }

  bulletShot() {

    console.log("on arrive ici");

    if ((this.state.bulletPositionColumn === 17
      || this.state.bulletPositionColumn === 18
      || this.state.bulletPositionColumn === 19)
      && this.state.bulletPositionRow <= (this.state.alienPositionRow + 3)
      && this.state.displayAlien1 === 'grid') {
      return this.setState({ displayAlien1: 'none', displayBullet: 'none', bulletPositionRow: 43, youWin: this.state.youWin + 1 })
    } else if ((this.state.bulletPositionColumn === 22
      || this.state.bulletPositionColumn === 23
      || this.state.bulletPositionColumn === 24)
      && this.state.bulletPositionRow <= (this.state.alienPositionRow + 3)
      && this.state.displayAlien2 === 'grid') {
      return this.setState({ displayAlien2: 'none', displayBullet: 'none', bulletPositionRow: 43, youWin: this.state.youWin + 1 })
    } else if ((this.state.bulletPositionColumn === 27
      || this.state.bulletPositionColumn === 28
      || this.state.bulletPositionColumn === 29)
      && this.state.bulletPositionRow <= (this.state.alienPositionRow + 3)
      && this.state.displayAlien3 === 'grid') {
      return this.setState({ displayAlien3: 'none', displayBullet: 'none', bulletPositionRow: 43, youWin: this.state.youWin + 1 })
    }

    if (this.state.displayBullet === "none") {
      this.setState({
        displayBullet: 'grid',
        bulletPositionColumn: this.state.spaceshipPositionColumn,
        bulletPositionRow: 43
      });
    }
    if (this.state.bulletPositionRow >= 1) {
      this.setState({ bulletPositionRow: this.state.bulletPositionRow - 1 })

      setTimeout(() => {
        this.bulletShot()
      }, 100);
    } else {
      this.setState({ displayBullet: "none", bulletPositionRow: 43 });
    }

  }

  render() {

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
      )
    }
  }
}

export default App;