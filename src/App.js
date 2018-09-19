import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ComponentShowTime from './ComponentShowTime'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputDate: '',
      showFlag: true
    }
  }

  handleShowHide() {
    console.log('111', this.state.showFlag)
    this.setState({
      showFlag: !this.state.showFlag
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleShowHide.bind(this)}>显示或隐藏</button>
        {this.state.showFlag ? <ComponentShowTime />: null}
      </div>
    );
  }
}

export default App;
