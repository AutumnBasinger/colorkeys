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
  constructor(props) {
    super(props);
    this.state = {buttonText: 'Adding red'}
  }
  render() {
    //count spaces in this.props.currentText
    //this.setState(buttonText: text according to spaces)
    return (
      <button style={spacebarStyle}>{this.state.buttonText}</button>
    );
  }
}
