import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import RadioButton from 'material-ui/RadioButton';
import {Menu, MenuItem} from 'material-ui/Menu';
import { 
  RaisedButton,
  Popover,
} from '../../src/index';

import CodeExample from './CodeExample';

const code = "<Popover open={true} allow='bottom-middle' anchorEl={this.state.anchorEl} anchorOrigin={this.state.anchorOrigin} targetOrigin={this.state.targetOrigin} onRequestClose={this.handleRequestClose} />";

export default class PopoverExample extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      allow: "",
      anchorOrigin: {
        horizontal: 'middle',
        vertical: 'bottom',
      },
      targetOrigin: {
        horizontal: 'middle',
        vertical: 'top',
      },
    };
  }


  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  setAnchor = (positionElement, position) => {
    const {anchorOrigin} = this.state;
    anchorOrigin[positionElement] = position;

    this.setState({
      anchorOrigin: anchorOrigin,
    });
  };

  setTarget = (positionElement, position) => {
    const {targetOrigin} = this.state;
    targetOrigin[positionElement] = position;

    this.setState({
      targetOrigin: targetOrigin,
    });
  };

  handleChange = (event) => {
    this.setState({
      allow: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Popover</h2>
        <p>This component that wrapped <code>Popover</code> of Material-UI and added a <code className="text-red">allow</code> property. 
          more information <a className="link-blue" target="_blank" href="http://www.material-ui.com/#/components/popover">here <i className="fa fa-external-link" aria-hidden="true"></i> </a>.
          this code <a className="link-blue" target="_blank" href="https://github.com/tengine/blocks-util-js/blob/master/docs/src/PopoverExample.jsx">here <i className="fa fa-external-link" aria-hidden="true"></i></a>
        </p>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Click me"
        />
        <Popover
          open={this.state.open}
          allow={this.state.allow}
          anchorEl={this.state.anchorEl}
          anchorOrigin={this.state.anchorOrigin}
          targetOrigin={this.state.targetOrigin}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover>
        <br />      
        <pre>
          [Current Settings]
          <br />
          anchorOrigin: {JSON.stringify(this.state.anchorOrigin)}
          <br />
          targetOrigin: {JSON.stringify(this.state.targetOrigin)}
        </pre>
        <div className="columns">
          <div className="one-third column">
            <p>Anchor Origin</p>
            <div className="one-half column">
              <p>Vertical</p>
              <RadioButton
                onClick={this.setAnchor.bind(this, 'vertical', 'top')}
                label="Top" checked={this.state.anchorOrigin.vertical === 'top'}
              />
              <RadioButton
                onClick={this.setAnchor.bind(this, 'vertical', 'center')}
                label="Center" checked={this.state.anchorOrigin.vertical === 'center'}
              />
              <RadioButton
                onClick={this.setAnchor.bind(this, 'vertical', 'bottom')}
                label="Bottom" checked={this.state.anchorOrigin.vertical === 'bottom'}
              />
            </div>
            <div className="one-half column">
              <p>Horizontal</p>
              <RadioButton
                onClick={this.setAnchor.bind(this, 'horizontal', 'left')}
                label="Left" checked={this.state.anchorOrigin.horizontal === 'left'}
              />
              <RadioButton
                onClick={this.setAnchor.bind(this, 'horizontal', 'middle')}
                label="Middle" checked={this.state.anchorOrigin.horizontal === 'middle'}
              />
              <RadioButton
                onClick={this.setAnchor.bind(this, 'horizontal', 'right')}
                label="Right" checked={this.state.anchorOrigin.horizontal === 'right'}
              />
            </div>
          </div>
          <div className="one-third column">
            <p>Target Origin</p>
            <div className="one-half column">
              <p>Vertical</p>
              <RadioButton
                onClick={this.setTarget.bind(this, 'vertical', 'top')}
                label="Top" checked={this.state.targetOrigin.vertical === 'top'}
              />
              <RadioButton
                onClick={this.setTarget.bind(this, 'vertical', 'center')}
                label="Center" checked={this.state.targetOrigin.vertical === 'center'}
              />
              <RadioButton
                onClick={this.setTarget.bind(this, 'vertical', 'bottom')}
                label="Bottom" checked={this.state.targetOrigin.vertical === 'bottom'}
              />
            </div>
            <div className="one-half column">
              <p>Horizontal</p>
              <RadioButton
                onClick={this.setTarget.bind(this, 'horizontal', 'left')}
                label="Left" checked={this.state.targetOrigin.horizontal === 'left'}
              />
              <RadioButton
                onClick={this.setTarget.bind(this, 'horizontal', 'middle')}
                label="Middle" checked={this.state.targetOrigin.horizontal === 'middle'}
              />
              <RadioButton
                onClick={this.setTarget.bind(this, 'horizontal', 'right')}
                label="Right" checked={this.state.targetOrigin.horizontal === 'right'}
              />
            </div>
          </div>
          <div className="one-third column">
            <div>
              <p className="text-red">Allow (Custom Props)</p>
              <select
                value={this.state.allow}
                onChange={this.handleChange.bind(this)}>
                <option value="">none</option>
                <option value="bottom-left">bottom-left</option>
                <option value="bottom-middle">bottom-middle</option>
                <option value="bottom-right">bottom-right</option>
                <option value="right-top">right-top</option>
                <option value="right-middle">right-middle</option>
                <option value="right-bottom">right-bottom</option>
                <option value="left-top">left-top</option>
                <option value="left-middle">left-middle</option>
                <option value="left-bottom">left-bottom</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
