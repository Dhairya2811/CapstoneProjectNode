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

/***/ "./src/components/UsersAndData/Data.js":
/*!*********************************************!*\
  !*** ./src/components/UsersAndData/Data.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LoadingComponent_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LoadingComponent/Loading */ \"./src/components/LoadingComponent/Loading.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar Data = function Data(_ref) {\n  var data = _ref.data;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),\n    _useState2 = _slicedToArray(_useState, 2),\n    nextPageNo = _useState2[0],\n    setNextPageNo = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState4 = _slicedToArray(_useState3, 2),\n    items = _useState4[0],\n    setItems = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState6 = _slicedToArray(_useState5, 2),\n    loading = _useState6[0],\n    setLoading = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n    _useState8 = _slicedToArray(_useState7, 2),\n    showLoadMore = _useState8[0],\n    setShowLoadMore = _useState8[1];\n\n  // style ---------------------------------------------------------------------------------------------------------------------------------------------\n  // desktop style -------------------------------------------------------------------------------------------------------------------------------------\n\n  var itemStyle = {\n    display: \"grid\",\n    gridTemplateColumns: \"29.5% 69.5%\",\n    gap: \"1%\",\n    backgroundColor: \"white\",\n    borderRadius: \"1em\",\n    padding: \"1em 5%\",\n    marginTop: \"1em\"\n  };\n  var imageDiv = {\n    backgroundColor: \"red\",\n    width: \"100%\",\n    height: \"10em\"\n  };\n  var imgStyle = {\n    borderRadius: \"10px 10px 0 0\",\n    backgroundSize: 'contain',\n    width: \"auto\",\n    maxWidth: \"10em\",\n    height: \"auto\",\n    maxHeight: \"10em\"\n  };\n  var detailsDiv = {\n    // backgroundColor: \"yellow\",\n    width: \"100%\",\n    height: \"5em\"\n  };\n\n  // style completed -----------------------------------------------------------------------------------------------------------------------------------\n\n  var loadMoreData = function loadMoreData() {\n    console.log(\"load more fun call\");\n    setLoading(true);\n    fetch(\"/getAllItems?page=\" + nextPageNo).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      setItems(items.concat(res.response));\n      setNextPageNo(res.nextPage);\n      if (res.response.length < 10) {\n        setShowLoadMore(false);\n      }\n      setLoading(false);\n    });\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    loadMoreData();\n  }, []);\n\n  // work on the detials page.\n  var showItem = function showItem(category, deal, dealPrice, deal_title, description, image, imageName, name, price, quantity, rowid, title) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: itemStyle\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: imageDiv\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: _objectSpread(_objectSpread({}, imgStyle), {}, {\n        background: \"transparent url(\".concat(image, \") no-repeat center\")\n      })\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: detailsDiv\n    }));\n  };\n  var returnContent = function returnContent() {\n    if (loading) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LoadingComponent_Loading__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, items.map(function (item) {\n        return showItem(item.category, item.deal, item.dealPrice, item.deal_title, item.description, item.image, item.imageName, item.name, item.price, item.quantity, item.rowid, item.title);\n      }), showLoadMore ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n        type: \"button\",\n        value: \"Load More\",\n        className: \"btn\",\n        onClick: function onClick() {\n          return loadMoreData();\n        }\n      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null));\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, returnContent());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);\n\n//# sourceURL=webpack://capstoneprojectnode/./src/components/UsersAndData/Data.js?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5c49675fe20454e1c0f6")
/******/ })();
/******/ 
/******/ }
;