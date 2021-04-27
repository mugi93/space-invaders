import React from 'react';
import Button from "./Button"
class StartGame extends React.Component {

    render() {

        return (
            <div id='firstMenu'>
                <h1>Space Invaders </h1>
                <section>Déplacez vous de droite à gauche en tirant sur les extraterrestres avant qu'ils ne descendent sur vous .</section>
                {/* 2/ Lorsque que l'on click sur ce button, ça appelle la fonction toBegin  */}
                <Button begin={this.props.bbegin}></Button>
            </div>
        )


    }
}


export default StartGame