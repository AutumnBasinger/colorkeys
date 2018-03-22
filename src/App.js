import React, { Component } from 'react';
import './App.css';
import { Spacebar } from './components/Spacebar.js'
import { Board } from './components/Board.js'

const textareaStyle = {
  height: 60,
  width: 580,
  padding: 5,
  margin: 20,
  fontSize: 16
};

const initialText = 'Welcome to the color keyboard!'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: '',
      savedText: '',
      autoText: initialText,
      timer: null}
    this.handleText = this.handleText.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const timerID = setInterval(this.handleText, 80);
    this.setState({timer: timerID})
  }
  handleText() {
    if (this.state.currentText.length === this.state.autoText.length) {
      clearInterval(this.state.timer)
    }
    const length = (this.state.currentText.length)
    this.setState({ currentText: this.state.autoText.substr(0,length+1) });
    if (length >= this.state.autoText.length) {
      setTimeout(function() {this.setState({currentText: this.state.savedText, timer: null, savedText: ''}); }.bind(this), 2000);
      return}
  }
  handleClick(letter, message) {
    if (this.state.timer === null && this.state.savedText === '') {
      this.setState({savedText: this.state.currentText})
      this.setState({currentText: ''})
      this.setState({autoText: message})
      const timerID = setInterval(this.handleText, 80);
      this.setState({timer: timerID})
    }
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
