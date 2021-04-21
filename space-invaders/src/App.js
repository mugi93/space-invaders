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

  componentDidMount() {
    document.getElementById("bigDiv").focus()
  }

  keyDownHandler(e) {
    
    if (e.keyCode === 39) {
      this.setState({
        spaceshipPositionRow : this.state.spaceshipPositionRow + 1
      })
    } else if (e.keyCode === 37) {
      this.setState({
        spaceshipPositionRow : this.state.spaceshipPositionRow - 1
      })
    }
  }

  render() {
    return (

      <div onKeyDown={(e)=>{this.keyDownHandler(e)}}
      id="bigDiv" 
       tabIndex={1}
      style={{
        display: 'grid', gridTemplateColumns: 'repeat(11,1fr)',
        gridTemplateRows: 'repeat(11,1fr)', justifyItems: 'center'
      }}>

        <Spaceship
          gridPositionColumn={this.state.spaceshipPositionRow}
          gridPositionRow={11} />
      </div> 
    )
  }
}


export default App;