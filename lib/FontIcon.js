"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _FontIcon = _interopRequireDefault(require("material-ui/FontIcon"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FontIcon = function FontIcon(props) {
  return (0, _index.withChildren)(_FontIcon["default"], props);
};

var _default = FontIcon;
exports["default"] = _default;