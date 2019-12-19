import React from 'react';
import ReactDOM from 'react-dom';
import MuiFontIcon from 'material-ui/FontIcon';

const styles = {
  root: {
    cursor: 'pointer',
  }
}

const MaterialIcon = ({ style, children, ...props }) => {
  return (
    <MuiFontIcon
      { ...props }
      className="material-icons"
      style={{...styles.root, ...style}}
      >
      { children }
    </MuiFontIcon>
  )
}
export default MaterialIcon
