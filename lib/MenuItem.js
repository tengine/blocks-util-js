"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _MenuItem = _interopRequireDefault(require("material-ui/MenuItem"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = {
  root: {
    fontSize: 12
  }
};

var MenuItem = function MenuItem(_ref) {
  var style = _ref.style,
      innerDivStyle = _ref.innerDivStyle,
      props = _objectWithoutProperties(_ref, ["style", "innerDivStyle"]);

  return _react["default"].createElement(_MenuItem["default"], _extends({}, props, {
    autoWidth: false,
    style: _lodash["default"].defaults(style, styles.root),
    innerDivStyle: _lodash["default"].defaults(innerDivStyle, styles.innerDiv)
  }));
};

exports.MenuItem = MenuItem;