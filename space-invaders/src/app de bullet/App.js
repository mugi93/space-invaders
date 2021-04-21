import React from "react";
import './App.css';
import Alien from './components/Alien';
import Bullet from './components/Bullet';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      alienPositionRow: 1,
      displayAlien: 'grid',

      bulletPositionRow: 40,
      displayBullet: "grid"
    }

    this.moveForwardAlien = this.moveForwardAlien.bind(this)
    this.bulletShot = this.bulletShot.bind(this)

  }

  moveForwardAlien() {
    if (this.state.alienPositionRow <= 43) {

      this.setState({ alienPositionRow: this.state.alienPositionRow + 1 });

      setTimeout(() => {
        this.moveForwardAlien()
      }, 1000);

    } else {
      this.setState({ displayAlien: 'none' });
    }

  }

  bulletShot() {
    if (this.state.bulletPositionRow >= 1) {
      this.setState({ bulletPositionRow: this.state.bulletPositionRow - 1 })

      setTimeout(() => {
        this.bulletShot()
      }, 30);

    } else {
      this.setState({ bulletPositionRow: 40 });
    }
  }

  render() {
    return (
      
      <div style={{
        overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(11,1fr)',
        gridTemplateRows: 'repeat(44, 14.2px)', justifyItems: 'center'
      }}>

        {/* PARTIE ALIENS */}

        <Alien myFunc={this.moveForwardAlien} display={this.state.displayAlien} gridPositionColumn={6}
          gridPositionRow={this.state.alienPositionRow} />

        <Alien myFunc={this.moveForwardAlien} display={this.state.displayAlien} gridPositionColumn={7}
          gridPositionRow={this.state.alienPositionRow} />

        <Alien myFunc={this.moveForwardAlien} display={this.state.displayAlien} gridPositionColumn={5}
          gridPositionRow={this.state.alienPositionRow} />


        {/* PARTIE BULLET */}

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(11, 1fr)",
          gridTemplateRows: "repeat(44, 14.2px)", justifyItems: "center"
        }}>

          <Bullet display={this.state.displayBullet} onClick={this.bulletShot} gridPositionColumn={8}
            gridPositionRow={this.state.bulletPositionRow} />

        </div>

      </div>
    )
  }
}

export default App;