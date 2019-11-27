import React, { Component } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import MuiDecorator from './Provider.stories';
import { Popover } from '../src/index';

const Content = () => (
  <div style={{border: "solid 1px grey", width: 100, height: 100}}>
    Content
  </div>
)

class WrapedPopover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
    }
  }
  render() {
    const { open, anchorEl } = this.state;
    const { arrow, anchorOrigin, targetOrigin, onRequestClose } = this.props;
    return (
      <div>
        <button onClick={e => this.setState({
          open: true,
          anchorEl: e.currentTarget,
        })}>
          Click me
        </button>
        <Popover
          open={open}
          arrow={arrow}
          anchorEl={anchorEl}
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          onRequestClose={e => this.setState({
            open: false,
          })}
        >
          <Content />
        </Popover>
      </div>
    )
  }
}

storiesOf('Popover', module)
  .addDecorator(MuiDecorator)
  .addDecorator(storyFn => <div style={{margin: 120}}>{storyFn()}</div>)
  .add('arrow=bottom-left', () => (
    <WrapedPopover
      arrow={"bottom-left"}
      anchorOrigin={{
        horizontal: 'middle',
        vertical: 'bottom',
      }}
      targetOrigin={{
        horizontal: 'middle',
        vertical: 'top',
      }}
    />
  ))

