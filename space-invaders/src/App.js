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
    
    if (e.charCode === 100) {

      this.setState({
        spaceshipPositionRow : this.state.spaceshipPositionRow + 1
      })
    } else if (e.charCode === 113) {
      
      this.setState({
        spaceshipPositionRow : this.state.spaceshipPositionRow - 1
      })
    }

    // else if (e.keyCode == 37) {

      // this.setState({})

    // }

  }


  render() {
    console.log(this.state.spaceshipPositionRow);

    return (


      <div 
      onKeyPress={(e)=>{
        
        console.log(e);
        this.keyDownHandler(e)
      }}
      tabIndex={1}
      style={{
        display: 'grid', gridTemplateColumns: 'repeat(11,1fr)',
        gridTemplateRows: 'repeat(11,1fr)', justifyItems: 'center'
      }}>

        <Spaceship onKeyPress={this.keyDownHandler}
          gridPositionColumn={this.state.spaceshipPositionRow}
          gridPositionRow={11} />


        
      </div>
        
    )
  }
}


export default App;
