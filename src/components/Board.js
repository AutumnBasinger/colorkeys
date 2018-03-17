import React from 'react';
import { LetterKey } from './LetterKey.js'

export const Board = props => {
  let letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A',
  'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  let keys = [];
  letters.forEach(letter => {
    keys.push(<LetterKey key={letter} letter={letter} currentText={props.currentText}/>)
  })

  return (
    <center>
      <center>{keys.slice(0,10)}</center>
      <center>{keys.slice(10,19)}</center>
      <center>{keys.slice(19,26)}</center>
    </center>
  );
}
