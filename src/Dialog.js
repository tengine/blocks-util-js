import React from 'react';
import ReactDOM from 'react-dom';
import MuiDialog from 'material-ui/Dialog';
import { cyan600, grey300 } from 'material-ui/styles/colors';

const styles = {
  root: {
  },
  title: {
    color: `${cyan600}`,
    padding: '8px 14px 8px',
    borderBottom: `1px solid ${grey300}`,
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

export const Dialog = ({ style, titleStyle, bodyStyle, contentStyle, actionsContainerStyle, children, ...props }) => {
  return (
    <MuiDialog
      { ...props }
       style={{...style, ...styles.root}}
       titleStyle={{...styles.title, ...titleStyle}}
       bodyStyle={{...styles.body, ...bodyStyle}}
       contentStyle={{...styles.content, ...contentStyle}}
       actionsContainerStyle={{...styles.actionsContainer, ...actionsContainerStyle}}
      >
      { children }
    </MuiDialog>
  )  
}
