import React, { Component } from 'react';
import MuiFlatButton from 'material-ui/FlatButton';
import _ from 'lodash';

export class FlatButton extends Component {
  render() {
    return (
      <MuiFlatButton
        { ...this.props }
        />
    );
  }
}
