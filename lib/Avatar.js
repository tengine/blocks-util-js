"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Avatar = _interopRequireDefault(require("material-ui/Avatar"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Avatar = function Avatar(props) {
  return (0, _index.withChildren)(_Avatar["default"], props);
};

var _default = Avatar;
exports["default"] = _default;