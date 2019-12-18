import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import MuiDecorator from './Provider.stories';
import { TextField } from '../src/index';

storiesOf('TextField', module)
  .addDecorator(MuiDecorator)
  .add('With hintText', () => (
    <TextField hintText="Hint Text" />
  ))
  .add('With defaultValue', () => (
    <TextField
      defaultValue="Default Value"
      floatingLabelText="Floating Label Text"
      />
  ))
  .add('With errorText', () => (
    <TextField
      hintText="Hint Text"
      errorText="The error text can be as long as you want, it will wrap."
    />
  ))
  .add('With floatingLabelText', () => (
    <TextField
      hintText="Hint Text"
      errorText="This field is required"
      floatingLabelText="Floating Label Text"
    />
  ))
  .add('With disabled', () => (
    <TextField
      disabled={true}
      hintText="Disabled Hint Text"
    />
  ))
  .add('With all', () => (
    <TextField
      disabled={true}
      hintText="Disabled Hint Text"
      defaultValue="Disabled With Floating Label"
      floatingLabelText="Floating Label Text"
    />
  ))
