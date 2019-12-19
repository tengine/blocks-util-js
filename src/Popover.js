import React from 'react';
import ReactDOM from 'react-dom';
import MuiPopover from 'material-ui/Popover';
import classnames from 'classnames';

const styles = {
  root: {
    boxShadow: 'initial',
    // overflow: 'visible',
  }
}

export const Popover = ({ arrow, style, className, ...props }) => {
  return (
    <MuiPopover
      style={{...styles.root, ...style}}
      className={classnames('triangle', `triangle-${arrow}`, className)}
      { ...props }
      />
  )
}
