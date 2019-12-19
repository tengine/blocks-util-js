import React from 'react';
import MuiIconMenu from 'material-ui/IconMenu';

class IconMenu extends React.Component {
  render() {
    const {children, ...props} = this.props
    return (
      <MuiIconMenu {...props}>
        {React.Children.toArray(children).reduce((elements, child) => {
          if (child) {
            elements.push(child);
          }
          return elements;
        }, [])}
      </MuiIconMenu>
    )
  }
}
export default IconMenu
