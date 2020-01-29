"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Dialog = _interopRequireDefault(require("material-ui/Dialog"));

var _colors = require("material-ui/styles/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  root: {},
  title: {
    color: "".concat(_colors.cyan600),
    padding: '8px 14px 8px',
    borderBottom: "1px solid ".concat(_colors.grey300)
  },
  body: {
    padding: '8px 14px 8px'
  },
  content: {
    color: 'blue'
  },
  actionsContainer: {
    padding: '8px 14px 8px',
    textAlign: 'left'
  }
};

var Dialog = function Dialog(_ref) {
  var style = _ref.style,
      titleStyle = _ref.titleStyle,
      bodyStyle = _ref.bodyStyle,
      contentStyle = _ref.contentStyle,
      actionsContainerStyle = _ref.actionsContainerStyle,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["style", "titleStyle", "bodyStyle", "contentStyle", "actionsContainerStyle", "children"]);

  return _react["default"].createElement(_Dialog["default"], _extends({}, props, {
    style: _objectSpread({}, style, {}, styles.root),
    titleStyle: _objectSpread({}, styles.title, {}, titleStyle),
    bodyStyle: _objectSpread({}, styles.body, {}, bodyStyle),
    contentStyle: _objectSpread({}, styles.content, {}, contentStyle),
    actionsContainerStyle: _objectSpread({}, styles.actionsContainer, {}, actionsContainerStyle)
  }), children);
};

var _default = Dialog;
exports["default"] = _default;