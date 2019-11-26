"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTheme = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _getMuiTheme = _interopRequireDefault(require("material-ui/styles/getMuiTheme"));

var _colors = require("material-ui/styles/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultTheme = (0, _getMuiTheme["default"])({
  /**
   * Base theme
   * @see {@link https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/lightBaseTheme.js}
   */
  spacing: {
    desktopDropDownMenuFontSize: 12,
    desktopToolbarHeight: 30
  },
  palette: {
    primary1Color: _colors.cyan600,
    primary2Color: _colors.cyan600,
    primary3Color: _colors.grey500,
    accent1Color: _colors.red400,
    accent2Color: _colors.grey300,
    accent3Color: _colors.grey600,
    textColor: _colors.grey600,
    secondaryTextColor: _colors.grey600,
    alternateTextColor: _colors.white,
    canvasColor: _colors.white,
    borderColor: _colors.grey500,
    disabledColor: _colors.grey600,
    pickerHeaderColor: _colors.cyan600 // shadowColor: 'none',

  },

  /**
   * Components theme
   * @see {@link https://github.com/callemall/material-ui/tree/master/src}
   */
  button: {
    textTransform: 'none'
  },
  dialog: {
    titleFontSize: 14,
    bodyFontSize: 12,
    bodyColor: _colors.grey600
  },
  textField: {
    errorColor: _colors.red400,
    backgroundColor: 'transparent'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }
});
exports.defaultTheme = defaultTheme;