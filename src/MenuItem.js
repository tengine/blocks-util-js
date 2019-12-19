import React from 'react';
import ReactDOM from 'react-dom';
import MuiMenuItem from 'material-ui/MenuItem';

const styles = {
  root: {
    fontSize: 12,
  }
}

export const MenuItem = ({style, innerDivStyle, ...props}) => {
  return (
    <MuiMenuItem
      { ...props }
      autoWidth={false}
       style={{...styles.root, ...style}}
       innerDivStyle={{...styles.innerDiv, ...innerDivStyle}}
      />
  )
}
