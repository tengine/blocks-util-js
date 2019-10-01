"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _MaterialIcon = require("./MaterialIcon");

var _FontAwesome = require("./FontAwesome");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @requires <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
 * @requires <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/{VERSION}/css/font-awesome.min.css">
 * @example <Icon >home</Icon>
 */
class Icon extends _react.Component {
  render() {
    const props = _lodash.default.omit(this.props, ['children']);

    if (/^fa-/.test(this.props.children)) {
      return _react.default.createElement(_FontAwesome.FontAwesome, props, this.props.children);
    } else {
      return _react.default.createElement(_MaterialIcon.MaterialIcon, props, this.props.children);
    }
  }

}

exports.Icon = Icon;