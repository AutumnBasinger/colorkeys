import React from 'react';

const keyStyle = {
  width: 60,
  height: 60,
  margin: 2,
  fontSize: 20,
  color: 'white',
  border: 'none',
  borderRadius: 6,
};

export const Key = (props) => {
  return (<button style={{
    width: keyStyle.width,
    height: keyStyle.height,
    margin: keyStyle.margin,
    fontSize: keyStyle.fontSize,
    color: keyStyle.color,
    border: keyStyle.border,
    borderRadius: keyStyle.borderRadius,
    background:'rgb(' + props.red + ',' + props.green + ',' + props.blue + ')'
  }}>
      {props.letter}
  </button>);
}
