const Spacebar = props => (
  <button onClick={props.changeColor}>Spacebar</button>
);

const Key = props => (
  <button
    style={{background:'rgb(' + props.red + ','
    + props.blue + ',' + props.green + ')'}}
    onClick={props.updateKeyColor}>
      {props.letter}
  </button>
);

// const letters = [
//   'Q','W','E','R','T','Y','U','I','O','P','A','S','D',
//   'F','G','H','J','K','L','Z','X','C','V','B','N','M'
// ];

const letters = [
  'Q','W','E'
];

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'Q': [0,0,0],
      'W': [0,0,0],
      'E': [0,0,0],
      currentColor: 'red'
    };
    this.updateKeyColor.bind(this)
    this.changeColor.bind(this)
  }
  updateKeyColor(letter) {
    if (this.state.currentColor === 'red') {
      this.setState({ letter: this.state.letter[0]++ })
    } else if (this.state.currentColor === 'green') {
      this.setState({ letter: this.state.letter[1]++ })
    } else {
      this.setState({ letter: this.state.letter[2]++ })
    }
  }
  changeColor() {
    if(this.state.currentColor === 'red') {
      this.setState({ currentColor: 'green' })
    } else if (this.state.currentColor === 'green') {
      this.setState({ currentColor: 'blue' })
    } else {
      this.setState({ currentColor: 'red' })
    }
  }
  render() {
    return (
      <center>
        {letters.map((letter) =>
          <Key
            key={letter} letter={letter} //letter is 'Q'
            updateKeyColor={this.updateKeyColor}
            red={this.state.letter[0]} //1st item, 0
            green={this.state.letter[1]} //2nd item, 0
            blue={this.state.letter[2]} />)
        }
        <Spacebar changeColor={this.changeColor} />
      </center>
    );
  } //end render
} //end Board

ReactDOM.render(<Board />, document.getElementById('root'));
