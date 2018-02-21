class KeyParent extends React.Component {
  constructor(props) { //needs currentColor and letter as props from Board
    super(props);
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
    this.updateKeyColor.bind(this);
  }
  updateKeyColor() {
    if (this.props.currentColor === 'red') {
      this.setState({red++})
    } else if (this.props.currentColor === 'green') {
      this.setState({green++})
    } else {
      this.setState({blue++})
    }
  }
  render() {
    <Key
      red={this.state.red}
      green={this.state.green}
      blue={this.state.blue}
      letter={this.props.letter}
      updateKeyColor={this.updateKeyColor} />
  }
}

const Key = props => (
  <button
    style={{background:'rgb(' + props.red + ',' + props.blue + ',' + props.green + ')'}}
    onClick={props.updateKeyColor}>
      {props.letter}
  </button>
);

const Spacebar = props => (
  <button onClick={props.changeColor}>Spacebar</button>
);



// const letters = [
//   'Q','W','E','R','T','Y','U','I','O','P','A','S','D',
//   'F','G','H','J','K','L','Z','X','C','V','B','N','M'
// ];

// const letters = [
//   'Q','W','E'
// ];

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentColor: 'red'};
    this.changeColor.bind(this)
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
        <KeyParent currentColor={this.state.currentColor} letter={'Q'} />)
        <Spacebar changeColor={this.changeColor} />
      </center>
    );
  } //end render
} //end Board

ReactDOM.render(<Board />, document.getElementById('root'));
