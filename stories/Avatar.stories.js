import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import MuiDecorator from './Provider.stories';
import { Avatar } from '../src/index';

storiesOf('Avatar', module)
  .addDecorator(MuiDecorator)
  .add('Text', () => (
    <Avatar>A</Avatar>
  ))
