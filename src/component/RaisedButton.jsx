import React, { Component } from 'react';
import MuiRaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash';

export class RaisedButton extends Component {
  render() {
    return (
      <MuiRaisedButton
        { ...this.props }
        />
    );
  }
}
