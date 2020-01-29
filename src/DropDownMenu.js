import React from 'react';
import MuiDropDownMenu from 'material-ui/DropDownMenu';

import { withChildren } from './index'

const DropDownMenu = props => withChildren(MuiDropDownMenu, props)
export default DropDownMenu
