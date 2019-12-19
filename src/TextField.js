import React from 'react';
import ReactDOM from 'react-dom';
import MuiTextField from 'material-ui/TextField';
import { grey300, grey400, grey700 } from 'material-ui/styles/colors';

const styles = {
  root: {
    fontSize: 12,
    height: 'initial',
  },
  floatingLabel: {
    position: 'initial',
    top: 'initial',
  },
  floatingLabelFocus: {
    color: `${grey700}`,
  },
  input: {
    position: 'relative',
    marginTop: 'initial',
    height: 'initial',
    padding: 5,
    borderStyle: 'solid',
    borderRadius: 2,
    borderColor: `${grey300}`,
    borderWidth: 1,
  },
  textarea: {
    marginTop: 'initial',
    marginBottom: 'initial',
    padding: 0,
    borderWidth: 1,
  },
  hint: {
    color: `${grey400}`,
    bottom: 'initial',
    padding: 5,
    margin: 2,
  },
  error: {
    position: 'initial',
    marginTop: 5,
    bottom: 'initial',
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

const TextField = ({ 
  style, 
  inputStyle, 
  textareaStyle, 
  floatingLabelStyle, 
  floatingLabelFocusStyle, 
  errorStyle, 
  hintStyle, 
  underlineStyle,
  underlineFocusStyle, 
  underlineDisabledStyle,
  children,
  ...props
}) => {
  return (
    <MuiTextField
      { ...props }
       style={{...styles.root, ...style}}
       inputStyle={{...styles.input, ...inputStyle}}
       textareaStyle={{...styles.textarea, ...textareaStyle}}
       hintStyle={{...styles.hint, ...hintStyle}}
       errorStyle={{...styles.error, ...errorStyle}}
       floatingLabelStyle={{...styles.floatingLabel, ...floatingLabelStyle}}
       floatingLabelFocusStyle={{...styles.floatingLabelFocus, ...floatingLabelFocusStyle}}
       underlineStyle={{...styles.underline, ...underlineStyle}}
       underlineFocusStyle={{...styles.underlineFocus, ...underlineFocusStyle}}
       underlineDisabledStyle={{...styles.underlineDisabled, ...underlineDisabledStyle}}
      />
  )
}
export default TextField
