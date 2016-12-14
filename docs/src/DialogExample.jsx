import React, { Component } from 'react';
import { 
  RaisedButton,
  Dialog,
} from '../../src/index';
import CodeExample from './CodeExample';

export default class DialogExample extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  render() {
    const actions = [
      <RaisedButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <RaisedButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <h2>Dialog</h2>
        <p>This component that wrapped <code>Dialog</code> of Material-UI. more information <a className="link-blue" target="_blank" href="http://www.material-ui.com/#/components/dialog">here <i className="fa fa-external-link" aria-hidden="true"></i></a></p>
        <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
}