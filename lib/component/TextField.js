'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _colors = require('material-ui/styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    fontSize: 12,
    height: 'initial'
  },
  floatingLabel: {
    position: 'initial',
    top: 'initial'
  },
  floatingLabelFocus: {
    color: '' + _colors.grey700
  },
  input: {
    position: 'relative',
    marginTop: 'initial',
    height: 'initial',
    padding: 5,
    borderStyle: 'solid',
    borderRadius: 2,
    borderColor: '' + _colors.grey300,
    borderWidth: 1
  },
  textarea: {
    marginTop: 'initial',
    marginBottom: 'initial',
    padding: 0,
    borderWidth: 1
  },
  hint: {
    color: '' + _colors.grey400,
    bottom: 'initial',
    padding: 5,
    margin: 2
  },
  error: {
    position: 'initial',
    marginTop: 5,
    bottom: 'initial'
  },
  underline: {
    display: 'none'
  },
  underlineFocus: {
    display: 'none'
  },
  underlineDisabled: {
    display: 'none'
  }
};

var TextField = exports.TextField = function (_Component) {
  _inherits(TextField, _Component);

  function TextField() {
    _classCallCheck(this, TextField);

    return _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).apply(this, arguments));
  }

  _createClass(TextField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          inputStyle = _props.inputStyle,
          textareaStyle = _props.textareaStyle,
          floatingLabelStyle = _props.floatingLabelStyle,
          floatingLabelFocusStyle = _props.floatingLabelFocusStyle,
          errorStyle = _props.errorStyle,
          hintStyle = _props.hintStyle,
          underlineStyle = _props.underlineStyle,
          underlineFocusStyle = _props.underlineFocusStyle,
          underlineDisabledStyle = _props.underlineDisabledStyle,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['style', 'inputStyle', 'textareaStyle', 'floatingLabelStyle', 'floatingLabelFocusStyle', 'errorStyle', 'hintStyle', 'underlineStyle', 'underlineFocusStyle', 'underlineDisabledStyle', 'children']);

      return _react2.default.createElement(_TextField2.default, _extends({}, props, {
        style: _lodash2.default.defaults(styles.root, style),
        inputStyle: _lodash2.default.defaults(styles.input, inputStyle),
        textareaStyle: _lodash2.default.defaults(styles.textarea, textareaStyle),
        hintStyle: _lodash2.default.defaults(styles.hint, hintStyle),
        errorStyle: _lodash2.default.defaults(styles.error, errorStyle),
        floatingLabelStyle: _lodash2.default.defaults(styles.floatingLabel, floatingLabelStyle),
        floatingLabelFocusStyle: _lodash2.default.defaults(styles.floatingLabelFocus, floatingLabelFocusStyle),
        underlineStyle: _lodash2.default.defaults(styles.underline, underlineStyle),
        underlineFocusStyle: _lodash2.default.defaults(styles.underlineFocus, underlineFocusStyle),
        underlineDisabledStyle: _lodash2.default.defaults(styles.underlineDisabled, underlineDisabledStyle)
      }));
    }
  }]);

  return TextField;
}(_react.Component);