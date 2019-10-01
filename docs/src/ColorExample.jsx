import React, { Component } from 'react';
import _ from 'lodash';
import { 
  colors,
} from '../../src/style/colors';
import { 
  FlatButton,
} from '../../src/index';

export default class ColorExample extends Component {
  render() {
    return (
      <div>
        <h2>Colors</h2>
        <table className="pure-table">
          <thead>
            <tr>
              <th>name</th>
              <th>code</th>
            </tr>
          </thead>
          <tbody>
            { _.map(colors, (code, name) => {
              return (
                <tr key={ `color-${name}` }>
                  <td>{ name }</td>
                  <td>
                    <FlatButton 
                      label={ code }
                      backgroundColor={ code }
                      />
                  </td>
                </tr>
              )
            }) }
          </tbody>
        </table>
      </div>
    );
  }
}
