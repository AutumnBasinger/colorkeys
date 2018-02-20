const Spacebar = props => (
  <button onClick={props.changeColor}>Spacebar</button>
);

const Key = props => (
  <button
    style={{background:'rgb(' + props.color[0] + ','
    + props.color[1] + ',' + props.color[2] + ')'}}
    onClick={props.updateKeyColor}>
      {props.letter}
  </button>
);

class Board extends React.Component {
  const letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A',
  'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  constructor(props) {
    super(props);
    this.state = {
      const letterList = [];
      letters.map(letter) => {
        letterList.push({letter: [0,0,0]});
      }
      currentColor: 'red',
    };
    this.updateKeyColor.bind(this)
    this.changeColor.bind(this)
  }
  updateKeyColor(letter) {
    if (this.state.currentColor === 'red') {
      this.setState({ letterList[letter][0]++ })
    } else if (this.state.currentColor === 'green') {
      this.setState({ letterList[letter][1]++ })
    } else {
      this.setState({ letterList[letter][2]++ })
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
        {letters.map(letter) =>
          {<Key
            key={letter} letter={letter}
            updateKeyColor={this.updateKeyColor}
            color={this.state.letterList[letter]} />
          }
        }
        <Spacebar changeColor={this.changeColor} />
      </center>
    );
  } //end render
} //end Board

ReactDOM.render(<Board />, document.getElementById('root'));
