import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import MuiDecorator from './Provider.stories';
import { RaisedButton } from '../src/index';

storiesOf('RaisedButton', module)
  .addDecorator(MuiDecorator)
  .add('Default', () => <RaisedButton label="Default" />)
  .add('Primary', () => <RaisedButton label="Primary" primary={true} />)
  .add('Secondary', () => <RaisedButton label="Secondary" secondary={true} />)
  .add('Disabled', () => <RaisedButton label="Disabled" disabled={true} />)
