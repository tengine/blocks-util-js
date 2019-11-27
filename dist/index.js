(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom'), require('lodash'), require('classnames')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom', 'lodash', 'classnames'], factory) :
  (global = global || self, factory(global.BlocksUtilJs = {}, global.React, global.reactDom, global._, global.classnames));
}(this, (function (exports, React, reactDom, _, classnames) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  reactDom = reactDom && reactDom.hasOwnProperty('default') ? reactDom['default'] : reactDom;
  _ = _ && _.hasOwnProperty('default') ? _['default'] : _;
  classnames = classnames && classnames.hasOwnProperty('default') ? classnames['default'] : classnames;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.6.10' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // optional / simple context binding

  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var document$1 = _global.document;
  // typeof document.createElement is 'object' in old IE
  var is = _isObject(document$1) && _isObject(document$1.createElement);
  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;

  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
  	f: f
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var IS_WRAP = type & $export.W;
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE];
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
    var key, own, out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      if (own && _has(exports, key)) continue;
      // export native or passed
      out = own ? target[key] : source[key];
      // prevent global pollution for namespaces
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
      // bind timers to global for call from export context
      : IS_BIND && own ? _ctx(out, _global)
      // wrap global constructors for prevent change them in library
      : IS_WRAP && target[key] == out ? (function (C) {
        var F = function (a, b, c) {
          if (this instanceof C) {
            switch (arguments.length) {
              case 0: return new C();
              case 1: return new C(a);
              case 2: return new C(a, b);
            } return new C(a, b, c);
          } return C.apply(this, arguments);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      // make static versions for prototype methods
      })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
      // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
      if (IS_PROTO) {
        (exports.virtual || (exports.virtual = {}))[key] = out;
        // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
        if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
      }
    }
  };
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function (it) {
    return _iobject(_defined(it));
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.1.15 ToLength

  var min = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes



  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var _library = true;

  var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: _core.version,
    mode:  'pure' ,
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  });

  var id = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var shared = _shared('keys');

  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)



  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var f$1 = Object.getOwnPropertySymbols;

  var _objectGops = {
  	f: f$1
  };

  var f$2 = {}.propertyIsEnumerable;

  var _objectPie = {
  	f: f$2
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(_defined(it));
  };

  // 19.1.2.1 Object.assign(target, source, ...)






  var $assign = Object.assign;

  // should work with symbols and should have deterministic property order (V8 bug)
  var _objectAssign = !$assign || _fails(function () {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) { B[k] = k; });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
    var T = _toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = _objectGops.f;
    var isEnum = _objectPie.f;
    while (aLen > index) {
      var S = _iobject(arguments[index++]);
      var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!_descriptors || isEnum.call(S, key)) T[key] = S[key];
      }
    } return T;
  } : $assign;

  // 19.1.3.1 Object.assign(target, source)


  _export(_export.S + _export.F, 'Object', { assign: _objectAssign });

  var assign = _core.Object.assign;

  var assign$1 = createCommonjsModule(function (module) {
  module.exports = { "default": assign, __esModule: true };
  });

  unwrapExports(assign$1);

  var _extends$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _assign2 = _interopRequireDefault(assign$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _assign2.default || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  });

  unwrapExports(_extends$1);

  var objectWithoutProperties = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  exports.default = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };
  });

  unwrapExports(objectWithoutProperties);

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO$1 = _sharedKey('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$1)) return O[IE_PROTO$1];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  };

  // most Object methods by ES6 should accept primitives



  var _objectSap = function (KEY, exec) {
    var fn = (_core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
  };

  // 19.1.2.9 Object.getPrototypeOf(O)



  _objectSap('getPrototypeOf', function () {
    return function getPrototypeOf(it) {
      return _objectGpo(_toObject(it));
    };
  });

  var getPrototypeOf = _core.Object.getPrototypeOf;

  var getPrototypeOf$1 = createCommonjsModule(function (module) {
  module.exports = { "default": getPrototypeOf, __esModule: true };
  });

  unwrapExports(getPrototypeOf$1);

  var classCallCheck = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  exports.default = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  });

  unwrapExports(classCallCheck);

  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
  _export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

  var $Object = _core.Object;
  var defineProperty = function defineProperty(it, key, desc) {
    return $Object.defineProperty(it, key, desc);
  };

  var defineProperty$1 = createCommonjsModule(function (module) {
  module.exports = { "default": defineProperty, __esModule: true };
  });

  unwrapExports(defineProperty$1);

  var createClass = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _defineProperty2 = _interopRequireDefault(defineProperty$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        (0, _defineProperty2.default)(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  });

  unwrapExports(createClass);

  // true  -> String#at
  // false -> String#codePointAt
  var _stringAt = function (TO_STRING) {
    return function (that, pos) {
      var s = String(_defined(that));
      var i = _toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var _redefine = _hide;

  var _iterators = {};

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);
    var keys = _objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
    return O;
  };

  var document$2 = _global.document;
  var _html = document$2 && document$2.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



  var IE_PROTO$2 = _sharedKey('IE_PROTO');
  var Empty = function () { /* empty */ };
  var PROTOTYPE$1 = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');
    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
    return createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$2] = O;
    } else result = createDict();
    return Properties === undefined ? result : _objectDps(result, Properties);
  };

  var _wks = createCommonjsModule(function (module) {
  var store = _shared('wks');

  var Symbol = _global.Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
  };

  $exports.store = store;
  });

  var def = _objectDp.f;

  var TAG = _wks('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
  };

  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  _hide(IteratorPrototype, _wks('iterator'), function () { return this; });

  var _iterCreate = function (Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
    _setToStringTag(Constructor, NAME + ' Iterator');
  };

  var ITERATOR = _wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () { return this; };

  var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS: return function keys() { return new Constructor(this, kind); };
        case VALUES: return function values() { return new Constructor(this, kind); };
      } return function entries() { return new Constructor(this, kind); };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag(IteratorPrototype, TAG, true);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() { return $native.call(this); };
    }
    // Define iterator
    if (( FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      _hide(proto, ITERATOR, $default);
    }
    // Plug for library
    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine(proto, key, methods[key]);
      } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

  var $at = _stringAt(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  _iterDefine(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0;                // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return { value: undefined, done: true };
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  });

  var _iterStep = function (done, value) {
    return { value: value, done: !!done };
  };

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
    this._t = _toIobject(iterated); // target
    this._i = 0;                   // next index
    this._k = kind;                // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep(1);
    }
    if (kind == 'keys') return _iterStep(0, index);
    if (kind == 'values') return _iterStep(0, O[index]);
    return _iterStep(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  _iterators.Arguments = _iterators.Array;

  var TO_STRING_TAG = _wks('toStringTag');

  var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
    'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
    'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
    'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
    'TextTrackList,TouchList').split(',');

  for (var i = 0; i < DOMIterables.length; i++) {
    var NAME = DOMIterables[i];
    var Collection = _global[NAME];
    var proto = Collection && Collection.prototype;
    if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
    _iterators[NAME] = _iterators.Array;
  }

  var f$3 = _wks;

  var _wksExt = {
  	f: f$3
  };

  var iterator = _wksExt.f('iterator');

  var iterator$1 = createCommonjsModule(function (module) {
  module.exports = { "default": iterator, __esModule: true };
  });

  unwrapExports(iterator$1);

  var _meta = createCommonjsModule(function (module) {
  var META = _uid('meta');


  var setDesc = _objectDp.f;
  var id = 0;
  var isExtensible = Object.isExtensible || function () {
    return true;
  };
  var FREEZE = !_fails(function () {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function (it) {
    setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {}          // weak collections IDs
    } });
  };
  var fastKey = function (it, create) {
    // return primitive with prefix
    if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
    // return object ID
    } return it[META].i;
  };
  var getWeak = function (it, create) {
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
    // return hash weak collections IDs
    } return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
    return it;
  };
  var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  };
  });
  var _meta_1 = _meta.KEY;
  var _meta_2 = _meta.NEED;
  var _meta_3 = _meta.fastKey;
  var _meta_4 = _meta.getWeak;
  var _meta_5 = _meta.onFreeze;

  var defineProperty$2 = _objectDp.f;
  var _wksDefine = function (name) {
    var $Symbol = _core.Symbol || (_core.Symbol =  {} );
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$2($Symbol, name, { value: _wksExt.f(name) });
  };

  // all enumerable object keys, includes symbols



  var _enumKeys = function (it) {
    var result = _objectKeys(it);
    var getSymbols = _objectGops.f;
    if (getSymbols) {
      var symbols = getSymbols(it);
      var isEnum = _objectPie.f;
      var i = 0;
      var key;
      while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
    } return result;
  };

  // 7.2.2 IsArray(argument)

  var _isArray = Array.isArray || function isArray(arg) {
    return _cof(arg) == 'Array';
  };

  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

  var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

  var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return _objectKeysInternal(O, hiddenKeys);
  };

  var _objectGopn = {
  	f: f$4
  };

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

  var gOPN = _objectGopn.f;
  var toString$1 = {}.toString;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return gOPN(it);
    } catch (e) {
      return windowNames.slice();
    }
  };

  var f$5 = function getOwnPropertyNames(it) {
    return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
  };

  var _objectGopnExt = {
  	f: f$5
  };

  var gOPD = Object.getOwnPropertyDescriptor;

  var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = _toIobject(O);
    P = _toPrimitive(P, true);
    if (_ie8DomDefine) try {
      return gOPD(O, P);
    } catch (e) { /* empty */ }
    if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
  };

  var _objectGopd = {
  	f: f$6
  };

  // ECMAScript 6 symbols shim





  var META = _meta.KEY;





















  var gOPD$1 = _objectGopd.f;
  var dP$1 = _objectDp.f;
  var gOPN$1 = _objectGopnExt.f;
  var $Symbol = _global.Symbol;
  var $JSON = _global.JSON;
  var _stringify = $JSON && $JSON.stringify;
  var PROTOTYPE$2 = 'prototype';
  var HIDDEN = _wks('_hidden');
  var TO_PRIMITIVE = _wks('toPrimitive');
  var isEnum = {}.propertyIsEnumerable;
  var SymbolRegistry = _shared('symbol-registry');
  var AllSymbols = _shared('symbols');
  var OPSymbols = _shared('op-symbols');
  var ObjectProto$1 = Object[PROTOTYPE$2];
  var USE_NATIVE = typeof $Symbol == 'function' && !!_objectGops.f;
  var QObject = _global.QObject;
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDesc = _descriptors && _fails(function () {
    return _objectCreate(dP$1({}, 'a', {
      get: function () { return dP$1(this, 'a', { value: 7 }).a; }
    })).a != 7;
  }) ? function (it, key, D) {
    var protoDesc = gOPD$1(ObjectProto$1, key);
    if (protoDesc) delete ObjectProto$1[key];
    dP$1(it, key, D);
    if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
  } : dP$1;

  var wrap = function (tag) {
    var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
    sym._k = tag;
    return sym;
  };

  var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return it instanceof $Symbol;
  };

  var $defineProperty = function defineProperty(it, key, D) {
    if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
    _anObject(it);
    key = _toPrimitive(key, true);
    _anObject(D);
    if (_has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
        D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
      } return setSymbolDesc(it, key, D);
    } return dP$1(it, key, D);
  };
  var $defineProperties = function defineProperties(it, P) {
    _anObject(it);
    var keys = _enumKeys(P = _toIobject(P));
    var i = 0;
    var l = keys.length;
    var key;
    while (l > i) $defineProperty(it, key = keys[i++], P[key]);
    return it;
  };
  var $create = function create(it, P) {
    return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key = _toPrimitive(key, true));
    if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
    return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    it = _toIobject(it);
    key = _toPrimitive(key, true);
    if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
    var D = gOPD$1(it, key);
    if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN$1(_toIobject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
    } return result;
  };
  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto$1;
    var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
    } return result;
  };

  // 19.4.1.1 Symbol([description])
  if (!USE_NATIVE) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
      var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
      var $set = function (value) {
        if (this === ObjectProto$1) $set.call(OPSymbols, value);
        if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, _propertyDesc(1, value));
      };
      if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
      return wrap(tag);
    };
    _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
      return this._k;
    });

    _objectGopd.f = $getOwnPropertyDescriptor;
    _objectDp.f = $defineProperty;
    _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
    _objectPie.f = $propertyIsEnumerable;
    _objectGops.f = $getOwnPropertySymbols;

    if (_descriptors && !_library) {
      _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }

    _wksExt.f = function (name) {
      return wrap(_wks(name));
    };
  }

  _export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

  for (var es6Symbols = (
    // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
  ).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

  for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

  _export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function (key) {
      return _has(SymbolRegistry, key += '')
        ? SymbolRegistry[key]
        : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
      for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
    },
    useSetter: function () { setter = true; },
    useSimple: function () { setter = false; }
  });

  _export(_export.S + _export.F * !USE_NATIVE, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
  });

  // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  var FAILS_ON_PRIMITIVES = _fails(function () { _objectGops.f(1); });

  _export(_export.S + _export.F * FAILS_ON_PRIMITIVES, 'Object', {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return _objectGops.f(_toObject(it));
    }
  });

  // 24.3.2 JSON.stringify(value [, replacer [, space]])
  $JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
    var S = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols
    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
  })), 'JSON', {
    stringify: function stringify(it) {
      var args = [it];
      var i = 1;
      var replacer, $replacer;
      while (arguments.length > i) args.push(arguments[i++]);
      $replacer = replacer = args[1];
      if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!_isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    }
  });

  // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
  $Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
  // 19.4.3.5 Symbol.prototype[@@toStringTag]
  _setToStringTag($Symbol, 'Symbol');
  // 20.2.1.9 Math[@@toStringTag]
  _setToStringTag(Math, 'Math', true);
  // 24.3.3 JSON[@@toStringTag]
  _setToStringTag(_global.JSON, 'JSON', true);

  _wksDefine('asyncIterator');

  _wksDefine('observable');

  var symbol = _core.Symbol;

  var symbol$1 = createCommonjsModule(function (module) {
  module.exports = { "default": symbol, __esModule: true };
  });

  unwrapExports(symbol$1);

  var _typeof_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _iterator2 = _interopRequireDefault(iterator$1);



  var _symbol2 = _interopRequireDefault(symbol$1);

  var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof(obj);
  } : function (obj) {
    return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
  };
  });

  unwrapExports(_typeof_1);

  var possibleConstructorReturn = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _typeof3 = _interopRequireDefault(_typeof_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
  };
  });

  unwrapExports(possibleConstructorReturn);

  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */


  var check = function (O, proto) {
    _anObject(O);
    if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };
  var _setProto = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
      function (test, buggy, set) {
        try {
          set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
          set(test, []);
          buggy = !(test instanceof Array);
        } catch (e) { buggy = true; }
        return function setPrototypeOf(O, proto) {
          check(O, proto);
          if (buggy) O.__proto__ = proto;
          else set(O, proto);
          return O;
        };
      }({}, false) : undefined),
    check: check
  };

  // 19.1.3.19 Object.setPrototypeOf(O, proto)

  _export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

  var setPrototypeOf = _core.Object.setPrototypeOf;

  var setPrototypeOf$1 = createCommonjsModule(function (module) {
  module.exports = { "default": setPrototypeOf, __esModule: true };
  });

  unwrapExports(setPrototypeOf$1);

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  _export(_export.S, 'Object', { create: _objectCreate });

  var $Object$1 = _core.Object;
  var create = function create(P, D) {
    return $Object$1.create(P, D);
  };

  var create$1 = createCommonjsModule(function (module) {
  module.exports = { "default": create, __esModule: true };
  });

  unwrapExports(create$1);

  var inherits = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf$1);



  var _create2 = _interopRequireDefault(create$1);



  var _typeof3 = _interopRequireDefault(_typeof_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    }

    subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
  };
  });

  unwrapExports(inherits);

  var simpleAssign = function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

  var reactIs_production_min = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports,"__esModule",{value:!0});
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
  60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function z(a){return y(a)===m}
  exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
  exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
  exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
  });

  unwrapExports(reactIs_production_min);
  var reactIs_production_min_1 = reactIs_production_min.typeOf;
  var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
  var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
  var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
  var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
  var reactIs_production_min_6 = reactIs_production_min.Element;
  var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
  var reactIs_production_min_8 = reactIs_production_min.Fragment;
  var reactIs_production_min_9 = reactIs_production_min.Lazy;
  var reactIs_production_min_10 = reactIs_production_min.Memo;
  var reactIs_production_min_11 = reactIs_production_min.Portal;
  var reactIs_production_min_12 = reactIs_production_min.Profiler;
  var reactIs_production_min_13 = reactIs_production_min.StrictMode;
  var reactIs_production_min_14 = reactIs_production_min.Suspense;
  var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
  var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
  var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
  var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
  var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
  var reactIs_production_min_20 = reactIs_production_min.isElement;
  var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
  var reactIs_production_min_22 = reactIs_production_min.isFragment;
  var reactIs_production_min_23 = reactIs_production_min.isLazy;
  var reactIs_production_min_24 = reactIs_production_min.isMemo;
  var reactIs_production_min_25 = reactIs_production_min.isPortal;
  var reactIs_production_min_26 = reactIs_production_min.isProfiler;
  var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
  var reactIs_production_min_28 = reactIs_production_min.isSuspense;

  var reactIs_development = createCommonjsModule(function (module, exports) {
  });

  unwrapExports(reactIs_development);
  var reactIs_development_1 = reactIs_development.typeOf;
  var reactIs_development_2 = reactIs_development.AsyncMode;
  var reactIs_development_3 = reactIs_development.ConcurrentMode;
  var reactIs_development_4 = reactIs_development.ContextConsumer;
  var reactIs_development_5 = reactIs_development.ContextProvider;
  var reactIs_development_6 = reactIs_development.Element;
  var reactIs_development_7 = reactIs_development.ForwardRef;
  var reactIs_development_8 = reactIs_development.Fragment;
  var reactIs_development_9 = reactIs_development.Lazy;
  var reactIs_development_10 = reactIs_development.Memo;
  var reactIs_development_11 = reactIs_development.Portal;
  var reactIs_development_12 = reactIs_development.Profiler;
  var reactIs_development_13 = reactIs_development.StrictMode;
  var reactIs_development_14 = reactIs_development.Suspense;
  var reactIs_development_15 = reactIs_development.isValidElementType;
  var reactIs_development_16 = reactIs_development.isAsyncMode;
  var reactIs_development_17 = reactIs_development.isConcurrentMode;
  var reactIs_development_18 = reactIs_development.isContextConsumer;
  var reactIs_development_19 = reactIs_development.isContextProvider;
  var reactIs_development_20 = reactIs_development.isElement;
  var reactIs_development_21 = reactIs_development.isForwardRef;
  var reactIs_development_22 = reactIs_development.isFragment;
  var reactIs_development_23 = reactIs_development.isLazy;
  var reactIs_development_24 = reactIs_development.isMemo;
  var reactIs_development_25 = reactIs_development.isPortal;
  var reactIs_development_26 = reactIs_development.isProfiler;
  var reactIs_development_27 = reactIs_development.isStrictMode;
  var reactIs_development_28 = reactIs_development.isSuspense;

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_production_min;
  }
  });

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty$1.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
  });

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck$1 = _classCallCheck$1;

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    return Constructor;
  }

  var createClass$1 = _createClass$1;

  var _typeof_1$1 = createCommonjsModule(function (module) {
  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized$1;

  function _possibleConstructorReturn$1(self, call) {
    if (call && (_typeof_1$1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn$1 = _possibleConstructorReturn$1;

  var getPrototypeOf$2 = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  var setPrototypeOf$2 = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf$2(subClass, superClass);
  }

  var inherits$1 = _inherits$1;

  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose$1;

  function _objectWithoutProperties$1(source, excluded) {
    if (source == null) return {};
    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  var objectWithoutProperties$1 = _objectWithoutProperties$1;

  var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  module.exports = _extends;
  });

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var warning = function() {};

  var warning_1 = warning;

  var reactEventListener_cjs = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, '__esModule', { value: true });

  function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

  var _classCallCheck = _interopDefault(classCallCheck$1);
  var _createClass = _interopDefault(createClass$1);
  var _possibleConstructorReturn = _interopDefault(possibleConstructorReturn$1);
  var _getPrototypeOf = _interopDefault(getPrototypeOf$2);
  var _inherits = _interopDefault(inherits$1);
  var _typeof = _interopDefault(_typeof_1$1);
  var _objectWithoutProperties = _interopDefault(objectWithoutProperties$1);
  var _extends = _interopDefault(_extends_1);
  var React = _interopDefault(React__default);
  var PropTypes = _interopDefault(propTypes);
  var warning = _interopDefault(warning_1);

  function defineProperty(object, property, attr) {
    return Object.defineProperty(object, property, attr);
  } // Passive options
  // Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js


  var passiveOption = function () {
    var cache = null;
    return function () {
      if (cache !== null) {
        return cache;
      }

      var supportsPassiveOption = false;

      try {
        window.addEventListener('test', null, defineProperty({}, 'passive', {
          get: function get() {
            supportsPassiveOption = true;
          }
        }));
      } catch (err) {//
      }

      cache = supportsPassiveOption;
      return supportsPassiveOption;
    }();
  }();

  var defaultEventOptions = {
    capture: false,
    passive: false
  };

  function mergeDefaultEventOptions(options) {
    return _extends({}, defaultEventOptions, options);
  }

  function getEventListenerArgs(eventName, callback, options) {
    var args = [eventName, callback];
    args.push(passiveOption ? options : options.capture);
    return args;
  }

  function on(target, eventName, callback, options) {
    // eslint-disable-next-line prefer-spread
    target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
  }

  function off(target, eventName, callback, options) {
    // eslint-disable-next-line prefer-spread
    target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
  }

  function forEachListener(props, iteratee) {
    var children = props.children,
        target = props.target,
        eventProps = _objectWithoutProperties(props, ["children", "target"]);

    Object.keys(eventProps).forEach(function (name) {
      if (name.substring(0, 2) !== 'on') {
        return;
      }

      var prop = eventProps[name];

      var type = _typeof(prop);

      var isObject = type === 'object';
      var isFunction = type === 'function';

      if (!isObject && !isFunction) {
        return;
      }

      var capture = name.substr(-7).toLowerCase() === 'capture';
      var eventName = name.substring(2).toLowerCase();
      eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;

      if (isObject) {
        iteratee(eventName, prop.handler, prop.options);
      } else {
        iteratee(eventName, prop, mergeDefaultEventOptions({
          capture: capture
        }));
      }
    });
  }

  function withOptions(handler, options) {
    return {
      handler: handler,
      options: mergeDefaultEventOptions(options)
    };
  }

  var EventListener =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(EventListener, _React$PureComponent);

    function EventListener() {
      _classCallCheck(this, EventListener);

      return _possibleConstructorReturn(this, _getPrototypeOf(EventListener).apply(this, arguments));
    }

    _createClass(EventListener, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.applyListeners(on);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        this.applyListeners(off, prevProps);
        this.applyListeners(on);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.applyListeners(off);
      }
    }, {
      key: "applyListeners",
      value: function applyListeners(onOrOff) {
        var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;
        var target = props.target;

        if (target) {
          var element = target;

          if (typeof target === 'string') {
            element = window[target];
          }

          forEachListener(props, onOrOff.bind(null, element));
        }
      }
    }, {
      key: "render",
      value: function render() {
        return this.props.children || null;
      }
    }]);

    return EventListener;
  }(React.PureComponent);

  EventListener.propTypes =  {};

  exports.withOptions = withOptions;
  exports.default = EventListener;
  });

  unwrapExports(reactEventListener_cjs);
  var reactEventListener_cjs_1 = reactEventListener_cjs.withOptions;

  var keycode = createCommonjsModule(function (module, exports) {
  // Source: http://jsfiddle.net/vWx8V/
  // http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

  /**
   * Conenience method returns corresponding value for given keyName or keyCode.
   *
   * @param {Mixed} keyCode {Number} or keyName {String}
   * @return {Mixed}
   * @api public
   */

  function keyCode(searchInput) {
    // Keyboard Events
    if (searchInput && 'object' === typeof searchInput) {
      var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode;
      if (hasKeyCode) searchInput = hasKeyCode;
    }

    // Numbers
    if ('number' === typeof searchInput) return names[searchInput]

    // Everything else (cast to string)
    var search = String(searchInput);

    // check codes
    var foundNamedKey = codes[search.toLowerCase()];
    if (foundNamedKey) return foundNamedKey

    // check aliases
    var foundNamedKey = aliases[search.toLowerCase()];
    if (foundNamedKey) return foundNamedKey

    // weird character?
    if (search.length === 1) return search.charCodeAt(0)

    return undefined
  }

  /**
   * Compares a keyboard event with a given keyCode or keyName.
   *
   * @param {Event} event Keyboard event that should be tested
   * @param {Mixed} keyCode {Number} or keyName {String}
   * @return {Boolean}
   * @api public
   */
  keyCode.isEventKey = function isEventKey(event, nameOrCode) {
    if (event && 'object' === typeof event) {
      var keyCode = event.which || event.keyCode || event.charCode;
      if (keyCode === null || keyCode === undefined) { return false; }
      if (typeof nameOrCode === 'string') {
        // check codes
        var foundNamedKey = codes[nameOrCode.toLowerCase()];
        if (foundNamedKey) { return foundNamedKey === keyCode; }
      
        // check aliases
        var foundNamedKey = aliases[nameOrCode.toLowerCase()];
        if (foundNamedKey) { return foundNamedKey === keyCode; }
      } else if (typeof nameOrCode === 'number') {
        return nameOrCode === keyCode;
      }
      return false;
    }
  };

  exports = module.exports = keyCode;

  /**
   * Get by name
   *
   *   exports.code['enter'] // => 13
   */

  var codes = exports.code = exports.codes = {
    'backspace': 8,
    'tab': 9,
    'enter': 13,
    'shift': 16,
    'ctrl': 17,
    'alt': 18,
    'pause/break': 19,
    'caps lock': 20,
    'esc': 27,
    'space': 32,
    'page up': 33,
    'page down': 34,
    'end': 35,
    'home': 36,
    'left': 37,
    'up': 38,
    'right': 39,
    'down': 40,
    'insert': 45,
    'delete': 46,
    'command': 91,
    'left command': 91,
    'right command': 93,
    'numpad *': 106,
    'numpad +': 107,
    'numpad -': 109,
    'numpad .': 110,
    'numpad /': 111,
    'num lock': 144,
    'scroll lock': 145,
    'my computer': 182,
    'my calculator': 183,
    ';': 186,
    '=': 187,
    ',': 188,
    '-': 189,
    '.': 190,
    '/': 191,
    '`': 192,
    '[': 219,
    '\\': 220,
    ']': 221,
    "'": 222
  };

  // Helper aliases

  var aliases = exports.aliases = {
    'windows': 91,
    '⇧': 16,
    '⌥': 18,
    '⌃': 17,
    '⌘': 91,
    'ctl': 17,
    'control': 17,
    'option': 18,
    'pause': 19,
    'break': 19,
    'caps': 20,
    'return': 13,
    'escape': 27,
    'spc': 32,
    'spacebar': 32,
    'pgup': 33,
    'pgdn': 34,
    'ins': 45,
    'del': 46,
    'cmd': 91
  };

  /*!
   * Programatically add the following
   */

  // lower case chars
  for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32;

  // numbers
  for (var i = 48; i < 58; i++) codes[i - 48] = i;

  // function keys
  for (i = 1; i < 13; i++) codes['f'+i] = i + 111;

  // numpad keys
  for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96;

  /**
   * Get by code
   *
   *   exports.name[13] // => 'Enter'
   */

  var names = exports.names = exports.title = {}; // title for backward compat

  // Create reverse mapping
  for (i in codes) names[codes[i]] = i;

  // Add aliases
  for (var alias in aliases) {
    codes[alias] = aliases[alias];
  }
  });
  var keycode_1 = keycode.code;
  var keycode_2 = keycode.codes;
  var keycode_3 = keycode.aliases;
  var keycode_4 = keycode.names;
  var keycode_5 = keycode.title;

  var transitions = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {

    easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
    easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

    easeOut: function easeOut(duration, property, delay, easeFunction) {
      easeFunction = easeFunction || this.easeOutFunction;

      if (property && Object.prototype.toString.call(property) === '[object Array]') {
        var transitions = '';
        for (var i = 0; i < property.length; i++) {
          if (transitions) transitions += ',';
          transitions += this.create(duration, property[i], delay, easeFunction);
        }

        return transitions;
      } else {
        return this.create(duration, property, delay, easeFunction);
      }
    },
    create: function create(duration, property, delay, easeFunction) {
      duration = duration || '450ms';
      property = property || 'all';
      delay = delay || '0ms';
      easeFunction = easeFunction || 'linear';

      return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
    }
  };
  });

  unwrapExports(transitions);

  var AutoLockScrolling_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);





  var _propTypes2 = _interopRequireDefault(propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var originalBodyOverflow = null;
  var lockingCounter = 0;

  var AutoLockScrolling = function (_Component) {
    (0, _inherits3.default)(AutoLockScrolling, _Component);

    function AutoLockScrolling() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, AutoLockScrolling);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AutoLockScrolling.__proto__ || (0, _getPrototypeOf2.default)(AutoLockScrolling)).call.apply(_ref, [this].concat(args))), _this), _this.locked = false, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(AutoLockScrolling, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.lock === true) {
          this.preventScrolling();
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.lock !== nextProps.lock) {
          if (nextProps.lock) {
            this.preventScrolling();
          } else {
            this.allowScrolling();
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.allowScrolling();
      }

      // force to only lock/unlock once

    }, {
      key: 'preventScrolling',
      value: function preventScrolling() {
        if (this.locked === true) {
          return;
        }

        lockingCounter = lockingCounter + 1;
        this.locked = true;

        // only lock the first time the component is mounted.
        if (lockingCounter === 1) {
          var body = document.getElementsByTagName('body')[0];
          originalBodyOverflow = body.style.overflow;
          body.style.overflow = 'hidden';
        }
      }
    }, {
      key: 'allowScrolling',
      value: function allowScrolling() {
        if (this.locked === true) {
          lockingCounter = lockingCounter - 1;
          this.locked = false;
        }

        if (lockingCounter === 0 && originalBodyOverflow !== null) {
          var body = document.getElementsByTagName('body')[0];
          body.style.overflow = originalBodyOverflow || '';
          originalBodyOverflow = null;
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return null;
      }
    }]);
    return AutoLockScrolling;
  }(React__default.Component);

  AutoLockScrolling.propTypes =  {};
  exports.default = AutoLockScrolling;
  });

  unwrapExports(AutoLockScrolling_1);

  var Overlay_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _transitions2 = _interopRequireDefault(transitions);



  var _AutoLockScrolling2 = _interopRequireDefault(AutoLockScrolling_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function getStyles(props, context) {
    var overlay = context.muiTheme.overlay;


    var style = {
      root: {
        position: 'fixed',
        height: '100%',
        width: '100%',
        top: 0,
        left: '-100%',
        opacity: 0,
        backgroundColor: overlay.backgroundColor,
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', // Remove mobile color flashing (deprecated)

        // Two ways to promote overlay to its own render layer
        willChange: 'opacity',
        transform: 'translateZ(0)',

        transition: props.transitionEnabled && _transitions2.default.easeOut('0ms', 'left', '400ms') + ', ' + _transitions2.default.easeOut('400ms', 'opacity')
      }
    };

    if (props.show) {
      (0, _simpleAssign2.default)(style.root, {
        left: 0,
        opacity: 1,
        transition: _transitions2.default.easeOut('0ms', 'left') + ', ' + _transitions2.default.easeOut('400ms', 'opacity')
      });
    }

    return style;
  }

  var Overlay = function (_Component) {
    (0, _inherits3.default)(Overlay, _Component);

    function Overlay() {
      (0, _classCallCheck3.default)(this, Overlay);
      return (0, _possibleConstructorReturn3.default)(this, (Overlay.__proto__ || (0, _getPrototypeOf2.default)(Overlay)).apply(this, arguments));
    }

    (0, _createClass3.default)(Overlay, [{
      key: 'setOpacity',
      value: function setOpacity(opacity) {
        this.refs.overlay.style.opacity = opacity;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            autoLockScrolling = _props.autoLockScrolling,
            show = _props.show,
            style = _props.style,
            transitionEnabled = _props.transitionEnabled,
            other = (0, _objectWithoutProperties3.default)(_props, ['autoLockScrolling', 'show', 'style', 'transitionEnabled']);
        var prepareStyles = this.context.muiTheme.prepareStyles;

        var styles = getStyles(this.props, this.context);

        return _react2.default.createElement(
          'div',
          (0, _extends3.default)({}, other, { ref: 'overlay', style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
          autoLockScrolling && _react2.default.createElement(_AutoLockScrolling2.default, { lock: show })
        );
      }
    }]);
    return Overlay;
  }(React__default.Component);

  Overlay.defaultProps = {
    autoLockScrolling: true,
    style: {},
    transitionEnabled: true
  };
  Overlay.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  Overlay.propTypes =  {};
  exports.default = Overlay;
  });

  unwrapExports(Overlay_1);

  var dom = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    isDescendant: function isDescendant(parent, child) {
      var node = child.parentNode;

      while (node !== null) {
        if (node === parent) return true;
        node = node.parentNode;
      }

      return false;
    },
    offset: function offset(el) {
      var rect = el.getBoundingClientRect();
      return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft
      };
    }
  };
  });

  unwrapExports(dom);

  var RenderToLayer_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);





  var _propTypes2 = _interopRequireDefault(propTypes);





  var _dom2 = _interopRequireDefault(dom);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // heavily inspired by https://github.com/Khan/react-components/blob/master/js/layered-component-mixin.jsx
  var RenderToLayer = function (_Component) {
    (0, _inherits3.default)(RenderToLayer, _Component);

    function RenderToLayer() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, RenderToLayer);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RenderToLayer.__proto__ || (0, _getPrototypeOf2.default)(RenderToLayer)).call.apply(_ref, [this].concat(args))), _this), _this.onClickAway = function (event) {
        if (event.defaultPrevented) {
          return;
        }

        if (!_this.props.componentClickAway) {
          return;
        }

        if (!_this.props.open) {
          return;
        }

        var el = _this.layer;
        if (event.target !== el && event.target === window || document.documentElement.contains(event.target) && !_dom2.default.isDescendant(el, event.target)) {
          _this.props.componentClickAway(event);
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RenderToLayer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.renderLayer();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.renderLayer();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.unrenderLayer();
      }
    }, {
      key: 'getLayer',
      value: function getLayer() {
        return this.layer;
      }
    }, {
      key: 'unrenderLayer',
      value: function unrenderLayer() {
        if (!this.layer) {
          return;
        }

        if (this.props.useLayerForClickAway) {
          this.layer.style.position = 'relative';
          this.layer.removeEventListener('click', this.onClickAway);
        } else {
          window.removeEventListener('click', this.onClickAway);
        }

        (0, reactDom.unmountComponentAtNode)(this.layer);
        document.body.removeChild(this.layer);
        this.layer = null;
      }

      /**
       * By calling this method in componentDidMount() and
       * componentDidUpdate(), you're effectively creating a "wormhole" that
       * funnels React's hierarchical updates through to a DOM node on an
       * entirely different part of the page.
       */

    }, {
      key: 'renderLayer',
      value: function renderLayer() {
        var _this2 = this;

        var _props = this.props,
            open = _props.open,
            render = _props.render;


        if (open) {
          if (!this.layer) {
            this.layer = document.createElement('div');
            document.body.appendChild(this.layer);

            if (this.props.useLayerForClickAway) {
              this.layer.addEventListener('click', this.onClickAway);
              this.layer.style.position = 'fixed';
              this.layer.style.top = 0;
              this.layer.style.bottom = 0;
              this.layer.style.left = 0;
              this.layer.style.right = 0;
              this.layer.style.zIndex = this.context.muiTheme.zIndex.layer;
            } else {
              setTimeout(function () {
                window.addEventListener('click', _this2.onClickAway);
              }, 0);
            }
          }

          var layerElement = render();
          this.layerElement = (0, reactDom.unstable_renderSubtreeIntoContainer)(this, layerElement, this.layer);
        } else {
          this.unrenderLayer();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return null;
      }
    }]);
    return RenderToLayer;
  }(React__default.Component);

  RenderToLayer.defaultProps = {
    useLayerForClickAway: true
  };
  RenderToLayer.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  RenderToLayer.propTypes =  {};
  exports.default = RenderToLayer;
  });

  unwrapExports(RenderToLayer_1);

  var propTypes$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _propTypes2 = _interopRequireDefault(propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var horizontal = _propTypes2.default.oneOf(['left', 'middle', 'right']);
  var vertical = _propTypes2.default.oneOf(['top', 'center', 'bottom']);

  exports.default = {

    corners: _propTypes2.default.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),

    horizontal: horizontal,

    vertical: vertical,

    origin: _propTypes2.default.shape({
      horizontal: horizontal,
      vertical: vertical
    }),

    cornersAndCenter: _propTypes2.default.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),

    stringOrNumber: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

    zDepth: _propTypes2.default.oneOf([0, 1, 2, 3, 4, 5])

  };
  });

  unwrapExports(propTypes$1);

  var Paper_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _propTypes4 = _interopRequireDefault(propTypes$1);



  var _transitions2 = _interopRequireDefault(transitions);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function getStyles(props, context) {
    var rounded = props.rounded,
        circle = props.circle,
        transitionEnabled = props.transitionEnabled,
        zDepth = props.zDepth;
    var _context$muiTheme = context.muiTheme,
        baseTheme = _context$muiTheme.baseTheme,
        paper = _context$muiTheme.paper,
        borderRadius = _context$muiTheme.borderRadius;


    return {
      root: {
        color: paper.color,
        backgroundColor: paper.backgroundColor,
        transition: transitionEnabled && _transitions2.default.easeOut(),
        boxSizing: 'border-box',
        fontFamily: baseTheme.fontFamily,
        WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
        boxShadow: paper.zDepthShadows[zDepth - 1], // No shadow for 0 depth papers
        borderRadius: circle ? '50%' : rounded ? borderRadius : '0px'
      }
    };
  }

  var Paper = function (_Component) {
    (0, _inherits3.default)(Paper, _Component);

    function Paper() {
      (0, _classCallCheck3.default)(this, Paper);
      return (0, _possibleConstructorReturn3.default)(this, (Paper.__proto__ || (0, _getPrototypeOf2.default)(Paper)).apply(this, arguments));
    }

    (0, _createClass3.default)(Paper, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            children = _props.children,
            circle = _props.circle,
            rounded = _props.rounded,
            style = _props.style,
            transitionEnabled = _props.transitionEnabled,
            zDepth = _props.zDepth,
            other = (0, _objectWithoutProperties3.default)(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);
        var prepareStyles = this.context.muiTheme.prepareStyles;

        var styles = getStyles(this.props, this.context);

        return _react2.default.createElement(
          'div',
          (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
          children
        );
      }
    }]);
    return Paper;
  }(React__default.Component);

  Paper.defaultProps = {
    circle: false,
    rounded: true,
    transitionEnabled: true,
    zDepth: 1
  };
  Paper.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  Paper.propTypes =  {};
  exports.default = Paper;
  });

  unwrapExports(Paper_1);

  var Paper = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;



  var _Paper2 = _interopRequireDefault(Paper_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _Paper2.default;
  });

  unwrapExports(Paper);

  var chainFunction = function chain(){
    var len = arguments.length;
    var args = [];

    for (var i = 0; i < len; i++)
      args[i] = arguments[i];

    args = args.filter(function(fn){ return fn != null });

    if (args.length === 0) return undefined
    if (args.length === 1) return args[0]

    return args.reduce(function(current, next){
      return function chainedFunction() {
        current.apply(this, arguments);
        next.apply(this, arguments);
      };
    })
  };

  /**
   * Copyright 2014-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  var warning$1 = function() {};

  var warning_1$1 = warning$1;

  var ChildMapping = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.getChildMapping = getChildMapping;
  exports.mergeChildMappings = mergeChildMappings;



  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */
  function getChildMapping(children) {
    if (!children) {
      return children;
    }
    var result = {};
    React__default.Children.map(children, function (child) {
      return child;
    }).forEach(function (child) {
      result[child.key] = child;
    });
    return result;
  }

  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */
  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      if (next.hasOwnProperty(key)) {
        return next[key];
      }

      return prev[key];
    }

    // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    var nextKeysPending = {};

    var pendingKeys = [];
    for (var prevKey in prev) {
      if (next.hasOwnProperty(prevKey)) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i = void 0;
    var childMapping = {};
    for (var nextKey in next) {
      if (nextKeysPending.hasOwnProperty(nextKey)) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }
      childMapping[nextKey] = getValueForKey(nextKey);
    }

    // Finally, add the keys which didn't appear before any key in `next`
    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }
  });

  unwrapExports(ChildMapping);
  var ChildMapping_1 = ChildMapping.getChildMapping;
  var ChildMapping_2 = ChildMapping.mergeChildMappings;

  var TransitionGroup_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



  var _chainFunction2 = _interopRequireDefault(chainFunction);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _warning2 = _interopRequireDefault(warning_1$1);



  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var propTypes$1 = {
    component: _propTypes2.default.any,
    childFactory: _propTypes2.default.func,
    children: _propTypes2.default.node
  };

  var defaultProps = {
    component: 'span',
    childFactory: function childFactory(child) {
      return child;
    }
  };

  var TransitionGroup = function (_React$Component) {
    _inherits(TransitionGroup, _React$Component);

    function TransitionGroup(props, context) {
      _classCallCheck(this, TransitionGroup);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

      _this.performAppear = function (key, component) {
        _this.currentlyTransitioningKeys[key] = true;

        if (component.componentWillAppear) {
          component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
        } else {
          _this._handleDoneAppearing(key, component);
        }
      };

      _this._handleDoneAppearing = function (key, component) {
        if (component.componentDidAppear) {
          component.componentDidAppear();
        }

        delete _this.currentlyTransitioningKeys[key];

        var currentChildMapping = (0, ChildMapping.getChildMapping)(_this.props.children);

        if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
          // This was removed before it had fully appeared. Remove it.
          _this.performLeave(key, component);
        }
      };

      _this.performEnter = function (key, component) {
        _this.currentlyTransitioningKeys[key] = true;

        if (component.componentWillEnter) {
          component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
        } else {
          _this._handleDoneEntering(key, component);
        }
      };

      _this._handleDoneEntering = function (key, component) {
        if (component.componentDidEnter) {
          component.componentDidEnter();
        }

        delete _this.currentlyTransitioningKeys[key];

        var currentChildMapping = (0, ChildMapping.getChildMapping)(_this.props.children);

        if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
          // This was removed before it had fully entered. Remove it.
          _this.performLeave(key, component);
        }
      };

      _this.performLeave = function (key, component) {
        _this.currentlyTransitioningKeys[key] = true;

        if (component.componentWillLeave) {
          component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
        } else {
          // Note that this is somewhat dangerous b/c it calls setState()
          // again, effectively mutating the component before all the work
          // is done.
          _this._handleDoneLeaving(key, component);
        }
      };

      _this._handleDoneLeaving = function (key, component) {
        if (component.componentDidLeave) {
          component.componentDidLeave();
        }

        delete _this.currentlyTransitioningKeys[key];

        var currentChildMapping = (0, ChildMapping.getChildMapping)(_this.props.children);

        if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
          // This entered again before it fully left. Add it again.
          _this.keysToEnter.push(key);
        } else {
          _this.setState(function (state) {
            var newChildren = _extends({}, state.children);
            delete newChildren[key];
            return { children: newChildren };
          });
        }
      };

      _this.childRefs = Object.create(null);

      _this.state = {
        children: (0, ChildMapping.getChildMapping)(props.children)
      };
      return _this;
    }

    TransitionGroup.prototype.componentWillMount = function componentWillMount() {
      this.currentlyTransitioningKeys = {};
      this.keysToEnter = [];
      this.keysToLeave = [];
    };

    TransitionGroup.prototype.componentDidMount = function componentDidMount() {
      var initialChildMapping = this.state.children;
      for (var key in initialChildMapping) {
        if (initialChildMapping[key]) {
          this.performAppear(key, this.childRefs[key]);
        }
      }
    };

    TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var nextChildMapping = (0, ChildMapping.getChildMapping)(nextProps.children);
      var prevChildMapping = this.state.children;

      this.setState({
        children: (0, ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
      });

      for (var key in nextChildMapping) {
        var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
        if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
          this.keysToEnter.push(key);
        }
      }

      for (var _key in prevChildMapping) {
        var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
        if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
          this.keysToLeave.push(_key);
        }
      }

      // If we want to someday check for reordering, we could do it here.
    };

    TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
      var _this2 = this;

      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(function (key) {
        return _this2.performEnter(key, _this2.childRefs[key]);
      });

      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(function (key) {
        return _this2.performLeave(key, _this2.childRefs[key]);
      });
    };

    TransitionGroup.prototype.render = function render() {
      var _this3 = this;

      // TODO: we could get rid of the need for the wrapper node
      // by cloning a single child
      var childrenToRender = [];

      var _loop = function _loop(key) {
        var child = _this3.state.children[key];
        if (child) {
          var isCallbackRef = typeof child.ref !== 'string';
          var factoryChild = _this3.props.childFactory(child);
          var ref = function ref(r) {
            _this3.childRefs[key] = r;
          };

          // Always chaining the refs leads to problems when the childFactory
          // wraps the child. The child ref callback gets called twice with the
          // wrapper and the child. So we only need to chain the ref if the
          // factoryChild is not different from child.
          if (factoryChild === child && isCallbackRef) {
            ref = (0, _chainFunction2.default)(child.ref, ref);
          }

          // You may need to apply reactive updates to a child as it is leaving.
          // The normal React way to do it won't work since the child will have
          // already been removed. In case you need this behavior you can provide
          // a childFactory function to wrap every child, even the ones that are
          // leaving.
          childrenToRender.push(_react2.default.cloneElement(factoryChild, {
            key: key,
            ref: ref
          }));
        }
      };

      for (var key in this.state.children) {
        _loop(key);
      }

      // Do not forward TransitionGroup props to primitive DOM nodes
      var props = _extends({}, this.props);
      delete props.transitionLeave;
      delete props.transitionName;
      delete props.transitionAppear;
      delete props.transitionEnter;
      delete props.childFactory;
      delete props.transitionLeaveTimeout;
      delete props.transitionEnterTimeout;
      delete props.transitionAppearTimeout;
      delete props.component;

      return _react2.default.createElement(this.props.component, props, childrenToRender);
    };

    return TransitionGroup;
  }(_react2.default.Component);

  TransitionGroup.displayName = 'TransitionGroup';


  TransitionGroup.propTypes =  {};
  TransitionGroup.defaultProps = defaultProps;

  exports.default = TransitionGroup;
  module.exports = exports['default'];
  });

  unwrapExports(TransitionGroup_1);

  var Dialog_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _reactDom2 = _interopRequireDefault(reactDom);



  var _reactEventListener2 = _interopRequireDefault(reactEventListener_cjs);



  var _keycode2 = _interopRequireDefault(keycode);



  var _transitions2 = _interopRequireDefault(transitions);



  var _Overlay2 = _interopRequireDefault(Overlay_1);



  var _RenderToLayer2 = _interopRequireDefault(RenderToLayer_1);



  var _Paper2 = _interopRequireDefault(Paper);



  var _TransitionGroup2 = _interopRequireDefault(TransitionGroup_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var TransitionItem = function (_Component) {
    (0, _inherits3.default)(TransitionItem, _Component);

    function TransitionItem() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, TransitionItem);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TransitionItem.__proto__ || (0, _getPrototypeOf2.default)(TransitionItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        style: {}
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(TransitionItem, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearTimeout(this.enterTimeout);
        clearTimeout(this.leaveTimeout);
      }
    }, {
      key: 'componentWillEnter',
      value: function componentWillEnter(callback) {
        this.componentWillAppear(callback);
      }
    }, {
      key: 'componentWillAppear',
      value: function componentWillAppear(callback) {
        var spacing = this.context.muiTheme.baseTheme.spacing;

        this.setState({
          style: {
            opacity: 1,
            transform: 'translate(0, ' + spacing.desktopKeylineIncrement + 'px)'
          }
        });

        this.enterTimeout = setTimeout(callback, 450); // matches transition duration
      }
    }, {
      key: 'componentWillLeave',
      value: function componentWillLeave(callback) {
        this.setState({
          style: {
            opacity: 0,
            transform: 'translate(0, 0)'
          }
        });

        this.leaveTimeout = setTimeout(callback, 450); // matches transition duration
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            style = _props.style,
            children = _props.children,
            other = (0, _objectWithoutProperties3.default)(_props, ['style', 'children']);
        var prepareStyles = this.context.muiTheme.prepareStyles;


        return _react2.default.createElement(
          'div',
          (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)({}, this.state.style, style)) }),
          children
        );
      }
    }]);
    return TransitionItem;
  }(React__default.Component);

  TransitionItem.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  TransitionItem.propTypes =  {};


  function getStyles(props, context) {
    var autoScrollBodyContent = props.autoScrollBodyContent,
        open = props.open;
    var _context$muiTheme = context.muiTheme,
        _context$muiTheme$bas = _context$muiTheme.baseTheme,
        spacing = _context$muiTheme$bas.spacing,
        palette = _context$muiTheme$bas.palette,
        dialog = _context$muiTheme.dialog,
        zIndex = _context$muiTheme.zIndex;


    var gutter = spacing.desktopGutter;
    var borderScroll = '1px solid ' + palette.borderColor;

    return {
      root: {
        position: 'fixed',
        boxSizing: 'border-box',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
        zIndex: zIndex.dialog,
        top: 0,
        left: open ? 0 : -10000,
        width: '100%',
        height: '100%',
        transition: open ? _transitions2.default.easeOut('0ms', 'left', '0ms') : _transitions2.default.easeOut('0ms', 'left', '450ms')
      },
      content: {
        boxSizing: 'border-box',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
        transition: _transitions2.default.easeOut(),
        position: 'relative',
        width: '75%',
        maxWidth: spacing.desktopKeylineIncrement * 12,
        margin: '0 auto',
        zIndex: zIndex.dialog
      },
      actionsContainer: {
        boxSizing: 'border-box',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
        padding: 8,
        width: '100%',
        textAlign: 'right',
        marginTop: autoScrollBodyContent ? -1 : 0
      },
      overlay: {
        zIndex: zIndex.dialogOverlay
      },
      title: {
        margin: 0,
        padding: gutter + 'px ' + gutter + 'px 20px ' + gutter + 'px',
        color: palette.textColor,
        fontSize: dialog.titleFontSize,
        lineHeight: '32px',
        fontWeight: 400,
        marginBottom: autoScrollBodyContent ? -1 : 0
      },
      body: {
        fontSize: dialog.bodyFontSize,
        color: dialog.bodyColor,
        padding: (props.title ? 0 : gutter) + 'px ' + gutter + 'px ' + gutter + 'px',
        boxSizing: 'border-box',
        overflowY: autoScrollBodyContent ? 'auto' : 'hidden',
        borderTop: autoScrollBodyContent ? borderScroll : 'none',
        borderBottom: autoScrollBodyContent ? borderScroll : 'none'
      }
    };
  }

  var DialogInline = function (_Component2) {
    (0, _inherits3.default)(DialogInline, _Component2);

    function DialogInline() {
      var _ref2;

      var _temp2, _this2, _ret2;

      (0, _classCallCheck3.default)(this, DialogInline);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = DialogInline.__proto__ || (0, _getPrototypeOf2.default)(DialogInline)).call.apply(_ref2, [this].concat(args))), _this2), _this2.handleClickOverlay = function () {
        _this2.requestClose(false);
      }, _this2.handleKeyUp = function (event) {
        if ((0, _keycode2.default)(event) === 'esc') {
          _this2.requestClose(false);
        }
      }, _this2.handleResize = function () {
        _this2.positionDialog();
      }, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
    }

    (0, _createClass3.default)(DialogInline, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.positionDialog();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.positionDialog();
      }
    }, {
      key: 'positionDialog',
      value: function positionDialog() {
        var _props2 = this.props,
            actions = _props2.actions,
            autoDetectWindowHeight = _props2.autoDetectWindowHeight,
            autoScrollBodyContent = _props2.autoScrollBodyContent,
            bodyStyle = _props2.bodyStyle,
            open = _props2.open,
            repositionOnUpdate = _props2.repositionOnUpdate,
            title = _props2.title;


        if (!open) {
          return;
        }

        var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var container = _reactDom2.default.findDOMNode(this);
        var dialogWindow = _reactDom2.default.findDOMNode(this.refs.dialogWindow);
        var dialogContent = _reactDom2.default.findDOMNode(this.refs.dialogContent);
        var minPaddingTop = 16;

        // Reset the height in case the window was resized.
        dialogWindow.style.height = '';
        dialogContent.style.height = '';

        var dialogWindowHeight = dialogWindow.offsetHeight;
        var paddingTop = (clientHeight - dialogWindowHeight) / 2 - 64;
        if (paddingTop < minPaddingTop) paddingTop = minPaddingTop;

        // Vertically center the dialog window, but make sure it doesn't
        // transition to that position.
        if (repositionOnUpdate || !container.style.paddingTop) {
          container.style.paddingTop = paddingTop + 'px';
        }

        // Force a height if the dialog is taller than clientHeight
        if (autoDetectWindowHeight || autoScrollBodyContent) {
          var styles = getStyles(this.props, this.context);
          styles.body = (0, _simpleAssign2.default)(styles.body, bodyStyle);
          var maxDialogContentHeight = clientHeight - 2 * 64;

          if (title) maxDialogContentHeight -= dialogContent.previousSibling.offsetHeight;

          if (_react2.default.Children.count(actions)) {
            maxDialogContentHeight -= dialogContent.nextSibling.offsetHeight;
          }

          dialogContent.style.maxHeight = maxDialogContentHeight + 'px';
          if (maxDialogContentHeight > dialogWindowHeight) {
            dialogContent.style.borderBottom = 'none';
            dialogContent.style.borderTop = 'none';
          }
        }
      }
    }, {
      key: 'requestClose',
      value: function requestClose(buttonClicked) {
        if (!buttonClicked && this.props.modal) {
          return;
        }

        if (this.props.onRequestClose) {
          this.props.onRequestClose(!!buttonClicked);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props3 = this.props,
            actions = _props3.actions,
            actionsContainerClassName = _props3.actionsContainerClassName,
            actionsContainerStyle = _props3.actionsContainerStyle,
            bodyClassName = _props3.bodyClassName,
            bodyStyle = _props3.bodyStyle,
            children = _props3.children,
            className = _props3.className,
            contentClassName = _props3.contentClassName,
            contentStyle = _props3.contentStyle,
            overlayClassName = _props3.overlayClassName,
            overlayStyle = _props3.overlayStyle,
            open = _props3.open,
            paperClassName = _props3.paperClassName,
            paperProps = _props3.paperProps,
            style = _props3.style,
            titleClassName = _props3.titleClassName,
            titleStyle = _props3.titleStyle,
            title = _props3.title;
        var prepareStyles = this.context.muiTheme.prepareStyles;

        var styles = getStyles(this.props, this.context);

        styles.root = (0, _simpleAssign2.default)(styles.root, style);
        styles.content = (0, _simpleAssign2.default)(styles.content, contentStyle);
        styles.body = (0, _simpleAssign2.default)(styles.body, bodyStyle);
        styles.actionsContainer = (0, _simpleAssign2.default)(styles.actionsContainer, actionsContainerStyle);
        styles.overlay = (0, _simpleAssign2.default)(styles.overlay, overlayStyle);
        styles.title = (0, _simpleAssign2.default)(styles.title, titleStyle);

        var actionsContainer = _react2.default.Children.count(actions) > 0 && _react2.default.createElement(
          'div',
          { className: actionsContainerClassName, style: prepareStyles(styles.actionsContainer) },
          _react2.default.Children.toArray(actions)
        );

        var titleElement = title;
        if (_react2.default.isValidElement(title)) {
          titleElement = _react2.default.cloneElement(title, {
            className: title.props.className || titleClassName,
            style: prepareStyles((0, _simpleAssign2.default)(styles.title, title.props.style))
          });
        } else if (typeof title === 'string') {
          titleElement = _react2.default.createElement(
            'h3',
            { className: titleClassName, style: prepareStyles(styles.title) },
            title
          );
        }

        return _react2.default.createElement(
          'div',
          { className: className, style: prepareStyles(styles.root) },
          open && _react2.default.createElement(_reactEventListener2.default, {
            target: 'window',
            onKeyUp: this.handleKeyUp,
            onResize: this.handleResize
          }),
          _react2.default.createElement(
            _TransitionGroup2.default,
            {
              component: 'div',
              ref: 'dialogWindow',
              transitionAppear: true,
              transitionAppearTimeout: 450,
              transitionEnter: true,
              transitionEnterTimeout: 450
            },
            open && _react2.default.createElement(
              TransitionItem,
              {
                className: contentClassName,
                style: styles.content
              },
              _react2.default.createElement(
                _Paper2.default,
                (0, _extends3.default)({ className: paperClassName, zDepth: 4 }, paperProps),
                titleElement,
                _react2.default.createElement(
                  'div',
                  {
                    ref: 'dialogContent',
                    className: bodyClassName,
                    style: prepareStyles(styles.body)
                  },
                  children
                ),
                actionsContainer
              )
            )
          ),
          _react2.default.createElement(_Overlay2.default, {
            show: open,
            className: overlayClassName,
            style: styles.overlay,
            onClick: this.handleClickOverlay
          })
        );
      }
    }]);
    return DialogInline;
  }(React__default.Component);

  DialogInline.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  DialogInline.propTypes =  {};

  var Dialog = function (_Component3) {
    (0, _inherits3.default)(Dialog, _Component3);

    function Dialog() {
      var _ref3;

      var _temp3, _this3, _ret3;

      (0, _classCallCheck3.default)(this, Dialog);

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _ret3 = (_temp3 = (_this3 = (0, _possibleConstructorReturn3.default)(this, (_ref3 = Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).call.apply(_ref3, [this].concat(args))), _this3), _this3.renderLayer = function () {
        return _react2.default.createElement(DialogInline, _this3.props);
      }, _temp3), (0, _possibleConstructorReturn3.default)(_this3, _ret3);
    }

    (0, _createClass3.default)(Dialog, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_RenderToLayer2.default, { render: this.renderLayer, open: true, useLayerForClickAway: false });
      }
    }]);
    return Dialog;
  }(React__default.Component);

  Dialog.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  Dialog.defaultProps = {
    autoDetectWindowHeight: true,
    autoScrollBodyContent: false,
    modal: false,
    repositionOnUpdate: true
  };
  Dialog.propTypes =  {};
  exports.default = Dialog;
  });

  unwrapExports(Dialog_1);

  var Dialog = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;



  var _Dialog2 = _interopRequireDefault(Dialog_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _Dialog2.default;
  });

  var MuiDialog = unwrapExports(Dialog);

  var colors = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var red50 = exports.red50 = '#ffebee';
  var red100 = exports.red100 = '#ffcdd2';
  var red200 = exports.red200 = '#ef9a9a';
  var red300 = exports.red300 = '#e57373';
  var red400 = exports.red400 = '#ef5350';
  var red500 = exports.red500 = '#f44336';
  var red600 = exports.red600 = '#e53935';
  var red700 = exports.red700 = '#d32f2f';
  var red800 = exports.red800 = '#c62828';
  var red900 = exports.red900 = '#b71c1c';
  var redA100 = exports.redA100 = '#ff8a80';
  var redA200 = exports.redA200 = '#ff5252';
  var redA400 = exports.redA400 = '#ff1744';
  var redA700 = exports.redA700 = '#d50000';

  var pink50 = exports.pink50 = '#fce4ec';
  var pink100 = exports.pink100 = '#f8bbd0';
  var pink200 = exports.pink200 = '#f48fb1';
  var pink300 = exports.pink300 = '#f06292';
  var pink400 = exports.pink400 = '#ec407a';
  var pink500 = exports.pink500 = '#e91e63';
  var pink600 = exports.pink600 = '#d81b60';
  var pink700 = exports.pink700 = '#c2185b';
  var pink800 = exports.pink800 = '#ad1457';
  var pink900 = exports.pink900 = '#880e4f';
  var pinkA100 = exports.pinkA100 = '#ff80ab';
  var pinkA200 = exports.pinkA200 = '#ff4081';
  var pinkA400 = exports.pinkA400 = '#f50057';
  var pinkA700 = exports.pinkA700 = '#c51162';

  var purple50 = exports.purple50 = '#f3e5f5';
  var purple100 = exports.purple100 = '#e1bee7';
  var purple200 = exports.purple200 = '#ce93d8';
  var purple300 = exports.purple300 = '#ba68c8';
  var purple400 = exports.purple400 = '#ab47bc';
  var purple500 = exports.purple500 = '#9c27b0';
  var purple600 = exports.purple600 = '#8e24aa';
  var purple700 = exports.purple700 = '#7b1fa2';
  var purple800 = exports.purple800 = '#6a1b9a';
  var purple900 = exports.purple900 = '#4a148c';
  var purpleA100 = exports.purpleA100 = '#ea80fc';
  var purpleA200 = exports.purpleA200 = '#e040fb';
  var purpleA400 = exports.purpleA400 = '#d500f9';
  var purpleA700 = exports.purpleA700 = '#aa00ff';

  var deepPurple50 = exports.deepPurple50 = '#ede7f6';
  var deepPurple100 = exports.deepPurple100 = '#d1c4e9';
  var deepPurple200 = exports.deepPurple200 = '#b39ddb';
  var deepPurple300 = exports.deepPurple300 = '#9575cd';
  var deepPurple400 = exports.deepPurple400 = '#7e57c2';
  var deepPurple500 = exports.deepPurple500 = '#673ab7';
  var deepPurple600 = exports.deepPurple600 = '#5e35b1';
  var deepPurple700 = exports.deepPurple700 = '#512da8';
  var deepPurple800 = exports.deepPurple800 = '#4527a0';
  var deepPurple900 = exports.deepPurple900 = '#311b92';
  var deepPurpleA100 = exports.deepPurpleA100 = '#b388ff';
  var deepPurpleA200 = exports.deepPurpleA200 = '#7c4dff';
  var deepPurpleA400 = exports.deepPurpleA400 = '#651fff';
  var deepPurpleA700 = exports.deepPurpleA700 = '#6200ea';

  var indigo50 = exports.indigo50 = '#e8eaf6';
  var indigo100 = exports.indigo100 = '#c5cae9';
  var indigo200 = exports.indigo200 = '#9fa8da';
  var indigo300 = exports.indigo300 = '#7986cb';
  var indigo400 = exports.indigo400 = '#5c6bc0';
  var indigo500 = exports.indigo500 = '#3f51b5';
  var indigo600 = exports.indigo600 = '#3949ab';
  var indigo700 = exports.indigo700 = '#303f9f';
  var indigo800 = exports.indigo800 = '#283593';
  var indigo900 = exports.indigo900 = '#1a237e';
  var indigoA100 = exports.indigoA100 = '#8c9eff';
  var indigoA200 = exports.indigoA200 = '#536dfe';
  var indigoA400 = exports.indigoA400 = '#3d5afe';
  var indigoA700 = exports.indigoA700 = '#304ffe';

  var blue50 = exports.blue50 = '#e3f2fd';
  var blue100 = exports.blue100 = '#bbdefb';
  var blue200 = exports.blue200 = '#90caf9';
  var blue300 = exports.blue300 = '#64b5f6';
  var blue400 = exports.blue400 = '#42a5f5';
  var blue500 = exports.blue500 = '#2196f3';
  var blue600 = exports.blue600 = '#1e88e5';
  var blue700 = exports.blue700 = '#1976d2';
  var blue800 = exports.blue800 = '#1565c0';
  var blue900 = exports.blue900 = '#0d47a1';
  var blueA100 = exports.blueA100 = '#82b1ff';
  var blueA200 = exports.blueA200 = '#448aff';
  var blueA400 = exports.blueA400 = '#2979ff';
  var blueA700 = exports.blueA700 = '#2962ff';

  var lightBlue50 = exports.lightBlue50 = '#e1f5fe';
  var lightBlue100 = exports.lightBlue100 = '#b3e5fc';
  var lightBlue200 = exports.lightBlue200 = '#81d4fa';
  var lightBlue300 = exports.lightBlue300 = '#4fc3f7';
  var lightBlue400 = exports.lightBlue400 = '#29b6f6';
  var lightBlue500 = exports.lightBlue500 = '#03a9f4';
  var lightBlue600 = exports.lightBlue600 = '#039be5';
  var lightBlue700 = exports.lightBlue700 = '#0288d1';
  var lightBlue800 = exports.lightBlue800 = '#0277bd';
  var lightBlue900 = exports.lightBlue900 = '#01579b';
  var lightBlueA100 = exports.lightBlueA100 = '#80d8ff';
  var lightBlueA200 = exports.lightBlueA200 = '#40c4ff';
  var lightBlueA400 = exports.lightBlueA400 = '#00b0ff';
  var lightBlueA700 = exports.lightBlueA700 = '#0091ea';

  var cyan50 = exports.cyan50 = '#e0f7fa';
  var cyan100 = exports.cyan100 = '#b2ebf2';
  var cyan200 = exports.cyan200 = '#80deea';
  var cyan300 = exports.cyan300 = '#4dd0e1';
  var cyan400 = exports.cyan400 = '#26c6da';
  var cyan500 = exports.cyan500 = '#00bcd4';
  var cyan600 = exports.cyan600 = '#00acc1';
  var cyan700 = exports.cyan700 = '#0097a7';
  var cyan800 = exports.cyan800 = '#00838f';
  var cyan900 = exports.cyan900 = '#006064';
  var cyanA100 = exports.cyanA100 = '#84ffff';
  var cyanA200 = exports.cyanA200 = '#18ffff';
  var cyanA400 = exports.cyanA400 = '#00e5ff';
  var cyanA700 = exports.cyanA700 = '#00b8d4';

  var teal50 = exports.teal50 = '#e0f2f1';
  var teal100 = exports.teal100 = '#b2dfdb';
  var teal200 = exports.teal200 = '#80cbc4';
  var teal300 = exports.teal300 = '#4db6ac';
  var teal400 = exports.teal400 = '#26a69a';
  var teal500 = exports.teal500 = '#009688';
  var teal600 = exports.teal600 = '#00897b';
  var teal700 = exports.teal700 = '#00796b';
  var teal800 = exports.teal800 = '#00695c';
  var teal900 = exports.teal900 = '#004d40';
  var tealA100 = exports.tealA100 = '#a7ffeb';
  var tealA200 = exports.tealA200 = '#64ffda';
  var tealA400 = exports.tealA400 = '#1de9b6';
  var tealA700 = exports.tealA700 = '#00bfa5';

  var green50 = exports.green50 = '#e8f5e9';
  var green100 = exports.green100 = '#c8e6c9';
  var green200 = exports.green200 = '#a5d6a7';
  var green300 = exports.green300 = '#81c784';
  var green400 = exports.green400 = '#66bb6a';
  var green500 = exports.green500 = '#4caf50';
  var green600 = exports.green600 = '#43a047';
  var green700 = exports.green700 = '#388e3c';
  var green800 = exports.green800 = '#2e7d32';
  var green900 = exports.green900 = '#1b5e20';
  var greenA100 = exports.greenA100 = '#b9f6ca';
  var greenA200 = exports.greenA200 = '#69f0ae';
  var greenA400 = exports.greenA400 = '#00e676';
  var greenA700 = exports.greenA700 = '#00c853';

  var lightGreen50 = exports.lightGreen50 = '#f1f8e9';
  var lightGreen100 = exports.lightGreen100 = '#dcedc8';
  var lightGreen200 = exports.lightGreen200 = '#c5e1a5';
  var lightGreen300 = exports.lightGreen300 = '#aed581';
  var lightGreen400 = exports.lightGreen400 = '#9ccc65';
  var lightGreen500 = exports.lightGreen500 = '#8bc34a';
  var lightGreen600 = exports.lightGreen600 = '#7cb342';
  var lightGreen700 = exports.lightGreen700 = '#689f38';
  var lightGreen800 = exports.lightGreen800 = '#558b2f';
  var lightGreen900 = exports.lightGreen900 = '#33691e';
  var lightGreenA100 = exports.lightGreenA100 = '#ccff90';
  var lightGreenA200 = exports.lightGreenA200 = '#b2ff59';
  var lightGreenA400 = exports.lightGreenA400 = '#76ff03';
  var lightGreenA700 = exports.lightGreenA700 = '#64dd17';

  var lime50 = exports.lime50 = '#f9fbe7';
  var lime100 = exports.lime100 = '#f0f4c3';
  var lime200 = exports.lime200 = '#e6ee9c';
  var lime300 = exports.lime300 = '#dce775';
  var lime400 = exports.lime400 = '#d4e157';
  var lime500 = exports.lime500 = '#cddc39';
  var lime600 = exports.lime600 = '#c0ca33';
  var lime700 = exports.lime700 = '#afb42b';
  var lime800 = exports.lime800 = '#9e9d24';
  var lime900 = exports.lime900 = '#827717';
  var limeA100 = exports.limeA100 = '#f4ff81';
  var limeA200 = exports.limeA200 = '#eeff41';
  var limeA400 = exports.limeA400 = '#c6ff00';
  var limeA700 = exports.limeA700 = '#aeea00';

  var yellow50 = exports.yellow50 = '#fffde7';
  var yellow100 = exports.yellow100 = '#fff9c4';
  var yellow200 = exports.yellow200 = '#fff59d';
  var yellow300 = exports.yellow300 = '#fff176';
  var yellow400 = exports.yellow400 = '#ffee58';
  var yellow500 = exports.yellow500 = '#ffeb3b';
  var yellow600 = exports.yellow600 = '#fdd835';
  var yellow700 = exports.yellow700 = '#fbc02d';
  var yellow800 = exports.yellow800 = '#f9a825';
  var yellow900 = exports.yellow900 = '#f57f17';
  var yellowA100 = exports.yellowA100 = '#ffff8d';
  var yellowA200 = exports.yellowA200 = '#ffff00';
  var yellowA400 = exports.yellowA400 = '#ffea00';
  var yellowA700 = exports.yellowA700 = '#ffd600';

  var amber50 = exports.amber50 = '#fff8e1';
  var amber100 = exports.amber100 = '#ffecb3';
  var amber200 = exports.amber200 = '#ffe082';
  var amber300 = exports.amber300 = '#ffd54f';
  var amber400 = exports.amber400 = '#ffca28';
  var amber500 = exports.amber500 = '#ffc107';
  var amber600 = exports.amber600 = '#ffb300';
  var amber700 = exports.amber700 = '#ffa000';
  var amber800 = exports.amber800 = '#ff8f00';
  var amber900 = exports.amber900 = '#ff6f00';
  var amberA100 = exports.amberA100 = '#ffe57f';
  var amberA200 = exports.amberA200 = '#ffd740';
  var amberA400 = exports.amberA400 = '#ffc400';
  var amberA700 = exports.amberA700 = '#ffab00';

  var orange50 = exports.orange50 = '#fff3e0';
  var orange100 = exports.orange100 = '#ffe0b2';
  var orange200 = exports.orange200 = '#ffcc80';
  var orange300 = exports.orange300 = '#ffb74d';
  var orange400 = exports.orange400 = '#ffa726';
  var orange500 = exports.orange500 = '#ff9800';
  var orange600 = exports.orange600 = '#fb8c00';
  var orange700 = exports.orange700 = '#f57c00';
  var orange800 = exports.orange800 = '#ef6c00';
  var orange900 = exports.orange900 = '#e65100';
  var orangeA100 = exports.orangeA100 = '#ffd180';
  var orangeA200 = exports.orangeA200 = '#ffab40';
  var orangeA400 = exports.orangeA400 = '#ff9100';
  var orangeA700 = exports.orangeA700 = '#ff6d00';

  var deepOrange50 = exports.deepOrange50 = '#fbe9e7';
  var deepOrange100 = exports.deepOrange100 = '#ffccbc';
  var deepOrange200 = exports.deepOrange200 = '#ffab91';
  var deepOrange300 = exports.deepOrange300 = '#ff8a65';
  var deepOrange400 = exports.deepOrange400 = '#ff7043';
  var deepOrange500 = exports.deepOrange500 = '#ff5722';
  var deepOrange600 = exports.deepOrange600 = '#f4511e';
  var deepOrange700 = exports.deepOrange700 = '#e64a19';
  var deepOrange800 = exports.deepOrange800 = '#d84315';
  var deepOrange900 = exports.deepOrange900 = '#bf360c';
  var deepOrangeA100 = exports.deepOrangeA100 = '#ff9e80';
  var deepOrangeA200 = exports.deepOrangeA200 = '#ff6e40';
  var deepOrangeA400 = exports.deepOrangeA400 = '#ff3d00';
  var deepOrangeA700 = exports.deepOrangeA700 = '#dd2c00';

  var brown50 = exports.brown50 = '#efebe9';
  var brown100 = exports.brown100 = '#d7ccc8';
  var brown200 = exports.brown200 = '#bcaaa4';
  var brown300 = exports.brown300 = '#a1887f';
  var brown400 = exports.brown400 = '#8d6e63';
  var brown500 = exports.brown500 = '#795548';
  var brown600 = exports.brown600 = '#6d4c41';
  var brown700 = exports.brown700 = '#5d4037';
  var brown800 = exports.brown800 = '#4e342e';
  var brown900 = exports.brown900 = '#3e2723';

  var blueGrey50 = exports.blueGrey50 = '#eceff1';
  var blueGrey100 = exports.blueGrey100 = '#cfd8dc';
  var blueGrey200 = exports.blueGrey200 = '#b0bec5';
  var blueGrey300 = exports.blueGrey300 = '#90a4ae';
  var blueGrey400 = exports.blueGrey400 = '#78909c';
  var blueGrey500 = exports.blueGrey500 = '#607d8b';
  var blueGrey600 = exports.blueGrey600 = '#546e7a';
  var blueGrey700 = exports.blueGrey700 = '#455a64';
  var blueGrey800 = exports.blueGrey800 = '#37474f';
  var blueGrey900 = exports.blueGrey900 = '#263238';

  var grey50 = exports.grey50 = '#fafafa';
  var grey100 = exports.grey100 = '#f5f5f5';
  var grey200 = exports.grey200 = '#eeeeee';
  var grey300 = exports.grey300 = '#e0e0e0';
  var grey400 = exports.grey400 = '#bdbdbd';
  var grey500 = exports.grey500 = '#9e9e9e';
  var grey600 = exports.grey600 = '#757575';
  var grey700 = exports.grey700 = '#616161';
  var grey800 = exports.grey800 = '#424242';
  var grey900 = exports.grey900 = '#212121';

  var black = exports.black = '#000000';
  var white = exports.white = '#ffffff';

  var transparent = exports.transparent = 'rgba(0, 0, 0, 0)';
  var fullBlack = exports.fullBlack = 'rgba(0, 0, 0, 1)';
  var darkBlack = exports.darkBlack = 'rgba(0, 0, 0, 0.87)';
  var lightBlack = exports.lightBlack = 'rgba(0, 0, 0, 0.54)';
  var minBlack = exports.minBlack = 'rgba(0, 0, 0, 0.26)';
  var faintBlack = exports.faintBlack = 'rgba(0, 0, 0, 0.12)';
  var fullWhite = exports.fullWhite = 'rgba(255, 255, 255, 1)';
  var darkWhite = exports.darkWhite = 'rgba(255, 255, 255, 0.87)';
  var lightWhite = exports.lightWhite = 'rgba(255, 255, 255, 0.54)';
  });

  unwrapExports(colors);
  var colors_1 = colors.red50;
  var colors_2 = colors.red100;
  var colors_3 = colors.red200;
  var colors_4 = colors.red300;
  var colors_5 = colors.red400;
  var colors_6 = colors.red500;
  var colors_7 = colors.red600;
  var colors_8 = colors.red700;
  var colors_9 = colors.red800;
  var colors_10 = colors.red900;
  var colors_11 = colors.redA100;
  var colors_12 = colors.redA200;
  var colors_13 = colors.redA400;
  var colors_14 = colors.redA700;
  var colors_15 = colors.pink50;
  var colors_16 = colors.pink100;
  var colors_17 = colors.pink200;
  var colors_18 = colors.pink300;
  var colors_19 = colors.pink400;
  var colors_20 = colors.pink500;
  var colors_21 = colors.pink600;
  var colors_22 = colors.pink700;
  var colors_23 = colors.pink800;
  var colors_24 = colors.pink900;
  var colors_25 = colors.pinkA100;
  var colors_26 = colors.pinkA200;
  var colors_27 = colors.pinkA400;
  var colors_28 = colors.pinkA700;
  var colors_29 = colors.purple50;
  var colors_30 = colors.purple100;
  var colors_31 = colors.purple200;
  var colors_32 = colors.purple300;
  var colors_33 = colors.purple400;
  var colors_34 = colors.purple500;
  var colors_35 = colors.purple600;
  var colors_36 = colors.purple700;
  var colors_37 = colors.purple800;
  var colors_38 = colors.purple900;
  var colors_39 = colors.purpleA100;
  var colors_40 = colors.purpleA200;
  var colors_41 = colors.purpleA400;
  var colors_42 = colors.purpleA700;
  var colors_43 = colors.deepPurple50;
  var colors_44 = colors.deepPurple100;
  var colors_45 = colors.deepPurple200;
  var colors_46 = colors.deepPurple300;
  var colors_47 = colors.deepPurple400;
  var colors_48 = colors.deepPurple500;
  var colors_49 = colors.deepPurple600;
  var colors_50 = colors.deepPurple700;
  var colors_51 = colors.deepPurple800;
  var colors_52 = colors.deepPurple900;
  var colors_53 = colors.deepPurpleA100;
  var colors_54 = colors.deepPurpleA200;
  var colors_55 = colors.deepPurpleA400;
  var colors_56 = colors.deepPurpleA700;
  var colors_57 = colors.indigo50;
  var colors_58 = colors.indigo100;
  var colors_59 = colors.indigo200;
  var colors_60 = colors.indigo300;
  var colors_61 = colors.indigo400;
  var colors_62 = colors.indigo500;
  var colors_63 = colors.indigo600;
  var colors_64 = colors.indigo700;
  var colors_65 = colors.indigo800;
  var colors_66 = colors.indigo900;
  var colors_67 = colors.indigoA100;
  var colors_68 = colors.indigoA200;
  var colors_69 = colors.indigoA400;
  var colors_70 = colors.indigoA700;
  var colors_71 = colors.blue50;
  var colors_72 = colors.blue100;
  var colors_73 = colors.blue200;
  var colors_74 = colors.blue300;
  var colors_75 = colors.blue400;
  var colors_76 = colors.blue500;
  var colors_77 = colors.blue600;
  var colors_78 = colors.blue700;
  var colors_79 = colors.blue800;
  var colors_80 = colors.blue900;
  var colors_81 = colors.blueA100;
  var colors_82 = colors.blueA200;
  var colors_83 = colors.blueA400;
  var colors_84 = colors.blueA700;
  var colors_85 = colors.lightBlue50;
  var colors_86 = colors.lightBlue100;
  var colors_87 = colors.lightBlue200;
  var colors_88 = colors.lightBlue300;
  var colors_89 = colors.lightBlue400;
  var colors_90 = colors.lightBlue500;
  var colors_91 = colors.lightBlue600;
  var colors_92 = colors.lightBlue700;
  var colors_93 = colors.lightBlue800;
  var colors_94 = colors.lightBlue900;
  var colors_95 = colors.lightBlueA100;
  var colors_96 = colors.lightBlueA200;
  var colors_97 = colors.lightBlueA400;
  var colors_98 = colors.lightBlueA700;
  var colors_99 = colors.cyan50;
  var colors_100 = colors.cyan100;
  var colors_101 = colors.cyan200;
  var colors_102 = colors.cyan300;
  var colors_103 = colors.cyan400;
  var colors_104 = colors.cyan500;
  var colors_105 = colors.cyan600;
  var colors_106 = colors.cyan700;
  var colors_107 = colors.cyan800;
  var colors_108 = colors.cyan900;
  var colors_109 = colors.cyanA100;
  var colors_110 = colors.cyanA200;
  var colors_111 = colors.cyanA400;
  var colors_112 = colors.cyanA700;
  var colors_113 = colors.teal50;
  var colors_114 = colors.teal100;
  var colors_115 = colors.teal200;
  var colors_116 = colors.teal300;
  var colors_117 = colors.teal400;
  var colors_118 = colors.teal500;
  var colors_119 = colors.teal600;
  var colors_120 = colors.teal700;
  var colors_121 = colors.teal800;
  var colors_122 = colors.teal900;
  var colors_123 = colors.tealA100;
  var colors_124 = colors.tealA200;
  var colors_125 = colors.tealA400;
  var colors_126 = colors.tealA700;
  var colors_127 = colors.green50;
  var colors_128 = colors.green100;
  var colors_129 = colors.green200;
  var colors_130 = colors.green300;
  var colors_131 = colors.green400;
  var colors_132 = colors.green500;
  var colors_133 = colors.green600;
  var colors_134 = colors.green700;
  var colors_135 = colors.green800;
  var colors_136 = colors.green900;
  var colors_137 = colors.greenA100;
  var colors_138 = colors.greenA200;
  var colors_139 = colors.greenA400;
  var colors_140 = colors.greenA700;
  var colors_141 = colors.lightGreen50;
  var colors_142 = colors.lightGreen100;
  var colors_143 = colors.lightGreen200;
  var colors_144 = colors.lightGreen300;
  var colors_145 = colors.lightGreen400;
  var colors_146 = colors.lightGreen500;
  var colors_147 = colors.lightGreen600;
  var colors_148 = colors.lightGreen700;
  var colors_149 = colors.lightGreen800;
  var colors_150 = colors.lightGreen900;
  var colors_151 = colors.lightGreenA100;
  var colors_152 = colors.lightGreenA200;
  var colors_153 = colors.lightGreenA400;
  var colors_154 = colors.lightGreenA700;
  var colors_155 = colors.lime50;
  var colors_156 = colors.lime100;
  var colors_157 = colors.lime200;
  var colors_158 = colors.lime300;
  var colors_159 = colors.lime400;
  var colors_160 = colors.lime500;
  var colors_161 = colors.lime600;
  var colors_162 = colors.lime700;
  var colors_163 = colors.lime800;
  var colors_164 = colors.lime900;
  var colors_165 = colors.limeA100;
  var colors_166 = colors.limeA200;
  var colors_167 = colors.limeA400;
  var colors_168 = colors.limeA700;
  var colors_169 = colors.yellow50;
  var colors_170 = colors.yellow100;
  var colors_171 = colors.yellow200;
  var colors_172 = colors.yellow300;
  var colors_173 = colors.yellow400;
  var colors_174 = colors.yellow500;
  var colors_175 = colors.yellow600;
  var colors_176 = colors.yellow700;
  var colors_177 = colors.yellow800;
  var colors_178 = colors.yellow900;
  var colors_179 = colors.yellowA100;
  var colors_180 = colors.yellowA200;
  var colors_181 = colors.yellowA400;
  var colors_182 = colors.yellowA700;
  var colors_183 = colors.amber50;
  var colors_184 = colors.amber100;
  var colors_185 = colors.amber200;
  var colors_186 = colors.amber300;
  var colors_187 = colors.amber400;
  var colors_188 = colors.amber500;
  var colors_189 = colors.amber600;
  var colors_190 = colors.amber700;
  var colors_191 = colors.amber800;
  var colors_192 = colors.amber900;
  var colors_193 = colors.amberA100;
  var colors_194 = colors.amberA200;
  var colors_195 = colors.amberA400;
  var colors_196 = colors.amberA700;
  var colors_197 = colors.orange50;
  var colors_198 = colors.orange100;
  var colors_199 = colors.orange200;
  var colors_200 = colors.orange300;
  var colors_201 = colors.orange400;
  var colors_202 = colors.orange500;
  var colors_203 = colors.orange600;
  var colors_204 = colors.orange700;
  var colors_205 = colors.orange800;
  var colors_206 = colors.orange900;
  var colors_207 = colors.orangeA100;
  var colors_208 = colors.orangeA200;
  var colors_209 = colors.orangeA400;
  var colors_210 = colors.orangeA700;
  var colors_211 = colors.deepOrange50;
  var colors_212 = colors.deepOrange100;
  var colors_213 = colors.deepOrange200;
  var colors_214 = colors.deepOrange300;
  var colors_215 = colors.deepOrange400;
  var colors_216 = colors.deepOrange500;
  var colors_217 = colors.deepOrange600;
  var colors_218 = colors.deepOrange700;
  var colors_219 = colors.deepOrange800;
  var colors_220 = colors.deepOrange900;
  var colors_221 = colors.deepOrangeA100;
  var colors_222 = colors.deepOrangeA200;
  var colors_223 = colors.deepOrangeA400;
  var colors_224 = colors.deepOrangeA700;
  var colors_225 = colors.brown50;
  var colors_226 = colors.brown100;
  var colors_227 = colors.brown200;
  var colors_228 = colors.brown300;
  var colors_229 = colors.brown400;
  var colors_230 = colors.brown500;
  var colors_231 = colors.brown600;
  var colors_232 = colors.brown700;
  var colors_233 = colors.brown800;
  var colors_234 = colors.brown900;
  var colors_235 = colors.blueGrey50;
  var colors_236 = colors.blueGrey100;
  var colors_237 = colors.blueGrey200;
  var colors_238 = colors.blueGrey300;
  var colors_239 = colors.blueGrey400;
  var colors_240 = colors.blueGrey500;
  var colors_241 = colors.blueGrey600;
  var colors_242 = colors.blueGrey700;
  var colors_243 = colors.blueGrey800;
  var colors_244 = colors.blueGrey900;
  var colors_245 = colors.grey50;
  var colors_246 = colors.grey100;
  var colors_247 = colors.grey200;
  var colors_248 = colors.grey300;
  var colors_249 = colors.grey400;
  var colors_250 = colors.grey500;
  var colors_251 = colors.grey600;
  var colors_252 = colors.grey700;
  var colors_253 = colors.grey800;
  var colors_254 = colors.grey900;
  var colors_255 = colors.black;
  var colors_256 = colors.white;
  var colors_257 = colors.transparent;
  var colors_258 = colors.fullBlack;
  var colors_259 = colors.darkBlack;
  var colors_260 = colors.lightBlack;
  var colors_261 = colors.minBlack;
  var colors_262 = colors.faintBlack;
  var colors_263 = colors.fullWhite;
  var colors_264 = colors.darkWhite;
  var colors_265 = colors.lightWhite;

  var styles = {
    root: {},
    title: {
      color: "".concat(colors_105),
      padding: '8px 14px 8px',
      borderBottom: "1px solid ".concat(colors_248)
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
  var Dialog$1 =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Dialog, _Component);

    function Dialog() {
      _classCallCheck(this, Dialog);

      return _possibleConstructorReturn(this, _getPrototypeOf(Dialog).apply(this, arguments));
    }

    _createClass(Dialog, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            style = _this$props.style,
            titleStyle = _this$props.titleStyle,
            bodyStyle = _this$props.bodyStyle,
            contentStyle = _this$props.contentStyle,
            actionsContainerStyle = _this$props.actionsContainerStyle,
            children = _this$props.children,
            props = _objectWithoutProperties(_this$props, ["style", "titleStyle", "bodyStyle", "contentStyle", "actionsContainerStyle", "children"]);

        return React__default.createElement(MuiDialog, _extends({}, props, {
          style: _.defaults(style, styles.root),
          titleStyle: _.defaults(titleStyle, styles.title),
          bodyStyle: _.defaults(bodyStyle, styles.body),
          contentStyle: _.defaults(contentStyle, styles.content),
          actionsContainerStyle: _.defaults(actionsContainerStyle, styles.actionsContainer)
        }), children);
      }
    }]);

    return Dialog;
  }(React.Component);

  var colorManipulator = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.convertColorToString = convertColorToString;
  exports.convertHexToRGB = convertHexToRGB;
  exports.decomposeColor = decomposeColor;
  exports.getContrastRatio = getContrastRatio;
  exports.getLuminance = getLuminance;
  exports.emphasize = emphasize;
  exports.fade = fade;
  exports.darken = darken;
  exports.lighten = lighten;



  var _warning2 = _interopRequireDefault(warning_1$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   * Returns a number whose value is limited to the given range.
   *
   * @param {number} value The value to be clamped
   * @param {number} min The lower boundary of the output range
   * @param {number} max The upper boundary of the output range
   * @returns {number} A number in the range [min, max]
   */
  function clamp(value, min, max) {
    if (value < min) {
      return min;
    }
    if (value > max) {
      return max;
    }
    return value;
  }

  /**
   * Converts a color object with type and values to a string.
   *
   * @param {object} color - Decomposed color
   * @param {string} color.type - One of, 'rgb', 'rgba', 'hsl', 'hsla'
   * @param {array} color.values - [n,n,n] or [n,n,n,n]
   * @returns {string} A CSS color string
   */
  function convertColorToString(color) {
    var type = color.type,
        values = color.values;


    if (type.indexOf('rgb') > -1) {
      // Only convert the first 3 values to int (i.e. not alpha)
      for (var i = 0; i < 3; i++) {
        values[i] = parseInt(values[i]);
      }
    }

    var colorString = void 0;

    if (type.indexOf('hsl') > -1) {
      colorString = color.type + '(' + values[0] + ', ' + values[1] + '%, ' + values[2] + '%';
    } else {
      colorString = color.type + '(' + values[0] + ', ' + values[1] + ', ' + values[2];
    }

    if (values.length === 4) {
      colorString += ', ' + color.values[3] + ')';
    } else {
      colorString += ')';
    }

    return colorString;
  }

  /**
   * Converts a color from CSS hex format to CSS rgb format.
   *
   *  @param {string} color - Hex color, i.e. #nnn or #nnnnnn
   *  @returns {string} A CSS rgb color string
   */
  function convertHexToRGB(color) {
    if (color.length === 4) {
      var extendedColor = '#';
      for (var i = 1; i < color.length; i++) {
        extendedColor += color.charAt(i) + color.charAt(i);
      }
      color = extendedColor;
    }

    var values = {
      r: parseInt(color.substr(1, 2), 16),
      g: parseInt(color.substr(3, 2), 16),
      b: parseInt(color.substr(5, 2), 16)
    };

    return 'rgb(' + values.r + ', ' + values.g + ', ' + values.b + ')';
  }

  /**
   * Returns an object with the type and values of a color.
   *
   * Note: Does not support rgb % values and color names.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {{type: string, values: number[]}} A MUI color object
   */
  function decomposeColor(color) {
    if (color.charAt(0) === '#') {
      return decomposeColor(convertHexToRGB(color));
    }

    var marker = color.indexOf('(');

    var type = color.substring(0, marker);
    var values = color.substring(marker + 1, color.length - 1).split(',');
    values = values.map(function (value) {
      return parseFloat(value);
    });

    return { type: type, values: values };
  }

  /**
   * Calculates the contrast ratio between two colors.
   *
   * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
   *
   * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {number} A contrast ratio value in the range 0 - 21 with 2 digit precision.
   */
  function getContrastRatio(foreground, background) {
    var lumA = getLuminance(foreground);
    var lumB = getLuminance(background);
    var contrastRatio = (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);

    return Number(contrastRatio.toFixed(2)); // Truncate at two digits
  }

  /**
   * The relative brightness of any point in a color space,
   * normalized to 0 for darkest black and 1 for lightest white.
   *
   * Formula: https://www.w3.org/WAI/GL/wiki/Relative_luminance
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {number} The relative brightness of the color in the range 0 - 1
   */
  function getLuminance(color) {
    color = decomposeColor(color);

    if (color.type.indexOf('rgb') > -1) {
      var rgb = color.values.map(function (val) {
        val /= 255; // normalized
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      });
      return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)); // Truncate at 3 digits
    } else if (color.type.indexOf('hsl') > -1) {
      return color.values[2] / 100;
    }
  }

  /**
   * Darken or lighten a colour, depending on its luminance.
   * Light colors are darkened, dark colors are lightened.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */
  function emphasize(color) {
    var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;

    return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
  }

  /**
   * Set the absolute transparency of a color.
   * Any existing alpha values are overwritten.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} value - value to set the alpha channel to in the range 0 -1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */
  function fade(color, value) {
    color = decomposeColor(color);
    value = clamp(value, 0, 1);

    if (color.type === 'rgb' || color.type === 'hsl') {
      color.type += 'a';
    }
    color.values[3] = value;

    return convertColorToString(color);
  }

  /**
   * Darkens a color.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */
  function darken(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient, 0, 1);

    if (color.type.indexOf('hsl') > -1) {
      color.values[2] *= 1 - coefficient;
    } else if (color.type.indexOf('rgb') > -1) {
      for (var i = 0; i < 3; i++) {
        color.values[i] *= 1 - coefficient;
      }
    }
    return convertColorToString(color);
  }

  /**
   * Lightens a color.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */
  function lighten(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient, 0, 1);

    if (color.type.indexOf('hsl') > -1) {
      color.values[2] += (100 - color.values[2]) * coefficient;
    } else if (color.type.indexOf('rgb') > -1) {
      for (var i = 0; i < 3; i++) {
        color.values[i] += (255 - color.values[i]) * coefficient;
      }
    }

    return convertColorToString(color);
  }
  });

  unwrapExports(colorManipulator);
  var colorManipulator_1 = colorManipulator.convertColorToString;
  var colorManipulator_2 = colorManipulator.convertHexToRGB;
  var colorManipulator_3 = colorManipulator.decomposeColor;
  var colorManipulator_4 = colorManipulator.getContrastRatio;
  var colorManipulator_5 = colorManipulator.getLuminance;
  var colorManipulator_6 = colorManipulator.emphasize;
  var colorManipulator_7 = colorManipulator.fade;
  var colorManipulator_8 = colorManipulator.darken;
  var colorManipulator_9 = colorManipulator.lighten;

  var events = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    once: function once(el, type, callback) {
      var typeArray = type ? type.split(' ') : [];
      var recursiveFunction = function recursiveFunction(event) {
        event.target.removeEventListener(event.type, recursiveFunction);
        return callback(event);
      };

      for (var i = typeArray.length - 1; i >= 0; i--) {
        this.on(el, typeArray[i], recursiveFunction);
      }
    },
    on: function on(el, type, callback) {
      if (el.addEventListener) {
        el.addEventListener(type, callback);
      } else {
        // IE8+ Support
        el.attachEvent('on' + type, function () {
          callback.call(el);
        });
      }
    },
    off: function off(el, type, callback) {
      if (el.removeEventListener) {
        el.removeEventListener(type, callback);
      } else {
        // IE8+ Support
        el.detachEvent('on' + type, callback);
      }
    },
    isKeyboard: function isKeyboard(event) {
      return ['keydown', 'keypress', 'keyup'].indexOf(event.type) !== -1;
    }
  };
  });

  unwrapExports(events);

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @typechecks
   * 
   */

  var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  function is$1(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      // Added the nonzero y check to make Flow happy, but it is redundant
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }

  /**
   * Performs equality by iterating through keys on an object and returning false
   * when any key has values which are not strictly equal between the arguments.
   * Returns true when the values of all keys are strictly equal.
   */
  function shallowEqual(objA, objB) {
    if (is$1(objA, objB)) {
      return true;
    }

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
      return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    // Test for A's keys different from B.
    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwnProperty$2.call(objB, keysA[i]) || !is$1(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }

    return true;
  }

  var shallowEqual_1 = shallowEqual;

  var shallowEqual$1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _shallowEqual2 = _interopRequireDefault(shallowEqual_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _shallowEqual2.default;
  });

  unwrapExports(shallowEqual$1);

  var autoPrefix = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    set: function set(style, key, value) {
      style[key] = value;
    }
  };
  });

  unwrapExports(autoPrefix);

  var ScaleInChild_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _reactDom2 = _interopRequireDefault(reactDom);



  var _autoPrefix2 = _interopRequireDefault(autoPrefix);



  var _transitions2 = _interopRequireDefault(transitions);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var ScaleInChild = function (_Component) {
    (0, _inherits3.default)(ScaleInChild, _Component);

    function ScaleInChild() {
      (0, _classCallCheck3.default)(this, ScaleInChild);
      return (0, _possibleConstructorReturn3.default)(this, (ScaleInChild.__proto__ || (0, _getPrototypeOf2.default)(ScaleInChild)).apply(this, arguments));
    }

    (0, _createClass3.default)(ScaleInChild, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearTimeout(this.enterTimer);
        clearTimeout(this.leaveTimer);
      }
    }, {
      key: 'componentWillAppear',
      value: function componentWillAppear(callback) {
        this.initializeAnimation(callback);
      }
    }, {
      key: 'componentWillEnter',
      value: function componentWillEnter(callback) {
        this.initializeAnimation(callback);
      }
    }, {
      key: 'componentDidAppear',
      value: function componentDidAppear() {
        this.animate();
      }
    }, {
      key: 'componentDidEnter',
      value: function componentDidEnter() {
        this.animate();
      }
    }, {
      key: 'componentWillLeave',
      value: function componentWillLeave(callback) {
        var style = _reactDom2.default.findDOMNode(this).style;

        style.opacity = '0';
        _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.minScale + ')');

        this.leaveTimer = setTimeout(callback, 450);
      }
    }, {
      key: 'animate',
      value: function animate() {
        var style = _reactDom2.default.findDOMNode(this).style;

        style.opacity = '1';
        _autoPrefix2.default.set(style, 'transform', 'scale(' + this.props.maxScale + ')');
      }
    }, {
      key: 'initializeAnimation',
      value: function initializeAnimation(callback) {
        var style = _reactDom2.default.findDOMNode(this).style;

        style.opacity = '0';
        _autoPrefix2.default.set(style, 'transform', 'scale(0)');

        this.enterTimer = setTimeout(callback, this.props.enterDelay);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            children = _props.children,
            enterDelay = _props.enterDelay,
            maxScale = _props.maxScale,
            minScale = _props.minScale,
            style = _props.style,
            other = (0, _objectWithoutProperties3.default)(_props, ['children', 'enterDelay', 'maxScale', 'minScale', 'style']);
        var prepareStyles = this.context.muiTheme.prepareStyles;


        var mergedRootStyles = (0, _simpleAssign2.default)({}, {
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          transition: _transitions2.default.easeOut(null, ['transform', 'opacity'])
        }, style);

        return _react2.default.createElement(
          'div',
          (0, _extends3.default)({}, other, { style: prepareStyles(mergedRootStyles) }),
          children
        );
      }
    }]);
    return ScaleInChild;
  }(React__default.Component);

  ScaleInChild.defaultProps = {
    enterDelay: 0,
    maxScale: 1,
    minScale: 0
  };
  ScaleInChild.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  ScaleInChild.propTypes =  {};
  exports.default = ScaleInChild;
  });

  unwrapExports(ScaleInChild_1);

  var ScaleIn_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _TransitionGroup2 = _interopRequireDefault(TransitionGroup_1);



  var _ScaleInChild2 = _interopRequireDefault(ScaleInChild_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var ScaleIn = function (_Component) {
    (0, _inherits3.default)(ScaleIn, _Component);

    function ScaleIn() {
      (0, _classCallCheck3.default)(this, ScaleIn);
      return (0, _possibleConstructorReturn3.default)(this, (ScaleIn.__proto__ || (0, _getPrototypeOf2.default)(ScaleIn)).apply(this, arguments));
    }

    (0, _createClass3.default)(ScaleIn, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            children = _props.children,
            childStyle = _props.childStyle,
            enterDelay = _props.enterDelay,
            maxScale = _props.maxScale,
            minScale = _props.minScale,
            style = _props.style,
            other = (0, _objectWithoutProperties3.default)(_props, ['children', 'childStyle', 'enterDelay', 'maxScale', 'minScale', 'style']);
        var prepareStyles = this.context.muiTheme.prepareStyles;


        var mergedRootStyles = (0, _simpleAssign2.default)({}, {
          position: 'relative',
          height: '100%'
        }, style);

        var newChildren = _react2.default.Children.map(children, function (child) {
          return _react2.default.createElement(
            _ScaleInChild2.default,
            {
              key: child.key,
              enterDelay: enterDelay,
              maxScale: maxScale,
              minScale: minScale,
              style: childStyle
            },
            child
          );
        });

        return _react2.default.createElement(
          _TransitionGroup2.default,
          (0, _extends3.default)({}, other, {
            style: prepareStyles(mergedRootStyles),
            component: 'div'
          }),
          newChildren
        );
      }
    }]);
    return ScaleIn;
  }(React__default.Component);

  ScaleIn.defaultProps = {
    enterDelay: 0
  };
  ScaleIn.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  ScaleIn.propTypes =  {};
  exports.default = ScaleIn;
  });

  unwrapExports(ScaleIn_1);

  var FocusRipple_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _reactDom2 = _interopRequireDefault(reactDom);



  var _shallowEqual2 = _interopRequireDefault(shallowEqual$1);



  var _autoPrefix2 = _interopRequireDefault(autoPrefix);



  var _transitions2 = _interopRequireDefault(transitions);



  var _ScaleIn2 = _interopRequireDefault(ScaleIn_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var pulsateDuration = 750;

  var FocusRipple = function (_Component) {
    (0, _inherits3.default)(FocusRipple, _Component);

    function FocusRipple() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, FocusRipple);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FocusRipple.__proto__ || (0, _getPrototypeOf2.default)(FocusRipple)).call.apply(_ref, [this].concat(args))), _this), _this.pulsate = function () {
        var innerCircle = _reactDom2.default.findDOMNode(_this.refs.innerCircle);
        if (!innerCircle) return;

        var startScale = 'scale(1)';
        var endScale = 'scale(0.85)';
        var currentScale = innerCircle.style.transform || startScale;
        var nextScale = currentScale === startScale ? endScale : startScale;

        _autoPrefix2.default.set(innerCircle.style, 'transform', nextScale);
        _this.timeout = setTimeout(_this.pulsate, pulsateDuration);
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(FocusRipple, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.show) {
          this.setRippleSize();
          this.pulsate();
        }
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState) {
        return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        if (this.props.show) {
          this.setRippleSize();
          this.pulsate();
        } else {
          if (this.timeout) clearTimeout(this.timeout);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearTimeout(this.timeout);
      }
    }, {
      key: 'getRippleElement',
      value: function getRippleElement(props) {
        var color = props.color,
            innerStyle = props.innerStyle,
            opacity = props.opacity;
        var _context$muiTheme = this.context.muiTheme,
            prepareStyles = _context$muiTheme.prepareStyles,
            ripple = _context$muiTheme.ripple;


        var innerStyles = (0, _simpleAssign2.default)({
          position: 'absolute',
          height: '100%',
          width: '100%',
          borderRadius: '50%',
          opacity: opacity ? opacity : 0.16,
          backgroundColor: color || ripple.color,
          transition: _transitions2.default.easeOut(pulsateDuration + 'ms', 'transform', null, _transitions2.default.easeInOutFunction)
        }, innerStyle);

        return _react2.default.createElement('div', { ref: 'innerCircle', style: prepareStyles((0, _simpleAssign2.default)({}, innerStyles)) });
      }
    }, {
      key: 'setRippleSize',
      value: function setRippleSize() {
        var el = _reactDom2.default.findDOMNode(this.refs.innerCircle);
        var height = el.offsetHeight;
        var width = el.offsetWidth;
        var size = Math.max(height, width);

        var oldTop = 0;
        // For browsers that don't support endsWith()
        if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
          oldTop = parseInt(el.style.top);
        }
        el.style.height = size + 'px';
        el.style.top = height / 2 - size / 2 + oldTop + 'px';
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            show = _props.show,
            style = _props.style;


        var mergedRootStyles = (0, _simpleAssign2.default)({
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }, style);

        var ripple = show ? this.getRippleElement(this.props) : null;

        return _react2.default.createElement(
          _ScaleIn2.default,
          {
            maxScale: 0.85,
            style: mergedRootStyles
          },
          ripple
        );
      }
    }]);
    return FocusRipple;
  }(React__default.Component);

  FocusRipple.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  FocusRipple.propTypes =  {};
  exports.default = FocusRipple;
  });

  unwrapExports(FocusRipple_1);

  // call something on iterator step with safe closing on error

  var _iterCall = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) _anObject(ret.call(iterator));
      throw e;
    }
  };

  // check on default Array iterator

  var ITERATOR$1 = _wks('iterator');
  var ArrayProto = Array.prototype;

  var _isArrayIter = function (it) {
    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
  };

  var _createProperty = function (object, index, value) {
    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
    else object[index] = value;
  };

  // getting tag from 19.1.3.6 Object.prototype.toString()

  var TAG$1 = _wks('toStringTag');
  // ES3 wrong here
  var ARG = _cof(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) { /* empty */ }
  };

  var _classof = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
      // builtinTag case
      : ARG ? _cof(O)
      // ES3 arguments fallback
      : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var ITERATOR$2 = _wks('iterator');

  var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$2]
      || it['@@iterator']
      || _iterators[_classof(it)];
  };

  var ITERATOR$3 = _wks('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$3]();
    riter['return'] = function () { SAFE_CLOSING = true; };
    // eslint-disable-next-line no-throw-literal
    Array.from(riter, function () { throw 2; });
  } catch (e) { /* empty */ }

  var _iterDetect = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR$3]();
      iter.next = function () { return { done: safe = true }; };
      arr[ITERATOR$3] = function () { return iter; };
      exec(arr);
    } catch (e) { /* empty */ }
    return safe;
  };

  _export(_export.S + _export.F * !_iterDetect(function (iter) { Array.from(iter); }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
      var O = _toObject(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var index = 0;
      var iterFn = core_getIteratorMethod(O);
      var length, result, step, iterator;
      if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
      // if object isn't iterable or it's array with default iterator - use simple case
      if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = _toLength(O.length);
        for (result = new C(length); length > index; index++) {
          _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }
      result.length = index;
      return result;
    }
  });

  var from_1 = _core.Array.from;

  var from_1$1 = createCommonjsModule(function (module) {
  module.exports = { "default": from_1, __esModule: true };
  });

  unwrapExports(from_1$1);

  var toConsumableArray = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _from2 = _interopRequireDefault(from_1$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return (0, _from2.default)(arr);
    }
  };
  });

  unwrapExports(toConsumableArray);

  var toArray = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _from2 = _interopRequireDefault(from_1$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = function (arr) {
    return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
  };
  });

  unwrapExports(toArray);

  var CircleRipple_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _reactDom2 = _interopRequireDefault(reactDom);



  var _shallowEqual2 = _interopRequireDefault(shallowEqual$1);



  var _autoPrefix2 = _interopRequireDefault(autoPrefix);



  var _transitions2 = _interopRequireDefault(transitions);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var CircleRipple = function (_Component) {
    (0, _inherits3.default)(CircleRipple, _Component);

    function CircleRipple() {
      (0, _classCallCheck3.default)(this, CircleRipple);
      return (0, _possibleConstructorReturn3.default)(this, (CircleRipple.__proto__ || (0, _getPrototypeOf2.default)(CircleRipple)).apply(this, arguments));
    }

    (0, _createClass3.default)(CircleRipple, [{
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return !(0, _shallowEqual2.default)(this.props, nextProps);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearTimeout(this.enterTimer);
        clearTimeout(this.leaveTimer);
      }
    }, {
      key: 'componentWillAppear',
      value: function componentWillAppear(callback) {
        this.initializeAnimation(callback);
      }
    }, {
      key: 'componentWillEnter',
      value: function componentWillEnter(callback) {
        this.initializeAnimation(callback);
      }
    }, {
      key: 'componentDidAppear',
      value: function componentDidAppear() {
        this.animate();
      }
    }, {
      key: 'componentDidEnter',
      value: function componentDidEnter() {
        this.animate();
      }
    }, {
      key: 'componentWillLeave',
      value: function componentWillLeave(callback) {
        var style = _reactDom2.default.findDOMNode(this).style;
        style.opacity = 0;
        // If the animation is aborted, remove from the DOM immediately
        var removeAfter = this.props.aborted ? 0 : 2000;
        this.enterTimer = setTimeout(callback, removeAfter);
      }
    }, {
      key: 'animate',
      value: function animate() {
        var style = _reactDom2.default.findDOMNode(this).style;
        var transitionValue = _transitions2.default.easeOut('2s', 'opacity') + ', ' + _transitions2.default.easeOut('1s', 'transform');
        _autoPrefix2.default.set(style, 'transition', transitionValue);
        _autoPrefix2.default.set(style, 'transform', 'scale(1)');
      }
    }, {
      key: 'initializeAnimation',
      value: function initializeAnimation(callback) {
        var style = _reactDom2.default.findDOMNode(this).style;
        style.opacity = this.props.opacity;
        _autoPrefix2.default.set(style, 'transform', 'scale(0)');
        this.leaveTimer = setTimeout(callback, 0);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            aborted = _props.aborted,
            color = _props.color,
            opacity = _props.opacity,
            style = _props.style,
            touchGenerated = _props.touchGenerated,
            other = (0, _objectWithoutProperties3.default)(_props, ['aborted', 'color', 'opacity', 'style', 'touchGenerated']);
        var prepareStyles = this.context.muiTheme.prepareStyles;


        var mergedStyles = (0, _simpleAssign2.default)({
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          borderRadius: '50%',
          backgroundColor: color
        }, style);

        return _react2.default.createElement('div', (0, _extends3.default)({}, other, { style: prepareStyles(mergedStyles) }));
      }
    }]);
    return CircleRipple;
  }(React__default.Component);

  CircleRipple.defaultProps = {
    opacity: 0.1,
    aborted: false
  };
  CircleRipple.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  CircleRipple.propTypes =  {};
  exports.default = CircleRipple;
  });

  unwrapExports(CircleRipple_1);

  var TouchRipple_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _toConsumableArray3 = _interopRequireDefault(toConsumableArray);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _toArray3 = _interopRequireDefault(toArray);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _reactDom2 = _interopRequireDefault(reactDom);



  var _TransitionGroup2 = _interopRequireDefault(TransitionGroup_1);



  var _dom2 = _interopRequireDefault(dom);



  var _CircleRipple2 = _interopRequireDefault(CircleRipple_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // Remove the first element of the array
  var shift = function shift(_ref) {
    var _ref2 = (0, _toArray3.default)(_ref),
        newArray = _ref2.slice(1);

    return newArray;
  };

  var TouchRipple = function (_Component) {
    (0, _inherits3.default)(TouchRipple, _Component);

    function TouchRipple(props, context) {
      (0, _classCallCheck3.default)(this, TouchRipple);

      // Touch start produces a mouse down event for compat reasons. To avoid
      // showing ripples twice we skip showing a ripple for the first mouse down
      // after a touch start. Note we don't store ignoreNextMouseDown in this.state
      // to avoid re-rendering when we change it.
      var _this = (0, _possibleConstructorReturn3.default)(this, (TouchRipple.__proto__ || (0, _getPrototypeOf2.default)(TouchRipple)).call(this, props, context));

      _this.handleMouseDown = function (event) {
        // only listen to left clicks
        if (event.button === 0) {
          _this.start(event, false);
        }
      };

      _this.handleMouseUp = function () {
        _this.end();
      };

      _this.handleMouseLeave = function () {
        _this.end();
      };

      _this.handleTouchStart = function (event) {
        event.stopPropagation();
        // If the user is swiping (not just tapping), save the position so we can
        // abort ripples if the user appears to be scrolling.
        if (_this.props.abortOnScroll && event.touches) {
          _this.startListeningForScrollAbort(event);
          _this.startTime = Date.now();
        }
        _this.start(event, true);
      };

      _this.handleTouchEnd = function () {
        _this.end();
      };

      _this.handleTouchMove = function (event) {
        // Stop trying to abort if we're already 300ms into the animation
        var timeSinceStart = Math.abs(Date.now() - _this.startTime);
        if (timeSinceStart > 300) {
          _this.stopListeningForScrollAbort();
          return;
        }

        // If the user is scrolling...
        var deltaY = Math.abs(event.touches[0].clientY - _this.firstTouchY);
        var deltaX = Math.abs(event.touches[0].clientX - _this.firstTouchX);
        // Call it a scroll after an arbitrary 6px (feels reasonable in testing)
        if (deltaY > 6 || deltaX > 6) {
          var currentRipples = _this.state.ripples;
          var ripple = currentRipples[0];
          // This clone will replace the ripple in ReactTransitionGroup with a
          // version that will disappear immediately when removed from the DOM
          var abortedRipple = _react2.default.cloneElement(ripple, { aborted: true });
          // Remove the old ripple and replace it with the new updated one
          currentRipples = shift(currentRipples);
          currentRipples = [].concat((0, _toConsumableArray3.default)(currentRipples), [abortedRipple]);
          _this.setState({ ripples: currentRipples }, function () {
            // Call end after we've set the ripple to abort otherwise the setState
            // in end() merges with this and the ripple abort fails
            _this.end();
          });
        }
      };

      _this.ignoreNextMouseDown = false;

      _this.state = {
        // This prop allows us to only render the ReactTransitionGroup
        // on the first click of the component, making the inital render faster.
        hasRipples: false,
        nextKey: 0,
        ripples: []
      };
      return _this;
    }

    (0, _createClass3.default)(TouchRipple, [{
      key: 'start',
      value: function start(event, isRippleTouchGenerated) {
        var theme = this.context.muiTheme.ripple;

        if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
          this.ignoreNextMouseDown = false;
          return;
        }

        var ripples = this.state.ripples;

        // Add a ripple to the ripples array
        ripples = [].concat((0, _toConsumableArray3.default)(ripples), [_react2.default.createElement(_CircleRipple2.default, {
          key: this.state.nextKey,
          style: !this.props.centerRipple ? this.getRippleStyle(event) : {},
          color: this.props.color || theme.color,
          opacity: this.props.opacity,
          touchGenerated: isRippleTouchGenerated
        })]);

        this.ignoreNextMouseDown = isRippleTouchGenerated;
        this.setState({
          hasRipples: true,
          nextKey: this.state.nextKey + 1,
          ripples: ripples
        });
      }
    }, {
      key: 'end',
      value: function end() {
        var currentRipples = this.state.ripples;
        this.setState({
          ripples: shift(currentRipples)
        });
        if (this.props.abortOnScroll) {
          this.stopListeningForScrollAbort();
        }
      }

      // Check if the user seems to be scrolling and abort the animation if so

    }, {
      key: 'startListeningForScrollAbort',
      value: function startListeningForScrollAbort(event) {
        this.firstTouchY = event.touches[0].clientY;
        this.firstTouchX = event.touches[0].clientX;
        // Note that when scolling Chrome throttles this event to every 200ms
        // Also note we don't listen for scroll events directly as there's no general
        // way to cover cases like scrolling within containers on the page
        document.body.addEventListener('touchmove', this.handleTouchMove);
      }
    }, {
      key: 'stopListeningForScrollAbort',
      value: function stopListeningForScrollAbort() {
        document.body.removeEventListener('touchmove', this.handleTouchMove);
      }
    }, {
      key: 'getRippleStyle',
      value: function getRippleStyle(event) {
        var el = _reactDom2.default.findDOMNode(this);
        var elHeight = el.offsetHeight;
        var elWidth = el.offsetWidth;
        var offset = _dom2.default.offset(el);
        var isTouchEvent = event.touches && event.touches.length;
        var pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
        var pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
        var pointerX = pageX - offset.left;
        var pointerY = pageY - offset.top;
        var topLeftDiag = this.calcDiag(pointerX, pointerY);
        var topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
        var botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
        var botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
        var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
        var rippleSize = rippleRadius * 2;
        var left = pointerX - rippleRadius;
        var top = pointerY - rippleRadius;

        return {
          directionInvariant: true,
          height: rippleSize,
          width: rippleSize,
          top: top,
          left: left
        };
      }
    }, {
      key: 'calcDiag',
      value: function calcDiag(a, b) {
        return Math.sqrt(a * a + b * b);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            children = _props.children,
            style = _props.style;
        var _state = this.state,
            hasRipples = _state.hasRipples,
            ripples = _state.ripples;
        var prepareStyles = this.context.muiTheme.prepareStyles;


        var rippleGroup = void 0;

        if (hasRipples) {
          var mergedStyles = (0, _simpleAssign2.default)({
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 1 // This is also needed so that ripples do not bleed past a parent border radius.
          }, style);

          rippleGroup = _react2.default.createElement(
            _TransitionGroup2.default,
            { style: prepareStyles(mergedStyles) },
            ripples
          );
        }

        return _react2.default.createElement(
          'div',
          {
            onMouseUp: this.handleMouseUp,
            onMouseDown: this.handleMouseDown,
            onMouseLeave: this.handleMouseLeave,
            onTouchStart: this.handleTouchStart,
            onTouchEnd: this.handleTouchEnd
          },
          rippleGroup,
          children
        );
      }
    }]);
    return TouchRipple;
  }(React__default.Component);

  TouchRipple.defaultProps = {
    abortOnScroll: true
  };
  TouchRipple.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  TouchRipple.propTypes =  {};
  exports.default = TouchRipple;
  });

  unwrapExports(TouchRipple_1);

  var EnhancedButton_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _events2 = _interopRequireDefault(events);



  var _keycode2 = _interopRequireDefault(keycode);



  var _FocusRipple2 = _interopRequireDefault(FocusRipple_1);



  var _TouchRipple2 = _interopRequireDefault(TouchRipple_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var styleInjected = false;
  var listening = false;
  var tabPressed = false;

  function injectStyle() {
    if (!styleInjected) {
      // Remove inner padding and border in Firefox 4+.
      var style = document.createElement('style');
      style.innerHTML = '\n      button::-moz-focus-inner,\n      input::-moz-focus-inner {\n        border: 0;\n        padding: 0;\n      }\n    ';

      document.body.appendChild(style);
      styleInjected = true;
    }
  }

  function listenForTabPresses() {
    if (!listening) {
      _events2.default.on(window, 'keydown', function (event) {
        tabPressed = (0, _keycode2.default)(event) === 'tab';
      });
      listening = true;
    }
  }

  var EnhancedButton = function (_Component) {
    (0, _inherits3.default)(EnhancedButton, _Component);

    function EnhancedButton() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, EnhancedButton);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedButton.__proto__ || (0, _getPrototypeOf2.default)(EnhancedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        isKeyboardFocused: false
      }, _this.handleKeyDown = function (event) {
        if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
          if ((0, _keycode2.default)(event) === 'esc' && _this.state.isKeyboardFocused) {
            _this.removeKeyboardFocus(event);
          }
        }
        _this.props.onKeyDown(event);
      }, _this.handleKeyUp = function (event) {
        _this.props.onKeyUp(event);
      }, _this.handleBlur = function (event) {
        _this.cancelFocusTimeout();
        _this.removeKeyboardFocus(event);
        _this.props.onBlur(event);
      }, _this.handleFocus = function (event) {
        if (event) event.persist();
        if (!_this.props.disabled && !_this.props.disableKeyboardFocus) {
          // setTimeout is needed because the focus event fires first
          // Wait so that we can capture if this was a keyboard focus
          // or touch focus
          _this.focusTimeout = setTimeout(function () {
            if (tabPressed) {
              _this.setKeyboardFocus(event);
              tabPressed = false;
            }
          }, 150);

          _this.props.onFocus(event);
        }
      }, _this.handleClick = function (event) {
        _this.cancelFocusTimeout();
        if (!_this.props.disabled) {
          tabPressed = false;
          _this.removeKeyboardFocus(event);
          _this.props.onClick(event);
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(EnhancedButton, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _props = this.props,
            disabled = _props.disabled,
            disableKeyboardFocus = _props.disableKeyboardFocus,
            keyboardFocused = _props.keyboardFocused;

        if (!disabled && keyboardFocused && !disableKeyboardFocus) {
          this.setState({ isKeyboardFocused: true });
        }
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        injectStyle();
        listenForTabPresses();
        if (this.state.isKeyboardFocused) {
          this.button.focus();
          this.props.onKeyboardFocus(null, true);
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if ((nextProps.disabled || nextProps.disableKeyboardFocus) && this.state.isKeyboardFocused) {
          this.setState({ isKeyboardFocused: false });
          if (nextProps.onKeyboardFocus) {
            nextProps.onKeyboardFocus(null, false);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.focusTimeout) {
          clearTimeout(this.focusTimeout);
        }
      }
    }, {
      key: 'isKeyboardFocused',
      value: function isKeyboardFocused() {
        return this.state.isKeyboardFocused;
      }
    }, {
      key: 'removeKeyboardFocus',
      value: function removeKeyboardFocus(event) {
        if (this.state.isKeyboardFocused) {
          this.setState({ isKeyboardFocused: false });
          this.props.onKeyboardFocus(event, false);
        }
      }
    }, {
      key: 'setKeyboardFocus',
      value: function setKeyboardFocus(event) {
        if (!this.state.isKeyboardFocused) {
          this.setState({ isKeyboardFocused: true });
          this.props.onKeyboardFocus(event, true);
        }
      }
    }, {
      key: 'cancelFocusTimeout',
      value: function cancelFocusTimeout() {
        if (this.focusTimeout) {
          clearTimeout(this.focusTimeout);
          this.focusTimeout = null;
        }
      }
    }, {
      key: 'createButtonChildren',
      value: function createButtonChildren() {
        var _props2 = this.props,
            centerRipple = _props2.centerRipple,
            children = _props2.children,
            disabled = _props2.disabled,
            disableFocusRipple = _props2.disableFocusRipple,
            disableKeyboardFocus = _props2.disableKeyboardFocus,
            disableTouchRipple = _props2.disableTouchRipple,
            focusRippleColor = _props2.focusRippleColor,
            focusRippleOpacity = _props2.focusRippleOpacity,
            touchRippleColor = _props2.touchRippleColor,
            touchRippleOpacity = _props2.touchRippleOpacity;
        var isKeyboardFocused = this.state.isKeyboardFocused;

        // Focus Ripple

        var focusRipple = isKeyboardFocused && !disabled && !disableFocusRipple && !disableKeyboardFocus ? _react2.default.createElement(_FocusRipple2.default, {
          color: focusRippleColor,
          opacity: focusRippleOpacity,
          show: isKeyboardFocused,
          style: {
            overflow: 'hidden'
          },
          key: 'focusRipple'
        }) : undefined;

        // Touch Ripple
        var touchRipple = !disabled && !disableTouchRipple ? _react2.default.createElement(
          _TouchRipple2.default,
          {
            centerRipple: centerRipple,
            color: touchRippleColor,
            opacity: touchRippleOpacity,
            key: 'touchRipple'
          },
          children
        ) : undefined;

        return [focusRipple, touchRipple, touchRipple ? undefined : children];
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props3 = this.props,
            centerRipple = _props3.centerRipple,
            children = _props3.children,
            containerElement = _props3.containerElement,
            disabled = _props3.disabled,
            disableFocusRipple = _props3.disableFocusRipple,
            disableKeyboardFocus = _props3.disableKeyboardFocus,
            disableTouchRipple = _props3.disableTouchRipple,
            focusRippleColor = _props3.focusRippleColor,
            focusRippleOpacity = _props3.focusRippleOpacity,
            href = _props3.href,
            keyboardFocused = _props3.keyboardFocused,
            touchRippleColor = _props3.touchRippleColor,
            touchRippleOpacity = _props3.touchRippleOpacity,
            onBlur = _props3.onBlur,
            onClick = _props3.onClick,
            onFocus = _props3.onFocus,
            onKeyUp = _props3.onKeyUp,
            onKeyDown = _props3.onKeyDown,
            onKeyboardFocus = _props3.onKeyboardFocus,
            style = _props3.style,
            tabIndex = _props3.tabIndex,
            type = _props3.type,
            other = (0, _objectWithoutProperties3.default)(_props3, ['centerRipple', 'children', 'containerElement', 'disabled', 'disableFocusRipple', 'disableKeyboardFocus', 'disableTouchRipple', 'focusRippleColor', 'focusRippleOpacity', 'href', 'keyboardFocused', 'touchRippleColor', 'touchRippleOpacity', 'onBlur', 'onClick', 'onFocus', 'onKeyUp', 'onKeyDown', 'onKeyboardFocus', 'style', 'tabIndex', 'type']);
        var _context$muiTheme = this.context.muiTheme,
            prepareStyles = _context$muiTheme.prepareStyles,
            enhancedButton = _context$muiTheme.enhancedButton;


        var mergedStyles = (0, _simpleAssign2.default)({
          border: 10,
          boxSizing: 'border-box',
          display: 'inline-block',
          fontFamily: this.context.muiTheme.baseTheme.fontFamily,
          WebkitTapHighlightColor: enhancedButton.tapHighlightColor, // Remove mobile color flashing (deprecated)
          cursor: disabled ? 'default' : 'pointer',
          textDecoration: 'none',
          margin: 0,
          padding: 0,
          outline: 'none',
          fontSize: 'inherit',
          fontWeight: 'inherit',
          position: 'relative', // This is needed so that ripples do not bleed past border radius.
          verticalAlign: href ? 'middle' : null
        }, style);

        // Passing both background:none & backgroundColor can break due to object iteration order
        if (!mergedStyles.backgroundColor && !mergedStyles.background) {
          mergedStyles.background = 'none';
        }

        if (disabled && href) {
          return _react2.default.createElement(
            'span',
            (0, _extends3.default)({}, other, {
              style: mergedStyles
            }),
            children
          );
        }

        var buttonProps = (0, _extends3.default)({}, other, {
          style: prepareStyles(mergedStyles),
          ref: function ref(node) {
            return _this2.button = node;
          },
          disabled: disabled,
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onKeyUp: this.handleKeyUp,
          onKeyDown: this.handleKeyDown,
          onClick: this.handleClick,
          tabIndex: disabled || disableKeyboardFocus ? -1 : tabIndex
        });

        if (href) buttonProps.href = href;

        var buttonChildren = this.createButtonChildren();

        if (_react2.default.isValidElement(containerElement)) {
          return _react2.default.cloneElement(containerElement, buttonProps, buttonChildren);
        }

        if (!href && containerElement === 'button') {
          buttonProps.type = type;
        }

        return _react2.default.createElement(href ? 'a' : containerElement, buttonProps, buttonChildren);
      }
    }]);
    return EnhancedButton;
  }(React__default.Component);

  EnhancedButton.defaultProps = {
    containerElement: 'button',
    onBlur: function onBlur() {},
    onClick: function onClick() {},
    onFocus: function onFocus() {},
    onKeyDown: function onKeyDown() {},
    onKeyUp: function onKeyUp() {},
    onKeyboardFocus: function onKeyboardFocus() {},
    tabIndex: 0,
    type: 'button'
  };
  EnhancedButton.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  EnhancedButton.propTypes =  {};
  exports.default = EnhancedButton;
  });

  unwrapExports(EnhancedButton_1);

  var FlatButtonLabel_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function getStyles(props, context) {
    var baseTheme = context.muiTheme.baseTheme;


    return {
      root: {
        position: 'relative',
        paddingLeft: baseTheme.spacing.desktopGutterLess,
        paddingRight: baseTheme.spacing.desktopGutterLess,
        verticalAlign: 'middle'
      }
    };
  }

  var FlatButtonLabel = function (_Component) {
    (0, _inherits3.default)(FlatButtonLabel, _Component);

    function FlatButtonLabel() {
      (0, _classCallCheck3.default)(this, FlatButtonLabel);
      return (0, _possibleConstructorReturn3.default)(this, (FlatButtonLabel.__proto__ || (0, _getPrototypeOf2.default)(FlatButtonLabel)).apply(this, arguments));
    }

    (0, _createClass3.default)(FlatButtonLabel, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            label = _props.label,
            style = _props.style;
        var prepareStyles = this.context.muiTheme.prepareStyles;

        var styles = getStyles(this.props, this.context);

        return _react2.default.createElement(
          'span',
          { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
          label
        );
      }
    }]);
    return FlatButtonLabel;
  }(React__default.Component);

  FlatButtonLabel.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  FlatButtonLabel.propTypes =  {};
  exports.default = FlatButtonLabel;
  });

  unwrapExports(FlatButtonLabel_1);

  var FlatButton_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _transitions2 = _interopRequireDefault(transitions);





  var _EnhancedButton2 = _interopRequireDefault(EnhancedButton_1);



  var _FlatButtonLabel2 = _interopRequireDefault(FlatButtonLabel_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var FlatButton = function (_Component) {
    (0, _inherits3.default)(FlatButton, _Component);

    function FlatButton() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, FlatButton);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FlatButton.__proto__ || (0, _getPrototypeOf2.default)(FlatButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        hovered: false,
        isKeyboardFocused: false,
        touch: false
      }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
        _this.setState({ isKeyboardFocused: isKeyboardFocused });
        _this.props.onKeyboardFocus(event, isKeyboardFocused);
      }, _this.handleMouseEnter = function (event) {
        // Cancel hover styles for touch devices
        if (!_this.state.touch) _this.setState({ hovered: true });
        _this.props.onMouseEnter(event);
      }, _this.handleMouseLeave = function (event) {
        _this.setState({ hovered: false });
        _this.props.onMouseLeave(event);
      }, _this.handleTouchStart = function (event) {
        _this.setState({ touch: true });
        _this.props.onTouchStart(event);
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(FlatButton, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.disabled) {
          this.setState({
            hovered: false
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            backgroundColor = _props.backgroundColor,
            children = _props.children,
            disabled = _props.disabled,
            fullWidth = _props.fullWidth,
            hoverColor = _props.hoverColor,
            icon = _props.icon,
            label = _props.label,
            labelStyle = _props.labelStyle,
            labelPosition = _props.labelPosition,
            primary = _props.primary,
            rippleColor = _props.rippleColor,
            secondary = _props.secondary,
            style = _props.style,
            other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'children', 'disabled', 'fullWidth', 'hoverColor', 'icon', 'label', 'labelStyle', 'labelPosition', 'primary', 'rippleColor', 'secondary', 'style']);
        var _context$muiTheme = this.context.muiTheme,
            borderRadius = _context$muiTheme.borderRadius,
            _context$muiTheme$but = _context$muiTheme.button,
            buttonHeight = _context$muiTheme$but.height,
            buttonMinWidth = _context$muiTheme$but.minWidth,
            buttonTextTransform = _context$muiTheme$but.textTransform,
            _context$muiTheme$fla = _context$muiTheme.flatButton,
            buttonFilterColor = _context$muiTheme$fla.buttonFilterColor,
            buttonColor = _context$muiTheme$fla.color,
            disabledTextColor = _context$muiTheme$fla.disabledTextColor,
            fontSize = _context$muiTheme$fla.fontSize,
            fontWeight = _context$muiTheme$fla.fontWeight,
            primaryTextColor = _context$muiTheme$fla.primaryTextColor,
            secondaryTextColor = _context$muiTheme$fla.secondaryTextColor,
            textColor = _context$muiTheme$fla.textColor,
            _context$muiTheme$fla2 = _context$muiTheme$fla.textTransform,
            textTransform = _context$muiTheme$fla2 === undefined ? buttonTextTransform || 'uppercase' : _context$muiTheme$fla2;

        var defaultTextColor = disabled ? disabledTextColor : primary ? primaryTextColor : secondary ? secondaryTextColor : textColor;

        var defaultHoverColor = (0, colorManipulator.fade)(buttonFilterColor, 0.2);
        var defaultRippleColor = buttonFilterColor;
        var buttonHoverColor = hoverColor || defaultHoverColor;
        var buttonRippleColor = rippleColor || defaultRippleColor;
        var buttonBackgroundColor = backgroundColor || buttonColor;
        var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;

        var mergedRootStyles = (0, _simpleAssign2.default)({}, {
          height: buttonHeight,
          lineHeight: buttonHeight + 'px',
          minWidth: fullWidth ? '100%' : buttonMinWidth,
          color: defaultTextColor,
          transition: _transitions2.default.easeOut(),
          borderRadius: borderRadius,
          userSelect: 'none',
          overflow: 'hidden',
          backgroundColor: hovered ? buttonHoverColor : buttonBackgroundColor,
          padding: 0,
          margin: 0,
          textAlign: 'center'
        }, style);

        var iconCloned = void 0;
        var labelStyleIcon = {};

        if (icon) {
          var iconStyles = (0, _simpleAssign2.default)({
            verticalAlign: 'middle',
            marginLeft: label && labelPosition !== 'before' ? 12 : 0,
            marginRight: label && labelPosition === 'before' ? 12 : 0
          }, icon.props.style);
          iconCloned = _react2.default.cloneElement(icon, {
            color: icon.props.color || mergedRootStyles.color,
            style: iconStyles,
            key: 'iconCloned'
          });

          if (labelPosition === 'before') {
            labelStyleIcon.paddingRight = 8;
          } else {
            labelStyleIcon.paddingLeft = 8;
          }
        }

        var mergedLabelStyles = (0, _simpleAssign2.default)({
          letterSpacing: 0,
          textTransform: textTransform,
          fontWeight: fontWeight,
          fontSize: fontSize
        }, labelStyleIcon, labelStyle);

        var labelElement = label ? _react2.default.createElement(_FlatButtonLabel2.default, { key: 'labelElement', label: label, style: mergedLabelStyles }) : undefined;

        // Place label before or after children.
        var enhancedButtonChildren = labelPosition === 'before' ? [labelElement, iconCloned, children] : [children, iconCloned, labelElement];

        return _react2.default.createElement(
          _EnhancedButton2.default,
          (0, _extends3.default)({}, other, {
            disabled: disabled,
            focusRippleColor: buttonRippleColor,
            focusRippleOpacity: 0.3,
            onKeyboardFocus: this.handleKeyboardFocus,
            onMouseLeave: this.handleMouseLeave,
            onMouseEnter: this.handleMouseEnter,
            onTouchStart: this.handleTouchStart,
            style: mergedRootStyles,
            touchRippleColor: buttonRippleColor,
            touchRippleOpacity: 0.3
          }),
          enhancedButtonChildren
        );
      }
    }]);
    return FlatButton;
  }(React__default.Component);

  FlatButton.muiName = 'FlatButton';
  FlatButton.defaultProps = {
    disabled: false,
    fullWidth: false,
    labelStyle: {},
    labelPosition: 'after',
    onKeyboardFocus: function onKeyboardFocus() {},
    onMouseEnter: function onMouseEnter() {},
    onMouseLeave: function onMouseLeave() {},
    onTouchStart: function onTouchStart() {},
    primary: false,
    secondary: false
  };
  FlatButton.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  FlatButton.propTypes =  {};
  exports.default = FlatButton;
  });

  unwrapExports(FlatButton_1);

  var FlatButton = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;



  var _FlatButton2 = _interopRequireDefault(FlatButton_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _FlatButton2.default;
  });

  var MuiFlatButton = unwrapExports(FlatButton);

  var FlatButton$1 =
  /*#__PURE__*/
  function (_Component) {
    _inherits(FlatButton, _Component);

    function FlatButton() {
      _classCallCheck(this, FlatButton);

      return _possibleConstructorReturn(this, _getPrototypeOf(FlatButton).apply(this, arguments));
    }

    _createClass(FlatButton, [{
      key: "render",
      value: function render() {
        return React__default.createElement(MuiFlatButton, this.props);
      }
    }]);

    return FlatButton;
  }(React.Component);

  var RaisedButton_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _transitions2 = _interopRequireDefault(transitions);





  var _EnhancedButton2 = _interopRequireDefault(EnhancedButton_1);



  var _Paper2 = _interopRequireDefault(Paper);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function getStyles(props, context, state) {
    var _context$muiTheme = context.muiTheme,
        baseTheme = _context$muiTheme.baseTheme,
        button = _context$muiTheme.button,
        raisedButton = _context$muiTheme.raisedButton,
        borderRadius = _context$muiTheme.borderRadius;
    var disabled = props.disabled,
        disabledBackgroundColor = props.disabledBackgroundColor,
        disabledLabelColor = props.disabledLabelColor,
        fullWidth = props.fullWidth,
        icon = props.icon,
        label = props.label,
        labelPosition = props.labelPosition,
        primary = props.primary,
        secondary = props.secondary,
        style = props.style;


    var amount = primary || secondary ? 0.4 : 0.08;

    var backgroundColor = raisedButton.color;
    var labelColor = raisedButton.textColor;

    if (disabled) {
      backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
      labelColor = disabledLabelColor || raisedButton.disabledTextColor;
    } else if (primary) {
      backgroundColor = raisedButton.primaryColor;
      labelColor = raisedButton.primaryTextColor;
    } else if (secondary) {
      backgroundColor = raisedButton.secondaryColor;
      labelColor = raisedButton.secondaryTextColor;
    } else {
      if (props.backgroundColor) {
        backgroundColor = props.backgroundColor;
      }
      if (props.labelColor) {
        labelColor = props.labelColor;
      }
    }

    var buttonHeight = style && style.height || button.height;

    return {
      root: {
        display: 'inline-block',
        transition: _transitions2.default.easeOut(),
        minWidth: fullWidth ? '100%' : button.minWidth
      },
      button: {
        height: buttonHeight,
        lineHeight: buttonHeight + 'px',
        width: '100%',
        padding: 0,
        borderRadius: borderRadius,
        transition: _transitions2.default.easeOut(),
        backgroundColor: backgroundColor,
        // That's the default value for a button but not a link
        textAlign: 'center'
      },
      label: {
        position: 'relative',
        opacity: 1,
        fontSize: raisedButton.fontSize,
        letterSpacing: 0,
        textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
        fontWeight: raisedButton.fontWeight,
        margin: 0,
        userSelect: 'none',
        paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
        paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
        color: labelColor
      },
      icon: {
        verticalAlign: 'middle',
        marginLeft: label && labelPosition !== 'before' ? 12 : 0,
        marginRight: label && labelPosition === 'before' ? 12 : 0
      },
      overlay: {
        height: buttonHeight,
        borderRadius: borderRadius,
        backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, colorManipulator.fade)(labelColor, amount),
        transition: _transitions2.default.easeOut(),
        top: 0
      },
      ripple: {
        color: labelColor,
        opacity: !(primary || secondary) ? 0.1 : 0.16
      }
    };
  }

  var RaisedButton = function (_Component) {
    (0, _inherits3.default)(RaisedButton, _Component);

    function RaisedButton() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, RaisedButton);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RaisedButton.__proto__ || (0, _getPrototypeOf2.default)(RaisedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        hovered: false,
        keyboardFocused: false,
        touched: false,
        initialZDepth: 0,
        zDepth: 0
      }, _this.handleMouseDown = function (event) {
        // only listen to left clicks
        if (event.button === 0) {
          _this.setState({
            zDepth: _this.state.initialZDepth + 1
          });
        }
        if (_this.props.onMouseDown) {
          _this.props.onMouseDown(event);
        }
      }, _this.handleMouseUp = function (event) {
        _this.setState({
          zDepth: _this.state.initialZDepth
        });
        if (_this.props.onMouseUp) {
          _this.props.onMouseUp(event);
        }
      }, _this.handleMouseLeave = function (event) {
        if (!_this.state.keyboardFocused) {
          _this.setState({
            zDepth: _this.state.initialZDepth,
            hovered: false
          });
        }
        if (_this.props.onMouseLeave) {
          _this.props.onMouseLeave(event);
        }
      }, _this.handleMouseEnter = function (event) {
        if (!_this.state.keyboardFocused && !_this.state.touched) {
          _this.setState({
            hovered: true
          });
        }
        if (_this.props.onMouseEnter) {
          _this.props.onMouseEnter(event);
        }
      }, _this.handleTouchStart = function (event) {
        _this.setState({
          touched: true,
          zDepth: _this.state.initialZDepth + 1
        });

        if (_this.props.onTouchStart) {
          _this.props.onTouchStart(event);
        }
      }, _this.handleTouchEnd = function (event) {
        _this.setState({
          touched: true,
          zDepth: _this.state.initialZDepth
        });

        if (_this.props.onTouchEnd) {
          _this.props.onTouchEnd(event);
        }
      }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
        var zDepth = keyboardFocused && !_this.props.disabled ? _this.state.initialZDepth + 1 : _this.state.initialZDepth;

        _this.setState({
          zDepth: zDepth,
          keyboardFocused: keyboardFocused
        });
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RaisedButton, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var zDepth = this.props.disabled ? 0 : 1;
        this.setState({
          zDepth: zDepth,
          initialZDepth: zDepth
        });
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var zDepth = nextProps.disabled ? 0 : 1;
        var nextState = {
          zDepth: zDepth,
          initialZDepth: zDepth
        };

        if (nextProps.disabled) {
          nextState.hovered = false;
        }

        this.setState(nextState);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            backgroundColor = _props.backgroundColor,
            buttonStyle = _props.buttonStyle,
            children = _props.children,
            className = _props.className,
            disabled = _props.disabled,
            disabledBackgroundColor = _props.disabledBackgroundColor,
            disabledLabelColor = _props.disabledLabelColor,
            fullWidth = _props.fullWidth,
            icon = _props.icon,
            label = _props.label,
            labelColor = _props.labelColor,
            labelPosition = _props.labelPosition,
            labelStyle = _props.labelStyle,
            overlayStyle = _props.overlayStyle,
            primary = _props.primary,
            rippleStyle = _props.rippleStyle,
            secondary = _props.secondary,
            style = _props.style,
            other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'buttonStyle', 'children', 'className', 'disabled', 'disabledBackgroundColor', 'disabledLabelColor', 'fullWidth', 'icon', 'label', 'labelColor', 'labelPosition', 'labelStyle', 'overlayStyle', 'primary', 'rippleStyle', 'secondary', 'style']);
        var prepareStyles = this.context.muiTheme.prepareStyles;

        var styles = getStyles(this.props, this.context, this.state);
        var mergedRippleStyles = (0, _simpleAssign2.default)({}, styles.ripple, rippleStyle);

        var buttonEventHandlers = disabled ? {} : {
          onMouseDown: this.handleMouseDown,
          onMouseUp: this.handleMouseUp,
          onMouseLeave: this.handleMouseLeave,
          onMouseEnter: this.handleMouseEnter,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onKeyboardFocus: this.handleKeyboardFocus
        };

        var labelElement = label && _react2.default.createElement(
          'span',
          { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)), key: 'labelElement' },
          label
        );

        var iconCloned = icon && (0, React__default.cloneElement)(icon, {
          color: icon.props.color || styles.label.color,
          style: (0, _simpleAssign2.default)(styles.icon, icon.props.style),
          key: 'iconCloned'
        });

        var overlayBackgroundProxy = {
          backgroundColor: overlayStyle && styles.overlay.backgroundColor && overlayStyle.backgroundColor || styles.overlay.backgroundColor
        };

        // Place label before or after children.
        var enhancedButtonChildren = labelPosition === 'before' ? [labelElement, iconCloned, children] : [children, iconCloned, labelElement];

        return _react2.default.createElement(
          _Paper2.default,
          {
            className: className,
            style: (0, _simpleAssign2.default)(styles.root, style),
            zDepth: this.state.zDepth
          },
          _react2.default.createElement(
            _EnhancedButton2.default,
            (0, _extends3.default)({}, other, buttonEventHandlers, {
              ref: 'container',
              disabled: disabled,
              style: (0, _simpleAssign2.default)(styles.button, buttonStyle),
              focusRippleColor: mergedRippleStyles.color,
              touchRippleColor: mergedRippleStyles.color,
              focusRippleOpacity: mergedRippleStyles.opacity,
              touchRippleOpacity: mergedRippleStyles.opacity
            }),
            _react2.default.createElement(
              'div',
              {
                ref: 'overlay',
                style: prepareStyles((0, _simpleAssign2.default)(styles.overlay, overlayStyle, overlayBackgroundProxy))
              },
              enhancedButtonChildren
            )
          )
        );
      }
    }]);
    return RaisedButton;
  }(React__default.Component);

  RaisedButton.muiName = 'RaisedButton';
  RaisedButton.defaultProps = {
    disabled: false,
    labelPosition: 'after',
    fullWidth: false,
    primary: false,
    secondary: false
  };
  RaisedButton.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  RaisedButton.propTypes =  {};
  exports.default = RaisedButton;
  });

  unwrapExports(RaisedButton_1);

  var RaisedButton = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;



  var _RaisedButton2 = _interopRequireDefault(RaisedButton_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _RaisedButton2.default;
  });

  var MuiRaisedButton = unwrapExports(RaisedButton);

  var RaisedButton$1 =
  /*#__PURE__*/
  function (_Component) {
    _inherits(RaisedButton, _Component);

    function RaisedButton() {
      _classCallCheck(this, RaisedButton);

      return _possibleConstructorReturn(this, _getPrototypeOf(RaisedButton).apply(this, arguments));
    }

    _createClass(RaisedButton, [{
      key: "render",
      value: function render() {
        return React__default.createElement(MuiRaisedButton, this.props);
      }
    }]);

    return RaisedButton;
  }(React.Component);

  var FontIcon_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _transitions2 = _interopRequireDefault(transitions);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function getStyles(props, context, state) {
    var color = props.color,
        hoverColor = props.hoverColor;
    var baseTheme = context.muiTheme.baseTheme;

    var offColor = color || baseTheme.palette.textColor;
    var onColor = hoverColor || offColor;

    return {
      root: {
        color: state.hovered ? onColor : offColor,
        position: 'relative',
        fontSize: baseTheme.spacing.iconSize,
        display: 'inline-block',
        userSelect: 'none',
        transition: _transitions2.default.easeOut()
      }
    };
  }

  var FontIcon = function (_Component) {
    (0, _inherits3.default)(FontIcon, _Component);

    function FontIcon() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, FontIcon);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FontIcon.__proto__ || (0, _getPrototypeOf2.default)(FontIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        hovered: false
      }, _this.handleMouseLeave = function (event) {
        // hover is needed only when a hoverColor is defined
        if (_this.props.hoverColor !== undefined) {
          _this.setState({ hovered: false });
        }
        if (_this.props.onMouseLeave) {
          _this.props.onMouseLeave(event);
        }
      }, _this.handleMouseEnter = function (event) {
        // hover is needed only when a hoverColor is defined
        if (_this.props.hoverColor !== undefined) {
          _this.setState({ hovered: true });
        }
        if (_this.props.onMouseEnter) {
          _this.props.onMouseEnter(event);
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(FontIcon, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            hoverColor = _props.hoverColor,
            onMouseLeave = _props.onMouseLeave,
            onMouseEnter = _props.onMouseEnter,
            style = _props.style,
            other = (0, _objectWithoutProperties3.default)(_props, ['hoverColor', 'onMouseLeave', 'onMouseEnter', 'style']);
        var prepareStyles = this.context.muiTheme.prepareStyles;

        var styles = getStyles(this.props, this.context, this.state);

        return _react2.default.createElement('span', (0, _extends3.default)({}, other, {
          onMouseLeave: this.handleMouseLeave,
          onMouseEnter: this.handleMouseEnter,
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
        }));
      }
    }]);
    return FontIcon;
  }(React__default.Component);

  FontIcon.muiName = 'FontIcon';
  FontIcon.defaultProps = {
    onMouseEnter: function onMouseEnter() {},
    onMouseLeave: function onMouseLeave() {}
  };
  FontIcon.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  FontIcon.propTypes =  {};
  exports.default = FontIcon;
  });

  unwrapExports(FontIcon_1);

  var FontIcon = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;



  var _FontIcon2 = _interopRequireDefault(FontIcon_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _FontIcon2.default;
  });

  var MuiFontIcon = unwrapExports(FontIcon);

  var styles$1 = {
    root: {
      cursor: 'pointer'
    }
  };
  /**
   * @requires <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/{VERSION}/css/font-awesome.min.css">
   * @example <FontAwesome>fa-angle-up</FontAwesome>
   */

  var FontAwesome =
  /*#__PURE__*/
  function (_Component) {
    _inherits(FontAwesome, _Component);

    function FontAwesome() {
      _classCallCheck(this, FontAwesome);

      return _possibleConstructorReturn(this, _getPrototypeOf(FontAwesome).apply(this, arguments));
    }

    _createClass(FontAwesome, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            style = _this$props.style,
            props = _objectWithoutProperties(_this$props, ["style"]);

        return React__default.createElement(MuiFontIcon, _extends({}, props, {
          className: classnames("fa", this.props.children),
          style: _.defaults(style, styles$1.root)
        }), null);
      }
    }]);

    return FontAwesome;
  }(React.Component);

  var styles$2 = {
    root: {
      cursor: 'pointer'
    }
  };
  /**
   * @requires <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
   * @example <MaterialIcon >home</MaterialIcon>
   */

  var MaterialIcon =
  /*#__PURE__*/
  function (_Component) {
    _inherits(MaterialIcon, _Component);

    function MaterialIcon() {
      _classCallCheck(this, MaterialIcon);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaterialIcon).apply(this, arguments));
    }

    _createClass(MaterialIcon, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            style = _this$props.style,
            children = _this$props.children,
            props = _objectWithoutProperties(_this$props, ["style", "children"]);

        return React__default.createElement(MuiFontIcon, _extends({}, props, {
          className: "material-icons",
          style: _.defaults(style, styles$2.root)
        }), children);
      }
    }]);

    return MaterialIcon;
  }(React.Component);

  /**
   * @requires <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
   * @requires <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/{VERSION}/css/font-awesome.min.css">
   * @example <Icon >home</Icon>
   */

  var Icon =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Icon, _Component);

    function Icon() {
      _classCallCheck(this, Icon);

      return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
    }

    _createClass(Icon, [{
      key: "render",
      value: function render() {
        var props = _.omit(this.props, ['children']);

        if (/^fa-/.test(this.props.children)) {
          return React__default.createElement(FontAwesome, props, this.props.children);
        } else {
          return React__default.createElement(MaterialIcon, props, this.props.children);
        }
      }
    }]);

    return Icon;
  }(React.Component);

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function() {
    return root.Date.now();
  };

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          result = wait - timeSinceLastCall;

      return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }

    function debounced() {
      var time = now(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  /**
   * Creates a throttled function that only invokes `func` at most once per
   * every `wait` milliseconds. The throttled function comes with a `cancel`
   * method to cancel delayed `func` invocations and a `flush` method to
   * immediately invoke them. Provide `options` to indicate whether `func`
   * should be invoked on the leading and/or trailing edge of the `wait`
   * timeout. The `func` is invoked with the last arguments provided to the
   * throttled function. Subsequent calls to the throttled function return the
   * result of the last `func` invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the throttled function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.throttle` and `_.debounce`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to throttle.
   * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=true]
   *  Specify invoking on the leading edge of the timeout.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new throttled function.
   * @example
   *
   * // Avoid excessively updating the position while scrolling.
   * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
   *
   * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
   * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
   * jQuery(element).on('click', throttled);
   *
   * // Cancel the trailing throttled invocation.
   * jQuery(window).on('popstate', throttled.cancel);
   */
  function throttle(func, wait, options) {
    var leading = true,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (isObject(options)) {
      leading = 'leading' in options ? !!options.leading : leading;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
      'leading': leading,
      'maxWait': wait,
      'trailing': trailing
    });
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol$1(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol$1(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var lodash_throttle = throttle;

  var PopoverAnimationDefault_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _transitions2 = _interopRequireDefault(transitions);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _propTypes4 = _interopRequireDefault(propTypes$1);



  var _Paper2 = _interopRequireDefault(Paper);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function getStyles(props, context, state) {
    var targetOrigin = props.targetOrigin;
    var open = state.open;
    var muiTheme = context.muiTheme;

    var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');

    return {
      root: {
        position: 'fixed',
        zIndex: muiTheme.zIndex.popover,
        opacity: open ? 1 : 0,
        transform: open ? 'scale(1, 1)' : 'scale(0, 0)',
        transformOrigin: horizontal + ' ' + targetOrigin.vertical,
        transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity']),
        maxHeight: '100%'
      },
      horizontal: {
        maxHeight: '100%',
        overflowY: 'auto',
        transform: open ? 'scaleX(1)' : 'scaleX(0)',
        opacity: open ? 1 : 0,
        transformOrigin: horizontal + ' ' + targetOrigin.vertical,
        transition: _transitions2.default.easeOut('250ms', ['transform', 'opacity'])
      },
      vertical: {
        opacity: open ? 1 : 0,
        transform: open ? 'scaleY(1)' : 'scaleY(0)',
        transformOrigin: horizontal + ' ' + targetOrigin.vertical,
        transition: _transitions2.default.easeOut('500ms', ['transform', 'opacity'])
      }
    };
  }

  var PopoverAnimationDefault = function (_Component) {
    (0, _inherits3.default)(PopoverAnimationDefault, _Component);

    function PopoverAnimationDefault() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, PopoverAnimationDefault);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PopoverAnimationDefault.__proto__ || (0, _getPrototypeOf2.default)(PopoverAnimationDefault)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        open: false
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(PopoverAnimationDefault, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.setState({
          open: nextProps.open
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            className = _props.className,
            style = _props.style,
            zDepth = _props.zDepth;
        var prepareStyles = this.context.muiTheme.prepareStyles;

        var styles = getStyles(this.props, this.context, this.state);

        return _react2.default.createElement(
          _Paper2.default,
          {
            style: (0, _simpleAssign2.default)(styles.root, style),
            zDepth: zDepth,
            className: className
          },
          _react2.default.createElement(
            'div',
            { style: prepareStyles(styles.horizontal) },
            _react2.default.createElement(
              'div',
              { style: prepareStyles(styles.vertical) },
              this.props.children
            )
          )
        );
      }
    }]);
    return PopoverAnimationDefault;
  }(React__default.Component);

  PopoverAnimationDefault.defaultProps = {
    style: {},
    zDepth: 1
  };
  PopoverAnimationDefault.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  PopoverAnimationDefault.propTypes =  {};
  exports.default = PopoverAnimationDefault;
  });

  unwrapExports(PopoverAnimationDefault_1);

  var Popover_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _reactDom2 = _interopRequireDefault(reactDom);



  var _reactEventListener2 = _interopRequireDefault(reactEventListener_cjs);



  var _RenderToLayer2 = _interopRequireDefault(RenderToLayer_1);



  var _propTypes4 = _interopRequireDefault(propTypes$1);



  var _Paper2 = _interopRequireDefault(Paper);



  var _lodash2 = _interopRequireDefault(lodash_throttle);



  var _PopoverAnimationDefault2 = _interopRequireDefault(PopoverAnimationDefault_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var styles = {
    root: {
      display: 'none'
    }
  };

  var Popover = function (_Component) {
    (0, _inherits3.default)(Popover, _Component);

    function Popover(props, context) {
      (0, _classCallCheck3.default)(this, Popover);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Popover.__proto__ || (0, _getPrototypeOf2.default)(Popover)).call(this, props, context));

      _this.timeout = null;

      _this.renderLayer = function () {
        var _this$props = _this.props,
            animated = _this$props.animated,
            animation = _this$props.animation,
            anchorEl = _this$props.anchorEl,
            anchorOrigin = _this$props.anchorOrigin,
            autoCloseWhenOffScreen = _this$props.autoCloseWhenOffScreen,
            canAutoPosition = _this$props.canAutoPosition,
            children = _this$props.children,
            onRequestClose = _this$props.onRequestClose,
            style = _this$props.style,
            targetOrigin = _this$props.targetOrigin,
            useLayerForClickAway = _this$props.useLayerForClickAway,
            scrollableContainer = _this$props.scrollableContainer,
            other = (0, _objectWithoutProperties3.default)(_this$props, ['animated', 'animation', 'anchorEl', 'anchorOrigin', 'autoCloseWhenOffScreen', 'canAutoPosition', 'children', 'onRequestClose', 'style', 'targetOrigin', 'useLayerForClickAway', 'scrollableContainer']);


        var styleRoot = style;

        if (!animated) {
          styleRoot = {
            position: 'fixed',
            zIndex: _this.context.muiTheme.zIndex.popover
          };

          if (!_this.state.open) {
            return null;
          }

          return _react2.default.createElement(
            _Paper2.default,
            (0, _extends3.default)({ style: (0, _simpleAssign2.default)(styleRoot, style) }, other),
            children
          );
        }

        var Animation = animation || _PopoverAnimationDefault2.default;

        return _react2.default.createElement(
          Animation,
          (0, _extends3.default)({
            targetOrigin: targetOrigin,
            style: styleRoot
          }, other, {
            open: _this.state.open && !_this.state.closing
          }),
          children
        );
      };

      _this.componentClickAway = function () {
        _this.requestClose('clickAway');
      };

      _this.setPlacement = function (scrolling) {
        if (!_this.state.open) {
          return;
        }

        if (!_this.popoverRefs.layer.getLayer()) {
          return;
        }

        var targetEl = _this.popoverRefs.layer.getLayer().children[0];
        if (!targetEl) {
          return;
        }

        var _this$props2 = _this.props,
            targetOrigin = _this$props2.targetOrigin,
            anchorOrigin = _this$props2.anchorOrigin;

        var anchorEl = _this.props.anchorEl || _this.anchorEl;

        var anchor = _this.getAnchorPosition(anchorEl);
        var target = _this.getTargetPosition(targetEl);

        var targetPosition = {
          top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
          left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
        };

        if (scrolling && _this.props.autoCloseWhenOffScreen) {
          _this.autoCloseWhenOffScreen(anchor);
        }

        if (_this.props.canAutoPosition) {
          target = _this.getTargetPosition(targetEl); // update as height may have changed
          targetPosition = _this.applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition);
        }

        targetEl.style.top = targetPosition.top + 'px';
        targetEl.style.left = targetPosition.left + 'px';
        targetEl.style.maxHeight = window.innerHeight + 'px';
      };

      _this.handleResize = (0, _lodash2.default)(_this.setPlacement, 100);
      _this.handleScroll = (0, _lodash2.default)(_this.setPlacement.bind(_this, true), 50);

      _this.popoverRefs = {};

      _this.state = {
        open: props.open,
        closing: false
      };
      return _this;
    }

    (0, _createClass3.default)(Popover, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.placementTimeout = setTimeout(this.setPlacement);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (nextProps.open === this.props.open) {
          return;
        }

        if (nextProps.open) {
          clearTimeout(this.timeout);
          this.timeout = null;
          this.anchorEl = nextProps.anchorEl || this.props.anchorEl;
          this.setState({
            open: true,
            closing: false
          });
        } else {
          if (nextProps.animated) {
            if (this.timeout !== null) return;
            this.setState({ closing: true });
            this.timeout = setTimeout(function () {
              _this2.setState({
                open: false
              }, function () {
                _this2.timeout = null;
              });
            }, 500);
          } else {
            this.setState({
              open: false
            });
          }
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        clearTimeout(this.placementTimeout);
        this.placementTimeout = setTimeout(this.setPlacement);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.handleResize.cancel();
        this.handleScroll.cancel();

        if (this.placementTimeout) {
          clearTimeout(this.placementTimeout);
          this.placementTimeout = null;
        }

        if (this.timeout) {
          clearTimeout(this.timeout);
          this.timeout = null;
        }
      }
    }, {
      key: 'requestClose',
      value: function requestClose(reason) {
        if (this.props.onRequestClose) {
          this.props.onRequestClose(reason);
        }
      }
    }, {
      key: 'getAnchorPosition',
      value: function getAnchorPosition(el) {
        if (!el) {
          el = _reactDom2.default.findDOMNode(this);
        }

        var rect = el.getBoundingClientRect();
        var a = {
          top: rect.top,
          left: rect.left,
          width: el.offsetWidth,
          height: el.offsetHeight
        };

        a.right = rect.right || a.left + a.width;
        a.bottom = rect.bottom || a.top + a.height;
        a.middle = a.left + (a.right - a.left) / 2;
        a.center = a.top + (a.bottom - a.top) / 2;

        return a;
      }
    }, {
      key: 'getTargetPosition',
      value: function getTargetPosition(targetEl) {
        return {
          top: 0,
          center: targetEl.offsetHeight / 2,
          bottom: targetEl.offsetHeight,
          left: 0,
          middle: targetEl.offsetWidth / 2,
          right: targetEl.offsetWidth
        };
      }
    }, {
      key: 'autoCloseWhenOffScreen',
      value: function autoCloseWhenOffScreen(anchorPosition) {
        if (anchorPosition.top < 0 || anchorPosition.top > window.innerHeight || anchorPosition.left < 0 || anchorPosition.left > window.innerWidth) {
          this.requestClose('offScreen');
        }
      }
    }, {
      key: 'getOverlapMode',
      value: function getOverlapMode(anchor, target, median) {
        if ([anchor, target].indexOf(median) >= 0) return 'auto';
        if (anchor === target) return 'inclusive';
        return 'exclusive';
      }
    }, {
      key: 'getPositions',
      value: function getPositions(anchor, target) {
        var a = (0, _extends3.default)({}, anchor);
        var t = (0, _extends3.default)({}, target);

        var positions = {
          x: ['left', 'right'].filter(function (p) {
            return p !== t.horizontal;
          }),
          y: ['top', 'bottom'].filter(function (p) {
            return p !== t.vertical;
          })
        };

        var overlap = {
          x: this.getOverlapMode(a.horizontal, t.horizontal, 'middle'),
          y: this.getOverlapMode(a.vertical, t.vertical, 'center')
        };

        positions.x.splice(overlap.x === 'auto' ? 0 : 1, 0, 'middle');
        positions.y.splice(overlap.y === 'auto' ? 0 : 1, 0, 'center');

        if (overlap.y !== 'auto') {
          a.vertical = a.vertical === 'top' ? 'bottom' : 'top';
          if (overlap.y === 'inclusive') {
            t.vertical = t.vertical;
          }
        }

        if (overlap.x !== 'auto') {
          a.horizontal = a.horizontal === 'left' ? 'right' : 'left';
          if (overlap.y === 'inclusive') {
            t.horizontal = t.horizontal;
          }
        }

        return {
          positions: positions,
          anchorPos: a
        };
      }
    }, {
      key: 'applyAutoPositionIfNeeded',
      value: function applyAutoPositionIfNeeded(anchor, target, targetOrigin, anchorOrigin, targetPosition) {
        var _getPositions = this.getPositions(anchorOrigin, targetOrigin),
            positions = _getPositions.positions,
            anchorPos = _getPositions.anchorPos;

        if (targetPosition.top < 0 || targetPosition.top + target.bottom > window.innerHeight) {
          var newTop = anchor[anchorPos.vertical] - target[positions.y[0]];
          if (newTop + target.bottom <= window.innerHeight) {
            targetPosition.top = Math.max(0, newTop);
          } else {
            newTop = anchor[anchorPos.vertical] - target[positions.y[1]];
            if (newTop + target.bottom <= window.innerHeight) {
              targetPosition.top = Math.max(0, newTop);
            }
          }
        }

        if (targetPosition.left < 0 || targetPosition.left + target.right > window.innerWidth) {
          var newLeft = anchor[anchorPos.horizontal] - target[positions.x[0]];
          if (newLeft + target.right <= window.innerWidth) {
            targetPosition.left = Math.max(0, newLeft);
          } else {
            newLeft = anchor[anchorPos.horizontal] - target[positions.x[1]];
            if (newLeft + target.right <= window.innerWidth) {
              targetPosition.left = Math.max(0, newLeft);
            }
          }
        }

        return targetPosition;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var eventListener = this.state.open ? _react2.default.createElement(_reactEventListener2.default, {
          target: this.props.scrollableContainer,
          onScroll: this.handleScroll,
          onResize: this.handleResize
        }) : null;
        return _react2.default.createElement(
          'div',
          { style: styles.root },
          eventListener,
          _react2.default.createElement(_RenderToLayer2.default, {
            ref: function ref(_ref) {
              return _this3.popoverRefs.layer = _ref;
            },
            open: this.state.open,
            componentClickAway: this.componentClickAway,
            useLayerForClickAway: this.props.useLayerForClickAway,
            render: this.renderLayer
          })
        );
      }
    }]);
    return Popover;
  }(React__default.Component);

  Popover.defaultProps = {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    animated: true,
    autoCloseWhenOffScreen: true,
    canAutoPosition: true,
    onRequestClose: function onRequestClose() {},
    open: false,
    scrollableContainer: 'window',
    style: {
      overflowY: 'auto'
    },
    targetOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    useLayerForClickAway: true,
    zDepth: 1
  };
  Popover.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  Popover.propTypes =  {};
  exports.default = Popover;
  });

  unwrapExports(Popover_1);

  var setStatic_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  var setStatic = function setStatic(key, value) {
    return function (BaseComponent) {
      /* eslint-disable no-param-reassign */
      BaseComponent[key] = value;
      /* eslint-enable no-param-reassign */
      return BaseComponent;
    };
  };

  exports.default = setStatic;
  });

  unwrapExports(setStatic_1);

  var setDisplayName_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _setStatic2 = _interopRequireDefault(setStatic_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var setDisplayName = function setDisplayName(displayName) {
    return (0, _setStatic2.default)('displayName', displayName);
  };

  exports.default = setDisplayName;
  });

  unwrapExports(setDisplayName_1);

  var getDisplayName_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  var getDisplayName = function getDisplayName(Component) {
    if (typeof Component === 'string') {
      return Component;
    }

    if (!Component) {
      return undefined;
    }

    return Component.displayName || Component.name || 'Component';
  };

  exports.default = getDisplayName;
  });

  unwrapExports(getDisplayName_1);

  var wrapDisplayName_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _getDisplayName2 = _interopRequireDefault(getDisplayName_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
    return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
  };

  exports.default = wrapDisplayName;
  });

  unwrapExports(wrapDisplayName_1);

  var shouldUpdate_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;





  var _setDisplayName2 = _interopRequireDefault(setDisplayName_1);



  var _wrapDisplayName2 = _interopRequireDefault(wrapDisplayName_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var shouldUpdate = function shouldUpdate(test) {
    return function (BaseComponent) {
      var factory = (0, React__default.createFactory)(BaseComponent);

      var ShouldUpdate = function (_Component) {
        _inherits(ShouldUpdate, _Component);

        function ShouldUpdate() {
          _classCallCheck(this, ShouldUpdate);

          return _possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        ShouldUpdate.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
          return test(this.props, nextProps);
        };

        ShouldUpdate.prototype.render = function render() {
          return factory(this.props);
        };

        return ShouldUpdate;
      }(React__default.Component);
      return ShouldUpdate;
    };
  };

  exports.default = shouldUpdate;
  });

  unwrapExports(shouldUpdate_1);

  var pure_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;



  var _shouldUpdate2 = _interopRequireDefault(shouldUpdate_1);



  var _shallowEqual2 = _interopRequireDefault(shallowEqual$1);



  var _setDisplayName2 = _interopRequireDefault(setDisplayName_1);



  var _wrapDisplayName2 = _interopRequireDefault(wrapDisplayName_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var pure = function pure(BaseComponent) {
    var hoc = (0, _shouldUpdate2.default)(function (props, nextProps) {
      return !(0, _shallowEqual2.default)(props, nextProps);
    });

    return hoc(BaseComponent);
  };

  exports.default = pure;
  });

  unwrapExports(pure_1);

  var SvgIcon_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _transitions2 = _interopRequireDefault(transitions);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var SvgIcon = function (_Component) {
    (0, _inherits3.default)(SvgIcon, _Component);

    function SvgIcon() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, SvgIcon);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SvgIcon.__proto__ || (0, _getPrototypeOf2.default)(SvgIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        hovered: false
      }, _this.handleMouseLeave = function (event) {
        _this.setState({ hovered: false });
        _this.props.onMouseLeave(event);
      }, _this.handleMouseEnter = function (event) {
        _this.setState({ hovered: true });
        _this.props.onMouseEnter(event);
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SvgIcon, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            children = _props.children,
            color = _props.color,
            hoverColor = _props.hoverColor,
            onMouseEnter = _props.onMouseEnter,
            onMouseLeave = _props.onMouseLeave,
            style = _props.style,
            viewBox = _props.viewBox,
            other = (0, _objectWithoutProperties3.default)(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);
        var _context$muiTheme = this.context.muiTheme,
            svgIcon = _context$muiTheme.svgIcon,
            prepareStyles = _context$muiTheme.prepareStyles;


        var offColor = color ? color : 'currentColor';
        var onColor = hoverColor ? hoverColor : offColor;

        var mergedStyles = (0, _simpleAssign2.default)({
          display: 'inline-block',
          color: svgIcon.color,
          fill: this.state.hovered ? onColor : offColor,
          height: 24,
          width: 24,
          userSelect: 'none',
          transition: _transitions2.default.easeOut()
        }, style);

        return _react2.default.createElement(
          'svg',
          (0, _extends3.default)({}, other, {
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            style: prepareStyles(mergedStyles),
            viewBox: viewBox
          }),
          children
        );
      }
    }]);
    return SvgIcon;
  }(React__default.Component);

  SvgIcon.muiName = 'SvgIcon';
  SvgIcon.defaultProps = {
    onMouseEnter: function onMouseEnter() {},
    onMouseLeave: function onMouseLeave() {},
    viewBox: '0 0 24 24'
  };
  SvgIcon.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  SvgIcon.propTypes =  {};
  exports.default = SvgIcon;
  });

  unwrapExports(SvgIcon_1);

  var SvgIcon = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;



  var _SvgIcon2 = _interopRequireDefault(SvgIcon_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _SvgIcon2.default;
  });

  unwrapExports(SvgIcon);

  var check$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _react2 = _interopRequireDefault(React__default);



  var _pure2 = _interopRequireDefault(pure_1);



  var _SvgIcon2 = _interopRequireDefault(SvgIcon);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var NavigationCheck = function NavigationCheck(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      props,
      _react2.default.createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
    );
  };
  NavigationCheck = (0, _pure2.default)(NavigationCheck);
  NavigationCheck.displayName = 'NavigationCheck';
  NavigationCheck.muiName = 'SvgIcon';

  exports.default = NavigationCheck;
  });

  unwrapExports(check$1);

  var Tooltip_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _transitions2 = _interopRequireDefault(transitions);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function getStyles(props, context, state) {
    var verticalPosition = props.verticalPosition;
    var horizontalPosition = props.horizontalPosition;
    var touchMarginOffset = props.touch ? 10 : 0;
    var touchOffsetTop = props.touch ? -20 : -10;
    var offset = verticalPosition === 'bottom' ? 14 + touchMarginOffset : -14 - touchMarginOffset;

    var _context$muiTheme = context.muiTheme,
        baseTheme = _context$muiTheme.baseTheme,
        zIndex = _context$muiTheme.zIndex,
        tooltip = _context$muiTheme.tooltip,
        borderRadius = _context$muiTheme.borderRadius;


    var styles = {
      root: {
        position: 'absolute',
        fontFamily: baseTheme.fontFamily,
        fontSize: '10px',
        lineHeight: '22px',
        padding: '0 8px',
        zIndex: zIndex.tooltip,
        color: tooltip.color,
        overflow: 'hidden',
        top: -10000,
        borderRadius: borderRadius,
        userSelect: 'none',
        opacity: 0,
        right: horizontalPosition === 'left' ? 12 : null,
        left: horizontalPosition === 'center' ? (state.offsetWidth - 48) / 2 * -1 : horizontalPosition === 'right' ? 12 : null,
        transition: _transitions2.default.easeOut('0ms', 'top', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
      },
      label: {
        position: 'relative',
        whiteSpace: 'nowrap'
      },
      ripple: {
        position: 'absolute',
        left: horizontalPosition === 'center' ? '50%' : horizontalPosition === 'left' ? '100%' : '0%',
        top: verticalPosition === 'bottom' ? 0 : '100%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        backgroundColor: 'transparent',
        transition: _transitions2.default.easeOut('0ms', 'width', '450ms') + ', ' + _transitions2.default.easeOut('0ms', 'height', '450ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
      },
      rootWhenShown: {
        top: verticalPosition === 'top' ? touchOffsetTop : 36,
        opacity: tooltip.opacity,
        transform: 'translate(0px, ' + offset + 'px)',
        transition: _transitions2.default.easeOut('0ms', 'top', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'transform', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'opacity', '0ms')
      },
      rootWhenTouched: {
        fontSize: '14px',
        lineHeight: '32px',
        padding: '0 16px'
      },
      rippleWhenShown: {
        backgroundColor: tooltip.rippleBackgroundColor,
        transition: _transitions2.default.easeOut('450ms', 'width', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'height', '0ms') + ', ' + _transitions2.default.easeOut('450ms', 'backgroundColor', '0ms')
      }
    };

    return styles;
  }

  var Tooltip = function (_Component) {
    (0, _inherits3.default)(Tooltip, _Component);

    function Tooltip() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Tooltip);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        offsetWidth: null
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Tooltip, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.setRippleSize();
        this.setTooltipPosition();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps() {
        this.setTooltipPosition();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.setRippleSize();
      }
    }, {
      key: 'setRippleSize',
      value: function setRippleSize() {
        var ripple = this.refs.ripple;
        var tooltip = this.refs.tooltip;
        var tooltipWidth = parseInt(tooltip.offsetWidth, 10) / (this.props.horizontalPosition === 'center' ? 2 : 1);
        var tooltipHeight = parseInt(tooltip.offsetHeight, 10);

        var rippleDiameter = Math.ceil(Math.sqrt(Math.pow(tooltipHeight, 2) + Math.pow(tooltipWidth, 2)) * 2);
        if (this.props.show) {
          ripple.style.height = rippleDiameter + 'px';
          ripple.style.width = rippleDiameter + 'px';
        } else {
          ripple.style.width = '0px';
          ripple.style.height = '0px';
        }
      }
    }, {
      key: 'setTooltipPosition',
      value: function setTooltipPosition() {
        this.setState({ offsetWidth: this.refs.tooltip.offsetWidth });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            horizontalPosition = _props.horizontalPosition,
            label = _props.label,
            show = _props.show,
            touch = _props.touch,
            verticalPosition = _props.verticalPosition,
            other = (0, _objectWithoutProperties3.default)(_props, ['horizontalPosition', 'label', 'show', 'touch', 'verticalPosition']);
        var prepareStyles = this.context.muiTheme.prepareStyles;

        var styles = getStyles(this.props, this.context, this.state);

        return _react2.default.createElement(
          'div',
          (0, _extends3.default)({}, other, {
            ref: 'tooltip',
            style: prepareStyles((0, _simpleAssign2.default)(styles.root, this.props.show && styles.rootWhenShown, this.props.touch && styles.rootWhenTouched, this.props.style))
          }),
          _react2.default.createElement('div', {
            ref: 'ripple',
            style: prepareStyles((0, _simpleAssign2.default)(styles.ripple, this.props.show && styles.rippleWhenShown))
          }),
          _react2.default.createElement(
            'span',
            { style: prepareStyles(styles.label) },
            label
          )
        );
      }
    }]);
    return Tooltip;
  }(React__default.Component);

  Tooltip.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  Tooltip.propTypes =  {};
  exports.default = Tooltip;
  });

  unwrapExports(Tooltip_1);

  var childUtils = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.extendChildren = extendChildren;



  var _react2 = _interopRequireDefault(React__default);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function extendChildren(children, extendedProps, extendedChildren) {
    return _react2.default.Children.map(children, function (child) {
      if (!_react2.default.isValidElement(child)) {
        return child;
      }

      var newProps = typeof extendedProps === 'function' ? extendedProps(child) : extendedProps;

      var newChildren = typeof extendedChildren === 'function' ? extendedChildren(child) : extendedChildren ? extendedChildren : child.props.children;

      return _react2.default.cloneElement(child, newProps, newChildren);
    });
  }
  });

  unwrapExports(childUtils);
  var childUtils_1 = childUtils.extendChildren;

  var IconButton_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _transitions2 = _interopRequireDefault(transitions);



  var _propTypes4 = _interopRequireDefault(propTypes$1);



  var _EnhancedButton2 = _interopRequireDefault(EnhancedButton_1);



  var _FontIcon2 = _interopRequireDefault(FontIcon);



  var _Tooltip2 = _interopRequireDefault(Tooltip_1);



  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function getStyles(props, context) {
    var baseTheme = context.muiTheme.baseTheme;


    return {
      root: {
        boxSizing: 'border-box',
        overflow: 'visible',
        transition: _transitions2.default.easeOut(),
        padding: baseTheme.spacing.iconSize / 2,
        width: baseTheme.spacing.iconSize * 2,
        height: baseTheme.spacing.iconSize * 2,
        fontSize: 0
      },
      tooltip: {
        boxSizing: 'border-box'
      },
      disabled: {
        color: baseTheme.palette.disabledColor,
        fill: baseTheme.palette.disabledColor,
        cursor: 'default'
      }
    };
  }

  var IconButton = function (_Component) {
    (0, _inherits3.default)(IconButton, _Component);

    function IconButton() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, IconButton);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IconButton.__proto__ || (0, _getPrototypeOf2.default)(IconButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        hovered: false,
        isKeyboardFocused: false,
        // Not to be confonded with the touch property.
        // This state is to determined if it's a mobile device.
        touch: false,
        tooltipShown: false
      }, _this.handleBlur = function (event) {
        _this.hideTooltip();
        if (_this.props.onBlur) {
          _this.props.onBlur(event);
        }
      }, _this.handleFocus = function (event) {
        _this.showTooltip();
        if (_this.props.onFocus) {
          _this.props.onFocus(event);
        }
      }, _this.handleMouseLeave = function (event) {
        if (!_this.button.isKeyboardFocused()) {
          _this.hideTooltip();
        }
        _this.setState({ hovered: false });
        if (_this.props.onMouseLeave) {
          _this.props.onMouseLeave(event);
        }
      }, _this.handleMouseOut = function (event) {
        if (_this.props.disabled) _this.hideTooltip();
        if (_this.props.onMouseOut) _this.props.onMouseOut(event);
      }, _this.handleMouseEnter = function (event) {
        _this.showTooltip();

        // Cancel hover styles for touch devices
        if (!_this.state.touch) {
          _this.setState({ hovered: true });
        }
        if (_this.props.onMouseEnter) {
          _this.props.onMouseEnter(event);
        }
      }, _this.handleTouchStart = function (event) {
        _this.setState({ touch: true });

        if (_this.props.onTouchStart) {
          _this.props.onTouchStart(event);
        }
      }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
        var _this$props = _this.props,
            disabled = _this$props.disabled,
            onFocus = _this$props.onFocus,
            onBlur = _this$props.onBlur,
            onKeyboardFocus = _this$props.onKeyboardFocus;

        if (isKeyboardFocused && !disabled) {
          _this.showTooltip();
          if (onFocus) {
            onFocus(event);
          }
        } else {
          _this.hideTooltip();
          if (onBlur) {
            onBlur(event);
          }
        }

        _this.setState({ isKeyboardFocused: isKeyboardFocused });
        if (onKeyboardFocus) {
          onKeyboardFocus(event, isKeyboardFocused);
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(IconButton, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.disabled) {
          this.setState({ hovered: false });
        }
      }
    }, {
      key: 'setKeyboardFocus',
      value: function setKeyboardFocus() {
        this.button.setKeyboardFocus();
      }
    }, {
      key: 'showTooltip',
      value: function showTooltip() {
        if (this.props.tooltip) {
          this.setState({ tooltipShown: true });
        }
      }
    }, {
      key: 'hideTooltip',
      value: function hideTooltip() {
        if (this.props.tooltip) this.setState({ tooltipShown: false });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            disabled = _props.disabled,
            hoveredStyle = _props.hoveredStyle,
            disableTouchRipple = _props.disableTouchRipple,
            children = _props.children,
            iconClassName = _props.iconClassName,
            style = _props.style,
            tooltip = _props.tooltip,
            tooltipPositionProp = _props.tooltipPosition,
            tooltipStyles = _props.tooltipStyles,
            touch = _props.touch,
            iconStyle = _props.iconStyle,
            other = (0, _objectWithoutProperties3.default)(_props, ['disabled', 'hoveredStyle', 'disableTouchRipple', 'children', 'iconClassName', 'style', 'tooltip', 'tooltipPosition', 'tooltipStyles', 'touch', 'iconStyle']);

        var fonticon = void 0;

        var styles = getStyles(this.props, this.context);
        var tooltipPosition = tooltipPositionProp.split('-');

        var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;

        var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style, hovered ? hoveredStyle : {});

        var tooltipElement = tooltip ? _react2.default.createElement(_Tooltip2.default, {
          label: tooltip,
          show: this.state.tooltipShown,
          touch: touch,
          style: (0, _simpleAssign2.default)(styles.tooltip, tooltipStyles),
          verticalPosition: tooltipPosition[0],
          horizontalPosition: tooltipPosition[1]
        }) : null;

        if (iconClassName) {
          var iconHoverColor = iconStyle.iconHoverColor,
              iconStyleFontIcon = (0, _objectWithoutProperties3.default)(iconStyle, ['iconHoverColor']);


          fonticon = _react2.default.createElement(
            _FontIcon2.default,
            {
              className: iconClassName,
              hoverColor: disabled ? null : iconHoverColor,
              style: (0, _simpleAssign2.default)({}, disabled && styles.disabled, iconStyleFontIcon),
              color: this.context.muiTheme.baseTheme.palette.textColor
            },
            children
          );
        }

        var childrenStyle = disabled ? (0, _simpleAssign2.default)({}, iconStyle, styles.disabled) : iconStyle;

        return _react2.default.createElement(
          _EnhancedButton2.default,
          (0, _extends3.default)({
            ref: function ref(_ref2) {
              return _this2.button = _ref2;
            }
          }, other, {
            centerRipple: true,
            disabled: disabled,
            onTouchStart: this.handleTouchStart,
            style: mergedRootStyles,
            disableTouchRipple: disableTouchRipple,
            onBlur: this.handleBlur,
            onFocus: this.handleFocus,
            onMouseLeave: this.handleMouseLeave,
            onMouseEnter: this.handleMouseEnter,
            onMouseOut: this.handleMouseOut,
            onKeyboardFocus: this.handleKeyboardFocus
          }),
          tooltipElement,
          fonticon,
          (0, childUtils.extendChildren)(children, {
            style: childrenStyle
          })
        );
      }
    }]);
    return IconButton;
  }(React__default.Component);

  IconButton.muiName = 'IconButton';
  IconButton.defaultProps = {
    disabled: false,
    disableTouchRipple: false,
    iconStyle: {},
    tooltipPosition: 'bottom-center',
    touch: false
  };
  IconButton.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  IconButton.propTypes =  {};
  exports.default = IconButton;
  });

  unwrapExports(IconButton_1);

  var IconButton = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;



  var _IconButton2 = _interopRequireDefault(IconButton_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _IconButton2.default;
  });

  unwrapExports(IconButton);

  var expandLess = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _react2 = _interopRequireDefault(React__default);



  var _pure2 = _interopRequireDefault(pure_1);



  var _SvgIcon2 = _interopRequireDefault(SvgIcon);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var NavigationExpandLess = function NavigationExpandLess(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      props,
      _react2.default.createElement('path', { d: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z' })
    );
  };
  NavigationExpandLess = (0, _pure2.default)(NavigationExpandLess);
  NavigationExpandLess.displayName = 'NavigationExpandLess';
  NavigationExpandLess.muiName = 'SvgIcon';

  exports.default = NavigationExpandLess;
  });

  unwrapExports(expandLess);

  var expandMore = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _react2 = _interopRequireDefault(React__default);



  var _pure2 = _interopRequireDefault(pure_1);



  var _SvgIcon2 = _interopRequireDefault(SvgIcon);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var NavigationExpandMore = function NavigationExpandMore(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      props,
      _react2.default.createElement('path', { d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' })
    );
  };
  NavigationExpandMore = (0, _pure2.default)(NavigationExpandMore);
  NavigationExpandMore.displayName = 'NavigationExpandMore';
  NavigationExpandMore.muiName = 'SvgIcon';

  exports.default = NavigationExpandMore;
  });

  unwrapExports(expandMore);

  var Subheader_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Subheader = function Subheader(props, context) {
    var children = props.children,
        inset = props.inset,
        style = props.style,
        other = (0, _objectWithoutProperties3.default)(props, ['children', 'inset', 'style']);
    var _context$muiTheme = context.muiTheme,
        prepareStyles = _context$muiTheme.prepareStyles,
        subheader = _context$muiTheme.subheader;


    var styles = {
      root: {
        boxSizing: 'border-box',
        color: subheader.color,
        fontSize: 14,
        fontWeight: subheader.fontWeight,
        lineHeight: '48px',
        paddingLeft: inset ? 72 : 16,
        width: '100%'
      }
    };

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
      children
    );
  };

  Subheader.muiName = 'Subheader';

  Subheader.propTypes =  {};

  Subheader.defaultProps = {
    inset: false
  };

  Subheader.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };

  exports.default = Subheader;
  });

  unwrapExports(Subheader_1);

  var Subheader = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;



  var _Subheader2 = _interopRequireDefault(Subheader_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _Subheader2.default;
  });

  unwrapExports(Subheader);

  var List_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _Subheader2 = _interopRequireDefault(Subheader);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var List = function (_Component) {
    (0, _inherits3.default)(List, _Component);

    function List() {
      (0, _classCallCheck3.default)(this, List);
      return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || (0, _getPrototypeOf2.default)(List)).apply(this, arguments));
    }

    (0, _createClass3.default)(List, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            children = _props.children,
            style = _props.style,
            other = (0, _objectWithoutProperties3.default)(_props, ['children', 'style']);
        var prepareStyles = this.context.muiTheme.prepareStyles;


        var hasSubheader = false;

        var firstChild = React__default.Children.toArray(children)[0];
        if ((0, React__default.isValidElement)(firstChild) && firstChild.type === _Subheader2.default) {
          hasSubheader = true;
        }

        var styles = {
          root: {
            padding: (hasSubheader ? 0 : 8) + 'px 0px 8px 0px'
          }
        };

        return _react2.default.createElement(
          'div',
          (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
          children
        );
      }
    }]);
    return List;
  }(React__default.Component);

  List.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  List.propTypes =  {};
  exports.default = List;
  });

  unwrapExports(List_1);

  var NestedList_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _List2 = _interopRequireDefault(List_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var NestedList = function NestedList(props) {
    var children = props.children,
        open = props.open,
        nestedLevel = props.nestedLevel,
        style = props.style;


    if (!open) {
      return null;
    }

    return _react2.default.createElement(
      _List2.default,
      { style: style },
      React__default.Children.map(children, function (child) {
        return (0, React__default.isValidElement)(child) ? (0, React__default.cloneElement)(child, {
          nestedLevel: nestedLevel + 1
        }) : child;
      })
    );
  };

  NestedList.propTypes =  {};

  exports.default = NestedList;
  });

  unwrapExports(NestedList_1);

  var ListItem_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _extends3 = _interopRequireDefault(_extends$1);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _reactDom2 = _interopRequireDefault(reactDom);



  var _shallowEqual2 = _interopRequireDefault(shallowEqual$1);





  var _transitions2 = _interopRequireDefault(transitions);



  var _EnhancedButton2 = _interopRequireDefault(EnhancedButton_1);



  var _IconButton2 = _interopRequireDefault(IconButton);



  var _expandLess2 = _interopRequireDefault(expandLess);



  var _expandMore2 = _interopRequireDefault(expandMore);



  var _NestedList2 = _interopRequireDefault(NestedList_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function getStyles(props, context, state) {
    var autoGenerateNestedIndicator = props.autoGenerateNestedIndicator,
        insetChildren = props.insetChildren,
        leftAvatar = props.leftAvatar,
        leftCheckbox = props.leftCheckbox,
        leftIcon = props.leftIcon,
        nestedItems = props.nestedItems,
        nestedLevel = props.nestedLevel,
        rightAvatar = props.rightAvatar,
        rightIcon = props.rightIcon,
        rightIconButton = props.rightIconButton,
        rightToggle = props.rightToggle,
        secondaryText = props.secondaryText,
        secondaryTextLines = props.secondaryTextLines;
    var muiTheme = context.muiTheme;
    var listItem = muiTheme.listItem;


    var textColor = muiTheme.baseTheme.palette.textColor;
    var hoverColor = props.hoverColor || (0, colorManipulator.fade)(textColor, 0.1);
    var singleAvatar = !secondaryText && (leftAvatar || rightAvatar);
    var singleNoAvatar = !secondaryText && !(leftAvatar || rightAvatar);
    var twoLine = secondaryText && secondaryTextLines === 1;
    var threeLine = secondaryText && secondaryTextLines > 1;

    var isKeyboardFocused = (props.isKeyboardFocused !== undefined ? props : state).isKeyboardFocused;

    var styles = {
      root: {
        backgroundColor: (isKeyboardFocused || state.hovered) && !state.rightIconButtonHovered && !state.rightIconButtonKeyboardFocused ? hoverColor : null,
        color: textColor,
        display: 'block',
        fontSize: 16,
        lineHeight: '16px',
        position: 'relative',
        transition: _transitions2.default.easeOut()
      },

      // This inner div is needed so that ripples will span the entire container
      innerDiv: {
        marginLeft: nestedLevel * listItem.nestedLevelDepth,
        paddingLeft: leftIcon || leftAvatar || leftCheckbox || insetChildren ? 72 : 16,
        paddingRight: rightIcon || rightAvatar || rightIconButton || nestedItems.length && autoGenerateNestedIndicator ? 56 : rightToggle ? 72 : 16,
        paddingBottom: singleAvatar ? 20 : 16,
        paddingTop: singleNoAvatar || threeLine ? 16 : 20,
        position: 'relative'
      },

      icons: {
        height: 24,
        width: 24,
        display: 'block',
        position: 'absolute',
        top: twoLine ? 12 : singleAvatar ? 4 : 0,
        margin: 12
      },

      leftIcon: {
        left: 4
      },

      rightIcon: {
        right: 4
      },

      avatars: {
        position: 'absolute',
        top: singleAvatar ? 8 : 16
      },

      label: {
        cursor: 'pointer'
      },

      leftAvatar: {
        left: 16
      },

      rightAvatar: {
        right: 16
      },

      leftCheckbox: {
        position: 'absolute',
        display: 'block',
        width: 24,
        top: twoLine ? 24 : singleAvatar ? 16 : 12,
        left: 16
      },

      primaryText: {},

      rightIconButton: {
        position: 'absolute',
        display: 'block',
        top: twoLine ? 12 : singleAvatar ? 4 : 0,
        right: 4
      },

      rightToggle: {
        position: 'absolute',
        display: 'block',
        width: 54,
        top: twoLine ? 25 : singleAvatar ? 17 : 13,
        right: 8
      },

      secondaryText: {
        fontSize: 14,
        lineHeight: threeLine ? '18px' : '16px',
        height: threeLine ? 36 : 16,
        margin: 0,
        marginTop: 4,
        color: listItem.secondaryTextColor,

        // needed for 2 and 3 line ellipsis
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: threeLine ? null : 'nowrap',
        display: threeLine ? '-webkit-box' : null,
        WebkitLineClamp: threeLine ? 2 : null,
        WebkitBoxOrient: threeLine ? 'vertical' : null
      }
    };

    return styles;
  }

  var ListItem = function (_Component) {
    (0, _inherits3.default)(ListItem, _Component);

    function ListItem() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, ListItem);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ListItem.__proto__ || (0, _getPrototypeOf2.default)(ListItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        hovered: false,
        isKeyboardFocused: false,
        open: false,
        rightIconButtonHovered: false,
        rightIconButtonKeyboardFocused: false,
        touch: false
      }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
        _this.setState({ isKeyboardFocused: isKeyboardFocused });
        _this.props.onKeyboardFocus(event, isKeyboardFocused);
      }, _this.handleMouseEnter = function (event) {
        if (!_this.state.touch) _this.setState({ hovered: true });
        _this.props.onMouseEnter(event);
      }, _this.handleMouseLeave = function (event) {
        _this.setState({ hovered: false });
        _this.props.onMouseLeave(event);
      }, _this.handleClick = function (event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }

        if (_this.props.primaryTogglesNestedList) {
          _this.handleNestedListToggle(event);
        }
      }, _this.handleNestedListToggle = function (event) {
        if (_this.props.leftCheckbox) {
          event.preventDefault();
        }
        event.stopPropagation();

        if (_this.props.open === null) {
          _this.setState({ open: !_this.state.open }, function () {
            _this.props.onNestedListToggle(_this);
          });
        } else {
          // Exposing `this` in the callback is quite a bad API.
          // I'm doing a one level deep clone to expose a fake state.open.
          _this.props.onNestedListToggle((0, _extends3.default)({}, _this, {
            state: {
              open: !_this.state.open
            }
          }));
        }
      }, _this.handleRightIconButtonKeyboardFocus = function (event, isKeyboardFocused) {
        if (isKeyboardFocused) {
          _this.setState({
            isKeyboardFocused: false,
            rightIconButtonKeyboardFocused: isKeyboardFocused
          });
        }

        var iconButton = _this.props.rightIconButton;

        if (iconButton && iconButton.props.onKeyboardFocus) iconButton.props.onKeyboardFocus(event, isKeyboardFocused);
      }, _this.handleRightIconButtonMouseLeave = function (event) {
        var iconButton = _this.props.rightIconButton;
        _this.setState({ rightIconButtonHovered: false });
        if (iconButton && iconButton.props.onMouseLeave) iconButton.props.onMouseLeave(event);
      }, _this.handleRightIconButtonMouseEnter = function (event) {
        var iconButton = _this.props.rightIconButton;
        _this.setState({ rightIconButtonHovered: true });
        if (iconButton && iconButton.props.onMouseEnter) iconButton.props.onMouseEnter(event);
      }, _this.handleRightIconButtonMouseUp = function (event) {
        var iconButton = _this.props.rightIconButton;
        event.stopPropagation();
        if (iconButton && iconButton.props.onMouseUp) iconButton.props.onMouseUp(event);
      }, _this.handleRightIconButtonClick = function (event) {
        var iconButton = _this.props.rightIconButton;

        // Stop the event from bubbling up to the list-item
        event.stopPropagation();
        if (iconButton && iconButton.props.onClick) iconButton.props.onClick(event);
      }, _this.handleTouchStart = function (event) {
        _this.setState({ touch: true });
        _this.props.onTouchStart(event);
      }, _this.handleTouchEnd = function (event) {
        _this.setState({ touch: true });
        _this.props.onTouchEnd(event);
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ListItem, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.setState({
          open: this.props.open === null ? this.props.initiallyOpen === true : this.props.open
        });
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        // update the state when the component is controlled.
        if (nextProps.open !== null) this.setState({ open: nextProps.open });
        if (nextProps.disabled && this.state.hovered) this.setState({ hovered: false });
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
      }

      // This method is needed by the `MenuItem` component.

    }, {
      key: 'applyFocusState',
      value: function applyFocusState(focusState) {
        if (this.button) {
          var buttonEl = _reactDom2.default.findDOMNode(this.button);

          switch (focusState) {
            case 'none':
              buttonEl.blur();
              break;
            case 'focused':
              buttonEl.focus();
              break;
            case 'keyboard-focused':
              this.button.setKeyboardFocus();
              buttonEl.focus();
              break;
          }
        }
      }
    }, {
      key: 'createDisabledElement',
      value: function createDisabledElement(styles, contentChildren, additionalProps) {
        var _props = this.props,
            innerDivStyle = _props.innerDivStyle,
            style = _props.style;


        var mergedDivStyles = (0, _simpleAssign2.default)({}, styles.root, styles.innerDiv, innerDivStyle, style);

        return _react2.default.createElement(
          'div',
          (0, _extends3.default)({}, additionalProps, {
            style: this.context.muiTheme.prepareStyles(mergedDivStyles)
          }),
          contentChildren
        );
      }
    }, {
      key: 'createLabelElement',
      value: function createLabelElement(styles, contentChildren, additionalProps) {
        var _props2 = this.props,
            innerDivStyle = _props2.innerDivStyle,
            style = _props2.style;


        var mergedLabelStyles = (0, _simpleAssign2.default)({}, styles.root, styles.innerDiv, innerDivStyle, styles.label, style);

        return _react2.default.createElement(
          'label',
          (0, _extends3.default)({}, additionalProps, {
            style: this.context.muiTheme.prepareStyles(mergedLabelStyles)
          }),
          contentChildren
        );
      }
    }, {
      key: 'createTextElement',
      value: function createTextElement(styles, data, key) {
        var prepareStyles = this.context.muiTheme.prepareStyles;

        if (_react2.default.isValidElement(data)) {
          var style = (0, _simpleAssign2.default)({}, styles, data.props.style);
          if (typeof data.type === 'string') {
            // if element is a native dom node
            style = prepareStyles(style);
          }
          return _react2.default.cloneElement(data, {
            key: key,
            style: style
          });
        }

        return _react2.default.createElement(
          'div',
          { key: key, style: prepareStyles(styles) },
          data
        );
      }
    }, {
      key: 'pushElement',
      value: function pushElement(children, element, baseStyles, additionalProps) {
        if (element) {
          var styles = (0, _simpleAssign2.default)({}, baseStyles, element.props.style);
          children.push(_react2.default.cloneElement(element, (0, _extends3.default)({
            key: children.length,
            style: styles
          }, additionalProps)));
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props3 = this.props,
            autoGenerateNestedIndicator = _props3.autoGenerateNestedIndicator,
            children = _props3.children,
            containerElement = _props3.containerElement,
            disabled = _props3.disabled,
            disableKeyboardFocus = _props3.disableKeyboardFocus,
            hoverColor = _props3.hoverColor,
            initiallyOpen = _props3.initiallyOpen,
            innerDivStyle = _props3.innerDivStyle,
            insetChildren = _props3.insetChildren,
            leftAvatar = _props3.leftAvatar,
            leftCheckbox = _props3.leftCheckbox,
            leftIcon = _props3.leftIcon,
            nestedItems = _props3.nestedItems,
            nestedLevel = _props3.nestedLevel,
            nestedListStyle = _props3.nestedListStyle,
            onKeyboardFocus = _props3.onKeyboardFocus,
            isKeyboardFocused = _props3.isKeyboardFocused,
            onMouseEnter = _props3.onMouseEnter,
            onMouseLeave = _props3.onMouseLeave,
            onNestedListToggle = _props3.onNestedListToggle,
            onTouchStart = _props3.onTouchStart,
            onClick = _props3.onClick,
            rightAvatar = _props3.rightAvatar,
            rightIcon = _props3.rightIcon,
            rightIconButton = _props3.rightIconButton,
            rightToggle = _props3.rightToggle,
            primaryText = _props3.primaryText,
            primaryTogglesNestedList = _props3.primaryTogglesNestedList,
            secondaryText = _props3.secondaryText,
            secondaryTextLines = _props3.secondaryTextLines,
            style = _props3.style,
            other = (0, _objectWithoutProperties3.default)(_props3, ['autoGenerateNestedIndicator', 'children', 'containerElement', 'disabled', 'disableKeyboardFocus', 'hoverColor', 'initiallyOpen', 'innerDivStyle', 'insetChildren', 'leftAvatar', 'leftCheckbox', 'leftIcon', 'nestedItems', 'nestedLevel', 'nestedListStyle', 'onKeyboardFocus', 'isKeyboardFocused', 'onMouseEnter', 'onMouseLeave', 'onNestedListToggle', 'onTouchStart', 'onClick', 'rightAvatar', 'rightIcon', 'rightIconButton', 'rightToggle', 'primaryText', 'primaryTogglesNestedList', 'secondaryText', 'secondaryTextLines', 'style']);
        var prepareStyles = this.context.muiTheme.prepareStyles;

        var styles = getStyles(this.props, this.context, this.state);
        var contentChildren = [children];

        if (leftIcon) {
          var additionalProps = {
            color: leftIcon.props.color || this.context.muiTheme.listItem.leftIconColor
          };
          this.pushElement(contentChildren, leftIcon, (0, _simpleAssign2.default)({}, styles.icons, styles.leftIcon), additionalProps);
        }

        if (rightIcon) {
          var _additionalProps = {
            color: rightIcon.props.color || this.context.muiTheme.listItem.rightIconColor
          };
          this.pushElement(contentChildren, rightIcon, (0, _simpleAssign2.default)({}, styles.icons, styles.rightIcon), _additionalProps);
        }

        if (leftAvatar) {
          this.pushElement(contentChildren, leftAvatar, (0, _simpleAssign2.default)({}, styles.avatars, styles.leftAvatar));
        }

        if (rightAvatar) {
          this.pushElement(contentChildren, rightAvatar, (0, _simpleAssign2.default)({}, styles.avatars, styles.rightAvatar));
        }

        if (leftCheckbox) {
          this.pushElement(contentChildren, leftCheckbox, (0, _simpleAssign2.default)({}, styles.leftCheckbox));
        }

        // RightIconButtonElement
        var hasNestListItems = nestedItems.length;
        var hasRightElement = rightAvatar || rightIcon || rightIconButton || rightToggle;
        var needsNestedIndicator = hasNestListItems && autoGenerateNestedIndicator && !hasRightElement;

        if (rightIconButton || needsNestedIndicator) {
          var rightIconButtonElement = rightIconButton;
          var rightIconButtonHandlers = {
            onKeyboardFocus: this.handleRightIconButtonKeyboardFocus,
            onMouseEnter: this.handleRightIconButtonMouseEnter,
            onMouseLeave: this.handleRightIconButtonMouseLeave,
            onClick: this.handleRightIconButtonClick,
            onMouseDown: this.handleRightIconButtonMouseUp,
            onMouseUp: this.handleRightIconButtonMouseUp
          };

          // Create a nested list indicator icon if we don't have an icon on the right
          if (needsNestedIndicator) {
            rightIconButtonElement = this.state.open ? _react2.default.createElement(
              _IconButton2.default,
              null,
              _react2.default.createElement(_expandLess2.default, null)
            ) : _react2.default.createElement(
              _IconButton2.default,
              null,
              _react2.default.createElement(_expandMore2.default, null)
            );
            rightIconButtonHandlers.onClick = this.handleNestedListToggle;
          }

          this.pushElement(contentChildren, rightIconButtonElement, (0, _simpleAssign2.default)({}, styles.rightIconButton), rightIconButtonHandlers);
        }

        if (rightToggle) {
          this.pushElement(contentChildren, rightToggle, (0, _simpleAssign2.default)({}, styles.rightToggle));
        }

        if (primaryText) {
          var primaryTextElement = this.createTextElement(styles.primaryText, primaryText, 'primaryText');
          contentChildren.push(primaryTextElement);
        }

        if (secondaryText) {
          var secondaryTextElement = this.createTextElement(styles.secondaryText, secondaryText, 'secondaryText');
          contentChildren.push(secondaryTextElement);
        }

        var nestedList = nestedItems.length ? _react2.default.createElement(
          _NestedList2.default,
          { nestedLevel: nestedLevel, open: this.state.open, style: nestedListStyle },
          nestedItems
        ) : undefined;

        var simpleLabel = !primaryTogglesNestedList && (leftCheckbox || rightToggle);

        return _react2.default.createElement(
          'div',
          null,
          simpleLabel ? this.createLabelElement(styles, contentChildren, other) : disabled ? this.createDisabledElement(styles, contentChildren, other) : _react2.default.createElement(
            _EnhancedButton2.default,
            (0, _extends3.default)({
              containerElement: containerElement
            }, other, {
              disableKeyboardFocus: disableKeyboardFocus || this.state.rightIconButtonKeyboardFocused,
              onKeyboardFocus: this.handleKeyboardFocus,
              onMouseLeave: this.handleMouseLeave,
              onMouseEnter: this.handleMouseEnter,
              onTouchStart: this.handleTouchStart,
              onTouchEnd: this.handleTouchEnd,
              onClick: this.handleClick,
              disabled: disabled,
              ref: function ref(node) {
                return _this2.button = node;
              },
              style: (0, _simpleAssign2.default)({}, styles.root, style)
            }),
            _react2.default.createElement(
              'div',
              { style: prepareStyles((0, _simpleAssign2.default)(styles.innerDiv, innerDivStyle)) },
              contentChildren
            )
          ),
          nestedList
        );
      }
    }]);
    return ListItem;
  }(React__default.Component);

  ListItem.muiName = 'ListItem';
  ListItem.defaultProps = {
    autoGenerateNestedIndicator: true,
    containerElement: 'span',
    disableKeyboardFocus: false,
    disabled: false,
    initiallyOpen: false,
    insetChildren: false,
    nestedItems: [],
    nestedLevel: 0,
    onKeyboardFocus: function onKeyboardFocus() {},
    onMouseEnter: function onMouseEnter() {},
    onMouseLeave: function onMouseLeave() {},
    onNestedListToggle: function onNestedListToggle() {},
    onTouchEnd: function onTouchEnd() {},
    onTouchStart: function onTouchStart() {},
    open: null,
    primaryTogglesNestedList: false,
    secondaryTextLines: 1
  };
  ListItem.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  ListItem.propTypes =  {};
  exports.default = ListItem;
  });

  unwrapExports(ListItem_1);

  var ClickAwayListener_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);





  var _propTypes2 = _interopRequireDefault(propTypes);



  var _reactDom2 = _interopRequireDefault(reactDom);



  var _events2 = _interopRequireDefault(events);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var isDescendant = function isDescendant(el, target) {
    if (target !== null) {
      return el === target || isDescendant(el, target.parentNode);
    }
    return false;
  };

  var clickAwayEvents = ['mouseup', 'touchend'];
  var bind = function bind(callback) {
    return clickAwayEvents.forEach(function (event) {
      return _events2.default.on(document, event, callback);
    });
  };
  var unbind = function unbind(callback) {
    return clickAwayEvents.forEach(function (event) {
      return _events2.default.off(document, event, callback);
    });
  };

  var ClickAwayListener = function (_Component) {
    (0, _inherits3.default)(ClickAwayListener, _Component);

    function ClickAwayListener() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, ClickAwayListener);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ClickAwayListener.__proto__ || (0, _getPrototypeOf2.default)(ClickAwayListener)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickAway = function (event) {
        if (event.defaultPrevented) {
          return;
        }

        // IE11 support, which trigger the handleClickAway even after the unbind
        if (_this.isCurrentlyMounted) {
          var el = _reactDom2.default.findDOMNode(_this);

          if (document.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
            _this.props.onClickAway(event);
          }
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ClickAwayListener, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.isCurrentlyMounted = true;
        if (this.props.onClickAway) {
          bind(this.handleClickAway);
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (prevProps.onClickAway !== this.props.onClickAway) {
          unbind(this.handleClickAway);
          if (this.props.onClickAway) {
            bind(this.handleClickAway);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.isCurrentlyMounted = false;
        unbind(this.handleClickAway);
      }
    }, {
      key: 'render',
      value: function render() {
        return this.props.children;
      }
    }]);
    return ClickAwayListener;
  }(React__default.Component);

  ClickAwayListener.propTypes =  {};
  exports.default = ClickAwayListener;
  });

  unwrapExports(ClickAwayListener_1);

  var menuUtils = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.HotKeyHolder = undefined;



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var HotKeyHolder = exports.HotKeyHolder = function () {
    function HotKeyHolder() {
      var _this = this;

      (0, _classCallCheck3.default)(this, HotKeyHolder);

      this.clear = function () {
        _this.timerId = null;
        _this.lastKeys = null;
      };
    }

    (0, _createClass3.default)(HotKeyHolder, [{
      key: 'append',
      value: function append(key) {
        clearTimeout(this.timerId);
        this.timerId = setTimeout(this.clear, 500);
        return this.lastKeys = (this.lastKeys || '') + key;
      }
    }]);
    return HotKeyHolder;
  }();
  });

  unwrapExports(menuUtils);
  var menuUtils_1 = menuUtils.HotKeyHolder;

  var Menu_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _toArray3 = _interopRequireDefault(toArray);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _reactDom2 = _interopRequireDefault(reactDom);



  var _shallowEqual2 = _interopRequireDefault(shallowEqual$1);



  var _ClickAwayListener2 = _interopRequireDefault(ClickAwayListener_1);



  var _keycode2 = _interopRequireDefault(keycode);



  var _propTypes4 = _interopRequireDefault(propTypes$1);



  var _List2 = _interopRequireDefault(List_1);



  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function getStyles(props, context) {
    var desktop = props.desktop,
        maxHeight = props.maxHeight,
        width = props.width;
    var muiTheme = context.muiTheme;


    var styles = {
      root: {
        // Nested div because the List scales x faster than it scales y
        zIndex: muiTheme.zIndex.menu,
        maxHeight: maxHeight,
        overflowY: maxHeight ? 'auto' : null
      },
      divider: {
        marginTop: 7,
        marginBottom: 8
      },
      list: {
        display: 'table-cell',
        paddingBottom: desktop ? 16 : 8,
        paddingTop: desktop ? 16 : 8,
        userSelect: 'none',
        width: width
      },
      selectedMenuItem: {
        color: muiTheme.menuItem.selectedTextColor
      }
    };

    return styles;
  }

  var Menu = function (_Component) {
    (0, _inherits3.default)(Menu, _Component);

    function Menu(props, context) {
      (0, _classCallCheck3.default)(this, Menu);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Menu.__proto__ || (0, _getPrototypeOf2.default)(Menu)).call(this, props, context));

      _initialiseProps.call(_this);

      var filteredChildren = _this.getFilteredChildren(props.children);
      var selectedIndex = _this.getLastSelectedIndex(props, filteredChildren);

      var newFocusIndex = props.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
      if (newFocusIndex !== -1 && props.onMenuItemFocusChange) {
        props.onMenuItemFocusChange(null, newFocusIndex);
      }
      _this.state = {
        focusIndex: newFocusIndex,
        isKeyboardFocused: props.initiallyKeyboardFocused,
        keyWidth: props.desktop ? 64 : 56
      };

      _this.hotKeyHolder = new menuUtils.HotKeyHolder();
      return _this;
    }

    (0, _createClass3.default)(Menu, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.autoWidth) {
          this.setWidth();
        }
        this.setScollPosition();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var selectedIndex = void 0;
        var filteredChildren = this.getFilteredChildren(nextProps.children);

        if (this.props.multiple !== true) {
          selectedIndex = this.getLastSelectedIndex(nextProps, filteredChildren);
        } else {
          selectedIndex = this.state.focusIndex;
        }

        var newFocusIndex = nextProps.disableAutoFocus ? -1 : selectedIndex >= 0 ? selectedIndex : 0;
        if (newFocusIndex !== this.state.focusIndex && this.props.onMenuItemFocusChange) {
          this.props.onMenuItemFocusChange(null, newFocusIndex);
        }
        this.setState({
          focusIndex: newFocusIndex,
          keyWidth: nextProps.desktop ? 64 : 56
        });
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        if (this.props.autoWidth) this.setWidth();
      }
    }, {
      key: 'getValueLink',


      // Do not use outside of this component, it will be removed once valueLink is deprecated
      value: function getValueLink(props) {
        return props.valueLink || {
          value: props.value,
          requestChange: props.onChange
        };
      }
    }, {
      key: 'setKeyboardFocused',
      value: function setKeyboardFocused(keyboardFocused) {
        this.setState({
          isKeyboardFocused: keyboardFocused
        });
      }
    }, {
      key: 'getFilteredChildren',
      value: function getFilteredChildren(children) {
        var filteredChildren = [];
        _react2.default.Children.forEach(children, function (child) {
          if (child) {
            filteredChildren.push(child);
          }
        });
        return filteredChildren;
      }
    }, {
      key: 'cloneMenuItem',
      value: function cloneMenuItem(child, childIndex, styles, index) {
        var _this2 = this;

        var childIsDisabled = child.props.disabled;

        var selectedChildStyles = {};
        if (!childIsDisabled) {
          var selected = this.isChildSelected(child, this.props);

          if (selected) {
            (0, _simpleAssign2.default)(selectedChildStyles, styles.selectedMenuItem, this.props.selectedMenuItemStyle);
          }
        }
        var mergedChildStyles = (0, _simpleAssign2.default)({}, child.props.style, this.props.menuItemStyle, selectedChildStyles);

        var extraProps = {
          desktop: this.props.desktop,
          style: mergedChildStyles
        };
        if (!childIsDisabled) {
          var isFocused = childIndex === this.state.focusIndex;
          var focusState = 'none';
          if (isFocused) {
            focusState = this.state.isKeyboardFocused ? 'keyboard-focused' : 'focused';
          }

          (0, _simpleAssign2.default)(extraProps, {
            focusState: focusState,
            onClick: function onClick(event) {
              _this2.handleMenuItemClick(event, child, index);
              if (child.props.onClick) child.props.onClick(event);
            },
            ref: isFocused ? 'focusedMenuItem' : null
          });
        }
        return _react2.default.cloneElement(child, extraProps);
      }
    }, {
      key: 'decrementKeyboardFocusIndex',
      value: function decrementKeyboardFocusIndex(event) {
        var index = this.state.focusIndex;

        index--;
        if (index < 0) index = 0;

        this.setFocusIndex(event, index, true);
      }
    }, {
      key: 'getMenuItemCount',
      value: function getMenuItemCount(filteredChildren) {
        var menuItemCount = 0;
        filteredChildren.forEach(function (child) {
          var childIsADivider = child.type && child.type.muiName === 'Divider';
          var childIsDisabled = child.props.disabled;
          if (!childIsADivider && !childIsDisabled) menuItemCount++;
        });
        return menuItemCount;
      }
    }, {
      key: 'getLastSelectedIndex',
      value: function getLastSelectedIndex(props, filteredChildren) {
        var _this3 = this;

        var selectedIndex = -1;
        var menuItemIndex = 0;

        filteredChildren.forEach(function (child) {
          var childIsADivider = child.type && child.type.muiName === 'Divider';

          if (_this3.isChildSelected(child, props)) selectedIndex = menuItemIndex;
          if (!childIsADivider) menuItemIndex++;
        });

        return selectedIndex;
      }
    }, {
      key: 'setFocusIndexStartsWith',
      value: function setFocusIndexStartsWith(event, keys, filteredChildren) {
        var foundIndex = -1;
        _react2.default.Children.forEach(filteredChildren, function (child, index) {
          if (foundIndex >= 0) {
            return;
          }
          var primaryText = child.props.primaryText;

          if (typeof primaryText === 'string' && primaryText.substr(0, keys.length).toLowerCase() === keys.toLowerCase()) {
            foundIndex = index;
          }
        });
        if (foundIndex >= 0) {
          this.setFocusIndex(event, foundIndex, true);
          return true;
        }
        return false;
      }
    }, {
      key: 'handleMenuItemClick',
      value: function handleMenuItemClick(event, item, index) {
        var children = this.props.children;
        var multiple = this.props.multiple;
        var valueLink = this.getValueLink(this.props);
        var menuValue = valueLink.value;
        var itemValue = item.props.value;
        var focusIndex = _react2.default.isValidElement(children) ? 0 : children.indexOf(item);

        this.setFocusIndex(event, focusIndex, false);

        if (multiple) {
          menuValue = menuValue || [];

          var itemIndex = menuValue.indexOf(itemValue);

          var _menuValue = menuValue,
              _menuValue2 = (0, _toArray3.default)(_menuValue),
              newMenuValue = _menuValue2.slice(0);

          if (itemIndex === -1) {
            newMenuValue.push(itemValue);
          } else {
            newMenuValue.splice(itemIndex, 1);
          }

          valueLink.requestChange(event, newMenuValue);
        } else if (!multiple && itemValue !== menuValue) {
          valueLink.requestChange(event, itemValue);
        }

        this.props.onItemClick(event, item, index);
      }
    }, {
      key: 'incrementKeyboardFocusIndex',
      value: function incrementKeyboardFocusIndex(event, filteredChildren) {
        var index = this.state.focusIndex;
        var maxIndex = this.getMenuItemCount(filteredChildren) - 1;

        index++;
        if (index > maxIndex) index = maxIndex;

        this.setFocusIndex(event, index, true);
      }
    }, {
      key: 'isChildSelected',
      value: function isChildSelected(child, props) {
        var menuValue = this.getValueLink(props).value;
        var childValue = child.props.value;

        if (props.multiple) {
          return menuValue && menuValue.length && menuValue.indexOf(childValue) !== -1;
        } else {
          return child.props.hasOwnProperty('value') && menuValue === childValue;
        }
      }
    }, {
      key: 'setFocusIndex',
      value: function setFocusIndex(event, newIndex, isKeyboardFocused) {
        if (this.props.onMenuItemFocusChange) {
          // Do this even if `newIndex === this.state.focusIndex` to allow users
          // to detect up-arrow on the first MenuItem or down-arrow on the last.
          this.props.onMenuItemFocusChange(event, newIndex);
        }
        this.setState({
          focusIndex: newIndex,
          isKeyboardFocused: isKeyboardFocused
        });
      }
    }, {
      key: 'setScollPosition',
      value: function setScollPosition() {
        var desktop = this.props.desktop;
        var focusedMenuItem = this.refs.focusedMenuItem;
        var menuItemHeight = desktop ? 32 : 48;

        if (focusedMenuItem) {
          var selectedOffSet = _reactDom2.default.findDOMNode(focusedMenuItem).offsetTop;

          // Make the focused item be the 2nd item in the list the user sees
          var scrollTop = selectedOffSet - menuItemHeight;
          if (scrollTop < menuItemHeight) scrollTop = 0;

          _reactDom2.default.findDOMNode(this.refs.scrollContainer).scrollTop = scrollTop;
        }
      }
    }, {
      key: 'cancelScrollEvent',
      value: function cancelScrollEvent(event) {
        event.stopPropagation();
        event.preventDefault();
        return false;
      }
    }, {
      key: 'setWidth',
      value: function setWidth() {
        var el = _reactDom2.default.findDOMNode(this);
        var listEl = _reactDom2.default.findDOMNode(this.refs.list);
        var elWidth = el.offsetWidth;
        var keyWidth = this.state.keyWidth;
        var minWidth = keyWidth * 1.5;
        var keyIncrements = elWidth / keyWidth;
        var newWidth = void 0;

        keyIncrements = keyIncrements <= 1.5 ? 1.5 : Math.ceil(keyIncrements);
        newWidth = keyIncrements * keyWidth;

        if (newWidth < minWidth) newWidth = minWidth;

        el.style.width = newWidth + 'px';
        listEl.style.width = newWidth + 'px';
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        var _props = this.props,
            autoWidth = _props.autoWidth,
            children = _props.children,
            desktop = _props.desktop,
            disableAutoFocus = _props.disableAutoFocus,
            initiallyKeyboardFocused = _props.initiallyKeyboardFocused,
            listStyle = _props.listStyle,
            maxHeight = _props.maxHeight,
            multiple = _props.multiple,
            onItemClick = _props.onItemClick,
            onEscKeyDown = _props.onEscKeyDown,
            onMenuItemFocusChange = _props.onMenuItemFocusChange,
            selectedMenuItemStyle = _props.selectedMenuItemStyle,
            menuItemStyle = _props.menuItemStyle,
            style = _props.style,
            value = _props.value,
            valueLink = _props.valueLink,
            width = _props.width,
            other = (0, _objectWithoutProperties3.default)(_props, ['autoWidth', 'children', 'desktop', 'disableAutoFocus', 'initiallyKeyboardFocused', 'listStyle', 'maxHeight', 'multiple', 'onItemClick', 'onEscKeyDown', 'onMenuItemFocusChange', 'selectedMenuItemStyle', 'menuItemStyle', 'style', 'value', 'valueLink', 'width']);
        var prepareStyles = this.context.muiTheme.prepareStyles;

        var styles = getStyles(this.props, this.context);

        var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
        var mergedListStyles = (0, _simpleAssign2.default)(styles.list, listStyle);

        var filteredChildren = this.getFilteredChildren(children);

        var menuItemIndex = 0;
        var newChildren = _react2.default.Children.map(filteredChildren, function (child, index) {
          var childIsDisabled = child.props.disabled;
          var childName = child.type ? child.type.muiName : '';
          var newChild = child;

          switch (childName) {
            case 'MenuItem':
              newChild = _this4.cloneMenuItem(child, menuItemIndex, styles, index);
              break;

            case 'Divider':
              newChild = _react2.default.cloneElement(child, {
                style: (0, _simpleAssign2.default)({}, styles.divider, child.props.style)
              });
              break;
          }

          if (childName === 'MenuItem' && !childIsDisabled) {
            menuItemIndex++;
          }

          return newChild;
        });

        return _react2.default.createElement(
          _ClickAwayListener2.default,
          { onClickAway: this.handleClickAway },
          _react2.default.createElement(
            'div',
            {
              onKeyDown: this.handleKeyDown,
              onWheel: this.handleOnWheel,
              style: prepareStyles(mergedRootStyles),
              ref: 'scrollContainer',
              role: 'presentation'
            },
            _react2.default.createElement(
              _List2.default,
              (0, _extends3.default)({}, other, {
                ref: 'list',
                style: mergedListStyles,
                role: 'menu'
              }),
              newChildren
            )
          )
        );
      }
    }]);
    return Menu;
  }(React__default.Component);

  Menu.defaultProps = {
    autoWidth: true,
    desktop: false,
    disableAutoFocus: false,
    initiallyKeyboardFocused: false,
    maxHeight: null,
    multiple: false,
    onChange: function onChange() {},
    onEscKeyDown: function onEscKeyDown() {},
    onItemClick: function onItemClick() {},
    onKeyDown: function onKeyDown() {}
  };
  Menu.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };

  var _initialiseProps = function _initialiseProps() {
    var _this5 = this;

    this.handleClickAway = function (event) {
      if (event.defaultPrevented) {
        return;
      }

      var focusIndex = _this5.state.focusIndex;

      if (focusIndex < 0) {
        return;
      }

      var filteredChildren = _this5.getFilteredChildren(_this5.props.children);
      var focusedItem = filteredChildren[focusIndex];
      if (!!focusedItem && focusedItem.props.menuItems && focusedItem.props.menuItems.length > 0) {
        return;
      }

      _this5.setFocusIndex(event, -1, false);
    };

    this.handleKeyDown = function (event) {
      var filteredChildren = _this5.getFilteredChildren(_this5.props.children);
      var key = (0, _keycode2.default)(event);
      switch (key) {
        case 'down':
          event.preventDefault();
          _this5.incrementKeyboardFocusIndex(event, filteredChildren);
          break;
        case 'esc':
          _this5.props.onEscKeyDown(event);
          break;
        case 'tab':
          event.preventDefault();
          if (event.shiftKey) {
            _this5.decrementKeyboardFocusIndex(event);
          } else {
            _this5.incrementKeyboardFocusIndex(event, filteredChildren);
          }
          break;
        case 'up':
          event.preventDefault();
          _this5.decrementKeyboardFocusIndex(event);
          break;
        default:
          if (key && key.length === 1) {
            var hotKeys = _this5.hotKeyHolder.append(key);
            if (_this5.setFocusIndexStartsWith(event, hotKeys, filteredChildren)) {
              event.preventDefault();
            }
          }
      }
      _this5.props.onKeyDown(event);
    };

    this.handleOnWheel = function (event) {
      var scrollContainer = _this5.refs.scrollContainer;
      // Only scroll lock if the the Menu is scrollable.
      if (scrollContainer.scrollHeight <= scrollContainer.clientHeight) return;

      var scrollTop = scrollContainer.scrollTop,
          scrollHeight = scrollContainer.scrollHeight,
          clientHeight = scrollContainer.clientHeight;

      var wheelDelta = event.deltaY;
      var isDeltaPositive = wheelDelta > 0;

      if (isDeltaPositive && wheelDelta > scrollHeight - clientHeight - scrollTop) {
        scrollContainer.scrollTop = scrollHeight;
        return _this5.cancelScrollEvent(event);
      } else if (!isDeltaPositive && -wheelDelta > scrollTop) {
        scrollContainer.scrollTop = 0;
        return _this5.cancelScrollEvent(event);
      }
    };
  };

  Menu.propTypes =  {};
  exports.default = Menu;
  });

  unwrapExports(Menu_1);

  var MenuItem_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _reactDom2 = _interopRequireDefault(reactDom);



  var _shallowEqual2 = _interopRequireDefault(shallowEqual$1);



  var _Popover2 = _interopRequireDefault(Popover_1);



  var _check2 = _interopRequireDefault(check$1);



  var _ListItem2 = _interopRequireDefault(ListItem_1);



  var _Menu2 = _interopRequireDefault(Menu_1);



  var _propTypes4 = _interopRequireDefault(propTypes$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var nestedMenuStyle = {
    position: 'relative'
  };

  function getStyles(props, context) {
    var disabledColor = context.muiTheme.baseTheme.palette.disabledColor;
    var textColor = context.muiTheme.baseTheme.palette.textColor;
    var indent = props.desktop ? 64 : 72;
    var sidePadding = props.desktop ? 24 : 16;

    var styles = {
      root: {
        color: props.disabled ? disabledColor : textColor,
        cursor: props.disabled ? 'default' : 'pointer',
        minHeight: props.desktop ? '32px' : '48px',
        lineHeight: props.desktop ? '32px' : '48px',
        fontSize: props.desktop ? 15 : 16,
        whiteSpace: 'nowrap'
      },

      innerDivStyle: {
        paddingLeft: props.leftIcon || props.insetChildren || props.checked ? indent : sidePadding,
        paddingRight: props.rightIcon ? indent : sidePadding,
        paddingBottom: 0,
        paddingTop: 0
      },

      secondaryText: {
        float: 'right'
      },

      leftIconDesktop: {
        margin: 0,
        left: 24,
        top: 4
      },

      rightIconDesktop: {
        margin: 0,
        right: 24,
        top: 4,
        fill: context.muiTheme.menuItem.rightIconDesktopFill
      }
    };

    return styles;
  }

  var MenuItem = function (_Component) {
    (0, _inherits3.default)(MenuItem, _Component);

    function MenuItem() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, MenuItem);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MenuItem.__proto__ || (0, _getPrototypeOf2.default)(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        open: false
      }, _this.cloneMenuItem = function (item) {
        return _react2.default.cloneElement(item, {
          onClick: function onClick(event) {
            if (!item.props.menuItems) {
              _this.handleRequestClose();
            }

            if (item.props.onClick) {
              item.props.onClick(event);
            }
          }
        });
      }, _this.handleClick = function (event) {
        event.preventDefault();

        _this.setState({
          open: true,
          anchorEl: _reactDom2.default.findDOMNode(_this)
        });

        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
      }, _this.handleRequestClose = function () {
        _this.setState({
          open: false,
          anchorEl: null
        });
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(MenuItem, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.applyFocusState();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.state.open && nextProps.focusState === 'none') {
          this.handleRequestClose();
        }
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.applyFocusState();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.state.open) {
          this.setState({
            open: false
          });
        }
      }
    }, {
      key: 'applyFocusState',
      value: function applyFocusState() {
        this.refs.listItem.applyFocusState(this.props.focusState);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            checked = _props.checked,
            children = _props.children,
            desktop = _props.desktop,
            disabled = _props.disabled,
            focusState = _props.focusState,
            innerDivStyle = _props.innerDivStyle,
            insetChildren = _props.insetChildren,
            leftIcon = _props.leftIcon,
            menuItems = _props.menuItems,
            rightIcon = _props.rightIcon,
            secondaryText = _props.secondaryText,
            style = _props.style,
            animation = _props.animation,
            anchorOrigin = _props.anchorOrigin,
            targetOrigin = _props.targetOrigin,
            value = _props.value,
            other = (0, _objectWithoutProperties3.default)(_props, ['checked', 'children', 'desktop', 'disabled', 'focusState', 'innerDivStyle', 'insetChildren', 'leftIcon', 'menuItems', 'rightIcon', 'secondaryText', 'style', 'animation', 'anchorOrigin', 'targetOrigin', 'value']);
        var prepareStyles = this.context.muiTheme.prepareStyles;

        var styles = getStyles(this.props, this.context);
        var mergedRootStyles = (0, _simpleAssign2.default)(styles.root, style);
        var mergedInnerDivStyles = (0, _simpleAssign2.default)(styles.innerDivStyle, innerDivStyle);

        // Left Icon
        var leftIconElement = leftIcon ? leftIcon : checked ? _react2.default.createElement(_check2.default, null) : null;
        if (leftIconElement) {
          var mergedLeftIconStyles = desktop ? (0, _simpleAssign2.default)(styles.leftIconDesktop, leftIconElement.props.style) : leftIconElement.props.style;
          leftIconElement = _react2.default.cloneElement(leftIconElement, { style: mergedLeftIconStyles });
        }

        // Right Icon
        var rightIconElement = void 0;
        if (rightIcon) {
          var mergedRightIconStyles = desktop ? (0, _simpleAssign2.default)(styles.rightIconDesktop, rightIcon.props.style) : rightIcon.props.style;
          rightIconElement = _react2.default.cloneElement(rightIcon, { style: mergedRightIconStyles });
        }

        // Secondary Text
        var secondaryTextElement = void 0;
        if (secondaryText) {
          var secondaryTextIsAnElement = _react2.default.isValidElement(secondaryText);
          var mergedSecondaryTextStyles = secondaryTextIsAnElement ? (0, _simpleAssign2.default)(styles.secondaryText, secondaryText.props.style) : null;

          secondaryTextElement = secondaryTextIsAnElement ? _react2.default.cloneElement(secondaryText, { style: mergedSecondaryTextStyles }) : _react2.default.createElement(
            'div',
            { style: prepareStyles(styles.secondaryText) },
            secondaryText
          );
        }
        var childMenuPopover = void 0;
        if (menuItems) {
          childMenuPopover = _react2.default.createElement(
            _Popover2.default,
            {
              animation: animation,
              anchorOrigin: anchorOrigin,
              anchorEl: this.state.anchorEl,
              open: this.state.open,
              targetOrigin: targetOrigin,
              useLayerForClickAway: false,
              onRequestClose: this.handleRequestClose
            },
            _react2.default.createElement(
              _Menu2.default,
              { desktop: desktop, disabled: disabled, style: nestedMenuStyle },
              _react2.default.Children.map(menuItems, this.cloneMenuItem)
            )
          );
          other.onClick = this.handleClick;
        }

        return _react2.default.createElement(
          _ListItem2.default,
          (0, _extends3.default)({}, other, {
            disabled: disabled,
            hoverColor: this.context.muiTheme.menuItem.hoverColor,
            innerDivStyle: mergedInnerDivStyles,
            insetChildren: insetChildren,
            leftIcon: leftIconElement,
            ref: 'listItem',
            rightIcon: rightIconElement,
            role: 'menuitem',
            style: mergedRootStyles
          }),
          children,
          secondaryTextElement,
          childMenuPopover
        );
      }
    }]);
    return MenuItem;
  }(React__default.Component);

  MenuItem.muiName = 'MenuItem';
  MenuItem.defaultProps = {
    anchorOrigin: { horizontal: 'right', vertical: 'top' },
    checked: false,
    desktop: false,
    disabled: false,
    focusState: 'none',
    insetChildren: false,
    targetOrigin: { horizontal: 'left', vertical: 'top' }
  };
  MenuItem.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  MenuItem.propTypes =  {};
  exports.default = MenuItem;
  });

  unwrapExports(MenuItem_1);

  var MenuItem = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;



  var _MenuItem2 = _interopRequireDefault(MenuItem_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _MenuItem2.default;
  });

  var MuiMenuItem = unwrapExports(MenuItem);

  var styles$3 = {
    root: {
      fontSize: 12
    }
  };
  var MenuItem$1 =
  /*#__PURE__*/
  function (_Component) {
    _inherits(MenuItem, _Component);

    function MenuItem() {
      _classCallCheck(this, MenuItem);

      return _possibleConstructorReturn(this, _getPrototypeOf(MenuItem).apply(this, arguments));
    }

    _createClass(MenuItem, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            style = _this$props.style,
            innerDivStyle = _this$props.innerDivStyle,
            props = _objectWithoutProperties(_this$props, ["style", "innerDivStyle"]);

        return React__default.createElement(MuiMenuItem, _extends({}, props, {
          autoWidth: false,
          style: _.defaults(style, styles$3.root),
          innerDivStyle: _.defaults(innerDivStyle, styles$3.innerDiv)
        }));
      }
    }]);

    return MenuItem;
  }(React.Component);

  var EnhancedTextarea_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _reactEventListener2 = _interopRequireDefault(reactEventListener_cjs);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var rowsHeight = 24;

  function getStyles(props, context, state) {
    return {
      root: {
        position: 'relative' // because the shadow has position: 'absolute'
      },
      textarea: {
        height: state.height,
        width: '100%',
        resize: 'none',
        font: 'inherit',
        padding: 0,
        cursor: 'inherit'
      },
      shadow: {
        resize: 'none',
        // Overflow also needed to here to remove the extra row
        // added to textareas in Firefox.
        overflow: 'hidden',
        // Visibility needed to hide the extra text area on ipads
        visibility: 'hidden',
        position: 'absolute',
        height: 'auto'
      }
    };
  }

  var EnhancedTextarea = function (_Component) {
    (0, _inherits3.default)(EnhancedTextarea, _Component);

    function EnhancedTextarea() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, EnhancedTextarea);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedTextarea.__proto__ || (0, _getPrototypeOf2.default)(EnhancedTextarea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        height: null
      }, _this.handleResize = function (event) {
        _this.syncHeightWithShadow(_this.props.value, event);
      }, _this.handleChange = function (event) {
        if (!_this.props.hasOwnProperty('value')) {
          _this.syncHeightWithShadow(event.target.value);
        }

        if (_this.props.hasOwnProperty('valueLink')) {
          _this.props.valueLink.requestChange(event.target.value);
        }

        if (_this.props.onChange) {
          _this.props.onChange(event);
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(EnhancedTextarea, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.setState({
          height: this.props.rows * rowsHeight
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.syncHeightWithShadow(this.props.value);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value || nextProps.rowsMax !== this.props.rowsMax) {
          this.syncHeightWithShadow(nextProps.value, null, nextProps);
        }
      }
    }, {
      key: 'getInputNode',
      value: function getInputNode() {
        return this.refs.input;
      }
    }, {
      key: 'setValue',
      value: function setValue(value) {
        this.getInputNode().value = value;
        this.syncHeightWithShadow(value);
      }
    }, {
      key: 'syncHeightWithShadow',
      value: function syncHeightWithShadow(newValue, event, props) {
        var shadow = this.refs.shadow;
        var displayText = this.props.hintText && (newValue === '' || newValue === undefined || newValue === null) ? this.props.hintText : newValue;

        if (displayText !== undefined) {
          shadow.value = displayText;
        }

        var newHeight = shadow.scrollHeight;

        // Guarding for jsdom, where scrollHeight isn't present.
        // See https://github.com/tmpvar/jsdom/issues/1013
        if (newHeight === undefined) return;

        props = props || this.props;

        if (props.rowsMax >= props.rows) {
          newHeight = Math.min(props.rowsMax * rowsHeight, newHeight);
        }

        newHeight = Math.max(newHeight, rowsHeight);

        if (this.state.height !== newHeight) {
          var input = this.refs.input;
          var cursorPosition = input.selectionEnd;
          this.setState({
            height: newHeight
          }, function () {
            input.setSelectionRange(cursorPosition, cursorPosition);
          });

          if (props.onHeightChange) {
            props.onHeightChange(event, newHeight);
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            onChange = _props.onChange,
            onHeightChange = _props.onHeightChange,
            rows = _props.rows,
            rowsMax = _props.rowsMax,
            shadowStyle = _props.shadowStyle,
            style = _props.style,
            hintText = _props.hintText,
            textareaStyle = _props.textareaStyle,
            valueLink = _props.valueLink,
            other = (0, _objectWithoutProperties3.default)(_props, ['onChange', 'onHeightChange', 'rows', 'rowsMax', 'shadowStyle', 'style', 'hintText', 'textareaStyle', 'valueLink']);
        var prepareStyles = this.context.muiTheme.prepareStyles;

        var styles = getStyles(this.props, this.context, this.state);
        var rootStyles = (0, _simpleAssign2.default)(styles.root, style);
        var textareaStyles = (0, _simpleAssign2.default)(styles.textarea, textareaStyle);
        var shadowStyles = (0, _simpleAssign2.default)({}, textareaStyles, styles.shadow, shadowStyle);
        var props = {};

        if (this.props.hasOwnProperty('valueLink')) {
          other.value = valueLink.value;
          props.valueLink = valueLink;
        }

        return _react2.default.createElement(
          'div',
          { style: prepareStyles(rootStyles) },
          _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
          _react2.default.createElement('textarea', (0, _extends3.default)({
            ref: 'shadow',
            style: prepareStyles(shadowStyles),
            tabIndex: '-1',
            rows: this.props.rows,
            defaultValue: this.props.defaultValue,
            readOnly: true,
            value: this.props.value
          }, props)),
          _react2.default.createElement('textarea', (0, _extends3.default)({}, other, {
            ref: 'input',
            rows: this.props.rows,
            style: prepareStyles(textareaStyles),
            onChange: this.handleChange
          }))
        );
      }
    }]);
    return EnhancedTextarea;
  }(React__default.Component);

  EnhancedTextarea.defaultProps = {
    rows: 1
  };
  EnhancedTextarea.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  EnhancedTextarea.propTypes =  {};
  exports.default = EnhancedTextarea;
  });

  unwrapExports(EnhancedTextarea_1);

  var TextFieldHint_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _transitions2 = _interopRequireDefault(transitions);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function getStyles(props) {
    var hintColor = props.muiTheme.textField.hintColor,
        show = props.show;


    return {
      root: {
        position: 'absolute',
        opacity: show ? 1 : 0,
        color: hintColor,
        transition: _transitions2.default.easeOut(),
        bottom: 12
      }
    };
  }

  var TextFieldHint = function TextFieldHint(props) {
    var prepareStyles = props.muiTheme.prepareStyles,
        style = props.style,
        text = props.text;


    var styles = getStyles(props);

    return _react2.default.createElement(
      'div',
      { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
      text
    );
  };

  TextFieldHint.propTypes =  {};

  TextFieldHint.defaultProps = {
    show: true
  };

  exports.default = TextFieldHint;
  });

  unwrapExports(TextFieldHint_1);

  var TextFieldLabel_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _transitions2 = _interopRequireDefault(transitions);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function getStyles(props) {
    var defaultStyles = {
      position: 'absolute',
      lineHeight: '22px',
      top: 38,
      transition: _transitions2.default.easeOut(),
      zIndex: 1, // Needed to display label above Chrome's autocomplete field background
      transform: 'scale(1) translate(0, 0)',
      transformOrigin: 'left top',
      pointerEvents: 'auto',
      userSelect: 'none'
    };

    var shrinkStyles = props.shrink ? (0, _simpleAssign2.default)({
      transform: 'scale(0.75) translate(0, -28px)',
      pointerEvents: 'none'
    }, props.shrinkStyle) : null;

    return {
      root: (0, _simpleAssign2.default)(defaultStyles, props.style, shrinkStyles)
    };
  }

  var TextFieldLabel = function TextFieldLabel(props) {
    var muiTheme = props.muiTheme,
        className = props.className,
        children = props.children,
        htmlFor = props.htmlFor,
        onClick = props.onClick;
    var prepareStyles = muiTheme.prepareStyles;

    var styles = getStyles(props);

    return _react2.default.createElement(
      'label',
      {
        className: className,
        style: prepareStyles(styles.root),
        htmlFor: htmlFor,
        onClick: onClick
      },
      children
    );
  };

  TextFieldLabel.propTypes =  {};

  TextFieldLabel.defaultProps = {
    disabled: false,
    shrink: false
  };

  exports.default = TextFieldLabel;
  });

  unwrapExports(TextFieldLabel_1);

  var TextFieldUnderline_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _transitions2 = _interopRequireDefault(transitions);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var propTypes$1 = {
    /**
     * True if the parent `TextField` is disabled.
     */
    disabled: _propTypes2.default.bool,
    /**
     * Override the inline-styles of the underline when parent `TextField` is disabled.
     */
    disabledStyle: _propTypes2.default.object,
    /**
     * True if the parent `TextField` has an error.
     */
    error: _propTypes2.default.bool,
    /**
     * Override the inline-styles of the underline when parent `TextField` has an error.
     */
    errorStyle: _propTypes2.default.object,
    /**
     * True if the parent `TextField` is focused.
     */
    focus: _propTypes2.default.bool,
    /**
     * Override the inline-styles of the underline when parent `TextField` is focused.
     */
    focusStyle: _propTypes2.default.object,
    /**
     * @ignore
     * The material-ui theme applied to this component.
     */
    muiTheme: _propTypes2.default.object.isRequired,
    /**
     * Override the inline-styles of the root element.
     */
    style: _propTypes2.default.object
  };

  var defaultProps = {
    disabled: false,
    disabledStyle: {},
    error: false,
    errorStyle: {},
    focus: false,
    focusStyle: {},
    style: {}
  };

  var TextFieldUnderline = function TextFieldUnderline(props) {
    var disabled = props.disabled,
        disabledStyle = props.disabledStyle,
        error = props.error,
        errorStyle = props.errorStyle,
        focus = props.focus,
        focusStyle = props.focusStyle,
        muiTheme = props.muiTheme,
        style = props.style;
    var errorStyleColor = errorStyle.color;
    var prepareStyles = muiTheme.prepareStyles,
        _muiTheme$textField = muiTheme.textField,
        borderColor = _muiTheme$textField.borderColor,
        disabledTextColor = _muiTheme$textField.disabledTextColor,
        errorColor = _muiTheme$textField.errorColor,
        focusColor = _muiTheme$textField.focusColor;


    var styles = {
      root: {
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: borderColor,
        bottom: 8,
        boxSizing: 'content-box',
        margin: 0,
        position: 'absolute',
        width: '100%'
      },
      disabled: {
        borderBottomStyle: 'dotted',
        borderBottomWidth: 2,
        borderColor: disabledTextColor
      },
      focus: {
        borderBottomStyle: 'solid',
        borderBottomWidth: 2,
        borderColor: focusColor,
        transform: 'scaleX(0)',
        transition: _transitions2.default.easeOut()
      },
      error: {
        borderColor: errorStyleColor ? errorStyleColor : errorColor,
        transform: 'scaleX(1)'
      }
    };

    var underline = (0, _simpleAssign2.default)({}, styles.root, style);
    var focusedUnderline = (0, _simpleAssign2.default)({}, underline, styles.focus, focusStyle);

    if (disabled) underline = (0, _simpleAssign2.default)({}, underline, styles.disabled, disabledStyle);
    if (focus) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, { transform: 'scaleX(1)' });
    if (error) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, styles.error);

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('hr', { 'aria-hidden': 'true', style: prepareStyles(underline) }),
      _react2.default.createElement('hr', { 'aria-hidden': 'true', style: prepareStyles(focusedUnderline) })
    );
  };

  TextFieldUnderline.propTypes =  {};
  TextFieldUnderline.defaultProps = defaultProps;

  exports.default = TextFieldUnderline;
  });

  unwrapExports(TextFieldUnderline_1);

  var TextField_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _reactDom2 = _interopRequireDefault(reactDom);



  var _shallowEqual2 = _interopRequireDefault(shallowEqual$1);



  var _transitions2 = _interopRequireDefault(transitions);



  var _EnhancedTextarea2 = _interopRequireDefault(EnhancedTextarea_1);



  var _TextFieldHint2 = _interopRequireDefault(TextFieldHint_1);



  var _TextFieldLabel2 = _interopRequireDefault(TextFieldLabel_1);



  var _TextFieldUnderline2 = _interopRequireDefault(TextFieldUnderline_1);



  var _warning2 = _interopRequireDefault(warning_1$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var getStyles = function getStyles(props, context, state) {
    var _context$muiTheme = context.muiTheme,
        baseTheme = _context$muiTheme.baseTheme,
        _context$muiTheme$tex = _context$muiTheme.textField,
        floatingLabelColor = _context$muiTheme$tex.floatingLabelColor,
        focusColor = _context$muiTheme$tex.focusColor,
        textColor = _context$muiTheme$tex.textColor,
        disabledTextColor = _context$muiTheme$tex.disabledTextColor,
        backgroundColor = _context$muiTheme$tex.backgroundColor,
        errorColor = _context$muiTheme$tex.errorColor;


    var styles = {
      root: {
        fontSize: 16,
        lineHeight: '24px',
        width: props.fullWidth ? '100%' : 256,
        height: (props.rows - 1) * 24 + (props.floatingLabelText ? 72 : 48),
        display: 'inline-block',
        position: 'relative',
        backgroundColor: backgroundColor,
        fontFamily: baseTheme.fontFamily,
        transition: _transitions2.default.easeOut('200ms', 'height'),
        cursor: props.disabled ? 'not-allowed' : 'auto'
      },
      error: {
        position: 'relative',
        bottom: 2,
        fontSize: 12,
        lineHeight: '12px',
        color: errorColor,
        transition: _transitions2.default.easeOut()
      },
      floatingLabel: {
        color: props.disabled ? disabledTextColor : floatingLabelColor,
        pointerEvents: 'none'
      },
      input: {
        padding: 0,
        position: 'relative',
        width: '100%',
        border: 'none',
        outline: 'none',
        backgroundColor: 'rgba(0,0,0,0)',
        color: props.disabled ? disabledTextColor : textColor,
        cursor: 'inherit',
        font: 'inherit',
        WebkitOpacity: 1,
        WebkitTapHighlightColor: 'rgba(0,0,0,0)' // Remove mobile color flashing (deprecated style).
      },
      inputNative: {
        appearance: 'textfield' // Improve type search style.
      }
    };

    styles.textarea = (0, _simpleAssign2.default)({}, styles.input, {
      marginTop: props.floatingLabelText ? 36 : 12,
      marginBottom: props.floatingLabelText ? -36 : -12,
      boxSizing: 'border-box',
      font: 'inherit'
    });

    // Do not assign a height to the textarea as he handles it on his own.
    styles.input.height = '100%';

    if (state.isFocused) {
      styles.floatingLabel.color = focusColor;
    }

    if (props.floatingLabelText) {
      styles.input.boxSizing = 'border-box';

      if (!props.multiLine) {
        styles.input.marginTop = 14;
      }

      if (state.errorText) {
        styles.error.bottom = !props.multiLine ? styles.error.fontSize + 3 : 3;
      }
    }

    if (state.errorText) {
      if (state.isFocused) {
        styles.floatingLabel.color = styles.error.color;
      }
    }

    return styles;
  };

  /**
   * Check if a value is valid to be displayed inside an input.
   *
   * @param The value to check.
   * @returns True if the string provided is valid, false otherwise.
   */
  function isValid(value) {
    return value !== '' && value !== undefined && value !== null && !(Array.isArray(value) && value.length === 0);
  }

  var TextField = function (_Component) {
    (0, _inherits3.default)(TextField, _Component);

    function TextField() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, TextField);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextField.__proto__ || (0, _getPrototypeOf2.default)(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        isFocused: false,
        errorText: undefined,
        hasValue: false
      }, _this.handleInputBlur = function (event) {
        _this.setState({ isFocused: false });
        if (_this.props.onBlur) {
          _this.props.onBlur(event);
        }
      }, _this.handleInputChange = function (event) {
        if (!_this.props.hasOwnProperty('value')) {
          _this.setState({ hasValue: isValid(event.target.value) });
        }
        if (_this.props.onChange) {
          _this.props.onChange(event, event.target.value);
        }
      }, _this.handleInputFocus = function (event) {
        if (_this.props.disabled) {
          return;
        }
        _this.setState({ isFocused: true });
        if (_this.props.onFocus) {
          _this.props.onFocus(event);
        }
      }, _this.handleHeightChange = function (event, height) {
        var newHeight = height + 24;
        if (_this.props.floatingLabelText) {
          newHeight += 24;
        }
        _reactDom2.default.findDOMNode(_this).style.height = newHeight + 'px';
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(TextField, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _props = this.props,
            children = _props.children,
            name = _props.name,
            hintText = _props.hintText,
            floatingLabelText = _props.floatingLabelText,
            id = _props.id;


        var propsLeaf = children ? children.props : this.props;

        this.setState({
          errorText: this.props.errorText,
          hasValue: isValid(propsLeaf.value) || isValid(propsLeaf.defaultValue)
        });

        var uniqueId = name + '-' + hintText + '-' + floatingLabelText + '-' + Math.floor(Math.random() * 0xFFFF);
        this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.disabled && !this.props.disabled) {
          this.setState({
            isFocused: false
          });
        }

        if (nextProps.errorText !== this.props.errorText) {
          this.setState({
            errorText: nextProps.errorText
          });
        }

        if (nextProps.children && nextProps.children.props) {
          nextProps = nextProps.children.props;
        }

        if (nextProps.hasOwnProperty('value')) {
          var hasValue = isValid(nextProps.value);

          this.setState({
            hasValue: hasValue
          });
        }
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
      }
    }, {
      key: 'blur',
      value: function blur() {
        if (this.input) {
          this.getInputNode().blur();
        }
      }
    }, {
      key: 'focus',
      value: function focus() {
        if (this.input) {
          this.getInputNode().focus();
        }
      }
    }, {
      key: 'select',
      value: function select() {
        if (this.input) {
          this.getInputNode().select();
        }
      }
    }, {
      key: 'getValue',
      value: function getValue() {
        return this.input ? this.getInputNode().value : undefined;
      }
    }, {
      key: 'getInputNode',
      value: function getInputNode() {
        return this.props.children || this.props.multiLine ? this.input.getInputNode() : _reactDom2.default.findDOMNode(this.input);
      }
    }, {
      key: '_isControlled',
      value: function _isControlled() {
        return this.props.hasOwnProperty('value');
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props2 = this.props,
            children = _props2.children,
            className = _props2.className,
            disabled = _props2.disabled,
            errorStyle = _props2.errorStyle,
            errorText = _props2.errorText,
            floatingLabelFixed = _props2.floatingLabelFixed,
            floatingLabelFocusStyle = _props2.floatingLabelFocusStyle,
            floatingLabelShrinkStyle = _props2.floatingLabelShrinkStyle,
            floatingLabelStyle = _props2.floatingLabelStyle,
            floatingLabelText = _props2.floatingLabelText,
            fullWidth = _props2.fullWidth,
            hintText = _props2.hintText,
            hintStyle = _props2.hintStyle,
            id = _props2.id,
            inputStyle = _props2.inputStyle,
            multiLine = _props2.multiLine,
            onBlur = _props2.onBlur,
            onChange = _props2.onChange,
            onFocus = _props2.onFocus,
            style = _props2.style,
            type = _props2.type,
            underlineDisabledStyle = _props2.underlineDisabledStyle,
            underlineFocusStyle = _props2.underlineFocusStyle,
            underlineShow = _props2.underlineShow,
            underlineStyle = _props2.underlineStyle,
            rows = _props2.rows,
            rowsMax = _props2.rowsMax,
            textareaStyle = _props2.textareaStyle,
            other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'className', 'disabled', 'errorStyle', 'errorText', 'floatingLabelFixed', 'floatingLabelFocusStyle', 'floatingLabelShrinkStyle', 'floatingLabelStyle', 'floatingLabelText', 'fullWidth', 'hintText', 'hintStyle', 'id', 'inputStyle', 'multiLine', 'onBlur', 'onChange', 'onFocus', 'style', 'type', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'rows', 'rowsMax', 'textareaStyle']);
        var prepareStyles = this.context.muiTheme.prepareStyles;

        var styles = getStyles(this.props, this.context, this.state);
        var inputId = id || this.uniqueId;

        var errorTextElement = this.state.errorText && _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _simpleAssign2.default)(styles.error, errorStyle)) },
          this.state.errorText
        );

        var floatingLabelTextElement = floatingLabelText && _react2.default.createElement(
          _TextFieldLabel2.default,
          {
            muiTheme: this.context.muiTheme,
            style: (0, _simpleAssign2.default)(styles.floatingLabel, floatingLabelStyle, this.state.isFocused ? floatingLabelFocusStyle : null),
            shrinkStyle: floatingLabelShrinkStyle,
            htmlFor: inputId,
            shrink: this.state.hasValue || this.state.isFocused || floatingLabelFixed,
            disabled: disabled
          },
          floatingLabelText
        );

        var inputProps = {
          id: inputId,
          ref: function ref(elem) {
            return _this2.input = elem;
          },
          disabled: this.props.disabled,
          onBlur: this.handleInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.handleInputFocus
        };

        var childStyleMerged = (0, _simpleAssign2.default)(styles.input, inputStyle);

        var inputElement = void 0;
        if (children) {
          inputElement = _react2.default.cloneElement(children, (0, _extends3.default)({}, inputProps, children.props, {
            style: (0, _simpleAssign2.default)(childStyleMerged, children.props.style)
          }));
        } else {
          inputElement = multiLine ? _react2.default.createElement(_EnhancedTextarea2.default, (0, _extends3.default)({
            style: childStyleMerged,
            textareaStyle: (0, _simpleAssign2.default)(styles.textarea, styles.inputNative, textareaStyle),
            rows: rows,
            rowsMax: rowsMax,
            hintText: hintText
          }, other, inputProps, {
            onHeightChange: this.handleHeightChange
          })) : _react2.default.createElement('input', (0, _extends3.default)({
            type: type,
            style: prepareStyles((0, _simpleAssign2.default)(styles.inputNative, childStyleMerged))
          }, other, inputProps));
        }

        var rootProps = {};

        if (children) {
          rootProps = other;
        }

        return _react2.default.createElement(
          'div',
          (0, _extends3.default)({}, rootProps, {
            className: className,
            style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
          }),
          floatingLabelTextElement,
          hintText ? _react2.default.createElement(_TextFieldHint2.default, {
            muiTheme: this.context.muiTheme,
            show: !(this.state.hasValue || floatingLabelText && !this.state.isFocused) || !this.state.hasValue && floatingLabelText && floatingLabelFixed && !this.state.isFocused,
            style: hintStyle,
            text: hintText
          }) : null,
          inputElement,
          underlineShow ? _react2.default.createElement(_TextFieldUnderline2.default, {
            disabled: disabled,
            disabledStyle: underlineDisabledStyle,
            error: !!this.state.errorText,
            errorStyle: errorStyle,
            focus: this.state.isFocused,
            focusStyle: underlineFocusStyle,
            muiTheme: this.context.muiTheme,
            style: underlineStyle
          }) : null,
          errorTextElement
        );
      }
    }]);
    return TextField;
  }(React__default.Component);

  TextField.defaultProps = {
    disabled: false,
    floatingLabelFixed: false,
    multiLine: false,
    fullWidth: false,
    type: 'text',
    underlineShow: true,
    rows: 1
  };
  TextField.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  TextField.propTypes =  {};
  exports.default = TextField;
  });

  unwrapExports(TextField_1);

  var TextField = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;



  var _TextField2 = _interopRequireDefault(TextField_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _TextField2.default;
  });

  var MuiTextField = unwrapExports(TextField);

  var arrowDropDown = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _react2 = _interopRequireDefault(React__default);



  var _pure2 = _interopRequireDefault(pure_1);



  var _SvgIcon2 = _interopRequireDefault(SvgIcon);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var NavigationArrowDropDown = function NavigationArrowDropDown(props) {
    return _react2.default.createElement(
      _SvgIcon2.default,
      props,
      _react2.default.createElement('path', { d: 'M7 10l5 5 5-5z' })
    );
  };
  NavigationArrowDropDown = (0, _pure2.default)(NavigationArrowDropDown);
  NavigationArrowDropDown.displayName = 'NavigationArrowDropDown';
  NavigationArrowDropDown.muiName = 'SvgIcon';

  exports.default = NavigationArrowDropDown;
  });

  unwrapExports(arrowDropDown);

  var BeforeAfterWrapper_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   *  BeforeAfterWrapper
   *    An alternative for the ::before and ::after css pseudo-elements for
   *    components whose styles are defined in javascript instead of css.
   *
   *  Usage: For the element that we want to apply before and after elements to,
   *    wrap its children with BeforeAfterWrapper. For example:
   *
   *                                            <Paper>
   *  <Paper>                                     <div> // See notice
   *    <BeforeAfterWrapper>        renders         <div/> // before element
   *      [children of paper]       ------>         [children of paper]
   *    </BeforeAfterWrapper>                       <div/> // after element
   *  </Paper>                                    </div>
   *                                            </Paper>
   *
   *  Notice: Notice that this div bundles together our elements. If the element
   *    that we want to apply before and after elements is a HTML tag (i.e. a
   *    div, p, or button tag), we can avoid this extra nesting by passing using
   *    the BeforeAfterWrapper in place of said tag like so:
   *
   *  <p>
   *    <BeforeAfterWrapper>   do this instead   <BeforeAfterWrapper elementType='p'>
   *      [children of p]          ------>         [children of p]
   *    </BeforeAfterWrapper>                    </BeforeAfterWrapper>
   *  </p>
   *
   *  BeforeAfterWrapper features spread functionality. This means that we can
   *  pass HTML tag properties directly into the BeforeAfterWrapper tag.
   *
   *  When using BeforeAfterWrapper, ensure that the parent of the beforeElement
   *  and afterElement have a defined style position.
   */

  var styles = {
    box: {
      boxSizing: 'border-box'
    }
  };

  var BeforeAfterWrapper = function (_Component) {
    (0, _inherits3.default)(BeforeAfterWrapper, _Component);

    function BeforeAfterWrapper() {
      (0, _classCallCheck3.default)(this, BeforeAfterWrapper);
      return (0, _possibleConstructorReturn3.default)(this, (BeforeAfterWrapper.__proto__ || (0, _getPrototypeOf2.default)(BeforeAfterWrapper)).apply(this, arguments));
    }

    (0, _createClass3.default)(BeforeAfterWrapper, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            beforeStyle = _props.beforeStyle,
            afterStyle = _props.afterStyle,
            beforeElementType = _props.beforeElementType,
            afterElementType = _props.afterElementType,
            elementType = _props.elementType,
            other = (0, _objectWithoutProperties3.default)(_props, ['beforeStyle', 'afterStyle', 'beforeElementType', 'afterElementType', 'elementType']);
        var prepareStyles = this.context.muiTheme.prepareStyles;


        var beforeElement = void 0;
        var afterElement = void 0;

        if (beforeStyle) {
          beforeElement = _react2.default.createElement(this.props.beforeElementType, {
            style: prepareStyles((0, _simpleAssign2.default)({}, styles.box, beforeStyle)),
            key: '::before'
          });
        }

        if (afterStyle) {
          afterElement = _react2.default.createElement(this.props.afterElementType, {
            style: prepareStyles((0, _simpleAssign2.default)({}, styles.box, afterStyle)),
            key: '::after'
          });
        }

        var children = [beforeElement, this.props.children, afterElement];

        var props = other;
        props.style = prepareStyles((0, _simpleAssign2.default)({}, this.props.style));

        return _react2.default.createElement(this.props.elementType, props, children);
      }
    }]);
    return BeforeAfterWrapper;
  }(React__default.Component);

  BeforeAfterWrapper.defaultProps = {
    beforeElementType: 'div',
    afterElementType: 'div',
    elementType: 'div'
  };
  BeforeAfterWrapper.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  BeforeAfterWrapper.propTypes =  {};
  exports.default = BeforeAfterWrapper;
  });

  unwrapExports(BeforeAfterWrapper_1);

  var ClearFix_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _BeforeAfterWrapper2 = _interopRequireDefault(BeforeAfterWrapper_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var styles = {
    before: {
      content: "' '",
      display: 'table'
    },
    after: {
      content: "' '",
      clear: 'both',
      display: 'table'
    }
  };

  var ClearFix = function ClearFix(_ref) {
    var style = _ref.style,
        children = _ref.children,
        other = (0, _objectWithoutProperties3.default)(_ref, ['style', 'children']);
    return _react2.default.createElement(
      _BeforeAfterWrapper2.default,
      (0, _extends3.default)({}, other, {
        beforeStyle: styles.before,
        afterStyle: styles.after,
        style: style
      }),
      children
    );
  };

  ClearFix.muiName = 'ClearFix';

  ClearFix.propTypes =  {};

  exports.default = ClearFix;
  });

  unwrapExports(ClearFix_1);

  var PopoverAnimationVertical_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _Paper2 = _interopRequireDefault(Paper);



  var _transitions2 = _interopRequireDefault(transitions);



  var _propTypes4 = _interopRequireDefault(propTypes$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function getStyles(props, context, state) {
    var targetOrigin = props.targetOrigin;
    var open = state.open;
    var muiTheme = context.muiTheme;

    var horizontal = targetOrigin.horizontal.replace('middle', 'center');

    return {
      root: {
        position: 'fixed',
        zIndex: muiTheme.zIndex.popover,
        opacity: open ? 1 : 0,
        transform: open ? 'scaleY(1)' : 'scaleY(0)',
        transformOrigin: horizontal + ' ' + targetOrigin.vertical,
        transition: _transitions2.default.easeOut('450ms', ['transform', 'opacity']),
        maxHeight: '100%'
      }
    };
  }

  var PopoverAnimationVertical = function (_Component) {
    (0, _inherits3.default)(PopoverAnimationVertical, _Component);

    function PopoverAnimationVertical() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, PopoverAnimationVertical);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PopoverAnimationVertical.__proto__ || (0, _getPrototypeOf2.default)(PopoverAnimationVertical)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        open: false
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(PopoverAnimationVertical, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.setState({
          open: nextProps.open
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            className = _props.className,
            style = _props.style,
            zDepth = _props.zDepth;


        var styles = getStyles(this.props, this.context, this.state);

        return _react2.default.createElement(
          _Paper2.default,
          {
            style: (0, _simpleAssign2.default)(styles.root, style),
            zDepth: zDepth,
            className: className
          },
          this.props.children
        );
      }
    }]);
    return PopoverAnimationVertical;
  }(React__default.Component);

  PopoverAnimationVertical.defaultProps = {
    style: {},
    zDepth: 1
  };
  PopoverAnimationVertical.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  PopoverAnimationVertical.propTypes =  {};
  exports.default = PopoverAnimationVertical;
  });

  unwrapExports(PopoverAnimationVertical_1);

  var DropDownMenu_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _reactDom2 = _interopRequireDefault(reactDom);



  var _transitions2 = _interopRequireDefault(transitions);



  var _arrowDropDown2 = _interopRequireDefault(arrowDropDown);



  var _Menu2 = _interopRequireDefault(Menu_1);



  var _ClearFix2 = _interopRequireDefault(ClearFix_1);



  var _Popover2 = _interopRequireDefault(Popover_1);



  var _PopoverAnimationVertical2 = _interopRequireDefault(PopoverAnimationVertical_1);



  var _keycode2 = _interopRequireDefault(keycode);



  var _events2 = _interopRequireDefault(events);



  var _IconButton2 = _interopRequireDefault(IconButton);



  var _propTypes4 = _interopRequireDefault(propTypes$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function getStyles(props, context) {
    var disabled = props.disabled;

    var spacing = context.muiTheme.baseTheme.spacing;
    var palette = context.muiTheme.baseTheme.palette;
    var accentColor = context.muiTheme.dropDownMenu.accentColor;
    return {
      control: {
        cursor: disabled ? 'not-allowed' : 'pointer',
        height: '100%',
        position: 'relative',
        width: '100%'
      },
      icon: {
        fill: accentColor,
        position: 'absolute',
        right: spacing.desktopGutterLess,
        top: (spacing.iconSize - 24) / 2 + spacing.desktopGutterMini / 2
      },
      iconChildren: {
        fill: 'inherit'
      },
      label: {
        color: disabled ? palette.disabledColor : palette.textColor,
        height: spacing.desktopToolbarHeight + 'px',
        lineHeight: spacing.desktopToolbarHeight + 'px',
        overflow: 'hidden',
        opacity: 1,
        position: 'relative',
        paddingLeft: spacing.desktopGutter,
        paddingRight: spacing.iconSize * 2 + spacing.desktopGutterMini,
        textOverflow: 'ellipsis',
        top: 0,
        whiteSpace: 'nowrap'
      },
      labelWhenOpen: {
        opacity: 0,
        top: spacing.desktopToolbarHeight / 8
      },
      root: {
        display: 'inline-block',
        fontSize: spacing.desktopDropDownMenuFontSize,
        height: spacing.desktopSubheaderHeight,
        fontFamily: context.muiTheme.baseTheme.fontFamily,
        outline: 'none',
        position: 'relative',
        transition: _transitions2.default.easeOut()
      },
      rootWhenOpen: {
        opacity: 1
      },
      underline: {
        borderTop: 'solid 1px ' + accentColor,
        bottom: 1,
        left: 0,
        margin: '-1px ' + spacing.desktopGutter + 'px',
        right: 0,
        position: 'absolute'
      }
    };
  }

  var DropDownMenu = function (_Component) {
    (0, _inherits3.default)(DropDownMenu, _Component);

    function DropDownMenu() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, DropDownMenu);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DropDownMenu.__proto__ || (0, _getPrototypeOf2.default)(DropDownMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        open: false
      }, _this.rootNode = undefined, _this.arrowNode = undefined, _this.handleClickControl = function (event) {
        event.preventDefault();
        if (!_this.props.disabled) {
          _this.setState({
            open: !_this.state.open,
            anchorEl: _this.rootNode
          });
        }
      }, _this.handleRequestCloseMenu = function () {
        _this.close(false);
      }, _this.handleEscKeyDownMenu = function () {
        _this.close(true);
      }, _this.handleKeyDown = function (event) {
        switch ((0, _keycode2.default)(event)) {
          case 'up':
          case 'down':
          case 'space':
          case 'enter':
            event.preventDefault();
            _this.setState({
              open: true,
              anchorEl: _this.rootNode
            });
            break;
        }
      }, _this.handleItemClick = function (event, child, index) {
        if (_this.props.multiple) {
          if (!_this.state.open) {
            _this.setState({ open: true });
          }
        } else {
          event.persist();
          _this.setState({
            open: false
          }, function () {
            if (_this.props.onChange) {
              _this.props.onChange(event, index, child.props.value);
            }

            _this.close(_events2.default.isKeyboard(event));
          });
        }
      }, _this.handleChange = function (event, value) {
        if (_this.props.multiple && _this.props.onChange) {
          _this.props.onChange(event, undefined, value);
        }
      }, _this.close = function (isKeyboard) {
        _this.setState({
          open: false
        }, function () {
          if (_this.props.onClose) {
            _this.props.onClose();
          }

          if (isKeyboard) {
            var dropArrow = _this.arrowNode;
            var dropNode = _reactDom2.default.findDOMNode(dropArrow);
            dropNode.focus();
            dropArrow.setKeyboardFocus(true);
          }
        });
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    // The nested styles for drop-down-menu are modified by toolbar and possibly
    // other user components, so it will give full access to its js styles rather
    // than just the parent.


    (0, _createClass3.default)(DropDownMenu, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        if (this.props.autoWidth) {
          this.setWidth();
        }
        if (this.props.openImmediately) {
          // TODO: Temporary fix to make openImmediately work with popover.
          /* eslint-disable react/no-did-mount-set-state */
          setTimeout(function () {
            return _this2.setState({
              open: true,
              anchorEl: _this2.rootNode
            });
          }, 0);
          /* eslint-enable react/no-did-mount-set-state */
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps() {
        if (this.props.autoWidth) {
          this.setWidth();
        }
      }
    }, {
      key: 'getInputNode',


      /**
       * This method is deprecated but still here because the TextField
       * need it in order to work. TODO: That will be addressed later.
       */
      value: function getInputNode() {
        var _this3 = this;

        var rootNode = this.rootNode;

        rootNode.focus = function () {
          if (!_this3.props.disabled) {
            _this3.setState({
              open: !_this3.state.open,
              anchorEl: _this3.rootNode
            });
          }
        };

        return rootNode;
      }
    }, {
      key: 'setWidth',
      value: function setWidth() {
        var el = this.rootNode;
        if (!this.props.style || !this.props.style.hasOwnProperty('width')) {
          el.style.width = 'auto';
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        var _props = this.props,
            animated = _props.animated,
            animation = _props.animation,
            autoWidth = _props.autoWidth,
            multiple = _props.multiple,
            children = _props.children,
            className = _props.className,
            disabled = _props.disabled,
            iconStyle = _props.iconStyle,
            labelStyle = _props.labelStyle,
            listStyle = _props.listStyle,
            maxHeight = _props.maxHeight,
            menuStyleProp = _props.menuStyle,
            selectionRenderer = _props.selectionRenderer,
            onClose = _props.onClose,
            openImmediately = _props.openImmediately,
            menuItemStyle = _props.menuItemStyle,
            selectedMenuItemStyle = _props.selectedMenuItemStyle,
            style = _props.style,
            underlineStyle = _props.underlineStyle,
            value = _props.value,
            iconButton = _props.iconButton,
            anchorOrigin = _props.anchorOrigin,
            targetOrigin = _props.targetOrigin,
            other = (0, _objectWithoutProperties3.default)(_props, ['animated', 'animation', 'autoWidth', 'multiple', 'children', 'className', 'disabled', 'iconStyle', 'labelStyle', 'listStyle', 'maxHeight', 'menuStyle', 'selectionRenderer', 'onClose', 'openImmediately', 'menuItemStyle', 'selectedMenuItemStyle', 'style', 'underlineStyle', 'value', 'iconButton', 'anchorOrigin', 'targetOrigin']);
        var _state = this.state,
            anchorEl = _state.anchorEl,
            open = _state.open;
        var prepareStyles = this.context.muiTheme.prepareStyles;

        var styles = getStyles(this.props, this.context);

        var displayValue = '';
        if (!multiple) {
          _react2.default.Children.forEach(children, function (child) {
            if (child && value === child.props.value) {
              if (selectionRenderer) {
                displayValue = selectionRenderer(value, child);
              } else {
                // This will need to be improved (in case primaryText is a node)
                displayValue = child.props.label || child.props.primaryText;
              }
            }
          });
        } else {
          var values = [];
          var selectionRendererChildren = [];
          _react2.default.Children.forEach(children, function (child) {
            if (child && value && value.indexOf(child.props.value) > -1) {
              if (selectionRenderer) {
                values.push(child.props.value);
                selectionRendererChildren.push(child);
              } else {
                values.push(child.props.label || child.props.primaryText);
              }
            }
          });

          displayValue = [];
          if (selectionRenderer) {
            displayValue = selectionRenderer(values, selectionRendererChildren);
          } else {
            displayValue = values.join(', ');
          }
        }

        var menuStyle = void 0;
        if (anchorEl && !autoWidth) {
          menuStyle = (0, _simpleAssign2.default)({
            width: anchorEl.clientWidth
          }, menuStyleProp);
        } else {
          menuStyle = menuStyleProp;
        }

        return _react2.default.createElement(
          'div',
          (0, _extends3.default)({}, other, {
            ref: function ref(node) {
              _this4.rootNode = node;
            },
            className: className,
            style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, open && styles.rootWhenOpen, style))
          }),
          _react2.default.createElement(
            _ClearFix2.default,
            { style: styles.control, onClick: this.handleClickControl },
            _react2.default.createElement(
              'div',
              { style: prepareStyles((0, _simpleAssign2.default)({}, styles.label, open && styles.labelWhenOpen, labelStyle)) },
              displayValue
            ),
            _react2.default.createElement(
              _IconButton2.default,
              {
                disabled: disabled,
                onKeyDown: this.handleKeyDown,
                ref: function ref(node) {
                  _this4.arrowNode = node;
                },
                style: (0, _simpleAssign2.default)({}, styles.icon, iconStyle),
                iconStyle: styles.iconChildren
              },
              iconButton
            ),
            _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, styles.underline, underlineStyle)) })
          ),
          _react2.default.createElement(
            _Popover2.default,
            {
              anchorOrigin: anchorOrigin,
              targetOrigin: targetOrigin,
              anchorEl: anchorEl,
              animation: animation || _PopoverAnimationVertical2.default,
              open: open,
              animated: animated,
              onRequestClose: this.handleRequestCloseMenu
            },
            _react2.default.createElement(
              _Menu2.default,
              {
                multiple: multiple,
                maxHeight: maxHeight,
                desktop: true,
                value: value,
                onEscKeyDown: this.handleEscKeyDownMenu,
                style: menuStyle,
                listStyle: listStyle,
                onItemClick: this.handleItemClick,
                onChange: this.handleChange,
                menuItemStyle: menuItemStyle,
                selectedMenuItemStyle: selectedMenuItemStyle,
                autoWidth: autoWidth,
                width: !autoWidth && menuStyle ? menuStyle.width : null
              },
              children
            )
          )
        );
      }
    }]);
    return DropDownMenu;
  }(React__default.Component);

  DropDownMenu.muiName = 'DropDownMenu';
  DropDownMenu.defaultProps = {
    animated: true,
    autoWidth: true,
    disabled: false,
    iconButton: _react2.default.createElement(_arrowDropDown2.default, null),
    openImmediately: false,
    maxHeight: 500,
    multiple: false,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left'
    }
  };
  DropDownMenu.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  DropDownMenu.propTypes =  {};
  exports.default = DropDownMenu;
  });

  unwrapExports(DropDownMenu_1);

  var DropDownMenu = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.MenuItem = exports.DropDownMenu = undefined;



  var _DropDownMenu3 = _interopRequireDefault(DropDownMenu_1);



  var _MenuItem3 = _interopRequireDefault(MenuItem_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.DropDownMenu = _DropDownMenu3.default;
  exports.MenuItem = _MenuItem3.default;
  exports.default = _DropDownMenu3.default;
  });

  unwrapExports(DropDownMenu);
  var DropDownMenu_1$1 = DropDownMenu.MenuItem;
  var DropDownMenu_2 = DropDownMenu.DropDownMenu;

  var SelectField_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _extends3 = _interopRequireDefault(_extends$1);



  var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



  var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf$1);



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  var _createClass3 = _interopRequireDefault(createClass);



  var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



  var _inherits3 = _interopRequireDefault(inherits);



  var _simpleAssign2 = _interopRequireDefault(simpleAssign);



  var _react2 = _interopRequireDefault(React__default);



  var _propTypes2 = _interopRequireDefault(propTypes);



  var _TextField2 = _interopRequireDefault(TextField);



  var _DropDownMenu2 = _interopRequireDefault(DropDownMenu);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function getStyles(props) {
    return {
      label: {
        paddingLeft: 0,
        top: props.floatingLabelText ? 6 : -4
      },
      icon: {
        right: 0,
        top: props.floatingLabelText ? 8 : 0
      },
      hideDropDownUnderline: {
        borderTop: 'none'
      },
      dropDownMenu: {
        display: 'block'
      }
    };
  }

  var SelectField = function (_Component) {
    (0, _inherits3.default)(SelectField, _Component);

    function SelectField() {
      (0, _classCallCheck3.default)(this, SelectField);
      return (0, _possibleConstructorReturn3.default)(this, (SelectField.__proto__ || (0, _getPrototypeOf2.default)(SelectField)).apply(this, arguments));
    }

    (0, _createClass3.default)(SelectField, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            autoWidth = _props.autoWidth,
            multiple = _props.multiple,
            children = _props.children,
            style = _props.style,
            labelStyle = _props.labelStyle,
            iconStyle = _props.iconStyle,
            id = _props.id,
            underlineDisabledStyle = _props.underlineDisabledStyle,
            underlineFocusStyle = _props.underlineFocusStyle,
            menuItemStyle = _props.menuItemStyle,
            selectedMenuItemStyle = _props.selectedMenuItemStyle,
            underlineStyle = _props.underlineStyle,
            dropDownMenuProps = _props.dropDownMenuProps,
            errorStyle = _props.errorStyle,
            disabled = _props.disabled,
            floatingLabelFixed = _props.floatingLabelFixed,
            floatingLabelText = _props.floatingLabelText,
            floatingLabelStyle = _props.floatingLabelStyle,
            hintStyle = _props.hintStyle,
            hintText = _props.hintText,
            fullWidth = _props.fullWidth,
            errorText = _props.errorText,
            listStyle = _props.listStyle,
            maxHeight = _props.maxHeight,
            menuStyle = _props.menuStyle,
            onFocus = _props.onFocus,
            onBlur = _props.onBlur,
            onChange = _props.onChange,
            selectionRenderer = _props.selectionRenderer,
            value = _props.value,
            other = (0, _objectWithoutProperties3.default)(_props, ['autoWidth', 'multiple', 'children', 'style', 'labelStyle', 'iconStyle', 'id', 'underlineDisabledStyle', 'underlineFocusStyle', 'menuItemStyle', 'selectedMenuItemStyle', 'underlineStyle', 'dropDownMenuProps', 'errorStyle', 'disabled', 'floatingLabelFixed', 'floatingLabelText', 'floatingLabelStyle', 'hintStyle', 'hintText', 'fullWidth', 'errorText', 'listStyle', 'maxHeight', 'menuStyle', 'onFocus', 'onBlur', 'onChange', 'selectionRenderer', 'value']);


        var styles = getStyles(this.props, this.context);

        return _react2.default.createElement(
          _TextField2.default,
          (0, _extends3.default)({}, other, {
            style: style,
            disabled: disabled,
            floatingLabelFixed: floatingLabelFixed,
            floatingLabelText: floatingLabelText,
            floatingLabelStyle: floatingLabelStyle,
            hintStyle: hintStyle,
            hintText: !hintText && !floatingLabelText ? ' ' : hintText,
            fullWidth: fullWidth,
            errorText: errorText,
            underlineStyle: underlineStyle,
            errorStyle: errorStyle,
            onFocus: onFocus,
            onBlur: onBlur,
            id: id,
            underlineDisabledStyle: underlineDisabledStyle,
            underlineFocusStyle: underlineFocusStyle
          }),
          _react2.default.createElement(
            _DropDownMenu2.default,
            (0, _extends3.default)({
              disabled: disabled,
              style: (0, _simpleAssign2.default)(styles.dropDownMenu, menuStyle),
              labelStyle: (0, _simpleAssign2.default)(styles.label, labelStyle),
              iconStyle: (0, _simpleAssign2.default)(styles.icon, iconStyle),
              menuItemStyle: menuItemStyle,
              selectedMenuItemStyle: selectedMenuItemStyle,
              underlineStyle: styles.hideDropDownUnderline,
              listStyle: listStyle,
              autoWidth: autoWidth,
              value: value,
              onChange: onChange,
              maxHeight: maxHeight,
              multiple: multiple,
              selectionRenderer: selectionRenderer
            }, dropDownMenuProps),
            children
          )
        );
      }
    }]);
    return SelectField;
  }(React__default.Component);

  SelectField.defaultProps = {
    autoWidth: false,
    disabled: false,
    fullWidth: false,
    multiple: false
  };
  SelectField.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  };
  SelectField.propTypes =  {};
  exports.default = SelectField;
  });

  unwrapExports(SelectField_1);

  var SelectField = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;



  var _SelectField2 = _interopRequireDefault(SelectField_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = _SelectField2.default;
  });

  var MuiSelectField = unwrapExports(SelectField);

  var styles$4 = {
    root: {
      fontSize: 12,
      height: 'inherit'
    },
    input: {
      top: 0,
      position: 'relative',
      marginTop: 'initial',
      height: "".concat(24 + 5 * 2 + 1 * 2, "px"),
      padding: 5
    },
    floatingLabel: {
      position: 'initial',
      top: 'initial'
    },
    floatingLabelFocus: {
      color: "".concat(colors_252)
    },
    lebel: {
      lineHeight: 'initial',
      color: "red",
      bottom: 10
    },
    menu: {
      top: 0,
      marginTop: 'initial',
      borderStyle: 'solid',
      borderRadius: 2,
      borderWidth: 1,
      borderColor: "".concat(colors_248)
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
  var SelectField$1 =
  /*#__PURE__*/
  function (_Component) {
    _inherits(SelectField, _Component);

    function SelectField() {
      _classCallCheck(this, SelectField);

      return _possibleConstructorReturn(this, _getPrototypeOf(SelectField).apply(this, arguments));
    }

    _createClass(SelectField, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            style = _this$props.style,
            inputStyle = _this$props.inputStyle,
            labelStyle = _this$props.labelStyle,
            menuStyle = _this$props.menuStyle,
            floatingLabelStyle = _this$props.floatingLabelStyle,
            floatingLabelFocusStyle = _this$props.floatingLabelFocusStyle,
            errorStyle = _this$props.errorStyle,
            hintStyle = _this$props.hintStyle,
            iconStyle = _this$props.iconStyle,
            underlineStyle = _this$props.underlineStyle,
            underlineFocusStyle = _this$props.underlineFocusStyle,
            underlineDisabledStyle = _this$props.underlineDisabledStyle,
            children = _this$props.children,
            props = _objectWithoutProperties(_this$props, ["style", "inputStyle", "labelStyle", "menuStyle", "floatingLabelStyle", "floatingLabelFocusStyle", "errorStyle", "hintStyle", "iconStyle", "underlineStyle", "underlineFocusStyle", "underlineDisabledStyle", "children"]);

        return React__default.createElement(MuiSelectField, _extends({}, props, {
          style: _.defaults(style, styles$4.root),
          inputStyle: _.defaults(inputStyle, styles$4.input),
          labelStyle: _.defaults(labelStyle, styles$4.label),
          menuStyle: _.defaults(menuStyle, styles$4.menu),
          iconStyle: _.defaults(iconStyle, styles$4.icon),
          hintStyle: _.defaults(hintStyle, styles$4.hint),
          errorStyle: _.defaults(errorStyle, styles$4.error),
          floatingLabelStyle: _.defaults(floatingLabelStyle, styles$4.floatingLabel),
          floatingLabelFocusStyle: _.defaults(floatingLabelFocusStyle, styles$4.floatingLabelFocus),
          underlineStyle: _.defaults(underlineStyle, styles$4.underline),
          underlineFocusStyle: _.defaults(underlineFocusStyle, styles$4.underlineFocus),
          underlineDisabledStyle: _.defaults(underlineDisabledStyle, styles$4.underlineDisabled)
        }), this.props.children);
      }
    }]);

    return SelectField;
  }(React.Component);

  var styles$5 = {
    root: {
      fontSize: 12,
      height: 'initial'
    },
    floatingLabel: {
      position: 'initial',
      top: 'initial'
    },
    floatingLabelFocus: {
      color: "".concat(colors_252)
    },
    input: {
      position: 'relative',
      marginTop: 'initial',
      height: 'initial',
      padding: 5,
      borderStyle: 'solid',
      borderRadius: 2,
      borderColor: "".concat(colors_248),
      borderWidth: 1
    },
    textarea: {
      marginTop: 'initial',
      marginBottom: 'initial',
      padding: 0,
      borderWidth: 1
    },
    hint: {
      color: "".concat(colors_249),
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
  var TextField$1 =
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

        return React__default.createElement(MuiTextField, _extends({}, props, {
          style: _.defaults(style, styles$5.root),
          inputStyle: _.defaults(inputStyle, styles$5.input),
          textareaStyle: _.defaults(textareaStyle, styles$5.textarea),
          hintStyle: _.defaults(hintStyle, styles$5.hint),
          errorStyle: _.defaults(errorStyle, styles$5.error),
          floatingLabelStyle: _.defaults(floatingLabelStyle, styles$5.floatingLabel),
          floatingLabelFocusStyle: _.defaults(floatingLabelFocusStyle, styles$5.floatingLabelFocus),
          underlineStyle: _.defaults(underlineStyle, styles$5.underline),
          underlineFocusStyle: _.defaults(underlineFocusStyle, styles$5.underlineFocus),
          underlineDisabledStyle: _.defaults(underlineDisabledStyle, styles$5.underlineDisabled)
        }));
      }
    }]);

    return TextField;
  }(React.Component);

  var Popover = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = exports.PopoverAnimationVertical = exports.Popover = undefined;



  var _Popover3 = _interopRequireDefault(Popover_1);



  var _PopoverAnimationVertical3 = _interopRequireDefault(PopoverAnimationVertical_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.Popover = _Popover3.default;
  exports.PopoverAnimationVertical = _PopoverAnimationVertical3.default;
  exports.default = _Popover3.default;
  });

  var MuiPopover = unwrapExports(Popover);
  var Popover_1$1 = Popover.PopoverAnimationVertical;
  var Popover_2 = Popover.Popover;

  var styles$6 = {
    root: {
      boxShadow: 'initial' // overflow: 'visible',

    }
  };
  var Popover$1 =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Popover, _Component);

    function Popover() {
      _classCallCheck(this, Popover);

      return _possibleConstructorReturn(this, _getPrototypeOf(Popover).apply(this, arguments));
    }

    _createClass(Popover, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            arrow = _this$props.arrow,
            style = _this$props.style,
            className = _this$props.className,
            props = _objectWithoutProperties(_this$props, ["arrow", "style", "className"]);

        return React__default.createElement(MuiPopover, _extends({
          style: arrow ? _.defaults(style, styles$6.root) : style,
          className: arrow ? classnames(className, 'triangle', "triangle-".concat(arrow)) : className
        }, props));
      }
    }]);

    return Popover;
  }(React.Component);

  var lodash_merge = createCommonjsModule(function (module, exports) {
  /**
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports =  exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /** Used for built-in method references. */
  var arrayProto = Array.prototype,
      funcProto = Function.prototype,
      objectProto = Object.prototype;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString.call(Object);

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined,
      Symbol = root.Symbol,
      Uint8Array = root.Uint8Array,
      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
      getPrototype = overArg(Object.getPrototypeOf, Object),
      objectCreate = Object.create,
      propertyIsEnumerable = objectProto.propertyIsEnumerable,
      splice = arrayProto.splice,
      symToStringTag = Symbol ? Symbol.toStringTag : undefined;

  var defineProperty = (function() {
    try {
      var func = getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }());

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
      nativeMax = Math.max,
      nativeNow = Date.now;

  /* Built-in method references that are verified to be native. */
  var Map = getNative(root, 'Map'),
      nativeCreate = getNative(Object, 'create');

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function() {
    function object() {}
    return function(proto) {
      if (!isObject(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object;
      object.prototype = undefined;
      return result;
    };
  }());

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
  }

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
    return this;
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map || ListCache),
      'string': new Hash
    };
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
  }

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
      var pairs = data.__data__;
      if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value),
        isArg = !isArr && isArguments(value),
        isBuff = !isArr && !isArg && isBuffer(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * This function is like `assignValue` except that it doesn't assign
   * `undefined` values.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignMergeValue(object, key, value) {
    if ((value !== undefined && !eq(object[key], value)) ||
        (value === undefined && !(key in object))) {
      baseAssignValue(object, key, value);
    }
  }

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
        (value === undefined && !(key in object))) {
      baseAssignValue(object, key, value);
    }
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty) {
      defineProperty(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor = createBaseFor();

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? getRawTag(value)
      : objectToString(value);
  }

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
  }

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike(value) &&
      isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.merge` without support for multiple sources.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} [customizer] The function to customize merged values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor(source, function(srcValue, key) {
      stack || (stack = new Stack);
      if (isObject(srcValue)) {
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      }
      else {
        var newValue = customizer
          ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
          : undefined;

        if (newValue === undefined) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    }, keysIn);
  }

  /**
   * A specialized version of `baseMerge` for arrays and objects which performs
   * deep merges and tracks traversed objects enabling objects with circular
   * references to be merged.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {string} key The key of the value to merge.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} mergeFunc The function to merge values.
   * @param {Function} [customizer] The function to customize assigned values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key),
        srcValue = safeGet(source, key),
        stacked = stack.get(srcValue);

    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer
      ? customizer(objValue, srcValue, (key + ''), object, source, stack)
      : undefined;

    var isCommon = newValue === undefined;

    if (isCommon) {
      var isArr = isArray(srcValue),
          isBuff = !isArr && isBuffer(srcValue),
          isTyped = !isArr && !isBuff && isTypedArray(srcValue);

      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray(objValue)) {
          newValue = objValue;
        }
        else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        }
        else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        }
        else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        }
        else {
          newValue = [];
        }
      }
      else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        newValue = objValue;
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        }
        else if (!isObject(objValue) || isFunction(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      }
      else {
        isCommon = false;
      }
    }
    if (isCommon) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack['delete'](srcValue);
    }
    assignMergeValue(object, key, newValue);
  }

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + '');
  }

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString = !defineProperty ? identity : function(func, string) {
    return defineProperty(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant(string),
      'writable': true
    });
  };

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

    buffer.copy(result);
    return result;
  }

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }

  /**
   * Creates a function like `_.assign`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */
  function createAssigner(assigner) {
    return baseRest(function(object, sources) {
      var index = -1,
          length = sources.length,
          customizer = length > 1 ? sources[length - 1] : undefined,
          guard = length > 2 ? sources[2] : undefined;

      customizer = (assigner.length > 3 && typeof customizer == 'function')
        ? (length--, customizer)
        : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return (typeof object.constructor == 'function' && !isPrototype(object))
      ? baseCreate(getPrototype(object))
      : {};
  }

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;

    return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
  }

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number'
          ? (isArrayLike(object) && isIndex(index, object.length))
          : (type == 'string' && index in object)
        ) {
      return eq(object[index], value);
    }
    return false;
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

    return value === proto;
  }

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }

  /**
   * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function safeGet(object, key) {
    if (key === 'constructor' && typeof object[key] === 'function') {
      return;
    }

    if (key == '__proto__') {
      return;
    }

    return object[key];
  }

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString = shortOut(baseSetToString);

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut(func) {
    var count = 0,
        lastCalled = 0;

    return function() {
      var stamp = nativeNow(),
          remaining = HOT_SPAN - (stamp - lastCalled);

      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
      !propertyIsEnumerable.call(value, 'callee');
  };

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor &&
      funcToString.call(Ctor) == objectCtorString;
  }

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

  /**
   * Converts `value` to a plain object flattening inherited enumerable string
   * keyed properties of `value` to own properties of the plain object.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Object} Returns the converted plain object.
   * @example
   *
   * function Foo() {
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.assign({ 'a': 1 }, new Foo);
   * // => { 'a': 1, 'b': 2 }
   *
   * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
   * // => { 'a': 1, 'b': 2, 'c': 3 }
   */
  function toPlainObject(value) {
    return copyObject(value, keysIn(value));
  }

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  /**
   * This method is like `_.assign` except that it recursively merges own and
   * inherited enumerable string keyed properties of source objects into the
   * destination object. Source properties that resolve to `undefined` are
   * skipped if a destination value exists. Array and plain object properties
   * are merged recursively. Other objects and value types are overridden by
   * assignment. Source objects are applied from left to right. Subsequent
   * sources overwrite property assignments of previous sources.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 0.5.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var object = {
   *   'a': [{ 'b': 2 }, { 'd': 4 }]
   * };
   *
   * var other = {
   *   'a': [{ 'c': 3 }, { 'e': 5 }]
   * };
   *
   * _.merge(object, other);
   * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
   */
  var merge = createAssigner(function(object, source, srcIndex) {
    baseMerge(object, source, srcIndex);
  });

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */
  function constant(value) {
    return function() {
      return value;
    };
  }

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  module.exports = merge;
  });

  var spacing = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    iconSize: 24,

    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56
  };
  });

  unwrapExports(spacing);

  var lightBaseTheme = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });







  var _spacing2 = _interopRequireDefault(spacing);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   *  Light Theme is the default theme used in material-ui. It is guaranteed to
   *  have all theme variables needed for every component. Variables not defined
   *  in a custom theme will default to these values.
   */
  exports.default = {
    spacing: _spacing2.default,
    fontFamily: 'Roboto, sans-serif',
    borderRadius: 2,
    palette: {
      primary1Color: colors.cyan500,
      primary2Color: colors.cyan700,
      primary3Color: colors.grey400,
      accent1Color: colors.pinkA200,
      accent2Color: colors.grey100,
      accent3Color: colors.grey500,
      textColor: colors.darkBlack,
      secondaryTextColor: (0, colorManipulator.fade)(colors.darkBlack, 0.54),
      alternateTextColor: colors.white,
      canvasColor: colors.white,
      borderColor: colors.grey300,
      disabledColor: (0, colorManipulator.fade)(colors.darkBlack, 0.3),
      pickerHeaderColor: colors.cyan500,
      clockCircleColor: (0, colorManipulator.fade)(colors.darkBlack, 0.07),
      shadowColor: colors.fullBlack
    }
  }; /**
      * NB: If you update this file, please also update `docs/src/app/customization/Themes.js`
      */
  });

  unwrapExports(lightBaseTheme);

  var zIndex = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    menu: 1000,
    appBar: 1100,
    drawerOverlay: 1200,
    drawer: 1300,
    dialogOverlay: 1400,
    dialog: 1500,
    layer: 2000,
    popover: 2100,
    snackbar: 2900,
    tooltip: 3000
  };
  });

  unwrapExports(zIndex);

  var capitalizeString_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = capitalizeString;
  function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  module.exports = exports["default"];
  });

  unwrapExports(capitalizeString_1);

  var prefixProperty_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = prefixProperty;



  var _capitalizeString2 = _interopRequireDefault(capitalizeString_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function prefixProperty(prefixProperties, property, style) {
    if (prefixProperties.hasOwnProperty(property)) {
      var requiredPrefixes = prefixProperties[property];
      for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
        style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] = style[property];
      }
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(prefixProperty_1);

  var prefixValue_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = prefixValue;
  function prefixValue(plugins, property, value, style, metaData) {
    for (var i = 0, len = plugins.length; i < len; ++i) {
      var processedValue = plugins[i](property, value, style, metaData);

      // we can stop processing if a value is returned
      // as all plugin criteria are unique
      if (processedValue) {
        return processedValue;
      }
    }
  }
  module.exports = exports["default"];
  });

  unwrapExports(prefixValue_1);

  var addNewValuesOnly_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addNewValuesOnly;
  function addIfNew(list, value) {
    if (list.indexOf(value) === -1) {
      list.push(value);
    }
  }

  function addNewValuesOnly(list, values) {
    if (Array.isArray(values)) {
      for (var i = 0, len = values.length; i < len; ++i) {
        addIfNew(list, values[i]);
      }
    } else {
      addIfNew(list, values);
    }
  }
  module.exports = exports["default"];
  });

  unwrapExports(addNewValuesOnly_1);

  var isObject_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isObject;
  function isObject(value) {
    return value instanceof Object && !Array.isArray(value);
  }
  module.exports = exports["default"];
  });

  unwrapExports(isObject_1);

  var createPrefixer_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createPrefixer;



  var _prefixProperty2 = _interopRequireDefault(prefixProperty_1);



  var _prefixValue2 = _interopRequireDefault(prefixValue_1);



  var _addNewValuesOnly2 = _interopRequireDefault(addNewValuesOnly_1);



  var _isObject2 = _interopRequireDefault(isObject_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function createPrefixer(_ref) {
    var prefixMap = _ref.prefixMap,
        plugins = _ref.plugins;

    function prefixAll(style) {
      for (var property in style) {
        var value = style[property];

        // handle nested objects
        if ((0, _isObject2.default)(value)) {
          style[property] = prefixAll(value);
          // handle array values
        } else if (Array.isArray(value)) {
          var combinedValue = [];

          for (var i = 0, len = value.length; i < len; ++i) {
            var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
            (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
          }

          // only modify the value if it was touched
          // by any plugin to prevent unnecessary mutations
          if (combinedValue.length > 0) {
            style[property] = combinedValue;
          }
        } else {
          var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

          // only modify the value if it was touched
          // by any plugin to prevent unnecessary mutations
          if (_processedValue) {
            style[property] = _processedValue;
          }

          (0, _prefixProperty2.default)(prefixMap, property, style);
        }
      }

      return style;
    }

    return prefixAll;
  }
  module.exports = exports['default'];
  });

  unwrapExports(createPrefixer_1);

  var bowser = createCommonjsModule(function (module) {
  /*!
   * Bowser - a browser detector
   * https://github.com/ded/bowser
   * MIT License | (c) Dustin Diaz 2015
   */

  !function (root, name, definition) {
    if ( module.exports) module.exports = definition();
    else root[name] = definition();
  }(commonjsGlobal, 'bowser', function () {
    /**
      * See useragents.js for examples of navigator.userAgent
      */

    var t = true;

    function detect(ua) {

      function getFirstMatch(regex) {
        var match = ua.match(regex);
        return (match && match.length > 1 && match[1]) || '';
      }

      function getSecondMatch(regex) {
        var match = ua.match(regex);
        return (match && match.length > 1 && match[2]) || '';
      }

      var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
        , likeAndroid = /like android/i.test(ua)
        , android = !likeAndroid && /android/i.test(ua)
        , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
        , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
        , chromeos = /CrOS/.test(ua)
        , silk = /silk/i.test(ua)
        , sailfish = /sailfish/i.test(ua)
        , tizen = /tizen/i.test(ua)
        , webos = /(web|hpw)(o|0)s/i.test(ua)
        , windowsphone = /windows phone/i.test(ua)
        , samsungBrowser = /SamsungBrowser/i.test(ua)
        , windows = !windowsphone && /windows/i.test(ua)
        , mac = !iosdevice && !silk && /macintosh/i.test(ua)
        , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
        , edgeVersion = getSecondMatch(/edg([ea]|ios)\/(\d+(\.\d+)?)/i)
        , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
        , tablet = /tablet/i.test(ua) && !/tablet pc/i.test(ua)
        , mobile = !tablet && /[^-]mobi/i.test(ua)
        , xbox = /xbox/i.test(ua)
        , result;

      if (/opera/i.test(ua)) {
        //  an old Opera
        result = {
          name: 'Opera'
        , opera: t
        , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
        };
      } else if (/opr\/|opios/i.test(ua)) {
        // a new Opera
        result = {
          name: 'Opera'
          , opera: t
          , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
        };
      }
      else if (/SamsungBrowser/i.test(ua)) {
        result = {
          name: 'Samsung Internet for Android'
          , samsungBrowser: t
          , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
        };
      }
      else if (/Whale/i.test(ua)) {
        result = {
          name: 'NAVER Whale browser'
          , whale: t
          , version: getFirstMatch(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)
        };
      }
      else if (/MZBrowser/i.test(ua)) {
        result = {
          name: 'MZ Browser'
          , mzbrowser: t
          , version: getFirstMatch(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)
        };
      }
      else if (/coast/i.test(ua)) {
        result = {
          name: 'Opera Coast'
          , coast: t
          , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
        };
      }
      else if (/focus/i.test(ua)) {
        result = {
          name: 'Focus'
          , focus: t
          , version: getFirstMatch(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)
        };
      }
      else if (/yabrowser/i.test(ua)) {
        result = {
          name: 'Yandex Browser'
        , yandexbrowser: t
        , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
        };
      }
      else if (/ucbrowser/i.test(ua)) {
        result = {
            name: 'UC Browser'
          , ucbrowser: t
          , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
        };
      }
      else if (/mxios/i.test(ua)) {
        result = {
          name: 'Maxthon'
          , maxthon: t
          , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
        };
      }
      else if (/epiphany/i.test(ua)) {
        result = {
          name: 'Epiphany'
          , epiphany: t
          , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
        };
      }
      else if (/puffin/i.test(ua)) {
        result = {
          name: 'Puffin'
          , puffin: t
          , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
        };
      }
      else if (/sleipnir/i.test(ua)) {
        result = {
          name: 'Sleipnir'
          , sleipnir: t
          , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
        };
      }
      else if (/k-meleon/i.test(ua)) {
        result = {
          name: 'K-Meleon'
          , kMeleon: t
          , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
        };
      }
      else if (windowsphone) {
        result = {
          name: 'Windows Phone'
        , osname: 'Windows Phone'
        , windowsphone: t
        };
        if (edgeVersion) {
          result.msedge = t;
          result.version = edgeVersion;
        }
        else {
          result.msie = t;
          result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i);
        }
      }
      else if (/msie|trident/i.test(ua)) {
        result = {
          name: 'Internet Explorer'
        , msie: t
        , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
        };
      } else if (chromeos) {
        result = {
          name: 'Chrome'
        , osname: 'Chrome OS'
        , chromeos: t
        , chromeBook: t
        , chrome: t
        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        };
      } else if (/edg([ea]|ios)/i.test(ua)) {
        result = {
          name: 'Microsoft Edge'
        , msedge: t
        , version: edgeVersion
        };
      }
      else if (/vivaldi/i.test(ua)) {
        result = {
          name: 'Vivaldi'
          , vivaldi: t
          , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
        };
      }
      else if (sailfish) {
        result = {
          name: 'Sailfish'
        , osname: 'Sailfish OS'
        , sailfish: t
        , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
        };
      }
      else if (/seamonkey\//i.test(ua)) {
        result = {
          name: 'SeaMonkey'
        , seamonkey: t
        , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
        };
      }
      else if (/firefox|iceweasel|fxios/i.test(ua)) {
        result = {
          name: 'Firefox'
        , firefox: t
        , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
        };
        if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
          result.firefoxos = t;
          result.osname = 'Firefox OS';
        }
      }
      else if (silk) {
        result =  {
          name: 'Amazon Silk'
        , silk: t
        , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
        };
      }
      else if (/phantom/i.test(ua)) {
        result = {
          name: 'PhantomJS'
        , phantom: t
        , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
        };
      }
      else if (/slimerjs/i.test(ua)) {
        result = {
          name: 'SlimerJS'
          , slimer: t
          , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
        };
      }
      else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
        result = {
          name: 'BlackBerry'
        , osname: 'BlackBerry OS'
        , blackberry: t
        , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
        };
      }
      else if (webos) {
        result = {
          name: 'WebOS'
        , osname: 'WebOS'
        , webos: t
        , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
        };
        /touchpad\//i.test(ua) && (result.touchpad = t);
      }
      else if (/bada/i.test(ua)) {
        result = {
          name: 'Bada'
        , osname: 'Bada'
        , bada: t
        , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
        };
      }
      else if (tizen) {
        result = {
          name: 'Tizen'
        , osname: 'Tizen'
        , tizen: t
        , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
        };
      }
      else if (/qupzilla/i.test(ua)) {
        result = {
          name: 'QupZilla'
          , qupzilla: t
          , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
        };
      }
      else if (/chromium/i.test(ua)) {
        result = {
          name: 'Chromium'
          , chromium: t
          , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
        };
      }
      else if (/chrome|crios|crmo/i.test(ua)) {
        result = {
          name: 'Chrome'
          , chrome: t
          , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        };
      }
      else if (android) {
        result = {
          name: 'Android'
          , version: versionIdentifier
        };
      }
      else if (/safari|applewebkit/i.test(ua)) {
        result = {
          name: 'Safari'
        , safari: t
        };
        if (versionIdentifier) {
          result.version = versionIdentifier;
        }
      }
      else if (iosdevice) {
        result = {
          name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
        };
        // WTF: version is not part of user agent in web apps
        if (versionIdentifier) {
          result.version = versionIdentifier;
        }
      }
      else if(/googlebot/i.test(ua)) {
        result = {
          name: 'Googlebot'
        , googlebot: t
        , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
        };
      }
      else {
        result = {
          name: getFirstMatch(/^(.*)\/(.*) /),
          version: getSecondMatch(/^(.*)\/(.*) /)
       };
     }

      // set webkit or gecko flag for browsers based on these engines
      if (!result.msedge && /(apple)?webkit/i.test(ua)) {
        if (/(apple)?webkit\/537\.36/i.test(ua)) {
          result.name = result.name || "Blink";
          result.blink = t;
        } else {
          result.name = result.name || "Webkit";
          result.webkit = t;
        }
        if (!result.version && versionIdentifier) {
          result.version = versionIdentifier;
        }
      } else if (!result.opera && /gecko\//i.test(ua)) {
        result.name = result.name || "Gecko";
        result.gecko = t;
        result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i);
      }

      // set OS flags for platforms that have multiple browsers
      if (!result.windowsphone && (android || result.silk)) {
        result.android = t;
        result.osname = 'Android';
      } else if (!result.windowsphone && iosdevice) {
        result[iosdevice] = t;
        result.ios = t;
        result.osname = 'iOS';
      } else if (mac) {
        result.mac = t;
        result.osname = 'macOS';
      } else if (xbox) {
        result.xbox = t;
        result.osname = 'Xbox';
      } else if (windows) {
        result.windows = t;
        result.osname = 'Windows';
      } else if (linux) {
        result.linux = t;
        result.osname = 'Linux';
      }

      function getWindowsVersion (s) {
        switch (s) {
          case 'NT': return 'NT'
          case 'XP': return 'XP'
          case 'NT 5.0': return '2000'
          case 'NT 5.1': return 'XP'
          case 'NT 5.2': return '2003'
          case 'NT 6.0': return 'Vista'
          case 'NT 6.1': return '7'
          case 'NT 6.2': return '8'
          case 'NT 6.3': return '8.1'
          case 'NT 10.0': return '10'
          default: return undefined
        }
      }

      // OS version extraction
      var osVersion = '';
      if (result.windows) {
        osVersion = getWindowsVersion(getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i));
      } else if (result.windowsphone) {
        osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
      } else if (result.mac) {
        osVersion = getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i);
        osVersion = osVersion.replace(/[_\s]/g, '.');
      } else if (iosdevice) {
        osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
        osVersion = osVersion.replace(/[_\s]/g, '.');
      } else if (android) {
        osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
      } else if (result.webos) {
        osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
      } else if (result.blackberry) {
        osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
      } else if (result.bada) {
        osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
      } else if (result.tizen) {
        osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
      }
      if (osVersion) {
        result.osversion = osVersion;
      }

      // device type extraction
      var osMajorVersion = !result.windows && osVersion.split('.')[0];
      if (
           tablet
        || nexusTablet
        || iosdevice == 'ipad'
        || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
        || result.silk
      ) {
        result.tablet = t;
      } else if (
           mobile
        || iosdevice == 'iphone'
        || iosdevice == 'ipod'
        || android
        || nexusMobile
        || result.blackberry
        || result.webos
        || result.bada
      ) {
        result.mobile = t;
      }

      // Graded Browser Support
      // http://developer.yahoo.com/yui/articles/gbs
      if (result.msedge ||
          (result.msie && result.version >= 10) ||
          (result.yandexbrowser && result.version >= 15) ||
  		    (result.vivaldi && result.version >= 1.0) ||
          (result.chrome && result.version >= 20) ||
          (result.samsungBrowser && result.version >= 4) ||
          (result.whale && compareVersions([result.version, '1.0']) === 1) ||
          (result.mzbrowser && compareVersions([result.version, '6.0']) === 1) ||
          (result.focus && compareVersions([result.version, '1.0']) === 1) ||
          (result.firefox && result.version >= 20.0) ||
          (result.safari && result.version >= 6) ||
          (result.opera && result.version >= 10.0) ||
          (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
          (result.blackberry && result.version >= 10.1)
          || (result.chromium && result.version >= 20)
          ) {
        result.a = t;
      }
      else if ((result.msie && result.version < 10) ||
          (result.chrome && result.version < 20) ||
          (result.firefox && result.version < 20.0) ||
          (result.safari && result.version < 6) ||
          (result.opera && result.version < 10.0) ||
          (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
          || (result.chromium && result.version < 20)
          ) {
        result.c = t;
      } else result.x = t;

      return result
    }

    var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '');

    bowser.test = function (browserList) {
      for (var i = 0; i < browserList.length; ++i) {
        var browserItem = browserList[i];
        if (typeof browserItem=== 'string') {
          if (browserItem in bowser) {
            return true;
          }
        }
      }
      return false;
    };

    /**
     * Get version precisions count
     *
     * @example
     *   getVersionPrecision("1.10.3") // 3
     *
     * @param  {string} version
     * @return {number}
     */
    function getVersionPrecision(version) {
      return version.split(".").length;
    }

    /**
     * Array::map polyfill
     *
     * @param  {Array} arr
     * @param  {Function} iterator
     * @return {Array}
     */
    function map(arr, iterator) {
      var result = [], i;
      if (Array.prototype.map) {
        return Array.prototype.map.call(arr, iterator);
      }
      for (i = 0; i < arr.length; i++) {
        result.push(iterator(arr[i]));
      }
      return result;
    }

    /**
     * Calculate browser version weight
     *
     * @example
     *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
     *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
     *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
     *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
     *
     * @param  {Array<String>} versions versions to compare
     * @return {Number} comparison result
     */
    function compareVersions(versions) {
      // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
      var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
      var chunks = map(versions, function (version) {
        var delta = precision - getVersionPrecision(version);

        // 2) "9" -> "9.0" (for precision = 2)
        version = version + new Array(delta + 1).join(".0");

        // 3) "9.0" -> ["000000000"", "000000009"]
        return map(version.split("."), function (chunk) {
          return new Array(20 - chunk.length).join("0") + chunk;
        }).reverse();
      });

      // iterate in reverse order by reversed chunks array
      while (--precision >= 0) {
        // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
        if (chunks[0][precision] > chunks[1][precision]) {
          return 1;
        }
        else if (chunks[0][precision] === chunks[1][precision]) {
          if (precision === 0) {
            // all version chunks are same
            return 0;
          }
        }
        else {
          return -1;
        }
      }
    }

    /**
     * Check if browser is unsupported
     *
     * @example
     *   bowser.isUnsupportedBrowser({
     *     msie: "10",
     *     firefox: "23",
     *     chrome: "29",
     *     safari: "5.1",
     *     opera: "16",
     *     phantom: "534"
     *   });
     *
     * @param  {Object}  minVersions map of minimal version to browser
     * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
     * @param  {String}  [ua] user agent string
     * @return {Boolean}
     */
    function isUnsupportedBrowser(minVersions, strictMode, ua) {
      var _bowser = bowser;

      // make strictMode param optional with ua param usage
      if (typeof strictMode === 'string') {
        ua = strictMode;
        strictMode = void(0);
      }

      if (strictMode === void(0)) {
        strictMode = false;
      }
      if (ua) {
        _bowser = detect(ua);
      }

      var version = "" + _bowser.version;
      for (var browser in minVersions) {
        if (minVersions.hasOwnProperty(browser)) {
          if (_bowser[browser]) {
            if (typeof minVersions[browser] !== 'string') {
              throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
            }

            // browser version and min supported version.
            return compareVersions([version, minVersions[browser]]) < 0;
          }
        }
      }

      return strictMode; // not found
    }

    /**
     * Check if browser is supported
     *
     * @param  {Object} minVersions map of minimal version to browser
     * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
     * @param  {String}  [ua] user agent string
     * @return {Boolean}
     */
    function check(minVersions, strictMode, ua) {
      return !isUnsupportedBrowser(minVersions, strictMode, ua);
    }

    bowser.isUnsupportedBrowser = isUnsupportedBrowser;
    bowser.compareVersions = compareVersions;
    bowser.check = check;

    /*
     * Set our detect method to the main bowser object so we can
     * reuse it to test other user agents.
     * This is needed to implement future tests.
     */
    bowser._detect = detect;

    /*
     * Set our detect public method to the main bowser object
     * This is needed to implement bowser in server side
     */
    bowser.detect = detect;
    return bowser
  });
  });

  var getBrowserInformation_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getBrowserInformation;



  var _bowser2 = _interopRequireDefault(bowser);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var prefixByBrowser = {
    chrome: 'Webkit',
    safari: 'Webkit',
    ios: 'Webkit',
    android: 'Webkit',
    phantom: 'Webkit',
    opera: 'Webkit',
    webos: 'Webkit',
    blackberry: 'Webkit',
    bada: 'Webkit',
    tizen: 'Webkit',
    chromium: 'Webkit',
    vivaldi: 'Webkit',
    firefox: 'Moz',
    seamoney: 'Moz',
    sailfish: 'Moz',
    msie: 'ms',
    msedge: 'ms'
  };


  var browserByCanIuseAlias = {
    chrome: 'chrome',
    chromium: 'chrome',
    safari: 'safari',
    firfox: 'firefox',
    msedge: 'edge',
    opera: 'opera',
    vivaldi: 'opera',
    msie: 'ie'
  };

  function getBrowserName(browserInfo) {
    if (browserInfo.firefox) {
      return 'firefox';
    }

    if (browserInfo.mobile || browserInfo.tablet) {
      if (browserInfo.ios) {
        return 'ios_saf';
      } else if (browserInfo.android) {
        return 'android';
      } else if (browserInfo.opera) {
        return 'op_mini';
      }
    }

    for (var browser in browserByCanIuseAlias) {
      if (browserInfo.hasOwnProperty(browser)) {
        return browserByCanIuseAlias[browser];
      }
    }
  }

  /**
   * Uses bowser to get default browser browserInformation such as version and name
   * Evaluates bowser browserInfo and adds vendorPrefix browserInformation
   * @param {string} userAgent - userAgent that gets evaluated
   */
  function getBrowserInformation(userAgent) {
    var browserInfo = _bowser2.default._detect(userAgent);

    if (browserInfo.yandexbrowser) {
      browserInfo = _bowser2.default._detect(userAgent.replace(/YaBrowser\/[0-9.]*/, ''));
    }

    for (var browser in prefixByBrowser) {
      if (browserInfo.hasOwnProperty(browser)) {
        var prefix = prefixByBrowser[browser];

        browserInfo.jsPrefix = prefix;
        browserInfo.cssPrefix = '-' + prefix.toLowerCase() + '-';
        break;
      }
    }

    browserInfo.browserName = getBrowserName(browserInfo);

    // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
    if (browserInfo.version) {
      browserInfo.browserVersion = parseFloat(browserInfo.version);
    } else {
      browserInfo.browserVersion = parseInt(parseFloat(browserInfo.osversion), 10);
    }

    browserInfo.osVersion = parseFloat(browserInfo.osversion);

    // iOS forces all browsers to use Safari under the hood
    // as the Safari version seems to match the iOS version
    // we just explicitely use the osversion instead
    // https://github.com/rofrischmann/inline-style-prefixer/issues/72
    if (browserInfo.browserName === 'ios_saf' && browserInfo.browserVersion > browserInfo.osVersion) {
      browserInfo.browserVersion = browserInfo.osVersion;
    }

    // seperate native android chrome
    // https://github.com/rofrischmann/inline-style-prefixer/issues/45
    if (browserInfo.browserName === 'android' && browserInfo.chrome && browserInfo.browserVersion > 37) {
      browserInfo.browserName = 'and_chr';
    }

    // For android < 4.4 we want to check the osversion
    // not the chrome version, see issue #26
    // https://github.com/rofrischmann/inline-style-prefixer/issues/26
    if (browserInfo.browserName === 'android' && browserInfo.osVersion < 5) {
      browserInfo.browserVersion = browserInfo.osVersion;
    }

    // Samsung browser are basically build on Chrome > 44
    // https://github.com/rofrischmann/inline-style-prefixer/issues/102
    if (browserInfo.browserName === 'android' && browserInfo.samsungBrowser) {
      browserInfo.browserName = 'and_chr';
      browserInfo.browserVersion = 44;
    }

    return browserInfo;
  }
  module.exports = exports['default'];
  });

  unwrapExports(getBrowserInformation_1);

  var getPrefixedKeyframes_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getPrefixedKeyframes;
  function getPrefixedKeyframes(browserName, browserVersion, cssPrefix) {
    var prefixedKeyframes = 'keyframes';

    if (browserName === 'chrome' && browserVersion < 43 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 9 || browserName === 'opera' && browserVersion < 30 || browserName === 'android' && browserVersion <= 4.4 || browserName === 'and_uc') {
      return cssPrefix + prefixedKeyframes;
    }
    return prefixedKeyframes;
  }
  module.exports = exports['default'];
  });

  unwrapExports(getPrefixedKeyframes_1);

  var createPrefixer_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  exports.default = createPrefixer;



  var _getBrowserInformation2 = _interopRequireDefault(getBrowserInformation_1);



  var _getPrefixedKeyframes2 = _interopRequireDefault(getPrefixedKeyframes_1);



  var _capitalizeString2 = _interopRequireDefault(capitalizeString_1);



  var _addNewValuesOnly2 = _interopRequireDefault(addNewValuesOnly_1);



  var _isObject2 = _interopRequireDefault(isObject_1);



  var _prefixValue2 = _interopRequireDefault(prefixValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function createPrefixer(_ref) {
    var prefixMap = _ref.prefixMap,
        plugins = _ref.plugins;
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (style) {
      return style;
    };

    return function () {
      /**
      * Instantiante a new prefixer
      * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
      * @param {string} keepUnprefixed - keeps unprefixed properties and values
      */
      function Prefixer() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Prefixer);

        var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

        this._userAgent = options.userAgent || defaultUserAgent;
        this._keepUnprefixed = options.keepUnprefixed || false;

        if (this._userAgent) {
          this._browserInfo = (0, _getBrowserInformation2.default)(this._userAgent);
        }

        // Checks if the userAgent was resolved correctly
        if (this._browserInfo && this._browserInfo.cssPrefix) {
          this.prefixedKeyframes = (0, _getPrefixedKeyframes2.default)(this._browserInfo.browserName, this._browserInfo.browserVersion, this._browserInfo.cssPrefix);
        } else {
          this._useFallback = true;
          return false;
        }

        var prefixData = this._browserInfo.browserName && prefixMap[this._browserInfo.browserName];
        if (prefixData) {
          this._requiresPrefix = {};

          for (var property in prefixData) {
            if (prefixData[property] >= this._browserInfo.browserVersion) {
              this._requiresPrefix[property] = true;
            }
          }

          this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
        } else {
          this._useFallback = true;
        }

        this._metaData = {
          browserVersion: this._browserInfo.browserVersion,
          browserName: this._browserInfo.browserName,
          cssPrefix: this._browserInfo.cssPrefix,
          jsPrefix: this._browserInfo.jsPrefix,
          keepUnprefixed: this._keepUnprefixed,
          requiresPrefix: this._requiresPrefix
        };
      }

      _createClass(Prefixer, [{
        key: 'prefix',
        value: function prefix(style) {
          // use static prefixer as fallback if userAgent can not be resolved
          if (this._useFallback) {
            return fallback(style);
          }

          // only add prefixes if needed
          if (!this._hasPropsRequiringPrefix) {
            return style;
          }

          return this._prefixStyle(style);
        }
      }, {
        key: '_prefixStyle',
        value: function _prefixStyle(style) {
          for (var property in style) {
            var value = style[property];

            // handle nested objects
            if ((0, _isObject2.default)(value)) {
              style[property] = this.prefix(value);
              // handle array values
            } else if (Array.isArray(value)) {
              var combinedValue = [];

              for (var i = 0, len = value.length; i < len; ++i) {
                var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, this._metaData);
                (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
              }

              // only modify the value if it was touched
              // by any plugin to prevent unnecessary mutations
              if (combinedValue.length > 0) {
                style[property] = combinedValue;
              }
            } else {
              var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, this._metaData);

              // only modify the value if it was touched
              // by any plugin to prevent unnecessary mutations
              if (_processedValue) {
                style[property] = _processedValue;
              }

              // add prefixes to properties
              if (this._requiresPrefix.hasOwnProperty(property)) {
                style[this._browserInfo.jsPrefix + (0, _capitalizeString2.default)(property)] = value;
                if (!this._keepUnprefixed) {
                  delete style[property];
                }
              }
            }
          }

          return style;
        }

        /**
        * Returns a prefixed version of the style object using all vendor prefixes
        * @param {Object} styles - Style object that gets prefixed properties added
        * @returns {Object} - Style object with prefixed properties and values
        */

      }], [{
        key: 'prefixAll',
        value: function prefixAll(styles) {
          return fallback(styles);
        }
      }]);

      return Prefixer;
    }();
  }
  module.exports = exports['default'];
  });

  unwrapExports(createPrefixer_1$1);

  var getPrefixedValue_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getPrefixedValue;
  function getPrefixedValue(prefixedValue, value, keepUnprefixed) {
    if (keepUnprefixed) {
      return [prefixedValue, value];
    }
    return prefixedValue;
  }
  module.exports = exports["default"];
  });

  unwrapExports(getPrefixedValue_1);

  var calc_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = calc;



  var _getPrefixedValue2 = _interopRequireDefault(getPrefixedValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function calc(property, value, style, _ref) {
    var browserName = _ref.browserName,
        browserVersion = _ref.browserVersion,
        cssPrefix = _ref.cssPrefix,
        keepUnprefixed = _ref.keepUnprefixed;

    if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browserName === 'firefox' && browserVersion < 15 || browserName === 'chrome' && browserVersion < 25 || browserName === 'safari' && browserVersion < 6.1 || browserName === 'ios_saf' && browserVersion < 7)) {
      return (0, _getPrefixedValue2.default)(value.replace(/calc\(/g, cssPrefix + 'calc('), value, keepUnprefixed);
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(calc_1);

  var flex_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flex;



  var _getPrefixedValue2 = _interopRequireDefault(getPrefixedValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var values = {
    flex: true,
    'inline-flex': true
  };
  function flex(property, value, style, _ref) {
    var browserName = _ref.browserName,
        browserVersion = _ref.browserVersion,
        cssPrefix = _ref.cssPrefix,
        keepUnprefixed = _ref.keepUnprefixed;

    if (property === 'display' && values[value] && (browserName === 'chrome' && browserVersion < 29 && browserVersion > 20 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 9 && browserVersion > 6 || browserName === 'opera' && (browserVersion === 15 || browserVersion === 16))) {
      return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(flex_1);

  var flexboxIE_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flexboxIE;



  var _getPrefixedValue2 = _interopRequireDefault(getPrefixedValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var alternativeValues = {
    'space-around': 'distribute',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end',
    flex: 'flexbox',
    'inline-flex': 'inline-flexbox'
  };

  var alternativeProps = {
    alignContent: 'msFlexLinePack',
    alignSelf: 'msFlexItemAlign',
    alignItems: 'msFlexAlign',
    justifyContent: 'msFlexPack',
    order: 'msFlexOrder',
    flexGrow: 'msFlexPositive',
    flexShrink: 'msFlexNegative',
    flexBasis: 'msFlexPreferredSize'
  };

  function flexboxIE(property, value, style, _ref) {
    var browserName = _ref.browserName,
        browserVersion = _ref.browserVersion,
        cssPrefix = _ref.cssPrefix,
        keepUnprefixed = _ref.keepUnprefixed,
        requiresPrefix = _ref.requiresPrefix;

    if ((alternativeProps.hasOwnProperty(property) || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browserName === 'ie_mob' || browserName === 'ie') && browserVersion === 10) {
      delete requiresPrefix[property];

      if (!keepUnprefixed && !Array.isArray(style[property])) {
        delete style[property];
      }
      if (property === 'display' && alternativeValues.hasOwnProperty(value)) {
        return (0, _getPrefixedValue2.default)(cssPrefix + alternativeValues[value], value, keepUnprefixed);
      }
      if (alternativeProps.hasOwnProperty(property)) {
        style[alternativeProps[property]] = alternativeValues[value] || value;
      }
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(flexboxIE_1);

  var flexboxOld_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flexboxOld;



  var _getPrefixedValue2 = _interopRequireDefault(getPrefixedValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var alternativeValues = {
    'space-around': 'justify',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end',
    'wrap-reverse': 'multiple',
    wrap: 'multiple',
    flex: 'box',
    'inline-flex': 'inline-box'
  };


  var alternativeProps = {
    alignItems: 'WebkitBoxAlign',
    justifyContent: 'WebkitBoxPack',
    flexWrap: 'WebkitBoxLines'
  };

  var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];
  var properties = Object.keys(alternativeProps).concat(otherProps);

  function flexboxOld(property, value, style, _ref) {
    var browserName = _ref.browserName,
        browserVersion = _ref.browserVersion,
        cssPrefix = _ref.cssPrefix,
        keepUnprefixed = _ref.keepUnprefixed,
        requiresPrefix = _ref.requiresPrefix;

    if ((properties.indexOf(property) > -1 || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browserName === 'firefox' && browserVersion < 22 || browserName === 'chrome' && browserVersion < 21 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion <= 6.1 || browserName === 'android' && browserVersion < 4.4 || browserName === 'and_uc')) {
      delete requiresPrefix[property];

      if (!keepUnprefixed && !Array.isArray(style[property])) {
        delete style[property];
      }
      if (property === 'flexDirection' && typeof value === 'string') {
        if (value.indexOf('column') > -1) {
          style.WebkitBoxOrient = 'vertical';
        } else {
          style.WebkitBoxOrient = 'horizontal';
        }
        if (value.indexOf('reverse') > -1) {
          style.WebkitBoxDirection = 'reverse';
        } else {
          style.WebkitBoxDirection = 'normal';
        }
      }
      if (property === 'display' && alternativeValues.hasOwnProperty(value)) {
        return (0, _getPrefixedValue2.default)(cssPrefix + alternativeValues[value], value, keepUnprefixed);
      }
      if (alternativeProps.hasOwnProperty(property)) {
        style[alternativeProps[property]] = alternativeValues[value] || value;
      }
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(flexboxOld_1);

  var gradient_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = gradient;



  var _getPrefixedValue2 = _interopRequireDefault(getPrefixedValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
  function gradient(property, value, style, _ref) {
    var browserName = _ref.browserName,
        browserVersion = _ref.browserVersion,
        cssPrefix = _ref.cssPrefix,
        keepUnprefixed = _ref.keepUnprefixed;

    if (typeof value === 'string' && values.test(value) && (browserName === 'firefox' && browserVersion < 16 || browserName === 'chrome' && browserVersion < 26 || (browserName === 'safari' || browserName === 'ios_saf') && browserVersion < 7 || (browserName === 'opera' || browserName === 'op_mini') && browserVersion < 12.1 || browserName === 'android' && browserVersion < 4.4 || browserName === 'and_uc')) {
      return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(gradient_1);

  var sizing_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = sizing;



  var _getPrefixedValue2 = _interopRequireDefault(getPrefixedValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var properties = {
    maxHeight: true,
    maxWidth: true,
    width: true,
    height: true,
    columnWidth: true,
    minWidth: true,
    minHeight: true
  };

  var values = {
    'min-content': true,
    'max-content': true,
    'fill-available': true,
    'fit-content': true,
    'contain-floats': true

    // TODO: chrome & opera support it
  };function sizing(property, value, style, _ref) {
    var cssPrefix = _ref.cssPrefix,
        keepUnprefixed = _ref.keepUnprefixed;

    // This might change in the future
    // Keep an eye on it
    if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
      return (0, _getPrefixedValue2.default)(cssPrefix + value, value, keepUnprefixed);
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(sizing_1);

  /* eslint-disable no-var, prefer-template */
  var uppercasePattern = /[A-Z]/g;
  var msPattern = /^ms-/;
  var cache = {};

  function toHyphenLower(match) {
    return '-' + match.toLowerCase()
  }

  function hyphenateStyleName(name) {
    if (cache.hasOwnProperty(name)) {
      return cache[name]
    }

    var hName = name.replace(uppercasePattern, toHyphenLower);
    return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
  }

  var hyphenateProperty_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = hyphenateProperty;



  var _hyphenateStyleName2 = _interopRequireDefault(hyphenateStyleName);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function hyphenateProperty(property) {
    return (0, _hyphenateStyleName2.default)(property);
  }
  module.exports = exports['default'];
  });

  unwrapExports(hyphenateProperty_1);

  var transition_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = transition;



  var _hyphenateProperty2 = _interopRequireDefault(hyphenateProperty_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var properties = {
    transition: true,
    transitionProperty: true,
    WebkitTransition: true,
    WebkitTransitionProperty: true,
    MozTransition: true,
    MozTransitionProperty: true
  };


  var requiresPrefixDashCased = void 0;

  function transition(property, value, style, _ref) {
    var cssPrefix = _ref.cssPrefix,
        keepUnprefixed = _ref.keepUnprefixed,
        requiresPrefix = _ref.requiresPrefix;

    if (typeof value === 'string' && properties.hasOwnProperty(property)) {
      // memoize the prefix array for later use
      if (!requiresPrefixDashCased) {
        requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
          return (0, _hyphenateProperty2.default)(prop);
        });
      }

      // only split multi values, not cubic beziers
      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

      requiresPrefixDashCased.forEach(function (prop) {
        multipleValues.forEach(function (val, index) {
          if (val.indexOf(prop) > -1 && prop !== 'order') {
            multipleValues[index] = val.replace(prop, cssPrefix + prop) + (keepUnprefixed ? ',' + val : '');
          }
        });
      });

      return multipleValues.join(',');
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(transition_1);

  var autoprefixerDynamic = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _calc2 = _interopRequireDefault(calc_1);



  var _flex2 = _interopRequireDefault(flex_1);



  var _flexboxIE2 = _interopRequireDefault(flexboxIE_1);



  var _flexboxOld2 = _interopRequireDefault(flexboxOld_1);



  var _gradient2 = _interopRequireDefault(gradient_1);



  var _sizing2 = _interopRequireDefault(sizing_1);



  var _transition2 = _interopRequireDefault(transition_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {
    plugins: [_calc2.default, _flex2.default, _flexboxIE2.default, _flexboxOld2.default, _gradient2.default, _sizing2.default, _transition2.default],
    prefixMap: { "chrome": { "transform": 35, "transformOrigin": 35, "transformOriginX": 35, "transformOriginY": 35, "backfaceVisibility": 35, "perspective": 35, "perspectiveOrigin": 35, "transformStyle": 35, "transformOriginZ": 35, "animation": 42, "animationDelay": 42, "animationDirection": 42, "animationFillMode": 42, "animationDuration": 42, "animationIterationCount": 42, "animationName": 42, "animationPlayState": 42, "animationTimingFunction": 42, "appearance": 60, "userSelect": 53, "fontKerning": 32, "textEmphasisPosition": 60, "textEmphasis": 60, "textEmphasisStyle": 60, "textEmphasisColor": 60, "boxDecorationBreak": 60, "clipPath": 54, "maskImage": 60, "maskMode": 60, "maskRepeat": 60, "maskPosition": 60, "maskClip": 60, "maskOrigin": 60, "maskSize": 60, "maskComposite": 60, "mask": 60, "maskBorderSource": 60, "maskBorderMode": 60, "maskBorderSlice": 60, "maskBorderWidth": 60, "maskBorderOutset": 60, "maskBorderRepeat": 60, "maskBorder": 60, "maskType": 60, "textDecorationStyle": 56, "textDecorationSkip": 56, "textDecorationLine": 56, "textDecorationColor": 56, "filter": 52, "fontFeatureSettings": 47, "breakAfter": 49, "breakBefore": 49, "breakInside": 49, "columnCount": 49, "columnFill": 49, "columnGap": 49, "columnRule": 49, "columnRuleColor": 49, "columnRuleStyle": 49, "columnRuleWidth": 49, "columns": 49, "columnSpan": 49, "columnWidth": 49 }, "safari": { "flex": 8, "flexBasis": 8, "flexDirection": 8, "flexGrow": 8, "flexFlow": 8, "flexShrink": 8, "flexWrap": 8, "alignContent": 8, "alignItems": 8, "alignSelf": 8, "justifyContent": 8, "order": 8, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8, "transformOrigin": 8, "transformOriginX": 8, "transformOriginY": 8, "backfaceVisibility": 8, "perspective": 8, "perspectiveOrigin": 8, "transformStyle": 8, "transformOriginZ": 8, "animation": 8, "animationDelay": 8, "animationDirection": 8, "animationFillMode": 8, "animationDuration": 8, "animationIterationCount": 8, "animationName": 8, "animationPlayState": 8, "animationTimingFunction": 8, "appearance": 10.1, "userSelect": 10.1, "backdropFilter": 10.1, "fontKerning": 9, "scrollSnapType": 10, "scrollSnapPointsX": 10, "scrollSnapPointsY": 10, "scrollSnapDestination": 10, "scrollSnapCoordinate": 10, "textEmphasisPosition": 7, "textEmphasis": 7, "textEmphasisStyle": 7, "textEmphasisColor": 7, "boxDecorationBreak": 10.1, "clipPath": 10.1, "maskImage": 10.1, "maskMode": 10.1, "maskRepeat": 10.1, "maskPosition": 10.1, "maskClip": 10.1, "maskOrigin": 10.1, "maskSize": 10.1, "maskComposite": 10.1, "mask": 10.1, "maskBorderSource": 10.1, "maskBorderMode": 10.1, "maskBorderSlice": 10.1, "maskBorderWidth": 10.1, "maskBorderOutset": 10.1, "maskBorderRepeat": 10.1, "maskBorder": 10.1, "maskType": 10.1, "textDecorationStyle": 10.1, "textDecorationSkip": 10.1, "textDecorationLine": 10.1, "textDecorationColor": 10.1, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 10.1, "flowInto": 10.1, "flowFrom": 10.1, "breakBefore": 8, "breakAfter": 8, "breakInside": 8, "regionFragment": 10.1, "columnCount": 8, "columnFill": 8, "columnGap": 8, "columnRule": 8, "columnRuleColor": 8, "columnRuleStyle": 8, "columnRuleWidth": 8, "columns": 8, "columnSpan": 8, "columnWidth": 8 }, "firefox": { "appearance": 55, "userSelect": 55, "boxSizing": 28, "textAlignLast": 48, "textDecorationStyle": 35, "textDecorationSkip": 35, "textDecorationLine": 35, "textDecorationColor": 35, "tabSize": 55, "hyphens": 42, "fontFeatureSettings": 33, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "opera": { "flex": 16, "flexBasis": 16, "flexDirection": 16, "flexGrow": 16, "flexFlow": 16, "flexShrink": 16, "flexWrap": 16, "alignContent": 16, "alignItems": 16, "alignSelf": 16, "justifyContent": 16, "order": 16, "transform": 22, "transformOrigin": 22, "transformOriginX": 22, "transformOriginY": 22, "backfaceVisibility": 22, "perspective": 22, "perspectiveOrigin": 22, "transformStyle": 22, "transformOriginZ": 22, "animation": 29, "animationDelay": 29, "animationDirection": 29, "animationFillMode": 29, "animationDuration": 29, "animationIterationCount": 29, "animationName": 29, "animationPlayState": 29, "animationTimingFunction": 29, "appearance": 45, "userSelect": 40, "fontKerning": 19, "textEmphasisPosition": 45, "textEmphasis": 45, "textEmphasisStyle": 45, "textEmphasisColor": 45, "boxDecorationBreak": 45, "clipPath": 41, "maskImage": 45, "maskMode": 45, "maskRepeat": 45, "maskPosition": 45, "maskClip": 45, "maskOrigin": 45, "maskSize": 45, "maskComposite": 45, "mask": 45, "maskBorderSource": 45, "maskBorderMode": 45, "maskBorderSlice": 45, "maskBorderWidth": 45, "maskBorderOutset": 45, "maskBorderRepeat": 45, "maskBorder": 45, "maskType": 45, "textDecorationStyle": 43, "textDecorationSkip": 43, "textDecorationLine": 43, "textDecorationColor": 43, "filter": 39, "fontFeatureSettings": 34, "breakAfter": 36, "breakBefore": 36, "breakInside": 36, "columnCount": 36, "columnFill": 36, "columnGap": 36, "columnRule": 36, "columnRuleColor": 36, "columnRuleStyle": 36, "columnRuleWidth": 36, "columns": 36, "columnSpan": 36, "columnWidth": 36 }, "ie": { "flex": 10, "flexDirection": 10, "flexFlow": 10, "flexWrap": 10, "transform": 9, "transformOrigin": 9, "transformOriginX": 9, "transformOriginY": 9, "userSelect": 11, "wrapFlow": 11, "wrapThrough": 11, "wrapMargin": 11, "scrollSnapType": 11, "scrollSnapPointsX": 11, "scrollSnapPointsY": 11, "scrollSnapDestination": 11, "scrollSnapCoordinate": 11, "touchAction": 10, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "gridTemplateColumns": 11, "gridTemplateRows": 11, "gridTemplateAreas": 11, "gridTemplate": 11, "gridAutoColumns": 11, "gridAutoRows": 11, "gridAutoFlow": 11, "grid": 11, "gridRowStart": 11, "gridColumnStart": 11, "gridRowEnd": 11, "gridRow": 11, "gridColumn": 11, "gridColumnEnd": 11, "gridColumnGap": 11, "gridRowGap": 11, "gridArea": 11, "gridGap": 11, "textSizeAdjust": 11 }, "edge": { "userSelect": 15, "wrapFlow": 15, "wrapThrough": 15, "wrapMargin": 15, "scrollSnapType": 15, "scrollSnapPointsX": 15, "scrollSnapPointsY": 15, "scrollSnapDestination": 15, "scrollSnapCoordinate": 15, "hyphens": 15, "flowInto": 15, "flowFrom": 15, "breakBefore": 15, "breakAfter": 15, "breakInside": 15, "regionFragment": 15, "gridTemplateColumns": 15, "gridTemplateRows": 15, "gridTemplateAreas": 15, "gridTemplate": 15, "gridAutoColumns": 15, "gridAutoRows": 15, "gridAutoFlow": 15, "grid": 15, "gridRowStart": 15, "gridColumnStart": 15, "gridRowEnd": 15, "gridRow": 15, "gridColumn": 15, "gridColumnEnd": 15, "gridColumnGap": 15, "gridRowGap": 15, "gridArea": 15, "gridGap": 15 }, "ios_saf": { "flex": 8.1, "flexBasis": 8.1, "flexDirection": 8.1, "flexGrow": 8.1, "flexFlow": 8.1, "flexShrink": 8.1, "flexWrap": 8.1, "alignContent": 8.1, "alignItems": 8.1, "alignSelf": 8.1, "justifyContent": 8.1, "order": 8.1, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8.1, "transformOrigin": 8.1, "transformOriginX": 8.1, "transformOriginY": 8.1, "backfaceVisibility": 8.1, "perspective": 8.1, "perspectiveOrigin": 8.1, "transformStyle": 8.1, "transformOriginZ": 8.1, "animation": 8.1, "animationDelay": 8.1, "animationDirection": 8.1, "animationFillMode": 8.1, "animationDuration": 8.1, "animationIterationCount": 8.1, "animationName": 8.1, "animationPlayState": 8.1, "animationTimingFunction": 8.1, "appearance": 10, "userSelect": 10, "backdropFilter": 10, "fontKerning": 10, "scrollSnapType": 10, "scrollSnapPointsX": 10, "scrollSnapPointsY": 10, "scrollSnapDestination": 10, "scrollSnapCoordinate": 10, "boxDecorationBreak": 10, "clipPath": 10, "maskImage": 10, "maskMode": 10, "maskRepeat": 10, "maskPosition": 10, "maskClip": 10, "maskOrigin": 10, "maskSize": 10, "maskComposite": 10, "mask": 10, "maskBorderSource": 10, "maskBorderMode": 10, "maskBorderSlice": 10, "maskBorderWidth": 10, "maskBorderOutset": 10, "maskBorderRepeat": 10, "maskBorder": 10, "maskType": 10, "textSizeAdjust": 10, "textDecorationStyle": 10, "textDecorationSkip": 10, "textDecorationLine": 10, "textDecorationColor": 10, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 10, "flowInto": 10, "flowFrom": 10, "breakBefore": 8.1, "breakAfter": 8.1, "breakInside": 8.1, "regionFragment": 10, "columnCount": 8.1, "columnFill": 8.1, "columnGap": 8.1, "columnRule": 8.1, "columnRuleColor": 8.1, "columnRuleStyle": 8.1, "columnRuleWidth": 8.1, "columns": 8.1, "columnSpan": 8.1, "columnWidth": 8.1 }, "android": { "borderImage": 4.2, "borderImageOutset": 4.2, "borderImageRepeat": 4.2, "borderImageSlice": 4.2, "borderImageSource": 4.2, "borderImageWidth": 4.2, "flex": 4.2, "flexBasis": 4.2, "flexDirection": 4.2, "flexGrow": 4.2, "flexFlow": 4.2, "flexShrink": 4.2, "flexWrap": 4.2, "alignContent": 4.2, "alignItems": 4.2, "alignSelf": 4.2, "justifyContent": 4.2, "order": 4.2, "transition": 4.2, "transitionDelay": 4.2, "transitionDuration": 4.2, "transitionProperty": 4.2, "transitionTimingFunction": 4.2, "transform": 4.4, "transformOrigin": 4.4, "transformOriginX": 4.4, "transformOriginY": 4.4, "backfaceVisibility": 4.4, "perspective": 4.4, "perspectiveOrigin": 4.4, "transformStyle": 4.4, "transformOriginZ": 4.4, "animation": 4.4, "animationDelay": 4.4, "animationDirection": 4.4, "animationFillMode": 4.4, "animationDuration": 4.4, "animationIterationCount": 4.4, "animationName": 4.4, "animationPlayState": 4.4, "animationTimingFunction": 4.4, "appearance": 53, "userSelect": 53, "fontKerning": 4.4, "textEmphasisPosition": 53, "textEmphasis": 53, "textEmphasisStyle": 53, "textEmphasisColor": 53, "boxDecorationBreak": 53, "clipPath": 53, "maskImage": 53, "maskMode": 53, "maskRepeat": 53, "maskPosition": 53, "maskClip": 53, "maskOrigin": 53, "maskSize": 53, "maskComposite": 53, "mask": 53, "maskBorderSource": 53, "maskBorderMode": 53, "maskBorderSlice": 53, "maskBorderWidth": 53, "maskBorderOutset": 53, "maskBorderRepeat": 53, "maskBorder": 53, "maskType": 53, "filter": 4.4, "fontFeatureSettings": 4.4, "breakAfter": 53, "breakBefore": 53, "breakInside": 53, "columnCount": 53, "columnFill": 53, "columnGap": 53, "columnRule": 53, "columnRuleColor": 53, "columnRuleStyle": 53, "columnRuleWidth": 53, "columns": 53, "columnSpan": 53, "columnWidth": 53 }, "and_chr": { "appearance": 56, "textEmphasisPosition": 56, "textEmphasis": 56, "textEmphasisStyle": 56, "textEmphasisColor": 56, "boxDecorationBreak": 56, "maskImage": 56, "maskMode": 56, "maskRepeat": 56, "maskPosition": 56, "maskClip": 56, "maskOrigin": 56, "maskSize": 56, "maskComposite": 56, "mask": 56, "maskBorderSource": 56, "maskBorderMode": 56, "maskBorderSlice": 56, "maskBorderWidth": 56, "maskBorderOutset": 56, "maskBorderRepeat": 56, "maskBorder": 56, "maskType": 56, "textDecorationStyle": 56, "textDecorationSkip": 56, "textDecorationLine": 56, "textDecorationColor": 56 }, "and_uc": { "flex": 11, "flexBasis": 11, "flexDirection": 11, "flexGrow": 11, "flexFlow": 11, "flexShrink": 11, "flexWrap": 11, "alignContent": 11, "alignItems": 11, "alignSelf": 11, "justifyContent": 11, "order": 11, "transition": 11, "transitionDelay": 11, "transitionDuration": 11, "transitionProperty": 11, "transitionTimingFunction": 11, "transform": 11, "transformOrigin": 11, "transformOriginX": 11, "transformOriginY": 11, "backfaceVisibility": 11, "perspective": 11, "perspectiveOrigin": 11, "transformStyle": 11, "transformOriginZ": 11, "animation": 11, "animationDelay": 11, "animationDirection": 11, "animationFillMode": 11, "animationDuration": 11, "animationIterationCount": 11, "animationName": 11, "animationPlayState": 11, "animationTimingFunction": 11, "appearance": 11, "userSelect": 11, "fontKerning": 11, "textEmphasisPosition": 11, "textEmphasis": 11, "textEmphasisStyle": 11, "textEmphasisColor": 11, "maskImage": 11, "maskMode": 11, "maskRepeat": 11, "maskPosition": 11, "maskClip": 11, "maskOrigin": 11, "maskSize": 11, "maskComposite": 11, "mask": 11, "maskBorderSource": 11, "maskBorderMode": 11, "maskBorderSlice": 11, "maskBorderWidth": 11, "maskBorderOutset": 11, "maskBorderRepeat": 11, "maskBorder": 11, "maskType": 11, "textSizeAdjust": 11, "filter": 11, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "fontFeatureSettings": 11, "columnCount": 11, "columnFill": 11, "columnGap": 11, "columnRule": 11, "columnRuleColor": 11, "columnRuleStyle": 11, "columnRuleWidth": 11, "columns": 11, "columnSpan": 11, "columnWidth": 11 }, "op_mini": {} }
  }; /* eslint-disable */
  });

  unwrapExports(autoprefixerDynamic);

  var isPrefixedValue_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isPrefixedValue;
  var regex = /-webkit-|-moz-|-ms-/;

  function isPrefixedValue(value) {
    return typeof value === 'string' && regex.test(value);
  }
  module.exports = exports['default'];
  });

  unwrapExports(isPrefixedValue_1);

  var calc_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = calc;



  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var prefixes = ['-webkit-', '-moz-', ''];
  function calc(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
      return prefixes.map(function (prefix) {
        return value.replace(/calc\(/g, prefix + 'calc(');
      });
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(calc_1$1);

  var flex_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flex;
  var values = {
    flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
    'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
  };

  function flex(property, value) {
    if (property === 'display' && values.hasOwnProperty(value)) {
      return values[value];
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(flex_1$1);

  var flexboxIE_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flexboxIE;
  var alternativeValues = {
    'space-around': 'distribute',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end'
  };
  var alternativeProps = {
    alignContent: 'msFlexLinePack',
    alignSelf: 'msFlexItemAlign',
    alignItems: 'msFlexAlign',
    justifyContent: 'msFlexPack',
    order: 'msFlexOrder',
    flexGrow: 'msFlexPositive',
    flexShrink: 'msFlexNegative',
    flexBasis: 'msFlexPreferredSize'
  };

  function flexboxIE(property, value, style) {
    if (alternativeProps.hasOwnProperty(property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(flexboxIE_1$1);

  var flexboxOld_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = flexboxOld;
  var alternativeValues = {
    'space-around': 'justify',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end',
    'wrap-reverse': 'multiple',
    wrap: 'multiple'
  };

  var alternativeProps = {
    alignItems: 'WebkitBoxAlign',
    justifyContent: 'WebkitBoxPack',
    flexWrap: 'WebkitBoxLines'
  };

  function flexboxOld(property, value, style) {
    if (property === 'flexDirection' && typeof value === 'string') {
      if (value.indexOf('column') > -1) {
        style.WebkitBoxOrient = 'vertical';
      } else {
        style.WebkitBoxOrient = 'horizontal';
      }
      if (value.indexOf('reverse') > -1) {
        style.WebkitBoxDirection = 'reverse';
      } else {
        style.WebkitBoxDirection = 'normal';
      }
    }
    if (alternativeProps.hasOwnProperty(property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(flexboxOld_1$1);

  var gradient_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = gradient;



  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var prefixes = ['-webkit-', '-moz-', ''];

  var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

  function gradient(property, value) {
    if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
      return prefixes.map(function (prefix) {
        return prefix + value;
      });
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(gradient_1$1);

  var sizing_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = sizing;
  var prefixes = ['-webkit-', '-moz-', ''];

  var properties = {
    maxHeight: true,
    maxWidth: true,
    width: true,
    height: true,
    columnWidth: true,
    minWidth: true,
    minHeight: true
  };
  var values = {
    'min-content': true,
    'max-content': true,
    'fill-available': true,
    'fit-content': true,
    'contain-floats': true
  };

  function sizing(property, value) {
    if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
      return prefixes.map(function (prefix) {
        return prefix + value;
      });
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(sizing_1$1);

  var transition_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = transition;



  var _hyphenateProperty2 = _interopRequireDefault(hyphenateProperty_1);



  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);



  var _capitalizeString2 = _interopRequireDefault(capitalizeString_1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var properties = {
    transition: true,
    transitionProperty: true,
    WebkitTransition: true,
    WebkitTransitionProperty: true,
    MozTransition: true,
    MozTransitionProperty: true
  };


  var prefixMapping = {
    Webkit: '-webkit-',
    Moz: '-moz-',
    ms: '-ms-'
  };

  function prefixValue(value, propertyPrefixMap) {
    if ((0, _isPrefixedValue2.default)(value)) {
      return value;
    }

    // only split multi values, not cubic beziers
    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

    for (var i = 0, len = multipleValues.length; i < len; ++i) {
      var singleValue = multipleValues[i];
      var values = [singleValue];
      for (var property in propertyPrefixMap) {
        var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

        if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
          var prefixes = propertyPrefixMap[property];
          for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
            // join all prefixes and create a new value
            values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
          }
        }
      }

      multipleValues[i] = values.join(',');
    }

    return multipleValues.join(',');
  }

  function transition(property, value, style, propertyPrefixMap) {
    // also check for already prefixed transitions
    if (typeof value === 'string' && properties.hasOwnProperty(property)) {
      var outputValue = prefixValue(value, propertyPrefixMap);
      // if the property is already prefixed
      var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
        return !/-moz-|-ms-/.test(val);
      }).join(',');

      if (property.indexOf('Webkit') > -1) {
        return webkitOutput;
      }

      var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
        return !/-webkit-|-ms-/.test(val);
      }).join(',');

      if (property.indexOf('Moz') > -1) {
        return mozOutput;
      }

      style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
      style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
      return outputValue;
    }
  }
  module.exports = exports['default'];
  });

  unwrapExports(transition_1$1);

  var autoprefixerStatic = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _calc2 = _interopRequireDefault(calc_1$1);



  var _flex2 = _interopRequireDefault(flex_1$1);



  var _flexboxIE2 = _interopRequireDefault(flexboxIE_1$1);



  var _flexboxOld2 = _interopRequireDefault(flexboxOld_1$1);



  var _gradient2 = _interopRequireDefault(gradient_1$1);



  var _sizing2 = _interopRequireDefault(sizing_1$1);



  var _transition2 = _interopRequireDefault(transition_1$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {
    plugins: [_calc2.default, _flex2.default, _flexboxIE2.default, _flexboxOld2.default, _gradient2.default, _sizing2.default, _transition2.default],
    prefixMap: { "transform": ["Webkit", "ms"], "transformOrigin": ["Webkit", "ms"], "transformOriginX": ["Webkit", "ms"], "transformOriginY": ["Webkit", "ms"], "backfaceVisibility": ["Webkit"], "perspective": ["Webkit"], "perspectiveOrigin": ["Webkit"], "transformStyle": ["Webkit"], "transformOriginZ": ["Webkit"], "animation": ["Webkit"], "animationDelay": ["Webkit"], "animationDirection": ["Webkit"], "animationFillMode": ["Webkit"], "animationDuration": ["Webkit"], "animationIterationCount": ["Webkit"], "animationName": ["Webkit"], "animationPlayState": ["Webkit"], "animationTimingFunction": ["Webkit"], "appearance": ["Webkit", "Moz"], "userSelect": ["Webkit", "Moz", "ms"], "fontKerning": ["Webkit"], "textEmphasisPosition": ["Webkit"], "textEmphasis": ["Webkit"], "textEmphasisStyle": ["Webkit"], "textEmphasisColor": ["Webkit"], "boxDecorationBreak": ["Webkit"], "clipPath": ["Webkit"], "maskImage": ["Webkit"], "maskMode": ["Webkit"], "maskRepeat": ["Webkit"], "maskPosition": ["Webkit"], "maskClip": ["Webkit"], "maskOrigin": ["Webkit"], "maskSize": ["Webkit"], "maskComposite": ["Webkit"], "mask": ["Webkit"], "maskBorderSource": ["Webkit"], "maskBorderMode": ["Webkit"], "maskBorderSlice": ["Webkit"], "maskBorderWidth": ["Webkit"], "maskBorderOutset": ["Webkit"], "maskBorderRepeat": ["Webkit"], "maskBorder": ["Webkit"], "maskType": ["Webkit"], "textDecorationStyle": ["Webkit", "Moz"], "textDecorationSkip": ["Webkit", "Moz"], "textDecorationLine": ["Webkit", "Moz"], "textDecorationColor": ["Webkit", "Moz"], "filter": ["Webkit"], "fontFeatureSettings": ["Webkit", "Moz"], "breakAfter": ["Webkit", "Moz", "ms"], "breakBefore": ["Webkit", "Moz", "ms"], "breakInside": ["Webkit", "Moz", "ms"], "columnCount": ["Webkit", "Moz"], "columnFill": ["Webkit", "Moz"], "columnGap": ["Webkit", "Moz"], "columnRule": ["Webkit", "Moz"], "columnRuleColor": ["Webkit", "Moz"], "columnRuleStyle": ["Webkit", "Moz"], "columnRuleWidth": ["Webkit", "Moz"], "columns": ["Webkit", "Moz"], "columnSpan": ["Webkit", "Moz"], "columnWidth": ["Webkit", "Moz"], "flex": ["Webkit", "ms"], "flexBasis": ["Webkit"], "flexDirection": ["Webkit", "ms"], "flexGrow": ["Webkit"], "flexFlow": ["Webkit", "ms"], "flexShrink": ["Webkit"], "flexWrap": ["Webkit", "ms"], "alignContent": ["Webkit"], "alignItems": ["Webkit"], "alignSelf": ["Webkit"], "justifyContent": ["Webkit"], "order": ["Webkit"], "transitionDelay": ["Webkit"], "transitionDuration": ["Webkit"], "transitionProperty": ["Webkit"], "transitionTimingFunction": ["Webkit"], "backdropFilter": ["Webkit"], "scrollSnapType": ["Webkit", "ms"], "scrollSnapPointsX": ["Webkit", "ms"], "scrollSnapPointsY": ["Webkit", "ms"], "scrollSnapDestination": ["Webkit", "ms"], "scrollSnapCoordinate": ["Webkit", "ms"], "shapeImageThreshold": ["Webkit"], "shapeImageMargin": ["Webkit"], "shapeImageOutside": ["Webkit"], "hyphens": ["Webkit", "Moz", "ms"], "flowInto": ["Webkit", "ms"], "flowFrom": ["Webkit", "ms"], "regionFragment": ["Webkit", "ms"], "boxSizing": ["Moz"], "textAlignLast": ["Moz"], "tabSize": ["Moz"], "wrapFlow": ["ms"], "wrapThrough": ["ms"], "wrapMargin": ["ms"], "touchAction": ["ms"], "gridTemplateColumns": ["ms"], "gridTemplateRows": ["ms"], "gridTemplateAreas": ["ms"], "gridTemplate": ["ms"], "gridAutoColumns": ["ms"], "gridAutoRows": ["ms"], "gridAutoFlow": ["ms"], "grid": ["ms"], "gridRowStart": ["ms"], "gridColumnStart": ["ms"], "gridRowEnd": ["ms"], "gridRow": ["ms"], "gridColumn": ["ms"], "gridColumnEnd": ["ms"], "gridColumnGap": ["ms"], "gridRowGap": ["ms"], "gridArea": ["ms"], "gridGap": ["ms"], "textSizeAdjust": ["Webkit", "ms"], "borderImage": ["Webkit"], "borderImageOutset": ["Webkit"], "borderImageRepeat": ["Webkit"], "borderImageSlice": ["Webkit"], "borderImageSource": ["Webkit"], "borderImageWidth": ["Webkit"] }
  }; /* eslint-disable */
  });

  unwrapExports(autoprefixerStatic);

  var autoprefixer = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (muiTheme) {
    var isClient = typeof navigator !== 'undefined';
    var userAgent = muiTheme.userAgent;

    if (userAgent === undefined && isClient) {
      userAgent = navigator.userAgent;
    }

    var prefixAll = (0, _createPrefixer2.default)(_autoprefixerStatic2.default);

    if (userAgent === false) {
      // Disabled autoprefixer
      return null;
    } else if (userAgent === 'all' || userAgent === undefined) {
      // Prefix for all user agent
      return function (style) {
        var isFlex = ['flex', 'inline-flex'].indexOf(style.display) !== -1;
        var stylePrefixed = prefixAll(style);

        if (isFlex) {
          var display = stylePrefixed.display;
          if (isClient) {
            // We can't apply this join with react-dom:
            // #https://github.com/facebook/react/issues/6467
            stylePrefixed.display = display[display.length - 1];
          } else {
            stylePrefixed.display = display.join('; display: ');
          }
        }

        return stylePrefixed;
      };
    } else {
      var Prefixer = (0, _createPrefixer4.default)(_autoprefixerDynamic2.default, prefixAll);
      var prefixer = new Prefixer({
        userAgent: userAgent
      });

      return function (style) {
        return prefixer.prefix(style);
      };
    }
  };



  var _createPrefixer2 = _interopRequireDefault(createPrefixer_1);



  var _createPrefixer4 = _interopRequireDefault(createPrefixer_1$1);



  var _autoprefixerDynamic2 = _interopRequireDefault(autoprefixerDynamic);



  var _autoprefixerStatic2 = _interopRequireDefault(autoprefixerStatic);



  var _warning2 = _interopRequireDefault(warning_1$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  });

  unwrapExports(autoprefixer);

  var callOnce_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = callOnce;



  var _warning2 = _interopRequireDefault(warning_1$1);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function callOnce() {
  }
  });

  unwrapExports(callOnce_1);

  // 19.1.2.14 Object.keys(O)



  _objectSap('keys', function () {
    return function keys(it) {
      return _objectKeys(_toObject(it));
    };
  });

  var keys = _core.Object.keys;

  var keys$1 = createCommonjsModule(function (module) {
  module.exports = { "default": keys, __esModule: true };
  });

  unwrapExports(keys$1);

  var rtl_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _keys2 = _interopRequireDefault(keys$1);

  exports.default = rtl;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;
  var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;

  /**
   * This function ensures that `style` supports both ltr and rtl directions by
   * checking `styleConstants` in `muiTheme` and replacing attribute keys if
   * necessary.
   */
  function rtl(muiTheme) {
    if (muiTheme.isRtl) {
      return function (style) {
        if (style.directionInvariant === true) {
          return style;
        }

        var flippedAttributes = {
          // Keys and their replacements.
          right: 'left',
          left: 'right',
          marginRight: 'marginLeft',
          marginLeft: 'marginRight',
          paddingRight: 'paddingLeft',
          paddingLeft: 'paddingRight',
          borderRight: 'borderLeft',
          borderLeft: 'borderRight'
        };

        var newStyle = {};

        (0, _keys2.default)(style).forEach(function (attribute) {
          var value = style[attribute];
          var key = attribute;

          if (flippedAttributes.hasOwnProperty(attribute)) {
            key = flippedAttributes[attribute];
          }

          switch (attribute) {
            case 'float':
            case 'textAlign':
              if (value === 'right') {
                value = 'left';
              } else if (value === 'left') {
                value = 'right';
              }
              break;

            case 'direction':
              if (value === 'ltr') {
                value = 'rtl';
              } else if (value === 'rtl') {
                value = 'ltr';
              }
              break;

            case 'transform':
              if (!value) break;
              var matches = void 0;
              if (matches = value.match(reTranslate)) {
                value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
              }
              if (matches = value.match(reSkew)) {
                value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ', ' + (-parseFloat(matches[7]) + matches[8]) : '');
              }
              break;

            case 'transformOrigin':
              if (!value) break;
              if (value.indexOf('right') > -1) {
                value = value.replace('right', 'left');
              } else if (value.indexOf('left') > -1) {
                value = value.replace('left', 'right');
              }
              break;
          }

          newStyle[key] = value;
        });

        return newStyle;
      };
    }
  }
  });

  unwrapExports(rtl_1);

  var compose_1 = createCommonjsModule(function (module, exports) {

  exports.__esModule = true;
  exports.default = compose;
  function compose() {
    for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }

    if (funcs.length === 0) {
      return function (arg) {
        return arg;
      };
    }

    if (funcs.length === 1) {
      return funcs[0];
    }

    return funcs.reduce(function (a, b) {
      return function () {
        return a(b.apply(undefined, arguments));
      };
    });
  }
  });

  unwrapExports(compose_1);

  var typography = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _classCallCheck3 = _interopRequireDefault(classCallCheck);



  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Typography = function Typography() {
    (0, _classCallCheck3.default)(this, Typography);

    // text colors
    this.textFullBlack = colors.fullBlack;
    this.textDarkBlack = colors.darkBlack;
    this.textLightBlack = colors.lightBlack;
    this.textMinBlack = colors.minBlack;
    this.textFullWhite = colors.fullWhite;
    this.textDarkWhite = colors.darkWhite;
    this.textLightWhite = colors.lightWhite;

    // font weight
    this.fontWeightLight = 300;
    this.fontWeightNormal = 400;
    this.fontWeightMedium = 500;

    this.fontStyleButtonFontSize = 14;
  };

  exports.default = new Typography();
  });

  unwrapExports(typography);

  var getMuiTheme_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });



  var _toConsumableArray3 = _interopRequireDefault(toConsumableArray);

  exports.default = getMuiTheme;



  var _lodash2 = _interopRequireDefault(lodash_merge);





  var _lightBaseTheme2 = _interopRequireDefault(lightBaseTheme);



  var _zIndex2 = _interopRequireDefault(zIndex);



  var _autoprefixer2 = _interopRequireDefault(autoprefixer);



  var _callOnce2 = _interopRequireDefault(callOnce_1);



  var _rtl2 = _interopRequireDefault(rtl_1);



  var _compose2 = _interopRequireDefault(compose_1);



  var _typography2 = _interopRequireDefault(typography);



  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   * Get the MUI theme corresponding to a base theme.
   * It's possible to override the computed theme values
   * by providing a second argument. The calculated
   * theme will be deeply merged with the second argument.
   */
  function getMuiTheme(muiTheme) {
    for (var _len = arguments.length, more = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      more[_key - 1] = arguments[_key];
    }

    muiTheme = _lodash2.default.apply(undefined, [{
      zIndex: _zIndex2.default,
      isRtl: false,
      userAgent: undefined
    }, _lightBaseTheme2.default, muiTheme].concat(more));

    var _muiTheme = muiTheme,
        spacing = _muiTheme.spacing,
        fontFamily = _muiTheme.fontFamily,
        palette = _muiTheme.palette;

    var baseTheme = { spacing: spacing, fontFamily: fontFamily, palette: palette };

    muiTheme = (0, _lodash2.default)({
      appBar: {
        color: palette.primary1Color,
        textColor: palette.alternateTextColor,
        height: spacing.desktopKeylineIncrement,
        titleFontWeight: _typography2.default.fontWeightNormal,
        padding: spacing.desktopGutter
      },
      avatar: {
        color: palette.canvasColor,
        backgroundColor: (0, colorManipulator.emphasize)(palette.canvasColor, 0.26)
      },
      badge: {
        color: palette.alternateTextColor,
        textColor: palette.textColor,
        primaryColor: palette.primary1Color,
        primaryTextColor: palette.alternateTextColor,
        secondaryColor: palette.accent1Color,
        secondaryTextColor: palette.alternateTextColor,
        fontWeight: _typography2.default.fontWeightMedium
      },
      bottomNavigation: {
        backgroundColor: palette.canvasColor,
        unselectedColor: (0, colorManipulator.fade)(palette.textColor, 0.54),
        selectedColor: palette.primary1Color,
        height: 56,
        unselectedFontSize: 12,
        selectedFontSize: 14
      },
      button: {
        height: 36,
        minWidth: 88,
        iconButtonSize: spacing.iconSize * 2
      },
      card: {
        titleColor: (0, colorManipulator.fade)(palette.textColor, 0.87),
        subtitleColor: (0, colorManipulator.fade)(palette.textColor, 0.54),
        fontWeight: _typography2.default.fontWeightMedium
      },
      cardMedia: {
        color: colors.darkWhite,
        overlayContentBackground: colors.lightBlack,
        titleColor: colors.darkWhite,
        subtitleColor: colors.lightWhite
      },
      cardText: {
        textColor: palette.textColor
      },
      checkbox: {
        boxColor: palette.textColor,
        checkedColor: palette.primary1Color,
        requiredColor: palette.primary1Color,
        disabledColor: palette.disabledColor,
        labelColor: palette.textColor,
        labelDisabledColor: palette.disabledColor
      },
      chip: {
        backgroundColor: (0, colorManipulator.emphasize)(palette.canvasColor, 0.12),
        deleteIconColor: (0, colorManipulator.fade)(palette.textColor, 0.26),
        textColor: (0, colorManipulator.fade)(palette.textColor, 0.87),
        fontSize: 14,
        fontWeight: _typography2.default.fontWeightNormal,
        shadow: '0 1px 6px ' + (0, colorManipulator.fade)(palette.shadowColor, 0.12) + ',\n        0 1px 4px ' + (0, colorManipulator.fade)(palette.shadowColor, 0.12)
      },
      datePicker: {
        color: palette.primary1Color,
        textColor: palette.alternateTextColor,
        calendarTextColor: palette.textColor,
        selectColor: palette.primary2Color,
        selectTextColor: palette.alternateTextColor,
        calendarYearBackgroundColor: palette.canvasColor,
        headerColor: palette.pickerHeaderColor || palette.primary1Color
      },
      dialog: {
        titleFontSize: 22,
        bodyFontSize: 16,
        bodyColor: (0, colorManipulator.fade)(palette.textColor, 0.6)
      },
      dropDownMenu: {
        accentColor: palette.borderColor
      },
      enhancedButton: {
        tapHighlightColor: colors.transparent
      },
      flatButton: {
        color: colors.transparent,
        buttonFilterColor: '#999999',
        disabledTextColor: (0, colorManipulator.fade)(palette.textColor, 0.3),
        textColor: palette.textColor,
        primaryTextColor: palette.primary1Color,
        secondaryTextColor: palette.accent1Color,
        fontSize: _typography2.default.fontStyleButtonFontSize,
        fontWeight: _typography2.default.fontWeightMedium
      },
      floatingActionButton: {
        buttonSize: 56,
        miniSize: 40,
        color: palette.primary1Color,
        iconColor: palette.alternateTextColor,
        secondaryColor: palette.accent1Color,
        secondaryIconColor: palette.alternateTextColor,
        disabledTextColor: palette.disabledColor,
        disabledColor: (0, colorManipulator.emphasize)(palette.canvasColor, 0.12)
      },
      gridTile: {
        textColor: colors.white
      },
      icon: {
        color: palette.canvasColor,
        backgroundColor: palette.primary1Color
      },
      inkBar: {
        backgroundColor: palette.accent1Color
      },
      drawer: {
        width: spacing.desktopKeylineIncrement * 4,
        color: palette.canvasColor
      },
      listItem: {
        nestedLevelDepth: 18,
        secondaryTextColor: palette.secondaryTextColor,
        leftIconColor: colors.grey600,
        rightIconColor: colors.grey600
      },
      menu: {
        backgroundColor: palette.canvasColor,
        containerBackgroundColor: palette.canvasColor
      },
      menuItem: {
        dataHeight: 32,
        height: 48,
        hoverColor: (0, colorManipulator.fade)(palette.textColor, 0.1),
        padding: spacing.desktopGutter,
        selectedTextColor: palette.accent1Color,
        rightIconDesktopFill: colors.grey600
      },
      menuSubheader: {
        padding: spacing.desktopGutter,
        borderColor: palette.borderColor,
        textColor: palette.primary1Color
      },
      overlay: {
        backgroundColor: colors.lightBlack
      },
      paper: {
        color: palette.textColor,
        backgroundColor: palette.canvasColor,
        zDepthShadows: [[1, 6, 0.12, 1, 4, 0.12], [3, 10, 0.16, 3, 10, 0.23], [10, 30, 0.19, 6, 10, 0.23], [14, 45, 0.25, 10, 18, 0.22], [19, 60, 0.30, 15, 20, 0.22]].map(function (d) {
          return '0 ' + d[0] + 'px ' + d[1] + 'px ' + (0, colorManipulator.fade)(palette.shadowColor, d[2]) + ',\n         0 ' + d[3] + 'px ' + d[4] + 'px ' + (0, colorManipulator.fade)(palette.shadowColor, d[5]);
        })
      },
      radioButton: {
        borderColor: palette.textColor,
        backgroundColor: palette.alternateTextColor,
        checkedColor: palette.primary1Color,
        requiredColor: palette.primary1Color,
        disabledColor: palette.disabledColor,
        size: 24,
        labelColor: palette.textColor,
        labelDisabledColor: palette.disabledColor
      },
      raisedButton: {
        color: palette.alternateTextColor,
        textColor: palette.textColor,
        primaryColor: palette.primary1Color,
        primaryTextColor: palette.alternateTextColor,
        secondaryColor: palette.accent1Color,
        secondaryTextColor: palette.alternateTextColor,
        disabledColor: (0, colorManipulator.darken)(palette.alternateTextColor, 0.1),
        disabledTextColor: (0, colorManipulator.fade)(palette.textColor, 0.3),
        fontSize: _typography2.default.fontStyleButtonFontSize,
        fontWeight: _typography2.default.fontWeightMedium
      },
      refreshIndicator: {
        strokeColor: palette.borderColor,
        loadingStrokeColor: palette.primary1Color
      },
      ripple: {
        color: (0, colorManipulator.fade)(palette.textColor, 0.87)
      },
      slider: {
        trackSize: 2,
        trackColor: palette.primary3Color,
        trackColorSelected: palette.accent3Color,
        handleSize: 12,
        handleSizeDisabled: 8,
        handleSizeActive: 18,
        handleColorZero: palette.primary3Color,
        handleFillColor: palette.alternateTextColor,
        selectionColor: palette.primary1Color,
        rippleColor: palette.primary1Color
      },
      snackbar: {
        textColor: palette.alternateTextColor,
        backgroundColor: palette.textColor,
        actionColor: palette.accent1Color
      },
      subheader: {
        color: (0, colorManipulator.fade)(palette.textColor, 0.54),
        fontWeight: _typography2.default.fontWeightMedium
      },
      stepper: {
        backgroundColor: 'transparent',
        hoverBackgroundColor: (0, colorManipulator.fade)(colors.black, 0.06),
        iconColor: palette.primary1Color,
        hoveredIconColor: colors.grey700,
        inactiveIconColor: colors.grey500,
        textColor: (0, colorManipulator.fade)(colors.black, 0.87),
        disabledTextColor: (0, colorManipulator.fade)(colors.black, 0.26),
        connectorLineColor: colors.grey400
      },
      svgIcon: {
        color: palette.textColor
      },
      table: {
        backgroundColor: palette.canvasColor
      },
      tableFooter: {
        borderColor: palette.borderColor,
        textColor: palette.accent3Color
      },
      tableHeader: {
        borderColor: palette.borderColor
      },
      tableHeaderColumn: {
        textColor: palette.accent3Color,
        height: 56,
        spacing: 24
      },
      tableRow: {
        hoverColor: palette.accent2Color,
        stripeColor: (0, colorManipulator.fade)((0, colorManipulator.lighten)(palette.primary1Color, 0.5), 0.4),
        selectedColor: palette.borderColor,
        textColor: palette.textColor,
        borderColor: palette.borderColor,
        height: 48
      },
      tableRowColumn: {
        height: 48,
        spacing: 24
      },
      tabs: {
        backgroundColor: palette.primary1Color,
        textColor: (0, colorManipulator.fade)(palette.alternateTextColor, 0.7),
        selectedTextColor: palette.alternateTextColor
      },
      textField: {
        textColor: palette.textColor,
        hintColor: palette.disabledColor,
        floatingLabelColor: palette.disabledColor,
        disabledTextColor: palette.disabledColor,
        errorColor: colors.red500,
        focusColor: palette.primary1Color,
        backgroundColor: 'transparent',
        borderColor: palette.borderColor
      },
      timePicker: {
        color: palette.alternateTextColor,
        textColor: palette.alternateTextColor,
        accentColor: palette.primary1Color,
        clockColor: palette.textColor,
        clockCircleColor: palette.clockCircleColor,
        headerColor: palette.pickerHeaderColor || palette.primary1Color,
        selectColor: palette.primary2Color,
        selectTextColor: palette.alternateTextColor
      },
      toggle: {
        thumbOnColor: palette.primary1Color,
        thumbOffColor: palette.accent2Color,
        thumbDisabledColor: palette.borderColor,
        thumbRequiredColor: palette.primary1Color,
        trackOnColor: (0, colorManipulator.fade)(palette.primary1Color, 0.5),
        trackOffColor: palette.primary3Color,
        trackDisabledColor: palette.primary3Color,
        labelColor: palette.textColor,
        labelDisabledColor: palette.disabledColor,
        trackRequiredColor: (0, colorManipulator.fade)(palette.primary1Color, 0.5)
      },
      toolbar: {
        color: (0, colorManipulator.fade)(palette.textColor, 0.54),
        hoverColor: (0, colorManipulator.fade)(palette.textColor, 0.87),
        backgroundColor: (0, colorManipulator.darken)(palette.accent2Color, 0.05),
        height: 56,
        titleFontSize: 20,
        iconColor: (0, colorManipulator.fade)(palette.textColor, 0.4),
        separatorColor: (0, colorManipulator.fade)(palette.textColor, 0.175),
        menuHoverColor: (0, colorManipulator.fade)(palette.textColor, 0.1)
      },
      tooltip: {
        color: colors.white,
        rippleBackgroundColor: colors.grey700,
        opacity: 0.9
      }
    }, muiTheme, {
      baseTheme: baseTheme, // To provide backward compatibility.
      rawTheme: baseTheme // To provide backward compatibility.
    });

    var transformers = [_autoprefixer2.default, _rtl2.default, _callOnce2.default].map(function (t) {
      return t(muiTheme);
    }).filter(function (t) {
      return t;
    });

    muiTheme.prepareStyles = _compose2.default.apply(undefined, (0, _toConsumableArray3.default)(transformers));

    return muiTheme;
  }
  });

  var getMuiTheme = unwrapExports(getMuiTheme_1);

  var defaultTheme = getMuiTheme({
    /**
     * Base theme
     * @see {@link https://github.com/callemall/material-ui/blob/master/src/styles/baseThemes/lightBaseTheme.js}
     */
    spacing: {
      desktopDropDownMenuFontSize: 12,
      desktopToolbarHeight: 30
    },
    palette: {
      primary1Color: colors_105,
      primary2Color: colors_105,
      primary3Color: colors_250,
      accent1Color: colors_5,
      accent2Color: colors_248,
      accent3Color: colors_251,
      textColor: colors_251,
      secondaryTextColor: colors_251,
      alternateTextColor: colors_256,
      canvasColor: colors_256,
      borderColor: colors_250,
      disabledColor: colors_251,
      pickerHeaderColor: colors_105 // shadowColor: 'none',

    },

    /**
     * Components theme
     * @see {@link https://github.com/callemall/material-ui/tree/master/src}
     */
    button: {
      textTransform: 'none'
    },
    dialog: {
      titleFontSize: 14,
      bodyFontSize: 12,
      bodyColor: colors_251
    },
    textField: {
      errorColor: colors_5,
      backgroundColor: 'transparent'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)'
    }
  });

  var colors$1 = {};

  exports.Dialog = Dialog$1;
  exports.FlatButton = FlatButton$1;
  exports.FontAwesome = FontAwesome;
  exports.Icon = Icon;
  exports.MaterialIcon = MaterialIcon;
  exports.MenuItem = MenuItem$1;
  exports.Popover = Popover$1;
  exports.RaisedButton = RaisedButton$1;
  exports.SelectField = SelectField$1;
  exports.TextField = TextField$1;
  exports.colors = colors$1;
  exports.defaultTheme = defaultTheme;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
