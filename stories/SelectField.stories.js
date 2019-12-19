import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import MuiDecorator from './Provider.stories';
import { SelectField } from '../src/index';

storiesOf('SelectField', module)
  .addDecorator(MuiDecorator)
  .add('Simple', () => (
    <SelectField 
      floatingLabelText="Frequency"
      value={1}
      />
  ))
