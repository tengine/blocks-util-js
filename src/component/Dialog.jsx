import React, { Component } from 'react';
import MuiDialog from 'material-ui/Dialog';
import _ from 'lodash';
import { cyan600, lightGrey400 } from '../style/colors';

const styles = {
  root: {
  },
  title: {
    color: `${cyan600}`,
    padding: '8px 14px 8px',
    borderBottom: `1px solid ${lightGrey400}`,
  },
  body: {
    padding: '8px 14px 8px',
  },
  content: {
    color: 'blue',
  },
  actionsContainer: {
    padding: '8px 14px 8px',
    textAlign: 'left',
  },
};

export class Dialog extends Component {

  render() {
    const { style, titleStyle, bodyStyle, contentStyle, actionsContainerStyle } = this.props;
    return (
      <MuiDialog
        { ...this.props }
        style={ _.defaults(styles.root, style) }
        titleStyle={ _.defaults(styles.title, titleStyle) }
        bodyStyle={ _.defaults(styles.body, bodyStyle) }
        contentStyle={ _.defaults(styles.content, contentStyle) }
        actionsContainerStyle={ _.defaults(styles.actionsContainer, actionsContainerStyle) }
        >
        { this.props.children }
      </MuiDialog>
    );
  }
}
