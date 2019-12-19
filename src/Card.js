import React from 'react';
import MuiCard from 'material-ui/Card';

import { withChildren } from './index'

const Card = props => withChildren(MuiCard, props)
export default Card