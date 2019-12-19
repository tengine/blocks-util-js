"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _DatePicker = _interopRequireDefault(require("material-ui/DatePicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DatePicker = function DatePicker(props) {
  return _react["default"].createElement(_DatePicker["default"], props);
};

var _default = DatePicker;
exports["default"] = _default;