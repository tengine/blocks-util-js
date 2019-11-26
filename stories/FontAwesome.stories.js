import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import MuiDecorator from './Provider.stories';
import { FontAwesome } from '../src/index';

storiesOf('FontAwesome', module)
  .addDecorator(MuiDecorator)
  .add('Simple', () => <FontAwesome>fa-heart</FontAwesome>)
  .add('With color', () => <FontAwesome color='#E15757'>fa-id-card-o</FontAwesome>)

