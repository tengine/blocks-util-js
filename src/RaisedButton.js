import React from 'react';
import ReactDOM from 'react-dom';
import MuiRaisedButton from 'material-ui/RaisedButton';

const RaisedButton = (props) => {
  return (
    <MuiRaisedButton
      { ...props }
      />
  )
}
export default RaisedButton
