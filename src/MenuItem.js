import React from 'react';
import MuiMenuItem from 'material-ui/MenuItem';
import _ from 'lodash';

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
       style={ _.defaults(style, styles.root) }
       innerDivStyle={ _.defaults(innerDivStyle, styles.innerDiv) }
      />
  )
}
