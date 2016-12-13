import React, { Component } from 'react';
import MuiMenuItem from 'material-ui/MenuItem';
import _ from 'lodash';

const styles = {
  root: {
    fontSize: 12,
  }
}

export class MenuItem extends Component {
  render() {
    const { 
      style, 
      innerDivStyle,  
    } = this.props;
    return (
      <MuiMenuItem
        { ...this.props }
        autoWidth={false}
        style={ _.defaults(styles.root, style) }
        innerDivStyle={ _.defaults(styles.innerDiv, innerDivStyle) }
        />
    );
  }
}
