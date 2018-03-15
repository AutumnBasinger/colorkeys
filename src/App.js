import React, { Component } from 'react';
import './App.css';
import { Spacebar } from './components/Spacebar.js'
import { KeyParent } from './components/KeyParent.js'

const textareaStyle = {
  height: 50,
  width: 450,
  padding: 5,
  margin: 20
};

const letterList = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A',
'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

const initialText = 'Type something here and watch the keys change colors!'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: '',
      timer: null}
    this.handleInitialText = this.handleInitialText.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //calls first, sets timer to handle initial preset text
  componentDidMount() {
    const timerID = setInterval(this.handleInitialText, 80);
    this.setState({timer: timerID})
  }

  //calls upon mounting until inital text has been reached
  //updates current text state which will update all things using that state
  handleInitialText() {
    if (this.state.currentText.length === initialText.length) {
      clearInterval(this.state.timer)}
    const length = (this.state.currentText.length)
    this.setState({ currentText: initialText.substr(0,length+1) });
    if (length >= initialText.length) {
      setTimeout(function() {this.setState({currentText: ''}); }.bind(this), 2000);
      return}
  }

  //calls everytime the text box is updated
  //updates current text state which updates everything that uses it (just pass this state as props)
  handleChange(e) {
    this.setState({currentText: e.target.value});
  }

  //calls automatically anytime state is changed
  render() {
    const letterMap = letterList.map((letter) =>
      <KeyParent key={letter} letter={letter} currentText={this.state.currentText}/> );
    return (
      <center>
        <textarea style={textareaStyle} value={this.state.currentText} type="text" onChange={this.handleChange}/>
        <center>{letterMap.slice(0,10)}</center>
        <center>{letterMap.slice(10,19)}</center>
        <center>{letterMap.slice(19,26)}</center>
        <Spacebar currentText={this.state.currentText}/>
      </center>
    );
  } //end render
} //end App

export default App;
