import React from 'react';
import { Key } from './Key.js'

export class KeyParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
    this.updateKeyColor = this.updateKeyColor.bind(this);
  }
  updateKeyColor() {
    if (this.props.currentColor === 'red') {
      this.setState({red: this.state.red+51})
    } else if (this.props.currentColor === 'green') {
      this.setState({green: this.state.green+51})
    } else if (this.props.currentColor === 'blue') {
      this.setState({blue: this.state.blue+51})
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.letter === nextProps.lastkey) {
      this.updateKeyColor() //updaiting multiple times, fix this
    }
  }
  render() {
    return (
      <Key
        red={this.state.red}
        green={this.state.green}
        blue={this.state.blue}
        updateKeyColor={this.updateKeyColor}
        letter={this.props.letter} />
    );
  }
}
