import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { 
  defaultTheme,
} from '../../src/index';

import DialogExample from './DialogExample';
import PopoverExample from './PopoverExample';
import FlatButtonExample from './FlatButtonExample';
import RaisedButtonExample from './RaisedButtonExample';
import FontAwesomeExample from './FontAwesomeExample';
import MaterialIconExample from './MaterialIconExample';
import TextFieldExample from './TextFieldExample';
import SelectFieldExample from './SelectFieldExample';
import ColorExample from './ColorExample';


export default class Main extends Component {
  render() {
    return (
      <div className="container pt-3 pb-3 markdown-body">
        <FlatButtonExample />
        <RaisedButtonExample />
        <DialogExample />
        <PopoverExample />
        <FontAwesomeExample />
        <MaterialIconExample />
        <TextFieldExample />
        <SelectFieldExample />
        <ColorExample />
      </div>
    );
  }
}
