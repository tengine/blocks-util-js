"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

var _MaterialIcon = require("./MaterialIcon");

var _FontAwesome = require("./FontAwesome");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Icon = function Icon(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  if (/^fa-/.test(children)) {
    return _react["default"].createElement(_FontAwesome.FontAwesome, props, children);
  } else {
    return _react["default"].createElement(_MaterialIcon.MaterialIcon, props, children);
  }
};

exports.Icon = Icon;