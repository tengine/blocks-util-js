import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { 
  defaultTheme,
} from '../../src/index';
import Header from './Header';
import Contents from './Contents';


export default class Main extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={defaultTheme}>
        <div>
          <Header />
          <Contents />
        </div>
      </MuiThemeProvider>
    );
  }
}
