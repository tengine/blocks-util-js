import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MuiDecorator from './Provider.stories';
import { AutoComplete } from '../src/index';

storiesOf('AutoComplete', module)
  .addDecorator(MuiDecorator)
  .add('Simple', () => (
    <AutoComplete
      hintText="Enter the 'a'"
      dataSource={[
        "abc",
        "abc123",
        "abc123xyz",
      ]}
      onUpdateInput={action("onUpdateInput")}
      />
  ))
