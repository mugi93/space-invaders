import React from 'react';

class Bullet extends React.Component {

    render() {

        return (
            <div style={{
                height: "20px", width: "15px", backgroundColor: "red",
                gridColumnStart: this.props.gridPositionColumn, gridRowStart: this.props.gridPositionRow

            }} >
                <button style={{ backgroundColor: "orange", height: "20px", width: "15px" }} onClick={this.props.onClick} ></button>

            </div >
        )
    }
}


export default Bullet;