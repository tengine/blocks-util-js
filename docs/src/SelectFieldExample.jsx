import React, { Component } from 'react';
import { 
  SelectField,
} from '../../src/index';
import CodeExample from './CodeExample';

export default class SelectFieldExample extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 1,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <h2>SelectField</h2>
        <p>This component that wrapped <code>SelectField</code> of Material-UI. more information <a className="link-blue" target="_blank" href="http://www.material-ui.com/#/components/select-field">here <i className="fa fa-external-link" aria-hidden="true"></i></a></p>
        <SelectField 
          floatingLabelText="Frequency"
          value={this.state.value}
          />
      </div>
    );
  }
}
