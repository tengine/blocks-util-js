import React from 'react';
import MuiIconButton from 'material-ui/IconButton';

class IconButton extends React.Component {
  render() {
    const {children, ...props} = this.props
    return (
      <MuiIconButton {...props}>
        {React.Children.toArray(children).reduce((elements, child) => {
          if (child) {
            elements.push(child);
          }
          return elements;
        }, [])}
      </MuiIconButton>
    )
  }
}
export default IconButton
