import React, { Component } from 'react';
import { 
  Icon,
} from '../../src/index';
import CodeExample from './CodeExample';

export default class IconExample extends Component {
  render() {
    return (
      <div>
        <h2>Icon</h2>
        <p>This component that wrapped <code>MaterialIcon</code> and <code>FontAwesome</code>. more information</p>
        <Icon>home</Icon>
        <CodeExample code="<Icon>home</Icon>" />
        <Icon color='#E15757'>fa-id-card-o</Icon>
        <CodeExample code="<Icon color='#E15757'>fa-id-card-o</Icon>" />
      </div>
    );
  }
}
