const spacebarStyle = {
  width: 260,
  height: 60,
  margin: 2,
  fontSize: 15,
  color: 'white',
  background: 'black'
};

class KeyParent extends React.Component {
  constructor(props) { //needs currentColor and letter as props from Board
    super(props); //this.props.currentColor
    this.props = props
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
    this.updateKeyColor = this.updateKeyColor.bind(this);
  }
  updateKeyColor() {
    if (this.props.currentColor === 'red') {
      this.setState({red: this.state.red+51})
    } else if (this.props.currentColor === 'green') {
      this.setState({green: this.state.green+51})
    } else if (this.props.currentColor === 'blue') {
      this.setState({blue: this.state.blue+51})
    }
  }
  render() {
    return (
      <Key
        red={this.state.red}
        green={this.state.green}
        blue={this.state.blue}
        updateKeyColor={this.updateKeyColor}
        letter={this.props.letter} />
    );
  }
}

const Key = (props) => (
  <button
    style={{width: 60, height: 60, margin: 2, color: 'white', fontSize: 15,
      background:'rgb(' + props.red + ',' + props.green + ',' + props.blue + ')'}}
    onClick={props.updateKeyColor}>
      {props.letter}
  </button>
);

const Spacebar = (props) => (
  <button style={spacebarStyle} onClick={props.changeColor}>Space</button>
);

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentColor: 'red'};
    this.changeColor = this.changeColor.bind(this)
  }
  changeColor() {
    if(this.state.currentColor === 'red') {
      this.setState({ currentColor: 'green' })
    } else if (this.state.currentColor === 'green') {
      this.setState({ currentColor: 'blue' })
    } else if (this.state.currentColor === 'blue') {
      this.setState({ currentColor: 'red' })
    }
  }
  render() {
    const letterList = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A',
    'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    const letterMap = letterList.map((letter) =>
      <KeyParent key={letter} letter={letter} currentColor={this.state.currentColor} /> );
    return (
      <center>
        <div style={{height:150}}></div>
        <center>{letterMap.slice(0,10)}</center>
        <center>{letterMap.slice(10,19)}</center>
        <center>{letterMap.slice(19,26)}</center>
        <center><Spacebar changeColor={this.changeColor} /></center>
      </center>
    );
  } //end render
} //end Board

ReactDOM.render(<Board />, document.getElementById('root'));
