import React from 'react';
import ImgAlien from '../img/alien2.png'

class Alien extends React.Component {

    render() {

        return (
            <img src={ImgAlien}
                style={{
                    display: this.props.display, width: '50px',
                    height: '50px', gridColumnStart: this.props.gridPositionColumn,
                    gridRowStart: this.props.gridPositionRow
                }}>
            </img>
        )
    }
}

export default Alien;