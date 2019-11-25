# blocks-util-js

[Demo](https://tengine.github.io/blocks-util-js/)

## Installation

Install the git remote url only.

latest: 

```node
yarn add https://github.com/tengine/blocks-util-js/
```

specific:

```node
yarn add https://github.com/tengine/blocks-util-js#<commit-ish>
```

### dependencies

* [react](https://www.npmjs.com/package/react)
* [react-dom](https://www.npmjs.com/package/react-dom)
* [react-tap-event-plugin](https://www.npmjs.com/package/react-tap-event-plugin)

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  defaultTheme,
  FlatButton
} from 'blocks-util-js';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={defaultTheme}>
        <FlatButton label="Label" />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('container'));
```

# Development

```
git clone git@github.com:tengine/blocks-util-js.git
yarn install
```

production build:

```
npm run build
```

development build:

```
npm run watch:docs
or
npm run build:docs
// => open your browser docs/index.html
```
