import React, { Component } from 'react';
import './Nav.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
      <AppBar>
        <Toolbar>
          <img className="nav-logo" src="/icons/jesseW.png" />
          <Button color="inherit">Home</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Bio</Button>
        </Toolbar>
      </AppBar>
      </div>
    )
  }
}

export default Nav;
