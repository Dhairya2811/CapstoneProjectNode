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

/***/ "./src/components/UsersAndData/UsersAndData.js":
/*!*****************************************************!*\
  !*** ./src/components/UsersAndData/UsersAndData.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _Error404_Error404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Error404/Error404 */ \"./src/components/Error404/Error404.js\");\n/* harmony import */ var _LoadingComponent_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoadingComponent/Loading */ \"./src/components/LoadingComponent/Loading.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ \"./src/components/UsersAndData/User.js\");\n/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Data */ \"./src/components/UsersAndData/Data.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar UsersAndData = function UsersAndData() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"user\"),\n    _useState2 = _slicedToArray(_useState, 2),\n    page = _useState2[0],\n    setPage = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    _useState4 = _slicedToArray(_useState3, 2),\n    firstTime = _useState4[0],\n    setFirstTime = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState6 = _slicedToArray(_useState5, 2),\n    admin = _useState6[0],\n    setAdmin = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n    _useState8 = _slicedToArray(_useState7, 2),\n    username = _useState8[0],\n    setUserName = _useState8[1];\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n    _useState10 = _slicedToArray(_useState9, 2),\n    blocked = _useState10[0],\n    setBlocked = _useState10[1];\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n    _useState12 = _slicedToArray(_useState11, 2),\n    loading = _useState12[0],\n    setLoading = _useState12[1];\n\n  // Style -------------------------------------------------------------------------------------------------------------------------------------------------------------\n  // Desktop Style -----------------------------------------------------------------------------------------------------------------------------------------------------\n  var UsersAndDataContainer = {\n    height: \"70vh\",\n    width: \"100%\",\n    color: \"#003A56\"\n  };\n  var UsersAndDataContainerBody = {\n    padding: \"1em 10%\"\n  };\n  var customRadioButton = {\n    display: \"grid\",\n    gridTemplateColumns: \"1fr 1fr\",\n    textAlign: \"center\"\n  };\n  var optionContainer = {\n    position: \"relative\"\n  };\n  var underline = {\n    position: \"absolute\",\n    bottom: -5,\n    left: 0,\n    right: 0,\n    height: 5,\n    backgroundColor: \"transparent\",\n    transform: \"translateX(\".concat(firstTime % 2 == 0 ? \"-100\" : \"100\", \"%)\"),\n    transition: \"transform 0.3s ease-in-out\",\n    borderRadius: \"3px\"\n  };\n  var underlineSelected = {\n    backgroundColor: \"#003A56\",\n    transform: \"translateX(0%)\"\n  };\n  var formCheckInput = {\n    display: \"none\"\n  };\n  var formCheckLabel = {\n    cursor: \"pointer\"\n  };\n\n  // Done with the style -----------------------------------------------------------------------------------------------------------------------------------------------\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setLoading(true);\n    var pathArr = location.pathname.split(\"/\");\n    if (pathArr[2] == \"search\") {\n      fetch(\"/UsersAndData/adminSearch/\".concat(pathArr[3])).then(function (res) {\n        return res.json();\n      }).then(function (res) {\n        var res = res.resp;\n        console.log(res);\n        setLoading(false);\n      });\n    } else {\n      setLoading(false);\n    }\n    var user = JSON.parse(sessionStorage.getItem(\"user\"));\n    setUserName(user.username);\n    setBlocked(user.blocked);\n    setAdmin(user.admin);\n  }, []);\n  var handleChange = function handleChange(event) {\n    var viewPage = event.target.value;\n    setPage(viewPage);\n  };\n  var styleTransform = function styleTransform() {\n    var val = firstTime + 1;\n    setFirstTime(val);\n  };\n  var showComponent = function showComponent() {\n    if (!loading) {\n      if (admin == 1 && blocked == 0) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          style: UsersAndDataContainer\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          style: customRadioButton\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          key: \"user\",\n          style: optionContainer\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Check, {\n          type: \"radio\",\n          id: \"user\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Check.Input, {\n          type: \"radio\",\n          id: \"user\",\n          value: \"user\",\n          checked: page === \"user\",\n          onChange: handleChange,\n          style: formCheckInput\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Check.Label, {\n          style: formCheckLabel,\n          onClick: styleTransform\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"User\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          style: page === \"user\" ? _objectSpread(_objectSpread({}, underline), underlineSelected) : underline\n        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          key: \"data\",\n          style: optionContainer\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Check, {\n          type: \"radio\",\n          id: \"data\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Check.Input, {\n          type: \"radio\",\n          id: \"data\",\n          value: \"data\",\n          checked: page === \"data\",\n          onChange: handleChange,\n          style: formCheckInput\n        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Check.Label, {\n          style: formCheckLabel,\n          onClick: styleTransform\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"Data\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          style: page === \"data\" ? _objectSpread(_objectSpread({}, underline), underlineSelected) : underline\n        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          style: UsersAndDataContainerBody\n        }, page == \"data\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Data__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))));\n      } else if (blocked == 1) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Error404_Error404__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          errorMessage: \"Your account has been blocked by an admin.\",\n          linkAvailable: \"true\"\n        });\n      } else {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Error404_Error404__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          linkAvailable: true\n        });\n      }\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LoadingComponent_Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null);\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showComponent());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersAndData);\n\n//# sourceURL=webpack://capstoneprojectnode/./src/components/UsersAndData/UsersAndData.js?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6bde8d1c6b60a8276d0c")
/******/ })();
/******/ 
/******/ }
;