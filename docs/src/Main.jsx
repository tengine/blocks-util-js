import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { 
  defaultTheme,
} from '../../src/index';
// import '../../lib/index.css';
import '../../style/index.scss';

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
