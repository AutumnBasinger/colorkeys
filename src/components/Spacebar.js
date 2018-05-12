import React, { Component } from 'react';

const clickMessages = ['WOAH!','HEY THERE!','HAHAHAHA']
const addingMessages = ['Adding red','Adding green','Adding blue']

export class Spacebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'add',
      clicked: ''}
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }
  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  handleMouseDown() {
    this.setState({ type: 'click', clicked: clickMessages[Math.floor(Math.random() * 3)] })
    this.sleep(400).then(() => {
      this.setState({type: 'add'})
    })
  }
  render() {
    let spaces = this.props.currentText.split(" ").length-1
    if (this.state.type === 'click') {var buttonText = this.state.clicked}
    else {buttonText = addingMessages[spaces%3]}
    return (
      <button className='spaceStyle'
        onMouseDown={this.handleMouseDown}>
          {buttonText}
      </button>
    );
  }
}
