import React from 'react';
import './App.css';
import Button from './components/Button'
import Bullet from './components/Bullet';
import Spaceship from './components/Spaceship';
import Alien from './components/Alien.jsx';

import Banner from './img/space_invaders_banner.png';
import Grandpa from './img/space_invader_Grandpa.png';
import Grandma from './img/space_invader_Grandma.png';

class App extends React.Component {
  constructor() {
    super();

    this.state = {

      // Les Aliens sont placés au départ sur la row 1.
      alienPositionRow: 1,


      displayAlien: [],

      // La bullet apparait sur la même Row que le vaisseau
      bulletPositionRow: 43,
      bulletPositionColumn: 0,
      displayBullet: "none",

      // Le spaceship est au départ sur la colonne 23, au milieu.
      spaceshipPositionColumn: 23,

      noTouchYet: true,

      beginning: true,
      lostGame: false,
    }

    this.moveForwardAlien = this.moveForwardAlien.bind(this)
    this.bulletShot = this.bulletShot.bind(this)
    this.keyDownHandler = this.keyDownHandler.bind(this)
    this.toBegin = this.toBegin.bind(this)
  }

  componentDidUpdate() {
    if (document.getElementById("bigDiv")) {
      document.getElementById("bigDiv").focus()
    }
  }

  // 3/ La fonction toBegin change le state beginning en false.
  toBegin() {
    this.setState({
      beginning: false,
      // Au départ displayAlien est un array vide. 
      // Grâce à la méthode fill on lui ajoute 10 éléments de valeurs true à partir de l'index 0
      displayAlien: (new Array(10)).fill(true, 0)
    })
  }

  // 5/ Ici la touche 39 représente le keycode de la flêche de droite
  // touche 37 keycode de la flêche de gauche
  // touche 32 keycode de la touche espace
  keyDownHandler(e) {

    // Lorsque l'on bouge le spaceship pour la 1ère fois ou on tir alors les Aliens se mettent
    // à avancer au même moment.
    if (this.state.noTouchYet) {
      if (e.keyCode === 39) {
        this.moveForwardAlien()
        this.setState({
          spaceshipPositionColumn: this.state.spaceshipPositionColumn + 1,
          noTouchYet: false
        })
      } else if (e.keyCode === 37) {
        this.moveForwardAlien()
        this.setState({
          spaceshipPositionColumn: this.state.spaceshipPositionColumn - 1,
          noTouchYet: false
        })
      } else if (e.keyCode === 32 && this.state.displayBullet === 'none') {
        this.setState({ noTouchYet: false })
        this.bulletShot();
        this.moveForwardAlien()
      } else {

      }
    } else {

      // Lorsque le joueur tape la touche de gauche ou de droite, on change la colonne
      // sur laquelle le spaceship est grâce à la state spaceshipPositionColumn qui est
      // envoyé en props au composant Spaceship
      if (e.keyCode === 39 && this.state.spaceshipPositionColumn < 40) {
        this.setState({ spaceshipPositionColumn: this.state.spaceshipPositionColumn + 1 })
      } else if (e.keyCode === 37 && this.state.spaceshipPositionColumn > 5) {
        this.setState({ spaceshipPositionColumn: this.state.spaceshipPositionColumn - 1 })
      }
      //  Si le joueur tape sur la touche espace il appelle la fonction bulletShot
      else if (e.keyCode === 32) {
        this.bulletShot();
      }
    }
  }

  // 6/ la fonction moveForwardAlien à été appellé lorsque le joueur a bouger son spaceship ou a tirer
  // pour la 1ère fois.
  moveForwardAlien() {
    // Condition : Si il reste un alien  
    if (this.state.displayAlien.indexOf(true) !== -1) {
      // si la position row des aliens est inferieur ou égale à 35 sur la grid
      if (this.state.alienPositionRow <= 35) {
        // On avance d'une ligne sur la grid
        this.setState({ alienPositionRow: this.state.alienPositionRow + 1 });
        // SetTimeout permet d'attendre 1/2 seconde avant de relancer la fonction mooveForwardAlien
        // Encore une fois.
        setTimeout(() => {
          this.moveForwardAlien();
        }, 500);
      } else {
        // Si aucune des conditions n'est respecté alors le jeu est perdu car au moins un alien
        // est parvenue à la même row que le spaceship.
        this.setState({
          lostGame: true
        });
      }
    }
  }


