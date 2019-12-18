"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _TextField = _interopRequireDefault(require("material-ui/TextField"));

var _lodash = _interopRequireDefault(require("lodash"));

var _colors = require("material-ui/styles/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  root: {
    fontSize: 12,
    height: 'initial'
  },
  floatingLabel: {
    position: 'initial',
    top: 'initial'
  },
  floatingLabelFocus: {
    color: "".concat(_colors.grey700)
  },
  input: {
    position: 'relative',
    marginTop: 'initial',
    height: 'initial',
    padding: 5,
    borderStyle: 'solid',
    borderRadius: 2,
    borderColor: "".concat(_colors.grey300),
    borderWidth: 1
  },
  textarea: {
    marginTop: 'initial',
    marginBottom: 'initial',
    padding: 0,
    borderWidth: 1
  },
  hint: {
    color: "".concat(_colors.grey400),
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

var TextField = function TextField(_ref) {
  var style = _ref.style,
      inputStyle = _ref.inputStyle,
      textareaStyle = _ref.textareaStyle,
      floatingLabelStyle = _ref.floatingLabelStyle,
      floatingLabelFocusStyle = _ref.floatingLabelFocusStyle,
      errorStyle = _ref.errorStyle,
      hintStyle = _ref.hintStyle,
      underlineStyle = _ref.underlineStyle,
      underlineFocusStyle = _ref.underlineFocusStyle,
      underlineDisabledStyle = _ref.underlineDisabledStyle,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["style", "inputStyle", "textareaStyle", "floatingLabelStyle", "floatingLabelFocusStyle", "errorStyle", "hintStyle", "underlineStyle", "underlineFocusStyle", "underlineDisabledStyle", "children"]);

  return _react["default"].createElement(_TextField["default"], _extends({}, props, {
    style: _lodash["default"].defaults(style, styles.root),
    inputStyle: _lodash["default"].defaults(inputStyle, styles.input),
    textareaStyle: _lodash["default"].defaults(textareaStyle, styles.textarea),
    hintStyle: _lodash["default"].defaults(hintStyle, styles.hint),
    errorStyle: _lodash["default"].defaults(errorStyle, styles.error),
    floatingLabelStyle: _lodash["default"].defaults(floatingLabelStyle, styles.floatingLabel),
    floatingLabelFocusStyle: _lodash["default"].defaults(floatingLabelFocusStyle, styles.floatingLabelFocus),
    underlineStyle: _lodash["default"].defaults(underlineStyle, styles.underline),
    underlineFocusStyle: _lodash["default"].defaults(underlineFocusStyle, styles.underlineFocus),
    underlineDisabledStyle: _lodash["default"].defaults(underlineDisabledStyle, styles.underlineDisabled)
  }));
};

exports.TextField = TextField;