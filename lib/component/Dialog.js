"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dialog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _lodash = _interopRequireDefault(require("lodash"));

var _colors = require("@material-ui/core/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const styles = {
  root: {},
  title: {
    color: `${_colors.cyan[600]}`,
    padding: '8px 14px 8px',
    borderBottom: `1px solid ${_colors.grey[300]}`
  },
  body: {
    padding: '8px 14px 8px'
  },
  content: {
    color: 'blue'
  },
  actionsContainer: {
    padding: '8px 14px 8px',
    textAlign: 'left'
  }
};

class Dialog extends _react.Component {
  render() {
    const {
      style,
      titleStyle,
      bodyStyle,
      contentStyle,
      actionsContainerStyle,
      children,
      ...props
    } = this.props;
    return _react.default.createElement(_Dialog.default, _extends({}, props, {
      style: _lodash.default.defaults(style, styles.root),
      titleStyle: _lodash.default.defaults(titleStyle, styles.title),
      bodyStyle: _lodash.default.defaults(bodyStyle, styles.body),
      contentStyle: _lodash.default.defaults(contentStyle, styles.content),
      actionsContainerStyle: _lodash.default.defaults(actionsContainerStyle, styles.actionsContainer)
    }), children);
  }

}

exports.Dialog = Dialog;