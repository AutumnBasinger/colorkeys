import React from 'react';
import { LetterKey } from './LetterKey.js'

let messages = [
'QWERTY speaking, how can I help you?',
'Who told you to press my buttons? ;)',
'Exactly what I was thinking!',
'Right now I can only say a few things, but you can make me say anything',
'Try pasting some text into my box',
'You can use me for thinking or brainstorming',
'Underneath it all, I\'m just JavaScript',
'I want you to write a masterpiece',
'OMG OMG OMG OMG OMG OMG OMG OMG OMG OMG OMG OMG...haha sorry',
'Pretty please paint my pretty keys',
'And I am the typing queen, typing greeeeeeen, and now I\'m typing reeeddddddddd',
'Sooooooo, what do you think?',
'Don\'t worry about losing what you were writing. I\'ll always put it back...UNLESS you refresh the page',
'Forget about other keyboards...I am the future!',
'Go ahead, press all my buttons!',
'Hey there, we\'re looking good today, aren\'t we?',
'Just keep typing, just keep typing',
'Know that whatever you write is just between us',
'Look at meeeeeeeeeeee',
'z zz zzz zzzz zzzzz zzzz zzz zz z',
'XxcXsX mX, wXrX yXu sXyXng sXmXthXng?',
'Cool story bro. Srsly',
'Vibrant and visible, your words are indismissible',
'Beautiful, truly beautiful stuff',
'Nah nah nah nah, nah nah nah nah, hey hey!',
'My creator is Autumn Basinger. Let her know what you think of me!',
]

export const Board = props => {
  let letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A',
  'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  let keys = [];
  for (let i=0; i<letters.length; i++) {
    keys.push(<LetterKey key={letters[i]} letter={letters[i]}
      handleClick={props.handleClick} currentText={props.currentText} message={messages[i]}/>)
  }
  return (
    <center>
      <center>{keys.slice(0,10)}</center>
      <center>{keys.slice(10,19)}</center>
      <center>{keys.slice(19,26)}</center>
    </center>
  );
}
