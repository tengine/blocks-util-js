import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import MuiDecorator from './Provider.stories';
import { DatePicker } from '../src/index';

storiesOf('DatePicker', module)
  .addDecorator(MuiDecorator)
  .add('Simple', () => (
    <div>
      <DatePicker hintText="Portrait Dialog" />
      <DatePicker hintText="Landscape Dialog" mode="landscape" />
      <DatePicker hintText="Dialog Disabled" disabled={true} />
      <DatePicker hintText="Open to Year" openToYearSelection={true} />
    </div>
  ))
