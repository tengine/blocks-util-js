import React, { Component } from 'react';
import _ from 'lodash';
import { 
  TextField,
} from '../../src/index';
import CodeExample from './CodeExample';

export default class TextFieldExample extends Component {
  render() {
    return (
      <div>
        <h2>TextField</h2>
        <TextField hintText="Hint Text" />
        <CodeExample code="<TextField hintText='Hint Text' />" />
        <br />
        <TextField
          defaultValue="Default Value"
          floatingLabelText="Floating Label Text"
          />
        <CodeExample code="<TextField defaultValue='Default Value' floatingLabelText='Floating Label Text' />" />
        <br />
        <TextField
          hintText="Hint Text"
          errorText="The error text can be as long as you want, it will wrap."
        />
        <CodeExample code="<TextField hintText='Hint Text' errorText='The error text can be as long as you want, it will wrap.' />" />
        <br />
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Floating Label Text"
        />
        <CodeExample code="<TextField hintText='Hint Text' errorText='This field is required' floatingLabelText='Floating Label Text' />" />
        <br />
        <TextField
          disabled={true}
          hintText="Disabled Hint Text"
        />
        <CodeExample code="<TextField disabled={true} hintText='Disabled Hint Text' />" />
        <br />
        <TextField
          disabled={true}
          hintText="Disabled Hint Text"
          defaultValue="Disabled With Floating Label"
          floatingLabelText="Floating Label Text"
        />
        <CodeExample code="<TextField disabled={true} hintText='Disabled Hint Text' defaultValue='Disabled With Floating Label' floatingLabelText='Floating Label Text' />" />
      </div>
    );
  }
}
