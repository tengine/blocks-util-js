import React from 'react';
import ReactDOM from 'react-dom';
import MuiFontIcon from 'material-ui/FontIcon';
import classnames from 'classnames';

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
      style={{...styles.root, ...style}}
    >
    { null }
    </MuiFontIcon>
  )
}
