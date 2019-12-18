import React from 'react';
import MuiFontIcon from 'material-ui/FontIcon';
import _ from 'lodash';

const styles = {
  root: {
    cursor: 'pointer',
  }
}

export const MaterialIcon = ({ style, children, ...props }) => {
  return (
    <MuiFontIcon
      { ...props }
      className="material-icons"
      style={ _.defaults(style, styles.root) }
      >
      { children }
    </MuiFontIcon>
  )
}
