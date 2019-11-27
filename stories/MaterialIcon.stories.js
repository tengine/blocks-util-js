import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import MuiDecorator from './Provider.stories';
import { MaterialIcon } from '../src/index';

storiesOf('MaterialIcon', module)
  .addDecorator(MuiDecorator)
  .add('Simple', () => <MaterialIcon>home</MaterialIcon>)
  .add('With color', () => <MaterialIcon color='#E15757'>flight_takeoff</MaterialIcon>)

