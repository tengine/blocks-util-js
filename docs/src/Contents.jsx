import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { 
  defaultTheme,
} from '../../src/index';

import DialogExample from './DialogExample';
import FlatButtonExample from './FlatButtonExample';
import FontAwesomeExample from './FontAwesomeExample';
import MaterialIconExample from './MaterialIconExample';
import ColorExample from './ColorExample';


export default class Main extends Component {
  render() {
    return (
      <div className="container pt-3 pb-3 markdown-body">
        <FlatButtonExample />
        <DialogExample />
        <FontAwesomeExample />
        <MaterialIconExample />
        <ColorExample />
      </div>
    );
  }
}
