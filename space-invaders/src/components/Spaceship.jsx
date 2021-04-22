import React from 'react';
import ImageSpaceship from '../img/spaceship.png';

class Spaceship extends React.Component {

  render() {
    return (

      <img src={ImageSpaceship}
        style={{
          width: '100px',
          height: '100px',
          display: this.props.display,
          gridColumnStart: this.props.gridPositionColumn,
          gridRowStart: this.props.gridPositionRow
        }}>
      </img>
    )
  }
}

export default Spaceship;