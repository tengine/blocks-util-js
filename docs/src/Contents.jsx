import React, { Component } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { 
  defaultTheme,
} from '../../src/index';

import DialogExample from './DialogExample';
import PopoverExample from './PopoverExample';
import FlatButtonExample from './FlatButtonExample';
import RaisedButtonExample from './RaisedButtonExample';
import FontAwesomeExample from './FontAwesomeExample';
import MaterialIconExample from './MaterialIconExample';
import IconExample from './IconExample';
import TextFieldExample from './TextFieldExample';
import SelectFieldExample from './SelectFieldExample';
import ColorExample from './ColorExample';


export default class Main extends Component {
  render() {
    return (
      <MuiThemeProvider theme={defaultTheme}>
        <div className="container pt-3 pb-3 markdown-body">
          <FlatButtonExample />
          <RaisedButtonExample />
          <DialogExample />
          <PopoverExample />
          <FontAwesomeExample />
          <MaterialIconExample />
          <IconExample />
          <TextFieldExample />
          <SelectFieldExample />
          <ColorExample />
        </div>
      </MuiThemeProvider>
    );
  }
}
