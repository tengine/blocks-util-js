import React, { Component } from 'react';
import { 
  FontAwesome,
} from '../../src/index';

export default class Header extends Component {
  render() {
    return (
      <div className="border-bottom bg-gray-light p-3 position-relative">
        <div className="container">
          <h3 className="d-inline-block">Documentaion</h3>
          <a target="_blank" href="https://github.com/tengine/blocks-util-js" className="right">
            <FontAwesome>fa-github</FontAwesome>
          </a>
        </div>
      </div>
    );
  }
}
