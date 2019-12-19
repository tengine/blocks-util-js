import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import MuiDecorator from './Provider.stories';
import { IconMenu, IconButton, MenuItem } from '../src/index';

class WrapedPopover extends React.Component {
  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
        >
          <MenuItem primaryText="Refresh" />
          <MenuItem primaryText="Send feedback" />
          <MenuItem primaryText="Settings" />
          <MenuItem primaryText="Help" />
          <MenuItem primaryText="Sign out" />
        </IconMenu>
      </div>
    )
  }
}

storiesOf('IconMenu', module)
  .addDecorator(MuiDecorator)
  .add('Simple', () => (
    <WrapedPopover />
  ))
