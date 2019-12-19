"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getMuiTheme = _interopRequireDefault(require("material-ui/styles/getMuiTheme"));

var _colors = require("material-ui/styles/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultTheme = (0, _getMuiTheme["default"])({
  /**
   * Base theme
   * @see {@link https://github.com/mui-org/material-ui/blob/v0.16.7/src/styles/baseThemes/lightBaseTheme.js}
   */
  spacing: {
    desktopDropDownMenuFontSize: 12,
    desktopToolbarHeight: 30
  },
  palette: {
    primary1Color: _colors.lightBlue800,
    primary2Color: _colors.lightBlue800,
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
    pickerHeaderColor: _colors.lightBlue800 // shadowColor: 'none',

  },

  /**
   * Components theme
   * @see {@link https://github.com/mui-org/material-ui/tree/v0.16.7/src}
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
  },
  radioButton: {
    checkedColor: _colors.lightBlue800
  },
  checkbox: {
    checkedColor: _colors.lightBlue800
  },
  datePicker: {
    color: _colors.lightBlue800,
    // 年選択モード時のアクティブなテキスト色
    textColor: _colors.white,
    // ヘッダのテキスト色
    calendarYearBackgroundColor: _colors.white,
    // 年選択モードの背景色
    selectColor: _colors.lightBlue800,
    selectTextColor: _colors.white,
    headerColor: _colors.lightBlue800 // ヘッダの背景色

  }
});
var _default = defaultTheme;
exports["default"] = _default;