import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import MuiDecorator from './Provider.stories';
import { Divider } from '../src/index';

storiesOf('Divider', module)
  .addDecorator(MuiDecorator)
  .add('Simple', () => (
    <div>
      <div>Field#1</div>
      <Divider />
      <div>Field#2</div>
      <Divider />
    </div>
  ))
