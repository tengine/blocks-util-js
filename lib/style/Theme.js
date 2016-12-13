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
    primary1Color: _colors.cyan500,
    primary2Color: _colors.cyan600,
    primary3Color: _colors.grey300,
    accent1Color: _colors.red500,
    accent2Color: _colors.lightGrey600,
    accent3Color: _colors.grey500,
    textColor: _colors.grey500,
    secondaryTextColor: _colors.grey500,
    alternateTextColor: _colors.white,
    canvasColor: _colors.white,
    borderColor: _colors.grey300,
    disabledColor: _colors.grey500,
    pickerHeaderColor: _colors.cyan500,
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
    textTransform: 'none'
  },
  dialog: {
    titleFontSize: 14,
    bodyFontSize: 12,
    bodyColor: _colors.grey500
  },
  textField: {
    errorColor: _colors.red500,
    backgroundColor: 'transparent'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }
});