import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import MuiDecorator from './Provider.stories';
import { IconButton } from '../src/index';


storiesOf('IconButton', module)
  .addDecorator(MuiDecorator)
  .add('Simple', () => (
    <div>
      <IconButton><i className="material-icons">home</i></IconButton>
      <IconButton disabled={true}><i className="material-icons">home</i></IconButton>
    </div>
  ))
