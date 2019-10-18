import React, { Component } from 'react';
import MuiRaisedButton from '@material-ui/core/Button';
import _ from 'lodash';

export class RaisedButton extends Component {
  render() {
    return (
      <MuiRaisedButton
        variant="contained"
        { ...this.props }
        />
    );
  }
}
