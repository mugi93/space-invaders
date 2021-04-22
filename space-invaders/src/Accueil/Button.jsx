import React from 'react';

class Spaceship extends React.Component {
;

      

  render() {
    return (


      <button onClick={this.shoot}
              style={{color: "#BDB7B3",
              fontSize: "20px",
              borderRadius: "5px",
              width:"200px",
              height:"70px",
              cursor: "pointer",
              textAlign:"center",
              marginTop:" 200px",
              backgroundColor:"#bdb7b300"}}>Go !</button>



    )


  }
}



export default Spaceship;