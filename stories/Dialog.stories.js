import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MuiDecorator from './Provider.stories';
import { Dialog } from '../src/index';

storiesOf('Dialog', module)
  .addDecorator(MuiDecorator)
  .add("No actions", () => (
    <Dialog
      title="Title"
      modal={false}
      open={true}
      onRequestClose={action("onRequestClose")}>
      The actions in this window were passed in as an array of React objects.
    </Dialog>
  ))
  .add("With actions", () => (
    <Dialog
      actions={[
        <button>Cancel</button>,
        <button>Submit</button>
      ]}
      modal={false}
      open={true}
      onRequestClose={action("onRequestClose")}>
      The actions in this window were passed in as an array of React objects.
    </Dialog>
  ))
