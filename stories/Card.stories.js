import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import MuiDecorator from './Provider.stories';
import { Card } from '../src/index';

storiesOf('Card', module)
  .addDecorator(MuiDecorator)
  .add('Simple', () => (
    <Card>
      <li>Item#1</li>
      <li>Item#2</li>
      <li>Item#3</li>
      <li>Item#4</li>
      <li>Item#5</li>
    </Card>
  ))
