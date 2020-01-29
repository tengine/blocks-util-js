import React from 'react';
import MuiAvatar from 'material-ui/Avatar';

import { withChildren } from './index'

const Avatar = props => withChildren(MuiAvatar, props)
export default Avatar
