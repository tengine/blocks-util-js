import React, { Component } from 'react';
import MuiFontIcon from 'material-ui/FontIcon';
import _ from 'lodash';

const styles = {
  root: {
    cursor: 'pointer',
  }
}

/**
 * @requires <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
 * @example <MaterialIcon >home</MaterialIcon>
 */
export class MaterialIcon extends Component {
  render() {
    const { style, children, ...props } = this.props;
    return (
      <MuiFontIcon
        { ...props }
        className="material-icons"
        style={ _.defaults(style, styles.root) }
        >
        { children }
      </MuiFontIcon>
    );
  }
}
