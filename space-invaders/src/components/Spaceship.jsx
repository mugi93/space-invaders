import React from 'react';

class Spaceship extends React.Component {

  constructor(props) {
    super(props)
  }


  render() {
    return (


      <div style={{
        background: "red", height: 50, width: 50,
        gridColumnStart: this.props.gridPositionColumn,
        gridRowStart: this.props.gridPositionRow
      }}
        onKeyPress={(e)=>{
          console.log(e)
          this.props.onKeyPress(e)
          }} >

      </div>



    )


  }
}



export default Spaceship;