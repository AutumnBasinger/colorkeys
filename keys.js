class KeyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //updates rgb state based on props (red, green, blue)
      red: 0,
      green: 0,
      blue: 0
    };
    this.updateColor = this.updateColor.bind(this);
  }
  updateColor() {
    if (Spacebar.state.color === 'red') {
      this.setState({red: this.state.red + 1});
    } else {
      this.setState({green: this.state.green + 1});
    }
  }
  render() {
    return (
      <Button
        style={{background:'rgb(' + this.state.red + ','
        + this.state.green + ',' + this.state.blue + ')'}}
        onClick={this.updateColor}
      >
        {this.props.letter}
      </button>
    );
  } //end render
} //end Key


class Spacebar extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const newColor = e.target.value;
    this.props.onClick(currentColor);
  }
  render() {
    return (
      <button onClick={this.handleClick}>Spacebar</button>
    );
  }
}

class Letters extends React.Component {
  const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A',
  'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  const letterKeys = letters.map((letter) =>
    <KeyButton
      key={letter} letter={letter}
      addTo={this.props.color} onClick={this.updateColor}
    />
  )
  render() {
    <div>
      <div>{letterKeys.slice(0,10)}</div>
      <div>{letterKeys.slice(10,19)}</div>
      <div>{letterKeys.slice(19,26)}</div>
    </div>
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentColor: 'red'};
  }
  changeColor(newColor) {
    this.setState({currentColor: newColor});
  }
  render() {
    return (
      <center>
        <Letters color={this.state.currentColor}/>
        <Spacebar onClick={this.changeColor} />
      </center>
    );
  }
}

ReactDOM.render(<Board />, document.getElementById('root'));
