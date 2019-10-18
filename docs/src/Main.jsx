import React, { Component } from 'react';
import Header from './Header';
import Contents from './Contents';


export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Contents />
      </div>
    );
  }
}
