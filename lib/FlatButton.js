"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlatButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _FlatButton = _interopRequireDefault(require("material-ui/FlatButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FlatButton = function FlatButton(props) {
  return _react["default"].createElement(_FlatButton["default"], props);
};

exports.FlatButton = FlatButton;