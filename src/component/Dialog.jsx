import React, { Component } from 'react';
import MuiDialog from '@material-ui/core/Dialog';
import _ from 'lodash';
import { cyan, grey } from '@material-ui/core/colors';

const styles = {
  root: {
  },
  title: {
    color: `${cyan[600]}`,
    padding: '8px 14px 8px',
    borderBottom: `1px solid ${grey[300]}`,
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
    const { style, titleStyle, bodyStyle, contentStyle, actionsContainerStyle, children, ...props } = this.props;
    return (
      <MuiDialog
        { ...props }
         style={ _.defaults(style, styles.root) }
         titleStyle={ _.defaults(titleStyle, styles.title) }
         bodyStyle={ _.defaults(bodyStyle, styles.body) }
         contentStyle={ _.defaults(contentStyle, styles.content) }
         actionsContainerStyle={ _.defaults(actionsContainerStyle, styles.actionsContainer) }
        >
        { children }
      </MuiDialog>
    );
  }
}
