"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTheme = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _styles = require("@material-ui/core/styles");

var _colors = require("@material-ui/core/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultTheme = (0, _styles.createMuiTheme)({
  /**
   * Base theme
   * @see {@link https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/lightBaseTheme.js}
   */
  spacing: {
    desktopDropDownMenuFontSize: 12,
    desktopToolbarHeight: 30
  },
  palette: {
    primary1Color: _colors.cyan[600],
    primary2Color: _colors.cyan[600],
    primary3Color: _colors.grey[500],
    accent1Color: _colors.red[400],
    accent2Color: _colors.grey[300],
    accent3Color: _colors.grey[600],
    textColor: _colors.grey[600],
    secondaryTextColor: _colors.grey[600],
    alternateTextColor: _colors.common.white,
    canvasColor: _colors.common.white,
    borderColor: _colors.grey[500],
    disabledColor: _colors.grey[600],
    pickerHeaderColor: _colors.cyan[600] // shadowColor: 'none',

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
    bodyColor: _colors.grey[600]
  },
  textField: {
    errorColor: _colors.red[400],
    backgroundColor: 'transparent'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }
});
exports.defaultTheme = defaultTheme;