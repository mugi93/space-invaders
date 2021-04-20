import React from "react";
import './App.css';
import Alien from './components/Alien';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      alienPositionRow: 1,
      displayAlien: 'grid'
    }

    this.moveForwardAlien = this.moveForwardAlien.bind(this)
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
  render() {
    return (

      <div style={{
        overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(11,1fr)',
        gridTemplateRows: 'repeat(44, 14.2px)', justifyItems: 'center'
      }}>
        <Alien myFunc={this.moveForwardAlien} display={this.state.displayAlien} gridPositionColumn={6}
          gridPositionRow={this.state.alienPositionRow} />

        <Alien myFunc={this.moveForwardAlien} display={this.state.displayAlien} gridPositionColumn={7}
          gridPositionRow={this.state.alienPositionRow} />

        <Alien myFunc={this.moveForwardAlien} display={this.state.displayAlien} gridPositionColumn={5}
          gridPositionRow={this.state.alienPositionRow} />
      </div>
    )
  }
}

export default App;
