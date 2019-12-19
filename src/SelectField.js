import React from 'react';
import ReactDOM from 'react-dom';
import MuiSelectField from 'material-ui/SelectField';
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
        style={{...styles.root, ...style}}
        inputStyle={{...styles.input, ...inputStyle}}
        labelStyle={{...styles.label, ...labelStyle}}
        menuStyle={{...styles.menu, ...menuStyle}}
        iconStyle={{...styles.icon, ...iconStyle}}
        hintStyle={{...styles.hint, ...hintStyle}}
        errorStyle={{...styles.error, ...errorStyle}}
        floatingLabelStyle={{...styles.floatingLabel, ...floatingLabelStyle}}
        floatingLabelFocusStyle={{...styles.floatingLabelFocus, ...floatingLabelFocusStyle}}
        underlineStyle={{...styles.underline, ...underlineStyle}}
        underlineFocusStyle={{...styles.underlineFocus, ...underlineFocusStyle}}
        underlineDisabledStyle={{...styles.underlineDisabled, ...underlineDisabledStyle}}
      >
      { children }
    </MuiSelectField>
  )
}
