import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import MuiDecorator from './Provider.stories';
import { FontIcon } from '../src/index';
import { red500, yellow500, blue500 } from '../src/colors';


const iconStyles = {
  marginRight: 24,
}

storiesOf('FontIcon', module)
  .addDecorator(MuiDecorator)
  .add('Simple', () => (
    <div>
      <FontIcon className="material-icons" style={iconStyles}>home</FontIcon>
      <FontIcon className="material-icons" style={iconStyles} color={red500}>flight_takeoff</FontIcon>
      <FontIcon className="material-icons" style={iconStyles} color={yellow500}>cloud_download</FontIcon>
      <FontIcon className="material-icons" style={iconStyles} color={blue500}>videogame_asset</FontIcon>
    </div>
  ))
