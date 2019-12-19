"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toggle = void 0;

var _react = _interopRequireDefault(require("react"));

var _Toggle = _interopRequireDefault(require("material-ui/Toggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Toggle = function Toggle(props) {
  return _react["default"].createElement(_Toggle["default"], props);
};

exports.Toggle = Toggle;