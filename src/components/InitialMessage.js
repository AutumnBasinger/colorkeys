import React from 'react';

const finalText = 'Start typing something!'

export class InitialMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.handleChange()
  }
  componentDidUpdate(prevProps,prevState) {
    if (prevState.currentText !== finalText) {
      setTimeout(this.handleChange, 80);
    }
  }
  handleChange() {
    const length = (this.state.currentText.length)
    this.setState({ currentText: finalText.substring(0,length+1) });
  }
  render() {
    return (
      <div style={{padding: 20, fontSize: 20}}> {this.state.currentText} </div>
    );
  }
}
