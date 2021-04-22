import React from 'react';

class Spaceship extends React.Component {

  render() {
    return (

      <div 
      style={{
        display: this.props.display,
        background: "red", height: 50, width: 50,
        gridColumnStart: this.props.gridPositionColumn,
        gridRowStart: this.props.gridPositionRow
      }}>
      </div>
    )
  }
}

export default Spaceship;