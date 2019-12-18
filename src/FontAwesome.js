import React from 'react';
import MuiFontIcon from 'material-ui/FontIcon';
import classnames from 'classnames';
import _ from 'lodash';

const styles = {
  root: {
    cursor: 'pointer',
  }
}

export const FontAwesome = ({ style, children, ...props }) => {
  return (
    <MuiFontIcon
      { ...props }
      className={ classnames("fa", children) }
      style={ _.defaults(style, styles.root) }
    >
    { null }
    </MuiFontIcon>
  )
}
