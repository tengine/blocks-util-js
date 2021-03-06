import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { defaultTheme } from '../src';

const MuiDecorator = storyFn => <MuiThemeProvider muiTheme={ defaultTheme }>{storyFn()}</MuiThemeProvider>;

export default MuiDecorator;
