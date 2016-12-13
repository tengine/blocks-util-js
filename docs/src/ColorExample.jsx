import React, { Component } from 'react';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import _ from 'lodash';
import { 
  colors,
} from '../../src/style/colors';
import { 
  FlatButton,
} from '../../src/index';

export default class ColorExample extends Component {
  render() {
    console.log(_.map(colors, (code, name) => {
      console.log(code, name);
    }));
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
