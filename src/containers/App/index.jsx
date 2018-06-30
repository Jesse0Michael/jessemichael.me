import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Content from '../../components/Content';
import Foot from '../../components/Foot';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App mdl-layout__container">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Nav />
          <main className="mdl-layout__content">
            <Content />
          <Foot />
          </main>
        </div>
      </div>
    )
  }
}

export default App;
