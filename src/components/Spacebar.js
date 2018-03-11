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

export const Spacebar = (props) => {
  return (<button style={spacebarStyle}>{props.text}</button>);
}
