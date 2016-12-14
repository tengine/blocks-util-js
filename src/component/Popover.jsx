import React, { Component } from 'react';
import MuiPopover from 'material-ui/Popover';
import classnames from 'classnames';
import _ from 'lodash';

const styles = {
  root: {
    boxShadow: 'initial',
    // overflow: 'visible',
  }
}

export class Popover extends Component {
  render() {
    const { allow } = this.props; // custom porp
    const { style, className } = this.props;
    return (
      <MuiPopover
        style={ allow ? _.defaults(styles.root, style) : style }
        className={ allow ? classnames(className, 'triangle', `triangle-${allow}`) : className }
        { ...this.props }
        />
    );
  }
}
