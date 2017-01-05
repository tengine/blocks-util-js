'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

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
    height: 'inherit'
  },
  input: {
    top: 0,
    position: 'relative',
    marginTop: 'initial',
    height: 24 + 5 * 2 + 1 * 2 + 'px',
    padding: 5
  },
  floatingLabel: {
    position: 'initial',
    top: 'initial'
  },
  floatingLabelFocus: {
    color: '' + _colors.grey700
  },
  lebel: {
    lineHeight: 'initial',
    color: 'red',
    bottom: 10
  },
  menu: {
    top: 0,
    marginTop: 'initial',
    borderStyle: 'solid',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '' + _colors.grey300
  },
  hint: {
    lineHeight: 'initial'
  },
  icon: {
    top: 0
  },
  error: {
    marginTop: 5,
    position: 'initial'
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

var SelectField = exports.SelectField = function (_Component) {
  _inherits(SelectField, _Component);

  function SelectField() {
    _classCallCheck(this, SelectField);

    return _possibleConstructorReturn(this, (SelectField.__proto__ || Object.getPrototypeOf(SelectField)).apply(this, arguments));
  }

  _createClass(SelectField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          inputStyle = _props.inputStyle,
          labelStyle = _props.labelStyle,
          menuStyle = _props.menuStyle,
          floatingLabelStyle = _props.floatingLabelStyle,
          floatingLabelFocusStyle = _props.floatingLabelFocusStyle,
          errorStyle = _props.errorStyle,
          hintStyle = _props.hintStyle,
          iconStyle = _props.iconStyle,
          underlineStyle = _props.underlineStyle,
          underlineFocusStyle = _props.underlineFocusStyle,
          underlineDisabledStyle = _props.underlineDisabledStyle,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['style', 'inputStyle', 'labelStyle', 'menuStyle', 'floatingLabelStyle', 'floatingLabelFocusStyle', 'errorStyle', 'hintStyle', 'iconStyle', 'underlineStyle', 'underlineFocusStyle', 'underlineDisabledStyle', 'children']);

      return _react2.default.createElement(
        _SelectField2.default,
        _extends({}, props, {
          style: _lodash2.default.defaults(styles.root, style),
          inputStyle: _lodash2.default.defaults(styles.input, inputStyle),
          labelStyle: _lodash2.default.defaults(styles.label, labelStyle),
          menuStyle: _lodash2.default.defaults(styles.menu, menuStyle),
          iconStyle: _lodash2.default.defaults(styles.icon, iconStyle),
          hintStyle: _lodash2.default.defaults(styles.hint, hintStyle),
          errorStyle: _lodash2.default.defaults(styles.error, errorStyle),
          floatingLabelStyle: _lodash2.default.defaults(styles.floatingLabel, floatingLabelStyle),
          floatingLabelFocusStyle: _lodash2.default.defaults(styles.floatingLabelFocus, floatingLabelFocusStyle),
          underlineStyle: _lodash2.default.defaults(styles.underline, underlineStyle),
          underlineFocusStyle: _lodash2.default.defaults(styles.underlineFocus, underlineFocusStyle),
          underlineDisabledStyle: _lodash2.default.defaults(styles.underlineDisabled, underlineDisabledStyle)
        }),
        this.props.children
      );
    }
  }]);

  return SelectField;
}(_react.Component);