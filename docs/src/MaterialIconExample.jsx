import React, { Component } from 'react';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import { 
  MaterialIcon,
} from '../../src/index';

const iconStyles = {
  marginRight: 24,
};

export default class MaterialIconExample extends Component {
  
  render() {
    return (
      <div>
        <h2>MaterialIcon</h2>
        <MaterialIcon style={iconStyles}>home</MaterialIcon>
        <MaterialIcon style={iconStyles} color={red500}>flight_takeoff</MaterialIcon>
        <MaterialIcon style={iconStyles} color={yellow500}>cloud_download</MaterialIcon>
        <MaterialIcon style={iconStyles} color={blue500}>videogame_asset</MaterialIcon>
      </div>
    );
  }
}