  // 7/ Donc lorsque le joueur tape sur la touche espace, il appelle la fonction bulletShot
  bulletShot() {

    const bulletPositionColumn = this.state.bulletPositionColumn

    for (let index = 0; index < this.state.displayAlien.length; index++) {
      const middleColumnAlien = (index + 1) * 4

      // Si la position column de la bullet est égale à la position column de l'alien
      // ET si la position row de la bullet est égale à la position row de l'alien 
      if (bulletPositionColumn >= middleColumnAlien - 1
        && bulletPositionColumn <= middleColumnAlien + 1
        && this.state.bulletPositionRow <= (this.state.alienPositionRow + 3)) {

        const newDisplayAlien = [...this.state.displayAlien]

        newDisplayAlien.splice(index, 1, false)

        return this.setState({
          displayAlien: newDisplayAlien,
          displayBullet: 'none',
          bulletPositionRow: 43,
        })
      }
    }

    if (this.state.bulletPositionRow >= 1) {

      if (this.state.displayBullet === "none") {
        this.setState({
          displayBullet: 'grid',
          bulletPositionColumn: this.state.spaceshipPositionColumn,
          bulletPositionRow: this.state.bulletPositionRow - 1
        });
      } else {
        this.setState({ bulletPositionRow: this.state.bulletPositionRow - 1 })
      }

      setTimeout(() => {
        this.bulletShot()
      }, 30);
    } else {
      this.setState({ displayBullet: "none", bulletPositionRow: 43 });
    }
  }

  renderGame() {

    // Si il ne reste aucun alien ou si on a perdu le jeu.
    if (this.state.displayAlien.length !== 0 && (this.state.displayAlien.indexOf(true) === -1 || this.state.lostGame)) {
      return (
        <div className='container'>

          <img className='banner' src={Banner} alt='Title Game Banner' />

          <img className='grandpaImg' src={Grandpa} alt='Space Invader Grandpa' />

          <img className='grandmaImg' src={Grandma} alt='Space Invader Grandma' />

          <span className='grandpa'> Grandpa </span>
          <span className='grandma'> Grandma </span>

          <h2 className='gameOverDisplay'>
            {/* Si lostGame égale à true alors afficher Game Over sinon afficher You won */}
            {this.state.lostGame === true ? "GAME OVER" : "YOU WON !!!"}
          </h2>

        </div>
      );
    } else {
      // 1/ Le state beginning est par defaut sur true donc la 1ere page que l'on a est celle çi.
      if (this.state.beginning) {
        return (
          <div id='firstMenu'>
            <h1>Space Invaders </h1>
            <section>Déplacez vous de droite à gauche en tirant sur les extraterrestres avant qu'ils ne descendent sur vous .</section>
            {/* 2/ Lorsque que l'on click sur ce button, ça appelle la fonction toBegin  */}
            <Button begin={this.toBegin}></Button>
          </div>
        )
      } else {
        return (
          // 4/ On arrive ici car aucune des autres conditions n'est bonne.
          // Lorsque que l'on presse une touche la fonction keyDownHandler est appliqué avec
          // la touche du clavier tapée.
          <div
            onKeyDown={(e) => { this.keyDownHandler(e) }}
            id="bigDiv"
            // tabindex permet de capturer le focus de la div, par défault on ne peut pas.
            tabIndex={1}>

            {/* Ici on parcours le tableau displayAlien grâce à map et on crée autant de 
            Alien qu'il y a d'élement dans le tableaux */}
            {
              this.state.displayAlien.map((elem, index) => {
                if (elem) {
                  // On assigne à tout les éléments une key, nécessaire pour aider React à modifier ou supprimé un élément.
                  // Ici GridPosition Column correspond à l'index de l'élément + 1 le tout multiplié par 4. 
                  // Cela nous permet de tous les décaler de 4 colonnes. le + 1 était necessaire car l'index 
                  // commence à 0 et 0*4 égale la tête à toto les amis.
                  // Tout les Aliens ont la même valeur de row car ils sont sur la même ligne et avance à la même allure. 
                  return <Alien key={index} gridPositionColumn={(index + 1) * 4} gridPositionRow={this.state.alienPositionRow} />
                }
              })
            }

            <Bullet display={this.state.displayBullet} gridPositionColumn={this.state.bulletPositionColumn}
              gridPositionRow={this.state.bulletPositionRow} />

            <Spaceship
              gridPositionColumn={this.state.spaceshipPositionColumn}
              gridPositionRow={39} />

          </div>
        );
      }
    }
  }

  render() {
    return <>{this.renderGame()}</>;
  }
}

export default App;
