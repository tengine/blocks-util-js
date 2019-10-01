"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _lodash = _interopRequireDefault(require("lodash"));

var _colors = require("@material-ui/core/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const styles = {
  root: {
    fontSize: 12,
    height: 'initial'
  },
  floatingLabel: {
    position: 'initial',
    top: 'initial'
  },
  floatingLabelFocus: {
    color: `${_colors.grey[700]}`
  },
  input: {
    position: 'relative',
    marginTop: 'initial',
    height: 'initial',
    padding: 5,
    borderStyle: 'solid',
    borderRadius: 2,
    borderColor: `${_colors.grey[300]}`,
    borderWidth: 1
  },
  textarea: {
    marginTop: 'initial',
    marginBottom: 'initial',
    padding: 0,
    borderWidth: 1
  },
  hint: {
    color: `${_colors.grey[400]}`,
    bottom: 'initial',
    padding: 5,
    margin: 2
  },
  error: {
    position: 'initial',
    marginTop: 5,
    bottom: 'initial'
  },
  underline: {
    display: 'none'
  },
  underlineFocus: {
    display: 'none'
  },
  underlineDisabled: {
    display: 'none'
  }
};

class TextField extends _react.Component {
  render() {
    const {
      style,
      inputStyle,
      textareaStyle,
      floatingLabelStyle,
      floatingLabelFocusStyle,
      errorStyle,
      hintStyle,
      underlineStyle,
      underlineFocusStyle,
      underlineDisabledStyle,
      children,
      ...props
    } = this.props;
    return _react.default.createElement(_TextField.default, _extends({}, props, {
      style: _lodash.default.defaults(style, styles.root),
      inputStyle: _lodash.default.defaults(inputStyle, styles.input),
      textareaStyle: _lodash.default.defaults(textareaStyle, styles.textarea),
      hintStyle: _lodash.default.defaults(hintStyle, styles.hint),
      errorStyle: _lodash.default.defaults(errorStyle, styles.error),
      floatingLabelStyle: _lodash.default.defaults(floatingLabelStyle, styles.floatingLabel),
      floatingLabelFocusStyle: _lodash.default.defaults(floatingLabelFocusStyle, styles.floatingLabelFocus),
      underlineStyle: _lodash.default.defaults(underlineStyle, styles.underline),
      underlineFocusStyle: _lodash.default.defaults(underlineFocusStyle, styles.underlineFocus),
      underlineDisabledStyle: _lodash.default.defaults(underlineDisabledStyle, styles.underlineDisabled)
    }));
  }

}

exports.TextField = TextField;