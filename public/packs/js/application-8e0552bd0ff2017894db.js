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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/images sync recursive ^\\.\\/.*$":
/*!*********************************************!*\
  !*** ./app/javascript/images sync ^\.\/.*$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin-user": "./app/javascript/images/admin-user.jpg",
	"./admin-user.jpg": "./app/javascript/images/admin-user.jpg",
	"./favicon.ico": "./app/javascript/images/favicon.ico",
	"./logo": "./app/javascript/images/logo.png",
	"./logo.png": "./app/javascript/images/logo.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/javascript/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./app/javascript/images/admin-user.jpg":
/*!**********************************************!*\
  !*** ./app/javascript/images/admin-user.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/admin-user-eafc49f5f1b4c3e457da91d2db7fea73.jpg";

/***/ }),

/***/ "./app/javascript/images/favicon.ico":
/*!*******************************************!*\
  !*** ./app/javascript/images/favicon.ico ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/favicon-050c57457833d93d6312c0bd3b0ed5bd.ico";

/***/ }),

/***/ "./app/javascript/images/logo.png":
/*!****************************************!*\
  !*** ./app/javascript/images/logo.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/logo-28f7e31d41f353b3aaff1236c7108479.png";

/***/ }),

/***/ "./app/javascript/js/base.js":
/*!***********************************!*\
  !*** ./app/javascript/js/base.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js");
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(turbolinks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! channels */ "./app/javascript/channels/index.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_5__);
// base dependency library, it should be only shared by `admin.js` and `application.js`.







var images = __webpack_require__("./app/javascript/images sync recursive ^\\.\\/.*$");

var imagePath = function imagePath(name) {
  return images(name, true);
};

_rails_ujs__WEBPACK_IMPORTED_MODULE_2___default.a.start();
turbolinks__WEBPACK_IMPORTED_MODULE_3___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_4__["start"]();
$(document).on('turbolinks:load', function () {
  $('[data-toggle="tooltip"]').tooltip();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styles_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/application */ "./app/javascript/styles/application.scss");
/* harmony import */ var styles_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styles_application__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/base */ "./app/javascript/js/base.js");



__webpack_require__(/*! trix */ "./node_modules/trix/dist/trix.js");

__webpack_require__(/*! @rails/actiontext */ "./node_modules/@rails/actiontext/app/javascript/actiontext/index.js");

/***/ }),

/***/ "./app/javascript/styles/application.scss":
/*!************************************************!*\
  !*** ./app/javascript/styles/application.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!./application.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/styles/application.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/@rails/actiontext/app/javascript/actiontext/attachment_upload.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@rails/actiontext/app/javascript/actiontext/attachment_upload.js ***!
  \***************************************************************************************/
/*! exports provided: AttachmentUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentUpload", function() { return AttachmentUpload; });
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var AttachmentUpload = /*#__PURE__*/function () {
  function AttachmentUpload(attachment, element) {
    _classCallCheck(this, AttachmentUpload);

    this.attachment = attachment;
    this.element = element;
    this.directUpload = new _rails_activestorage__WEBPACK_IMPORTED_MODULE_0__["DirectUpload"](attachment.file, this.directUploadUrl, this);
  }

  _createClass(AttachmentUpload, [{
    key: "start",
    value: function start() {
      this.directUpload.create(this.directUploadDidComplete.bind(this));
    }
  }, {
    key: "directUploadWillStoreFileWithXHR",
    value: function directUploadWillStoreFileWithXHR(xhr) {
      var _this = this;

      xhr.upload.addEventListener("progress", function (event) {
        var progress = event.loaded / event.total * 100;

        _this.attachment.setUploadProgress(progress);
      });
    }
  }, {
    key: "directUploadDidComplete",
    value: function directUploadDidComplete(error, attributes) {
      if (error) {
        throw new Error("Direct upload failed: ".concat(error));
      }

      this.attachment.setAttributes({
        sgid: attributes.attachable_sgid,
        url: this.createBlobUrl(attributes.signed_id, attributes.filename)
      });
    }
  }, {
    key: "createBlobUrl",
    value: function createBlobUrl(signedId, filename) {
      return this.blobUrlTemplate.replace(":signed_id", signedId).replace(":filename", encodeURIComponent(filename));
    }
  }, {
    key: "directUploadUrl",
    get: function get() {
      return this.element.dataset.directUploadUrl;
    }
  }, {
    key: "blobUrlTemplate",
    get: function get() {
      return this.element.dataset.blobUrlTemplate;
    }
  }]);

  return AttachmentUpload;
}();

/***/ }),

/***/ "./node_modules/@rails/actiontext/app/javascript/actiontext/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@rails/actiontext/app/javascript/actiontext/index.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attachment_upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attachment_upload */ "./node_modules/@rails/actiontext/app/javascript/actiontext/attachment_upload.js");

