import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  white, 
  red400,
  cyan600,
  grey300,
  grey500,
  grey600,
  } from 'material-ui/styles/colors';

export const defaultTheme = getMuiTheme({
  /**
   * Base theme
   * @see {@link https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/lightBaseTheme.js}
   */
  spacing: {
    desktopDropDownMenuFontSize: 12,
    desktopToolbarHeight: 30,
  },
  palette: {
    primary1Color: cyan600,
    primary2Color: cyan600,
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
    pickerHeaderColor: cyan600,
    // shadowColor: 'none',
  },
  /**
   * Components theme
   * @see {@link https://github.com/callemall/material-ui/tree/master/src}
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
});
