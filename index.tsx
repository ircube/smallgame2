import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import SceneThree from './SceneThree';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <SceneThree />
    );
  }
}

render(<App />, document.getElementById('root'));
