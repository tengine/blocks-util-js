"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _SelectField = _interopRequireDefault(require("material-ui/SelectField"));

var _colors = require("material-ui/styles/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  root: {
    fontSize: 12,
    height: 'inherit'
  },
  input: {
    top: 0,
    position: 'relative',
    marginTop: 'initial',
    height: "".concat(24 + 5 * 2 + 1 * 2, "px"),
    padding: 5
  },
  floatingLabel: {
    position: 'initial',
    top: 'initial'
  },
  floatingLabelFocus: {
    color: "".concat(_colors.grey700)
  },
  lebel: {
    lineHeight: 'initial',
    color: "red",
    bottom: 10
  },
  menu: {
    top: 0,
    marginTop: 'initial',
    borderStyle: 'solid',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "".concat(_colors.grey300)
  },
  hint: {
    lineHeight: 'initial'
  },
  icon: {
    top: 0,
    padding: 0,
    height: 26,
    width: 26
  },
  error: {
    marginTop: 5,
    position: 'initial'
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

var SelectField = function SelectField(_ref) {
  var style = _ref.style,
      inputStyle = _ref.inputStyle,
      labelStyle = _ref.labelStyle,
      menuStyle = _ref.menuStyle,
      floatingLabelStyle = _ref.floatingLabelStyle,
      floatingLabelFocusStyle = _ref.floatingLabelFocusStyle,
      errorStyle = _ref.errorStyle,
      hintStyle = _ref.hintStyle,
      iconStyle = _ref.iconStyle,
      underlineStyle = _ref.underlineStyle,
      underlineFocusStyle = _ref.underlineFocusStyle,
      underlineDisabledStyle = _ref.underlineDisabledStyle,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["style", "inputStyle", "labelStyle", "menuStyle", "floatingLabelStyle", "floatingLabelFocusStyle", "errorStyle", "hintStyle", "iconStyle", "underlineStyle", "underlineFocusStyle", "underlineDisabledStyle", "children"]);

  return _react["default"].createElement(_SelectField["default"], _extends({}, props, {
    style: _objectSpread({}, styles.root, {}, style),
    inputStyle: _objectSpread({}, styles.input, {}, inputStyle),
    labelStyle: _objectSpread({}, styles.label, {}, labelStyle),
    menuStyle: _objectSpread({}, styles.menu, {}, menuStyle),
    iconStyle: _objectSpread({}, styles.icon, {}, iconStyle),
    hintStyle: _objectSpread({}, styles.hint, {}, hintStyle),
    errorStyle: _objectSpread({}, styles.error, {}, errorStyle),
    floatingLabelStyle: _objectSpread({}, styles.floatingLabel, {}, floatingLabelStyle),
    floatingLabelFocusStyle: _objectSpread({}, styles.floatingLabelFocus, {}, floatingLabelFocusStyle),
    underlineStyle: _objectSpread({}, styles.underline, {}, underlineStyle),
    underlineFocusStyle: _objectSpread({}, styles.underlineFocus, {}, underlineFocusStyle),
    underlineDisabledStyle: _objectSpread({}, styles.underlineDisabled, {}, underlineDisabledStyle)
  }), children);
};

var _default = SelectField;
exports["default"] = _default;