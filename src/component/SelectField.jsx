import React, { Component } from 'react';
import MuiSelectField from 'material-ui/SelectField';
import _ from 'lodash';
import { grey300, grey700, lightGrey700 } from '../style/colors';

const styles = {
  root: {
    fontSize: 12,
    height: 'inheri',
  },
  input: {
    top: 0,
    position: 'relative',
    marginTop: 'initial',
    height: 'initial',
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
    borderColor: `${lightGrey700}`,
  },
  hint: {
    lineHeight: 'initial',
  },
  icon: {
    top: 4,
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

export class SelectField extends Component {
  render() {
    const { 
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
    } = this.props;
    return (
      <MuiSelectField
        { ...this.props }
        style={ _.defaults(styles.root, style) }
        inputStyle={ _.defaults(styles.input, inputStyle) }
        labelStyle={ _.defaults(styles.label, labelStyle) }
        menuStyle={ _.defaults(styles.menu, menuStyle) }
        iconStyle={ _.defaults(styles.icon, iconStyle) }
        hintStyle={ _.defaults(styles.hint, hintStyle) }
        errorStyle={ _.defaults(styles.error, errorStyle) }
        floatingLabelStyle={ _.defaults(styles.floatingLabel, floatingLabelStyle) }
        floatingLabelFocusStyle={ _.defaults(styles.floatingLabelFocus, floatingLabelFocusStyle) }
        underlineStyle={ _.defaults(styles.underline, underlineStyle) }
        underlineFocusStyle={ _.defaults(styles.underlineFocus, underlineFocusStyle) }
        underlineDisabledStyle={ _.defaults(styles.underlineDisabled, underlineDisabledStyle) }
        >
        { this.props.children }
      </MuiSelectField>
    );
  }
}
