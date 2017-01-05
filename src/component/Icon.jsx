import React, { Component } from 'react';
import _ from 'lodash';
import { MaterialIcon } from './MaterialIcon';
import { FontAwesome } from './FontAwesome';

/**
 * @requires <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
 * @requires <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/{VERSION}/css/font-awesome.min.css">
 * @example <Icon >home</Icon>
 */
export class Icon extends Component {
  render() {
    const props = _.omit(this.props, ['children']);
    if (/^fa-/.test(this.props.children)) {
      return (
        <FontAwesome { ...props }>{ this.props.children }</FontAwesome>
      );
    } else {
      return (
        <MaterialIcon { ...props }>{ this.props.children }</MaterialIcon>
      );
    }
  }
}
