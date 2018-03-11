import React from 'react';

export class AppearingText extends React.Component {
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
    if (this.state.currentText.length === this.props.finalText.length) {
      clearInterval(this.state.timer)
    }
    const length = (this.state.currentText.length)
    this.setState({ currentText: this.props.finalText.substr(0,length+1) });
    if (length >= this.props.finalText.length) {
      return
    }
    this.props.handleKeyPress({ code:('key' + this.props.finalText[length].toUpperCase()) })
  }
  render() {
    return (
      <div style={{padding: 25, fontSize: 20}}> {this.state.currentText} </div>
    );
  }
}
