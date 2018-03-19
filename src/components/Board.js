import React from 'react';
import { LetterKey } from './LetterKey.js'

export const Board = props => {
  let letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A',
  'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  let messages = [
'Quit now. I said quit',
'Whyyyyyyyyyyyy???',
'Earlier I said stop...and you didn\'t?',
'Really? Really??? You pressed me again?',
'TTTTTTTT TASTY TASTY',
'You...idk. Just idk.',
'Ugh, like seriously?',
'I said, don\'t press them!',
'OMG OMG OMG OMG OMG OMG OMG OMG OMG OMG OMG',
'Please stop. I hate it',
'Ahhhhhh don\'t press me!',
'Soooooo, you want to play that game?',
'Duh, this thing is awesome',
'Finally you pressed me!',
'Greatttttt, you\'re so great at pressing my buttons',
'How dare you press my buttons!',
'Just stop. Stop it right now',
'Kill me now',
'Last time I\'m telling you...',
'z zz zzz zzzz zzzzz zzzzzz zzzzzzz zzzzzzzz zzzzzzzzz zzzzzzzzzzz',
'eXXXXXXXXcuse me',
'Can you hear me??',
'Very annoying of you to keep pressing my buttons',
'Blah blah blah',
'Nooooooooooooooo',
'My my my...you are a stubborn one',
]

  let keys = [];

  // console.log(props.handleClick)
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
