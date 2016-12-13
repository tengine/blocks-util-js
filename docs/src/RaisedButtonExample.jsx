import React, { Component } from 'react';
import { 
  RaisedButton,
} from '../../src/index';

const style = {
  margin: 12,
};

export default class RaisedButtonExample extends Component {

  render() {
    return (
      <div>
        <h2>RaisedButton</h2>
        <RaisedButton label="Default" style={style} />
        <RaisedButton label="Primary" primary={true} style={style} />
        <RaisedButton label="Secondary" secondary={true} style={style} />
        <RaisedButton label="Disabled" disabled={true} style={style} />
      </div>
    );
  }
}
