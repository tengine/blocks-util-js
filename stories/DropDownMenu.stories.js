import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MuiDecorator from './Provider.stories';
import { DropDownMenu, MenuItem } from '../src/index';

storiesOf('DropDownMenu', module)
  .addDecorator(MuiDecorator)
  .add('Simple', () => (
    <DropDownMenu value={1} onChange={action("onChange")}>
      <MenuItem value={1} primaryText="Never" />
      <MenuItem value={2} primaryText="Every Night" />
      <MenuItem value={3} primaryText="Weeknights" />
      <MenuItem value={4} primaryText="Weekends" />
      <MenuItem value={5} primaryText="Weekly" />
    </DropDownMenu>
  ))
