import React from 'react';
import ReactDOM from 'react-dom';
import MuiPopover from 'material-ui/Popover';
import classnames from 'classnames';
import _ from 'lodash';

const styles = {
  root: {
    boxShadow: 'initial',
    // overflow: 'visible',
  }
}

export const Popover = ({ arrow, style, className, ...props }) => {
  return (
    <MuiPopover
      style={ arrow ? _.defaults(style, styles.root) : style }
      className={ arrow ? classnames(className, 'triangle', `triangle-${arrow}`) : className }
      { ...props }
      />
  )
}
