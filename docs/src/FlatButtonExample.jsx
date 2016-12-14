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
        <p>This component that wrapped <code>FlatButton</code> of Material-UI. more information <a className="link-blue" target="_blank" href="http://www.material-ui.com/#/components/flat-button">here <i className="fa fa-external-link" aria-hidden="true"></i></a></p>
        <FlatButton label="Default" style={style} />
        <FlatButton label="Primary" style={style} primary={true} />
        <FlatButton label="Secondary" style={style} secondary={true} />
        <FlatButton label="Disabled" style={style} disabled={true} />
      </div>
    );
  }
}
