import React from 'react';
import BulletImg from '../img/bullet.png';

class Bullet extends React.Component {

    render() {

        return (
            <img src={BulletImg}
                style={{
                    height: "30px", width: "30px",
                    gridColumnStart: this.props.gridPositionColumn, gridRowStart: this.props.gridPositionRow,
                    display: this.props.display
                }} >
            </img>
        )
    }
}


export default Bullet;