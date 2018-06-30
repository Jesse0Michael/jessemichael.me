import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from './containers/Projects';
import Nav from './components/Nav';
import Foot from './components/Foot';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange';
import red from '@material-ui/core/colors/red';

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
    tonalOffset: 0.2,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Nav />
      <Content />
      <Foot />
    </MuiThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
