import React, { Component } from 'react';
import { 
  FlatButton,
} from '../../src/index';

export default class FlatButtonExample extends Component {
  render() {
    return (
      <div>
        <h2>FlatButton</h2>
        <FlatButton label="Default" />
        <FlatButton label="Primary" primary={true} />
        <FlatButton label="Secondary" secondary={true} />
        <FlatButton label="Disabled" disabled={true} />
      </div>
    );
  }
}
