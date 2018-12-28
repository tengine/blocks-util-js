"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TextField = _interopRequireDefault(require("material-ui/TextField"));

var _lodash = _interopRequireDefault(require("lodash"));

var _colors = require("material-ui/styles/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
    color: "".concat(_colors.grey700)
  },
  input: {
    position: 'relative',
    marginTop: 'initial',
    height: 'initial',
    padding: 5,
    borderStyle: 'solid',
    borderRadius: 2,
    borderColor: "".concat(_colors.grey300),
    borderWidth: 1
  },
  textarea: {
    marginTop: 'initial',
    marginBottom: 'initial',
    padding: 0,
    borderWidth: 1
  },
  hint: {
    color: "".concat(_colors.grey400),
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

var TextField =
/*#__PURE__*/
function (_Component) {
  _inherits(TextField, _Component);

  function TextField() {
    _classCallCheck(this, TextField);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextField).apply(this, arguments));
  }

  _createClass(TextField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          inputStyle = _this$props.inputStyle,
          textareaStyle = _this$props.textareaStyle,
          floatingLabelStyle = _this$props.floatingLabelStyle,
          floatingLabelFocusStyle = _this$props.floatingLabelFocusStyle,
          errorStyle = _this$props.errorStyle,
          hintStyle = _this$props.hintStyle,
          underlineStyle = _this$props.underlineStyle,
          underlineFocusStyle = _this$props.underlineFocusStyle,
          underlineDisabledStyle = _this$props.underlineDisabledStyle,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["style", "inputStyle", "textareaStyle", "floatingLabelStyle", "floatingLabelFocusStyle", "errorStyle", "hintStyle", "underlineStyle", "underlineFocusStyle", "underlineDisabledStyle", "children"]);

      return _react.default.createElement(_TextField.default, _extends({}, props, {
        style: _lodash.default.defaults(style, styles.root),
        inputStyle: _lodash.default.defaults(inputStyle, styles.input),
        textareaStyle: _lodash.default.defaults(textareaStyle, styles.textarea),
        hintStyle: _lodash.default.defaults(hintStyle, styles.hint),
        errorStyle: _lodash.default.defaults(errorStyle, styles.error),
        floatingLabelStyle: _lodash.default.defaults(floatingLabelStyle, styles.floatingLabel),
        floatingLabelFocusStyle: _lodash.default.defaults(floatingLabelFocusStyle, styles.floatingLabelFocus),
        underlineStyle: _lodash.default.defaults(underlineStyle, styles.underline),
        underlineFocusStyle: _lodash.default.defaults(underlineFocusStyle, styles.underlineFocus),
        underlineDisabledStyle: _lodash.default.defaults(underlineDisabledStyle, styles.underlineDisabled)
      }));
    }
  }]);

  return TextField;
}(_react.Component);

exports.TextField = TextField;