class Key extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <button
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
    this.state = {color: 'red'};
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    const newColor = this.state.color == 'red' ? 'green' : 'red';
    this.setState({color: newColor});
    console.log(this.state.color);
  }
  render() {
    return (
      <button onClick={this.changeColor}>Spacebar</button>
    );
  }
}

const letterList = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A',
'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
const letterMap = letterList.map((letter) => <Key letter={letter} /> );

class Board extends React.Component {
  render() {
    return (
      <center>
        <center>{letterMap.slice(0,10)}</center>
        <center>{letterMap.slice(10,19)}</center>
        <center>{letterMap.slice(19,26)}</center>
        <center><Spacebar /></center>
      </center>
    );
  }
}

ReactDOM.render(<Board />, document.getElementById('root'));
