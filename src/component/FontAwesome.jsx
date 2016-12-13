import React, { Component } from 'react';
import MuiFontIcon from 'material-ui/FontIcon';
import classnames from 'classnames';
import _ from 'lodash';

const styles = {
  root: {
    cursor: 'pointer',
  }
}

/**
 * @requires <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/{VERSION}/css/font-awesome.min.css">
 * @example <FontAwesome>fa-angle-up</FontAwesome>
 */
export class FontAwesome extends Component {
  render() {
    const { style } = this.props;
    return (
      <MuiFontIcon
        { ...this.props }
        className={ classnames("fa", this.props.children) }
        style={ _.defaults(style, styles.root) }
      >
      { null }
      </MuiFontIcon>
    );
  }
}
