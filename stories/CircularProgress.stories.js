import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import MuiDecorator from './Provider.stories';
import { CircularProgress } from '../src/index';

storiesOf('CircularProgress', module)
  .addDecorator(MuiDecorator)
  .add('Simple', () => <CircularProgress />)
  .add('with size', () => <CircularProgress size={60} />)
  .add('with thickness', () => <CircularProgress size={80} thickness={7} />)
