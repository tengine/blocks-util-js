"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("material-ui/Card"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Card = function Card(props) {
  return (0, _index.withChildren)(_Card["default"], props);
};

var _default = Card;
exports["default"] = _default;