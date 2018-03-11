import React, { Component } from 'react';
import './App.css';
import { Spacebar } from './components/Spacebar.js'
import { KeyParent } from './components/KeyParent.js'
import { InitialMessage } from './components/InitialMessage.js'

const letterList = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A',
'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: 'red',
      lastkey: null,
      spaceText: 'Adding red'};
    this.changeColor = this.changeColor.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleKeyPress (e) {
    console.log(e)
    if (e.code[3] === 'c' || e.code[3] === ' ') { //event code for spacebar
      this.changeColor()
    }
    this.setState({ lastkey: e.code[3] });
  }
  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress);
  }
  changeColor() {
    this.setState({lastkey: null})
    if(this.state.currentColor === 'red') {
      this.setState({ currentColor: 'green' , spaceText: 'Adding green' })
    } else if (this.state.currentColor === 'green') {
      this.setState({ currentColor: 'blue' , spaceText: 'Adding blue' })
    } else if (this.state.currentColor === 'blue') {
      this.setState({ currentColor: 'red' , spaceText: 'Adding red' });
    }
  }
  render() {
    const letterMap = letterList.map((letter) =>
      <KeyParent key={letter} letter={letter} currentColor={this.state.currentColor} lastkey={this.state.lastkey}/> );
    return (
      <center>
        <InitialMessage handleKeyPress={this.handleKeyPress}/>
        <center>{letterMap.slice(0,10)}</center>
        <center>{letterMap.slice(10,19)}</center>
        <center>{letterMap.slice(19,26)}</center>
        <Spacebar text={this.state.spaceText}/>
      </center>
    );
  } //end render
} //end App

export default App;
