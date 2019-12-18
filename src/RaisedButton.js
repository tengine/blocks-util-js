import React from 'react';
import ReactDOM from 'react-dom';
import MuiRaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash';

export const RaisedButton = (props) => {
  return (
    <MuiRaisedButton
      { ...props }
      />
  )
}
