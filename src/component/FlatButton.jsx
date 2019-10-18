import React, { Component } from 'react';
import MuiFlatButton from '@material-ui/core/Button';
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
