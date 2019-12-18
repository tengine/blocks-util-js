import React from 'react';
import ReactDOM from 'react-dom';
import MuiSelectField from 'material-ui/SelectField';
import _ from 'lodash';
import { grey300, grey700 } from 'material-ui/styles/colors';

const styles = {
  root: {
    fontSize: 12,
    height: 'inherit',
  },
  input: {
    top: 0,
    position: 'relative',
    marginTop: 'initial',
    height: `${24 + (5 * 2) + (1 * 2)}px`,
    padding: 5,
  },
  floatingLabel: {
    position: 'initial',
    top: 'initial',
  },
  floatingLabelFocus: {
    color: `${grey700}`,
  },
  lebel: {
    lineHeight: 'initial',
    color: `red`,
    bottom: 10,
  },
  menu: {
    top: 0,
    marginTop: 'initial',
    borderStyle: 'solid',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: `${grey300}`,
  },
  hint: {
    lineHeight: 'initial',
  },
  icon: {
    top: 0,
    padding: 0,
    height: 26,
    width: 26,
  },
  error: {
    marginTop: 5,
    position: 'initial',
  },
  underline: {
    display: 'none',
  },
  underlineFocus: {
    display: 'none',
  },
  underlineDisabled: {
    display: 'none',
  },
}

export const SelectField = ({ 
  style,
  inputStyle,
  labelStyle, 
  menuStyle,
  floatingLabelStyle, 
  floatingLabelFocusStyle, 
  errorStyle, 
  hintStyle,
  iconStyle, 
  underlineStyle,
  underlineFocusStyle, 
  underlineDisabledStyle,
  children,
  ...props
}) => {
  return (
    <MuiSelectField
      { ...props }
        style={ _.defaults(style, styles.root) }
        inputStyle={ _.defaults(inputStyle, styles.input) }
        labelStyle={ _.defaults(labelStyle, styles.label) }
        menuStyle={ _.defaults(menuStyle, styles.menu) }
        iconStyle={ _.defaults(iconStyle, styles.icon) }
        hintStyle={ _.defaults(hintStyle, styles.hint) }
        errorStyle={ _.defaults(errorStyle, styles.error) }
        floatingLabelStyle={ _.defaults(floatingLabelStyle, styles.floatingLabel) }
        floatingLabelFocusStyle={ _.defaults(floatingLabelFocusStyle, styles.floatingLabelFocus) }
        underlineStyle={ _.defaults(underlineStyle, styles.underline) }
        underlineFocusStyle={ _.defaults(underlineFocusStyle, styles.underlineFocus) }
        underlineDisabledStyle={ _.defaults(underlineDisabledStyle, styles.underlineDisabled) }
      >
      { children }
    </MuiSelectField>
  )
}
