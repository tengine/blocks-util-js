import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import MuiDecorator from './Provider.stories';
import { FlatButton } from '../src/index';

storiesOf('FlatButton', module)
  .addDecorator(MuiDecorator)
  .add('backgroundColor', () => <FlatButton label={"Label"} backgroundColor={"black"} />)
  .add('Default', () => <FlatButton label="Default" />)
  .add('Primary', () => <FlatButton label="Primary" primary={true} />)
  .add('Secondary', () => <FlatButton label="Secondary" secondary={true} />)
  .add('Disabled', () => <FlatButton label="Disabled" disabled={true} />)

