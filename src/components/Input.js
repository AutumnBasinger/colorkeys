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
    this.state = {userInput: ''};
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(e) {
    this.setState({userInput: e.target.value});
    console.log('handled!')
  }
  render() {
    return (
      <div>
        <textarea style={textareaStyle} value={this.state.userInput} type="text" onChange={this.handleUserInput}/>
      </div>
    );
  }
}
