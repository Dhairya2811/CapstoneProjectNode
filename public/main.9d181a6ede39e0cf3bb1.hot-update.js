"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/components/SignIn/SignIn.js":
/*!*****************************************!*\
  !*** ./src/components/SignIn/SignIn.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Error404_Error404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Error404/Error404 */ \"./src/components/Error404/Error404.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar SignIn = /*#__PURE__*/function (_Component) {\n  _inherits(SignIn, _Component);\n  var _super = _createSuper(SignIn);\n  function SignIn(props) {\n    var _this;\n    _classCallCheck(this, SignIn);\n    _this = _super.call(this, props);\n    _this.submitBtnClick = _this.submitBtnClick.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n  _createClass(SignIn, [{\n    key: \"submitBtnClick\",\n    value: function submitBtnClick(event) {\n      var userName = event.target[0].value;\n      var password = event.target[1].value;\n      var goodUserName = false;\n      var goodPassword = false;\n      if (String(userName).trim().length !== 0) {\n        goodUserName = true;\n        document.getElementById(\"err\").style.display = \"none\";\n      } else {\n        goodUserName = false;\n        var errdiv = document.getElementById(\"err\");\n        errdiv.style.display = \"block\";\n        errdiv.innerHTML = \"Please enter user name\";\n      }\n      if (String(password).trim().length !== 0) {\n        goodPassword = true;\n        document.getElementById(\"err\").style.display = \"none\";\n      } else {\n        goodPassword = false;\n        var _errdiv = document.getElementById(\"err\");\n        _errdiv.style.display = \"block\";\n        _errdiv.innerHTML = \"Please enter password\";\n      }\n      if (goodUserName && goodPassword) {\n        fetch(\"/signIn\", {\n          method: \"post\",\n          headers: {\n            \"Content-Type\": \"application/json\"\n          },\n          credentials: \"include\",\n          body: JSON.stringify({\n            userName: userName,\n            password: password\n          })\n        }).then(function (res) {\n          return res.text();\n        }).then(function (res) {\n          if (res == \"incorrect username\") {\n            var _errdiv2 = document.getElementById(\"err\");\n            _errdiv2.style.display = \"block\";\n            _errdiv2.innerHTML = \"Can not find account with User Name \".concat(userName, \".\");\n          } else if (res == \"incorrect password\") {\n            var _errdiv3 = document.getElementById(\"err\");\n            _errdiv3.style.display = \"block\";\n            _errdiv3.innerHTML = \"Incorrect Password.\";\n          } else {\n            console.log(\"correct\");\n            var _errdiv4 = document.getElementById(\"err\");\n            _errdiv4.style.display = \"none\";\n            sessionStorage.setItem(\"user\", {\n              username: useName,\n              blocked: 0,\n              admin: 0\n            });\n            window.location.href = \"/\";\n          }\n        });\n      }\n      event.preventDefault();\n    }\n  }, {\n    key: \"returnFunction\",\n    value: function returnFunction() {\n      if (sessionStorage.getItem(\"username\") == null) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          className: \"FormPage d-flex justify-content-center\",\n          id: \"login_page\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n          onSubmit: this.submitBtnClick\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          className: \"alert alert-danger\",\n          id: \"err\",\n          style: {\n            display: \"none\"\n          }\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          className: \"signin-username\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", null, \" User Name \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n          type: \"text\",\n          placeholder: \"User Name\",\n          className: \"form-control\",\n          autoFocus: true\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          className: \"signin-password\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", null, \" Password \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n          type: \"password\",\n          placeholder: \"password\",\n          className: \"form-control\"\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n          type: \"submit\",\n          className: \"btn btn-primary login_submit_btn\",\n          value: \"Submit\"\n        })));\n      } else {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Error404_Error404__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          errorMessage: \"You are already sign in.\",\n          linkAvailable: \"true\"\n        });\n      }\n      // console.log(sessionStorage.getItem(\"username\"))\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var returnfunction = this.returnFunction();\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"d-flex justify-content-center\"\n      }, this.returnFunction());\n    }\n  }]);\n  return SignIn;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);\n\n//# sourceURL=webpack://capstoneprojectnode/./src/components/SignIn/SignIn.js?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ea684e2c3ce15870c203")
/******/ })();
/******/ 
/******/ }
;