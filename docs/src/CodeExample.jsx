import React, { Component } from 'react';

export default class CodeExample extends Component {
  render() {
    return (
      <div className="docs-example" style={{background: 'rgb(248, 248, 248)'}}>
        <div className="m-3">
          <pre>
            {this.props.code}
          </pre>
        </div>
      </div>
    );
  }
}
