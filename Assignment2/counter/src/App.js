import './App.css';
import Counter from './counter';
import React, { Component } from 'react';

class App extends Component{

  state ={
    counter:0
  }


  

  Increase = (count) => {
    count = count + 1;
    console.log(count);
    this.setState({
      counter: count
  })
    var r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    var g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    var b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
 
    var rgbString = r + ", " + g + ", " + b;
    document.getElementById('color').style.backgroundColor = 'rgb(' + rgbString + ')';
  }


  Reset = (count) => {
    count = 0;
    this.setState({
      counter: count
  })
  document.getElementById('color').style.backgroundColor = 'white';
  }

  Decrease = (count) => {
    count = count - 1;
    console.log(count);
    this.setState({
      counter: count
  })

  var r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  var g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  var b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
 
  var rgbString = r + ", " + g + ", " + b;
  document.getElementById('color').style.backgroundColor = 'rgb(' + rgbString + ')';
  }
 

  render(){
    return(
      <div>
        <h1>COUNTER</h1>        
        <Counter counter={this.state.counter} Increase={this.Increase} Decrease={this.Decrease} Reset={this.Reset}></Counter>    
      </div>

      
    )
  }

}


export default App;
