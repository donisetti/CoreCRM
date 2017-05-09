(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("aspnet-prerendering"), require("fs"), require("path"), require("react-router"));
	else if(typeof define === 'function' && define.amd)
		define(["aspnet-prerendering", "fs", "path", "react-router"], factory);
	else if(typeof exports === 'object')
		exports["BootServer"] = factory(require("aspnet-prerendering"), require("fs"), require("path"), require("react-router"));
	else
		root["BootServer"] = factory(root["aspnet-prerendering"], root["fs"], root["path"], root["react-router"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("aspnet-prerendering");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = __webpack_require__(2);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(3);

var _path2 = _interopRequireDefault(_path);

var _reactRouter = __webpack_require__(4);

var _aspnetPrerendering = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _aspnetPrerendering.createServerRenderer)(function (params) {
  return new Promise(function (resolve) {
    var re = /^([^/]+)(\/?.*)/;
    var matched = params.location.path.match(re);
    var controller = matched[1];
    var path = matched[2];

    var filename = './dist/server/' + constructor + '.js';
    var src = _fs2.default.readFileSync(path.resolve(filename), 'urf8');
    var Module = module.constructor;
    var m = new Module();
    m._compile(src, null); // eslint-disable-line

    var BootServer = m.exports.BootServer;


    (0, _reactRouter.match)({
      routes: BootServer.routes,
      location: path
    }, function (err, redirectLocation, renderProps) {
      if (err) throw new Error('Route match failed: ' + err);
      if (redirectLocation) throw new Error('I don\'t know how to redirect: ' + redirectLocation + '.');

      var initialState = params.data || {};
      resolve({ html: BootServer.renderHTML(initialState, renderProps) });
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ })
/******/ ]);
});