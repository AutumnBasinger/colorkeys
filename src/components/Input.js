import React from 'react';

const textareaStyle = {
  height: 50,
  width: 450,
  padding: 5,
  margin: 20
};

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: '',
      timer: null }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleInitialText = this.handleInitialText.bind(this);
  }

  componentDidMount() {
    const timerID = setInterval(this.handleInitialText, 80);
    this.setState({timer: timerID})
  }

  handleInitialText() {
    if (this.state.currentText.length === this.props.initialText.length) {
      clearInterval(this.state.timer)}
    const length = (this.state.currentText.length)
    this.setState({ currentText: this.props.initialText.substr(0,length+1) });
    if (length >= this.props.initialText.length) {
      setTimeout(function() {this.setState({currentText: ''}); }.bind(this), 2000);
      return}
    this.props.handleKeyPress({ code:('key' + this.props.initialText[length].toUpperCase()) })
  }

  handleUserInput(e) {
    this.setState({currentText: e.target.value});
    for (var i = 0; i < e.target.value.length; i++) {
      this.props.handleKeyPress({ code:('key' + e.target.value[i].toUpperCase()) })
    }
  }

  render() {
    return (
      <div>
        <textarea style={textareaStyle} value={this.state.currentText} type="text" onChange={this.handleUserInput}/>
      </div> //this.state.userInput
    );
  }
}
