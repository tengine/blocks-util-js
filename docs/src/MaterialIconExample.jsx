import React, { Component } from 'react';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import { 
  MaterialIcon,
} from '../../src/index';
import CodeExample from './CodeExample';
const link = '<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">';

export default class MaterialIconExample extends Component {
  render() {
    return (
      <div>
        <h2>MaterialIcon</h2>
        <p>In the HTML, add the <code className="highlighter-rouge">{ link }</code> </p>
        <MaterialIcon>home</MaterialIcon>
        <CodeExample code="<MaterialIcon>home</MaterialIcon>" />
        <MaterialIcon color='#E15757'>flight_takeoff</MaterialIcon>
        <CodeExample code="<MaterialIcon color='#E15757'>flight_takeoff</MaterialIcon>" />
      </div>
    );
  }
}
