import React from 'react';
import { Key } from './Key.js'

export class KeyParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {red: 0, green: 0, blue: 0};
  }
  render() {
    let colors = [ [ ], [ ], [ ] ]
    var words = this.props.currentText.split(' ')
    for (var i=0; i<words.length; i++) {
      colors[i%3].push(words[i])
    }
    //figure out total red, green, and blue from current text
    //update state
    return (
      <Key
        red={this.state.red}
        green={this.state.green}
        blue={this.state.blue}
        letter={this.props.letter} />
    );
  }
}
