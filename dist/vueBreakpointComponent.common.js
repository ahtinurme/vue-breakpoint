module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0dee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extend; });
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cf99");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _show_at__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cf94");
/* harmony import */ var _hide_at__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("e8db");
/* harmony import */ var _breakpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("d924");
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8bde");




 // Bootstrap 4 (Stable)

function extend(config) {
  var defaults = {
    breakpoints: _breakpoints__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    debounceTime: 100,
    experimental: false
  };
  config = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, defaults, config);

  var mergeConfig = function mergeConfig(component) {
    return lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()(component, {
      config: config
    });
  };

  var components = {
    VBreakpoint: _breakpoint__WEBPACK_IMPORTED_MODULE_3__[/* default */ "b"],
    VShowAt: _show_at__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    VHideAt: _hide_at__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  };

  for (var component in components) {
    components[component] = mergeConfig(components[component]);
  }

  return components;
}

/***/ }),

/***/ "3540":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3540__;

/***/ }),

/***/ "4331":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4331__;

/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Mixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Model; });
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0dee");
/* harmony import */ var _breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d924");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _extend__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extend__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _show_at__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cf94");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _show_at__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _hide_at__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("e8db");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _hide_at__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _breakpoint__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony import */ var _with_breakpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("fbc0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _with_breakpoint__WEBPACK_IMPORTED_MODULE_4__["a"]; });

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://github.com/Akryum/v-tooltip/blob/master/src/index.js


/* harmony default export */ __webpack_exports__["j"] = (_breakpoint__WEBPACK_IMPORTED_MODULE_1__[/* default */ "b"]);
 // `Ctor` will be deprecated





var Plugin = {
  install: function install(Vue, config) {
    var components = Object(_extend__WEBPACK_IMPORTED_MODULE_0__[/* extend */ "a"])(config);
    Object.keys(components).forEach(function (name, Component) {
      return Vue.component(name, Component);
    });
  }
};
var Install = Plugin; // Will be deprecated

var Mixin = {
  install: function install(Vue) {
    Vue.mixin({
      inject: {
        $vBreakpoint: {
          from: 'breakpoint',
          default: undefined
        }
      }
    });
  }
};
var Model = function Model() {
  _classCallCheck(this, Model);
}; // Auto-install (Browser/Node)

var GlobalVue;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(Plugin);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "6934":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6934__;

/***/ }),

/***/ "72ed":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__72ed__;

/***/ }),

/***/ "8bde":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints
// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap
// Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) { ... }
// Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }
// Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }
// Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }
/* harmony default export */ __webpack_exports__["a"] = ({
  small: '(min-width: 576px)',
  medium: '(min-width: 768px)',
  large: '(min-width: 992px)',
  xlarge: '(min-width: 1200px)'
});

/***/ }),

/***/ "9bb0":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9bb0__;

/***/ }),

/***/ "9c9e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return breakpointProp; });
var breakpointProp = {
  props: {
    breakpoint: {
      type: String,
      default: ''
    }
  }
};

/***/ }),

