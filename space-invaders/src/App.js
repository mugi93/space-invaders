import React from 'react';
import './App.css';
import Spaceship from './components/Spaceship';

class App extends React.Component {


  constructor() {
    super();
    this.state = {
      spaceshipPositionRow: 6,

    }

      this.keyDownHandler = this.keyDownHandler.bind(this)
  }


  keyDownHandler(e) {

      console.log("je suis dedans")
    
    if (e.keyCode == 39) {

      this.setState({
        spaceshipPositionRow : 7
      })
    }

    // else if (e.keyCode == 37) {

      // this.setState({})

    // }

  }


  render() {
    console.log(this.state.spaceshipPositionRow);

    return (

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(11,1fr)',
        gridTemplateRows: 'repeat(11,1fr)', justifyItems: 'center'
      }}>

        <Spaceship onKeyPress={this.keyDownHandler}
          gridPositionColumn={this.state.spaceshipPositionRow}
          gridPositionRow={11}>

        </Spaceship>
      </div>
    )
  }
}


export default App;
