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

    return (
      <button className='keyStyle' style={{background: 'rgb(' + String(rgb) + ')'}}
      onClick={ (e) => {props.handleClick(props.letter, props.message)} }> {props.letter} </button>
    );
  }
