import './App.css'
import React, { Component } from 'react'
import Upbar from './components/Upbar';
import News from './components/News';

export class App extends Component {
  render() {
    return (
      <div>
        <Upbar/>
        <News/>
      </div>
    )
  }
}

export default App