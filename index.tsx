import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Area from "./components/3d/Area";

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
      <Area />
    );
  }
}

render(<App />, document.getElementById('root'));
