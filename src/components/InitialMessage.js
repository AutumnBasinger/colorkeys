import React from 'react';

const finalText = 'Type something and watch the keys change!'

export class InitialMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: '',
      timer: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    const num = setInterval(this.handleChange, 80);
    this.setState({timer: num})
  }
  handleChange() {
    if (this.state.currentText.length === finalText.length) {
      clearInterval(this.state.timer)
    }
    console.log(this.state.currentText)
    const length = (this.state.currentText.length)
    this.setState({ currentText: finalText.substring(0,length+1) });
    if (length >= finalText.length) {
      return
    }
    this.props.handleKeyPress({ code:('key' + finalText[length].toUpperCase()) })
  }
  render() {
    return (
      <div style={{padding: 25, fontSize: 20}}> {this.state.currentText} </div>
    );
  }
}
