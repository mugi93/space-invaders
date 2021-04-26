import React from 'react';
import './App.css';
import Spaceship from './components/Spaceship';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      spaceshipPositionColumn: 23
    }

      this.keyDownHandler = this.keyDownHandler.bind(this)
  }

  componentDidMount() {
    document.getElementById("bigDiv").focus()
  }

  keyDownHandler(e) {
    
    if (e.keyCode === 39) {
      this.setState({spaceshipPositionColumn : this.state.spaceshipPositionColumn + 1})
    } else if (e.keyCode === 37) {
      this.setState({spaceshipPositionColumn : this.state.spaceshipPositionColumn - 1})
    }
  }

  render() {
    return (

      <div onKeyDown={(e)=>{this.keyDownHandler(e)}}
      id="bigDiv" 
       tabIndex={1}
      style={{
        display: 'grid', gridTemplateColumns: 'repeat(45,14.2px)',
        gridTemplateRows: 'repeat(45,14.2px)', justifyItems: 'center'
      }}>

        <Spaceship
          gridPositionColumn={this.state.spaceshipPositionColumn}
          gridPositionRow={43} />
      </div> 
    )
  }
}


export default App;

