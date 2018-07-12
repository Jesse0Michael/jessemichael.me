import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import orange from "@material-ui/core/colors/orange";
import red from "@material-ui/core/colors/red";
import Nav from "../../components/Nav";
import Foot from "../../components/Foot";
import Home from "../../containers/Home";
import Projects from "../../containers/Projects";
import Bio from "../../containers/Bio";
import "./App.css";

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: orange,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});

class App extends Component {
  constructor(p) {
    super(p);
    this.state = {
      page: "home"
    };
  }

  renderContent() {
    switch (this.state.page) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects />;
      case "bio":
        return <Bio />;
      default:
        return <Home />;
    }
  }

  setPage = newPage => {
    this.setState({ page: newPage });
  };

  render() {
    return (
      <div className="app">
        <MuiThemeProvider theme={theme}>
          <Nav page={this.state.page} pageTurn={this.setPage} />
          {this.renderContent()}
          <Foot />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
