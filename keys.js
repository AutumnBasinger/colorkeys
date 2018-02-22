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
    return (
      <center>
        <KeyParent currentColor={this.state.currentColor} letter={'Q'} />)
        <KeyParent currentColor={this.state.currentColor} letter={'W'} />)
        <Spacebar changeColor={this.changeColor} />
      </center>
    );
  } //end render
} //end Board

ReactDOM.render(<Board />, document.getElementById('root'));
