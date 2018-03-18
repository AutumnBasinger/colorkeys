import React from 'react';
import { LetterKey } from './LetterKey.js'

export const Board = props => {
  let letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A',
  'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  let messages = [
  'How dare you press my buttons!',
  'omg omg omg omg omg omg omg omg',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test'
  ]

  let keys = [];

  // console.log(props.handleClick)
  for (let i=0; i<letters.length; i++) {
    keys.push(<LetterKey key={letters[i]} letter={letters[i]}
      handleClick={props.handleClick} currentText={props.currentText} message={messages[i]}/>)
  }

  // letters.forEach(letter => {
  //   keys.push(<LetterKey key={letter} letter={letter} onClick={props.onClick(messages[i])} currentText={props.currentText}/>)
  // })

  return (
    <center>
      <center>{keys.slice(0,10)}</center>
      <center>{keys.slice(10,19)}</center>
      <center>{keys.slice(19,26)}</center>
    </center>
  );
}
