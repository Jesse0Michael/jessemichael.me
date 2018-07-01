import React from "react";
import PropTypes from "prop-types";
import "./Nav.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const Nav = ({ page, pageTurn }) => (
  <div className="nav">
    <AppBar>
      <Toolbar>
        <img className="nav-logo" src="/icons/jesseW.png" />
        <Button className="nav-button" style={page == "home" ? {backgroundColor: "#888"} : {}} onClick={e => pageTurn("home", e)}>
          <span className="nav-text">Home</span>
        </Button>
        <Button className="nav-button" style={page == "projects" ? {backgroundColor: "#888"} : {}} onClick={e => pageTurn("projects", e)}>
          <span className="nav-text">Projects</span>
        </Button>
        <Button className="nav-button" style={page == "bio" ? {backgroundColor: "#888"} : {}} onClick={e => pageTurn("bio", e)}>
          <span className="nav-text">Bio</span>
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);

Nav.propTypes = {
  page: PropTypes.string.isRequired,
  pageTurn: PropTypes.func.isRequired
};

export default Nav;
