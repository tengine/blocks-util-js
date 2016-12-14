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
        <p>This component that wrapped <code>RaisedButton</code> of Material-UI. more information <a className="link-blue" target="_blank" href="http://www.material-ui.com/#/components/raised-button">here <i className="fa fa-external-link" aria-hidden="true"></i></a></p>
        <RaisedButton label="Default" style={style} />
        <RaisedButton label="Primary" primary={true} style={style} />
        <RaisedButton label="Secondary" secondary={true} style={style} />
        <RaisedButton label="Disabled" disabled={true} style={style} />
      </div>
    );
  }
}
