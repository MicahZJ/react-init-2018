import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import logo from './logo.svg';
import './App.css';
import AppRoute from './AppRouter'
import AppStore from './AppStore'

class App extends Component {

  render() {
    return (
      <Provider {...AppStore}>
        <AppRoute />
      </Provider>
    )
  }
}

export default App
