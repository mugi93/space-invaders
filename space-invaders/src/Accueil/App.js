import React from 'react';
import './App.css';
import Button from '../components/Button'


class App extends React.Component {


  // constructor() {
  //   super();
  //   this.state = {
  //   }


  render() {


    return (
      <div style={{display:"flex",flexDirection:"column",alignItems:'center'}}>
        <h1 style={{color:"#BDB7B3",textAlign:"center",fontSize:50}}>Space Invaders </h1>
        <section style={{color:"#BDB7B3" ,fontStyle: 'italic',textAlign:"center",fontSize:30}}>Déplacez vous de droite à gauche en tirant sur les extraterrestres avant qu'ils ne descendent sur vous .</section>
        <Button></Button>
     </div>
    
    )
  }
}


export default App;
