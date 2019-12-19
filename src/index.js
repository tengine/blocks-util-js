import React from 'react';

import defaultTheme from './Theme';
import * as colors from './colors';
import AutoComplete from './AutoComplete';
import Avatar from './Avatar';
import Card from './Card';
import Checkbox from './Checkbox';
import CircularProgress from './CircularProgress';
import DatePicker from './DatePicker';
import Dialog from './Dialog';
import Divider from './Divider';
import DropDownMenu from './DropDownMenu';
import FlatButton from './FlatButton';
import FontAwesome from './FontAwesome';
import FontIcon from './FontIcon';
import Icon from './Icon';
import IconButton from './IconButton';
import IconMenu from './IconMenu';
import MaterialIcon from './MaterialIcon';
import MenuItem from './MenuItem';
import Popover from './Popover';
import RaisedButton from './RaisedButton';
import SelectField from './SelectField';
import TextField from './TextField';

// For Stateless function component
const withChildren = (Component, {children, ...props}) => (
  <Component { ...props }>
    {React.Children.toArray(children).reduce((elements, child) => {
      if (child) {
        elements.push(child);
      }
      return elements;
    }, [])}
  </Component>
)

export {
  withChildren,
  colors,
  defaultTheme,
  AutoComplete,
  Avatar,
  Card,
  Checkbox,
  CircularProgress,
  DatePicker,
  Dialog,
  Divider,
  DropDownMenu,
  FlatButton,
  FontAwesome,
  FontIcon,
  Icon,
  IconButton,
  IconMenu,
  MaterialIcon,
  MenuItem,
  Popover,
  RaisedButton,
  SelectField,
  TextField,
}
