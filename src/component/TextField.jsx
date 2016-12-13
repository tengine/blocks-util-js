import React, { Component } from 'react';
import MuiTextField from 'material-ui/TextField';
import _ from 'lodash';
import { grey300, grey700, lightGrey700 } from '../style/colors';

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
    borderColor: `${lightGrey700}`,
    borderWidth: 1,
  },
  textarea: {
    marginTop: 'initial',
    marginBottom: 'initial',
    padding: 0,
    borderWidth: 1,
  },
  hint: {
    color: `${grey300}`,
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

export class TextField extends Component {
  render() {
    const { 
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
    } = this.props;
    return (
      <MuiTextField
        { ...this.props }
        style={ _.defaults(styles.root, style) }
        inputStyle={ _.defaults(styles.input, inputStyle) }
        textareaStyle={ _.defaults(styles.textarea, textareaStyle) }
        hintStyle={ _.defaults(styles.hint, hintStyle) }
        errorStyle={ _.defaults(styles.error, errorStyle) }
        floatingLabelStyle={ _.defaults(styles.floatingLabel, floatingLabelStyle) }
        floatingLabelFocusStyle={ _.defaults(styles.floatingLabelFocus, floatingLabelFocusStyle) }
        underlineStyle={ _.defaults(styles.underline, underlineStyle) }
        underlineFocusStyle={ _.defaults(styles.underlineFocus, underlineFocusStyle) }
        underlineDisabledStyle={ _.defaults(styles.underlineDisabled, underlineDisabledStyle) }
        />
    );
  }
}
