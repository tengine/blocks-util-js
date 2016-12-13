'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTheme = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _colors = require('./colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var white = _colors.colors.white,
    cyan500 = _colors.colors.cyan500,
    cyan600 = _colors.colors.cyan600,
    grey300 = _colors.colors.grey300,
    grey500 = _colors.colors.grey500,
    lightGrey600 = _colors.colors.lightGrey600,
    red500 = _colors.colors.red500,
    blue500 = _colors.colors.blue500;
// import { white, 
//   cyan500, cyan600,
//   grey300, grey500, lightGrey600, red500, blue500,
// } from './colors';

var defaultTheme = exports.defaultTheme = (0, _getMuiTheme2.default)({
  /**
   * Base theme
   * @see {@link https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/lightBaseTheme.js}
   */
  spacing: {
    desktopDropDownMenuFontSize: 12,
    desktopToolbarHeight: 30
  },
  palette: {
    primary1Color: cyan600,
    primary2Color: cyan600,
    primary3Color: grey300,
    accent1Color: red500,
    accent2Color: lightGrey600,
    accent3Color: grey500,
    textColor: grey500,
    secondaryTextColor: grey500,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: grey500,
    pickerHeaderColor: cyan500,
    shadowColor: 'none'
  },
  /**
   * Components theme
   * @see {@link https://github.com/callemall/material-ui/tree/master/src}
   */
  button: {
    textTransform: 'none'
  },
  flatButton: {
    // textTransform: 'none',
  },
  dialog: {
    titleFontSize: 14,
    bodyFontSize: 12,
    bodyColor: grey500
  },
  textField: {
    errorColor: red500,
    backgroundColor: 'transparent'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }
});