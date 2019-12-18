import React from 'react';
import ReactDOM from 'react-dom';
import { MaterialIcon } from './MaterialIcon';
import { FontAwesome } from './FontAwesome';

export const Icon = ({children, ...props}) => {
  if (/^fa-/.test(children)) {
    return (
      <FontAwesome { ...props }>{ children }</FontAwesome>
    );
  } else {
    return (
      <MaterialIcon { ...props }>{ children }</MaterialIcon>
    );
  }
}