/***/ "a34a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("72ed");

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "cf94":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/fragment.js
// https://stackoverflow.com/questions/680431/change-textnode-value
// https://stackoverflow.com/questions/6520192/how-to-get-the-text-node-of-an-element
// https://stackoverflow.com/questions/42414627/create-text-node-with-custom-render-function-in-vue-js
/* harmony default export */ var fragment = ({
  name: 'fragment',
  abstract: true,
  // Undocumented key; TODO: find out if we actually benefit from this
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      childNodes: []
    };
  },
  watch: {
    show: {
      handler: function handler(show) {
        var _this = this;

        this.$nextTick(function () {
          _this.childNodes.forEach(function (node) {
            var isElement = node.instance instanceof window.Element;

            if (show) {
              if (isElement) {
                // Restore element last display value
                node.instance.style.display = node.previous.display;
              } else {
                // Restore textnode last value
                node.instance.nodeValue = node.previous.nodeValue;
              }
            } else {
              if (isElement) {
                node.previous.display = node.instance.style.display; // Hide it

                node.instance.style.display = 'none';
              } else {
                // Hide textnode by emptying it
                node.instance.nodeValue = '';
              }
            }
          });
        });
      },
      immediate: true
    }
  },
  mounted: function mounted() {
    var $el = this.$el,
        childNodes = this.childNodes,
        rootId = this._uid; // On HMR event, root element is already gone,
    // so no need to re-create the document-fragment.

    if (!document.getElementById(rootId)) return;
    var fragment = document.createDocumentFragment();
    Array.from($el.childNodes).forEach(function (node) {
      childNodes.push({
        instance: node,
        previous: {
          nodeValue: node.nodeValue,
          display: node.style ? node.style.display : undefined
        }
      });
      fragment.appendChild(node);
    });
    $el.parentNode.insertBefore(fragment, $el);
    $el.parentNode.removeChild($el);
  },
  beforeDestroy: function beforeDestroy() {
    this.childNodes.forEach(function (node) {
      return node.instance.remove();
    });
  },
  template: "<div :id=\"_uid\"><slot></slot></div>"
});
// EXTERNAL MODULE: ./src/breakpoint.js
var src_breakpoint = __webpack_require__("d924");

// EXTERNAL MODULE: ./src/mixins.js
var mixins = __webpack_require__("9c9e");

// CONCATENATED MODULE: ./src/show-at.js
// https://github.com/vuejs/vue/issues/7088
// https://github.com/vuejs/vue/issues/7088#issuecomment-364535373




/* harmony default export */ var show_at = __webpack_exports__["a"] = ({
  name: 'v-show-at',
  config: {},
  // Foreign key
  mixins: [mixins["a" /* breakpointProp */]],
  components: {
    Fragment: fragment,
    VBreakpoint: src_breakpoint["b" /* default */]
  },
  props: {
    forceShow: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      show: true
    };
  },
  created: function created() {
    var _this = this;

    var props = ['breakpoints', 'debounceTime', 'experimental'];
    props.forEach(function (prop) {
      return _this[prop] = _this.$options.config[prop];
    });
  },
  computed: {
    computedShow: function computedShow() {
      if (this.forceShow) {
        return this.forceShow;
      }

      return this.show;
    }
  },
  methods: {
    onChange: function onChange(_ref) {
      var breakpoint = _ref.breakpoint,
          noMatch = _ref.noMatch;

      if (noMatch) {
        breakpoint = src_breakpoint["a" /* NO_MATCH */];
      }

      this.show = this.breakpoint === breakpoint || Object.prototype.hasOwnProperty.call(this.$attrs, breakpoint);
      this.$emit('change', {
        breakpoint: breakpoint,
        noMatch: noMatch
      });
    }
  },
  render: function render() {
    var h = arguments[0];

    if (this.experimental) {
      return h("fragment", {
        "attrs": {
          "show": this.computedShow
        }
      }, [h("v-breakpoint", {
        "on": {
          "change": this.onChange
        },
        "attrs": {
          "breakpoints": this.breakpoints,
          "debounce-time": this.debounceTime
        }
      }), this.$slots.default]);
    }

    return h("v-breakpoint", {
      "on": {
        "change": this.onChange
      },
      "attrs": {
        "breakpoints": this.breakpoints,
        "debounce-time": this.debounceTime
      }
    }, [this.computedShow ? this.$slots.default : null]);
  }
});

/***/ }),

/***/ "cf99":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cf99__;

/***/ }),

/***/ "d924":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NO_MATCH; });
/* harmony import */ var lodash_isFinite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6934");
/* harmony import */ var lodash_isFinite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isFinite__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4331");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3540");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_ahtinurme_dev_vue_breakpoint_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a34a");
/* harmony import */ var _Users_ahtinurme_dev_vue_breakpoint_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_ahtinurme_dev_vue_breakpoint_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8bde");





