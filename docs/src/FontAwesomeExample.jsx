import React, { Component } from 'react';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import { 
  FontAwesome,
} from '../../src/index';
import CodeExample from './CodeExample';
const link = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/{VERSION}/css/font-awesome.min.css">';

export default class FontAwesomeExample extends Component {
  render() {
    return (
      <div>
        <h2>FontAwesome</h2>
        <p>In the HTML, add the <code className="highlighter-rouge">{ link }</code> </p>
        <FontAwesome>fa-heart</FontAwesome>
        <CodeExample code="<FontAwesome>fa-heart</FontAwesome>" />
        <FontAwesome color='#E15757'>fa-id-card-o</FontAwesome>
        <CodeExample code="<FontAwesome color='#E15757'>fa-id-card-o</FontAwesome>" />
      </div>
    );
  }
}
