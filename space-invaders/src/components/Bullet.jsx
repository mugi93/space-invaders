import React from 'react';

class Bullet extends React.Component {

    render() {

        return (
            <div style={{
                height: "20px", width: "15px", backgroundColor: "orange",
                gridColumnStart: this.props.gridPositionColumn, gridRowStart: this.props.gridPositionRow,
                display: this.props.display}} >
            </div >
        )
    }
}


export default Bullet;