import React from 'react';

export class LetterKey extends React.Component {
  render() {
    let colors = [[],[],[]]
    var words = this.props.currentText.toUpperCase().split(' ')
    for (var i=0; i<words.length; i++) {
      colors[i%3].push(words[i])
    }
    var red = (colors[0].join('').split(this.props.letter).length-1)*51
    var green = (colors[1].join('').split(this.props.letter).length-1)*51
    var blue = (colors[2].join('').split(this.props.letter).length-1)*51

    var keyStyle = {
      width: 60,
      height: 60,
      margin: 2,
      fontSize: 20,
      color: 'white',
      border: 'none',
      borderRadius: 6,
      background:'rgb(' + red + ',' + green + ',' + blue + ')'
    };

    return (
      <button style={keyStyle}> {this.props.letter} </button>
    );
  }
}
