import React from 'react';

export const LetterKey = props => {
    let colors = [[],[],[]]
    let words = props.currentText.toUpperCase().split(' ')
    for (let i=0; i<words.length; i++) {
      colors[i%3].push(words[i])
    }

    let rgb = []
    colors.forEach(color => {
      let remainder = (color.join('').split(props.letter).length-1)%10
      if (remainder > 5) {
        rgb.push((10-remainder)*51)
      } else {
        rgb.push(remainder*51)
      }
    })

    let keyStyle = {
      width: 80,
      height: 80,
      margin: 3,
      fontSize: 25,
      color: 'white',
      border: 'none',
      borderRadius: 8,
      background: 'rgb(' + String(rgb) + ')'
    };

    return (
      <button style={keyStyle} onClick={ (e) => {props.handleClick(props.letter, props.message)} }> {props.letter} </button>
    );
  }
