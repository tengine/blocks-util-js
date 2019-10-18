import React, { Component } from 'react';
import MuiPopover from '@material-ui/core/Popover';
import classnames from 'classnames';
import _ from 'lodash';
import "../style/index.scss";

const styles = {
  root: {
    boxShadow: 'initial',
    // overflow: 'visible',
  }
}

export class Popover extends Component {
  render() {
    const { arrow, style, className, ...props } = this.props;
    return (
      <MuiPopover
        style={ arrow ? _.defaults(style, styles.root) : style }
        className={ arrow ? classnames(className, 'triangle', `triangle-${arrow}`) : className }
        { ...props }
        />
    );
  }
}
