import React from 'react';

const spacebarStyle = {
  width: 260,
  height: 60,
  margin: 2,
  fontSize: 20,
  color: 'white',
  background: 'black',
  border: 'none',
  borderRadius: 6
};

export class Spacebar extends React.Component {
  render() {
    const messages = ['Adding red','Adding green','Adding blue']
    var spaces = this.props.currentText.split(" ").length-1
    var buttonText = messages[spaces%3]
    return (
      <button style={spacebarStyle}>{buttonText}</button>
    );
  }
}
