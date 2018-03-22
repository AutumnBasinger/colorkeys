import React from 'react';

const spacebarStyle = {
  width: 330,
  height: 80,
  margin: 3,
  fontSize: 25,
  color: 'white',
  background: 'black',
  border: 'none',
  borderRadius: 8
};

export const Spacebar = props => {
    const messages = ['Adding red','Adding green','Adding blue']
    let spaces = props.currentText.split(" ").length-1
    var buttonText = messages[spaces%3]
    return (
      <button style={spacebarStyle}>{buttonText}</button>
    );
  }
