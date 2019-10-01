import _ from 'lodash';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  common, 
  red,
  cyan,
  grey,
  } from '@material-ui/core/colors';

export const defaultTheme = createMuiTheme({
  /**
   * Base theme
   * @see {@link https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/lightBaseTheme.js}
   */
  spacing: {
    desktopDropDownMenuFontSize: 12,
    desktopToolbarHeight: 30,
  },
  palette: {
    primary1Color: cyan[600],
    primary2Color: cyan[600],
    primary3Color: grey[500],
    accent1Color: red[400],
    accent2Color: grey[300],
    accent3Color: grey[600],
    textColor: grey[600],
    secondaryTextColor: grey[600],
    alternateTextColor: common.white,
    canvasColor: common.white,
    borderColor: grey[500],
    disabledColor: grey[600],
    pickerHeaderColor: cyan[600],
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
    bodyColor: grey[600],
  },
  textField: {
    errorColor: red[400],
    backgroundColor: 'transparent',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});
