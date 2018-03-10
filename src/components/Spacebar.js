import React from 'react';

const spacebarStyle = {
  width: 260,
  height: 60,
  margin: 2,
  fontSize: 18,
  color: 'white',
  background: 'black',
  //borderColor: 'darkgrey',
  borderRadius: 6
};

export const Spacebar = (props) => {
  return (<button style={spacebarStyle} onClick={props.changeColor}>Space</button>);
}
