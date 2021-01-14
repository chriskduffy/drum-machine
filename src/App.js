import './App.css';
import React, { Component } from 'react'
import playAudio from './components/AudioPlayer'
import descriptionName from './components/descriptionName';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      description: '',
      keyPress: ''
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);
  }
  handleKeyPress = (KeyboardEvent) => {
    this.setState({keyPress: KeyboardEvent.key})
    this.setState({ description: descriptionName(this.state.keyPress)})
    playAudio(this.state.keyPress)
  }

  handleMouseClick = (event) => {
    let letter = event.target.id
    this.setState({keyPress: letter})
    this.setState({ description: descriptionName(this.state.keyPress)})
    playAudio(this.state.keyPress)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
    document.addEventListener('click', this.handleMouseClick)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
    document.removeEventListener('click', this.handleMouseClick)
  }
  
  render() {
    return ( 
      <div className="App">
        <div id="container">
          <h2 id="title">MPC -1000</h2>
          <div id="drum-machine">
          <div id="pads" className="padContainer">
            <button id="q" className="drum-pad">Q</button>
            <button id="w" className="drum-pad">W</button>
            <button id="e" className="drum-pad">E</button>
            <button id="a" className="drum-pad">A</button>
            <button id="s" className="drum-pad">S</button>
            <button id="d" className="drum-pad">D</button>
            <button id="z" className="drum-pad">Z</button>
            <button id="x" className="drum-pad">X</button>
            <button id="c" className="drum-pad">C</button>
         </div>
            <div id="display">
              <p3>{this.state.description}</p3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
