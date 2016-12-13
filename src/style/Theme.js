import _ from 'lodash';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import { white, 
//   cyan500, cyan600,
//   grey300, grey500, lightGrey600, red500, blue500,
// } from './colors';
import { colors } from './colors';
const { white, 
  cyan500, cyan600,
  grey300, grey500, lightGrey600, red500, blue500
} = colors;

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
    shadowColor: 'none',
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
    bodyColor: grey500,
  },
  textField: {
    errorColor: red500,
    backgroundColor: 'transparent',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});
