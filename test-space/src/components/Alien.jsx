import React from 'react';

class Alien extends React.Component {

    render() {

        return(
            <div style={{display: this.props.display,width: '50px', 
            height: '50px', backgroundColor: 'red', gridColumnStart:this.props.gridPositionColumn, 
            gridRowStart:this.props.gridPositionRow }}>
        <button onClick={this.props.myFunc}></button>
            </div>
        )
    }
}

export default Alien;