addEventListener("trix-attachment-add", function (event) {
  var attachment = event.attachment,
      target = event.target;

  if (attachment.file) {
    var upload = new _attachment_upload__WEBPACK_IMPORTED_MODULE_0__["AttachmentUpload"](attachment, target);
    upload.start();
  }
});

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm["delete"](form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/master/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        }

        CSRFProtection(xhr);
        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports, $, Popper) {
  'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;
  Popper = Popper && Object.prototype.hasOwnProperty.call(Popper, 'default') ? Popper['default'] : Popper;

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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.0): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */


  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.5.0';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  var EVENT_CLOSE = "close" + EVENT_KEY;
  var EVENT_CLOSED = "closed" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype; // Public

    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + CLASS_NAME_ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(EVENT_CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(CLASS_NAME_SHOW);

      if (!$(element).hasClass(CLASS_NAME_FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$1 = 'button';
  var VERSION$1 = '4.5.0';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_BUTTON = '.btn';
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype; // Public

    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(CLASS_NAME_ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
            }

            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(CLASS_NAME_ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$(button).hasClass(CLASS_NAME_BUTTON)) {
      button = $(button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName === 'LABEL' && inputBtn && inputBtn.type === 'checkbox') {
        event.preventDefault(); // work around event sent to label and input
      }

      Button._jQueryInterface.call($(button), 'toggle');
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(SELECTOR_BUTTON)[0];
    $(button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $(window).on(EVENT_LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$2 = 'carousel';
  var VERSION$2 = '4.5.0';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$2;
  var EVENT_SLID = "slid" + EVENT_KEY$2;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype; // Public

    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default), config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $(this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $.Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
        $(indicators).removeClass(CLASS_NAME_ACTIVE$1);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(CLASS_NAME_SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
          $(activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(CLASS_NAME_ACTIVE$1);
        $(nextElement).addClass(CLASS_NAME_ACTIVE$1);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread2(_objectSpread2({}, Default), $(this).data());

        if (_typeof(config) === 'object') {
          _config = _objectSpread2(_objectSpread2({}, _config), config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _objectSpread2(_objectSpread2({}, $(target).data()), $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(EVENT_LOAD_DATA_API$1, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$3 = 'collapse';
  var VERSION$3 = '4.5.0';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW = "show" + EVENT_KEY$3;
  var EVENT_SHOWN = "shown" + EVENT_KEY$3;
  var EVENT_HIDE = "hide" + EVENT_KEY$3;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
  var CLASS_NAME_SHOW$1 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype; // Public

    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(EVENT_SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var startEvent = $.Event(EVENT_HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
              $(trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default$1), config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(CLASS_NAME_SHOW$1);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$1), $this.data()), _typeof(config) === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.5.0';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
  var EVENT_CLICK = "click" + EVENT_KEY$4;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW$2 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype; // Public

    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var isActive = $(this._menu).hasClass(CLASS_NAME_SHOW$2);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED) || $(this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(EVENT_SHOW$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $(parent).toggleClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_SHOWN$1, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED) || !$(this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(EVENT_HIDE$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $(this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $(parent).toggleClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_HIDDEN$1, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), $(this._element).data()), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $(this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($(this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2(_objectSpread2({}, data.offsets), _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _objectSpread2(_objectSpread2({}, popperConfig), this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(CLASS_NAME_SHOW$2)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(EVENT_HIDE$1, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $(dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
        $(parent).removeClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_HIDDEN$1, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $(this).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(CLASS_NAME_SHOW$2);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          $(parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $(item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$5 = 'modal';
  var VERSION$5 = '4.5.0';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype; // Public

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(CLASS_NAME_FADE$1)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(EVENT_HIDE$2);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(CLASS_NAME_FADE$1);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(EVENT_FOCUSIN);
      $(this._element).removeClass(CLASS_NAME_SHOW$3);
      $(this._element).off(EVENT_CLICK_DISMISS);
      $(this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $(document).off(EVENT_FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default$3), config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $.Event(EVENT_HIDE_PREVENTED);
        $(this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.defaultPrevented) {
          return;
        }

        this._element.classList.add(CLASS_NAME_STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(CLASS_NAME_STATIC);
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $(this._element).hasClass(CLASS_NAME_FADE$1);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(CLASS_NAME_SHOW$3);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $(_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $(document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $(this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $(window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $(window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $(_this8._element).trigger(EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $(this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(EVENT_CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(CLASS_NAME_SHOW$3);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(CLASS_NAME_SHOW$3);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(CLASS_NAME_FADE$1)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$3), $(this).data()), _typeof(config) === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread2(_objectSpread2({}, $(target).data()), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(EVENT_SHOW$2, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN$2, function () {
        if ($(_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.0): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.5.0';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var Event = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype; // Public

    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(CLASS_NAME_FADE$2);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        $(tip).addClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(CLASS_NAME_FADE$2)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if ($(this.tip).hasClass(CLASS_NAME_FADE$2)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (_typeof(content) === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _objectSpread2(_objectSpread2({}, defaultBsConfig), this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2(_objectSpread2({}, data.offsets), _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _objectSpread2(_objectSpread2({}, this.config), {}, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), dataAttributes), _typeof(config) === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      this.tip = popperData.instance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(CLASS_NAME_FADE$2);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = _typeof(config) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$7 = 'popover';
  var VERSION$7 = '4.5.0';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread2(_objectSpread2({}, Tooltip.Default), {}, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread2(_objectSpread2({}, Tooltip.DefaultType), {}, {
    content: '(string|element|function)'
  });

  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype; // Overrides

    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.5.0';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype; // Public

    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default$6), _typeof(config) === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
        $link.addClass(CLASS_NAME_ACTIVE$2);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
      }

      $(this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$2);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$2);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(EVENT_LOAD_DATA_API$2, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$9 = 'tab';
  var VERSION$9 = '4.5.0';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$6 = 'show';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(CLASS_NAME_ACTIVE$3) || $(this._element).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(EVENT_HIDE$3, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(EVENT_SHOW$3, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(EVENT_HIDDEN$3, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(EVENT_SHOWN$3, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(SELECTOR_ACTIVE_UL) : $(container).children(SELECTOR_ACTIVE$2);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(CLASS_NAME_FADE$4);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(CLASS_NAME_ACTIVE$3);
        var dropdownChild = $(active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(CLASS_NAME_ACTIVE$3);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$4)) {
        element.classList.add(CLASS_NAME_SHOW$6);
      }

      if (element.parentNode && $(element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(SELECTOR_DROPDOWN$1)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
          $(dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$a = 'toast';
  var VERSION$a = '4.5.0';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
  var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      var showEvent = $.Event(EVENT_SHOW$4);
      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE$5);
      }

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_SHOWING);

        _this._element.classList.add(CLASS_NAME_SHOW$7);

        $(_this._element).trigger(EVENT_SHOWN$4);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      Util.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      var hideEvent = $.Event(EVENT_HIDE$4);
      $(this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        this._element.classList.remove(CLASS_NAME_SHOW$7);
      }

      $(this._element).off(EVENT_CLICK_DISMISS$1);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$7), $(this._element).data()), _typeof(config) === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $(this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        $(_this3._element).trigger(EVENT_HIDDEN$4);
      };

      this._element.classList.remove(CLASS_NAME_SHOW$7);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./app/javascript/styles/application.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-1!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./app/javascript/styles/application.scss ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\n\n@import \"actiontext\";\n^\n      File to import not found or unreadable: actiontext.\n      in /home/jordan/Programming/sahki/app/javascript/styles/application.scss (line 3, column 1)");

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/expose-loader/dist/cjs.js):\nValidationError: Invalid options object. Expose Loader has been initialized using an options object that does not match the API schema.\n - options misses the property 'exposes'. Should be:\n   non-empty string | object { globalName, moduleLocalName?, override? } | [non-empty string | object { globalName, moduleLocalName?, override? }, ...] (should not have fewer than 1 item)\n    at validate (/home/jordan/Programming/sahki/node_modules/schema-utils/dist/validate.js:96:11)\n    at Object.loader (/home/jordan/Programming/sahki/node_modules/expose-loader/dist/index.js:24:28)");

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];

  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }

  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/

var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */


function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here


  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */


function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */


function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
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
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */


function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */


function getBoundingClientRect(element) {
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */


function isFixed(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  var parentNode = getParentNode(element);

  if (!parentNode) {
    return false;
  }

  return isFixed(parentNode);
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }

  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */


function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference)); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */


function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */


function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */


function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */


function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  } // use `filter` to obtain the same behavior of `find`


  return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  } // use `find` + `indexOf` if `findIndex` isn't supported


  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */


function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }

    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */


function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback

  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */


function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */


function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;

    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }

  return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */


function destroy() {
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners(); // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it

  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }

  return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */


function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }

  scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */


function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */


function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    element.style[prop] = styles[prop] + unit;
  });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];

    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */


function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */


function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */


function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.

  var left = void 0,
      top = void 0;

  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }

  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }

  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */


function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';

    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }

  return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function arrow(data, options) {
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */


function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }

  return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */

function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;

    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;

    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;

    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future

      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }

  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */


function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2]; // If it's not a number it's an operator, I guess

  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;

    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;

      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;

    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */


function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */


function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;

  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself


  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification

  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];

      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }

      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];

      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }

      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */


var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: offset,

    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: preventOverflow,

    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],

    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: arrow,

    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: flip,

    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',

    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',

    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,

    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,

    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,

    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: computeStyle,

    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,

    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',

    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: applyStyle,

    /** @prop {Function} */
    onLoad: applyStyleOnLoad,

    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */

var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods

var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/* harmony default export */ __webpack_exports__["default"] = (Popper);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function registerImmediate(handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function onGlobalMessage(event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function registerImmediate(handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function registerImmediate(handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function registerImmediate(handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function registerImmediate(handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/trix/dist/trix.js":
/*!****************************************!*\
  !*** ./node_modules/trix/dist/trix.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Trix 1.2.3
Copyright © 2020 Basecamp, LLC
http://trix-editor.org/
 */
(function () {}).call(this), function () {
  var t;
  null == window.Set && (window.Set = t = function () {
    function t() {
      this.clear();
    }

    return t.prototype.clear = function () {
      return this.values = [];
    }, t.prototype.has = function (t) {
      return -1 !== this.values.indexOf(t);
    }, t.prototype.add = function (t) {
      return this.has(t) || this.values.push(t), this;
    }, t.prototype["delete"] = function (t) {
      var e;
      return -1 === (e = this.values.indexOf(t)) ? !1 : (this.values.splice(e, 1), !0);
    }, t.prototype.forEach = function () {
      var t;
      return (t = this.values).forEach.apply(t, arguments);
    }, t;
  }());
}.call(this), function (t) {
  function e() {}

  function n(t, e) {
    return function () {
      t.apply(e, arguments);
    };
  }

  function i(t) {
    if ("object" != _typeof(this)) throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof t) throw new TypeError("not a function");
    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(t, this);
  }

  function o(t, e) {
    for (; 3 === t._state;) {
      t = t._value;
    }

    return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0, void h(function () {
      var n = 1 === t._state ? e.onFulfilled : e.onRejected;
      if (null === n) return void (1 === t._state ? r : s)(e.promise, t._value);
      var i;

      try {
        i = n(t._value);
      } catch (o) {
        return void s(e.promise, o);
      }

      r(e.promise, i);
    }));
  }

  function r(t, e) {
    try {
      if (e === t) throw new TypeError("A promise cannot be resolved with itself.");

      if (e && ("object" == _typeof(e) || "function" == typeof e)) {
        var o = e.then;
        if (e instanceof i) return t._state = 3, t._value = e, void a(t);
        if ("function" == typeof o) return void c(n(o, e), t);
      }

      t._state = 1, t._value = e, a(t);
    } catch (r) {
      s(t, r);
    }
  }

  function s(t, e) {
    t._state = 2, t._value = e, a(t);
  }

  function a(t) {
    2 === t._state && 0 === t._deferreds.length && setTimeout(function () {
      t._handled || p(t._value);
    }, 1);

    for (var e = 0, n = t._deferreds.length; n > e; e++) {
      o(t, t._deferreds[e]);
    }

    t._deferreds = null;
  }

  function u(t, e, n) {
    this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
  }

  function c(t, e) {
    var n = !1;

    try {
      t(function (t) {
        n || (n = !0, r(e, t));
      }, function (t) {
        n || (n = !0, s(e, t));
      });
    } catch (i) {
      if (n) return;
      n = !0, s(e, i);
    }
  }

  var l = setTimeout,
      h = "function" == typeof setImmediate && setImmediate || function (t) {
    l(t, 1);
  },
      p = function p(t) {
    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
  };

  i.prototype["catch"] = function (t) {
    return this.then(null, t);
  }, i.prototype.then = function (t, n) {
    var r = new i(e);
    return o(this, new u(t, n, r)), r;
  }, i.all = function (t) {
    var e = Array.prototype.slice.call(t);
    return new i(function (t, n) {
      function i(r, s) {
        try {
          if (s && ("object" == _typeof(s) || "function" == typeof s)) {
            var a = s.then;
            if ("function" == typeof a) return void a.call(s, function (t) {
              i(r, t);
            }, n);
          }

          e[r] = s, 0 === --o && t(e);
        } catch (u) {
          n(u);
        }
      }

      if (0 === e.length) return t([]);

      for (var o = e.length, r = 0; r < e.length; r++) {
        i(r, e[r]);
      }
    });
  }, i.resolve = function (t) {
    return t && "object" == _typeof(t) && t.constructor === i ? t : new i(function (e) {
      e(t);
    });
  }, i.reject = function (t) {
    return new i(function (e, n) {
      n(t);
    });
  }, i.race = function (t) {
    return new i(function (e, n) {
      for (var i = 0, o = t.length; o > i; i++) {
        t[i].then(e, n);
      }
    });
  }, i._setImmediateFn = function (t) {
    h = t;
  }, i._setUnhandledRejectionFn = function (t) {
    p = t;
  },  true && module.exports ? module.exports = i : t.Promise || (t.Promise = i);
}(this), function () {
  var t = "object" == _typeof(window.customElements),
      e = "function" == typeof document.registerElement,
      n = t || e;

  n || (
  /**
  * @license
  * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
  * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  * Code distributed by Google as part of the polymer project is also
  * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  "undefined" == typeof WeakMap && !function () {
    var t = Object.defineProperty,
        e = Date.now() % 1e9,
        n = function n() {
      this.name = "__st" + (1e9 * Math.random() >>> 0) + (e++ + "__");
    };

    n.prototype = {
      set: function set(e, n) {
        var i = e[this.name];
        return i && i[0] === e ? i[1] = n : t(e, this.name, {
          value: [e, n],
          writable: !0
        }), this;
      },
      get: function get(t) {
        var e;
        return (e = t[this.name]) && e[0] === t ? e[1] : void 0;
      },
      "delete": function _delete(t) {
        var e = t[this.name];
        return e && e[0] === t ? (e[0] = e[1] = void 0, !0) : !1;
      },
      has: function has(t) {
        var e = t[this.name];
        return e ? e[0] === t : !1;
      }
    }, window.WeakMap = n;
  }(), function (t) {
    function e(t) {
      A.push(t), b || (b = !0, g(i));
    }

    function n(t) {
      return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(t) || t;
    }

    function i() {
      b = !1;
      var t = A;
      A = [], t.sort(function (t, e) {
        return t.uid_ - e.uid_;
      });
      var e = !1;
      t.forEach(function (t) {
        var n = t.takeRecords();
        o(t), n.length && (t.callback_(n, t), e = !0);
      }), e && i();
    }

    function o(t) {
      t.nodes_.forEach(function (e) {
        var n = m.get(e);
        n && n.forEach(function (e) {
          e.observer === t && e.removeTransientObservers();
        });
      });
    }

    function r(t, e) {
      for (var n = t; n; n = n.parentNode) {
        var i = m.get(n);
        if (i) for (var o = 0; o < i.length; o++) {
          var r = i[o],
              s = r.options;

          if (n === t || s.subtree) {
            var a = e(s);
            a && r.enqueue(a);
          }
        }
      }
    }

    function s(t) {
      this.callback_ = t, this.nodes_ = [], this.records_ = [], this.uid_ = ++C;
    }

    function a(t, e) {
      this.type = t, this.target = e, this.addedNodes = [], this.removedNodes = [], this.previousSibling = null, this.nextSibling = null, this.attributeName = null, this.attributeNamespace = null, this.oldValue = null;
    }

    function u(t) {
      var e = new a(t.type, t.target);
      return e.addedNodes = t.addedNodes.slice(), e.removedNodes = t.removedNodes.slice(), e.previousSibling = t.previousSibling, e.nextSibling = t.nextSibling, e.attributeName = t.attributeName, e.attributeNamespace = t.attributeNamespace, e.oldValue = t.oldValue, e;
    }

    function c(t, e) {
      return x = new a(t, e);
    }

    function l(t) {
      return w ? w : (w = u(x), w.oldValue = t, w);
    }

    function h() {
      x = w = void 0;
    }

    function p(t) {
      return t === w || t === x;
    }

    function d(t, e) {
      return t === e ? t : w && p(t) ? w : null;
    }

    function f(t, e, n) {
      this.observer = t, this.target = e, this.options = n, this.transientObservedNodes = [];
    }

    if (!t.JsMutationObserver) {
      var g,
          m = new WeakMap();
      if (/Trident|Edge/.test(navigator.userAgent)) g = setTimeout;else if (window.setImmediate) g = window.setImmediate;else {
        var v = [],
            y = String(Math.random());
        window.addEventListener("message", function (t) {
          if (t.data === y) {
            var e = v;
            v = [], e.forEach(function (t) {
              t();
            });
          }
        }), g = function g(t) {
          v.push(t), window.postMessage(y, "*");
        };
      }
      var b = !1,
          A = [],
          C = 0;
      s.prototype = {
        observe: function observe(t, e) {
          if (t = n(t), !e.childList && !e.attributes && !e.characterData || e.attributeOldValue && !e.attributes || e.attributeFilter && e.attributeFilter.length && !e.attributes || e.characterDataOldValue && !e.characterData) throw new SyntaxError();
          var i = m.get(t);
          i || m.set(t, i = []);

          for (var o, r = 0; r < i.length; r++) {
            if (i[r].observer === this) {
              o = i[r], o.removeListeners(), o.options = e;
              break;
            }
          }

          o || (o = new f(this, t, e), i.push(o), this.nodes_.push(t)), o.addListeners();
        },
        disconnect: function disconnect() {
          this.nodes_.forEach(function (t) {
            for (var e = m.get(t), n = 0; n < e.length; n++) {
              var i = e[n];

              if (i.observer === this) {
                i.removeListeners(), e.splice(n, 1);
                break;
              }
            }
          }, this), this.records_ = [];
        },
        takeRecords: function takeRecords() {
          var t = this.records_;
          return this.records_ = [], t;
        }
      };
      var x, w;
      f.prototype = {
        enqueue: function enqueue(t) {
          var n = this.observer.records_,
              i = n.length;

          if (n.length > 0) {
            var o = n[i - 1],
                r = d(o, t);
            if (r) return void (n[i - 1] = r);
          } else e(this.observer);

          n[i] = t;
        },
        addListeners: function addListeners() {
          this.addListeners_(this.target);
        },
        addListeners_: function addListeners_(t) {
          var e = this.options;
          e.attributes && t.addEventListener("DOMAttrModified", this, !0), e.characterData && t.addEventListener("DOMCharacterDataModified", this, !0), e.childList && t.addEventListener("DOMNodeInserted", this, !0), (e.childList || e.subtree) && t.addEventListener("DOMNodeRemoved", this, !0);
        },
        removeListeners: function removeListeners() {
          this.removeListeners_(this.target);
        },
        removeListeners_: function removeListeners_(t) {
          var e = this.options;
          e.attributes && t.removeEventListener("DOMAttrModified", this, !0), e.characterData && t.removeEventListener("DOMCharacterDataModified", this, !0), e.childList && t.removeEventListener("DOMNodeInserted", this, !0), (e.childList || e.subtree) && t.removeEventListener("DOMNodeRemoved", this, !0);
        },
        addTransientObserver: function addTransientObserver(t) {
          if (t !== this.target) {
            this.addListeners_(t), this.transientObservedNodes.push(t);
            var e = m.get(t);
            e || m.set(t, e = []), e.push(this);
          }
        },
        removeTransientObservers: function removeTransientObservers() {
          var t = this.transientObservedNodes;
          this.transientObservedNodes = [], t.forEach(function (t) {
            this.removeListeners_(t);

            for (var e = m.get(t), n = 0; n < e.length; n++) {
              if (e[n] === this) {
                e.splice(n, 1);
                break;
              }
            }
          }, this);
        },
        handleEvent: function handleEvent(t) {
          switch (t.stopImmediatePropagation(), t.type) {
            case "DOMAttrModified":
              var e = t.attrName,
                  n = t.relatedNode.namespaceURI,
                  i = t.target,
                  o = new c("attributes", i);
              o.attributeName = e, o.attributeNamespace = n;
              var s = t.attrChange === MutationEvent.ADDITION ? null : t.prevValue;
              r(i, function (t) {
                return !t.attributes || t.attributeFilter && t.attributeFilter.length && -1 === t.attributeFilter.indexOf(e) && -1 === t.attributeFilter.indexOf(n) ? void 0 : t.attributeOldValue ? l(s) : o;
              });
              break;

            case "DOMCharacterDataModified":
              var i = t.target,
                  o = c("characterData", i),
                  s = t.prevValue;
              r(i, function (t) {
                return t.characterData ? t.characterDataOldValue ? l(s) : o : void 0;
              });
              break;

            case "DOMNodeRemoved":
              this.addTransientObserver(t.target);

            case "DOMNodeInserted":
              var a,
                  u,
                  p = t.target;
              "DOMNodeInserted" === t.type ? (a = [p], u = []) : (a = [], u = [p]);
              var d = p.previousSibling,
                  f = p.nextSibling,
                  o = c("childList", t.target.parentNode);
              o.addedNodes = a, o.removedNodes = u, o.previousSibling = d, o.nextSibling = f, r(t.relatedNode, function (t) {
                return t.childList ? o : void 0;
              });
          }

          h();
        }
      }, t.JsMutationObserver = s, t.MutationObserver || (t.MutationObserver = s, s._isPolyfilled = !0);
    }
  }(self), function () {
    "use strict";

    if (!window.performance || !window.performance.now) {
      var t = Date.now();
      window.performance = {
        now: function now() {
          return Date.now() - t;
        }
      };
    }

    window.requestAnimationFrame || (window.requestAnimationFrame = function () {
      var t = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
      return t ? function (e) {
        return t(function () {
          e(performance.now());
        });
      } : function (t) {
        return window.setTimeout(t, 1e3 / 60);
      };
    }()), window.cancelAnimationFrame || (window.cancelAnimationFrame = function () {
      return window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (t) {
        clearTimeout(t);
      };
    }());

    var e = function () {
      var t = document.createEvent("Event");
      return t.initEvent("foo", !0, !0), t.preventDefault(), t.defaultPrevented;
    }();

    if (!e) {
      var n = Event.prototype.preventDefault;

      Event.prototype.preventDefault = function () {
        this.cancelable && (n.call(this), Object.defineProperty(this, "defaultPrevented", {
          get: function get() {
            return !0;
          },
          configurable: !0
        }));
      };
    }

    var i = /Trident/.test(navigator.userAgent);

    if ((!window.CustomEvent || i && "function" != typeof window.CustomEvent) && (window.CustomEvent = function (t, e) {
      e = e || {};
      var n = document.createEvent("CustomEvent");
      return n.initCustomEvent(t, Boolean(e.bubbles), Boolean(e.cancelable), e.detail), n;
    }, window.CustomEvent.prototype = window.Event.prototype), !window.Event || i && "function" != typeof window.Event) {
      var o = window.Event;
      window.Event = function (t, e) {
        e = e || {};
        var n = document.createEvent("Event");
        return n.initEvent(t, Boolean(e.bubbles), Boolean(e.cancelable)), n;
      }, window.Event.prototype = o.prototype;
    }
  }(window.WebComponents), window.CustomElements = window.CustomElements || {
    flags: {}
  }, function (t) {
    var e = t.flags,
        n = [],
        i = function i(t) {
      n.push(t);
    },
        o = function o() {
      n.forEach(function (e) {
        e(t);
      });
    };

    t.addModule = i, t.initializeModules = o, t.hasNative = Boolean(document.registerElement), t.isIE = /Trident/.test(navigator.userAgent), t.useNative = !e.register && t.hasNative && !window.ShadowDOMPolyfill && (!window.HTMLImports || window.HTMLImports.useNative);
  }(window.CustomElements), window.CustomElements.addModule(function (t) {
    function e(t, e) {
      n(t, function (t) {
        return e(t) ? !0 : void i(t, e);
      }), i(t, e);
    }

    function n(t, e, i) {
      var o = t.firstElementChild;
      if (!o) for (o = t.firstChild; o && o.nodeType !== Node.ELEMENT_NODE;) {
        o = o.nextSibling;
      }

      for (; o;) {
        e(o, i) !== !0 && n(o, e, i), o = o.nextElementSibling;
      }

      return null;
    }

    function i(t, n) {
      for (var i = t.shadowRoot; i;) {
        e(i, n), i = i.olderShadowRoot;
      }
    }

    function o(t, e) {
      r(t, e, []);
    }

    function r(t, e, n) {
      if (t = window.wrap(t), !(n.indexOf(t) >= 0)) {
        n.push(t);

        for (var i, o = t.querySelectorAll("link[rel=" + s + "]"), a = 0, u = o.length; u > a && (i = o[a]); a++) {
          i["import"] && r(i["import"], e, n);
        }

        e(t);
      }
    }

    var s = window.HTMLImports ? window.HTMLImports.IMPORT_LINK_TYPE : "none";
    t.forDocumentTree = o, t.forSubtree = e;
  }), window.CustomElements.addModule(function (t) {
    function e(t, e) {
      return n(t, e) || i(t, e);
    }

    function n(e, n) {
      return t.upgrade(e, n) ? !0 : void (n && s(e));
    }

    function i(t, e) {
      b(t, function (t) {
        return n(t, e) ? !0 : void 0;
      });
    }

    function o(t) {
      w.push(t), x || (x = !0, setTimeout(r));
    }

    function r() {
      x = !1;

      for (var t, e = w, n = 0, i = e.length; i > n && (t = e[n]); n++) {
        t();
      }

      w = [];
    }

    function s(t) {
      C ? o(function () {
        a(t);
      }) : a(t);
    }

    function a(t) {
      t.__upgraded__ && !t.__attached && (t.__attached = !0, t.attachedCallback && t.attachedCallback());
    }

    function u(t) {
      c(t), b(t, function (t) {
        c(t);
      });
    }

    function c(t) {
      C ? o(function () {
        l(t);
      }) : l(t);
    }

    function l(t) {
      t.__upgraded__ && t.__attached && (t.__attached = !1, t.detachedCallback && t.detachedCallback());
    }

    function h(t) {
      for (var e = t, n = window.wrap(document); e;) {
        if (e == n) return !0;
        e = e.parentNode || e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host;
      }
    }

    function p(t) {
      if (t.shadowRoot && !t.shadowRoot.__watched) {
        y.dom && console.log("watching shadow-root for: ", t.localName);

        for (var e = t.shadowRoot; e;) {
          g(e), e = e.olderShadowRoot;
        }
      }
    }

    function d(t, n) {
      if (y.dom) {
        var i = n[0];

        if (i && "childList" === i.type && i.addedNodes && i.addedNodes) {
          for (var o = i.addedNodes[0]; o && o !== document && !o.host;) {
            o = o.parentNode;
          }

          var r = o && (o.URL || o._URL || o.host && o.host.localName) || "";
          r = r.split("/?").shift().split("/").pop();
        }

        console.group("mutations (%d) [%s]", n.length, r || "");
      }

      var s = h(t);
      n.forEach(function (t) {
        "childList" === t.type && (E(t.addedNodes, function (t) {
          t.localName && e(t, s);
        }), E(t.removedNodes, function (t) {
          t.localName && u(t);
        }));
      }), y.dom && console.groupEnd();
    }

    function f(t) {
      for (t = window.wrap(t), t || (t = window.wrap(document)); t.parentNode;) {
        t = t.parentNode;
      }

      var e = t.__observer;
      e && (d(t, e.takeRecords()), r());
    }

    function g(t) {
      if (!t.__observer) {
        var e = new MutationObserver(d.bind(this, t));
        e.observe(t, {
          childList: !0,
          subtree: !0
        }), t.__observer = e;
      }
    }

    function m(t) {
      t = window.wrap(t), y.dom && console.group("upgradeDocument: ", t.baseURI.split("/").pop());
      var n = t === window.wrap(document);
      e(t, n), g(t), y.dom && console.groupEnd();
    }

    function v(t) {
      A(t, m);
    }

    var y = t.flags,
        b = t.forSubtree,
        A = t.forDocumentTree,
        C = window.MutationObserver._isPolyfilled && y["throttle-attached"];
    t.hasPolyfillMutations = C, t.hasThrottledAttached = C;
    var x = !1,
        w = [],
        E = Array.prototype.forEach.call.bind(Array.prototype.forEach),
        S = Element.prototype.createShadowRoot;
    S && (Element.prototype.createShadowRoot = function () {
      var t = S.call(this);
      return window.CustomElements.watchShadow(this), t;
    }), t.watchShadow = p, t.upgradeDocumentTree = v, t.upgradeDocument = m, t.upgradeSubtree = i, t.upgradeAll = e, t.attached = s, t.takeRecords = f;
  }), window.CustomElements.addModule(function (t) {
    function e(e, i) {
      if ("template" === e.localName && window.HTMLTemplateElement && HTMLTemplateElement.decorate && HTMLTemplateElement.decorate(e), !e.__upgraded__ && e.nodeType === Node.ELEMENT_NODE) {
        var o = e.getAttribute("is"),
            r = t.getRegisteredDefinition(e.localName) || t.getRegisteredDefinition(o);
        if (r && (o && r.tag == e.localName || !o && !r["extends"])) return n(e, r, i);
      }
    }

    function n(e, n, o) {
      return s.upgrade && console.group("upgrade:", e.localName), n.is && e.setAttribute("is", n.is), i(e, n), e.__upgraded__ = !0, r(e), o && t.attached(e), t.upgradeSubtree(e, o), s.upgrade && console.groupEnd(), e;
    }

    function i(t, e) {
      Object.__proto__ ? t.__proto__ = e.prototype : (o(t, e.prototype, e["native"]), t.__proto__ = e.prototype);
    }

    function o(t, e, n) {
      for (var i = {}, o = e; o !== n && o !== HTMLElement.prototype;) {
        for (var r, s = Object.getOwnPropertyNames(o), a = 0; r = s[a]; a++) {
          i[r] || (Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(o, r)), i[r] = 1);
        }

        o = Object.getPrototypeOf(o);
      }
    }

    function r(t) {
      t.createdCallback && t.createdCallback();
    }

    var s = t.flags;
    t.upgrade = e, t.upgradeWithDefinition = n, t.implementPrototype = i;
  }), window.CustomElements.addModule(function (t) {
    function e(e, i) {
      var u = i || {};
      if (!e) throw new Error("document.registerElement: first argument `name` must not be empty");
      if (e.indexOf("-") < 0) throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" + String(e) + "'.");
      if (o(e)) throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '" + String(e) + "'. The type name is invalid.");
      if (c(e)) throw new Error("DuplicateDefinitionError: a type with name '" + String(e) + "' is already registered");
      return u.prototype || (u.prototype = Object.create(HTMLElement.prototype)), u.__name = e.toLowerCase(), u["extends"] && (u["extends"] = u["extends"].toLowerCase()), u.lifecycle = u.lifecycle || {}, u.ancestry = r(u["extends"]), s(u), a(u), n(u.prototype), l(u.__name, u), u.ctor = h(u), u.ctor.prototype = u.prototype, u.prototype.constructor = u.ctor, t.ready && m(document), u.ctor;
    }

    function n(t) {
      if (!t.setAttribute._polyfilled) {
        var e = t.setAttribute;

        t.setAttribute = function (t, n) {
          i.call(this, t, n, e);
        };

        var n = t.removeAttribute;
        t.removeAttribute = function (t) {
          i.call(this, t, null, n);
        }, t.setAttribute._polyfilled = !0;
      }
    }

    function i(t, e, n) {
      t = t.toLowerCase();
      var i = this.getAttribute(t);
      n.apply(this, arguments);
      var o = this.getAttribute(t);
      this.attributeChangedCallback && o !== i && this.attributeChangedCallback(t, i, o);
    }

    function o(t) {
      for (var e = 0; e < C.length; e++) {
        if (t === C[e]) return !0;
      }
    }

    function r(t) {
      var e = c(t);
      return e ? r(e["extends"]).concat([e]) : [];
    }

    function s(t) {
      for (var e, n = t["extends"], i = 0; e = t.ancestry[i]; i++) {
        n = e.is && e.tag;
      }

      t.tag = n || t.__name, n && (t.is = t.__name);
    }

    function a(t) {
      if (!Object.__proto__) {
        var e = HTMLElement.prototype;

        if (t.is) {
          var n = document.createElement(t.tag);
          e = Object.getPrototypeOf(n);
        }

        for (var i, o = t.prototype, r = !1; o;) {
          o == e && (r = !0), i = Object.getPrototypeOf(o), i && (o.__proto__ = i), o = i;
        }

        r || console.warn(t.tag + " prototype not found in prototype chain for " + t.is), t["native"] = e;
      }
    }

    function u(t) {
      return y(E(t.tag), t);
    }

    function c(t) {
      return t ? x[t.toLowerCase()] : void 0;
    }

    function l(t, e) {
      x[t] = e;
    }

    function h(t) {
      return function () {
        return u(t);
      };
    }

    function p(t, e, n) {
      return t === w ? d(e, n) : S(t, e);
    }

    function d(t, e) {
      t && (t = t.toLowerCase()), e && (e = e.toLowerCase());
      var n = c(e || t);

      if (n) {
        if (t == n.tag && e == n.is) return new n.ctor();
        if (!e && !n.is) return new n.ctor();
      }

      var i;
      return e ? (i = d(t), i.setAttribute("is", e), i) : (i = E(t), t.indexOf("-") >= 0 && b(i, HTMLElement), i);
    }

    function f(t, e) {
      var n = t[e];

      t[e] = function () {
        var t = n.apply(this, arguments);
        return v(t), t;
      };
    }

    var g,
        m = (t.isIE, t.upgradeDocumentTree),
        v = t.upgradeAll,
        y = t.upgradeWithDefinition,
        b = t.implementPrototype,
        A = t.useNative,
        C = ["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"],
        x = {},
        w = "http://www.w3.org/1999/xhtml",
        E = document.createElement.bind(document),
        S = document.createElementNS.bind(document);
    g = Object.__proto__ || A ? function (t, e) {
      return t instanceof e;
    } : function (t, e) {
      if (t instanceof e) return !0;

      for (var n = t; n;) {
        if (n === e.prototype) return !0;
        n = n.__proto__;
      }

      return !1;
    }, f(Node.prototype, "cloneNode"), f(document, "importNode"), document.registerElement = e, document.createElement = d, document.createElementNS = p, t.registry = x, t["instanceof"] = g, t.reservedTagList = C, t.getRegisteredDefinition = c, document.register = document.registerElement;
  }), function (t) {
    function e() {
      r(window.wrap(document)), window.CustomElements.ready = !0;

      var t = window.requestAnimationFrame || function (t) {
        setTimeout(t, 16);
      };

      t(function () {
        setTimeout(function () {
          window.CustomElements.readyTime = Date.now(), window.HTMLImports && (window.CustomElements.elapsed = window.CustomElements.readyTime - window.HTMLImports.readyTime), document.dispatchEvent(new CustomEvent("WebComponentsReady", {
            bubbles: !0
          }));
        });
      });
    }

    var n = t.useNative,
        i = t.initializeModules;

    if (t.isIE, n) {
      var o = function o() {};

      t.watchShadow = o, t.upgrade = o, t.upgradeAll = o, t.upgradeDocumentTree = o, t.upgradeSubtree = o, t.takeRecords = o, t["instanceof"] = function (t, e) {
        return t instanceof e;
      };
    } else i();

    var r = t.upgradeDocumentTree,
        s = t.upgradeDocument;
    if (window.wrap || (window.ShadowDOMPolyfill ? (window.wrap = window.ShadowDOMPolyfill.wrapIfNeeded, window.unwrap = window.ShadowDOMPolyfill.unwrapIfNeeded) : window.wrap = window.unwrap = function (t) {
      return t;
    }), window.HTMLImports && (window.HTMLImports.__importsParsingHook = function (t) {
      t["import"] && s(wrap(t["import"]));
    }), "complete" === document.readyState || t.flags.eager) e();else if ("interactive" !== document.readyState || window.attachEvent || window.HTMLImports && !window.HTMLImports.ready) {
      var a = window.HTMLImports && !window.HTMLImports.ready ? "HTMLImportsLoaded" : "DOMContentLoaded";
      window.addEventListener(a, e);
    } else e();
  }(window.CustomElements));
}.call(this), function () {}.call(this), function () {
  var t = this;
  (function () {
    (function () {
      this.Trix = {
        VERSION: "1.2.3",
        ZERO_WIDTH_SPACE: "\uFEFF",
        NON_BREAKING_SPACE: "\xa0",
        OBJECT_REPLACEMENT_CHARACTER: "\uFFFC",
        browser: {
          composesExistingText: /Android.*Chrome/.test(navigator.userAgent),
          forcesObjectResizing: /Trident.*rv:11/.test(navigator.userAgent),
          supportsInputEvents: function () {
            var t, e, n, i;
            if ("undefined" == typeof InputEvent) return !1;

            for (i = ["data", "getTargetRanges", "inputType"], t = 0, e = i.length; e > t; t++) {
              if (n = i[t], !(n in InputEvent.prototype)) return !1;
            }

            return !0;
          }()
        },
        config: {}
      };
    }).call(this);
  }).call(t);
  var e = t.Trix;
  (function () {
    (function () {
      e.BasicObject = function () {
        function t() {}

        var e, n, i;
        return t.proxyMethod = function (t) {
          var i, o, r, s, a;
          return r = n(t), i = r.name, s = r.toMethod, a = r.toProperty, o = r.optional, this.prototype[i] = function () {
            var t, n;
            return t = null != s ? o ? "function" == typeof this[s] ? this[s]() : void 0 : this[s]() : null != a ? this[a] : void 0, o ? (n = null != t ? t[i] : void 0, null != n ? e.call(n, t, arguments) : void 0) : (n = t[i], e.call(n, t, arguments));
          };
        }, n = function n(t) {
          var e, n;
          if (!(n = t.match(i))) throw new Error("can't parse @proxyMethod expression: " + t);
          return e = {
            name: n[4]
          }, null != n[2] ? e.toMethod = n[1] : e.toProperty = n[1], null != n[3] && (e.optional = !0), e;
        }, e = Function.prototype.apply, i = /^(.+?)(\(\))?(\?)?\.(.+?)$/, t;
      }();
    }).call(this), function () {
      var t = function t(_t, e) {
        function i() {
          this.constructor = _t;
        }

        for (var o in e) {
          n.call(e, o) && (_t[o] = e[o]);
        }

        return i.prototype = e.prototype, _t.prototype = new i(), _t.__super__ = e.prototype, _t;
      },
          n = {}.hasOwnProperty;

      e.Object = function (n) {
        function i() {
          this.id = ++o;
        }

        var o;
        return t(i, n), o = 0, i.fromJSONString = function (t) {
          return this.fromJSON(JSON.parse(t));
        }, i.prototype.hasSameConstructorAs = function (t) {
          return this.constructor === (null != t ? t.constructor : void 0);
        }, i.prototype.isEqualTo = function (t) {
          return this === t;
        }, i.prototype.inspect = function () {
          var t, e, n;
          return t = function () {
            var t, i, o;
            i = null != (t = this.contentsForInspection()) ? t : {}, o = [];

            for (e in i) {
              n = i[e], o.push(e + "=" + n);
            }

            return o;
          }.call(this), "#<" + this.constructor.name + ":" + this.id + (t.length ? " " + t.join(", ") : "") + ">";
        }, i.prototype.contentsForInspection = function () {}, i.prototype.toJSONString = function () {
          return JSON.stringify(this);
        }, i.prototype.toUTF16String = function () {
          return e.UTF16String.box(this);
        }, i.prototype.getCacheKey = function () {
          return this.id.toString();
        }, i;
      }(e.BasicObject);
    }.call(this), function () {
      e.extend = function (t) {
        var e, n;

        for (e in t) {
          n = t[e], this[e] = n;
        }

        return this;
      };
    }.call(this), function () {
      e.extend({
        defer: function defer(t) {
          return setTimeout(t, 1);
        }
      });
    }.call(this), function () {
      var t, n;
      e.extend({
        normalizeSpaces: function normalizeSpaces(t) {
          return t.replace(RegExp("" + e.ZERO_WIDTH_SPACE, "g"), "").replace(RegExp("" + e.NON_BREAKING_SPACE, "g"), " ");
        },
        normalizeNewlines: function normalizeNewlines(t) {
          return t.replace(/\r\n/g, "\n");
        },
        breakableWhitespacePattern: RegExp("[^\\S" + e.NON_BREAKING_SPACE + "]"),
        squishBreakableWhitespace: function squishBreakableWhitespace(t) {
          return t.replace(RegExp("" + e.breakableWhitespacePattern.source, "g"), " ").replace(/\ {2,}/g, " ");
        },
        escapeHTML: function escapeHTML(t) {
          var e;
          return e = document.createElement("div"), e.textContent = t, e.innerHTML;
        },
        summarizeStringChange: function summarizeStringChange(t, i) {
          var o, r, s, a;
          return t = e.UTF16String.box(t), i = e.UTF16String.box(i), i.length < t.length ? (r = n(t, i), a = r[0], o = r[1]) : (s = n(i, t), o = s[0], a = s[1]), {
            added: o,
            removed: a
          };
        }
      }), n = function n(_n, i) {
        var o, r, s, a, u;
        return _n.isEqualTo(i) ? ["", ""] : (r = t(_n, i), a = r.utf16String.length, s = a ? (u = r.offset, r, o = _n.codepoints.slice(0, u).concat(_n.codepoints.slice(u + a)), t(i, e.UTF16String.fromCodepoints(o))) : t(i, _n), [r.utf16String.toString(), s.utf16String.toString()]);
      }, t = function t(_t2, e) {
        var n, i, o;

        for (n = 0, i = _t2.length, o = e.length; i > n && _t2.charAt(n).isEqualTo(e.charAt(n));) {
          n++;
        }

        for (; i > n + 1 && _t2.charAt(i - 1).isEqualTo(e.charAt(o - 1));) {
          i--, o--;
        }

        return {
          utf16String: _t2.slice(n, i),
          offset: n
        };
      };
    }.call(this), function () {
      e.extend({
        copyObject: function copyObject(t) {
          var e, n, i;
          null == t && (t = {}), n = {};

          for (e in t) {
            i = t[e], n[e] = i;
          }

          return n;
        },
        objectsAreEqual: function objectsAreEqual(t, e) {
          var n, i;
          if (null == t && (t = {}), null == e && (e = {}), Object.keys(t).length !== Object.keys(e).length) return !1;

          for (n in t) {
            if (i = t[n], i !== e[n]) return !1;
          }

          return !0;
        }
      });
    }.call(this), function () {
      var t = [].slice;
      e.extend({
        arraysAreEqual: function arraysAreEqual(t, e) {
          var n, i, o, r;
          if (null == t && (t = []), null == e && (e = []), t.length !== e.length) return !1;

          for (i = n = 0, o = t.length; o > n; i = ++n) {
            if (r = t[i], r !== e[i]) return !1;
          }

          return !0;
        },
        arrayStartsWith: function arrayStartsWith(t, n) {
          return null == t && (t = []), null == n && (n = []), e.arraysAreEqual(t.slice(0, n.length), n);
        },
        spliceArray: function spliceArray() {
          var e, n, i;
          return n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], i = n.slice(0), i.splice.apply(i, e), i;
        },
        summarizeArrayChange: function summarizeArrayChange(t, e) {
          var n, i, o, r, s, a, u, c, l, h, p;

          for (null == t && (t = []), null == e && (e = []), n = [], h = [], o = new Set(), r = 0, u = t.length; u > r; r++) {
            p = t[r], o.add(p);
          }

          for (i = new Set(), s = 0, c = e.length; c > s; s++) {
            p = e[s], i.add(p), o.has(p) || n.push(p);
          }

          for (a = 0, l = t.length; l > a; a++) {
            p = t[a], i.has(p) || h.push(p);
          }

          return {
            added: n,
            removed: h
          };
        }
      });
    }.call(this), function () {
      var t, n, i, o;
      t = null, n = null, o = null, i = null, e.extend({
        getAllAttributeNames: function getAllAttributeNames() {
          return null != t ? t : t = e.getTextAttributeNames().concat(e.getBlockAttributeNames());
        },
        getBlockConfig: function getBlockConfig(t) {
          return e.config.blockAttributes[t];
        },
        getBlockAttributeNames: function getBlockAttributeNames() {
          return null != n ? n : n = Object.keys(e.config.blockAttributes);
        },
        getTextConfig: function getTextConfig(t) {
          return e.config.textAttributes[t];
        },
        getTextAttributeNames: function getTextAttributeNames() {
          return null != o ? o : o = Object.keys(e.config.textAttributes);
        },
        getListAttributeNames: function getListAttributeNames() {
          var t, n;
          return null != i ? i : i = function () {
            var i, o;
            i = e.config.blockAttributes, o = [];

            for (t in i) {
              n = i[t].listAttribute, null != n && o.push(n);
            }

            return o;
          }();
        }
      });
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      t = document.documentElement, n = null != (i = null != (o = null != (r = t.matchesSelector) ? r : t.webkitMatchesSelector) ? o : t.msMatchesSelector) ? i : t.mozMatchesSelector, e.extend({
        handleEvent: function handleEvent(n, i) {
          var o, r, _s, a, u, c, l, h, p, d, f, g;

          return h = null != i ? i : {}, c = h.onElement, u = h.matchingSelector, g = h.withCallback, a = h.inPhase, l = h.preventDefault, d = h.times, r = null != c ? c : t, p = u, o = g, f = "capturing" === a, _s = function s(t) {
            var n;
            return null != d && 0 === --d && _s.destroy(), n = e.findClosestElementFromNode(t.target, {
              matchingSelector: p
            }), null != n && (null != g && g.call(n, t, n), l) ? t.preventDefault() : void 0;
          }, _s.destroy = function () {
            return r.removeEventListener(n, _s, f);
          }, r.addEventListener(n, _s, f), _s;
        },
        handleEventOnce: function handleEventOnce(t, n) {
          return null == n && (n = {}), n.times = 1, e.handleEvent(t, n);
        },
        triggerEvent: function triggerEvent(n, i) {
          var o, r, s, a, u, c, l;
          return l = null != i ? i : {}, c = l.onElement, r = l.bubbles, s = l.cancelable, o = l.attributes, a = null != c ? c : t, r = r !== !1, s = s !== !1, u = document.createEvent("Events"), u.initEvent(n, r, s), null != o && e.extend.call(u, o), a.dispatchEvent(u);
        },
        elementMatchesSelector: function elementMatchesSelector(t, e) {
          return 1 === (null != t ? t.nodeType : void 0) ? n.call(t, e) : void 0;
        },
        findClosestElementFromNode: function findClosestElementFromNode(t, n) {
          var i, o, r;

          for (o = null != n ? n : {}, i = o.matchingSelector, r = o.untilNode; null != t && t.nodeType !== Node.ELEMENT_NODE;) {
            t = t.parentNode;
          }

          if (null != t) {
            if (null == i) return t;
            if (t.closest && null == r) return t.closest(i);

            for (; t && t !== r;) {
              if (e.elementMatchesSelector(t, i)) return t;
              t = t.parentNode;
            }
          }
        },
        findInnerElement: function findInnerElement(t) {
          for (; null != t ? t.firstElementChild : void 0;) {
            t = t.firstElementChild;
          }

          return t;
        },
        innerElementIsActive: function innerElementIsActive(t) {
          return document.activeElement !== t && e.elementContainsNode(t, document.activeElement);
        },
        elementContainsNode: function elementContainsNode(t, e) {
          if (t && e) for (; e;) {
            if (e === t) return !0;
            e = e.parentNode;
          }
        },
        findNodeFromContainerAndOffset: function findNodeFromContainerAndOffset(t, e) {
          var n;
          if (t) return t.nodeType === Node.TEXT_NODE ? t : 0 === e ? null != (n = t.firstChild) ? n : t : t.childNodes.item(e - 1);
        },
        findElementFromContainerAndOffset: function findElementFromContainerAndOffset(t, n) {
          var i;
          return i = e.findNodeFromContainerAndOffset(t, n), e.findClosestElementFromNode(i);
        },
        findChildIndexOfNode: function findChildIndexOfNode(t) {
          var e;

          if (null != t ? t.parentNode : void 0) {
            for (e = 0; t = t.previousSibling;) {
              e++;
            }

            return e;
          }
        },
        removeNode: function removeNode(t) {
          var e;
          return null != t && null != (e = t.parentNode) ? e.removeChild(t) : void 0;
        },
        walkTree: function walkTree(t, e) {
          var n, i, o, r, s;
          return o = null != e ? e : {}, i = o.onlyNodesOfType, r = o.usingFilter, n = o.expandEntityReferences, s = function () {
            switch (i) {
              case "element":
                return NodeFilter.SHOW_ELEMENT;

              case "text":
                return NodeFilter.SHOW_TEXT;

              case "comment":
                return NodeFilter.SHOW_COMMENT;

              default:
                return NodeFilter.SHOW_ALL;
            }
          }(), document.createTreeWalker(t, s, null != r ? r : null, n === !0);
        },
        tagName: function tagName(t) {
          var e;
          return null != t && null != (e = t.tagName) ? e.toLowerCase() : void 0;
        },
        makeElement: function makeElement(t, e) {
          var n, i, o, r, s, a, u, c, l, h;

          if (null == e && (e = {}), "object" == _typeof(t) ? (e = t, t = e.tagName) : e = {
            attributes: e
          }, i = document.createElement(t), null != e.editable && (null == e.attributes && (e.attributes = {}), e.attributes.contenteditable = e.editable), e.attributes) {
            a = e.attributes;

            for (r in a) {
              h = a[r], i.setAttribute(r, h);
            }
          }

          if (e.style) {
            u = e.style;

            for (r in u) {
              h = u[r], i.style[r] = h;
            }
          }

          if (e.data) {
            c = e.data;

            for (r in c) {
              h = c[r], i.dataset[r] = h;
            }
          }

          if (e.className) for (l = e.className.split(" "), o = 0, s = l.length; s > o; o++) {
            n = l[o], i.classList.add(n);
          }
          return e.textContent && (i.textContent = e.textContent), i;
        },
        getBlockTagNames: function getBlockTagNames() {
          var t, n;
          return null != e.blockTagNames ? e.blockTagNames : e.blockTagNames = function () {
            var i, o;
            i = e.config.blockAttributes, o = [];

            for (t in i) {
              n = i[t].tagName, n && o.push(n);
            }

            return o;
          }();
        },
        nodeIsBlockContainer: function nodeIsBlockContainer(t) {
          return e.nodeIsBlockStartComment(null != t ? t.firstChild : void 0);
        },
        nodeProbablyIsBlockContainer: function nodeProbablyIsBlockContainer(t) {
          var n, i;
          return n = e.tagName(t), s.call(e.getBlockTagNames(), n) >= 0 && (i = e.tagName(t.firstChild), s.call(e.getBlockTagNames(), i) < 0);
        },
        nodeIsBlockStart: function nodeIsBlockStart(t, n) {
          var i;
          return i = (null != n ? n : {
            strict: !0
          }).strict, i ? e.nodeIsBlockStartComment(t) : e.nodeIsBlockStartComment(t) || !e.nodeIsBlockStartComment(t.firstChild) && e.nodeProbablyIsBlockContainer(t);
        },
        nodeIsBlockStartComment: function nodeIsBlockStartComment(t) {
          return e.nodeIsCommentNode(t) && "block" === (null != t ? t.data : void 0);
        },
        nodeIsCommentNode: function nodeIsCommentNode(t) {
          return (null != t ? t.nodeType : void 0) === Node.COMMENT_NODE;
        },
        nodeIsCursorTarget: function nodeIsCursorTarget(t, n) {
          var i;
          return i = (null != n ? n : {}).name, t ? e.nodeIsTextNode(t) ? t.data === e.ZERO_WIDTH_SPACE ? i ? t.parentNode.dataset.trixCursorTarget === i : !0 : void 0 : e.nodeIsCursorTarget(t.firstChild) : void 0;
        },
        nodeIsAttachmentElement: function nodeIsAttachmentElement(t) {
          return e.elementMatchesSelector(t, e.AttachmentView.attachmentSelector);
        },
        nodeIsEmptyTextNode: function nodeIsEmptyTextNode(t) {
          return e.nodeIsTextNode(t) && "" === (null != t ? t.data : void 0);
        },
        nodeIsTextNode: function nodeIsTextNode(t) {
          return (null != t ? t.nodeType : void 0) === Node.TEXT_NODE;
        }
      });
    }.call(this), function () {
      var t, n, i, o, r;
      t = e.copyObject, o = e.objectsAreEqual, e.extend({
        normalizeRange: i = function i(t) {
          var e;
          if (null != t) return Array.isArray(t) || (t = [t, t]), [n(t[0]), n(null != (e = t[1]) ? e : t[0])];
        },
        rangeIsCollapsed: function rangeIsCollapsed(t) {
          var e, n, o;
          if (null != t) return n = i(t), o = n[0], e = n[1], r(o, e);
        },
        rangesAreEqual: function rangesAreEqual(t, e) {
          var n, o, s, a, u, c;
          if (null != t && null != e) return s = i(t), o = s[0], n = s[1], a = i(e), c = a[0], u = a[1], r(o, c) && r(n, u);
        }
      }), n = function n(e) {
        return "number" == typeof e ? e : t(e);
      }, r = function r(t, e) {
        return "number" == typeof t ? t === e : o(t, e);
      };
    }.call(this), function () {
      var t, n, i, o, r, s, a;
      e.registerElement = function (t, e) {
        var n, i;
        return null == e && (e = {}), t = t.toLowerCase(), e = a(e), i = s(e), (n = i.defaultCSS) && (delete i.defaultCSS, o(n, t)), r(t, i);
      }, o = function o(t, e) {
        var n;
        return n = i(e), n.textContent = t.replace(/%t/g, e);
      }, i = function i(e) {
        var n, i;
        return n = document.createElement("style"), n.setAttribute("type", "text/css"), n.setAttribute("data-tag-name", e.toLowerCase()), (i = t()) && n.setAttribute("nonce", i), document.head.insertBefore(n, document.head.firstChild), n;
      }, t = function t() {
        var t;
        return (t = n("trix-csp-nonce") || n("csp-nonce")) ? t.getAttribute("content") : void 0;
      }, n = function n(t) {
        return document.head.querySelector("meta[name=" + t + "]");
      }, s = function s(t) {
        var e, n, i;
        n = {};

        for (e in t) {
          i = t[e], n[e] = "function" == typeof i ? {
            value: i
          } : i;
        }

        return n;
      }, a = function () {
        var t;
        return t = function t(_t3) {
          var e, n, i, o, r;

          for (e = {}, r = ["initialize", "connect", "disconnect"], n = 0, o = r.length; o > n; n++) {
            i = r[n], e[i] = _t3[i], delete _t3[i];
          }

          return e;
        }, window.customElements ? function (e) {
          var n, i, o, r, s;
          return s = t(e), o = s.initialize, n = s.connect, i = s.disconnect, o && (r = n, n = function n() {
            return this.initialized || (this.initialized = !0, o.call(this)), null != r ? r.call(this) : void 0;
          }), n && (e.connectedCallback = n), i && (e.disconnectedCallback = i), e;
        } : function (e) {
          var n, i, o, r;
          return r = t(e), o = r.initialize, n = r.connect, i = r.disconnect, o && (e.createdCallback = o), n && (e.attachedCallback = n), i && (e.detachedCallback = i), e;
        };
      }(), r = function () {
        return window.customElements ? function (t, e) {
          var _n2;

          return _n2 = function n() {
            return "object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) ? Reflect.construct(HTMLElement, [], _n2) : HTMLElement.apply(this);
          }, Object.setPrototypeOf(_n2.prototype, HTMLElement.prototype), Object.setPrototypeOf(_n2, HTMLElement), Object.defineProperties(_n2.prototype, e), window.customElements.define(t, _n2), _n2;
        } : function (t, e) {
          var n, i;
          return i = Object.create(HTMLElement.prototype, e), n = document.registerElement(t, {
            prototype: i
          }), Object.defineProperty(i, "constructor", {
            value: n
          }), n;
        };
      }();
    }.call(this), function () {
      var t, n;
      e.extend({
        getDOMSelection: function getDOMSelection() {
          var t;
          return t = window.getSelection(), t.rangeCount > 0 ? t : void 0;
        },
        getDOMRange: function getDOMRange() {
          var n, i;
          return (n = null != (i = e.getDOMSelection()) ? i.getRangeAt(0) : void 0) && !t(n) ? n : void 0;
        },
        setDOMRange: function setDOMRange(t) {
          var n;
          return n = window.getSelection(), n.removeAllRanges(), n.addRange(t), e.selectionChangeObserver.update();
        }
      }), t = function t(_t4) {
        return n(_t4.startContainer) || n(_t4.endContainer);
      }, n = function n(t) {
        return !Object.getPrototypeOf(t);
      };
    }.call(this), function () {
      var t;
      t = {
        "application/x-trix-feature-detection": "test"
      }, e.extend({
        dataTransferIsPlainText: function dataTransferIsPlainText(t) {
          var e, n, i;
          return i = t.getData("text/plain"), n = t.getData("text/html"), i && n ? (e = new DOMParser().parseFromString(n, "text/html").body, e.textContent === i ? !e.querySelector("*") : void 0) : null != i ? i.length : void 0;
        },
        dataTransferIsWritable: function dataTransferIsWritable(e) {
          var n, i;

          if (null != (null != e ? e.setData : void 0)) {
            for (n in t) {
              if (i = t[n], !function () {
                try {
                  return e.setData(n, i), e.getData(n) === i;
                } catch (t) {}
              }()) return;
            }

            return !0;
          }
        },
        keyEventIsKeyboardCommand: function () {
          return /Mac|^iP/.test(navigator.platform) ? function (t) {
            return t.metaKey;
          } : function (t) {
            return t.ctrlKey;
          };
        }()
      });
    }.call(this), function () {}.call(this), function () {
      var t,
          n = function n(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) {
          i.call(e, o) && (t[o] = e[o]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty;

      t = e.arraysAreEqual, e.Hash = function (i) {
        function o(t) {
          null == t && (t = {}), this.values = s(t), o.__super__.constructor.apply(this, arguments);
        }

        var r, s, a, u, c;
        return n(o, i), o.fromCommonAttributesOfObjects = function (t) {
          var e, n, i, o, s, a;
          if (null == t && (t = []), !t.length) return new this();

          for (e = r(t[0]), i = e.getKeys(), a = t.slice(1), n = 0, o = a.length; o > n; n++) {
            s = a[n], i = e.getKeysCommonToHash(r(s)), e = e.slice(i);
          }

          return e;
        }, o.box = function (t) {
          return r(t);
        }, o.prototype.add = function (t, e) {
          return this.merge(u(t, e));
        }, o.prototype.remove = function (t) {
          return new e.Hash(s(this.values, t));
        }, o.prototype.get = function (t) {
          return this.values[t];
        }, o.prototype.has = function (t) {
          return t in this.values;
        }, o.prototype.merge = function (t) {
          return new e.Hash(a(this.values, c(t)));
        }, o.prototype.slice = function (t) {
          var n, i, o, r;

          for (r = {}, n = 0, o = t.length; o > n; n++) {
            i = t[n], this.has(i) && (r[i] = this.values[i]);
          }

          return new e.Hash(r);
        }, o.prototype.getKeys = function () {
          return Object.keys(this.values);
        }, o.prototype.getKeysCommonToHash = function (t) {
          var e, n, i, o, s;

          for (t = r(t), o = this.getKeys(), s = [], e = 0, i = o.length; i > e; e++) {
            n = o[e], this.values[n] === t.values[n] && s.push(n);
          }

          return s;
        }, o.prototype.isEqualTo = function (e) {
          return t(this.toArray(), r(e).toArray());
        }, o.prototype.isEmpty = function () {
          return 0 === this.getKeys().length;
        }, o.prototype.toArray = function () {
          var t, e, n;
          return (null != this.array ? this.array : this.array = function () {
            var i;
            e = [], i = this.values;

            for (t in i) {
              n = i[t], e.push(t, n);
            }

            return e;
          }.call(this)).slice(0);
        }, o.prototype.toObject = function () {
          return s(this.values);
        }, o.prototype.toJSON = function () {
          return this.toObject();
        }, o.prototype.contentsForInspection = function () {
          return {
            values: JSON.stringify(this.values)
          };
        }, u = function u(t, e) {
          var n;
          return n = {}, n[t] = e, n;
        }, a = function a(t, e) {
          var n, i, o;
          i = s(t);

          for (n in e) {
            o = e[n], i[n] = o;
          }

          return i;
        }, s = function s(t, e) {
          var n, i, o, r, s;

          for (r = {}, s = Object.keys(t).sort(), n = 0, o = s.length; o > n; n++) {
            i = s[n], i !== e && (r[i] = t[i]);
          }

          return r;
        }, r = function r(t) {
          return t instanceof e.Hash ? t : new e.Hash(t);
        }, c = function c(t) {
          return t instanceof e.Hash ? t.values : t;
        }, o;
      }(e.Object);
    }.call(this), function () {
      e.ObjectGroup = function () {
        function t(t, e) {
          var n, i;
          this.objects = null != t ? t : [], i = e.depth, n = e.asTree, n && (this.depth = i, this.objects = this.constructor.groupObjects(this.objects, {
            asTree: n,
            depth: this.depth + 1
          }));
        }

        return t.groupObjects = function (t, e) {
          var n, i, o, r, s, a, u, c, l;

          for (null == t && (t = []), l = null != e ? e : {}, o = l.depth, n = l.asTree, n && null == o && (o = 0), c = [], s = 0, a = t.length; a > s; s++) {
            if (u = t[s], r) {
              if (("function" == typeof u.canBeGrouped ? u.canBeGrouped(o) : void 0) && ("function" == typeof (i = r[r.length - 1]).canBeGroupedWith ? i.canBeGroupedWith(u, o) : void 0)) {
                r.push(u);
                continue;
              }

              c.push(new this(r, {
                depth: o,
                asTree: n
              })), r = null;
            }

            ("function" == typeof u.canBeGrouped ? u.canBeGrouped(o) : void 0) ? r = [u] : c.push(u);
          }

          return r && c.push(new this(r, {
            depth: o,
            asTree: n
          })), c;
        }, t.prototype.getObjects = function () {
          return this.objects;
        }, t.prototype.getDepth = function () {
          return this.depth;
        }, t.prototype.getCacheKey = function () {
          var t, e, n, i, o;

          for (e = ["objectGroup"], o = this.getObjects(), t = 0, n = o.length; n > t; t++) {
            i = o[t], e.push(i.getCacheKey());
          }

          return e.join("/");
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t5, e) {
        function i() {
          this.constructor = _t5;
        }

        for (var o in e) {
          n.call(e, o) && (_t5[o] = e[o]);
        }

        return i.prototype = e.prototype, _t5.prototype = new i(), _t5.__super__ = e.prototype, _t5;
      },
          n = {}.hasOwnProperty;

      e.ObjectMap = function (e) {
        function n(t) {
          var e, n, i, o, r;

          for (null == t && (t = []), this.objects = {}, i = 0, o = t.length; o > i; i++) {
            r = t[i], n = JSON.stringify(r), null == (e = this.objects)[n] && (e[n] = r);
          }
        }

        return t(n, e), n.prototype.find = function (t) {
          var e;
          return e = JSON.stringify(t), this.objects[e];
        }, n;
      }(e.BasicObject);
    }.call(this), function () {
      e.ElementStore = function () {
        function t(t) {
          this.reset(t);
        }

        var e;
        return t.prototype.add = function (t) {
          var n;
          return n = e(t), this.elements[n] = t;
        }, t.prototype.remove = function (t) {
          var n, i;
          return n = e(t), (i = this.elements[n]) ? (delete this.elements[n], i) : void 0;
        }, t.prototype.reset = function (t) {
          var e, n, i;

          for (null == t && (t = []), this.elements = {}, n = 0, i = t.length; i > n; n++) {
            e = t[n], this.add(e);
          }

          return t;
        }, e = function e(t) {
          return t.dataset.trixStoreKey;
        }, t;
      }();
    }.call(this), function () {}.call(this), function () {
      var t = function t(_t6, e) {
        function i() {
          this.constructor = _t6;
        }

        for (var o in e) {
          n.call(e, o) && (_t6[o] = e[o]);
        }

        return i.prototype = e.prototype, _t6.prototype = new i(), _t6.__super__ = e.prototype, _t6;
      },
          n = {}.hasOwnProperty;

      e.Operation = function (e) {
        function n() {
          return n.__super__.constructor.apply(this, arguments);
        }

        return t(n, e), n.prototype.isPerforming = function () {
          return this.performing === !0;
        }, n.prototype.hasPerformed = function () {
          return this.performed === !0;
        }, n.prototype.hasSucceeded = function () {
          return this.performed && this.succeeded;
        }, n.prototype.hasFailed = function () {
          return this.performed && !this.succeeded;
        }, n.prototype.getPromise = function () {
          return null != this.promise ? this.promise : this.promise = new Promise(function (t) {
            return function (e, n) {
              return t.performing = !0, t.perform(function (i, o) {
                return t.succeeded = i, t.performing = !1, t.performed = !0, t.succeeded ? e(o) : n(o);
              });
            };
          }(this));
        }, n.prototype.perform = function (t) {
          return t(!1);
        }, n.prototype.release = function () {
          var t;
          return null != (t = this.promise) && "function" == typeof t.cancel && t.cancel(), this.promise = null, this.performing = null, this.performed = null, this.succeeded = null;
        }, n.proxyMethod("getPromise().then"), n.proxyMethod("getPromise().catch"), n;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s = function s(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          a.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          a = {}.hasOwnProperty;

      e.UTF16String = function (t) {
        function e(t, e) {
          this.ucs2String = t, this.codepoints = e, this.length = this.codepoints.length, this.ucs2Length = this.ucs2String.length;
        }

        return s(e, t), e.box = function (t) {
          return null == t && (t = ""), t instanceof this ? t : this.fromUCS2String(null != t ? t.toString() : void 0);
        }, e.fromUCS2String = function (t) {
          return new this(t, o(t));
        }, e.fromCodepoints = function (t) {
          return new this(r(t), t);
        }, e.prototype.offsetToUCS2Offset = function (t) {
          return r(this.codepoints.slice(0, Math.max(0, t))).length;
        }, e.prototype.offsetFromUCS2Offset = function (t) {
          return o(this.ucs2String.slice(0, Math.max(0, t))).length;
        }, e.prototype.slice = function () {
          var t;
          return this.constructor.fromCodepoints((t = this.codepoints).slice.apply(t, arguments));
        }, e.prototype.charAt = function (t) {
          return this.slice(t, t + 1);
        }, e.prototype.isEqualTo = function (t) {
          return this.constructor.box(t).ucs2String === this.ucs2String;
        }, e.prototype.toJSON = function () {
          return this.ucs2String;
        }, e.prototype.getCacheKey = function () {
          return this.ucs2String;
        }, e.prototype.toString = function () {
          return this.ucs2String;
        }, e;
      }(e.BasicObject), t = 1 === ("function" == typeof Array.from ? Array.from("\uD83D\uDC7C").length : void 0), n = null != ("function" == typeof " ".codePointAt ? " ".codePointAt(0) : void 0), i = " \uD83D\uDC7C" === ("function" == typeof String.fromCodePoint ? String.fromCodePoint(32, 128124) : void 0), o = t && n ? function (t) {
        return Array.from(t).map(function (t) {
          return t.codePointAt(0);
        });
      } : function (t) {
        var e, n, i, o, r;

        for (o = [], e = 0, i = t.length; i > e;) {
          r = t.charCodeAt(e++), r >= 55296 && 56319 >= r && i > e && (n = t.charCodeAt(e++), 56320 === (64512 & n) ? r = ((1023 & r) << 10) + (1023 & n) + 65536 : e--), o.push(r);
        }

        return o;
      }, r = i ? function (t) {
        return String.fromCodePoint.apply(String, t);
      } : function (t) {
        var e, n, i;
        return e = function () {
          var e, o, r;

          for (r = [], e = 0, o = t.length; o > e; e++) {
            i = t[e], n = "", i > 65535 && (i -= 65536, n += String.fromCharCode(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), r.push(n + String.fromCharCode(i));
          }

          return r;
        }(), e.join("");
      };
    }.call(this), function () {}.call(this), function () {}.call(this), function () {
      e.config.lang = {
        attachFiles: "Attach Files",
        bold: "Bold",
        bullets: "Bullets",
        "byte": "Byte",
        bytes: "Bytes",
        captionPlaceholder: "Add a caption\u2026",
        code: "Code",
        heading1: "Heading",
        indent: "Increase Level",
        italic: "Italic",
        link: "Link",
        numbers: "Numbers",
        outdent: "Decrease Level",
        quote: "Quote",
        redo: "Redo",
        remove: "Remove",
        strike: "Strikethrough",
        undo: "Undo",
        unlink: "Unlink",
        url: "URL",
        urlPlaceholder: "Enter a URL\u2026",
        GB: "GB",
        KB: "KB",
        MB: "MB",
        PB: "PB",
        TB: "TB"
      };
    }.call(this), function () {
      e.config.css = {
        attachment: "attachment",
        attachmentCaption: "attachment__caption",
        attachmentCaptionEditor: "attachment__caption-editor",
        attachmentMetadata: "attachment__metadata",
        attachmentMetadataContainer: "attachment__metadata-container",
        attachmentName: "attachment__name",
        attachmentProgress: "attachment__progress",
        attachmentSize: "attachment__size",
        attachmentToolbar: "attachment__toolbar",
        attachmentGallery: "attachment-gallery"
      };
    }.call(this), function () {
      var t;
      e.config.blockAttributes = t = {
        "default": {
          tagName: "div",
          parse: !1
        },
        quote: {
          tagName: "blockquote",
          nestable: !0
        },
        heading1: {
          tagName: "h1",
          terminal: !0,
          breakOnReturn: !0,
          group: !1
        },
        code: {
          tagName: "pre",
          terminal: !0,
          text: {
            plaintext: !0
          }
        },
        bulletList: {
          tagName: "ul",
          parse: !1
        },
        bullet: {
          tagName: "li",
          listAttribute: "bulletList",
          group: !1,
          nestable: !0,
          test: function test(n) {
            return e.tagName(n.parentNode) === t[this.listAttribute].tagName;
          }
        },
        numberList: {
          tagName: "ol",
          parse: !1
        },
        number: {
          tagName: "li",
          listAttribute: "numberList",
          group: !1,
          nestable: !0,
          test: function test(n) {
            return e.tagName(n.parentNode) === t[this.listAttribute].tagName;
          }
        },
        attachmentGallery: {
          tagName: "div",
          exclusive: !0,
          terminal: !0,
          parse: !1,
          group: !1
        }
      };
    }.call(this), function () {
      var t, n;
      t = e.config.lang, n = [t.bytes, t.KB, t.MB, t.GB, t.TB, t.PB], e.config.fileSize = {
        prefix: "IEC",
        precision: 2,
        formatter: function formatter(e) {
          var i, o, r, s, a;

          switch (e) {
            case 0:
              return "0 " + t.bytes;

            case 1:
              return "1 " + t["byte"];

            default:
              return i = function () {
                switch (this.prefix) {
                  case "SI":
                    return 1e3;

                  case "IEC":
                    return 1024;
                }
              }.call(this), o = Math.floor(Math.log(e) / Math.log(i)), r = e / Math.pow(i, o), s = r.toFixed(this.precision), a = s.replace(/0*$/, "").replace(/\.$/, ""), a + " " + n[o];
          }
        }
      };
    }.call(this), function () {
      e.config.textAttributes = {
        bold: {
          tagName: "strong",
          inheritable: !0,
          parser: function parser(t) {
            var e;
            return e = window.getComputedStyle(t), "bold" === e.fontWeight || e.fontWeight >= 600;
          }
        },
        italic: {
          tagName: "em",
          inheritable: !0,
          parser: function parser(t) {
            var e;
            return e = window.getComputedStyle(t), "italic" === e.fontStyle;
          }
        },
        href: {
          groupTagName: "a",
          parser: function parser(t) {
            var n, i, o;
            return n = e.AttachmentView.attachmentSelector, o = "a:not(" + n + ")", (i = e.findClosestElementFromNode(t, {
              matchingSelector: o
            })) ? i.getAttribute("href") : void 0;
          }
        },
        strike: {
          tagName: "del",
          inheritable: !0
        },
        frozen: {
          style: {
            backgroundColor: "highlight"
          }
        }
      };
    }.call(this), function () {
      var t, n, i, o, r;
      r = "[data-trix-serialize=false]", o = ["contenteditable", "data-trix-id", "data-trix-store-key", "data-trix-mutable", "data-trix-placeholder", "tabindex"], n = "data-trix-serialized-attributes", i = "[" + n + "]", t = new RegExp("<!--block-->", "g"), e.extend({
        serializers: {
          "application/json": function applicationJson(t) {
            var n;
            if (t instanceof e.Document) n = t;else {
              if (!(t instanceof HTMLElement)) throw new Error("unserializable object");
              n = e.Document.fromHTML(t.innerHTML);
            }
            return n.toSerializableDocument().toJSONString();
          },
          "text/html": function textHtml(s) {
            var a, u, c, l, h, p, d, f, g, m, v, y, b, A, C, x, w;
            if (s instanceof e.Document) l = e.DocumentView.render(s);else {
              if (!(s instanceof HTMLElement)) throw new Error("unserializable object");
              l = s.cloneNode(!0);
            }

            for (A = l.querySelectorAll(r), h = 0, g = A.length; g > h; h++) {
              c = A[h], e.removeNode(c);
            }

            for (p = 0, m = o.length; m > p; p++) {
              for (a = o[p], C = l.querySelectorAll("[" + a + "]"), d = 0, v = C.length; v > d; d++) {
                c = C[d], c.removeAttribute(a);
              }
            }

            for (x = l.querySelectorAll(i), f = 0, y = x.length; y > f; f++) {
              c = x[f];

              try {
                u = JSON.parse(c.getAttribute(n)), c.removeAttribute(n);

                for (b in u) {
                  w = u[b], c.setAttribute(b, w);
                }
              } catch (E) {}
            }

            return l.innerHTML.replace(t, "");
          }
        },
        deserializers: {
          "application/json": function applicationJson(t) {
            return e.Document.fromJSONString(t);
          },
          "text/html": function textHtml(t) {
            return e.Document.fromHTML(t);
          }
        },
        serializeToContentType: function serializeToContentType(t, n) {
          var i;
          if (i = e.serializers[n]) return i(t);
          throw new Error("unknown content type: " + n);
        },
        deserializeFromContentType: function deserializeFromContentType(t, n) {
          var i;
          if (i = e.deserializers[n]) return i(t);
          throw new Error("unknown content type: " + n);
        }
      });
    }.call(this), function () {
      var t;
      t = e.config.lang, e.config.toolbar = {
        getDefaultHTML: function getDefaultHTML() {
          return '<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="' + t.bold + '" tabindex="-1">' + t.bold + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="' + t.italic + '" tabindex="-1">' + t.italic + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="' + t.strike + '" tabindex="-1">' + t.strike + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="' + t.link + '" tabindex="-1">' + t.link + '</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="' + t.heading1 + '" tabindex="-1">' + t.heading1 + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="' + t.quote + '" tabindex="-1">' + t.quote + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="' + t.code + '" tabindex="-1">' + t.code + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="' + t.bullets + '" tabindex="-1">' + t.bullets + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="' + t.numbers + '" tabindex="-1">' + t.numbers + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="' + t.outdent + '" tabindex="-1">' + t.outdent + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="' + t.indent + '" tabindex="-1">' + t.indent + '</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="' + t.attachFiles + '" tabindex="-1">' + t.attachFiles + '</button>\n  </span>\n\n  <span class="trix-button-group-spacer"></span>\n\n  <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="' + t.undo + '" tabindex="-1">' + t.undo + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="' + t.redo + '" tabindex="-1">' + t.redo + '</button>\n  </span>\n</div>\n\n<div class="trix-dialogs" data-trix-dialogs>\n  <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n    <div class="trix-dialog__link-fields">\n      <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="' + t.urlPlaceholder + '" aria-label="' + t.url + '" required data-trix-input>\n      <div class="trix-button-group">\n        <input type="button" class="trix-button trix-button--dialog" value="' + t.link + '" data-trix-method="setAttribute">\n        <input type="button" class="trix-button trix-button--dialog" value="' + t.unlink + '" data-trix-method="removeAttribute">\n      </div>\n    </div>\n  </div>\n</div>';
        }
      };
    }.call(this), function () {
      e.config.undoInterval = 5e3;
    }.call(this), function () {
      e.config.attachments = {
        preview: {
          presentation: "gallery",
          caption: {
            name: !0,
            size: !0
          }
        },
        file: {
          caption: {
            size: !0
          }
        }
      };
    }.call(this), function () {
      e.config.keyNames = {
        8: "backspace",
        9: "tab",
        13: "return",
        27: "escape",
        37: "left",
        39: "right",
        46: "delete",
        68: "d",
        72: "h",
        79: "o"
      };
    }.call(this), function () {
      e.config.input = {
        level2Enabled: !0,
        getLevel: function getLevel() {
          return this.level2Enabled && e.browser.supportsInputEvents ? 2 : 0;
        },
        pickFiles: function pickFiles(t) {
          var n;
          return n = e.makeElement("input", {
            type: "file",
            multiple: !0,
            hidden: !0,
            id: this.fileInputId
          }), n.addEventListener("change", function () {
            return t(n.files), e.removeNode(n);
          }), e.removeNode(document.getElementById(this.fileInputId)), document.body.appendChild(n), n.click();
        },
        fileInputId: "trix-file-input-" + Date.now().toString(16)
      };
    }.call(this), function () {}.call(this), function () {
      e.registerElement("trix-toolbar", {
        defaultCSS: "%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}",
        initialize: function initialize() {
          return "" === this.innerHTML ? this.innerHTML = e.config.toolbar.getDefaultHTML() : void 0;
        }
      });
    }.call(this), function () {
      var t = function t(_t7, e) {
        function i() {
          this.constructor = _t7;
        }

        for (var o in e) {
          n.call(e, o) && (_t7[o] = e[o]);
        }

        return i.prototype = e.prototype, _t7.prototype = new i(), _t7.__super__ = e.prototype, _t7;
      },
          n = {}.hasOwnProperty,
          i = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      e.ObjectView = function (n) {
        function o(t, e) {
          this.object = t, this.options = null != e ? e : {}, this.childViews = [], this.rootView = this;
        }

        return t(o, n), o.prototype.getNodes = function () {
          var t, e, n, i, o;

          for (null == this.nodes && (this.nodes = this.createNodes()), i = this.nodes, o = [], t = 0, e = i.length; e > t; t++) {
            n = i[t], o.push(n.cloneNode(!0));
          }

          return o;
        }, o.prototype.invalidate = function () {
          var t;
          return this.nodes = null, this.childViews = [], null != (t = this.parentView) ? t.invalidate() : void 0;
        }, o.prototype.invalidateViewForObject = function (t) {
          var e;
          return null != (e = this.findViewForObject(t)) ? e.invalidate() : void 0;
        }, o.prototype.findOrCreateCachedChildView = function (t, e) {
          var n;
          return (n = this.getCachedViewForObject(e)) ? this.recordChildView(n) : (n = this.createChildView.apply(this, arguments), this.cacheViewForObject(n, e)), n;
        }, o.prototype.createChildView = function (t, n, i) {
          var o;
          return null == i && (i = {}), n instanceof e.ObjectGroup && (i.viewClass = t, t = e.ObjectGroupView), o = new t(n, i), this.recordChildView(o);
        }, o.prototype.recordChildView = function (t) {
          return t.parentView = this, t.rootView = this.rootView, this.childViews.push(t), t;
        }, o.prototype.getAllChildViews = function () {
          var t, e, n, i, o;

          for (o = [], i = this.childViews, e = 0, n = i.length; n > e; e++) {
            t = i[e], o.push(t), o = o.concat(t.getAllChildViews());
          }

          return o;
        }, o.prototype.findElement = function () {
          return this.findElementForObject(this.object);
        }, o.prototype.findElementForObject = function (t) {
          var e;
          return (e = null != t ? t.id : void 0) ? this.rootView.element.querySelector("[data-trix-id='" + e + "']") : void 0;
        }, o.prototype.findViewForObject = function (t) {
          var e, n, i, o;

          for (i = this.getAllChildViews(), e = 0, n = i.length; n > e; e++) {
            if (o = i[e], o.object === t) return o;
          }
        }, o.prototype.getViewCache = function () {
          return this.rootView !== this ? this.rootView.getViewCache() : this.isViewCachingEnabled() ? null != this.viewCache ? this.viewCache : this.viewCache = {} : void 0;
        }, o.prototype.isViewCachingEnabled = function () {
          return this.shouldCacheViews !== !1;
        }, o.prototype.enableViewCaching = function () {
          return this.shouldCacheViews = !0;
        }, o.prototype.disableViewCaching = function () {
          return this.shouldCacheViews = !1;
        }, o.prototype.getCachedViewForObject = function (t) {
          var e;
          return null != (e = this.getViewCache()) ? e[t.getCacheKey()] : void 0;
        }, o.prototype.cacheViewForObject = function (t, e) {
          var n;
          return null != (n = this.getViewCache()) ? n[e.getCacheKey()] = t : void 0;
        }, o.prototype.garbageCollectCachedViews = function () {
          var t, e, n, o, r, s;

          if (t = this.getViewCache()) {
            s = this.getAllChildViews().concat(this), n = function () {
              var t, e, n;

              for (n = [], t = 0, e = s.length; e > t; t++) {
                r = s[t], n.push(r.object.getCacheKey());
              }

              return n;
            }(), o = [];

            for (e in t) {
              i.call(n, e) < 0 && o.push(delete t[e]);
            }

            return o;
          }
        }, o;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function t(_t8, e) {
        function i() {
          this.constructor = _t8;
        }

        for (var o in e) {
          n.call(e, o) && (_t8[o] = e[o]);
        }

        return i.prototype = e.prototype, _t8.prototype = new i(), _t8.__super__ = e.prototype, _t8;
      },
          n = {}.hasOwnProperty;

      e.ObjectGroupView = function (e) {
        function n() {
          n.__super__.constructor.apply(this, arguments), this.objectGroup = this.object, this.viewClass = this.options.viewClass, delete this.options.viewClass;
        }

        return t(n, e), n.prototype.getChildViews = function () {
          var t, e, n, i;
          if (!this.childViews.length) for (i = this.objectGroup.getObjects(), t = 0, e = i.length; e > t; t++) {
            n = i[t], this.findOrCreateCachedChildView(this.viewClass, n, this.options);
          }
          return this.childViews;
        }, n.prototype.createNodes = function () {
          var t, e, n, i, o, r, s, a, u;

          for (t = this.createContainerElement(), s = this.getChildViews(), e = 0, i = s.length; i > e; e++) {
            for (u = s[e], a = u.getNodes(), n = 0, o = a.length; o > n; n++) {
              r = a[n], t.appendChild(r);
            }
          }

          return [t];
        }, n.prototype.createContainerElement = function (t) {
          return null == t && (t = this.objectGroup.getDepth()), this.getChildViews()[0].createContainerElement(t);
        }, n;
      }(e.ObjectView);
    }.call(this), function () {
      var t = function t(_t9, e) {
        function i() {
          this.constructor = _t9;
        }

        for (var o in e) {
          n.call(e, o) && (_t9[o] = e[o]);
        }

        return i.prototype = e.prototype, _t9.prototype = new i(), _t9.__super__ = e.prototype, _t9;
      },
          n = {}.hasOwnProperty;

      e.Controller = function (e) {
        function n() {
          return n.__super__.constructor.apply(this, arguments);
        }

        return t(n, e), n;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a = function a(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          u = function u(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          c.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          c = {}.hasOwnProperty,
          l = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      t = e.findClosestElementFromNode, i = e.nodeIsEmptyTextNode, n = e.nodeIsBlockStartComment, o = e.normalizeSpaces, r = e.summarizeStringChange, s = e.tagName, e.MutationObserver = function (e) {
        function c(t) {
          this.element = t, this.didMutate = a(this.didMutate, this), this.observer = new window.MutationObserver(this.didMutate), this.start();
        }

        var _h, p, d, f;

        return u(c, e), p = "data-trix-mutable", d = "[" + p + "]", f = {
          attributes: !0,
          childList: !0,
          characterData: !0,
          characterDataOldValue: !0,
          subtree: !0
        }, c.prototype.start = function () {
          return this.reset(), this.observer.observe(this.element, f);
        }, c.prototype.stop = function () {
          return this.observer.disconnect();
        }, c.prototype.didMutate = function (t) {
          var e, n;
          return (e = this.mutations).push.apply(e, this.findSignificantMutations(t)), this.mutations.length ? (null != (n = this.delegate) && "function" == typeof n.elementDidMutate && n.elementDidMutate(this.getMutationSummary()), this.reset()) : void 0;
        }, c.prototype.reset = function () {
          return this.mutations = [];
        }, c.prototype.findSignificantMutations = function (t) {
          var e, n, i, o;

          for (o = [], e = 0, n = t.length; n > e; e++) {
            i = t[e], this.mutationIsSignificant(i) && o.push(i);
          }

          return o;
        }, c.prototype.mutationIsSignificant = function (t) {
          var e, n, i, o;
          if (this.nodeIsMutable(t.target)) return !1;

          for (o = this.nodesModifiedByMutation(t), e = 0, n = o.length; n > e; e++) {
            if (i = o[e], this.nodeIsSignificant(i)) return !0;
          }

          return !1;
        }, c.prototype.nodeIsSignificant = function (t) {
          return t !== this.element && !this.nodeIsMutable(t) && !i(t);
        }, c.prototype.nodeIsMutable = function (e) {
          return t(e, {
            matchingSelector: d
          });
        }, c.prototype.nodesModifiedByMutation = function (t) {
          var e;

          switch (e = [], t.type) {
            case "attributes":
              t.attributeName !== p && e.push(t.target);
              break;

            case "characterData":
              e.push(t.target.parentNode), e.push(t.target);
              break;

            case "childList":
              e.push.apply(e, t.addedNodes), e.push.apply(e, t.removedNodes);
          }

          return e;
        }, c.prototype.getMutationSummary = function () {
          return this.getTextMutationSummary();
        }, c.prototype.getTextMutationSummary = function () {
          var t, e, n, i, o, r, s, a, u, c, h;

          for (a = this.getTextChangesFromCharacterData(), n = a.additions, o = a.deletions, h = this.getTextChangesFromChildList(), u = h.additions, r = 0, s = u.length; s > r; r++) {
            e = u[r], l.call(n, e) < 0 && n.push(e);
          }

          return o.push.apply(o, h.deletions), c = {}, (t = n.join("")) && (c.textAdded = t), (i = o.join("")) && (c.textDeleted = i), c;
        }, c.prototype.getMutationsByType = function (t) {
          var e, n, i, o, r;

          for (o = this.mutations, r = [], e = 0, n = o.length; n > e; e++) {
            i = o[e], i.type === t && r.push(i);
          }

          return r;
        }, c.prototype.getTextChangesFromChildList = function () {
          var t, e, i, r, s, a, u, c, l, p, d;

          for (t = [], u = [], a = this.getMutationsByType("childList"), e = 0, r = a.length; r > e; e++) {
            s = a[e], t.push.apply(t, s.addedNodes), u.push.apply(u, s.removedNodes);
          }

          return c = 0 === t.length && 1 === u.length && n(u[0]), c ? (p = [], d = ["\n"]) : (p = _h(t), d = _h(u)), {
            additions: function () {
              var t, e, n;

              for (n = [], i = t = 0, e = p.length; e > t; i = ++t) {
                l = p[i], l !== d[i] && n.push(o(l));
              }

              return n;
            }(),
            deletions: function () {
              var t, e, n;

              for (n = [], i = t = 0, e = d.length; e > t; i = ++t) {
                l = d[i], l !== p[i] && n.push(o(l));
              }

              return n;
            }()
          };
        }, c.prototype.getTextChangesFromCharacterData = function () {
          var t, e, n, i, s, a, u, c;
          return e = this.getMutationsByType("characterData"), e.length && (c = e[0], n = e[e.length - 1], s = o(c.oldValue), i = o(n.target.data), a = r(s, i), t = a.added, u = a.removed), {
            additions: t ? [t] : [],
            deletions: u ? [u] : []
          };
        }, _h = function h(t) {
          var e, n, i, o;

          for (null == t && (t = []), o = [], e = 0, n = t.length; n > e; e++) {
            switch (i = t[e], i.nodeType) {
              case Node.TEXT_NODE:
                o.push(i.data);
                break;

              case Node.ELEMENT_NODE:
                "br" === s(i) ? o.push("\n") : o.push.apply(o, _h(i.childNodes));
            }
          }

          return o;
        }, c;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function t(_t10, e) {
        function i() {
          this.constructor = _t10;
        }

        for (var o in e) {
          n.call(e, o) && (_t10[o] = e[o]);
        }

        return i.prototype = e.prototype, _t10.prototype = new i(), _t10.__super__ = e.prototype, _t10;
      },
          n = {}.hasOwnProperty;

      e.FileVerificationOperation = function (e) {
        function n(t) {
          this.file = t;
        }

        return t(n, e), n.prototype.perform = function (t) {
          var e;
          return e = new FileReader(), e.onerror = function () {
            return t(!1);
          }, e.onload = function (n) {
            return function () {
              e.onerror = null;

              try {
                e.abort();
              } catch (i) {}

              return t(!0, n.file);
            };
          }(this), e.readAsArrayBuffer(this.file);
        }, n;
      }(e.Operation);
    }.call(this), function () {
      var t,
          n,
          i = function i(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          o.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      t = e.handleEvent, n = e.innerElementIsActive, e.InputController = function (o) {
        function r(n) {
          var i;
          this.element = n, this.mutationObserver = new e.MutationObserver(this.element), this.mutationObserver.delegate = this;

          for (i in this.events) {
            t(i, {
              onElement: this.element,
              withCallback: this.handlerFor(i)
            });
          }
        }

        return i(r, o), r.prototype.events = {}, r.prototype.elementDidMutate = function () {}, r.prototype.editorWillSyncDocumentView = function () {
          return this.mutationObserver.stop();
        }, r.prototype.editorDidSyncDocumentView = function () {
          return this.mutationObserver.start();
        }, r.prototype.requestRender = function () {
          var t;
          return null != (t = this.delegate) && "function" == typeof t.inputControllerDidRequestRender ? t.inputControllerDidRequestRender() : void 0;
        }, r.prototype.requestReparse = function () {
          var t;
          return null != (t = this.delegate) && "function" == typeof t.inputControllerDidRequestReparse && t.inputControllerDidRequestReparse(), this.requestRender();
        }, r.prototype.attachFiles = function (t) {
          var n, i;
          return i = function () {
            var i, o, r;

            for (r = [], i = 0, o = t.length; o > i; i++) {
              n = t[i], r.push(new e.FileVerificationOperation(n));
            }

            return r;
          }(), Promise.all(i).then(function (t) {
            return function (e) {
              return t.handleInput(function () {
                var t, n;
                return null != (t = this.delegate) && t.inputControllerWillAttachFiles(), null != (n = this.responder) && n.insertFiles(e), this.requestRender();
              });
            };
          }(this));
        }, r.prototype.handlerFor = function (t) {
          return function (e) {
            return function (i) {
              return i.defaultPrevented ? void 0 : e.handleInput(function () {
                return n(this.element) ? void 0 : (this.eventName = t, this.events[t].call(this, i));
              });
            };
          }(this);
        }, r.prototype.handleInput = function (t) {
          var e, n;

          try {
            return null != (e = this.delegate) && e.inputControllerWillHandleInput(), t.call(this);
          } finally {
            null != (n = this.delegate) && n.inputControllerDidHandleInput();
          }
        }, r;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c,
          l,
          h,
          p,
          d,
          f = function f(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          g.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          g = {}.hasOwnProperty,
          m = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      c = e.makeElement, l = e.objectsAreEqual, d = e.tagName, n = e.browser, a = e.keyEventIsKeyboardCommand, o = e.dataTransferIsWritable, i = e.dataTransferIsPlainText, u = e.config.keyNames, e.Level0InputController = function (n) {
        function s() {
          s.__super__.constructor.apply(this, arguments), this.resetInputSummary();
        }

        var d;
        return f(s, n), d = 0, s.prototype.setInputSummary = function (t) {
          var e, n;
          null == t && (t = {}), this.inputSummary.eventName = this.eventName;

          for (e in t) {
            n = t[e], this.inputSummary[e] = n;
          }

          return this.inputSummary;
        }, s.prototype.resetInputSummary = function () {
          return this.inputSummary = {};
        }, s.prototype.reset = function () {
          return this.resetInputSummary(), e.selectionChangeObserver.reset();
        }, s.prototype.elementDidMutate = function (t) {
          var e;
          return this.isComposing() ? null != (e = this.delegate) && "function" == typeof e.inputControllerDidAllowUnhandledInput ? e.inputControllerDidAllowUnhandledInput() : void 0 : this.handleInput(function () {
            return this.mutationIsSignificant(t) && (this.mutationIsExpected(t) ? this.requestRender() : this.requestReparse()), this.reset();
          });
        }, s.prototype.mutationIsExpected = function (t) {
          var e, n, i, o, r, s, a, u, c, l;
          return a = t.textAdded, u = t.textDeleted, this.inputSummary.preferDocument ? !0 : (e = null != a ? a === this.inputSummary.textAdded : !this.inputSummary.textAdded, n = null != u ? this.inputSummary.didDelete : !this.inputSummary.didDelete, c = ("\n" === a || " \n" === a) && !e, l = "\n" === u && !n, s = c && !l || l && !c, s && (o = this.getSelectedRange()) && (i = c ? a.replace(/\n$/, "").length || -1 : (null != a ? a.length : void 0) || 1, null != (r = this.responder) ? r.positionIsBlockBreak(o[1] + i) : void 0) ? !0 : e && n);
        }, s.prototype.mutationIsSignificant = function (t) {
          var e, n, i;
          return i = Object.keys(t).length > 0, e = "" === (null != (n = this.compositionInput) ? n.getEndData() : void 0), i || !e;
        }, s.prototype.events = {
          keydown: function keydown(t) {
            var n, i, o, r, s, c, l, h, p;

            if (this.isComposing() || this.resetInputSummary(), this.inputSummary.didInput = !0, r = u[t.keyCode]) {
              for (i = this.keys, h = ["ctrl", "alt", "shift", "meta"], o = 0, c = h.length; c > o; o++) {
                l = h[o], t[l + "Key"] && ("ctrl" === l && (l = "control"), i = null != i ? i[l] : void 0);
              }

              null != (null != i ? i[r] : void 0) && (this.setInputSummary({
                keyName: r
              }), e.selectionChangeObserver.reset(), i[r].call(this, t));
            }

            return a(t) && (n = String.fromCharCode(t.keyCode).toLowerCase()) && (s = function () {
              var e, n, i, o;

              for (i = ["alt", "shift"], o = [], e = 0, n = i.length; n > e; e++) {
                l = i[e], t[l + "Key"] && o.push(l);
              }

              return o;
            }(), s.push(n), null != (p = this.delegate) ? p.inputControllerDidReceiveKeyboardCommand(s) : void 0) ? t.preventDefault() : void 0;
          },
          keypress: function keypress(t) {
            var e, n, i;
            if (null == this.inputSummary.eventName && !t.metaKey && (!t.ctrlKey || t.altKey)) return (i = p(t)) ? (null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.insertString(i), this.setInputSummary({
              textAdded: i,
              didDelete: this.selectionIsExpanded()
            })) : void 0;
          },
          textInput: function textInput(t) {
            var e, n, i, o;
            return e = t.data, o = this.inputSummary.textAdded, o && o !== e && o.toUpperCase() === e ? (n = this.getSelectedRange(), this.setSelectedRange([n[0], n[1] + o.length]), null != (i = this.responder) && i.insertString(e), this.setInputSummary({
              textAdded: e
            }), this.setSelectedRange(n)) : void 0;
          },
          dragenter: function dragenter(t) {
            return t.preventDefault();
          },
          dragstart: function dragstart(t) {
            var e, n;
            return n = t.target, this.serializeSelectionToDataTransfer(t.dataTransfer), this.draggedRange = this.getSelectedRange(), null != (e = this.delegate) && "function" == typeof e.inputControllerDidStartDrag ? e.inputControllerDidStartDrag() : void 0;
          },
          dragover: function dragover(t) {
            var e, n;
            return !this.draggedRange && !this.canAcceptDataTransfer(t.dataTransfer) || (t.preventDefault(), e = {
              x: t.clientX,
              y: t.clientY
            }, l(e, this.draggingPoint)) ? void 0 : (this.draggingPoint = e, null != (n = this.delegate) && "function" == typeof n.inputControllerDidReceiveDragOverPoint ? n.inputControllerDidReceiveDragOverPoint(this.draggingPoint) : void 0);
          },
          dragend: function dragend() {
            var t;
            return null != (t = this.delegate) && "function" == typeof t.inputControllerDidCancelDrag && t.inputControllerDidCancelDrag(), this.draggedRange = null, this.draggingPoint = null;
          },
          drop: function drop(t) {
            var n, i, o, r, s, a, u, c, l;
            return t.preventDefault(), o = null != (s = t.dataTransfer) ? s.files : void 0, r = {
              x: t.clientX,
              y: t.clientY
            }, null != (a = this.responder) && a.setLocationRangeFromPointRange(r), (null != o ? o.length : void 0) ? this.attachFiles(o) : this.draggedRange ? (null != (u = this.delegate) && u.inputControllerWillMoveText(), null != (c = this.responder) && c.moveTextFromRange(this.draggedRange), this.draggedRange = null, this.requestRender()) : (i = t.dataTransfer.getData("application/x-trix-document")) && (n = e.Document.fromJSONString(i), null != (l = this.responder) && l.insertDocument(n), this.requestRender()), this.draggedRange = null, this.draggingPoint = null;
          },
          cut: function cut(t) {
            var e, n;
            return (null != (e = this.responder) ? e.selectionIsExpanded() : void 0) && (this.serializeSelectionToDataTransfer(t.clipboardData) && t.preventDefault(), null != (n = this.delegate) && n.inputControllerWillCutText(), this.deleteInDirection("backward"), t.defaultPrevented) ? this.requestRender() : void 0;
          },
          copy: function copy(t) {
            var e;
            return (null != (e = this.responder) ? e.selectionIsExpanded() : void 0) && this.serializeSelectionToDataTransfer(t.clipboardData) ? t.preventDefault() : void 0;
          },
          paste: function paste(t) {
            var n, o, s, a, u, c, l, p, f, g, v, y, b, A, C, x, w, E, S, R, k, D;
            return n = null != (p = t.clipboardData) ? p : t.testClipboardData, l = {
              clipboard: n
            }, null == n || h(t) ? void this.getPastedHTMLUsingHiddenElement(function (t) {
              return function (e) {
                var n, i, o;
                return l.type = "text/html", l.html = e, null != (n = t.delegate) && n.inputControllerWillPaste(l), null != (i = t.responder) && i.insertHTML(l.html), t.requestRender(), null != (o = t.delegate) ? o.inputControllerDidPaste(l) : void 0;
              };
            }(this)) : ((a = n.getData("URL")) ? (l.type = "URL", l.href = a, l.string = (c = n.getData("public.url-name")) ? e.squishBreakableWhitespace(c).trim() : a, null != (f = this.delegate) && f.inputControllerWillPaste(l), this.setInputSummary({
              textAdded: l.string,
              didDelete: this.selectionIsExpanded()
            }), null != (C = this.responder) && C.insertText(e.Text.textForStringWithAttributes(l.string, {
              href: l.href
            })), this.requestRender(), null != (x = this.delegate) && x.inputControllerDidPaste(l)) : i(n) ? (l.type = "text/plain", l.string = n.getData("text/plain"), null != (w = this.delegate) && w.inputControllerWillPaste(l), this.setInputSummary({
              textAdded: l.string,
              didDelete: this.selectionIsExpanded()
            }), null != (E = this.responder) && E.insertString(l.string), this.requestRender(), null != (S = this.delegate) && S.inputControllerDidPaste(l)) : (u = n.getData("text/html")) ? (l.type = "text/html", l.html = u, null != (R = this.delegate) && R.inputControllerWillPaste(l), null != (k = this.responder) && k.insertHTML(l.html), this.requestRender(), null != (D = this.delegate) && D.inputControllerDidPaste(l)) : m.call(n.types, "Files") >= 0 && (s = null != (g = n.items) && null != (v = g[0]) && "function" == typeof v.getAsFile ? v.getAsFile() : void 0) && (!s.name && (o = r(s)) && (s.name = "pasted-file-" + ++d + "." + o), l.type = "File", l.file = s, null != (y = this.delegate) && y.inputControllerWillAttachFiles(), null != (b = this.responder) && b.insertFile(l.file), this.requestRender(), null != (A = this.delegate) && A.inputControllerDidPaste(l)), t.preventDefault());
          },
          compositionstart: function compositionstart(t) {
            return this.getCompositionInput().start(t.data);
          },
          compositionupdate: function compositionupdate(t) {
            return this.getCompositionInput().update(t.data);
          },
          compositionend: function compositionend(t) {
            return this.getCompositionInput().end(t.data);
          },
          beforeinput: function beforeinput() {
            return this.inputSummary.didInput = !0;
          },
          input: function input(t) {
            return this.inputSummary.didInput = !0, t.stopPropagation();
          }
        }, s.prototype.keys = {
          backspace: function backspace(t) {
            var e;
            return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t);
          },
          "delete": function _delete(t) {
            var e;
            return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t);
          },
          "return": function _return() {
            var t, e;
            return this.setInputSummary({
              preferDocument: !0
            }), null != (t = this.delegate) && t.inputControllerWillPerformTyping(), null != (e = this.responder) ? e.insertLineBreak() : void 0;
          },
          tab: function tab(t) {
            var e, n;
            return (null != (e = this.responder) ? e.canIncreaseNestingLevel() : void 0) ? (null != (n = this.responder) && n.increaseNestingLevel(), this.requestRender(), t.preventDefault()) : void 0;
          },
          left: function left(t) {
            var e;
            return this.selectionIsInCursorTarget() ? (t.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("backward") : void 0) : void 0;
          },
          right: function right(t) {
            var e;
            return this.selectionIsInCursorTarget() ? (t.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("forward") : void 0) : void 0;
          },
          control: {
            d: function d(t) {
              var e;
              return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t);
            },
            h: function h(t) {
              var e;
              return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t);
            },
            o: function o(t) {
              var e, n;
              return t.preventDefault(), null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.insertString("\n", {
                updatePosition: !1
              }), this.requestRender();
            }
          },
          shift: {
            "return": function _return(t) {
              var e, n;
              return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.insertString("\n"), this.requestRender(), t.preventDefault();
            },
            tab: function tab(t) {
              var e, n;
              return (null != (e = this.responder) ? e.canDecreaseNestingLevel() : void 0) ? (null != (n = this.responder) && n.decreaseNestingLevel(), this.requestRender(), t.preventDefault()) : void 0;
            },
            left: function left(t) {
              return this.selectionIsInCursorTarget() ? (t.preventDefault(), this.expandSelectionInDirection("backward")) : void 0;
            },
            right: function right(t) {
              return this.selectionIsInCursorTarget() ? (t.preventDefault(), this.expandSelectionInDirection("forward")) : void 0;
            }
          },
          alt: {
            backspace: function backspace() {
              var t;
              return this.setInputSummary({
                preferDocument: !1
              }), null != (t = this.delegate) ? t.inputControllerWillPerformTyping() : void 0;
            }
          },
          meta: {
            backspace: function backspace() {
              var t;
              return this.setInputSummary({
                preferDocument: !1
              }), null != (t = this.delegate) ? t.inputControllerWillPerformTyping() : void 0;
            }
          }
        }, s.prototype.getCompositionInput = function () {
          return this.isComposing() ? this.compositionInput : this.compositionInput = new t(this);
        }, s.prototype.isComposing = function () {
          return null != this.compositionInput && !this.compositionInput.isEnded();
        }, s.prototype.deleteInDirection = function (t, e) {
          var n;
          return (null != (n = this.responder) ? n.deleteInDirection(t) : void 0) !== !1 ? this.setInputSummary({
            didDelete: !0
          }) : e ? (e.preventDefault(), this.requestRender()) : void 0;
        }, s.prototype.serializeSelectionToDataTransfer = function (t) {
          var n, i;
          if (o(t)) return n = null != (i = this.responder) ? i.getSelectedDocument().toSerializableDocument() : void 0, t.setData("application/x-trix-document", JSON.stringify(n)), t.setData("text/html", e.DocumentView.render(n).innerHTML), t.setData("text/plain", n.toString().replace(/\n$/, "")), !0;
        }, s.prototype.canAcceptDataTransfer = function (t) {
          var e, n, i, o, r, s;

          for (s = {}, o = null != (i = null != t ? t.types : void 0) ? i : [], e = 0, n = o.length; n > e; e++) {
            r = o[e], s[r] = !0;
          }

          return s.Files || s["application/x-trix-document"] || s["text/html"] || s["text/plain"];
        }, s.prototype.getPastedHTMLUsingHiddenElement = function (t) {
          var n, i, o;
          return i = this.getSelectedRange(), o = {
            position: "absolute",
            left: window.pageXOffset + "px",
            top: window.pageYOffset + "px",
            opacity: 0
          }, n = c({
            style: o,
            tagName: "div",
            editable: !0
          }), document.body.appendChild(n), n.focus(), requestAnimationFrame(function (o) {
            return function () {
              var r;
              return r = n.innerHTML, e.removeNode(n), o.setSelectedRange(i), t(r);
            };
          }(this));
        }, s.proxyMethod("responder?.getSelectedRange"), s.proxyMethod("responder?.setSelectedRange"), s.proxyMethod("responder?.expandSelectionInDirection"), s.proxyMethod("responder?.selectionIsInCursorTarget"), s.proxyMethod("responder?.selectionIsExpanded"), s;
      }(e.InputController), r = function r(t) {
        var e, n;
        return null != (e = t.type) && null != (n = e.match(/\/(\w+)$/)) ? n[1] : void 0;
      }, s = null != ("function" == typeof " ".codePointAt ? " ".codePointAt(0) : void 0), p = function p(t) {
        var n;
        return t.key && s && t.key.codePointAt(0) === t.keyCode ? t.key : (null === t.which ? n = t.keyCode : 0 !== t.which && 0 !== t.charCode && (n = t.charCode), null != n && "escape" !== u[n] ? e.UTF16String.fromCodepoints([n]).toString() : void 0);
      }, h = function h(t) {
        var e, n, i, o, r, s, a, u, c, l;

        if (u = t.clipboardData) {
          if (m.call(u.types, "text/html") >= 0) {
            for (c = u.types, i = 0, s = c.length; s > i; i++) {
              if (l = c[i], e = /^CorePasteboardFlavorType/.test(l), n = /^dyn\./.test(l) && u.getData(l), a = e || n) return !0;
            }

            return !1;
          }

          return o = m.call(u.types, "com.apple.webarchive") >= 0, r = m.call(u.types, "com.apple.flat-rtfd") >= 0, o || r;
        }
      }, t = function (t) {
        function e(t) {
          var e;
          this.inputController = t, e = this.inputController, this.responder = e.responder, this.delegate = e.delegate, this.inputSummary = e.inputSummary, this.data = {};
        }

        return f(e, t), e.prototype.start = function (t) {
          var e, n;
          return this.data.start = t, this.isSignificant() ? ("keypress" === this.inputSummary.eventName && this.inputSummary.textAdded && null != (e = this.responder) && e.deleteInDirection("left"), this.selectionIsExpanded() || (this.insertPlaceholder(), this.requestRender()), this.range = null != (n = this.responder) ? n.getSelectedRange() : void 0) : void 0;
        }, e.prototype.update = function (t) {
          var e;
          return this.data.update = t, this.isSignificant() && (e = this.selectPlaceholder()) ? (this.forgetPlaceholder(), this.range = e) : void 0;
        }, e.prototype.end = function (t) {
          var e, n, i, o;
          return this.data.end = t, this.isSignificant() ? (this.forgetPlaceholder(), this.canApplyToDocument() ? (this.setInputSummary({
            preferDocument: !0,
            didInput: !1
          }), null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.setSelectedRange(this.range), null != (i = this.responder) && i.insertString(this.data.end), null != (o = this.responder) ? o.setSelectedRange(this.range[0] + this.data.end.length) : void 0) : null != this.data.start || null != this.data.update ? (this.requestReparse(), this.inputController.reset()) : void 0) : this.inputController.reset();
        }, e.prototype.getEndData = function () {
          return this.data.end;
        }, e.prototype.isEnded = function () {
          return null != this.getEndData();
        }, e.prototype.isSignificant = function () {
          return n.composesExistingText ? this.inputSummary.didInput : !0;
        }, e.prototype.canApplyToDocument = function () {
          var t, e;
          return 0 === (null != (t = this.data.start) ? t.length : void 0) && (null != (e = this.data.end) ? e.length : void 0) > 0 && null != this.range;
        }, e.proxyMethod("inputController.setInputSummary"), e.proxyMethod("inputController.requestRender"), e.proxyMethod("inputController.requestReparse"), e.proxyMethod("responder?.selectionIsExpanded"), e.proxyMethod("responder?.insertPlaceholder"), e.proxyMethod("responder?.selectPlaceholder"), e.proxyMethod("responder?.forgetPlaceholder"), e;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function o(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          r = function r(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          s.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          s = {}.hasOwnProperty,
          a = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      t = e.dataTransferIsPlainText, n = e.keyEventIsKeyboardCommand, i = e.objectsAreEqual, e.Level2InputController = function (s) {
        function u() {
          return this.render = o(this.render, this), u.__super__.constructor.apply(this, arguments);
        }

        var c, l, h, p, d, f;
        return r(u, s), u.prototype.elementDidMutate = function () {
          var t;
          return this.scheduledRender ? this.composing && null != (t = this.delegate) && "function" == typeof t.inputControllerDidAllowUnhandledInput ? t.inputControllerDidAllowUnhandledInput() : void 0 : this.reparse();
        }, u.prototype.scheduleRender = function () {
          return null != this.scheduledRender ? this.scheduledRender : this.scheduledRender = requestAnimationFrame(this.render);
        }, u.prototype.render = function () {
          var t;
          return cancelAnimationFrame(this.scheduledRender), this.scheduledRender = null, this.composing || null != (t = this.delegate) && t.render(), "function" == typeof this.afterRender && this.afterRender(), this.afterRender = null;
        }, u.prototype.reparse = function () {
          var t;
          return null != (t = this.delegate) ? t.reparse() : void 0;
        }, u.prototype.events = {
          keydown: function keydown(t) {
            var e, i, o, r;

            if (n(t)) {
              if (e = l(t), null != (r = this.delegate) ? r.inputControllerDidReceiveKeyboardCommand(e) : void 0) return t.preventDefault();
            } else if (o = t.key, t.altKey && (o += "+Alt"), t.shiftKey && (o += "+Shift"), i = this.keys[o]) return this.withEvent(t, i);
          },
          paste: function paste(t) {
            var n, i, o, r, s, a, u, c, l;
            return h(t) ? (t.preventDefault(), this.attachFiles(t.clipboardData.files)) : p(t) ? (t.preventDefault(), i = {
              type: "text/plain",
              string: t.clipboardData.getData("text/plain")
            }, null != (o = this.delegate) && o.inputControllerWillPaste(i), null != (r = this.responder) && r.insertString(i.string), this.render(), null != (s = this.delegate) ? s.inputControllerDidPaste(i) : void 0) : (n = null != (a = t.clipboardData) ? a.getData("URL") : void 0) ? (t.preventDefault(), i = {
              type: "URL",
              href: n,
              string: n
            }, null != (u = this.delegate) && u.inputControllerWillPaste(i), null != (c = this.responder) && c.insertText(e.Text.textForStringWithAttributes(i.string, {
              href: i.href
            })), this.render(), null != (l = this.delegate) ? l.inputControllerDidPaste(i) : void 0) : void 0;
          },
          beforeinput: function beforeinput(t) {
            var e;
            return (e = this.inputTypes[t.inputType]) ? (this.withEvent(t, e), this.scheduleRender()) : void 0;
          },
          input: function input() {
            return e.selectionChangeObserver.reset();
          },
          dragstart: function dragstart(t) {
            var e, n;
            return (null != (e = this.responder) ? e.selectionContainsAttachments() : void 0) ? (t.dataTransfer.setData("application/x-trix-dragging", !0), this.dragging = {
              range: null != (n = this.responder) ? n.getSelectedRange() : void 0,
              point: d(t)
            }) : void 0;
          },
          dragenter: function dragenter(t) {
            return c(t) ? t.preventDefault() : void 0;
          },
          dragover: function dragover(t) {
            var e, n;
            return this.dragging && (t.preventDefault(), e = d(t), !i(e, this.dragging.point)) ? (this.dragging.point = e, null != (n = this.responder) ? n.setLocationRangeFromPointRange(e) : void 0) : void 0;
          },
          drop: function drop(t) {
            var e, n, i, o;
            return this.dragging ? (t.preventDefault(), null != (n = this.delegate) && n.inputControllerWillMoveText(), null != (i = this.responder) && i.moveTextFromRange(this.dragging.range), this.dragging = null, this.scheduleRender()) : c(t) ? (t.preventDefault(), e = d(t), null != (o = this.responder) && o.setLocationRangeFromPointRange(e), this.attachFiles(t.dataTransfer.files)) : void 0;
          },
          dragend: function dragend() {
            var t;
            return this.dragging ? (null != (t = this.responder) && t.setSelectedRange(this.dragging.range), this.dragging = null) : void 0;
          },
          compositionend: function compositionend() {
            return this.composing ? (this.composing = !1, this.scheduleRender()) : void 0;
          }
        }, u.prototype.keys = {
          ArrowLeft: function ArrowLeft() {
            var t, e;
            return (null != (t = this.responder) ? t.shouldManageMovingCursorInDirection("backward") : void 0) ? (this.event.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("backward") : void 0) : void 0;
          },
          ArrowRight: function ArrowRight() {
            var t, e;
            return (null != (t = this.responder) ? t.shouldManageMovingCursorInDirection("forward") : void 0) ? (this.event.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("forward") : void 0) : void 0;
          },
          Backspace: function Backspace() {
            var t, e, n;
            return (null != (t = this.responder) ? t.shouldManageDeletingInDirection("backward") : void 0) ? (this.event.preventDefault(), null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.deleteInDirection("backward"), this.render()) : void 0;
          },
          Tab: function Tab() {
            var t, e;
            return (null != (t = this.responder) ? t.canIncreaseNestingLevel() : void 0) ? (this.event.preventDefault(), null != (e = this.responder) && e.increaseNestingLevel(), this.render()) : void 0;
          },
          "Tab+Shift": function TabShift() {
            var t, e;
            return (null != (t = this.responder) ? t.canDecreaseNestingLevel() : void 0) ? (this.event.preventDefault(), null != (e = this.responder) && e.decreaseNestingLevel(), this.render()) : void 0;
          }
        }, u.prototype.inputTypes = {
          deleteByComposition: function deleteByComposition() {
            return this.deleteInDirection("backward", {
              recordUndoEntry: !1
            });
          },
          deleteByCut: function deleteByCut() {
            return this.deleteInDirection("backward");
          },
          deleteByDrag: function deleteByDrag() {
            return this.event.preventDefault(), this.withTargetDOMRange(function () {
              var t;
              return this.deleteByDragRange = null != (t = this.responder) ? t.getSelectedRange() : void 0;
            });
          },
          deleteCompositionText: function deleteCompositionText() {
            return this.deleteInDirection("backward", {
              recordUndoEntry: !1
            });
          },
          deleteContent: function deleteContent() {
            return this.deleteInDirection("backward");
          },
          deleteContentBackward: function deleteContentBackward() {
            return this.deleteInDirection("backward");
          },
          deleteContentForward: function deleteContentForward() {
            return this.deleteInDirection("forward");
          },
          deleteEntireSoftLine: function deleteEntireSoftLine() {
            return this.deleteInDirection("forward");
          },
          deleteHardLineBackward: function deleteHardLineBackward() {
            return this.deleteInDirection("backward");
          },
          deleteHardLineForward: function deleteHardLineForward() {
            return this.deleteInDirection("forward");
          },
          deleteSoftLineBackward: function deleteSoftLineBackward() {
            return this.deleteInDirection("backward");
          },
          deleteSoftLineForward: function deleteSoftLineForward() {
            return this.deleteInDirection("forward");
          },
          deleteWordBackward: function deleteWordBackward() {
            return this.deleteInDirection("backward");
          },
          deleteWordForward: function deleteWordForward() {
            return this.deleteInDirection("forward");
          },
          formatBackColor: function formatBackColor() {
            return this.activateAttributeIfSupported("backgroundColor", this.event.data);
          },
          formatBold: function formatBold() {
            return this.toggleAttributeIfSupported("bold");
          },
          formatFontColor: function formatFontColor() {
            return this.activateAttributeIfSupported("color", this.event.data);
          },
          formatFontName: function formatFontName() {
            return this.activateAttributeIfSupported("font", this.event.data);
          },
          formatIndent: function formatIndent() {
            var t;
            return (null != (t = this.responder) ? t.canIncreaseNestingLevel() : void 0) ? this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.increaseNestingLevel() : void 0;
            }) : void 0;
          },
          formatItalic: function formatItalic() {
            return this.toggleAttributeIfSupported("italic");
          },
          formatJustifyCenter: function formatJustifyCenter() {
            return this.toggleAttributeIfSupported("justifyCenter");
          },
          formatJustifyFull: function formatJustifyFull() {
            return this.toggleAttributeIfSupported("justifyFull");
          },
          formatJustifyLeft: function formatJustifyLeft() {
            return this.toggleAttributeIfSupported("justifyLeft");
          },
          formatJustifyRight: function formatJustifyRight() {
            return this.toggleAttributeIfSupported("justifyRight");
          },
          formatOutdent: function formatOutdent() {
            var t;
            return (null != (t = this.responder) ? t.canDecreaseNestingLevel() : void 0) ? this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.decreaseNestingLevel() : void 0;
            }) : void 0;
          },
          formatRemove: function formatRemove() {
            return this.withTargetDOMRange(function () {
              var t, e, n, i;
              i = [];

              for (t in null != (e = this.responder) ? e.getCurrentAttributes() : void 0) {
                i.push(null != (n = this.responder) ? n.removeCurrentAttribute(t) : void 0);
              }

              return i;
            });
          },
          formatSetBlockTextDirection: function formatSetBlockTextDirection() {
            return this.activateAttributeIfSupported("blockDir", this.event.data);
          },
          formatSetInlineTextDirection: function formatSetInlineTextDirection() {
            return this.activateAttributeIfSupported("textDir", this.event.data);
          },
          formatStrikeThrough: function formatStrikeThrough() {
            return this.toggleAttributeIfSupported("strike");
          },
          formatSubscript: function formatSubscript() {
            return this.toggleAttributeIfSupported("sub");
          },
          formatSuperscript: function formatSuperscript() {
            return this.toggleAttributeIfSupported("sup");
          },
          formatUnderline: function formatUnderline() {
            return this.toggleAttributeIfSupported("underline");
          },
          historyRedo: function historyRedo() {
            var t;
            return null != (t = this.delegate) ? t.inputControllerWillPerformRedo() : void 0;
          },
          historyUndo: function historyUndo() {
            var t;
            return null != (t = this.delegate) ? t.inputControllerWillPerformUndo() : void 0;
          },
          insertCompositionText: function insertCompositionText() {
            return this.composing = !0, this.insertString(this.event.data);
          },
          insertFromComposition: function insertFromComposition() {
            return this.composing = !1, this.insertString(this.event.data);
          },
          insertFromDrop: function insertFromDrop() {
            var t, e;
            return (t = this.deleteByDragRange) ? (this.deleteByDragRange = null, null != (e = this.delegate) && e.inputControllerWillMoveText(), this.withTargetDOMRange(function () {
              var e;
              return null != (e = this.responder) ? e.moveTextFromRange(t) : void 0;
            })) : void 0;
          },
          insertFromPaste: function insertFromPaste() {
            var n, i, o, r, s, a, u, c, l, h;
            return n = this.event.dataTransfer, s = {
              dataTransfer: n
            }, (i = n.getData("URL")) ? (s.type = "URL", s.href = i, s.string = (r = n.getData("public.url-name")) ? e.squishBreakableWhitespace(r).trim() : i, null != (a = this.delegate) && a.inputControllerWillPaste(s), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertText(e.Text.textForStringWithAttributes(s.string, {
                href: s.href
              })) : void 0;
            }), this.afterRender = function (t) {
              return function () {
                var e;
                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
              };
            }(this)) : t(n) ? (s.type = "text/plain", s.string = n.getData("text/plain"), null != (u = this.delegate) && u.inputControllerWillPaste(s), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertString(s.string) : void 0;
            }), this.afterRender = function (t) {
              return function () {
                var e;
                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
              };
            }(this)) : (o = n.getData("text/html")) ? (s.type = "text/html", s.html = o, null != (c = this.delegate) && c.inputControllerWillPaste(s), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertHTML(s.html) : void 0;
            }), this.afterRender = function (t) {
              return function () {
                var e;
                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
              };
            }(this)) : (null != (l = n.files) ? l.length : void 0) ? (s.type = "File", s.file = n.files[0], null != (h = this.delegate) && h.inputControllerWillPaste(s), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertFile(s.file) : void 0;
            }), this.afterRender = function (t) {
              return function () {
                var e;
                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
              };
            }(this)) : void 0;
          },
          insertFromYank: function insertFromYank() {
            return this.insertString(this.event.data);
          },
          insertLineBreak: function insertLineBreak() {
            return this.insertString("\n");
          },
          insertLink: function insertLink() {
            return this.activateAttributeIfSupported("href", this.event.data);
          },
          insertOrderedList: function insertOrderedList() {
            return this.toggleAttributeIfSupported("number");
          },
          insertParagraph: function insertParagraph() {
            var t;
            return null != (t = this.delegate) && t.inputControllerWillPerformTyping(), this.withTargetDOMRange(function () {
              var t;
              return null != (t = this.responder) ? t.insertLineBreak() : void 0;
            });
          },
          insertReplacementText: function insertReplacementText() {
            return this.insertString(this.event.dataTransfer.getData("text/plain"), {
              updatePosition: !1
            });
          },
          insertText: function insertText() {
            var t, e;
            return this.insertString(null != (t = this.event.data) ? t : null != (e = this.event.dataTransfer) ? e.getData("text/plain") : void 0);
          },
          insertTranspose: function insertTranspose() {
            return this.insertString(this.event.data);
          },
          insertUnorderedList: function insertUnorderedList() {
            return this.toggleAttributeIfSupported("bullet");
          }
        }, u.prototype.insertString = function (t, e) {
          var n;
          return null == t && (t = ""), null != (n = this.delegate) && n.inputControllerWillPerformTyping(), this.withTargetDOMRange(function () {
            var n;
            return null != (n = this.responder) ? n.insertString(t, e) : void 0;
          });
        }, u.prototype.toggleAttributeIfSupported = function (t) {
          var n;
          return a.call(e.getAllAttributeNames(), t) >= 0 ? (null != (n = this.delegate) && n.inputControllerWillPerformFormatting(t), this.withTargetDOMRange(function () {
            var e;
            return null != (e = this.responder) ? e.toggleCurrentAttribute(t) : void 0;
          })) : void 0;
        }, u.prototype.activateAttributeIfSupported = function (t, n) {
          var i;
          return a.call(e.getAllAttributeNames(), t) >= 0 ? (null != (i = this.delegate) && i.inputControllerWillPerformFormatting(t), this.withTargetDOMRange(function () {
            var e;
            return null != (e = this.responder) ? e.setCurrentAttribute(t, n) : void 0;
          })) : void 0;
        }, u.prototype.deleteInDirection = function (t, e) {
          var n, i, o, r;
          return o = (null != e ? e : {
            recordUndoEntry: !0
          }).recordUndoEntry, o && null != (r = this.delegate) && r.inputControllerWillPerformTyping(), i = function (e) {
            return function () {
              var n;
              return null != (n = e.responder) ? n.deleteInDirection(t) : void 0;
            };
          }(this), (n = this.getTargetDOMRange({
            minLength: 2
          })) ? this.withTargetDOMRange(n, i) : i();
        }, u.prototype.withTargetDOMRange = function (t, n) {
          var i;
          return "function" == typeof t && (n = t, t = this.getTargetDOMRange()), t ? null != (i = this.responder) ? i.withTargetDOMRange(t, n.bind(this)) : void 0 : (e.selectionChangeObserver.reset(), n.call(this));
        }, u.prototype.getTargetDOMRange = function (t) {
          var e, n, i, o;
          return i = (null != t ? t : {
            minLength: 0
          }).minLength, (o = "function" == typeof (e = this.event).getTargetRanges ? e.getTargetRanges() : void 0) && o.length && (n = f(o[0]), 0 === i || n.toString().length >= i) ? n : void 0;
        }, f = function f(t) {
          var e;
          return e = document.createRange(), e.setStart(t.startContainer, t.startOffset), e.setEnd(t.endContainer, t.endOffset), e;
        }, u.prototype.withEvent = function (t, e) {
          var n;
          this.event = t;

          try {
            n = e.call(this);
          } finally {
            this.event = null;
          }

          return n;
        }, c = function c(t) {
          var e, n;
          return a.call(null != (e = null != (n = t.dataTransfer) ? n.types : void 0) ? e : [], "Files") >= 0;
        }, h = function h(t) {
          var e;
          return (e = t.clipboardData) ? a.call(e.types, "Files") >= 0 && 1 === e.types.length && e.files.length >= 1 : void 0;
        }, p = function p(t) {
          var e;
          return (e = t.clipboardData) ? a.call(e.types, "text/plain") >= 0 && 1 === e.types.length : void 0;
        }, l = function l(t) {
          var e;
          return e = [], t.altKey && e.push("alt"), t.shiftKey && e.push("shift"), e.push(t.key), e;
        }, d = function d(t) {
          return {
            x: t.clientX,
            y: t.clientY
          };
        }, u;
      }(e.InputController);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c,
          l = function l(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          h = function h(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          p.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          p = {}.hasOwnProperty;

      n = e.defer, i = e.escapeHTML, o = e.handleEvent, a = e.makeElement, c = e.tagName, u = e.config, s = u.lang, t = u.css, r = u.keyNames, e.AttachmentEditorController = function (u) {
        function p(t, e, n, i) {
          this.attachmentPiece = t, this.element = e, this.container = n, this.options = null != i ? i : {}, this.didBlurCaption = l(this.didBlurCaption, this), this.didChangeCaption = l(this.didChangeCaption, this), this.didInputCaption = l(this.didInputCaption, this), this.didKeyDownCaption = l(this.didKeyDownCaption, this), this.didClickActionButton = l(this.didClickActionButton, this), this.didClickToolbar = l(this.didClickToolbar, this), this.attachment = this.attachmentPiece.attachment, "a" === c(this.element) && (this.element = this.element.firstChild), this.install();
        }

        var d;
        return h(p, u), d = function d(t) {
          return function () {
            var e;
            return e = t.apply(this, arguments), e["do"](), null == this.undos && (this.undos = []), this.undos.push(e.undo);
          };
        }, p.prototype.install = function () {
          return this.makeElementMutable(), this.addToolbar(), this.attachment.isPreviewable() ? this.installCaptionEditor() : void 0;
        }, p.prototype.uninstall = function () {
          var t, e;

          for (this.savePendingCaption(); e = this.undos.pop();) {
            e();
          }

          return null != (t = this.delegate) ? t.didUninstallAttachmentEditor(this) : void 0;
        }, p.prototype.savePendingCaption = function () {
          var t, e, n;
          return null != this.pendingCaption ? (t = this.pendingCaption, this.pendingCaption = null, t ? null != (e = this.delegate) && "function" == typeof e.attachmentEditorDidRequestUpdatingAttributesForAttachment ? e.attachmentEditorDidRequestUpdatingAttributesForAttachment({
            caption: t
          }, this.attachment) : void 0 : null != (n = this.delegate) && "function" == typeof n.attachmentEditorDidRequestRemovingAttributeForAttachment ? n.attachmentEditorDidRequestRemovingAttributeForAttachment("caption", this.attachment) : void 0) : void 0;
        }, p.prototype.makeElementMutable = d(function () {
          return {
            "do": function (t) {
              return function () {
                return t.element.dataset.trixMutable = !0;
              };
            }(this),
            undo: function (t) {
              return function () {
                return delete t.element.dataset.trixMutable;
              };
            }(this)
          };
        }), p.prototype.addToolbar = d(function () {
          var n, r, u;
          return n = a({
            tagName: "div",
            className: t.attachmentToolbar,
            data: {
              trixMutable: !0
            }
          }), n.innerHTML = '<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--actions">\n    <button type="button" data-trix-action="remove" class="trix-button trix-button--remove" title="' + s.remove + '">' + s.remove + "</button>\n  </span>\n</div>", this.attachment.isPreviewable() && (r = i(this.attachment.getFilename()), u = i(this.attachment.getFormattedFilesize()), n.innerHTML += '<div class="' + t.attachmentMetadataContainer + '">\n  <span class="' + t.attachmentMetadata + '">\n    <span class="' + t.attachmentName + '" title="' + r + '">' + r + '</span>\n    <span class="' + t.attachmentSize + '">' + u + "</span>\n  </span>\n</div>"), o("click", {
            onElement: n,
            withCallback: this.didClickToolbar
          }), o("click", {
            onElement: n,
            matchingSelector: "[data-trix-action]",
            withCallback: this.didClickActionButton
          }), {
            "do": function (t) {
              return function () {
                return t.element.appendChild(n);
              };
            }(this),
            undo: function () {
              return function () {
                return e.removeNode(n);
              };
            }(this)
          };
        }), p.prototype.installCaptionEditor = d(function () {
          var i, r, u, c, l;
          return c = a({
            tagName: "textarea",
            className: t.attachmentCaptionEditor,
            attributes: {
              placeholder: s.captionPlaceholder
            },
            data: {
              trixMutable: !0
            }
          }), c.value = this.attachmentPiece.getCaption(), l = c.cloneNode(), l.classList.add("trix-autoresize-clone"), l.tabIndex = -1, i = function i() {
            return l.value = c.value, c.style.height = l.scrollHeight + "px";
          }, o("input", {
            onElement: c,
            withCallback: i
          }), o("input", {
            onElement: c,
            withCallback: this.didInputCaption
          }), o("keydown", {
            onElement: c,
            withCallback: this.didKeyDownCaption
          }), o("change", {
            onElement: c,
            withCallback: this.didChangeCaption
          }), o("blur", {
            onElement: c,
            withCallback: this.didBlurCaption
          }), u = this.element.querySelector("figcaption"), r = u.cloneNode(), {
            "do": function (e) {
              return function () {
                return u.style.display = "none", r.appendChild(c), r.appendChild(l), r.classList.add(t.attachmentCaption + "--editing"), u.parentElement.insertBefore(r, u), i(), e.options.editCaption ? n(function () {
                  return c.focus();
                }) : void 0;
              };
            }(this),
            undo: function undo() {
              return e.removeNode(r), u.style.display = null;
            }
          };
        }), p.prototype.didClickToolbar = function (t) {
          return t.preventDefault(), t.stopPropagation();
        }, p.prototype.didClickActionButton = function (t) {
          var e, n;

          switch (e = t.target.getAttribute("data-trix-action")) {
            case "remove":
              return null != (n = this.delegate) ? n.attachmentEditorDidRequestRemovalOfAttachment(this.attachment) : void 0;
          }
        }, p.prototype.didKeyDownCaption = function (t) {
          var e;
          return "return" === r[t.keyCode] ? (t.preventDefault(), this.savePendingCaption(), null != (e = this.delegate) && "function" == typeof e.attachmentEditorDidRequestDeselectingAttachment ? e.attachmentEditorDidRequestDeselectingAttachment(this.attachment) : void 0) : void 0;
        }, p.prototype.didInputCaption = function (t) {
          return this.pendingCaption = t.target.value.replace(/\s/g, " ").trim();
        }, p.prototype.didChangeCaption = function () {
          return this.savePendingCaption();
        }, p.prototype.didBlurCaption = function () {
          return this.savePendingCaption();
        }, p;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function o(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          r.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          r = {}.hasOwnProperty;

      i = e.makeElement, t = e.config.css, e.AttachmentView = function (r) {
        function s() {
          s.__super__.constructor.apply(this, arguments), this.attachment = this.object, this.attachment.uploadProgressDelegate = this, this.attachmentPiece = this.options.piece;
        }

        var a;
        return o(s, r), s.attachmentSelector = "[data-trix-attachment]", s.prototype.createContentNodes = function () {
          return [];
        }, s.prototype.createNodes = function () {
          var e, n, o, r, s, u, c;
          if (e = r = i({
            tagName: "figure",
            className: this.getClassName(),
            data: this.getData(),
            editable: !1
          }), (n = this.getHref()) && (r = i({
            tagName: "a",
            editable: !1,
            attributes: {
              href: n,
              tabindex: -1
            }
          }), e.appendChild(r)), this.attachment.hasContent()) r.innerHTML = this.attachment.getContent();else for (c = this.createContentNodes(), o = 0, s = c.length; s > o; o++) {
            u = c[o], r.appendChild(u);
          }
          return r.appendChild(this.createCaptionElement()), this.attachment.isPending() && (this.progressElement = i({
            tagName: "progress",
            attributes: {
              "class": t.attachmentProgress,
              value: this.attachment.getUploadProgress(),
              max: 100
            },
            data: {
              trixMutable: !0,
              trixStoreKey: ["progressElement", this.attachment.id].join("/")
            }
          }), e.appendChild(this.progressElement)), [a("left"), e, a("right")];
        }, s.prototype.createCaptionElement = function () {
          var e, n, o, r, s, a, u;
          return o = i({
            tagName: "figcaption",
            className: t.attachmentCaption
          }), (e = this.attachmentPiece.getCaption()) ? (o.classList.add(t.attachmentCaption + "--edited"), o.textContent = e) : (n = this.getCaptionConfig(), n.name && (r = this.attachment.getFilename()), n.size && (a = this.attachment.getFormattedFilesize()), r && (s = i({
            tagName: "span",
            className: t.attachmentName,
            textContent: r
          }), o.appendChild(s)), a && (r && o.appendChild(document.createTextNode(" ")), u = i({
            tagName: "span",
            className: t.attachmentSize,
            textContent: a
          }), o.appendChild(u))), o;
        }, s.prototype.getClassName = function () {
          var e, n;
          return n = [t.attachment, t.attachment + "--" + this.attachment.getType()], (e = this.attachment.getExtension()) && n.push(t.attachment + "--" + e), n.join(" ");
        }, s.prototype.getData = function () {
          var t, e;
          return e = {
            trixAttachment: JSON.stringify(this.attachment),
            trixContentType: this.attachment.getContentType(),
            trixId: this.attachment.id
          }, t = this.attachmentPiece.attributes, t.isEmpty() || (e.trixAttributes = JSON.stringify(t)), this.attachment.isPending() && (e.trixSerialize = !1), e;
        }, s.prototype.getHref = function () {
          return n(this.attachment.getContent(), "a") ? void 0 : this.attachment.getHref();
        }, s.prototype.getCaptionConfig = function () {
          var t, n, i;
          return i = this.attachment.getType(), t = e.copyObject(null != (n = e.config.attachments[i]) ? n.caption : void 0), "file" === i && (t.name = !0), t;
        }, s.prototype.findProgressElement = function () {
          var t;
          return null != (t = this.findElement()) ? t.querySelector("progress") : void 0;
        }, a = function a(t) {
          return i({
            tagName: "span",
            textContent: e.ZERO_WIDTH_SPACE,
            data: {
              trixCursorTarget: t,
              trixSerialize: !1
            }
          });
        }, s.prototype.attachmentDidChangeUploadProgress = function () {
          var t, e;
          return e = this.attachment.getUploadProgress(), null != (t = this.findProgressElement()) ? t.value = e : void 0;
        }, s;
      }(e.ObjectView), n = function n(t, e) {
        var n;
        return n = i("div"), n.innerHTML = null != t ? t : "", n.querySelector(e);
      };
    }.call(this), function () {
      var t,
          n = function n(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) {
          i.call(e, o) && (t[o] = e[o]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty;

      t = e.makeElement, e.PreviewableAttachmentView = function (i) {
        function o() {
          o.__super__.constructor.apply(this, arguments), this.attachment.previewDelegate = this;
        }

        return n(o, i), o.prototype.createContentNodes = function () {
          return this.image = t({
            tagName: "img",
            attributes: {
              src: ""
            },
            data: {
              trixMutable: !0
            }
          }), this.refresh(this.image), [this.image];
        }, o.prototype.createCaptionElement = function () {
          var t;
          return t = o.__super__.createCaptionElement.apply(this, arguments), t.textContent || t.setAttribute("data-trix-placeholder", e.config.lang.captionPlaceholder), t;
        }, o.prototype.refresh = function (t) {
          var e;
          return null == t && (t = null != (e = this.findElement()) ? e.querySelector("img") : void 0), t ? this.updateAttributesForImage(t) : void 0;
        }, o.prototype.updateAttributesForImage = function (t) {
          var e, n, i, o, r, s;
          return r = this.attachment.getURL(), n = this.attachment.getPreviewURL(), t.src = n || r, n === r ? t.removeAttribute("data-trix-serialized-attributes") : (i = JSON.stringify({
            src: r
          }), t.setAttribute("data-trix-serialized-attributes", i)), s = this.attachment.getWidth(), e = this.attachment.getHeight(), null != s && (t.width = s), null != e && (t.height = e), o = ["imageElement", this.attachment.id, t.src, t.width, t.height].join("/"), t.dataset.trixStoreKey = o;
        }, o.prototype.attachmentDidChangeAttributes = function () {
          return this.refresh(this.image), this.refresh();
        }, o;
      }(e.AttachmentView);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function o(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          r.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          r = {}.hasOwnProperty;

      i = e.makeElement, t = e.findInnerElement, n = e.getTextConfig, e.PieceView = function (r) {
        function s() {
          var t;
          s.__super__.constructor.apply(this, arguments), this.piece = this.object, this.attributes = this.piece.getAttributes(), t = this.options, this.textConfig = t.textConfig, this.context = t.context, this.piece.attachment ? this.attachment = this.piece.attachment : this.string = this.piece.toString();
        }

        var a;
        return o(s, r), s.prototype.createNodes = function () {
          var e, n, i, o, r, s;

          if (s = this.attachment ? this.createAttachmentNodes() : this.createStringNodes(), e = this.createElement()) {
            for (i = t(e), n = 0, o = s.length; o > n; n++) {
              r = s[n], i.appendChild(r);
            }

            s = [e];
          }

          return s;
        }, s.prototype.createAttachmentNodes = function () {
          var t, n;
          return t = this.attachment.isPreviewable() ? e.PreviewableAttachmentView : e.AttachmentView, n = this.createChildView(t, this.piece.attachment, {
            piece: this.piece
          }), n.getNodes();
        }, s.prototype.createStringNodes = function () {
          var t, e, n, o, r, s, a, u, c, l;
          if (null != (u = this.textConfig) ? u.plaintext : void 0) return [document.createTextNode(this.string)];

          for (a = [], c = this.string.split("\n"), n = e = 0, o = c.length; o > e; n = ++e) {
            l = c[n], n > 0 && (t = i("br"), a.push(t)), (r = l.length) && (s = document.createTextNode(this.preserveSpaces(l)), a.push(s));
          }

          return a;
        }, s.prototype.createElement = function () {
          var t, e, o, r, s, a, u, c, l;
          c = {}, a = this.attributes;

          for (r in a) {
            if (l = a[r], (t = n(r)) && (t.tagName && (s = i(t.tagName), o ? (o.appendChild(s), o = s) : e = o = s), t.styleProperty && (c[t.styleProperty] = l), t.style)) {
              u = t.style;

              for (r in u) {
                l = u[r], c[r] = l;
              }
            }
          }

          if (Object.keys(c).length) {
            null == e && (e = i("span"));

            for (r in c) {
              l = c[r], e.style[r] = l;
            }
          }

          return e;
        }, s.prototype.createContainerElement = function () {
          var t, e, o, r, s;
          r = this.attributes;

          for (o in r) {
            if (s = r[o], (e = n(o)) && e.groupTagName) return t = {}, t[o] = s, i(e.groupTagName, t);
          }
        }, a = e.NON_BREAKING_SPACE, s.prototype.preserveSpaces = function (t) {
          return this.context.isLast && (t = t.replace(/\ $/, a)), t = t.replace(/(\S)\ {3}(\S)/g, "$1 " + a + " $2").replace(/\ {2}/g, a + " ").replace(/\ {2}/g, " " + a), (this.context.isFirst || this.context.followsWhitespace) && (t = t.replace(/^\ /, a)), t;
        }, s;
      }(e.ObjectView);
    }.call(this), function () {
      var t = function t(_t11, e) {
        function i() {
          this.constructor = _t11;
        }

        for (var o in e) {
          n.call(e, o) && (_t11[o] = e[o]);
        }

        return i.prototype = e.prototype, _t11.prototype = new i(), _t11.__super__ = e.prototype, _t11;
      },
          n = {}.hasOwnProperty;

      e.TextView = function (n) {
        function i() {
          i.__super__.constructor.apply(this, arguments), this.text = this.object, this.textConfig = this.options.textConfig;
        }

        var o;
        return t(i, n), i.prototype.createNodes = function () {
          var t, n, i, r, s, a, u, c, l, h;

          for (a = [], c = e.ObjectGroup.groupObjects(this.getPieces()), r = c.length - 1, i = n = 0, s = c.length; s > n; i = ++n) {
            u = c[i], t = {}, 0 === i && (t.isFirst = !0), i === r && (t.isLast = !0), o(l) && (t.followsWhitespace = !0), h = this.findOrCreateCachedChildView(e.PieceView, u, {
              textConfig: this.textConfig,
              context: t
            }), a.push.apply(a, h.getNodes()), l = u;
          }

          return a;
        }, i.prototype.getPieces = function () {
          var t, e, n, i, o;

          for (i = this.text.getPieces(), o = [], t = 0, e = i.length; e > t; t++) {
            n = i[t], n.hasAttribute("blockBreak") || o.push(n);
          }

          return o;
        }, o = function o(t) {
          return /\s$/.test(null != t ? t.toString() : void 0);
        }, i;
      }(e.ObjectView);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function o(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          r.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          r = {}.hasOwnProperty;

      i = e.makeElement, n = e.getBlockConfig, t = e.config.css, e.BlockView = function (r) {
        function s() {
          s.__super__.constructor.apply(this, arguments), this.block = this.object, this.attributes = this.block.getAttributes();
        }

        return o(s, r), s.prototype.createNodes = function () {
          var t, o, r, s, a, u, c, l, h;
          if (t = document.createComment("block"), u = [t], this.block.isEmpty() ? u.push(i("br")) : (l = null != (c = n(this.block.getLastAttribute())) ? c.text : void 0, h = this.findOrCreateCachedChildView(e.TextView, this.block.text, {
            textConfig: l
          }), u.push.apply(u, h.getNodes()), this.shouldAddExtraNewlineElement() && u.push(i("br"))), this.attributes.length) return u;

          for (o = i(e.config.blockAttributes["default"].tagName), r = 0, s = u.length; s > r; r++) {
            a = u[r], o.appendChild(a);
          }

          return [o];
        }, s.prototype.createContainerElement = function (e) {
          var o, r, s, a;
          return o = this.attributes[e], a = n(o).tagName, r = {
            tagName: a
          }, "attachmentGallery" === o && (s = this.block.getBlockBreakPosition(), r.className = t.attachmentGallery + " " + t.attachmentGallery + "--" + s), i(r);
        }, s.prototype.shouldAddExtraNewlineElement = function () {
          return /\n\n$/.test(this.block.toString());
        }, s;
      }(e.ObjectView);
    }.call(this), function () {
      var t,
          n,
          i = function i(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          o.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      t = e.defer, n = e.makeElement, e.DocumentView = function (o) {
        function r() {
          r.__super__.constructor.apply(this, arguments), this.element = this.options.element, this.elementStore = new e.ElementStore(), this.setDocument(this.object);
        }

        var s, a, u;
        return i(r, o), r.render = function (t) {
          var e, i;
          return e = n("div"), i = new this(t, {
            element: e
          }), i.render(), i.sync(), e;
        }, r.prototype.setDocument = function (t) {
          return t.isEqualTo(this.document) ? void 0 : this.document = this.object = t;
        }, r.prototype.render = function () {
          var t, i, o, r, s, a, u;

          if (this.childViews = [], this.shadowElement = n("div"), !this.document.isEmpty()) {
            for (s = e.ObjectGroup.groupObjects(this.document.getBlocks(), {
              asTree: !0
            }), a = [], t = 0, i = s.length; i > t; t++) {
              r = s[t], u = this.findOrCreateCachedChildView(e.BlockView, r), a.push(function () {
                var t, e, n, i;

                for (n = u.getNodes(), i = [], t = 0, e = n.length; e > t; t++) {
                  o = n[t], i.push(this.shadowElement.appendChild(o));
                }

                return i;
              }.call(this));
            }

            return a;
          }
        }, r.prototype.isSynced = function () {
          return s(this.shadowElement, this.element);
        }, r.prototype.sync = function () {
          var t;

          for (t = this.createDocumentFragmentForSync(); this.element.lastChild;) {
            this.element.removeChild(this.element.lastChild);
          }

          return this.element.appendChild(t), this.didSync();
        }, r.prototype.didSync = function () {
          return this.elementStore.reset(a(this.element)), t(function (t) {
            return function () {
              return t.garbageCollectCachedViews();
            };
          }(this));
        }, r.prototype.createDocumentFragmentForSync = function () {
          var t, e, n, i, o, r, s, u, c, l;

          for (e = document.createDocumentFragment(), u = this.shadowElement.childNodes, n = 0, o = u.length; o > n; n++) {
            s = u[n], e.appendChild(s.cloneNode(!0));
          }

          for (c = a(e), i = 0, r = c.length; r > i; i++) {
            t = c[i], (l = this.elementStore.remove(t)) && t.parentNode.replaceChild(l, t);
          }

          return e;
        }, a = function a(t) {
          return t.querySelectorAll("[data-trix-store-key]");
        }, s = function s(t, e) {
          return u(t.innerHTML) === u(e.innerHTML);
        }, u = function u(t) {
          return t.replace(/&nbsp;/g, " ");
        }, r;
      }(e.ObjectView);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s = function s(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          a = function a(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          u.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          u = {}.hasOwnProperty;

      i = e.findClosestElementFromNode, o = e.handleEvent, r = e.innerElementIsActive, n = e.defer, t = e.AttachmentView.attachmentSelector, e.CompositionController = function (u) {
        function c(n, i) {
          this.element = n, this.composition = i, this.didClickAttachment = s(this.didClickAttachment, this), this.didBlur = s(this.didBlur, this), this.didFocus = s(this.didFocus, this), this.documentView = new e.DocumentView(this.composition.document, {
            element: this.element
          }), o("focus", {
            onElement: this.element,
            withCallback: this.didFocus
          }), o("blur", {
            onElement: this.element,
            withCallback: this.didBlur
          }), o("click", {
            onElement: this.element,
            matchingSelector: "a[contenteditable=false]",
            preventDefault: !0
          }), o("mousedown", {
            onElement: this.element,
            matchingSelector: t,
            withCallback: this.didClickAttachment
          }), o("click", {
            onElement: this.element,
            matchingSelector: "a" + t,
            preventDefault: !0
          });
        }

        return a(c, u), c.prototype.didFocus = function () {
          var t, e, n;
          return t = function (t) {
            return function () {
              var e;
              return t.focused ? void 0 : (t.focused = !0, null != (e = t.delegate) && "function" == typeof e.compositionControllerDidFocus ? e.compositionControllerDidFocus() : void 0);
            };
          }(this), null != (e = null != (n = this.blurPromise) ? n.then(t) : void 0) ? e : t();
        }, c.prototype.didBlur = function () {
          return this.blurPromise = new Promise(function (t) {
            return function (e) {
              return n(function () {
                var n;
                return r(t.element) || (t.focused = null, null != (n = t.delegate) && "function" == typeof n.compositionControllerDidBlur && n.compositionControllerDidBlur()), t.blurPromise = null, e();
              });
            };
          }(this));
        }, c.prototype.didClickAttachment = function (t, e) {
          var n, o, r;
          return n = this.findAttachmentForElement(e), o = null != i(t.target, {
            matchingSelector: "figcaption"
          }), null != (r = this.delegate) && "function" == typeof r.compositionControllerDidSelectAttachment ? r.compositionControllerDidSelectAttachment(n, {
            editCaption: o
          }) : void 0;
        }, c.prototype.getSerializableElement = function () {
          return this.isEditingAttachment() ? this.documentView.shadowElement : this.element;
        }, c.prototype.render = function () {
          var t, e, n;
          return this.revision !== this.composition.revision && (this.documentView.setDocument(this.composition.document), this.documentView.render(), this.revision = this.composition.revision), this.canSyncDocumentView() && !this.documentView.isSynced() && (null != (t = this.delegate) && "function" == typeof t.compositionControllerWillSyncDocumentView && t.compositionControllerWillSyncDocumentView(), this.documentView.sync(), null != (e = this.delegate) && "function" == typeof e.compositionControllerDidSyncDocumentView && e.compositionControllerDidSyncDocumentView()), null != (n = this.delegate) && "function" == typeof n.compositionControllerDidRender ? n.compositionControllerDidRender() : void 0;
        }, c.prototype.rerenderViewForObject = function (t) {
          return this.invalidateViewForObject(t), this.render();
        }, c.prototype.invalidateViewForObject = function (t) {
          return this.documentView.invalidateViewForObject(t);
        }, c.prototype.isViewCachingEnabled = function () {
          return this.documentView.isViewCachingEnabled();
        }, c.prototype.enableViewCaching = function () {
          return this.documentView.enableViewCaching();
        }, c.prototype.disableViewCaching = function () {
          return this.documentView.disableViewCaching();
        }, c.prototype.refreshViewCache = function () {
          return this.documentView.garbageCollectCachedViews();
        }, c.prototype.isEditingAttachment = function () {
          return null != this.attachmentEditor;
        }, c.prototype.installAttachmentEditorForAttachment = function (t, n) {
          var i, o, r;
          if ((null != (r = this.attachmentEditor) ? r.attachment : void 0) !== t && (o = this.documentView.findElementForObject(t))) return this.uninstallAttachmentEditor(), i = this.composition.document.getAttachmentPieceForAttachment(t), this.attachmentEditor = new e.AttachmentEditorController(i, o, this.element, n), this.attachmentEditor.delegate = this;
        }, c.prototype.uninstallAttachmentEditor = function () {
          var t;
          return null != (t = this.attachmentEditor) ? t.uninstall() : void 0;
        }, c.prototype.didUninstallAttachmentEditor = function () {
          return this.attachmentEditor = null, this.render();
        }, c.prototype.attachmentEditorDidRequestUpdatingAttributesForAttachment = function (t, e) {
          var n;
          return null != (n = this.delegate) && "function" == typeof n.compositionControllerWillUpdateAttachment && n.compositionControllerWillUpdateAttachment(e), this.composition.updateAttributesForAttachment(t, e);
        }, c.prototype.attachmentEditorDidRequestRemovingAttributeForAttachment = function (t, e) {
          var n;
          return null != (n = this.delegate) && "function" == typeof n.compositionControllerWillUpdateAttachment && n.compositionControllerWillUpdateAttachment(e), this.composition.removeAttributeForAttachment(t, e);
        }, c.prototype.attachmentEditorDidRequestRemovalOfAttachment = function (t) {
          var e;
          return null != (e = this.delegate) && "function" == typeof e.compositionControllerDidRequestRemovalOfAttachment ? e.compositionControllerDidRequestRemovalOfAttachment(t) : void 0;
        }, c.prototype.attachmentEditorDidRequestDeselectingAttachment = function (t) {
          var e;
          return null != (e = this.delegate) && "function" == typeof e.compositionControllerDidRequestDeselectingAttachment ? e.compositionControllerDidRequestDeselectingAttachment(t) : void 0;
        }, c.prototype.canSyncDocumentView = function () {
          return !this.isEditingAttachment();
        }, c.prototype.findAttachmentForElement = function (t) {
          return this.composition.document.getAttachmentById(parseInt(t.dataset.trixId, 10));
        }, c;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function o(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          r = function r(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          s.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          s = {}.hasOwnProperty;

      n = e.handleEvent, i = e.triggerEvent, t = e.findClosestElementFromNode, e.ToolbarController = function (e) {
        function s(t) {
          this.element = t, this.didKeyDownDialogInput = o(this.didKeyDownDialogInput, this), this.didClickDialogButton = o(this.didClickDialogButton, this), this.didClickAttributeButton = o(this.didClickAttributeButton, this), this.didClickActionButton = o(this.didClickActionButton, this), this.attributes = {}, this.actions = {}, this.resetDialogInputs(), n("mousedown", {
            onElement: this.element,
            matchingSelector: a,
            withCallback: this.didClickActionButton
          }), n("mousedown", {
            onElement: this.element,
            matchingSelector: c,
            withCallback: this.didClickAttributeButton
          }), n("click", {
            onElement: this.element,
            matchingSelector: v,
            preventDefault: !0
          }), n("click", {
            onElement: this.element,
            matchingSelector: l,
            withCallback: this.didClickDialogButton
          }), n("keydown", {
            onElement: this.element,
            matchingSelector: h,
            withCallback: this.didKeyDownDialogInput
          });
        }

        var a, u, c, l, h, p, d, f, g, m, v;
        return r(s, e), c = "[data-trix-attribute]", a = "[data-trix-action]", v = c + ", " + a, p = "[data-trix-dialog]", u = p + "[data-trix-active]", l = p + " [data-trix-method]", h = p + " [data-trix-input]", s.prototype.didClickActionButton = function (t, e) {
          var n, i, o;
          return null != (i = this.delegate) && i.toolbarDidClickButton(), t.preventDefault(), n = d(e), this.getDialog(n) ? this.toggleDialog(n) : null != (o = this.delegate) ? o.toolbarDidInvokeAction(n) : void 0;
        }, s.prototype.didClickAttributeButton = function (t, e) {
          var n, i, o;
          return null != (i = this.delegate) && i.toolbarDidClickButton(), t.preventDefault(), n = f(e), this.getDialog(n) ? this.toggleDialog(n) : null != (o = this.delegate) && o.toolbarDidToggleAttribute(n), this.refreshAttributeButtons();
        }, s.prototype.didClickDialogButton = function (e, n) {
          var i, o;
          return i = t(n, {
            matchingSelector: p
          }), o = n.getAttribute("data-trix-method"), this[o].call(this, i);
        }, s.prototype.didKeyDownDialogInput = function (t, e) {
          var n, i;
          return 13 === t.keyCode && (t.preventDefault(), n = e.getAttribute("name"), i = this.getDialog(n), this.setAttribute(i)), 27 === t.keyCode ? (t.preventDefault(), this.hideDialog()) : void 0;
        }, s.prototype.updateActions = function (t) {
          return this.actions = t, this.refreshActionButtons();
        }, s.prototype.refreshActionButtons = function () {
          return this.eachActionButton(function (t) {
            return function (e, n) {
              return e.disabled = t.actions[n] === !1;
            };
          }(this));
        }, s.prototype.eachActionButton = function (t) {
          var e, n, i, o, r;

          for (o = this.element.querySelectorAll(a), r = [], n = 0, i = o.length; i > n; n++) {
            e = o[n], r.push(t(e, d(e)));
          }

          return r;
        }, s.prototype.updateAttributes = function (t) {
          return this.attributes = t, this.refreshAttributeButtons();
        }, s.prototype.refreshAttributeButtons = function () {
          return this.eachAttributeButton(function (t) {
            return function (e, n) {
              return e.disabled = t.attributes[n] === !1, t.attributes[n] || t.dialogIsVisible(n) ? (e.setAttribute("data-trix-active", ""), e.classList.add("trix-active")) : (e.removeAttribute("data-trix-active"), e.classList.remove("trix-active"));
            };
          }(this));
        }, s.prototype.eachAttributeButton = function (t) {
          var e, n, i, o, r;

          for (o = this.element.querySelectorAll(c), r = [], n = 0, i = o.length; i > n; n++) {
            e = o[n], r.push(t(e, f(e)));
          }

          return r;
        }, s.prototype.applyKeyboardCommand = function (t) {
          var e, n, o, r, s, a, u;

          for (s = JSON.stringify(t.sort()), u = this.element.querySelectorAll("[data-trix-key]"), r = 0, a = u.length; a > r; r++) {
            if (e = u[r], o = e.getAttribute("data-trix-key").split("+"), n = JSON.stringify(o.sort()), n === s) return i("mousedown", {
              onElement: e
            }), !0;
          }

          return !1;
        }, s.prototype.dialogIsVisible = function (t) {
          var e;
          return (e = this.getDialog(t)) ? e.hasAttribute("data-trix-active") : void 0;
        }, s.prototype.toggleDialog = function (t) {
          return this.dialogIsVisible(t) ? this.hideDialog() : this.showDialog(t);
        }, s.prototype.showDialog = function (t) {
          var e, n, i, o, r, s, a, u, c, l;

          for (this.hideDialog(), null != (a = this.delegate) && a.toolbarWillShowDialog(), i = this.getDialog(t), i.setAttribute("data-trix-active", ""), i.classList.add("trix-active"), u = i.querySelectorAll("input[disabled]"), o = 0, s = u.length; s > o; o++) {
            n = u[o], n.removeAttribute("disabled");
          }

          return (e = f(i)) && (r = m(i, t)) && (r.value = null != (c = this.attributes[e]) ? c : "", r.select()), null != (l = this.delegate) ? l.toolbarDidShowDialog(t) : void 0;
        }, s.prototype.setAttribute = function (t) {
          var e, n, i;
          return e = f(t), n = m(t, e), n.willValidate && !n.checkValidity() ? (n.setAttribute("data-trix-validate", ""), n.classList.add("trix-validate"), n.focus()) : (null != (i = this.delegate) && i.toolbarDidUpdateAttribute(e, n.value), this.hideDialog());
        }, s.prototype.removeAttribute = function (t) {
          var e, n;
          return e = f(t), null != (n = this.delegate) && n.toolbarDidRemoveAttribute(e), this.hideDialog();
        }, s.prototype.hideDialog = function () {
          var t, e;
          return (t = this.element.querySelector(u)) ? (t.removeAttribute("data-trix-active"), t.classList.remove("trix-active"), this.resetDialogInputs(), null != (e = this.delegate) ? e.toolbarDidHideDialog(g(t)) : void 0) : void 0;
        }, s.prototype.resetDialogInputs = function () {
          var t, e, n, i, o;

          for (i = this.element.querySelectorAll(h), o = [], t = 0, n = i.length; n > t; t++) {
            e = i[t], e.setAttribute("disabled", "disabled"), e.removeAttribute("data-trix-validate"), o.push(e.classList.remove("trix-validate"));
          }

          return o;
        }, s.prototype.getDialog = function (t) {
          return this.element.querySelector("[data-trix-dialog=" + t + "]");
        }, m = function m(t, e) {
          return null == e && (e = f(t)), t.querySelector("[data-trix-input][name='" + e + "']");
        }, d = function d(t) {
          return t.getAttribute("data-trix-action");
        }, f = function f(t) {
          var e;
          return null != (e = t.getAttribute("data-trix-attribute")) ? e : t.getAttribute("data-trix-dialog-attribute");
        }, g = function g(t) {
          return t.getAttribute("data-trix-dialog");
        }, s;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function t(_t12, e) {
        function i() {
          this.constructor = _t12;
        }

        for (var o in e) {
          n.call(e, o) && (_t12[o] = e[o]);
        }

        return i.prototype = e.prototype, _t12.prototype = new i(), _t12.__super__ = e.prototype, _t12;
      },
          n = {}.hasOwnProperty;

      e.ImagePreloadOperation = function (e) {
        function n(t) {
          this.url = t;
        }

        return t(n, e), n.prototype.perform = function (t) {
          var e;
          return e = new Image(), e.onload = function (n) {
            return function () {
              return e.width = n.width = e.naturalWidth, e.height = n.height = e.naturalHeight, t(!0, e);
            };
          }(this), e.onerror = function () {
            return t(!1);
          }, e.src = this.url;
        }, n;
      }(e.Operation);
    }.call(this), function () {
      var t = function t(_t13, e) {
        return function () {
          return _t13.apply(e, arguments);
        };
      },
          n = function n(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) {
          i.call(e, o) && (t[o] = e[o]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty;

      e.Attachment = function (i) {
        function o(n) {
          null == n && (n = {}), this.releaseFile = t(this.releaseFile, this), o.__super__.constructor.apply(this, arguments), this.attributes = e.Hash.box(n), this.didChangeAttributes();
        }

        return n(o, i), o.previewablePattern = /^image(\/(gif|png|jpe?g)|$)/, o.attachmentForFile = function (t) {
          var e, n;
          return n = this.attributesForFile(t), e = new this(n), e.setFile(t), e;
        }, o.attributesForFile = function (t) {
          return new e.Hash({
            filename: t.name,
            filesize: t.size,
            contentType: t.type
          });
        }, o.fromJSON = function (t) {
          return new this(t);
        }, o.prototype.getAttribute = function (t) {
          return this.attributes.get(t);
        }, o.prototype.hasAttribute = function (t) {
          return this.attributes.has(t);
        }, o.prototype.getAttributes = function () {
          return this.attributes.toObject();
        }, o.prototype.setAttributes = function (t) {
          var e, n, i;
          return null == t && (t = {}), e = this.attributes.merge(t), this.attributes.isEqualTo(e) ? void 0 : (this.attributes = e, this.didChangeAttributes(), null != (n = this.previewDelegate) && "function" == typeof n.attachmentDidChangeAttributes && n.attachmentDidChangeAttributes(this), null != (i = this.delegate) && "function" == typeof i.attachmentDidChangeAttributes ? i.attachmentDidChangeAttributes(this) : void 0);
        }, o.prototype.didChangeAttributes = function () {
          return this.isPreviewable() ? this.preloadURL() : void 0;
        }, o.prototype.isPending = function () {
          return null != this.file && !(this.getURL() || this.getHref());
        }, o.prototype.isPreviewable = function () {
          return this.attributes.has("previewable") ? this.attributes.get("previewable") : this.constructor.previewablePattern.test(this.getContentType());
        }, o.prototype.getType = function () {
          return this.hasContent() ? "content" : this.isPreviewable() ? "preview" : "file";
        }, o.prototype.getURL = function () {
          return this.attributes.get("url");
        }, o.prototype.getHref = function () {
          return this.attributes.get("href");
        }, o.prototype.getFilename = function () {
          var t;
          return null != (t = this.attributes.get("filename")) ? t : "";
        }, o.prototype.getFilesize = function () {
          return this.attributes.get("filesize");
        }, o.prototype.getFormattedFilesize = function () {
          var t;
          return t = this.attributes.get("filesize"), "number" == typeof t ? e.config.fileSize.formatter(t) : "";
        }, o.prototype.getExtension = function () {
          var t;
          return null != (t = this.getFilename().match(/\.(\w+)$/)) ? t[1].toLowerCase() : void 0;
        }, o.prototype.getContentType = function () {
          return this.attributes.get("contentType");
        }, o.prototype.hasContent = function () {
          return this.attributes.has("content");
        }, o.prototype.getContent = function () {
          return this.attributes.get("content");
        }, o.prototype.getWidth = function () {
          return this.attributes.get("width");
        }, o.prototype.getHeight = function () {
          return this.attributes.get("height");
        }, o.prototype.getFile = function () {
          return this.file;
        }, o.prototype.setFile = function (t) {
          return this.file = t, this.isPreviewable() ? this.preloadFile() : void 0;
        }, o.prototype.releaseFile = function () {
          return this.releasePreloadedFile(), this.file = null;
        }, o.prototype.getUploadProgress = function () {
          var t;
          return null != (t = this.uploadProgress) ? t : 0;
        }, o.prototype.setUploadProgress = function (t) {
          var e;
          return this.uploadProgress !== t ? (this.uploadProgress = t, null != (e = this.uploadProgressDelegate) && "function" == typeof e.attachmentDidChangeUploadProgress ? e.attachmentDidChangeUploadProgress(this) : void 0) : void 0;
        }, o.prototype.toJSON = function () {
          return this.getAttributes();
        }, o.prototype.getCacheKey = function () {
          return [o.__super__.getCacheKey.apply(this, arguments), this.attributes.getCacheKey(), this.getPreviewURL()].join("/");
        }, o.prototype.getPreviewURL = function () {
          return this.previewURL || this.preloadingURL;
        }, o.prototype.setPreviewURL = function (t) {
          var e, n;
          return t !== this.getPreviewURL() ? (this.previewURL = t, null != (e = this.previewDelegate) && "function" == typeof e.attachmentDidChangeAttributes && e.attachmentDidChangeAttributes(this), null != (n = this.delegate) && "function" == typeof n.attachmentDidChangePreviewURL ? n.attachmentDidChangePreviewURL(this) : void 0) : void 0;
        }, o.prototype.preloadURL = function () {
          return this.preload(this.getURL(), this.releaseFile);
        }, o.prototype.preloadFile = function () {
          return this.file ? (this.fileObjectURL = URL.createObjectURL(this.file), this.preload(this.fileObjectURL)) : void 0;
        }, o.prototype.releasePreloadedFile = function () {
          return this.fileObjectURL ? (URL.revokeObjectURL(this.fileObjectURL), this.fileObjectURL = null) : void 0;
        }, o.prototype.preload = function (t, n) {
          var i;
          return t && t !== this.getPreviewURL() ? (this.preloadingURL = t, i = new e.ImagePreloadOperation(t), i.then(function (e) {
            return function (i) {
              var o, r;
              return r = i.width, o = i.height, e.getWidth() && e.getHeight() || e.setAttributes({
                width: r,
                height: o
              }), e.preloadingURL = null, e.setPreviewURL(t), "function" == typeof n ? n() : void 0;
            };
          }(this))["catch"](function (t) {
            return function () {
              return t.preloadingURL = null, "function" == typeof n ? n() : void 0;
            };
          }(this))) : void 0;
        }, o;
      }(e.Object);
    }.call(this), function () {
      var t = function t(_t14, e) {
        function i() {
          this.constructor = _t14;
        }

        for (var o in e) {
          n.call(e, o) && (_t14[o] = e[o]);
        }

        return i.prototype = e.prototype, _t14.prototype = new i(), _t14.__super__ = e.prototype, _t14;
      },
          n = {}.hasOwnProperty;

      e.Piece = function (n) {
        function i(t, n) {
          null == n && (n = {}), i.__super__.constructor.apply(this, arguments), this.attributes = e.Hash.box(n);
        }

        return t(i, n), i.types = {}, i.registerType = function (t, e) {
          return e.type = t, this.types[t] = e;
        }, i.fromJSON = function (t) {
          var e;
          return (e = this.types[t.type]) ? e.fromJSON(t) : void 0;
        }, i.prototype.copyWithAttributes = function (t) {
          return new this.constructor(this.getValue(), t);
        }, i.prototype.copyWithAdditionalAttributes = function (t) {
          return this.copyWithAttributes(this.attributes.merge(t));
        }, i.prototype.copyWithoutAttribute = function (t) {
          return this.copyWithAttributes(this.attributes.remove(t));
        }, i.prototype.copy = function () {
          return this.copyWithAttributes(this.attributes);
        }, i.prototype.getAttribute = function (t) {
          return this.attributes.get(t);
        }, i.prototype.getAttributesHash = function () {
          return this.attributes;
        }, i.prototype.getAttributes = function () {
          return this.attributes.toObject();
        }, i.prototype.getCommonAttributes = function () {
          var t, e, n;
          return (n = pieceList.getPieceAtIndex(0)) ? (t = n.attributes, e = t.getKeys(), pieceList.eachPiece(function (n) {
            return e = t.getKeysCommonToHash(n.attributes), t = t.slice(e);
          }), t.toObject()) : {};
        }, i.prototype.hasAttribute = function (t) {
          return this.attributes.has(t);
        }, i.prototype.hasSameStringValueAsPiece = function (t) {
          return null != t && this.toString() === t.toString();
        }, i.prototype.hasSameAttributesAsPiece = function (t) {
          return null != t && (this.attributes === t.attributes || this.attributes.isEqualTo(t.attributes));
        }, i.prototype.isBlockBreak = function () {
          return !1;
        }, i.prototype.isEqualTo = function (t) {
          return i.__super__.isEqualTo.apply(this, arguments) || this.hasSameConstructorAs(t) && this.hasSameStringValueAsPiece(t) && this.hasSameAttributesAsPiece(t);
        }, i.prototype.isEmpty = function () {
          return 0 === this.length;
        }, i.prototype.isSerializable = function () {
          return !0;
        }, i.prototype.toJSON = function () {
          return {
            type: this.constructor.type,
            attributes: this.getAttributes()
          };
        }, i.prototype.contentsForInspection = function () {
          return {
            type: this.constructor.type,
            attributes: this.attributes.inspect()
          };
        }, i.prototype.canBeGrouped = function () {
          return this.hasAttribute("href");
        }, i.prototype.canBeGroupedWith = function (t) {
          return this.getAttribute("href") === t.getAttribute("href");
        }, i.prototype.getLength = function () {
          return this.length;
        }, i.prototype.canBeConsolidatedWith = function () {
          return !1;
        }, i;
      }(e.Object);
    }.call(this), function () {
      var t = function t(_t15, e) {
        function i() {
          this.constructor = _t15;
        }

        for (var o in e) {
          n.call(e, o) && (_t15[o] = e[o]);
        }

        return i.prototype = e.prototype, _t15.prototype = new i(), _t15.__super__ = e.prototype, _t15;
      },
          n = {}.hasOwnProperty;

      e.Piece.registerType("attachment", e.AttachmentPiece = function (n) {
        function i(t) {
          this.attachment = t, i.__super__.constructor.apply(this, arguments), this.length = 1, this.ensureAttachmentExclusivelyHasAttribute("href"), this.attachment.hasContent() || this.removeProhibitedAttributes();
        }

        return t(i, n), i.fromJSON = function (t) {
          return new this(e.Attachment.fromJSON(t.attachment), t.attributes);
        }, i.permittedAttributes = ["caption", "presentation"], i.prototype.ensureAttachmentExclusivelyHasAttribute = function (t) {
          return this.hasAttribute(t) ? (this.attachment.hasAttribute(t) || this.attachment.setAttributes(this.attributes.slice(t)), this.attributes = this.attributes.remove(t)) : void 0;
        }, i.prototype.removeProhibitedAttributes = function () {
          var t;
          return t = this.attributes.slice(this.constructor.permittedAttributes), t.isEqualTo(this.attributes) ? void 0 : this.attributes = t;
        }, i.prototype.getValue = function () {
          return this.attachment;
        }, i.prototype.isSerializable = function () {
          return !this.attachment.isPending();
        }, i.prototype.getCaption = function () {
          var t;
          return null != (t = this.attributes.get("caption")) ? t : "";
        }, i.prototype.isEqualTo = function (t) {
          var e;
          return i.__super__.isEqualTo.apply(this, arguments) && this.attachment.id === (null != t && null != (e = t.attachment) ? e.id : void 0);
        }, i.prototype.toString = function () {
          return e.OBJECT_REPLACEMENT_CHARACTER;
        }, i.prototype.toJSON = function () {
          var t;
          return t = i.__super__.toJSON.apply(this, arguments), t.attachment = this.attachment, t;
        }, i.prototype.getCacheKey = function () {
          return [i.__super__.getCacheKey.apply(this, arguments), this.attachment.getCacheKey()].join("/");
        }, i.prototype.toConsole = function () {
          return JSON.stringify(this.toString());
        }, i;
      }(e.Piece));
    }.call(this), function () {
      var t,
          n = function n(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) {
          i.call(e, o) && (t[o] = e[o]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty;

      t = e.normalizeNewlines, e.Piece.registerType("string", e.StringPiece = function (e) {
        function i(e) {
          i.__super__.constructor.apply(this, arguments), this.string = t(e), this.length = this.string.length;
        }

        return n(i, e), i.fromJSON = function (t) {
          return new this(t.string, t.attributes);
        }, i.prototype.getValue = function () {
          return this.string;
        }, i.prototype.toString = function () {
          return this.string.toString();
        }, i.prototype.isBlockBreak = function () {
          return "\n" === this.toString() && this.getAttribute("blockBreak") === !0;
        }, i.prototype.toJSON = function () {
          var t;
          return t = i.__super__.toJSON.apply(this, arguments), t.string = this.string, t;
        }, i.prototype.canBeConsolidatedWith = function (t) {
          return null != t && this.hasSameConstructorAs(t) && this.hasSameAttributesAsPiece(t);
        }, i.prototype.consolidateWith = function (t) {
          return new this.constructor(this.toString() + t.toString(), this.attributes);
        }, i.prototype.splitAtOffset = function (t) {
          var e, n;
          return 0 === t ? (e = null, n = this) : t === this.length ? (e = this, n = null) : (e = new this.constructor(this.string.slice(0, t), this.attributes), n = new this.constructor(this.string.slice(t), this.attributes)), [e, n];
        }, i.prototype.toConsole = function () {
          var t;
          return t = this.string, t.length > 15 && (t = t.slice(0, 14) + "\u2026"), JSON.stringify(t.toString());
        }, i;
      }(e.Piece));
    }.call(this), function () {
      var t,
          n = function n(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var o in e) {
          i.call(e, o) && (t[o] = e[o]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          i = {}.hasOwnProperty,
          o = [].slice;

      t = e.spliceArray, e.SplittableList = function (e) {
        function i(t) {
          null == t && (t = []), i.__super__.constructor.apply(this, arguments), this.objects = t.slice(0), this.length = this.objects.length;
        }

        var r, s, a;
        return n(i, e), i.box = function (t) {
          return t instanceof this ? t : new this(t);
        }, i.prototype.indexOf = function (t) {
          return this.objects.indexOf(t);
        }, i.prototype.splice = function () {
          var e;
          return e = 1 <= arguments.length ? o.call(arguments, 0) : [], new this.constructor(t.apply(null, [this.objects].concat(o.call(e))));
        }, i.prototype.eachObject = function (t) {
          var e, n, i, o, r, s;

          for (r = this.objects, s = [], n = e = 0, i = r.length; i > e; n = ++e) {
            o = r[n], s.push(t(o, n));
          }

          return s;
        }, i.prototype.insertObjectAtIndex = function (t, e) {
          return this.splice(e, 0, t);
        }, i.prototype.insertSplittableListAtIndex = function (t, e) {
          return this.splice.apply(this, [e, 0].concat(o.call(t.objects)));
        }, i.prototype.insertSplittableListAtPosition = function (t, e) {
          var n, i, o;
          return o = this.splitObjectAtPosition(e), i = o[0], n = o[1], new this.constructor(i).insertSplittableListAtIndex(t, n);
        }, i.prototype.editObjectAtIndex = function (t, e) {
          return this.replaceObjectAtIndex(e(this.objects[t]), t);
        }, i.prototype.replaceObjectAtIndex = function (t, e) {
          return this.splice(e, 1, t);
        }, i.prototype.removeObjectAtIndex = function (t) {
          return this.splice(t, 1);
        }, i.prototype.getObjectAtIndex = function (t) {
          return this.objects[t];
        }, i.prototype.getSplittableListInRange = function (t) {
          var e, n, i, o;
          return i = this.splitObjectsAtRange(t), n = i[0], e = i[1], o = i[2], new this.constructor(n.slice(e, o + 1));
        }, i.prototype.selectSplittableList = function (t) {
          var e, n;
          return n = function () {
            var n, i, o, r;

            for (o = this.objects, r = [], n = 0, i = o.length; i > n; n++) {
              e = o[n], t(e) && r.push(e);
            }

            return r;
          }.call(this), new this.constructor(n);
        }, i.prototype.removeObjectsInRange = function (t) {
          var e, n, i, o;
          return i = this.splitObjectsAtRange(t), n = i[0], e = i[1], o = i[2], new this.constructor(n).splice(e, o - e + 1);
        }, i.prototype.transformObjectsInRange = function (t, e) {
          var n, i, o, r, s, a, u;
          return s = this.splitObjectsAtRange(t), r = s[0], i = s[1], a = s[2], u = function () {
            var t, s, u;

            for (u = [], n = t = 0, s = r.length; s > t; n = ++t) {
              o = r[n], u.push(n >= i && a >= n ? e(o) : o);
            }

            return u;
          }(), new this.constructor(u);
        }, i.prototype.splitObjectsAtRange = function (t) {
          var e, n, i, o, s, u;
          return o = this.splitObjectAtPosition(a(t)), n = o[0], e = o[1], i = o[2], s = new this.constructor(n).splitObjectAtPosition(r(t) + i), n = s[0], u = s[1], [n, e, u - 1];
        }, i.prototype.getObjectAtPosition = function (t) {
          var e, n, i;
          return i = this.findIndexAndOffsetAtPosition(t), e = i.index, n = i.offset, this.objects[e];
        }, i.prototype.splitObjectAtPosition = function (t) {
          var e, n, i, o, r, s, a, u, c, l;
          return s = this.findIndexAndOffsetAtPosition(t), e = s.index, r = s.offset, o = this.objects.slice(0), null != e ? 0 === r ? (c = e, l = 0) : (i = this.getObjectAtIndex(e), a = i.splitAtOffset(r), n = a[0], u = a[1], o.splice(e, 1, n, u), c = e + 1, l = n.getLength() - r) : (c = o.length, l = 0), [o, c, l];
        }, i.prototype.consolidate = function () {
          var t, e, n, i, o, r;

          for (i = [], o = this.objects[0], r = this.objects.slice(1), t = 0, e = r.length; e > t; t++) {
            n = r[t], ("function" == typeof o.canBeConsolidatedWith ? o.canBeConsolidatedWith(n) : void 0) ? o = o.consolidateWith(n) : (i.push(o), o = n);
          }

          return null != o && i.push(o), new this.constructor(i);
        }, i.prototype.consolidateFromIndexToIndex = function (t, e) {
          var n, i, r;
          return i = this.objects.slice(0), r = i.slice(t, e + 1), n = new this.constructor(r).consolidate().toArray(), this.splice.apply(this, [t, r.length].concat(o.call(n)));
        }, i.prototype.findIndexAndOffsetAtPosition = function (t) {
          var e, n, i, o, r, s, a;

          for (e = 0, a = this.objects, i = n = 0, o = a.length; o > n; i = ++n) {
            if (s = a[i], r = e + s.getLength(), t >= e && r > t) return {
              index: i,
              offset: t - e
            };
            e = r;
          }

          return {
            index: null,
            offset: null
          };
        }, i.prototype.findPositionAtIndexAndOffset = function (t, e) {
          var n, i, o, r, s, a;

          for (s = 0, a = this.objects, n = i = 0, o = a.length; o > i; n = ++i) {
            if (r = a[n], t > n) s += r.getLength();else if (n === t) {
              s += e;
              break;
            }
          }

          return s;
        }, i.prototype.getEndPosition = function () {
          var t, e;
          return null != this.endPosition ? this.endPosition : this.endPosition = function () {
            var n, i, o;

            for (e = 0, o = this.objects, n = 0, i = o.length; i > n; n++) {
              t = o[n], e += t.getLength();
            }

            return e;
          }.call(this);
        }, i.prototype.toString = function () {
          return this.objects.join("");
        }, i.prototype.toArray = function () {
          return this.objects.slice(0);
        }, i.prototype.toJSON = function () {
          return this.toArray();
        }, i.prototype.isEqualTo = function (t) {
          return i.__super__.isEqualTo.apply(this, arguments) || s(this.objects, null != t ? t.objects : void 0);
        }, s = function s(t, e) {
          var n, i, o, r, s;
          if (null == e && (e = []), t.length !== e.length) return !1;

          for (s = !0, i = n = 0, o = t.length; o > n; i = ++n) {
            r = t[i], s && !r.isEqualTo(e[i]) && (s = !1);
          }

          return s;
        }, i.prototype.contentsForInspection = function () {
          var t;
          return {
            objects: "[" + function () {
              var e, n, i, o;

              for (i = this.objects, o = [], e = 0, n = i.length; n > e; e++) {
                t = i[e], o.push(t.inspect());
              }

              return o;
            }.call(this).join(", ") + "]"
          };
        }, a = function a(t) {
          return t[0];
        }, r = function r(t) {
          return t[1];
        }, i;
      }(e.Object);
    }.call(this), function () {
      var t = function t(_t16, e) {
        function i() {
          this.constructor = _t16;
        }

        for (var o in e) {
          n.call(e, o) && (_t16[o] = e[o]);
        }

        return i.prototype = e.prototype, _t16.prototype = new i(), _t16.__super__ = e.prototype, _t16;
      },
          n = {}.hasOwnProperty;

      e.Text = function (n) {
        function i(t) {
          var n;
          null == t && (t = []), i.__super__.constructor.apply(this, arguments), this.pieceList = new e.SplittableList(function () {
            var e, i, o;

            for (o = [], e = 0, i = t.length; i > e; e++) {
              n = t[e], n.isEmpty() || o.push(n);
            }

            return o;
          }());
        }

        return t(i, n), i.textForAttachmentWithAttributes = function (t, n) {
          var i;
          return i = new e.AttachmentPiece(t, n), new this([i]);
        }, i.textForStringWithAttributes = function (t, n) {
          var i;
          return i = new e.StringPiece(t, n), new this([i]);
        }, i.fromJSON = function (t) {
          var n, i;
          return i = function () {
            var i, o, r;

            for (r = [], i = 0, o = t.length; o > i; i++) {
              n = t[i], r.push(e.Piece.fromJSON(n));
            }

            return r;
          }(), new this(i);
        }, i.prototype.copy = function () {
          return this.copyWithPieceList(this.pieceList);
        }, i.prototype.copyWithPieceList = function (t) {
          return new this.constructor(t.consolidate().toArray());
        }, i.prototype.copyUsingObjectMap = function (t) {
          var e, n;
          return n = function () {
            var n, i, o, r, s;

            for (o = this.getPieces(), s = [], n = 0, i = o.length; i > n; n++) {
              e = o[n], s.push(null != (r = t.find(e)) ? r : e);
            }

            return s;
          }.call(this), new this.constructor(n);
        }, i.prototype.appendText = function (t) {
          return this.insertTextAtPosition(t, this.getLength());
        }, i.prototype.insertTextAtPosition = function (t, e) {
          return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t.pieceList, e));
        }, i.prototype.removeTextAtRange = function (t) {
          return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t));
        }, i.prototype.replaceTextAtRange = function (t, e) {
          return this.removeTextAtRange(e).insertTextAtPosition(t, e[0]);
        }, i.prototype.moveTextFromRangeToPosition = function (t, e) {
          var n, i;
          if (!(t[0] <= e && e <= t[1])) return i = this.getTextAtRange(t), n = i.getLength(), t[0] < e && (e -= n), this.removeTextAtRange(t).insertTextAtPosition(i, e);
        }, i.prototype.addAttributeAtRange = function (t, e, n) {
          var i;
          return i = {}, i[t] = e, this.addAttributesAtRange(i, n);
        }, i.prototype.addAttributesAtRange = function (t, e) {
          return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function (e) {
            return e.copyWithAdditionalAttributes(t);
          }));
        }, i.prototype.removeAttributeAtRange = function (t, e) {
          return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function (e) {
            return e.copyWithoutAttribute(t);
          }));
        }, i.prototype.setAttributesAtRange = function (t, e) {
          return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function (e) {
            return e.copyWithAttributes(t);
          }));
        }, i.prototype.getAttributesAtPosition = function (t) {
          var e, n;
          return null != (e = null != (n = this.pieceList.getObjectAtPosition(t)) ? n.getAttributes() : void 0) ? e : {};
        }, i.prototype.getCommonAttributes = function () {
          var t, n;
          return t = function () {
            var t, e, i, o;

            for (i = this.pieceList.toArray(), o = [], t = 0, e = i.length; e > t; t++) {
              n = i[t], o.push(n.getAttributes());
            }

            return o;
          }.call(this), e.Hash.fromCommonAttributesOfObjects(t).toObject();
        }, i.prototype.getCommonAttributesAtRange = function (t) {
          var e;
          return null != (e = this.getTextAtRange(t).getCommonAttributes()) ? e : {};
        }, i.prototype.getExpandedRangeForAttributeAtOffset = function (t, e) {
          var n, i, o;

          for (n = o = e, i = this.getLength(); n > 0 && this.getCommonAttributesAtRange([n - 1, o])[t];) {
            n--;
          }

          for (; i > o && this.getCommonAttributesAtRange([e, o + 1])[t];) {
            o++;
          }

          return [n, o];
        }, i.prototype.getTextAtRange = function (t) {
          return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t));
        }, i.prototype.getStringAtRange = function (t) {
          return this.pieceList.getSplittableListInRange(t).toString();
        }, i.prototype.getStringAtPosition = function (t) {
          return this.getStringAtRange([t, t + 1]);
        }, i.prototype.startsWithString = function (t) {
          return this.getStringAtRange([0, t.length]) === t;
        }, i.prototype.endsWithString = function (t) {
          var e;
          return e = this.getLength(), this.getStringAtRange([e - t.length, e]) === t;
        }, i.prototype.getAttachmentPieces = function () {
          var t, e, n, i, o;

          for (i = this.pieceList.toArray(), o = [], t = 0, e = i.length; e > t; t++) {
            n = i[t], null != n.attachment && o.push(n);
          }

          return o;
        }, i.prototype.getAttachments = function () {
          var t, e, n, i, o;

          for (i = this.getAttachmentPieces(), o = [], t = 0, e = i.length; e > t; t++) {
            n = i[t], o.push(n.attachment);
          }

          return o;
        }, i.prototype.getAttachmentAndPositionById = function (t) {
          var e, n, i, o, r, s;

          for (o = 0, r = this.pieceList.toArray(), e = 0, n = r.length; n > e; e++) {
            if (i = r[e], (null != (s = i.attachment) ? s.id : void 0) === t) return {
              attachment: i.attachment,
              position: o
            };
            o += i.length;
          }

          return {
            attachment: null,
            position: null
          };
        }, i.prototype.getAttachmentById = function (t) {
          var e, n, i;
          return i = this.getAttachmentAndPositionById(t), e = i.attachment, n = i.position, e;
        }, i.prototype.getRangeOfAttachment = function (t) {
          var e, n;
          return n = this.getAttachmentAndPositionById(t.id), t = n.attachment, e = n.position, null != t ? [e, e + 1] : void 0;
        }, i.prototype.updateAttributesForAttachment = function (t, e) {
          var n;
          return (n = this.getRangeOfAttachment(e)) ? this.addAttributesAtRange(t, n) : this;
        }, i.prototype.getLength = function () {
          return this.pieceList.getEndPosition();
        }, i.prototype.isEmpty = function () {
          return 0 === this.getLength();
        }, i.prototype.isEqualTo = function (t) {
          var e;
          return i.__super__.isEqualTo.apply(this, arguments) || (null != t && null != (e = t.pieceList) ? e.isEqualTo(this.pieceList) : void 0);
        }, i.prototype.isBlockBreak = function () {
          return 1 === this.getLength() && this.pieceList.getObjectAtIndex(0).isBlockBreak();
        }, i.prototype.eachPiece = function (t) {
          return this.pieceList.eachObject(t);
        }, i.prototype.getPieces = function () {
          return this.pieceList.toArray();
        }, i.prototype.getPieceAtPosition = function (t) {
          return this.pieceList.getObjectAtPosition(t);
        }, i.prototype.contentsForInspection = function () {
          return {
            pieceList: this.pieceList.inspect()
          };
        }, i.prototype.toSerializableText = function () {
          var t;
          return t = this.pieceList.selectSplittableList(function (t) {
            return t.isSerializable();
          }), this.copyWithPieceList(t);
        }, i.prototype.toString = function () {
          return this.pieceList.toString();
        }, i.prototype.toJSON = function () {
          return this.pieceList.toJSON();
        }, i.prototype.toConsole = function () {
          var t;
          return JSON.stringify(function () {
            var e, n, i, o;

            for (i = this.pieceList.toArray(), o = [], e = 0, n = i.length; n > e; e++) {
              t = i[e], o.push(JSON.parse(t.toConsole()));
            }

            return o;
          }.call(this));
        }, i;
      }(e.Object);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s = function s(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          a.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          a = {}.hasOwnProperty,
          u = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      },
          c = [].slice;

      t = e.arraysAreEqual, r = e.spliceArray, i = e.getBlockConfig, n = e.getBlockAttributeNames, o = e.getListAttributeNames, e.Block = function (n) {
        function a(t, n) {
          null == t && (t = new e.Text()), null == n && (n = []), a.__super__.constructor.apply(this, arguments), this.text = h(t), this.attributes = n;
        }

        var l, h, p, d, f, g, m, v, y;
        return s(a, n), a.fromJSON = function (t) {
          var n;
          return n = e.Text.fromJSON(t.text), new this(n, t.attributes);
        }, a.prototype.isEmpty = function () {
          return this.text.isBlockBreak();
        }, a.prototype.isEqualTo = function (e) {
          return a.__super__.isEqualTo.apply(this, arguments) || this.text.isEqualTo(null != e ? e.text : void 0) && t(this.attributes, null != e ? e.attributes : void 0);
        }, a.prototype.copyWithText = function (t) {
          return new this.constructor(t, this.attributes);
        }, a.prototype.copyWithoutText = function () {
          return this.copyWithText(null);
        }, a.prototype.copyWithAttributes = function (t) {
          return new this.constructor(this.text, t);
        }, a.prototype.copyWithoutAttributes = function () {
          return this.copyWithAttributes(null);
        }, a.prototype.copyUsingObjectMap = function (t) {
          var e;
          return this.copyWithText((e = t.find(this.text)) ? e : this.text.copyUsingObjectMap(t));
        }, a.prototype.addAttribute = function (t) {
          var e;
          return e = this.attributes.concat(d(t)), this.copyWithAttributes(e);
        }, a.prototype.removeAttribute = function (t) {
          var e, n;
          return n = i(t).listAttribute, e = g(g(this.attributes, t), n), this.copyWithAttributes(e);
        }, a.prototype.removeLastAttribute = function () {
          return this.removeAttribute(this.getLastAttribute());
        }, a.prototype.getLastAttribute = function () {
          return f(this.attributes);
        }, a.prototype.getAttributes = function () {
          return this.attributes.slice(0);
        }, a.prototype.getAttributeLevel = function () {
          return this.attributes.length;
        }, a.prototype.getAttributeAtLevel = function (t) {
          return this.attributes[t - 1];
        }, a.prototype.hasAttribute = function (t) {
          return u.call(this.attributes, t) >= 0;
        }, a.prototype.hasAttributes = function () {
          return this.getAttributeLevel() > 0;
        }, a.prototype.getLastNestableAttribute = function () {
          return f(this.getNestableAttributes());
        }, a.prototype.getNestableAttributes = function () {
          var t, e, n, o, r;

          for (o = this.attributes, r = [], e = 0, n = o.length; n > e; e++) {
            t = o[e], i(t).nestable && r.push(t);
          }

          return r;
        }, a.prototype.getNestingLevel = function () {
          return this.getNestableAttributes().length;
        }, a.prototype.decreaseNestingLevel = function () {
          var t;
          return (t = this.getLastNestableAttribute()) ? this.removeAttribute(t) : this;
        }, a.prototype.increaseNestingLevel = function () {
          var t, e, n;
          return (t = this.getLastNestableAttribute()) ? (n = this.attributes.lastIndexOf(t), e = r.apply(null, [this.attributes, n + 1, 0].concat(c.call(d(t)))), this.copyWithAttributes(e)) : this;
        }, a.prototype.getListItemAttributes = function () {
          var t, e, n, o, r;

          for (o = this.attributes, r = [], e = 0, n = o.length; n > e; e++) {
            t = o[e], i(t).listAttribute && r.push(t);
          }

          return r;
        }, a.prototype.isListItem = function () {
          var t;
          return null != (t = i(this.getLastAttribute())) ? t.listAttribute : void 0;
        }, a.prototype.isTerminalBlock = function () {
          var t;
          return null != (t = i(this.getLastAttribute())) ? t.terminal : void 0;
        }, a.prototype.breaksOnReturn = function () {
          var t;
          return null != (t = i(this.getLastAttribute())) ? t.breakOnReturn : void 0;
        }, a.prototype.findLineBreakInDirectionFromPosition = function (t, e) {
          var n, i;
          return i = this.toString(), n = function () {
            switch (t) {
              case "forward":
                return i.indexOf("\n", e);

              case "backward":
                return i.slice(0, e).lastIndexOf("\n");
            }
          }(), -1 !== n ? n : void 0;
        }, a.prototype.contentsForInspection = function () {
          return {
            text: this.text.inspect(),
            attributes: this.attributes
          };
        }, a.prototype.toString = function () {
          return this.text.toString();
        }, a.prototype.toJSON = function () {
          return {
            text: this.text,
            attributes: this.attributes
          };
        }, a.prototype.getLength = function () {
          return this.text.getLength();
        }, a.prototype.canBeConsolidatedWith = function (t) {
          return !this.hasAttributes() && !t.hasAttributes();
        }, a.prototype.consolidateWith = function (t) {
          var n, i;
          return n = e.Text.textForStringWithAttributes("\n"), i = this.getTextWithoutBlockBreak().appendText(n), this.copyWithText(i.appendText(t.text));
        }, a.prototype.splitAtOffset = function (t) {
          var e, n;
          return 0 === t ? (e = null, n = this) : t === this.getLength() ? (e = this, n = null) : (e = this.copyWithText(this.text.getTextAtRange([0, t])), n = this.copyWithText(this.text.getTextAtRange([t, this.getLength()]))), [e, n];
        }, a.prototype.getBlockBreakPosition = function () {
          return this.text.getLength() - 1;
        }, a.prototype.getTextWithoutBlockBreak = function () {
          return m(this.text) ? this.text.getTextAtRange([0, this.getBlockBreakPosition()]) : this.text.copy();
        }, a.prototype.canBeGrouped = function (t) {
          return this.attributes[t];
        }, a.prototype.canBeGroupedWith = function (t, e) {
          var n, r, s, a;
          return s = t.getAttributes(), r = s[e], n = this.attributes[e], n === r && !(i(n).group === !1 && (a = s[e + 1], u.call(o(), a) < 0));
        }, h = function h(t) {
          return t = y(t), t = l(t);
        }, y = function y(t) {
          var n, i, o, r, s, a;
          return r = !1, a = t.getPieces(), i = 2 <= a.length ? c.call(a, 0, n = a.length - 1) : (n = 0, []), o = a[n++], null == o ? t : (i = function () {
            var t, e, n;

            for (n = [], t = 0, e = i.length; e > t; t++) {
              s = i[t], s.isBlockBreak() ? (r = !0, n.push(v(s))) : n.push(s);
            }

            return n;
          }(), r ? new e.Text(c.call(i).concat([o])) : t);
        }, p = e.Text.textForStringWithAttributes("\n", {
          blockBreak: !0
        }), l = function l(t) {
          return m(t) ? t : t.appendText(p);
        }, m = function m(t) {
          var e, n;
          return n = t.getLength(), 0 === n ? !1 : (e = t.getTextAtRange([n - 1, n]), e.isBlockBreak());
        }, v = function v(t) {
          return t.copyWithoutAttribute("blockBreak");
        }, d = function d(t) {
          var e;
          return e = i(t).listAttribute, null != e ? [e, t] : [t];
        }, f = function f(t) {
          return t.slice(-1)[0];
        }, g = function g(t, e) {
          var n;
          return n = t.lastIndexOf(e), -1 === n ? t : r(t, n, 1);
        }, a;
      }(e.Object);
    }.call(this), function () {
      var t,
          n,
          i,
          o = function o(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          r.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          r = {}.hasOwnProperty,
          s = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      },
          a = [].slice;

      n = e.tagName, i = e.walkTree, t = e.nodeIsAttachmentElement, e.HTMLSanitizer = function (r) {
        function u(t, e) {
          var n;
          n = null != e ? e : {}, this.allowedAttributes = n.allowedAttributes, this.forbiddenProtocols = n.forbiddenProtocols, null == this.allowedAttributes && (this.allowedAttributes = c), null == this.forbiddenProtocols && (this.forbiddenProtocols = l), this.body = h(t);
        }

        var c, l, h, p;
        return o(u, r), c = "style href src width height class".split(" "), l = "javascript:".split(" "), u.sanitize = function (t, e) {
          var n;
          return n = new this(t, e), n.sanitize(), n;
        }, u.prototype.sanitize = function () {
          return this.sanitizeElements(), this.normalizeListElementNesting();
        }, u.prototype.getHTML = function () {
          return this.body.innerHTML;
        }, u.prototype.getBody = function () {
          return this.body;
        }, u.prototype.sanitizeElements = function () {
          var t, n, o, r, s;

          for (s = i(this.body), r = []; s.nextNode();) {
            switch (o = s.currentNode, o.nodeType) {
              case Node.ELEMENT_NODE:
                p(o) ? r.push(o) : this.sanitizeElement(o);
                break;

              case Node.COMMENT_NODE:
                r.push(o);
            }
          }

          for (t = 0, n = r.length; n > t; t++) {
            o = r[t], e.removeNode(o);
          }

          return this.body;
        }, u.prototype.sanitizeElement = function (t) {
          var e, n, i, o, r;

          for (t.hasAttribute("href") && (o = t.protocol, s.call(this.forbiddenProtocols, o) >= 0 && t.removeAttribute("href")), r = a.call(t.attributes), e = 0, n = r.length; n > e; e++) {
            i = r[e].name, s.call(this.allowedAttributes, i) >= 0 || 0 === i.indexOf("data-trix") || t.removeAttribute(i);
          }

          return t;
        }, u.prototype.normalizeListElementNesting = function () {
          var t, e, i, o, r;

          for (r = a.call(this.body.querySelectorAll("ul,ol")), t = 0, e = r.length; e > t; t++) {
            i = r[t], (o = i.previousElementSibling) && "li" === n(o) && o.appendChild(i);
          }

          return this.body;
        }, p = function p(e) {
          return (null != e ? e.nodeType : void 0) !== Node.ELEMENT_NODE || t(e) ? void 0 : "script" === n(e) || "false" === e.getAttribute("data-trix-serialize");
        }, h = function h(t) {
          var e, n, i, o, r;

          for (null == t && (t = ""), t = t.replace(/<\/html[^>]*>[^]*$/i, "</html>"), e = document.implementation.createHTMLDocument(""), e.documentElement.innerHTML = t, r = e.head.querySelectorAll("style"), i = 0, o = r.length; o > i; i++) {
            n = r[i], e.body.appendChild(n);
          }

          return e.body;
        }, u;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c,
          l,
          h,
          p = function p(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          d.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          d = {}.hasOwnProperty,
          f = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      t = e.arraysAreEqual, s = e.makeElement, l = e.tagName, r = e.getBlockTagNames, h = e.walkTree, o = e.findClosestElementFromNode, i = e.elementContainsNode, a = e.nodeIsAttachmentElement, u = e.normalizeSpaces, n = e.breakableWhitespacePattern, c = e.squishBreakableWhitespace, e.HTMLParser = function (d) {
        function g(t, e) {
          this.html = t, this.referenceElement = (null != e ? e : {}).referenceElement, this.blocks = [], this.blockElements = [], this.processedElements = [];
        }

        var m, v, y, b, A, C, x, w, E, S, R, k;
        return p(g, d), g.parse = function (t, e) {
          var n;
          return n = new this(t, e), n.parse(), n;
        }, g.prototype.getDocument = function () {
          return e.Document.fromJSON(this.blocks);
        }, g.prototype.parse = function () {
          var t, n;

          try {
            for (this.createHiddenContainer(), t = e.HTMLSanitizer.sanitize(this.html).getHTML(), this.containerElement.innerHTML = t, n = h(this.containerElement, {
              usingFilter: w
            }); n.nextNode();) {
              this.processNode(n.currentNode);
            }

            return this.translateBlockElementMarginsToNewlines();
          } finally {
            this.removeHiddenContainer();
          }
        }, g.prototype.createHiddenContainer = function () {
          return this.referenceElement ? (this.containerElement = this.referenceElement.cloneNode(!1), this.containerElement.removeAttribute("id"), this.containerElement.setAttribute("data-trix-internal", ""), this.containerElement.style.display = "none", this.referenceElement.parentNode.insertBefore(this.containerElement, this.referenceElement.nextSibling)) : (this.containerElement = s({
            tagName: "div",
            style: {
              display: "none"
            }
          }), document.body.appendChild(this.containerElement));
        }, g.prototype.removeHiddenContainer = function () {
          return e.removeNode(this.containerElement);
        }, w = function w(t) {
          return "style" === l(t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }, g.prototype.processNode = function (t) {
          switch (t.nodeType) {
            case Node.TEXT_NODE:
              if (!this.isInsignificantTextNode(t)) return this.appendBlockForTextNode(t), this.processTextNode(t);
              break;

            case Node.ELEMENT_NODE:
              return this.appendBlockForElement(t), this.processElement(t);
          }
        }, g.prototype.appendBlockForTextNode = function (e) {
          var n, i, o;
          return i = e.parentNode, i === this.currentBlockElement || i !== this.containerElement && !this.isBlockElement(i) ? void 0 : (n = this.getBlockAttributes(i), t(n, null != (o = this.currentBlock) ? o.attributes : void 0) ? void 0 : (this.currentBlock = this.appendBlockForAttributesWithElement(n, i), this.currentBlockElement = i));
        }, g.prototype.appendBlockForElement = function (e) {
          var n, o, r, s;

          if (r = this.isBlockElement(e), o = i(this.currentBlockElement, e), r && !this.isBlockElement(e.firstChild)) {
            if (!(this.isInsignificantTextNode(e.firstChild) && this.isBlockElement(e.firstElementChild) || (n = this.getBlockAttributes(e), o && t(n, this.currentBlock.attributes)))) return this.currentBlock = this.appendBlockForAttributesWithElement(n, e), this.currentBlockElement = e;
          } else if (this.currentBlockElement && !o && !r) return (s = this.findParentBlockElement(e)) ? this.appendBlockForElement(s) : (this.currentBlock = this.appendEmptyBlock(), this.currentBlockElement = null);
        }, g.prototype.findParentBlockElement = function (t) {
          var e;

          for (e = t.parentElement; e && e !== this.containerElement;) {
            if (this.isBlockElement(e) && f.call(this.blockElements, e) >= 0) return e;
            e = e.parentElement;
          }

          return null;
        }, g.prototype.processTextNode = function (t) {
          var e, n;
          return n = t.data, v(t.parentNode) || (n = c(n), R(null != (e = t.previousSibling) ? e.textContent : void 0) && (n = C(n))), this.appendStringWithAttributes(n, this.getTextAttributes(t.parentNode));
        }, g.prototype.processElement = function (t) {
          var e, n, i, o, r;
          if (a(t)) return e = y(t), Object.keys(e).length && (o = this.getTextAttributes(t), this.appendAttachmentWithAttributes(e, o), t.innerHTML = ""), this.processedElements.push(t);

          switch (l(t)) {
            case "br":
              return this.isExtraBR(t) || this.isBlockElement(t.nextSibling) || this.appendStringWithAttributes("\n", this.getTextAttributes(t)), this.processedElements.push(t);

            case "img":
              e = {
                url: t.getAttribute("src"),
                contentType: "image"
              }, i = A(t);

              for (n in i) {
                r = i[n], e[n] = r;
              }

              return this.appendAttachmentWithAttributes(e, this.getTextAttributes(t)), this.processedElements.push(t);

            case "tr":
              if (t.parentNode.firstChild !== t) return this.appendStringWithAttributes("\n");
              break;

            case "td":
              if (t.parentNode.firstChild !== t) return this.appendStringWithAttributes(" | ");
          }
        }, g.prototype.appendBlockForAttributesWithElement = function (t, e) {
          var n;
          return this.blockElements.push(e), n = m(t), this.blocks.push(n), n;
        }, g.prototype.appendEmptyBlock = function () {
          return this.appendBlockForAttributesWithElement([], null);
        }, g.prototype.appendStringWithAttributes = function (t, e) {
          return this.appendPiece(S(t, e));
        }, g.prototype.appendAttachmentWithAttributes = function (t, e) {
          return this.appendPiece(E(t, e));
        }, g.prototype.appendPiece = function (t) {
          return 0 === this.blocks.length && this.appendEmptyBlock(), this.blocks[this.blocks.length - 1].text.push(t);
        }, g.prototype.appendStringToTextAtIndex = function (t, e) {
          var n, i;
          return i = this.blocks[e].text, n = i[i.length - 1], "string" === (null != n ? n.type : void 0) ? n.string += t : i.push(S(t));
        }, g.prototype.prependStringToTextAtIndex = function (t, e) {
          var n, i;
          return i = this.blocks[e].text, n = i[0], "string" === (null != n ? n.type : void 0) ? n.string = t + n.string : i.unshift(S(t));
        }, S = function S(t, e) {
          var n;
          return null == e && (e = {}), n = "string", t = u(t), {
            string: t,
            attributes: e,
            type: n
          };
        }, E = function E(t, e) {
          var n;
          return null == e && (e = {}), n = "attachment", {
            attachment: t,
            attributes: e,
            type: n
          };
        }, m = function m(t) {
          var e;
          return null == t && (t = {}), e = [], {
            text: e,
            attributes: t
          };
        }, g.prototype.getTextAttributes = function (t) {
          var n, i, r, s, u, c, l, h, p, d, f, g, m;
          r = {}, d = e.config.textAttributes;

          for (n in d) {
            if (u = d[n], u.tagName && o(t, {
              matchingSelector: u.tagName,
              untilNode: this.containerElement
            })) r[n] = !0;else if (u.parser) {
              if (m = u.parser(t)) {
                for (i = !1, f = this.findBlockElementAncestors(t), c = 0, p = f.length; p > c; c++) {
                  if (s = f[c], u.parser(s) === m) {
                    i = !0;
                    break;
                  }
                }

                i || (r[n] = m);
              }
            } else u.styleProperty && (m = t.style[u.styleProperty]) && (r[n] = m);
          }

          if (a(t) && (l = t.getAttribute("data-trix-attributes"))) {
            g = JSON.parse(l);

            for (h in g) {
              m = g[h], r[h] = m;
            }
          }

          return r;
        }, g.prototype.getBlockAttributes = function (t) {
          var n, i, o, r;

          for (i = []; t && t !== this.containerElement;) {
            r = e.config.blockAttributes;

            for (n in r) {
              o = r[n], o.parse !== !1 && l(t) === o.tagName && (("function" == typeof o.test ? o.test(t) : void 0) || !o.test) && (i.push(n), o.listAttribute && i.push(o.listAttribute));
            }

            t = t.parentNode;
          }

          return i.reverse();
        }, g.prototype.findBlockElementAncestors = function (t) {
          var e, n;

          for (e = []; t && t !== this.containerElement;) {
            n = l(t), f.call(r(), n) >= 0 && e.push(t), t = t.parentNode;
          }

          return e;
        }, y = function y(t) {
          return JSON.parse(t.getAttribute("data-trix-attachment"));
        }, A = function A(t) {
          var e, n, i;
          return i = t.getAttribute("width"), n = t.getAttribute("height"), e = {}, i && (e.width = parseInt(i, 10)), n && (e.height = parseInt(n, 10)), e;
        }, g.prototype.isBlockElement = function (t) {
          var e;
          if ((null != t ? t.nodeType : void 0) === Node.ELEMENT_NODE && !a(t) && !o(t, {
            matchingSelector: "td",
            untilNode: this.containerElement
          })) return e = l(t), f.call(r(), e) >= 0 || "block" === window.getComputedStyle(t).display;
        }, g.prototype.isInsignificantTextNode = function (t) {
          var e, n, i;
          if ((null != t ? t.nodeType : void 0) === Node.TEXT_NODE && k(t.data) && (n = t.parentNode, i = t.previousSibling, e = t.nextSibling, (!x(n.previousSibling) || this.isBlockElement(n.previousSibling)) && !v(n))) return !i || this.isBlockElement(i) || !e || this.isBlockElement(e);
        }, g.prototype.isExtraBR = function (t) {
          return "br" === l(t) && this.isBlockElement(t.parentNode) && t.parentNode.lastChild === t;
        }, v = function v(t) {
          var e;
          return e = window.getComputedStyle(t).whiteSpace, "pre" === e || "pre-wrap" === e || "pre-line" === e;
        }, x = function x(t) {
          return t && !R(t.textContent);
        }, g.prototype.translateBlockElementMarginsToNewlines = function () {
          var t, e, n, i, o, r, s, a;

          for (e = this.getMarginOfDefaultBlockElement(), s = this.blocks, a = [], i = n = 0, o = s.length; o > n; i = ++n) {
            t = s[i], (r = this.getMarginOfBlockElementAtIndex(i)) && (r.top > 2 * e.top && this.prependStringToTextAtIndex("\n", i), a.push(r.bottom > 2 * e.bottom ? this.appendStringToTextAtIndex("\n", i) : void 0));
          }

          return a;
        }, g.prototype.getMarginOfBlockElementAtIndex = function (t) {
          var e, n;
          return !(e = this.blockElements[t]) || !e.textContent || (n = l(e), f.call(r(), n) >= 0 || f.call(this.processedElements, e) >= 0) ? void 0 : b(e);
        }, g.prototype.getMarginOfDefaultBlockElement = function () {
          var t;
          return t = s(e.config.blockAttributes["default"].tagName), this.containerElement.appendChild(t), b(t);
        }, b = function b(t) {
          var e;
          return e = window.getComputedStyle(t), "block" === e.display ? {
            top: parseInt(e.marginTop),
            bottom: parseInt(e.marginBottom)
          } : void 0;
        }, C = function C(t) {
          return t.replace(RegExp("^" + n.source + "+"), "");
        }, k = function k(t) {
          return RegExp("^" + n.source + "*$").test(t);
        }, R = function R(t) {
          return /\s$/.test(t);
        }, g;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r = function r(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          s.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          s = {}.hasOwnProperty,
          a = [].slice,
          u = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      t = e.arraysAreEqual, i = e.normalizeRange, o = e.rangeIsCollapsed, n = e.getBlockConfig, e.Document = function (s) {
        function c(t) {
          null == t && (t = []), c.__super__.constructor.apply(this, arguments), 0 === t.length && (t = [new e.Block()]), this.blockList = e.SplittableList.box(t);
        }

        var l;
        return r(c, s), c.fromJSON = function (t) {
          var n, i;
          return i = function () {
            var i, o, r;

            for (r = [], i = 0, o = t.length; o > i; i++) {
              n = t[i], r.push(e.Block.fromJSON(n));
            }

            return r;
          }(), new this(i);
        }, c.fromHTML = function (t, n) {
          return e.HTMLParser.parse(t, n).getDocument();
        }, c.fromString = function (t, n) {
          var i;
          return i = e.Text.textForStringWithAttributes(t, n), new this([new e.Block(i)]);
        }, c.prototype.isEmpty = function () {
          var t;
          return 1 === this.blockList.length && (t = this.getBlockAtIndex(0), t.isEmpty() && !t.hasAttributes());
        }, c.prototype.copy = function (t) {
          var e;
          return null == t && (t = {}), e = t.consolidateBlocks ? this.blockList.consolidate().toArray() : this.blockList.toArray(), new this.constructor(e);
        }, c.prototype.copyUsingObjectsFromDocument = function (t) {
          var n;
          return n = new e.ObjectMap(t.getObjects()), this.copyUsingObjectMap(n);
        }, c.prototype.copyUsingObjectMap = function (t) {
          var e, n, i;
          return n = function () {
            var n, o, r, s;

            for (r = this.getBlocks(), s = [], n = 0, o = r.length; o > n; n++) {
              e = r[n], s.push((i = t.find(e)) ? i : e.copyUsingObjectMap(t));
            }

            return s;
          }.call(this), new this.constructor(n);
        }, c.prototype.copyWithBaseBlockAttributes = function (t) {
          var e, n, i;
          return null == t && (t = []), i = function () {
            var i, o, r, s;

            for (r = this.getBlocks(), s = [], i = 0, o = r.length; o > i; i++) {
              n = r[i], e = t.concat(n.getAttributes()), s.push(n.copyWithAttributes(e));
            }

            return s;
          }.call(this), new this.constructor(i);
        }, c.prototype.replaceBlock = function (t, e) {
          var n;
          return n = this.blockList.indexOf(t), -1 === n ? this : new this.constructor(this.blockList.replaceObjectAtIndex(e, n));
        }, c.prototype.insertDocumentAtRange = function (t, e) {
          var n, r, s, a, u, c, l;
          return r = t.blockList, u = (e = i(e))[0], c = this.locationFromPosition(u), s = c.index, a = c.offset, l = this, n = this.getBlockAtPosition(u), o(e) && n.isEmpty() && !n.hasAttributes() ? l = new this.constructor(l.blockList.removeObjectAtIndex(s)) : n.getBlockBreakPosition() === a && u++, l = l.removeTextAtRange(e), new this.constructor(l.blockList.insertSplittableListAtPosition(r, u));
        }, c.prototype.mergeDocumentAtRange = function (e, n) {
          var o, r, s, a, u, c, l, h, p, d, f, g;
          return f = (n = i(n))[0], d = this.locationFromPosition(f), r = this.getBlockAtIndex(d.index).getAttributes(), o = e.getBaseBlockAttributes(), g = r.slice(-o.length), t(o, g) ? (l = r.slice(0, -o.length), c = e.copyWithBaseBlockAttributes(l)) : c = e.copy({
            consolidateBlocks: !0
          }).copyWithBaseBlockAttributes(r), s = c.getBlockCount(), a = c.getBlockAtIndex(0), t(r, a.getAttributes()) ? (u = a.getTextWithoutBlockBreak(), p = this.insertTextAtRange(u, n), s > 1 && (c = new this.constructor(c.getBlocks().slice(1)), h = f + u.getLength(), p = p.insertDocumentAtRange(c, h))) : p = this.insertDocumentAtRange(c, n), p;
        }, c.prototype.insertTextAtRange = function (t, e) {
          var n, o, r, s, a;
          return a = (e = i(e))[0], s = this.locationFromPosition(a), o = s.index, r = s.offset, n = this.removeTextAtRange(e), new this.constructor(n.blockList.editObjectAtIndex(o, function (e) {
            return e.copyWithText(e.text.insertTextAtPosition(t, r));
          }));
        }, c.prototype.removeTextAtRange = function (t) {
          var e, n, r, s, a, u, c, l, h, p, d, f, g, m, v, y, b, A, C, x, w;
          return p = t = i(t), l = p[0], A = p[1], o(t) ? this : (d = this.locationRangeFromRange(t), u = d[0], y = d[1], a = u.index, c = u.offset, s = this.getBlockAtIndex(a), v = y.index, b = y.offset, m = this.getBlockAtIndex(v), f = A - l === 1 && s.getBlockBreakPosition() === c && m.getBlockBreakPosition() !== b && "\n" === m.text.getStringAtPosition(b), f ? r = this.blockList.editObjectAtIndex(v, function (t) {
            return t.copyWithText(t.text.removeTextAtRange([b, b + 1]));
          }) : (h = s.text.getTextAtRange([0, c]), C = m.text.getTextAtRange([b, m.getLength()]), x = h.appendText(C), g = a !== v && 0 === c, w = g && s.getAttributeLevel() >= m.getAttributeLevel(), n = w ? m.copyWithText(x) : s.copyWithText(x), e = v + 1 - a, r = this.blockList.splice(a, e, n)), new this.constructor(r));
        }, c.prototype.moveTextFromRangeToPosition = function (t, e) {
          var n, o, r, s, u, c, l, h, p, d;
          return c = t = i(t), p = c[0], r = c[1], e >= p && r >= e ? this : (o = this.getDocumentAtRange(t), h = this.removeTextAtRange(t), u = e > p, u && (e -= o.getLength()), l = o.getBlocks(), s = l[0], n = 2 <= l.length ? a.call(l, 1) : [], 0 === n.length ? (d = s.getTextWithoutBlockBreak(), u && (e += 1)) : d = s.text, h = h.insertTextAtRange(d, e), 0 === n.length ? h : (o = new this.constructor(n), e += d.getLength(), h.insertDocumentAtRange(o, e)));
        }, c.prototype.addAttributeAtRange = function (t, e, i) {
          var o;
          return o = this.blockList, this.eachBlockAtRange(i, function (i, r, s) {
            return o = o.editObjectAtIndex(s, function () {
              return n(t) ? i.addAttribute(t, e) : r[0] === r[1] ? i : i.copyWithText(i.text.addAttributeAtRange(t, e, r));
            });
          }), new this.constructor(o);
        }, c.prototype.addAttribute = function (t, e) {
          var n;
          return n = this.blockList, this.eachBlock(function (i, o) {
            return n = n.editObjectAtIndex(o, function () {
              return i.addAttribute(t, e);
            });
          }), new this.constructor(n);
        }, c.prototype.removeAttributeAtRange = function (t, e) {
          var i;
          return i = this.blockList, this.eachBlockAtRange(e, function (e, o, r) {
            return n(t) ? i = i.editObjectAtIndex(r, function () {
              return e.removeAttribute(t);
            }) : o[0] !== o[1] ? i = i.editObjectAtIndex(r, function () {
              return e.copyWithText(e.text.removeAttributeAtRange(t, o));
            }) : void 0;
          }), new this.constructor(i);
        }, c.prototype.updateAttributesForAttachment = function (t, e) {
          var n, i, o, r;
          return o = (i = this.getRangeOfAttachment(e))[0], n = this.locationFromPosition(o).index, r = this.getTextAtIndex(n), new this.constructor(this.blockList.editObjectAtIndex(n, function (n) {
            return n.copyWithText(r.updateAttributesForAttachment(t, e));
          }));
        }, c.prototype.removeAttributeForAttachment = function (t, e) {
          var n;
          return n = this.getRangeOfAttachment(e), this.removeAttributeAtRange(t, n);
        }, c.prototype.insertBlockBreakAtRange = function (t) {
          var n, o, r, s;
          return s = (t = i(t))[0], r = this.locationFromPosition(s).offset, o = this.removeTextAtRange(t), 0 === r && (n = [new e.Block()]), new this.constructor(o.blockList.insertSplittableListAtPosition(new e.SplittableList(n), s));
        }, c.prototype.applyBlockAttributeAtRange = function (t, e, i) {
          var o, r, s, a;
          return s = this.expandRangeToLineBreaksAndSplitBlocks(i), r = s.document, i = s.range, o = n(t), o.listAttribute ? (r = r.removeLastListAttributeAtRange(i, {
            exceptAttributeName: t
          }), a = r.convertLineBreaksToBlockBreaksInRange(i), r = a.document, i = a.range) : r = o.exclusive ? r.removeBlockAttributesAtRange(i) : o.terminal ? r.removeLastTerminalAttributeAtRange(i) : r.consolidateBlocksAtRange(i), r.addAttributeAtRange(t, e, i);
        }, c.prototype.removeLastListAttributeAtRange = function (t, e) {
          var i;
          return null == e && (e = {}), i = this.blockList, this.eachBlockAtRange(t, function (t, o, r) {
            var s;
            if ((s = t.getLastAttribute()) && n(s).listAttribute && s !== e.exceptAttributeName) return i = i.editObjectAtIndex(r, function () {
              return t.removeAttribute(s);
            });
          }), new this.constructor(i);
        }, c.prototype.removeLastTerminalAttributeAtRange = function (t) {
          var e;
          return e = this.blockList, this.eachBlockAtRange(t, function (t, i, o) {
            var r;
            if ((r = t.getLastAttribute()) && n(r).terminal) return e = e.editObjectAtIndex(o, function () {
              return t.removeAttribute(r);
            });
          }), new this.constructor(e);
        }, c.prototype.removeBlockAttributesAtRange = function (t) {
          var e;
          return e = this.blockList, this.eachBlockAtRange(t, function (t, n, i) {
            return t.hasAttributes() ? e = e.editObjectAtIndex(i, function () {
              return t.copyWithoutAttributes();
            }) : void 0;
          }), new this.constructor(e);
        }, c.prototype.expandRangeToLineBreaksAndSplitBlocks = function (t) {
          var e, n, o, r, s, a, u, c, l;
          return a = t = i(t), l = a[0], r = a[1], c = this.locationFromPosition(l), o = this.locationFromPosition(r), e = this, u = e.getBlockAtIndex(c.index), null != (c.offset = u.findLineBreakInDirectionFromPosition("backward", c.offset)) && (s = e.positionFromLocation(c), e = e.insertBlockBreakAtRange([s, s + 1]), o.index += 1, o.offset -= e.getBlockAtIndex(c.index).getLength(), c.index += 1), c.offset = 0, 0 === o.offset && o.index > c.index ? (o.index -= 1, o.offset = e.getBlockAtIndex(o.index).getBlockBreakPosition()) : (n = e.getBlockAtIndex(o.index), "\n" === n.text.getStringAtRange([o.offset - 1, o.offset]) ? o.offset -= 1 : o.offset = n.findLineBreakInDirectionFromPosition("forward", o.offset), o.offset !== n.getBlockBreakPosition() && (s = e.positionFromLocation(o), e = e.insertBlockBreakAtRange([s, s + 1]))), l = e.positionFromLocation(c), r = e.positionFromLocation(o), t = i([l, r]), {
            document: e,
            range: t
          };
        }, c.prototype.convertLineBreaksToBlockBreaksInRange = function (t) {
          var e, n, o;
          return n = (t = i(t))[0], o = this.getStringAtRange(t).slice(0, -1), e = this, o.replace(/.*?\n/g, function (t) {
            return n += t.length, e = e.insertBlockBreakAtRange([n - 1, n]);
          }), {
            document: e,
            range: t
          };
        }, c.prototype.consolidateBlocksAtRange = function (t) {
          var e, n, o, r, s;
          return o = t = i(t), s = o[0], n = o[1], r = this.locationFromPosition(s).index, e = this.locationFromPosition(n).index, new this.constructor(this.blockList.consolidateFromIndexToIndex(r, e));
        }, c.prototype.getDocumentAtRange = function (t) {
          var e;
          return t = i(t), e = this.blockList.getSplittableListInRange(t).toArray(), new this.constructor(e);
        }, c.prototype.getStringAtRange = function (t) {
          var e, n, o;
          return o = t = i(t), n = o[o.length - 1], n !== this.getLength() && (e = -1), this.getDocumentAtRange(t).toString().slice(0, e);
        }, c.prototype.getBlockAtIndex = function (t) {
          return this.blockList.getObjectAtIndex(t);
        }, c.prototype.getBlockAtPosition = function (t) {
          var e;
          return e = this.locationFromPosition(t).index, this.getBlockAtIndex(e);
        }, c.prototype.getTextAtIndex = function (t) {
          var e;
          return null != (e = this.getBlockAtIndex(t)) ? e.text : void 0;
        }, c.prototype.getTextAtPosition = function (t) {
          var e;
          return e = this.locationFromPosition(t).index, this.getTextAtIndex(e);
        }, c.prototype.getPieceAtPosition = function (t) {
          var e, n, i;
          return i = this.locationFromPosition(t), e = i.index, n = i.offset, this.getTextAtIndex(e).getPieceAtPosition(n);
        }, c.prototype.getCharacterAtPosition = function (t) {
          var e, n, i;
          return i = this.locationFromPosition(t), e = i.index, n = i.offset, this.getTextAtIndex(e).getStringAtRange([n, n + 1]);
        }, c.prototype.getLength = function () {
          return this.blockList.getEndPosition();
        }, c.prototype.getBlocks = function () {
          return this.blockList.toArray();
        }, c.prototype.getBlockCount = function () {
          return this.blockList.length;
        }, c.prototype.getEditCount = function () {
          return this.editCount;
        }, c.prototype.eachBlock = function (t) {
          return this.blockList.eachObject(t);
        }, c.prototype.eachBlockAtRange = function (t, e) {
          var n, o, r, s, a, u, c, l, h, p, d, f;
          if (u = t = i(t), d = u[0], r = u[1], p = this.locationFromPosition(d), o = this.locationFromPosition(r), p.index === o.index) return n = this.getBlockAtIndex(p.index), f = [p.offset, o.offset], e(n, f, p.index);

          for (h = [], a = s = c = p.index, l = o.index; l >= c ? l >= s : s >= l; a = l >= c ? ++s : --s) {
            (n = this.getBlockAtIndex(a)) ? (f = function () {
              switch (a) {
                case p.index:
                  return [p.offset, n.text.getLength()];

                case o.index:
                  return [0, o.offset];

                default:
                  return [0, n.text.getLength()];
              }
            }(), h.push(e(n, f, a))) : h.push(void 0);
          }

          return h;
        }, c.prototype.getCommonAttributesAtRange = function (t) {
          var n, r, s;
          return r = (t = i(t))[0], o(t) ? this.getCommonAttributesAtPosition(r) : (s = [], n = [], this.eachBlockAtRange(t, function (t, e) {
            return e[0] !== e[1] ? (s.push(t.text.getCommonAttributesAtRange(e)), n.push(l(t))) : void 0;
          }), e.Hash.fromCommonAttributesOfObjects(s).merge(e.Hash.fromCommonAttributesOfObjects(n)).toObject());
        }, c.prototype.getCommonAttributesAtPosition = function (t) {
          var n, i, o, r, s, a, c, h, p, d;
          if (p = this.locationFromPosition(t), s = p.index, h = p.offset, o = this.getBlockAtIndex(s), !o) return {};
          r = l(o), n = o.text.getAttributesAtPosition(h), i = o.text.getAttributesAtPosition(h - 1), a = function () {
            var t, n;
            t = e.config.textAttributes, n = [];

            for (c in t) {
              d = t[c], d.inheritable && n.push(c);
            }

            return n;
          }();

          for (c in i) {
            d = i[c], (d === n[c] || u.call(a, c) >= 0) && (r[c] = d);
          }

          return r;
        }, c.prototype.getRangeOfCommonAttributeAtPosition = function (t, e) {
          var n, o, r, s, a, u, c, l, h;
          return a = this.locationFromPosition(e), r = a.index, s = a.offset, h = this.getTextAtIndex(r), u = h.getExpandedRangeForAttributeAtOffset(t, s), l = u[0], o = u[1], c = this.positionFromLocation({
            index: r,
            offset: l
          }), n = this.positionFromLocation({
            index: r,
            offset: o
          }), i([c, n]);
        }, c.prototype.getBaseBlockAttributes = function () {
          var t, e, n, i, o, r, s;

          for (t = this.getBlockAtIndex(0).getAttributes(), n = i = 1, s = this.getBlockCount(); s >= 1 ? s > i : i > s; n = s >= 1 ? ++i : --i) {
            e = this.getBlockAtIndex(n).getAttributes(), r = Math.min(t.length, e.length), t = function () {
              var n, i, s;

              for (s = [], o = n = 0, i = r; (i >= 0 ? i > n : n > i) && e[o] === t[o]; o = i >= 0 ? ++n : --n) {
                s.push(e[o]);
              }

              return s;
            }();
          }

          return t;
        }, l = function l(t) {
          var e, n;
          return n = {}, (e = t.getLastAttribute()) && (n[e] = !0), n;
        }, c.prototype.getAttachmentById = function (t) {
          var e, n, i, o;

          for (o = this.getAttachments(), n = 0, i = o.length; i > n; n++) {
            if (e = o[n], e.id === t) return e;
          }
        }, c.prototype.getAttachmentPieces = function () {
          var t;
          return t = [], this.blockList.eachObject(function (e) {
            var n;
            return n = e.text, t = t.concat(n.getAttachmentPieces());
          }), t;
        }, c.prototype.getAttachments = function () {
          var t, e, n, i, o;

          for (i = this.getAttachmentPieces(), o = [], t = 0, e = i.length; e > t; t++) {
            n = i[t], o.push(n.attachment);
          }

          return o;
        }, c.prototype.getRangeOfAttachment = function (t) {
          var e, n, o, r, s, a, u;

          for (r = 0, s = this.blockList.toArray(), n = e = 0, o = s.length; o > e; n = ++e) {
            if (a = s[n].text, u = a.getRangeOfAttachment(t)) return i([r + u[0], r + u[1]]);
            r += a.getLength();
          }
        }, c.prototype.getLocationRangeOfAttachment = function (t) {
          var e;
          return e = this.getRangeOfAttachment(t), this.locationRangeFromRange(e);
        }, c.prototype.getAttachmentPieceForAttachment = function (t) {
          var e, n, i, o;

          for (o = this.getAttachmentPieces(), e = 0, n = o.length; n > e; e++) {
            if (i = o[e], i.attachment === t) return i;
          }
        }, c.prototype.findRangesForBlockAttribute = function (t) {
          var e, n, i, o, r, s, a;

          for (r = 0, s = [], a = this.getBlocks(), n = 0, i = a.length; i > n; n++) {
            e = a[n], o = e.getLength(), e.hasAttribute(t) && s.push([r, r + o]), r += o;
          }

          return s;
        }, c.prototype.findRangesForTextAttribute = function (t, e) {
          var n, i, o, r, s, a, u, c, l, h;

          for (h = (null != e ? e : {}).withValue, a = 0, u = [], c = [], r = function r(e) {
            return null != h ? e.getAttribute(t) === h : e.hasAttribute(t);
          }, l = this.getPieces(), n = 0, i = l.length; i > n; n++) {
            s = l[n], o = s.getLength(), r(s) && (u[1] === a ? u[1] = a + o : c.push(u = [a, a + o])), a += o;
          }

          return c;
        }, c.prototype.locationFromPosition = function (t) {
          var e, n;
          return n = this.blockList.findIndexAndOffsetAtPosition(Math.max(0, t)), null != n.index ? n : (e = this.getBlocks(), {
            index: e.length - 1,
            offset: e[e.length - 1].getLength()
          });
        }, c.prototype.positionFromLocation = function (t) {
          return this.blockList.findPositionAtIndexAndOffset(t.index, t.offset);
        }, c.prototype.locationRangeFromPosition = function (t) {
          return i(this.locationFromPosition(t));
        }, c.prototype.locationRangeFromRange = function (t) {
          var e, n, o, r;
          if (t = i(t)) return r = t[0], n = t[1], o = this.locationFromPosition(r), e = this.locationFromPosition(n), i([o, e]);
        }, c.prototype.rangeFromLocationRange = function (t) {
          var e, n;
          return t = i(t), e = this.positionFromLocation(t[0]), o(t) || (n = this.positionFromLocation(t[1])), i([e, n]);
        }, c.prototype.isEqualTo = function (t) {
          return this.blockList.isEqualTo(null != t ? t.blockList : void 0);
        }, c.prototype.getTexts = function () {
          var t, e, n, i, o;

          for (i = this.getBlocks(), o = [], e = 0, n = i.length; n > e; e++) {
            t = i[e], o.push(t.text);
          }

          return o;
        }, c.prototype.getPieces = function () {
          var t, e, n, i, o;

          for (n = [], i = this.getTexts(), t = 0, e = i.length; e > t; t++) {
            o = i[t], n.push.apply(n, o.getPieces());
          }

          return n;
        }, c.prototype.getObjects = function () {
          return this.getBlocks().concat(this.getTexts()).concat(this.getPieces());
        }, c.prototype.toSerializableDocument = function () {
          var t;
          return t = [], this.blockList.eachObject(function (e) {
            return t.push(e.copyWithText(e.text.toSerializableText()));
          }), new this.constructor(t);
        }, c.prototype.toString = function () {
          return this.blockList.toString();
        }, c.prototype.toJSON = function () {
          return this.blockList.toJSON();
        }, c.prototype.toConsole = function () {
          var t;
          return JSON.stringify(function () {
            var e, n, i, o;

            for (i = this.blockList.toArray(), o = [], e = 0, n = i.length; n > e; e++) {
              t = i[e], o.push(JSON.parse(t.text.toConsole()));
            }

            return o;
          }.call(this));
        }, c;
      }(e.Object);
    }.call(this), function () {
      e.LineBreakInsertion = function () {
        function t(t) {
          var e;
          this.composition = t, this.document = this.composition.document, e = this.composition.getSelectedRange(), this.startPosition = e[0], this.endPosition = e[1], this.startLocation = this.document.locationFromPosition(this.startPosition), this.endLocation = this.document.locationFromPosition(this.endPosition), this.block = this.document.getBlockAtIndex(this.endLocation.index), this.breaksOnReturn = this.block.breaksOnReturn(), this.previousCharacter = this.block.text.getStringAtPosition(this.endLocation.offset - 1), this.nextCharacter = this.block.text.getStringAtPosition(this.endLocation.offset);
        }

        return t.prototype.shouldInsertBlockBreak = function () {
          return this.block.hasAttributes() && this.block.isListItem() && !this.block.isEmpty() ? 0 !== this.startLocation.offset : this.breaksOnReturn && "\n" !== this.nextCharacter;
        }, t.prototype.shouldBreakFormattedBlock = function () {
          return this.block.hasAttributes() && !this.block.isListItem() && (this.breaksOnReturn && "\n" === this.nextCharacter || "\n" === this.previousCharacter);
        }, t.prototype.shouldDecreaseListLevel = function () {
          return this.block.hasAttributes() && this.block.isListItem() && this.block.isEmpty();
        }, t.prototype.shouldPrependListItem = function () {
          return this.block.isListItem() && 0 === this.startLocation.offset && !this.block.isEmpty();
        }, t.prototype.shouldRemoveLastBlockAttribute = function () {
          return this.block.hasAttributes() && !this.block.isListItem() && this.block.isEmpty();
        }, t;
      }();
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c,
          l,
          h = function h(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          p.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          p = {}.hasOwnProperty;

      s = e.normalizeRange, c = e.rangesAreEqual, u = e.rangeIsCollapsed, a = e.objectsAreEqual, t = e.arrayStartsWith, l = e.summarizeArrayChange, i = e.getAllAttributeNames, o = e.getBlockConfig, r = e.getTextConfig, n = e.extend, e.Composition = function (p) {
        function d() {
          this.document = new e.Document(), this.attachments = [], this.currentAttributes = {}, this.revision = 0;
        }

        var f;
        return h(d, p), d.prototype.setDocument = function (t) {
          var e;
          return t.isEqualTo(this.document) ? void 0 : (this.document = t, this.refreshAttachments(), this.revision++, null != (e = this.delegate) && "function" == typeof e.compositionDidChangeDocument ? e.compositionDidChangeDocument(t) : void 0);
        }, d.prototype.getSnapshot = function () {
          return {
            document: this.document,
            selectedRange: this.getSelectedRange()
          };
        }, d.prototype.loadSnapshot = function (t) {
          var n, i, o, r;
          return n = t.document, r = t.selectedRange, null != (i = this.delegate) && "function" == typeof i.compositionWillLoadSnapshot && i.compositionWillLoadSnapshot(), this.setDocument(null != n ? n : new e.Document()), this.setSelection(null != r ? r : [0, 0]), null != (o = this.delegate) && "function" == typeof o.compositionDidLoadSnapshot ? o.compositionDidLoadSnapshot() : void 0;
        }, d.prototype.insertText = function (t, e) {
          var n, i, o, r;
          return r = (null != e ? e : {
            updatePosition: !0
          }).updatePosition, i = this.getSelectedRange(), this.setDocument(this.document.insertTextAtRange(t, i)), o = i[0], n = o + t.getLength(), r && this.setSelection(n), this.notifyDelegateOfInsertionAtRange([o, n]);
        }, d.prototype.insertBlock = function (t) {
          var n;
          return null == t && (t = new e.Block()), n = new e.Document([t]), this.insertDocument(n);
        }, d.prototype.insertDocument = function (t) {
          var n, i, o;
          return null == t && (t = new e.Document()), i = this.getSelectedRange(), this.setDocument(this.document.insertDocumentAtRange(t, i)), o = i[0], n = o + t.getLength(), this.setSelection(n), this.notifyDelegateOfInsertionAtRange([o, n]);
        }, d.prototype.insertString = function (t, n) {
          var i, o;
          return i = this.getCurrentTextAttributes(), o = e.Text.textForStringWithAttributes(t, i), this.insertText(o, n);
        }, d.prototype.insertBlockBreak = function () {
          var t, e, n;
          return e = this.getSelectedRange(), this.setDocument(this.document.insertBlockBreakAtRange(e)), n = e[0], t = n + 1, this.setSelection(t), this.notifyDelegateOfInsertionAtRange([n, t]);
        }, d.prototype.insertLineBreak = function () {
          var t, n;
          return n = new e.LineBreakInsertion(this), n.shouldDecreaseListLevel() ? (this.decreaseListLevel(), this.setSelection(n.startPosition)) : n.shouldPrependListItem() ? (t = new e.Document([n.block.copyWithoutText()]), this.insertDocument(t)) : n.shouldInsertBlockBreak() ? this.insertBlockBreak() : n.shouldRemoveLastBlockAttribute() ? this.removeLastBlockAttribute() : n.shouldBreakFormattedBlock() ? this.breakFormattedBlock(n) : this.insertString("\n");
        }, d.prototype.insertHTML = function (t) {
          var n, i, o, r;
          return n = e.Document.fromHTML(t), o = this.getSelectedRange(), this.setDocument(this.document.mergeDocumentAtRange(n, o)), r = o[0], i = r + n.getLength() - 1, this.setSelection(i), this.notifyDelegateOfInsertionAtRange([r, i]);
        }, d.prototype.replaceHTML = function (t) {
          var n, i, o;
          return n = e.Document.fromHTML(t).copyUsingObjectsFromDocument(this.document), i = this.getLocationRange({
            strict: !1
          }), o = this.document.rangeFromLocationRange(i), this.setDocument(n), this.setSelection(o);
        }, d.prototype.insertFile = function (t) {
          return this.insertFiles([t]);
        }, d.prototype.insertFiles = function (t) {
          var n, i, o, r, s, a;

          for (i = [], r = 0, s = t.length; s > r; r++) {
            o = t[r], (null != (a = this.delegate) ? a.compositionShouldAcceptFile(o) : void 0) && (n = e.Attachment.attachmentForFile(o), i.push(n));
          }

          return this.insertAttachments(i);
        }, d.prototype.insertAttachment = function (t) {
          return this.insertAttachments([t]);
        }, d.prototype.insertAttachments = function (t) {
          var n, i, o, r, s, a, u, c, l;

          for (c = new e.Text(), r = 0, s = t.length; s > r; r++) {
            n = t[r], l = n.getType(), a = null != (u = e.config.attachments[l]) ? u.presentation : void 0, o = this.getCurrentTextAttributes(), a && (o.presentation = a), i = e.Text.textForAttachmentWithAttributes(n, o), c = c.appendText(i);
          }

          return this.insertText(c);
        }, d.prototype.shouldManageDeletingInDirection = function (t) {
          var e;

          if (e = this.getLocationRange(), u(e)) {
            if ("backward" === t && 0 === e[0].offset) return !0;
            if (this.shouldManageMovingCursorInDirection(t)) return !0;
          } else if (e[0].index !== e[1].index) return !0;

          return !1;
        }, d.prototype.deleteInDirection = function (t, e) {
          var n, i, o, r, s, a, c, l;
          return r = (null != e ? e : {}).length, s = this.getLocationRange(), a = this.getSelectedRange(), c = u(a), c ? o = "backward" === t && 0 === s[0].offset : l = s[0].index !== s[1].index, o && this.canDecreaseBlockAttributeLevel() && (i = this.getBlock(), i.isListItem() ? this.decreaseListLevel() : this.decreaseBlockAttributeLevel(), this.setSelection(a[0]), i.isEmpty()) ? !1 : (c && (a = this.getExpandedRangeInDirection(t, {
            length: r
          }), "backward" === t && (n = this.getAttachmentAtRange(a))), n ? (this.editAttachment(n), !1) : (this.setDocument(this.document.removeTextAtRange(a)), this.setSelection(a[0]), o || l ? !1 : void 0));
        }, d.prototype.moveTextFromRange = function (t) {
          var e;
          return e = this.getSelectedRange()[0], this.setDocument(this.document.moveTextFromRangeToPosition(t, e)), this.setSelection(e);
        }, d.prototype.removeAttachment = function (t) {
          var e;
          return (e = this.document.getRangeOfAttachment(t)) ? (this.stopEditingAttachment(), this.setDocument(this.document.removeTextAtRange(e)), this.setSelection(e[0])) : void 0;
        }, d.prototype.removeLastBlockAttribute = function () {
          var t, e, n, i;
          return n = this.getSelectedRange(), i = n[0], e = n[1], t = this.document.getBlockAtPosition(e), this.removeCurrentAttribute(t.getLastAttribute()), this.setSelection(i);
        }, f = " ", d.prototype.insertPlaceholder = function () {
          return this.placeholderPosition = this.getPosition(), this.insertString(f);
        }, d.prototype.selectPlaceholder = function () {
          return null != this.placeholderPosition ? (this.setSelectedRange([this.placeholderPosition, this.placeholderPosition + f.length]), this.getSelectedRange()) : void 0;
        }, d.prototype.forgetPlaceholder = function () {
          return this.placeholderPosition = null;
        }, d.prototype.hasCurrentAttribute = function (t) {
          var e;
          return e = this.currentAttributes[t], null != e && e !== !1;
        }, d.prototype.toggleCurrentAttribute = function (t) {
          var e;
          return (e = !this.currentAttributes[t]) ? this.setCurrentAttribute(t, e) : this.removeCurrentAttribute(t);
        }, d.prototype.canSetCurrentAttribute = function (t) {
          return o(t) ? this.canSetCurrentBlockAttribute(t) : this.canSetCurrentTextAttribute(t);
        }, d.prototype.canSetCurrentTextAttribute = function () {
          var t, e, n, i, o;

          if (e = this.getSelectedDocument()) {
            for (o = e.getAttachments(), n = 0, i = o.length; i > n; n++) {
              if (t = o[n], !t.hasContent()) return !1;
            }

            return !0;
          }
        }, d.prototype.canSetCurrentBlockAttribute = function () {
          var t;
          if (t = this.getBlock()) return !t.isTerminalBlock();
        }, d.prototype.setCurrentAttribute = function (t, e) {
          return o(t) ? this.setBlockAttribute(t, e) : (this.setTextAttribute(t, e), this.currentAttributes[t] = e, this.notifyDelegateOfCurrentAttributesChange());
        }, d.prototype.setTextAttribute = function (t, n) {
          var i, o, r, s;
          if (o = this.getSelectedRange()) return r = o[0], i = o[1], r !== i ? this.setDocument(this.document.addAttributeAtRange(t, n, o)) : "href" === t ? (s = e.Text.textForStringWithAttributes(n, {
            href: n
          }), this.insertText(s)) : void 0;
        }, d.prototype.setBlockAttribute = function (t, e) {
          var n, i;
          if (i = this.getSelectedRange()) return this.canSetCurrentAttribute(t) ? (n = this.getBlock(), this.setDocument(this.document.applyBlockAttributeAtRange(t, e, i)), this.setSelection(i)) : void 0;
        }, d.prototype.removeCurrentAttribute = function (t) {
          return o(t) ? (this.removeBlockAttribute(t), this.updateCurrentAttributes()) : (this.removeTextAttribute(t), delete this.currentAttributes[t], this.notifyDelegateOfCurrentAttributesChange());
        }, d.prototype.removeTextAttribute = function (t) {
          var e;
          if (e = this.getSelectedRange()) return this.setDocument(this.document.removeAttributeAtRange(t, e));
        }, d.prototype.removeBlockAttribute = function (t) {
          var e;
          if (e = this.getSelectedRange()) return this.setDocument(this.document.removeAttributeAtRange(t, e));
        }, d.prototype.canDecreaseNestingLevel = function () {
          var t;
          return (null != (t = this.getBlock()) ? t.getNestingLevel() : void 0) > 0;
        }, d.prototype.canIncreaseNestingLevel = function () {
          var e, n, i;
          if (e = this.getBlock()) return (null != (i = o(e.getLastNestableAttribute())) ? i.listAttribute : 0) ? (n = this.getPreviousBlock()) ? t(n.getListItemAttributes(), e.getListItemAttributes()) : void 0 : e.getNestingLevel() > 0;
        }, d.prototype.decreaseNestingLevel = function () {
          var t;
          if (t = this.getBlock()) return this.setDocument(this.document.replaceBlock(t, t.decreaseNestingLevel()));
        }, d.prototype.increaseNestingLevel = function () {
          var t;
          if (t = this.getBlock()) return this.setDocument(this.document.replaceBlock(t, t.increaseNestingLevel()));
        }, d.prototype.canDecreaseBlockAttributeLevel = function () {
          var t;
          return (null != (t = this.getBlock()) ? t.getAttributeLevel() : void 0) > 0;
        }, d.prototype.decreaseBlockAttributeLevel = function () {
          var t, e;
          return (t = null != (e = this.getBlock()) ? e.getLastAttribute() : void 0) ? this.removeCurrentAttribute(t) : void 0;
        }, d.prototype.decreaseListLevel = function () {
          var t, e, n, i, o, r;

          for (r = this.getSelectedRange()[0], o = this.document.locationFromPosition(r).index, n = o, t = this.getBlock().getAttributeLevel(); (e = this.document.getBlockAtIndex(n + 1)) && e.isListItem() && e.getAttributeLevel() > t;) {
            n++;
          }

          return r = this.document.positionFromLocation({
            index: o,
            offset: 0
          }), i = this.document.positionFromLocation({
            index: n,
            offset: 0
          }), this.setDocument(this.document.removeLastListAttributeAtRange([r, i]));
        }, d.prototype.updateCurrentAttributes = function () {
          var t, e, n, o, r, s;

          if (s = this.getSelectedRange({
            ignoreLock: !0
          })) {
            for (e = this.document.getCommonAttributesAtRange(s), r = i(), n = 0, o = r.length; o > n; n++) {
              t = r[n], e[t] || this.canSetCurrentAttribute(t) || (e[t] = !1);
            }

            if (!a(e, this.currentAttributes)) return this.currentAttributes = e, this.notifyDelegateOfCurrentAttributesChange();
          }
        }, d.prototype.getCurrentAttributes = function () {
          return n.call({}, this.currentAttributes);
        }, d.prototype.getCurrentTextAttributes = function () {
          var t, e, n, i;
          t = {}, n = this.currentAttributes;

          for (e in n) {
            i = n[e], i !== !1 && r(e) && (t[e] = i);
          }

          return t;
        }, d.prototype.freezeSelection = function () {
          return this.setCurrentAttribute("frozen", !0);
        }, d.prototype.thawSelection = function () {
          return this.removeCurrentAttribute("frozen");
        }, d.prototype.hasFrozenSelection = function () {
          return this.hasCurrentAttribute("frozen");
        }, d.proxyMethod("getSelectionManager().getPointRange"), d.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"), d.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"), d.proxyMethod("getSelectionManager().locationIsCursorTarget"), d.proxyMethod("getSelectionManager().selectionIsExpanded"), d.proxyMethod("delegate?.getSelectionManager"), d.prototype.setSelection = function (t) {
          var e, n;
          return e = this.document.locationRangeFromRange(t), null != (n = this.delegate) ? n.compositionDidRequestChangingSelectionToLocationRange(e) : void 0;
        }, d.prototype.getSelectedRange = function () {
          var t;
          return (t = this.getLocationRange()) ? this.document.rangeFromLocationRange(t) : void 0;
        }, d.prototype.setSelectedRange = function (t) {
          var e;
          return e = this.document.locationRangeFromRange(t), this.getSelectionManager().setLocationRange(e);
        }, d.prototype.getPosition = function () {
          var t;
          return (t = this.getLocationRange()) ? this.document.positionFromLocation(t[0]) : void 0;
        }, d.prototype.getLocationRange = function (t) {
          var e, n;
          return null != (e = null != (n = this.targetLocationRange) ? n : this.getSelectionManager().getLocationRange(t)) ? e : s({
            index: 0,
            offset: 0
          });
        }, d.prototype.withTargetLocationRange = function (t, e) {
          var n;
          this.targetLocationRange = t;

          try {
            n = e();
          } finally {
            this.targetLocationRange = null;
          }

          return n;
        }, d.prototype.withTargetRange = function (t, e) {
          var n;
          return n = this.document.locationRangeFromRange(t), this.withTargetLocationRange(n, e);
        }, d.prototype.withTargetDOMRange = function (t, e) {
          var n;
          return n = this.createLocationRangeFromDOMRange(t, {
            strict: !1
          }), this.withTargetLocationRange(n, e);
        }, d.prototype.getExpandedRangeInDirection = function (t, e) {
          var n, i, o, r;
          return i = (null != e ? e : {}).length, o = this.getSelectedRange(), r = o[0], n = o[1], "backward" === t ? i ? r -= i : r = this.translateUTF16PositionFromOffset(r, -1) : i ? n += i : n = this.translateUTF16PositionFromOffset(n, 1), s([r, n]);
        }, d.prototype.shouldManageMovingCursorInDirection = function (t) {
          var e;
          return this.editingAttachment ? !0 : (e = this.getExpandedRangeInDirection(t), null != this.getAttachmentAtRange(e));
        }, d.prototype.moveCursorInDirection = function (t) {
          var e, n, i, o;
          return this.editingAttachment ? i = this.document.getRangeOfAttachment(this.editingAttachment) : (o = this.getSelectedRange(), i = this.getExpandedRangeInDirection(t), n = !c(o, i)), this.setSelectedRange("backward" === t ? i[0] : i[1]), n && (e = this.getAttachmentAtRange(i)) ? this.editAttachment(e) : void 0;
        }, d.prototype.expandSelectionInDirection = function (t, e) {
          var n, i;
          return n = (null != e ? e : {}).length, i = this.getExpandedRangeInDirection(t, {
            length: n
          }), this.setSelectedRange(i);
        }, d.prototype.expandSelectionForEditing = function () {
          return this.hasCurrentAttribute("href") ? this.expandSelectionAroundCommonAttribute("href") : void 0;
        }, d.prototype.expandSelectionAroundCommonAttribute = function (t) {
          var e, n;
          return e = this.getPosition(), n = this.document.getRangeOfCommonAttributeAtPosition(t, e), this.setSelectedRange(n);
        }, d.prototype.selectionContainsAttachments = function () {
          var t;
          return (null != (t = this.getSelectedAttachments()) ? t.length : void 0) > 0;
        }, d.prototype.selectionIsInCursorTarget = function () {
          return this.editingAttachment || this.positionIsCursorTarget(this.getPosition());
        }, d.prototype.positionIsCursorTarget = function (t) {
          var e;
          return (e = this.document.locationFromPosition(t)) ? this.locationIsCursorTarget(e) : void 0;
        }, d.prototype.positionIsBlockBreak = function (t) {
          var e;
          return null != (e = this.document.getPieceAtPosition(t)) ? e.isBlockBreak() : void 0;
        }, d.prototype.getSelectedDocument = function () {
          var t;
          return (t = this.getSelectedRange()) ? this.document.getDocumentAtRange(t) : void 0;
        }, d.prototype.getSelectedAttachments = function () {
          var t;
          return null != (t = this.getSelectedDocument()) ? t.getAttachments() : void 0;
        }, d.prototype.getAttachments = function () {
          return this.attachments.slice(0);
        }, d.prototype.refreshAttachments = function () {
          var t, e, n, i, o, r, s, a, u, c, h, p;

          for (n = this.document.getAttachments(), a = l(this.attachments, n), t = a.added, h = a.removed, this.attachments = n, i = 0, r = h.length; r > i; i++) {
            e = h[i], e.delegate = null, null != (u = this.delegate) && "function" == typeof u.compositionDidRemoveAttachment && u.compositionDidRemoveAttachment(e);
          }

          for (p = [], o = 0, s = t.length; s > o; o++) {
            e = t[o], e.delegate = this, p.push(null != (c = this.delegate) && "function" == typeof c.compositionDidAddAttachment ? c.compositionDidAddAttachment(e) : void 0);
          }

          return p;
        }, d.prototype.attachmentDidChangeAttributes = function (t) {
          var e;
          return this.revision++, null != (e = this.delegate) && "function" == typeof e.compositionDidEditAttachment ? e.compositionDidEditAttachment(t) : void 0;
        }, d.prototype.attachmentDidChangePreviewURL = function (t) {
          var e;
          return this.revision++, null != (e = this.delegate) && "function" == typeof e.compositionDidChangeAttachmentPreviewURL ? e.compositionDidChangeAttachmentPreviewURL(t) : void 0;
        }, d.prototype.editAttachment = function (t, e) {
          var n;
          if (t !== this.editingAttachment) return this.stopEditingAttachment(), this.editingAttachment = t, null != (n = this.delegate) && "function" == typeof n.compositionDidStartEditingAttachment ? n.compositionDidStartEditingAttachment(this.editingAttachment, e) : void 0;
        }, d.prototype.stopEditingAttachment = function () {
          var t;
          if (this.editingAttachment) return null != (t = this.delegate) && "function" == typeof t.compositionDidStopEditingAttachment && t.compositionDidStopEditingAttachment(this.editingAttachment), this.editingAttachment = null;
        }, d.prototype.updateAttributesForAttachment = function (t, e) {
          return this.setDocument(this.document.updateAttributesForAttachment(t, e));
        }, d.prototype.removeAttributeForAttachment = function (t, e) {
          return this.setDocument(this.document.removeAttributeForAttachment(t, e));
        }, d.prototype.breakFormattedBlock = function (t) {
          var n, i, o, r, s;
          return i = t.document, n = t.block, r = t.startPosition, s = [r - 1, r], n.getBlockBreakPosition() === t.startLocation.offset ? (n.breaksOnReturn() && "\n" === t.nextCharacter ? r += 1 : i = i.removeTextAtRange(s), s = [r, r]) : "\n" === t.nextCharacter ? "\n" === t.previousCharacter ? s = [r - 1, r + 1] : (s = [r, r + 1], r += 1) : t.startLocation.offset - 1 !== 0 && (r += 1), o = new e.Document([n.removeLastAttribute().copyWithoutText()]), this.setDocument(i.insertDocumentAtRange(o, s)), this.setSelection(r);
        }, d.prototype.getPreviousBlock = function () {
          var t, e;
          return (e = this.getLocationRange()) && (t = e[0].index, t > 0) ? this.document.getBlockAtIndex(t - 1) : void 0;
        }, d.prototype.getBlock = function () {
          var t;
          return (t = this.getLocationRange()) ? this.document.getBlockAtIndex(t[0].index) : void 0;
        }, d.prototype.getAttachmentAtRange = function (t) {
          var n;
          return n = this.document.getDocumentAtRange(t), n.toString() === e.OBJECT_REPLACEMENT_CHARACTER + "\n" ? n.getAttachments()[0] : void 0;
        }, d.prototype.notifyDelegateOfCurrentAttributesChange = function () {
          var t;
          return null != (t = this.delegate) && "function" == typeof t.compositionDidChangeCurrentAttributes ? t.compositionDidChangeCurrentAttributes(this.currentAttributes) : void 0;
        }, d.prototype.notifyDelegateOfInsertionAtRange = function (t) {
          var e;
          return null != (e = this.delegate) && "function" == typeof e.compositionDidPerformInsertionAtRange ? e.compositionDidPerformInsertionAtRange(t) : void 0;
        }, d.prototype.translateUTF16PositionFromOffset = function (t, e) {
          var n, i;
          return i = this.document.toUTF16String(), n = i.offsetFromUCS2Offset(t), i.offsetToUCS2Offset(n + e);
        }, d;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function t(_t17, e) {
        function i() {
          this.constructor = _t17;
        }

        for (var o in e) {
          n.call(e, o) && (_t17[o] = e[o]);
        }

        return i.prototype = e.prototype, _t17.prototype = new i(), _t17.__super__ = e.prototype, _t17;
      },
          n = {}.hasOwnProperty;

      e.UndoManager = function (e) {
        function n(t) {
          this.composition = t, this.undoEntries = [], this.redoEntries = [];
        }

        var i;
        return t(n, e), n.prototype.recordUndoEntry = function (t, e) {
          var n, o, r, s, a;
          return s = null != e ? e : {}, o = s.context, n = s.consolidatable, r = this.undoEntries.slice(-1)[0], n && i(r, t, o) ? void 0 : (a = this.createEntry({
            description: t,
            context: o
          }), this.undoEntries.push(a), this.redoEntries = []);
        }, n.prototype.undo = function () {
          var t, e;
          return (e = this.undoEntries.pop()) ? (t = this.createEntry(e), this.redoEntries.push(t), this.composition.loadSnapshot(e.snapshot)) : void 0;
        }, n.prototype.redo = function () {
          var t, e;
          return (t = this.redoEntries.pop()) ? (e = this.createEntry(t), this.undoEntries.push(e), this.composition.loadSnapshot(t.snapshot)) : void 0;
        }, n.prototype.canUndo = function () {
          return this.undoEntries.length > 0;
        }, n.prototype.canRedo = function () {
          return this.redoEntries.length > 0;
        }, n.prototype.createEntry = function (t) {
          var e, n, i;
          return i = null != t ? t : {}, n = i.description, e = i.context, {
            description: null != n ? n.toString() : void 0,
            context: JSON.stringify(e),
            snapshot: this.composition.getSnapshot()
          };
        }, i = function i(t, e, n) {
          return (null != t ? t.description : void 0) === (null != e ? e.toString() : void 0) && (null != t ? t.context : void 0) === JSON.stringify(n);
        }, n;
      }(e.BasicObject);
    }.call(this), function () {
      var t;
      e.attachmentGalleryFilter = function (e) {
        var n;
        return n = new t(e), n.perform(), n.getSnapshot();
      }, t = function () {
        function t(t) {
          this.document = t.document, this.selectedRange = t.selectedRange;
        }

        var e, n, i;
        return e = "attachmentGallery", n = "presentation", i = "gallery", t.prototype.perform = function () {
          return this.removeBlockAttribute(), this.applyBlockAttribute();
        }, t.prototype.getSnapshot = function () {
          return {
            document: this.document,
            selectedRange: this.selectedRange
          };
        }, t.prototype.removeBlockAttribute = function () {
          var t, n, i, o, r;

          for (o = this.findRangesOfBlocks(), r = [], t = 0, n = o.length; n > t; t++) {
            i = o[t], r.push(this.document = this.document.removeAttributeAtRange(e, i));
          }

          return r;
        }, t.prototype.applyBlockAttribute = function () {
          var t, n, i, o, r, s;

          for (i = 0, r = this.findRangesOfPieces(), s = [], t = 0, n = r.length; n > t; t++) {
            o = r[t], o[1] - o[0] > 1 && (o[0] += i, o[1] += i, "\n" !== this.document.getCharacterAtPosition(o[1]) && (this.document = this.document.insertBlockBreakAtRange(o[1]), o[1] < this.selectedRange[1] && this.moveSelectedRangeForward(), o[1]++, i++), 0 !== o[0] && "\n" !== this.document.getCharacterAtPosition(o[0] - 1) && (this.document = this.document.insertBlockBreakAtRange(o[0]), o[0] < this.selectedRange[0] && this.moveSelectedRangeForward(), o[0]++, i++), s.push(this.document = this.document.applyBlockAttributeAtRange(e, !0, o)));
          }

          return s;
        }, t.prototype.findRangesOfBlocks = function () {
          return this.document.findRangesForBlockAttribute(e);
        }, t.prototype.findRangesOfPieces = function () {
          return this.document.findRangesForTextAttribute(n, {
            withValue: i
          });
        }, t.prototype.moveSelectedRangeForward = function () {
          return this.selectedRange[0] += 1, this.selectedRange[1] += 1;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t18, e) {
        return function () {
          return _t18.apply(e, arguments);
        };
      };

      e.Editor = function () {
        function n(n, o, r) {
          this.composition = n, this.selectionManager = o, this.element = r, this.insertFiles = t(this.insertFiles, this), this.undoManager = new e.UndoManager(this.composition), this.filters = i.slice(0);
        }

        var i;
        return i = [e.attachmentGalleryFilter], n.prototype.loadDocument = function (t) {
          return this.loadSnapshot({
            document: t,
            selectedRange: [0, 0]
          });
        }, n.prototype.loadHTML = function (t) {
          return null == t && (t = ""), this.loadDocument(e.Document.fromHTML(t, {
            referenceElement: this.element
          }));
        }, n.prototype.loadJSON = function (t) {
          var n, i;
          return n = t.document, i = t.selectedRange, n = e.Document.fromJSON(n), this.loadSnapshot({
            document: n,
            selectedRange: i
          });
        }, n.prototype.loadSnapshot = function (t) {
          return this.undoManager = new e.UndoManager(this.composition), this.composition.loadSnapshot(t);
        }, n.prototype.getDocument = function () {
          return this.composition.document;
        }, n.prototype.getSelectedDocument = function () {
          return this.composition.getSelectedDocument();
        }, n.prototype.getSnapshot = function () {
          return this.composition.getSnapshot();
        }, n.prototype.toJSON = function () {
          return this.getSnapshot();
        }, n.prototype.deleteInDirection = function (t) {
          return this.composition.deleteInDirection(t);
        }, n.prototype.insertAttachment = function (t) {
          return this.composition.insertAttachment(t);
        }, n.prototype.insertAttachments = function (t) {
          return this.composition.insertAttachments(t);
        }, n.prototype.insertDocument = function (t) {
          return this.composition.insertDocument(t);
        }, n.prototype.insertFile = function (t) {
          return this.composition.insertFile(t);
        }, n.prototype.insertFiles = function (t) {
          return this.composition.insertFiles(t);
        }, n.prototype.insertHTML = function (t) {
          return this.composition.insertHTML(t);
        }, n.prototype.insertString = function (t) {
          return this.composition.insertString(t);
        }, n.prototype.insertText = function (t) {
          return this.composition.insertText(t);
        }, n.prototype.insertLineBreak = function () {
          return this.composition.insertLineBreak();
        }, n.prototype.getSelectedRange = function () {
          return this.composition.getSelectedRange();
        }, n.prototype.getPosition = function () {
          return this.composition.getPosition();
        }, n.prototype.getClientRectAtPosition = function (t) {
          var e;
          return e = this.getDocument().locationRangeFromRange([t, t + 1]), this.selectionManager.getClientRectAtLocationRange(e);
        }, n.prototype.expandSelectionInDirection = function (t) {
          return this.composition.expandSelectionInDirection(t);
        }, n.prototype.moveCursorInDirection = function (t) {
          return this.composition.moveCursorInDirection(t);
        }, n.prototype.setSelectedRange = function (t) {
          return this.composition.setSelectedRange(t);
        }, n.prototype.activateAttribute = function (t, e) {
          return null == e && (e = !0), this.composition.setCurrentAttribute(t, e);
        }, n.prototype.attributeIsActive = function (t) {
          return this.composition.hasCurrentAttribute(t);
        }, n.prototype.canActivateAttribute = function (t) {
          return this.composition.canSetCurrentAttribute(t);
        }, n.prototype.deactivateAttribute = function (t) {
          return this.composition.removeCurrentAttribute(t);
        }, n.prototype.canDecreaseNestingLevel = function () {
          return this.composition.canDecreaseNestingLevel();
        }, n.prototype.canIncreaseNestingLevel = function () {
          return this.composition.canIncreaseNestingLevel();
        }, n.prototype.decreaseNestingLevel = function () {
          return this.canDecreaseNestingLevel() ? this.composition.decreaseNestingLevel() : void 0;
        }, n.prototype.increaseNestingLevel = function () {
          return this.canIncreaseNestingLevel() ? this.composition.increaseNestingLevel() : void 0;
        }, n.prototype.canRedo = function () {
          return this.undoManager.canRedo();
        }, n.prototype.canUndo = function () {
          return this.undoManager.canUndo();
        }, n.prototype.recordUndoEntry = function (t, e) {
          var n, i, o;
          return o = null != e ? e : {}, i = o.context, n = o.consolidatable, this.undoManager.recordUndoEntry(t, {
            context: i,
            consolidatable: n
          });
        }, n.prototype.redo = function () {
          return this.canRedo() ? this.undoManager.redo() : void 0;
        }, n.prototype.undo = function () {
          return this.canUndo() ? this.undoManager.undo() : void 0;
        }, n;
      }();
    }.call(this), function () {
      var t = function t(_t19, e) {
        function i() {
          this.constructor = _t19;
        }

        for (var o in e) {
          n.call(e, o) && (_t19[o] = e[o]);
        }

        return i.prototype = e.prototype, _t19.prototype = new i(), _t19.__super__ = e.prototype, _t19;
      },
          n = {}.hasOwnProperty;

      e.ManagedAttachment = function (e) {
        function n(t, e) {
          var n;
          this.attachmentManager = t, this.attachment = e, n = this.attachment, this.id = n.id, this.file = n.file;
        }

        return t(n, e), n.prototype.remove = function () {
          return this.attachmentManager.requestRemovalOfAttachment(this.attachment);
        }, n.proxyMethod("attachment.getAttribute"), n.proxyMethod("attachment.hasAttribute"), n.proxyMethod("attachment.setAttribute"), n.proxyMethod("attachment.getAttributes"), n.proxyMethod("attachment.setAttributes"), n.proxyMethod("attachment.isPending"), n.proxyMethod("attachment.isPreviewable"), n.proxyMethod("attachment.getURL"), n.proxyMethod("attachment.getHref"), n.proxyMethod("attachment.getFilename"), n.proxyMethod("attachment.getFilesize"), n.proxyMethod("attachment.getFormattedFilesize"), n.proxyMethod("attachment.getExtension"), n.proxyMethod("attachment.getContentType"), n.proxyMethod("attachment.getFile"), n.proxyMethod("attachment.setFile"), n.proxyMethod("attachment.releaseFile"), n.proxyMethod("attachment.getUploadProgress"), n.proxyMethod("attachment.setUploadProgress"), n;
      }(e.BasicObject);
    }.call(this), function () {
      var t = function t(_t20, e) {
        function i() {
          this.constructor = _t20;
        }

        for (var o in e) {
          n.call(e, o) && (_t20[o] = e[o]);
        }

        return i.prototype = e.prototype, _t20.prototype = new i(), _t20.__super__ = e.prototype, _t20;
      },
          n = {}.hasOwnProperty;

      e.AttachmentManager = function (n) {
        function i(t) {
          var e, n, i;

          for (null == t && (t = []), this.managedAttachments = {}, n = 0, i = t.length; i > n; n++) {
            e = t[n], this.manageAttachment(e);
          }
        }

        return t(i, n), i.prototype.getAttachments = function () {
          var t, e, n, i;
          n = this.managedAttachments, i = [];

          for (e in n) {
            t = n[e], i.push(t);
          }

          return i;
        }, i.prototype.manageAttachment = function (t) {
          var n, i;
          return null != (n = this.managedAttachments)[i = t.id] ? n[i] : n[i] = new e.ManagedAttachment(this, t);
        }, i.prototype.attachmentIsManaged = function (t) {
          return t.id in this.managedAttachments;
        }, i.prototype.requestRemovalOfAttachment = function (t) {
          var e;
          return this.attachmentIsManaged(t) && null != (e = this.delegate) && "function" == typeof e.attachmentManagerDidRequestRemovalOfAttachment ? e.attachmentManagerDidRequestRemovalOfAttachment(t) : void 0;
        }, i.prototype.unmanageAttachment = function (t) {
          var e;
          return e = this.managedAttachments[t.id], delete this.managedAttachments[t.id], e;
        }, i;
      }(e.BasicObject);
    }.call(this), function () {
      var t, n, i, o, r, s, a, u, c, l, h;
      t = e.elementContainsNode, n = e.findChildIndexOfNode, r = e.nodeIsBlockStart, s = e.nodeIsBlockStartComment, o = e.nodeIsBlockContainer, a = e.nodeIsCursorTarget, u = e.nodeIsEmptyTextNode, c = e.nodeIsTextNode, i = e.nodeIsAttachmentElement, l = e.tagName, h = e.walkTree, e.LocationMapper = function () {
        function e(t) {
          this.element = t;
        }

        var p, d, f, g;
        return e.prototype.findLocationFromContainerAndOffset = function (e, i, o) {
          var s, u, l, p, g, m, v;

          for (m = (null != o ? o : {
            strict: !0
          }).strict, u = 0, l = !1, p = {
            index: 0,
            offset: 0
          }, (s = this.findAttachmentElementParentForNode(e)) && (e = s.parentNode, i = n(s)), v = h(this.element, {
            usingFilter: f
          }); v.nextNode();) {
            if (g = v.currentNode, g === e && c(e)) {
              a(g) || (p.offset += i);
              break;
            }

            if (g.parentNode === e) {
              if (u++ === i) break;
            } else if (!t(e, g) && u > 0) break;

            r(g, {
              strict: m
            }) ? (l && p.index++, p.offset = 0, l = !0) : p.offset += d(g);
          }

          return p;
        }, e.prototype.findContainerAndOffsetFromLocation = function (t) {
          var e, i, s, u, l;

          if (0 === t.index && 0 === t.offset) {
            for (e = this.element, u = 0; e.firstChild;) {
              if (e = e.firstChild, o(e)) {
                u = 1;
                break;
              }
            }

            return [e, u];
          }

          if (l = this.findNodeAndOffsetFromLocation(t), i = l[0], s = l[1], i) {
            if (c(i)) 0 === d(i) ? (e = i.parentNode.parentNode, u = n(i.parentNode), a(i, {
              name: "right"
            }) && u++) : (e = i, u = t.offset - s);else {
              if (e = i.parentNode, !r(i.previousSibling) && !o(e)) for (; i === e.lastChild && (i = e, e = e.parentNode, !o(e));) {
                ;
              }
              u = n(i), 0 !== t.offset && u++;
            }
            return [e, u];
          }
        }, e.prototype.findNodeAndOffsetFromLocation = function (t) {
          var e, n, i, o, r, s, u, l;

          for (u = 0, l = this.getSignificantNodesForIndex(t.index), n = 0, i = l.length; i > n; n++) {
            if (e = l[n], o = d(e), t.offset <= u + o) if (c(e)) {
              if (r = e, s = u, t.offset === s && a(r)) break;
            } else r || (r = e, s = u);
            if (u += o, u > t.offset) break;
          }

          return [r, s];
        }, e.prototype.findAttachmentElementParentForNode = function (t) {
          for (; t && t !== this.element;) {
            if (i(t)) return t;
            t = t.parentNode;
          }
        }, e.prototype.getSignificantNodesForIndex = function (t) {
          var e, n, i, o, r;

          for (i = [], r = h(this.element, {
            usingFilter: p
          }), o = !1; r.nextNode();) {
            if (n = r.currentNode, s(n)) {
              if ("undefined" != typeof e && null !== e ? e++ : e = 0, e === t) o = !0;else if (o) break;
            } else o && i.push(n);
          }

          return i;
        }, d = function d(t) {
          var e;
          return t.nodeType === Node.TEXT_NODE ? a(t) ? 0 : (e = t.textContent, e.length) : "br" === l(t) || i(t) ? 1 : 0;
        }, p = function p(t) {
          return g(t) === NodeFilter.FILTER_ACCEPT ? f(t) : NodeFilter.FILTER_REJECT;
        }, g = function g(t) {
          return u(t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }, f = function f(t) {
          return i(t.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }, e;
      }();
    }.call(this), function () {
      var t,
          n,
          i = [].slice;
      t = e.getDOMRange, n = e.setDOMRange, e.PointMapper = function () {
        function e() {}

        return e.prototype.createDOMRangeFromPoint = function (e) {
          var i, o, r, s, a, u, c, l;
          if (c = e.x, l = e.y, document.caretPositionFromPoint) return a = document.caretPositionFromPoint(c, l), r = a.offsetNode, o = a.offset, i = document.createRange(), i.setStart(r, o), i;
          if (document.caretRangeFromPoint) return document.caretRangeFromPoint(c, l);

          if (document.body.createTextRange) {
            s = t();

            try {
              u = document.body.createTextRange(), u.moveToPoint(c, l), u.select();
            } catch (h) {}

            return i = t(), n(s), i;
          }
        }, e.prototype.getClientRectsForDOMRange = function (t) {
          var e, n, o;
          return n = i.call(t.getClientRects()), o = n[0], e = n[n.length - 1], [o, e];
        }, e;
      }();
    }.call(this), function () {
      var t,
          n = function n(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          i = function i(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          o.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty,
          r = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) {
          if (e in this && this[e] === t) return e;
        }

        return -1;
      };

      t = e.getDOMRange, e.SelectionChangeObserver = function (e) {
        function o() {
          this.run = n(this.run, this), this.update = n(this.update, this), this.selectionManagers = [];
        }

        var s;
        return i(o, e), o.prototype.start = function () {
          return this.started ? void 0 : (this.started = !0, "onselectionchange" in document ? document.addEventListener("selectionchange", this.update, !0) : this.run());
        }, o.prototype.stop = function () {
          return this.started ? (this.started = !1, document.removeEventListener("selectionchange", this.update, !0)) : void 0;
        }, o.prototype.registerSelectionManager = function (t) {
          return r.call(this.selectionManagers, t) < 0 ? (this.selectionManagers.push(t), this.start()) : void 0;
        }, o.prototype.unregisterSelectionManager = function (t) {
          var e;
          return this.selectionManagers = function () {
            var n, i, o, r;

            for (o = this.selectionManagers, r = [], n = 0, i = o.length; i > n; n++) {
              e = o[n], e !== t && r.push(e);
            }

            return r;
          }.call(this), 0 === this.selectionManagers.length ? this.stop() : void 0;
        }, o.prototype.notifySelectionManagersOfSelectionChange = function () {
          var t, e, n, i, o;

          for (n = this.selectionManagers, i = [], t = 0, e = n.length; e > t; t++) {
            o = n[t], i.push(o.selectionDidChange());
          }

          return i;
        }, o.prototype.update = function () {
          var e;
          return e = t(), s(e, this.domRange) ? void 0 : (this.domRange = e, this.notifySelectionManagersOfSelectionChange());
        }, o.prototype.reset = function () {
          return this.domRange = null, this.update();
        }, o.prototype.run = function () {
          return this.started ? (this.update(), requestAnimationFrame(this.run)) : void 0;
        }, s = function s(t, e) {
          return (null != t ? t.startContainer : void 0) === (null != e ? e.startContainer : void 0) && (null != t ? t.startOffset : void 0) === (null != e ? e.startOffset : void 0) && (null != t ? t.endContainer : void 0) === (null != e ? e.endContainer : void 0) && (null != t ? t.endOffset : void 0) === (null != e ? e.endOffset : void 0);
        }, o;
      }(e.BasicObject), null == e.selectionChangeObserver && (e.selectionChangeObserver = new e.SelectionChangeObserver());
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          u,
          c,
          l,
          h = function h(t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      },
          p = function p(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          d.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          d = {}.hasOwnProperty;

      i = e.getDOMSelection, n = e.getDOMRange, l = e.setDOMRange, t = e.elementContainsNode, s = e.nodeIsCursorTarget, r = e.innerElementIsActive, o = e.handleEvent, a = e.normalizeRange, u = e.rangeIsCollapsed, c = e.rangesAreEqual, e.SelectionManager = function (d) {
        function f(t) {
          this.element = t, this.selectionDidChange = h(this.selectionDidChange, this), this.didMouseDown = h(this.didMouseDown, this), this.locationMapper = new e.LocationMapper(this.element), this.pointMapper = new e.PointMapper(), this.lockCount = 0, o("mousedown", {
            onElement: this.element,
            withCallback: this.didMouseDown
          });
        }

        return p(f, d), f.prototype.getLocationRange = function (t) {
          var e, i;
          return null == t && (t = {}), e = t.strict === !1 ? this.createLocationRangeFromDOMRange(n(), {
            strict: !1
          }) : t.ignoreLock ? this.currentLocationRange : null != (i = this.lockedLocationRange) ? i : this.currentLocationRange;
        }, f.prototype.setLocationRange = function (t) {
          var e;
          if (!this.lockedLocationRange) return t = a(t), (e = this.createDOMRangeFromLocationRange(t)) ? (l(e), this.updateCurrentLocationRange(t)) : void 0;
        }, f.prototype.setLocationRangeFromPointRange = function (t) {
          var e, n;
          return t = a(t), n = this.getLocationAtPoint(t[0]), e = this.getLocationAtPoint(t[1]), this.setLocationRange([n, e]);
        }, f.prototype.getClientRectAtLocationRange = function (t) {
          var e;
          return (e = this.createDOMRangeFromLocationRange(t)) ? this.getClientRectsForDOMRange(e)[1] : void 0;
        }, f.prototype.locationIsCursorTarget = function (t) {
          var e, n, i;
          return i = this.findNodeAndOffsetFromLocation(t), e = i[0], n = i[1], s(e);
        }, f.prototype.lock = function () {
          return 0 === this.lockCount++ ? (this.updateCurrentLocationRange(), this.lockedLocationRange = this.getLocationRange()) : void 0;
        }, f.prototype.unlock = function () {
          var t;
          return 0 === --this.lockCount && (t = this.lockedLocationRange, this.lockedLocationRange = null, null != t) ? this.setLocationRange(t) : void 0;
        }, f.prototype.clearSelection = function () {
          var t;
          return null != (t = i()) ? t.removeAllRanges() : void 0;
        }, f.prototype.selectionIsCollapsed = function () {
          var t;
          return (null != (t = n()) ? t.collapsed : void 0) === !0;
        }, f.prototype.selectionIsExpanded = function () {
          return !this.selectionIsCollapsed();
        }, f.prototype.createLocationRangeFromDOMRange = function (t, e) {
          var n, i;
          if (null != t && this.domRangeWithinElement(t) && (i = this.findLocationFromContainerAndOffset(t.startContainer, t.startOffset, e))) return t.collapsed || (n = this.findLocationFromContainerAndOffset(t.endContainer, t.endOffset, e)), a([i, n]);
        }, f.proxyMethod("locationMapper.findLocationFromContainerAndOffset"), f.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"), f.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"), f.proxyMethod("pointMapper.createDOMRangeFromPoint"), f.proxyMethod("pointMapper.getClientRectsForDOMRange"), f.prototype.didMouseDown = function () {
          return this.pauseTemporarily();
        }, f.prototype.pauseTemporarily = function () {
          var e, n, i, r;
          return this.paused = !0, n = function (e) {
            return function () {
              var n, o, s;

              for (e.paused = !1, clearTimeout(r), o = 0, s = i.length; s > o; o++) {
                n = i[o], n.destroy();
              }

              return t(document, e.element) ? e.selectionDidChange() : void 0;
            };
          }(this), r = setTimeout(n, 200), i = function () {
            var t, i, r, s;

            for (r = ["mousemove", "keydown"], s = [], t = 0, i = r.length; i > t; t++) {
              e = r[t], s.push(o(e, {
                onElement: document,
                withCallback: n
              }));
            }

            return s;
          }();
        }, f.prototype.selectionDidChange = function () {
          return this.paused || r(this.element) ? void 0 : this.updateCurrentLocationRange();
        }, f.prototype.updateCurrentLocationRange = function (t) {
          var e;
          return (null != t ? t : t = this.createLocationRangeFromDOMRange(n())) && !c(t, this.currentLocationRange) ? (this.currentLocationRange = t, null != (e = this.delegate) && "function" == typeof e.locationRangeDidChange ? e.locationRangeDidChange(this.currentLocationRange.slice(0)) : void 0) : void 0;
        }, f.prototype.createDOMRangeFromLocationRange = function (t) {
          var e, n, i, o;
          return i = this.findContainerAndOffsetFromLocation(t[0]), n = u(t) ? i : null != (o = this.findContainerAndOffsetFromLocation(t[1])) ? o : i, null != i && null != n ? (e = document.createRange(), e.setStart.apply(e, i), e.setEnd.apply(e, n), e) : void 0;
        }, f.prototype.getLocationAtPoint = function (t) {
          var e, n;
          return (e = this.createDOMRangeFromPoint(t)) && null != (n = this.createLocationRangeFromDOMRange(e)) ? n[0] : void 0;
        }, f.prototype.domRangeWithinElement = function (e) {
          return e.collapsed ? t(this.element, e.startContainer) : t(this.element, e.startContainer) && t(this.element, e.endContainer);
        }, f;
      }(e.BasicObject);
    }.call(this), function () {
      var t,
          n,
          i,
          o,
          r = function r(t, e) {
        function n() {
          this.constructor = t;
        }

        for (var i in e) {
          s.call(e, i) && (t[i] = e[i]);
        }

        return n.prototype = e.prototype, t.prototype = new n(), t.__super__ = e.prototype, t;
      },
          s = {}.hasOwnProperty,
          a = [].slice;

      i = e.rangeIsCollapsed, o = e.rangesAreEqual, n = e.objectsAreEqual, t = e.getBlockConfig, e.EditorController = function (s) {
        function u(t) {
          var n, i;
          this.editorElement = t.editorElement, n = t.document, i = t.html, this.selectionManager = new e.SelectionManager(this.editorElement), this.selectionManager.delegate = this, this.composition = new e.Composition(), this.composition.delegate = this, this.attachmentManager = new e.AttachmentManager(this.composition.getAttachments()), this.attachmentManager.delegate = this, this.inputController = new e["Level" + e.config.input.getLevel() + "InputController"](this.editorElement), this.inputController.delegate = this, this.inputController.responder = this.composition, this.compositionController = new e.CompositionController(this.editorElement, this.composition), this.compositionController.delegate = this, this.toolbarController = new e.ToolbarController(this.editorElement.toolbarElement), this.toolbarController.delegate = this, this.editor = new e.Editor(this.composition, this.selectionManager, this.editorElement), null != n ? this.editor.loadDocument(n) : this.editor.loadHTML(i);
        }

        var c;
        return r(u, s), u.prototype.registerSelectionManager = function () {
          return e.selectionChangeObserver.registerSelectionManager(this.selectionManager);
        }, u.prototype.unregisterSelectionManager = function () {
          return e.selectionChangeObserver.unregisterSelectionManager(this.selectionManager);
        }, u.prototype.render = function () {
          return this.compositionController.render();
        }, u.prototype.reparse = function () {
          return this.composition.replaceHTML(this.editorElement.innerHTML);
        }, u.prototype.compositionDidChangeDocument = function () {
          return this.notifyEditorElement("document-change"), this.handlingInput ? void 0 : this.render();
        }, u.prototype.compositionDidChangeCurrentAttributes = function (t) {
          return this.currentAttributes = t, this.toolbarController.updateAttributes(this.currentAttributes), this.updateCurrentActions(), this.notifyEditorElement("attributes-change", {
            attributes: this.currentAttributes
          });
        }, u.prototype.compositionDidPerformInsertionAtRange = function (t) {
          return this.pasting ? this.pastedRange = t : void 0;
        }, u.prototype.compositionShouldAcceptFile = function (t) {
          return this.notifyEditorElement("file-accept", {
            file: t
          });
        }, u.prototype.compositionDidAddAttachment = function (t) {
          var e;
          return e = this.attachmentManager.manageAttachment(t), this.notifyEditorElement("attachment-add", {
            attachment: e
          });
        }, u.prototype.compositionDidEditAttachment = function (t) {
          var e;
          return this.compositionController.rerenderViewForObject(t), e = this.attachmentManager.manageAttachment(t), this.notifyEditorElement("attachment-edit", {
            attachment: e
          }), this.notifyEditorElement("change");
        }, u.prototype.compositionDidChangeAttachmentPreviewURL = function (t) {
          return this.compositionController.invalidateViewForObject(t), this.notifyEditorElement("change");
        }, u.prototype.compositionDidRemoveAttachment = function (t) {
          var e;
          return e = this.attachmentManager.unmanageAttachment(t), this.notifyEditorElement("attachment-remove", {
            attachment: e
          });
        }, u.prototype.compositionDidStartEditingAttachment = function (t, e) {
          return this.attachmentLocationRange = this.composition.document.getLocationRangeOfAttachment(t), this.compositionController.installAttachmentEditorForAttachment(t, e), this.selectionManager.setLocationRange(this.attachmentLocationRange);
        }, u.prototype.compositionDidStopEditingAttachment = function () {
          return this.compositionController.uninstallAttachmentEditor(), this.attachmentLocationRange = null;
        }, u.prototype.compositionDidRequestChangingSelectionToLocationRange = function (t) {
          return !this.loadingSnapshot || this.isFocused() ? (this.requestedLocationRange = t, this.compositionRevisionWhenLocationRangeRequested = this.composition.revision, this.handlingInput ? void 0 : this.render()) : void 0;
        }, u.prototype.compositionWillLoadSnapshot = function () {
          return this.loadingSnapshot = !0;
        }, u.prototype.compositionDidLoadSnapshot = function () {
          return this.compositionController.refreshViewCache(), this.render(), this.loadingSnapshot = !1;
        }, u.prototype.getSelectionManager = function () {
          return this.selectionManager;
        }, u.proxyMethod("getSelectionManager().setLocationRange"), u.proxyMethod("getSelectionManager().getLocationRange"), u.prototype.attachmentManagerDidRequestRemovalOfAttachment = function (t) {
          return this.removeAttachment(t);
        }, u.prototype.compositionControllerWillSyncDocumentView = function () {
          return this.inputController.editorWillSyncDocumentView(), this.selectionManager.lock(), this.selectionManager.clearSelection();
        }, u.prototype.compositionControllerDidSyncDocumentView = function () {
          return this.inputController.editorDidSyncDocumentView(), this.selectionManager.unlock(), this.updateCurrentActions(), this.notifyEditorElement("sync");
        }, u.prototype.compositionControllerDidRender = function () {
          return null != this.requestedLocationRange && (this.compositionRevisionWhenLocationRangeRequested === this.composition.revision && this.selectionManager.setLocationRange(this.requestedLocationRange), this.requestedLocationRange = null, this.compositionRevisionWhenLocationRangeRequested = null), this.renderedCompositionRevision !== this.composition.revision && (this.runEditorFilters(), this.composition.updateCurrentAttributes(), this.notifyEditorElement("render")), this.renderedCompositionRevision = this.composition.revision;
        }, u.prototype.compositionControllerDidFocus = function () {
          return this.toolbarController.hideDialog(), this.notifyEditorElement("focus");
        }, u.prototype.compositionControllerDidBlur = function () {
          return this.notifyEditorElement("blur");
        }, u.prototype.compositionControllerDidSelectAttachment = function (t, e) {
          return this.toolbarController.hideDialog(), this.composition.editAttachment(t, e);
        }, u.prototype.compositionControllerDidRequestDeselectingAttachment = function (t) {
          var e, n;
          return e = null != (n = this.attachmentLocationRange) ? n : this.composition.document.getLocationRangeOfAttachment(t), this.selectionManager.setLocationRange(e[1]);
        }, u.prototype.compositionControllerWillUpdateAttachment = function (t) {
          return this.editor.recordUndoEntry("Edit Attachment", {
            context: t.id,
            consolidatable: !0
          });
        }, u.prototype.compositionControllerDidRequestRemovalOfAttachment = function (t) {
          return this.removeAttachment(t);
        }, u.prototype.inputControllerWillHandleInput = function () {
          return this.handlingInput = !0, this.requestedRender = !1;
        }, u.prototype.inputControllerDidRequestRender = function () {
          return this.requestedRender = !0;
        }, u.prototype.inputControllerDidHandleInput = function () {
          return this.handlingInput = !1, this.requestedRender ? (this.requestedRender = !1, this.render()) : void 0;
        }, u.prototype.inputControllerDidAllowUnhandledInput = function () {
          return this.notifyEditorElement("change");
        }, u.prototype.inputControllerDidRequestReparse = function () {
          return this.reparse();
        }, u.prototype.inputControllerWillPerformTyping = function () {
          return this.recordTypingUndoEntry();
        }, u.prototype.inputControllerWillPerformFormatting = function (t) {
          return this.recordFormattingUndoEntry(t);
        }, u.prototype.inputControllerWillCutText = function () {
          return this.editor.recordUndoEntry("Cut");
        }, u.prototype.inputControllerWillPaste = function (t) {
          return this.editor.recordUndoEntry("Paste"), this.pasting = !0, this.notifyEditorElement("before-paste", {
            paste: t
          });
        }, u.prototype.inputControllerDidPaste = function (t) {
          return t.range = this.pastedRange, this.pastedRange = null, this.pasting = null, this.notifyEditorElement("paste", {
            paste: t
          });
        }, u.prototype.inputControllerWillMoveText = function () {
          return this.editor.recordUndoEntry("Move");
        }, u.prototype.inputControllerWillAttachFiles = function () {
          return this.editor.recordUndoEntry("Drop Files");
        }, u.prototype.inputControllerWillPerformUndo = function () {
          return this.editor.undo();
        }, u.prototype.inputControllerWillPerformRedo = function () {
          return this.editor.redo();
        }, u.prototype.inputControllerDidReceiveKeyboardCommand = function (t) {
          return this.toolbarController.applyKeyboardCommand(t);
        }, u.prototype.inputControllerDidStartDrag = function () {
          return this.locationRangeBeforeDrag = this.selectionManager.getLocationRange();
        }, u.prototype.inputControllerDidReceiveDragOverPoint = function (t) {
          return this.selectionManager.setLocationRangeFromPointRange(t);
        }, u.prototype.inputControllerDidCancelDrag = function () {
          return this.selectionManager.setLocationRange(this.locationRangeBeforeDrag), this.locationRangeBeforeDrag = null;
        }, u.prototype.locationRangeDidChange = function (t) {
          return this.composition.updateCurrentAttributes(), this.updateCurrentActions(), this.attachmentLocationRange && !o(this.attachmentLocationRange, t) && this.composition.stopEditingAttachment(), this.notifyEditorElement("selection-change");
        }, u.prototype.toolbarDidClickButton = function () {
          return this.getLocationRange() ? void 0 : this.setLocationRange({
            index: 0,
            offset: 0
          });
        }, u.prototype.toolbarDidInvokeAction = function (t) {
          return this.invokeAction(t);
        }, u.prototype.toolbarDidToggleAttribute = function (t) {
          return this.recordFormattingUndoEntry(t), this.composition.toggleCurrentAttribute(t), this.render(), this.selectionFrozen ? void 0 : this.editorElement.focus();
        }, u.prototype.toolbarDidUpdateAttribute = function (t, e) {
          return this.recordFormattingUndoEntry(t), this.composition.setCurrentAttribute(t, e), this.render(), this.selectionFrozen ? void 0 : this.editorElement.focus();
        }, u.prototype.toolbarDidRemoveAttribute = function (t) {
          return this.recordFormattingUndoEntry(t), this.composition.removeCurrentAttribute(t), this.render(), this.selectionFrozen ? void 0 : this.editorElement.focus();
        }, u.prototype.toolbarWillShowDialog = function () {
          return this.composition.expandSelectionForEditing(), this.freezeSelection();
        }, u.prototype.toolbarDidShowDialog = function (t) {
          return this.notifyEditorElement("toolbar-dialog-show", {
            dialogName: t
          });
        }, u.prototype.toolbarDidHideDialog = function (t) {
          return this.thawSelection(), this.editorElement.focus(), this.notifyEditorElement("toolbar-dialog-hide", {
            dialogName: t
          });
        }, u.prototype.freezeSelection = function () {
          return this.selectionFrozen ? void 0 : (this.selectionManager.lock(), this.composition.freezeSelection(), this.selectionFrozen = !0, this.render());
        }, u.prototype.thawSelection = function () {
          return this.selectionFrozen ? (this.composition.thawSelection(), this.selectionManager.unlock(), this.selectionFrozen = !1, this.render()) : void 0;
        }, u.prototype.actions = {
          undo: {
            test: function test() {
              return this.editor.canUndo();
            },
            perform: function perform() {
              return this.editor.undo();
            }
          },
          redo: {
            test: function test() {
              return this.editor.canRedo();
            },
            perform: function perform() {
              return this.editor.redo();
            }
          },
          link: {
            test: function test() {
              return this.editor.canActivateAttribute("href");
            }
          },
          increaseNestingLevel: {
            test: function test() {
              return this.editor.canIncreaseNestingLevel();
            },
            perform: function perform() {
              return this.editor.increaseNestingLevel() && this.render();
            }
          },
          decreaseNestingLevel: {
            test: function test() {
              return this.editor.canDecreaseNestingLevel();
            },
            perform: function perform() {
              return this.editor.decreaseNestingLevel() && this.render();
            }
          },
          attachFiles: {
            test: function test() {
              return !0;
            },
            perform: function perform() {
              return e.config.input.pickFiles(this.editor.insertFiles);
            }
          }
        }, u.prototype.canInvokeAction = function (t) {
          var e, n;
          return this.actionIsExternal(t) ? !0 : !!(null != (e = this.actions[t]) && null != (n = e.test) ? n.call(this) : void 0);
        }, u.prototype.invokeAction = function (t) {
          var e, n;
          return this.actionIsExternal(t) ? this.notifyEditorElement("action-invoke", {
            actionName: t
          }) : null != (e = this.actions[t]) && null != (n = e.perform) ? n.call(this) : void 0;
        }, u.prototype.actionIsExternal = function (t) {
          return /^x-./.test(t);
        }, u.prototype.getCurrentActions = function () {
          var t, e;
          e = {};

          for (t in this.actions) {
            e[t] = this.canInvokeAction(t);
          }

          return e;
        }, u.prototype.updateCurrentActions = function () {
          var t;
          return t = this.getCurrentActions(), n(t, this.currentActions) ? void 0 : (this.currentActions = t, this.toolbarController.updateActions(this.currentActions), this.notifyEditorElement("actions-change", {
            actions: this.currentActions
          }));
        }, u.prototype.runEditorFilters = function () {
          var t, e, n, i, o, r, s, a;

          for (a = this.composition.getSnapshot(), o = this.editor.filters, n = 0, i = o.length; i > n; n++) {
            e = o[n], t = a.document, s = a.selectedRange, a = null != (r = e.call(this.editor, a)) ? r : {}, null == a.document && (a.document = t), null == a.selectedRange && (a.selectedRange = s);
          }

          return c(a, this.composition.getSnapshot()) ? void 0 : this.composition.loadSnapshot(a);
        }, c = function c(t, e) {
          return o(t.selectedRange, e.selectedRange) && t.document.isEqualTo(e.document);
        }, u.prototype.updateInputElement = function () {
          var t, n;
          return t = this.compositionController.getSerializableElement(), n = e.serializeToContentType(t, "text/html"), this.editorElement.setInputElementValue(n);
        }, u.prototype.notifyEditorElement = function (t, e) {
          switch (t) {
            case "document-change":
              this.documentChangedSinceLastRender = !0;
              break;

            case "render":
              this.documentChangedSinceLastRender && (this.documentChangedSinceLastRender = !1, this.notifyEditorElement("change"));
              break;

            case "change":
            case "attachment-add":
            case "attachment-edit":
            case "attachment-remove":
              this.updateInputElement();
          }

          return this.editorElement.notify(t, e);
        }, u.prototype.removeAttachment = function (t) {
          return this.editor.recordUndoEntry("Delete Attachment"), this.composition.removeAttachment(t), this.render();
        }, u.prototype.recordFormattingUndoEntry = function (e) {
          var n, o;
          return n = t(e), o = this.selectionManager.getLocationRange(), n || !i(o) ? this.editor.recordUndoEntry("Formatting", {
            context: this.getUndoContext(),
            consolidatable: !0
          }) : void 0;
        }, u.prototype.recordTypingUndoEntry = function () {
          return this.editor.recordUndoEntry("Typing", {
            context: this.getUndoContext(this.currentAttributes),
            consolidatable: !0
          });
        }, u.prototype.getUndoContext = function () {
          var t;
          return t = 1 <= arguments.length ? a.call(arguments, 0) : [], [this.getLocationContext(), this.getTimeContext()].concat(a.call(t));
        }, u.prototype.getLocationContext = function () {
          var t;
          return t = this.selectionManager.getLocationRange(), i(t) ? t[0].index : t;
        }, u.prototype.getTimeContext = function () {
          return e.config.undoInterval > 0 ? Math.floor(new Date().getTime() / e.config.undoInterval) : 0;
        }, u.prototype.isFocused = function () {
          var t;
          return this.editorElement === (null != (t = this.editorElement.ownerDocument) ? t.activeElement : void 0);
        }, u;
      }(e.Controller);
    }.call(this), function () {
      var t, n, i, o, r, s;
      n = e.browser, r = e.makeElement, s = e.triggerEvent, i = e.handleEvent, o = e.handleEventOnce, t = e.AttachmentView.attachmentSelector, e.registerElement("trix-editor", function () {
        var a, u, c, l, h, p, d, f;
        return p = 0, u = function u(t) {
          return !document.querySelector(":focus") && t.hasAttribute("autofocus") && document.querySelector("[autofocus]") === t ? t.focus() : void 0;
        }, d = function d(t) {
          return t.hasAttribute("contenteditable") ? void 0 : (t.setAttribute("contenteditable", ""), o("focus", {
            onElement: t,
            withCallback: function withCallback() {
              return c(t);
            }
          }));
        }, a = function a(t) {
          return t.hasAttribute("role") ? void 0 : t.setAttribute("role", "textbox");
        }, c = function c(t) {
          return h(t), f(t);
        }, h = function h(t) {
          return ("function" == typeof document.queryCommandSupported ? document.queryCommandSupported("enableObjectResizing") : void 0) ? (document.execCommand("enableObjectResizing", !1, !1), i("mscontrolselect", {
            onElement: t,
            preventDefault: !0
          })) : void 0;
        }, f = function f() {
          var t;
          return ("function" == typeof document.queryCommandSupported ? document.queryCommandSupported("DefaultParagraphSeparator") : void 0) && (t = e.config.blockAttributes["default"].tagName, "div" === t || "p" === t) ? document.execCommand("DefaultParagraphSeparator", !1, t) : void 0;
        }, l = function () {
          return n.forcesObjectResizing ? {
            display: "inline",
            width: "auto"
          } : {
            display: "inline-block",
            width: "1px"
          };
        }(), {
          defaultCSS: "%t {\n  display: block;\n}\n\n%t:empty:not(:focus)::before {\n  content: attr(placeholder);\n  color: graytext;\n  cursor: text;\n}\n\n%t a[contenteditable=false] {\n  cursor: text;\n}\n\n%t img {\n  max-width: 100%;\n  height: auto;\n}\n\n%t " + t + " figcaption textarea {\n  resize: none;\n}\n\n%t " + t + " figcaption textarea.trix-autoresize-clone {\n  position: absolute;\n  left: -9999px;\n  max-height: 0px;\n}\n\n%t " + t + " figcaption[data-trix-placeholder]:empty::before {\n  content: attr(data-trix-placeholder);\n  color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n  display: " + l.display + " !important;\n  width: " + l.width + " !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n  vertical-align: top !important;\n  margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n  vertical-align: bottom !important;\n  margin-right: -1px !important;\n}",
          trixId: {
            get: function get() {
              return this.hasAttribute("trix-id") ? this.getAttribute("trix-id") : (this.setAttribute("trix-id", ++p), this.trixId);
            }
          },
          toolbarElement: {
            get: function get() {
              var t, e, n;
              return this.hasAttribute("toolbar") ? null != (e = this.ownerDocument) ? e.getElementById(this.getAttribute("toolbar")) : void 0 : this.parentNode ? (n = "trix-toolbar-" + this.trixId, this.setAttribute("toolbar", n), t = r("trix-toolbar", {
                id: n
              }), this.parentNode.insertBefore(t, this), t) : void 0;
            }
          },
          inputElement: {
            get: function get() {
              var t, e, n;
              return this.hasAttribute("input") ? null != (n = this.ownerDocument) ? n.getElementById(this.getAttribute("input")) : void 0 : this.parentNode ? (e = "trix-input-" + this.trixId, this.setAttribute("input", e), t = r("input", {
                type: "hidden",
                id: e
              }), this.parentNode.insertBefore(t, this.nextElementSibling), t) : void 0;
            }
          },
          editor: {
            get: function get() {
              var t;
              return null != (t = this.editorController) ? t.editor : void 0;
            }
          },
          name: {
            get: function get() {
              var t;
              return null != (t = this.inputElement) ? t.name : void 0;
            }
          },
          value: {
            get: function get() {
              var t;
              return null != (t = this.inputElement) ? t.value : void 0;
            },
            set: function set(t) {
              var e;
              return this.defaultValue = t, null != (e = this.editor) ? e.loadHTML(this.defaultValue) : void 0;
            }
          },
          notify: function notify(t, e) {
            return this.editorController ? s("trix-" + t, {
              onElement: this,
              attributes: e
            }) : void 0;
          },
          setInputElementValue: function setInputElementValue(t) {
            var e;
            return null != (e = this.inputElement) ? e.value = t : void 0;
          },
          initialize: function initialize() {
            return d(this), a(this);
          },
          connect: function connect() {
            return this.hasAttribute("data-trix-internal") ? void 0 : (this.editorController || (s("trix-before-initialize", {
              onElement: this
            }), this.editorController = new e.EditorController({
              editorElement: this,
              html: this.defaultValue = this.value
            }), requestAnimationFrame(function (t) {
              return function () {
                return s("trix-initialize", {
                  onElement: t
                });
              };
            }(this))), this.editorController.registerSelectionManager(), this.registerResetListener(), u(this));
          },
          disconnect: function disconnect() {
            var t;
            return null != (t = this.editorController) && t.unregisterSelectionManager(), this.unregisterResetListener();
          },
          registerResetListener: function registerResetListener() {
            return this.resetListener = this.resetBubbled.bind(this), window.addEventListener("reset", this.resetListener, !1);
          },
          unregisterResetListener: function unregisterResetListener() {
            return window.removeEventListener("reset", this.resetListener, !1);
          },
          resetBubbled: function resetBubbled(t) {
            var e;
            return t.target !== (null != (e = this.inputElement) ? e.form : void 0) || t.defaultPrevented ? void 0 : this.reset();
          },
          reset: function reset() {
            return this.value = this.defaultValue;
          }
        };
      }());
    }.call(this), function () {}.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}.call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function visit(t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function clearCache() {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function setProgressBarDelay(t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
          r,
          n,
          o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};

        for (e in t) {
          n = t[e], r[e] = n;
        }

        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;

          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function get() {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;

        for (r = "", t = e = 1; 36 >= e; t = ++e) {
          r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        }

        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }

        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function r(t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function e(t) {
          return n(t, "/") ? t : t + "/";
        }, o = function o(t, e) {
          return t.slice(0, e.length) === e;
        }, n = function n(t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t, e) {
        return function () {
          return _t.apply(e, arguments);
        };
      };

      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }

        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t2, e) {
        return function () {
          return _t2.apply(e, arguments);
        };
      };

      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }

        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function t(_t3, e) {
        return function () {
          return _t3.apply(e, arguments);
        };
      };

      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }

        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();

            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t4, e) {
        return function () {
          return _t4.apply(e, arguments);
        };
      };

      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;

          for (this.elements = {}, n = 0, a = t.length; a > n; n++) {
            u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
              type: i(u),
              tracked: o(u),
              elements: []
            }, r.elements.push(u));
          }
        }

        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];

            for (t in r) {
              e = r[t].tracked, e && n.push(t);
            }

            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];

          for (n in o) {
            i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          }

          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;

          for (e in n) {
            o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          }

          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;

          for (o in i) {
            n = i[o].elements, e(n[0], t) && (r = n[0]);
          }

          return r;
        }, i = function i(t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function o(t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function r(t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function n(t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function e(t, _e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === _e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }

        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;

          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) {
            e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          }

          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;

      e.Renderer = function () {
        function e() {}

        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
                o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function r(t, e) {
          var r, n, o, i, s, a, u;

          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) {
            s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          }

          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
          r,
          n = function n(t, e) {
        function r() {
          this.constructor = t;
        }

        for (var n in e) {
          o.call(e, n) && (t[n] = e[n]);
        }

        return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }

        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          }

          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.removeChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;

          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) {
            i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          }

          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;

          for (u = [], o = 0, i = t.length; i > o; o++) {
            a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          }

          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;

          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) {
            n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          }

          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function t(_t5) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", _t5.id), {
          element: e,
          permanentElement: _t5
        };
      }, r = function r(t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function t(_t6, e) {
        function n() {
          this.constructor = _t6;
        }

        for (var o in e) {
          r.call(e, o) && (_t6[o] = e[o]);
        }

        return n.prototype = e.prototype, _t6.prototype = new n(), _t6.__super__ = e.prototype, _t6;
      },
          r = {}.hasOwnProperty;

      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }

        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;

          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) {
            o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          }

          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }

        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t7, e) {
        return function () {
          return _t7.apply(e, arguments);
        };
      };

      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }

        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;

          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) {
            e = n[t], o.push(delete this.snapshots[e]);
          }

          return o;
        }, r = function r(t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t8, e) {
        return function () {
          return _t8.apply(e, arguments);
        };
      };

      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }

        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function n(t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";

            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t9, e) {
        return function () {
          return _t9.apply(e, arguments);
        };
      };

      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }

        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) {
          if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
        }
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function r() {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function t() {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function n() {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-8e0552bd0ff2017894db.js.map