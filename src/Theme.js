import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  white, 
  red400,
  lightBlue800,
  grey300,
  grey500,
  grey600,
  } from 'material-ui/styles/colors';

const defaultTheme = getMuiTheme({
  /**
   * Base theme
   * @see {@link https://github.com/mui-org/material-ui/blob/v0.16.7/src/styles/baseThemes/lightBaseTheme.js}
   */
  spacing: {
    desktopDropDownMenuFontSize: 12,
    desktopToolbarHeight: 30,
  },
  palette: {
    primary1Color: lightBlue800,
    primary2Color: lightBlue800,
    primary3Color: grey500,
    accent1Color: red400,
    accent2Color: grey300,
    accent3Color: grey600,
    textColor: grey600,
    secondaryTextColor: grey600,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey500,
    disabledColor: grey600,
    pickerHeaderColor: lightBlue800,
    // shadowColor: 'none',
  },
  /**
   * Components theme
   * @see {@link https://github.com/mui-org/material-ui/tree/v0.16.7/src}
   */
  button: {
    textTransform: 'none',
  },
  dialog: {
    titleFontSize: 14,
    bodyFontSize: 12,
    bodyColor: grey600,
  },
  textField: {
    errorColor: red400,
    backgroundColor: 'transparent',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  radioButton: {
    checkedColor: lightBlue800,
  },
  checkbox: {
    checkedColor: lightBlue800,
  },
  datePicker: {
    color: lightBlue800, // 年選択モード時のアクティブなテキスト色
    textColor: white, // ヘッダのテキスト色
    calendarYearBackgroundColor: white, // 年選択モードの背景色
    selectColor: lightBlue800,
    selectTextColor: white,
    headerColor: lightBlue800, // ヘッダの背景色
  },
});

export default defaultTheme