function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var NO_MATCH = 'no-match';
/* harmony default export */ __webpack_exports__["b"] = ({
  name: 'v-breakpoint',
  config: {
    debounceTime: 100,
    breakpoints: _breakpoints__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
  },
  // Foreign key
  props: {
    value: {
      type: Object
    },
    debounceTime: {
      type: Number
    }
  },
  watch: {
    scope: function scope(value, prevValue) {
      // Vue devTools has a bug where events
      // will not show up if they are fired
      // on page load, while in reality they do.
      var changed = value.breakpoint !== prevValue.breakpoint;

      if (changed) {
        this.$emit(value.breakpoint);
        this.$emit('change', value);
        this.$emit('breakpoint', value.breakpoint);
      }

      this.$emit('input', value);
    }
  },
  data: function data() {
    return {
      // We need a reactive property `scope` for
      // provide/inject to function correctly.
      scope: {},
      isRoot: false,
      windowAttrs: {},
      breakpoints: {},
      breakpointsEntries: [],
      breakpoint: undefined,
      namespace: 'V-Breakpoint'
    };
  },
  provide: function provide() {
    return {
      breakpoint: this
    };
  },
  created: function created() {
    if (!window.matchMedia) return this.log('unsupported browser');
    this.breakpoints = this.$options.config.breakpoints;
    this.breakpointsEntries = Object.entries(this.breakpoints);
    var debounceTime = lodash_isFinite__WEBPACK_IMPORTED_MODULE_0___default()(this.debounceTime) ? this.debounceTime : this.$options.config.debounceTime;
    this.match = lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(this.match, debounceTime);
  },
  mounted: function mounted() {
    var _this = this;

    // Attach listener to `$root` to
    // avoid multiple `resize` listener.
    if (this.$root.$_vBreakpoint) {
      this.breakpoint = this.$root.$_vBreakpoint.breakpoint;
      this.$watch('$root.$_vBreakpoint.scope', function (scope) {
        return _this.scope = scope;
      });
    } else {
      this.isRoot = true;
      this.$root.$_vBreakpoint = this;
      window.addEventListener('resize', this.match, false);
      this.match(); // Fire initial "resize" event
    }

    if (this.$slots.default && this.$slots.default.length > 1) {
      this.log('vue components are limited to 1 root element');
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.isRoot) {
      delete this.$root.$_vBreakpoint;
      window.removeEventListener('resize', this.match);
    }
  },
  computed: {
    flags: function flags() {
      var _this2 = this;

      return this.breakpointsEntries.reduce(function (flags, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            breakpoint = _ref2[0];

        var flag = "is".concat(lodash_capitalize__WEBPACK_IMPORTED_MODULE_1___default()(breakpoint));
        flags[flag] = breakpoint === _this2.breakpoint;
        return flags;
      }, {});
    },
    noMatch: function noMatch() {
      return this.breakpoint === NO_MATCH;
    }
  },
  methods: {
    getScope: function getScope() {
      var flags = this.flags,
          windowAttrs = this.windowAttrs,
          noMatch = this.noMatch,
          breakpoint = this.breakpoint;
      return _objectSpread(_objectSpread({
        breakpoint: breakpoint
      }, flags), {}, {
        noMatch: noMatch
      }, windowAttrs);
    },
    getBreakpoint: function getBreakpoint() {
      return this.breakpointsEntries.reduce(function (noMatch, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            breakpoint = _ref4[0],
            mediaQuery = _ref4[1];

        return window.matchMedia(mediaQuery).matches ? breakpoint : noMatch;
      }, NO_MATCH);
    },
    match: function match() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_Users_ahtinurme_dev_vue_breakpoint_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
        var prevBreakpoint, breakpoint, changed, scope;
        return _Users_ahtinurme_dev_vue_breakpoint_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                prevBreakpoint = _this3.breakpoint;
                breakpoint = _this3.getBreakpoint();
                changed = prevBreakpoint !== breakpoint;
                if (changed) _this3.breakpoint = breakpoint; // Update window attributes (avoids layout-thrashing);
                // @link https://gist.github.com/paulirish/5d52fb081b3570c81e3a

                _context.next = 6;
                return _this3.getWindowAttrs();

              case 6:
                _this3.windowAttrs = _context.sent;
                // Get updated scope and update its
                // root instance property, which
                // triggers its watch handler.
                scope = _this3.getScope();
                _this3.scope = scope;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getWindowAttrs: function getWindowAttrs() {
      return new Promise(function (resolve) {
        window.requestAnimationFrame(function () {
          resolve({
            vw: window.screen.width,
            vh: window.screen.height,
            viewportWidth: window.screen.width,
            viewportHeight: window.screen.height,
            iw: window.innerWidth,
            ih: window.innerHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            innerWidthPx: "".concat(window.innerWidth, "px"),
            innerHeightPx: "".concat(window.innerHeight, "px"),
            viewportWidthPx: "".concat(window.screen.width, "px"),
            viewportHeightPx: "".concat(window.screen.height, "px")
          });
        });
      });
    },
    log: function log(message) {
      console.error("[".concat(this.namespace, " warn]: ").concat(lodash_capitalize__WEBPACK_IMPORTED_MODULE_1___default()(message), "."));
    }
  },
  render: function render(h) {
    var _this$$slots$default;

    if (this.$scopedSlots.default) return this.$scopedSlots.default(this.scope);
    if ((_this$$slots$default = this.$slots.default) !== null && _this$$slots$default !== void 0 && _this$$slots$default.length) return h(this.$slots.default[0]);
  }
});

