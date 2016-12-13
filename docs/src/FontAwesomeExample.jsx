import React, { Component } from 'react';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import { 
  FontAwesome,
} from '../../src/index';

const iconStyles = {
  marginRight: 24,
};

export default class FontAwesomeExample extends Component {
  render() {
    return (
      <div>
        <h2>FontAwesome</h2>
        <FontAwesome style={iconStyles}>fa-heart</FontAwesome>
        <FontAwesome style={iconStyles} color={red500}>fa-id-card-o</FontAwesome>
        <FontAwesome style={iconStyles} color={yellow500}>fa-calendar</FontAwesome>
        <FontAwesome style={iconStyles} color={blue500}>fa-spinner</FontAwesome>
      </div>
    );
  }
}
