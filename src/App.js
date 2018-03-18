import React, { Component } from 'react';
import './App.css';
import { Spacebar } from './components/Spacebar.js'
import { Board } from './components/Board.js'

const textareaStyle = {
  height: 50,
  width: 450,
  padding: 5,
  margin: 20
};

const initialText = 'Type something here and watch the keys change colors!'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: '',
      savedText: '',
      timer: null}
    this.handleInitialText = this.handleInitialText.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const timerID = setInterval(this.handleInitialText, 80);
    this.setState({timer: timerID})
  }
  handleInitialText() {
    if (this.state.currentText.length === initialText.length) {
      clearInterval(this.state.timer)}
    const length = (this.state.currentText.length)
    this.setState({ currentText: initialText.substr(0,length+1) });
    if (length >= initialText.length) {
      setTimeout(function() {this.setState({currentText: ''}); }.bind(this), 2000);
      return}
  }
  handleClick(letter, message) {
    console.log(letter, message)
  }
  handleChange(e) {
    this.setState({currentText: e.target.value});
  }
  render() {
    return (
      <center>
        <textarea style={textareaStyle} autoFocus value={this.state.currentText} type="text" onChange={this.handleChange}/>
        <Board currentText={this.state.currentText} handleClick={this.handleClick}/>
        <Spacebar currentText={this.state.currentText}/>
      </center>
    );
  }
}

export default App;