/***/ }),

/***/ "e8db":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _show_at__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cf94");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9c9e");


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-hide-at',
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_1__[/* breakpointProp */ "a"]],
  components: {
    VShowAt: _show_at__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  },
  data: function data() {
    return {
      hide: false
    };
  },
  computed: {
    forceShow: function forceShow() {
      return !this.hide;
    }
  },
  methods: {
    onChange: function onChange(_ref) {
      var breakpoint = _ref.breakpoint;
      this.hide = breakpoint === this.breakpoint || Object.prototype.hasOwnProperty.call(this.$attrs, breakpoint);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("v-show-at", {
      "attrs": {
        "force-show": this.forceShow
      },
      "on": {
        "change": this.onChange
      }
    }, [this.$slots.default]);
  }
});

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "extend", function() { return /* reexport */ main["k" /* extend */]; });
__webpack_require__.d(__webpack_exports__, "Ctor", function() { return /* reexport */ main["a" /* Ctor */]; });
__webpack_require__.d(__webpack_exports__, "VShowAt", function() { return /* reexport */ main["h" /* VShowAt */]; });
__webpack_require__.d(__webpack_exports__, "VHideAt", function() { return /* reexport */ main["g" /* VHideAt */]; });
__webpack_require__.d(__webpack_exports__, "VBreakpoint", function() { return /* reexport */ main["f" /* VBreakpoint */]; });
__webpack_require__.d(__webpack_exports__, "VWithBreakpoint", function() { return /* reexport */ main["i" /* VWithBreakpoint */]; });
__webpack_require__.d(__webpack_exports__, "Plugin", function() { return /* reexport */ main["e" /* Plugin */]; });
__webpack_require__.d(__webpack_exports__, "Install", function() { return /* reexport */ main["b" /* Install */]; });
__webpack_require__.d(__webpack_exports__, "Mixin", function() { return /* reexport */ main["c" /* Mixin */]; });
__webpack_require__.d(__webpack_exports__, "Model", function() { return /* reexport */ main["d" /* Model */]; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("9bb0")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/main.js
var main = __webpack_require__("56d7");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main["j" /* default */]);



/***/ }),

/***/ "fbc0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'v-with-breakpoint',
  functional: true,
  inject: {
    breakpoint: {
      from: 'breakpoint',
      default: undefined
    }
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        injections = _ref.injections;

    if (!injections.breakpoint) {
      // eslint-disable-next-line no-console
      return void console.error("[V-With-Breakpoint warn]: No Breakpoint provider found!");
    }

    if (data.scopedSlots.default) {
      return data.scopedSlots.default(injections.breakpoint.scope);
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=vueBreakpointComponent.common.js.map