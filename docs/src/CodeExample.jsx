import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/styles';

export default class CodeExample extends Component {
  render() {
    return (
      <div className="docs-example" style={{background: 'rgb(248, 248, 248)'}}>
        <div className="m-3">
        <SyntaxHighlighter
          language='javascript' 
          style={github}>
          {this.props.code}
        </SyntaxHighlighter>
        </div>
      </div>
    );
  }
}
