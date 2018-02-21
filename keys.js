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
  updateKeyColor(props) {
    if (props.currentColor === 'red') {
      this.setState({red: red+1})
    } else if (props.currentColor === 'green') {
      this.setState({green: green+1})
    } else if (props.currentColor === 'blue') {
      this.setState({blue: blue+1})
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
    style={{background:'rgb(' + props.red + ',' + props.blue + ',' + props.green + ')'}}
    onClick={props.updateKeyColor}>
      {props.letter}
  </button>
);

const Spacebar = (props) => (
  <button onClick={props.changeColor}>Spacebar</button>
);

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentColor: 'red'};
    this.changeColor.bind(this)
  }
  changeColor(state) {
    if(state.currentColor === 'red') {
      this.setState({ currentColor: 'green' })
    } else if (state.currentColor === 'green') {
      this.setState({ currentColor: 'blue' })
    } else if (state.currentColor === 'blue') {
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
