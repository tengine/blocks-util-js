import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MuiDecorator from './Provider.stories';
import { Checkbox } from '../src/index';

storiesOf('Checkbox', module)
  .addDecorator(MuiDecorator)
  .add('checked', () => (
    <Checkbox
      label="Simple with controlled value"
      checked={true}
      onCheck={action("onCheck")}
    />
  ))
  .add('not checked', () => (
    <Checkbox
      label="Simple with controlled value"
      checked={false}
      onCheck={action("onCheck")}
    />
  ))
  .add('disabled', () => (
    <Checkbox
      label="Simple with controlled value"
      checked={false}
      disabled={true}
      onCheck={action("onCheck")}
    />
  ))
