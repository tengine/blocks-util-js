"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "defaultTheme", {
  enumerable: true,
  get: function get() {
    return _Theme["default"];
  }
});
Object.defineProperty(exports, "AutoComplete", {
  enumerable: true,
  get: function get() {
    return _AutoComplete["default"];
  }
});
Object.defineProperty(exports, "Avatar", {
  enumerable: true,
  get: function get() {
    return _Avatar["default"];
  }
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: function get() {
    return _Card["default"];
  }
});
Object.defineProperty(exports, "Checkbox", {
  enumerable: true,
  get: function get() {
    return _Checkbox["default"];
  }
});
Object.defineProperty(exports, "CircularProgress", {
  enumerable: true,
  get: function get() {
    return _CircularProgress["default"];
  }
});
Object.defineProperty(exports, "DatePicker", {
  enumerable: true,
  get: function get() {
    return _DatePicker["default"];
  }
});
Object.defineProperty(exports, "Dialog", {
  enumerable: true,
  get: function get() {
    return _Dialog["default"];
  }
});
Object.defineProperty(exports, "Divider", {
  enumerable: true,
  get: function get() {
    return _Divider["default"];
  }
});
Object.defineProperty(exports, "DropDownMenu", {
  enumerable: true,
  get: function get() {
    return _DropDownMenu["default"];
  }
});
Object.defineProperty(exports, "FlatButton", {
  enumerable: true,
  get: function get() {
    return _FlatButton["default"];
  }
});
Object.defineProperty(exports, "FontAwesome", {
  enumerable: true,
  get: function get() {
    return _FontAwesome["default"];
  }
});
Object.defineProperty(exports, "FontIcon", {
  enumerable: true,
  get: function get() {
    return _FontIcon["default"];
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function get() {
    return _Icon["default"];
  }
});
Object.defineProperty(exports, "IconButton", {
  enumerable: true,
  get: function get() {
    return _IconButton["default"];
  }
});
Object.defineProperty(exports, "IconMenu", {
  enumerable: true,
  get: function get() {
    return _IconMenu["default"];
  }
});
Object.defineProperty(exports, "MaterialIcon", {
  enumerable: true,
  get: function get() {
    return _MaterialIcon["default"];
  }
});
Object.defineProperty(exports, "MenuItem", {
  enumerable: true,
  get: function get() {
    return _MenuItem["default"];
  }
});
Object.defineProperty(exports, "Popover", {
  enumerable: true,
  get: function get() {
    return _Popover["default"];
  }
});
Object.defineProperty(exports, "RaisedButton", {
  enumerable: true,
  get: function get() {
    return _RaisedButton["default"];
  }
});
Object.defineProperty(exports, "SelectField", {
  enumerable: true,
  get: function get() {
    return _SelectField["default"];
  }
});
Object.defineProperty(exports, "TextField", {
  enumerable: true,
  get: function get() {
    return _TextField["default"];
  }
});
exports.withChildren = void 0;

var _react = _interopRequireDefault(require("react"));

var _Theme = _interopRequireDefault(require("./Theme"));

var _AutoComplete = _interopRequireDefault(require("./AutoComplete"));

var _Avatar = _interopRequireDefault(require("./Avatar"));

var _Card = _interopRequireDefault(require("./Card"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

var _CircularProgress = _interopRequireDefault(require("./CircularProgress"));

var _DatePicker = _interopRequireDefault(require("./DatePicker"));

var _Dialog = _interopRequireDefault(require("./Dialog"));

var _Divider = _interopRequireDefault(require("./Divider"));

var _DropDownMenu = _interopRequireDefault(require("./DropDownMenu"));

var _FlatButton = _interopRequireDefault(require("./FlatButton"));

var _FontAwesome = _interopRequireDefault(require("./FontAwesome"));

var _FontIcon = _interopRequireDefault(require("./FontIcon"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _IconButton = _interopRequireDefault(require("./IconButton"));

var _IconMenu = _interopRequireDefault(require("./IconMenu"));

var _MaterialIcon = _interopRequireDefault(require("./MaterialIcon"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _Popover = _interopRequireDefault(require("./Popover"));

var _RaisedButton = _interopRequireDefault(require("./RaisedButton"));

var _SelectField = _interopRequireDefault(require("./SelectField"));

var _TextField = _interopRequireDefault(require("./TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// For Stateless function component
var withChildren = function withChildren(Component, _ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react["default"].createElement(Component, props, _react["default"].Children.toArray(children).reduce(function (elements, child) {
    if (child) {
      elements.push(child);
    }

    return elements;
  }, []));
};

exports.withChildren = withChildren;