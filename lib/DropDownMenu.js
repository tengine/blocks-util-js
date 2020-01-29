"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DropDownMenu = _interopRequireDefault(require("material-ui/DropDownMenu"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DropDownMenu = function DropDownMenu(props) {
  return (0, _index.withChildren)(_DropDownMenu["default"], props);
};

var _default = DropDownMenu;
exports["default"] = _default;