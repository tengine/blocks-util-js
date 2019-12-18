import React, { Component } from 'react';
import MuiTextField from 'material-ui/TextField';
import _ from 'lodash';
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
      children,
      ...props
    } = this.props;
    return (
      <MuiTextField
        { ...props }
         style={ _.defaults(style, styles.root) }
         inputStyle={ _.defaults(inputStyle, styles.input) }
         textareaStyle={ _.defaults(textareaStyle, styles.textarea) }
         hintStyle={ _.defaults(hintStyle, styles.hint) }
         errorStyle={ _.defaults(errorStyle, styles.error) }
         floatingLabelStyle={ _.defaults(floatingLabelStyle, styles.floatingLabel) }
         floatingLabelFocusStyle={ _.defaults(floatingLabelFocusStyle, styles.floatingLabelFocus) }
         underlineStyle={ _.defaults(underlineStyle, styles.underline) }
         underlineFocusStyle={ _.defaults(underlineFocusStyle, styles.underlineFocus) }
         underlineDisabledStyle={ _.defaults(underlineDisabledStyle, styles.underlineDisabled) }
        />
    );
  }
}
