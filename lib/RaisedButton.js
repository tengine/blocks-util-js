"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RaisedButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _RaisedButton = _interopRequireDefault(require("material-ui/RaisedButton"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RaisedButton = function RaisedButton(props) {
  return _react["default"].createElement(_RaisedButton["default"], props);
};

exports.RaisedButton = RaisedButton;