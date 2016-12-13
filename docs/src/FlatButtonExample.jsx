import React, { Component } from 'react';
import { 
  FlatButton,
} from '../../src/index';

const style = {
  margin: 12,
};

export default class FlatButtonExample extends Component {
  render() {
    return (
      <div>
        <h2>FlatButton</h2>
        <FlatButton label="Default" style={style} />
        <FlatButton label="Primary" style={style} primary={true} />
        <FlatButton label="Secondary" style={style} secondary={true} />
        <FlatButton label="Disabled" style={style} disabled={true} />
      </div>
    );
  }
}
