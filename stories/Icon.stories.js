import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import MuiDecorator from './Provider.stories';
import { Icon } from '../src/index';

storiesOf('Icon', module)
  .addDecorator(MuiDecorator)
  .add('Simple', () => <Icon>home</Icon>)
  .add('With color', () => <Icon color='#E15757'>fa-id-card-o</Icon>)

