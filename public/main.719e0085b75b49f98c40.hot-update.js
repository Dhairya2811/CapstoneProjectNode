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

/***/ "./src/components/HigestSell/HigestSell.js":
/*!*************************************************!*\
  !*** ./src/components/HigestSell/HigestSell.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Error404_Error404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Error404/Error404 */ \"./src/components/Error404/Error404.js\");\n/* harmony import */ var _LoadingComponent_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoadingComponent/Loading */ \"./src/components/LoadingComponent/Loading.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Table.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Collapse.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar HigestSell = function HigestSell() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    admin = _useState2[0],\n    setAdmin = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n    _useState4 = _slicedToArray(_useState3, 2),\n    loading = _useState4[0],\n    setLoading = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n    _useState6 = _slicedToArray(_useState5, 2),\n    data = _useState6[0],\n    setData = _useState6[1];\n  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();\n\n  // Style ------------------------------------------------------------------------------------------------\n  // Desktop Style ----------------------------------------------------------------------------------------\n  var HigestSellContainer = {\n    height: \"70vh\",\n    width: \"100%\",\n    padding: \"0 10%\",\n    color: \"#003A56\"\n  };\n  // Style Completed --------------------------------------------------------------------------------------\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setLoading(true);\n    fetch(\"/userInfo\", {\n      method: \"post\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      credentials: \"include\",\n      body: JSON.stringify({\n        username: sessionStorage.getItem(\"username\")\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      setAdmin(Boolean(res.admin));\n    });\n    fetch(\"/higestSellReq\").then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      setLoading(false);\n      setData(res);\n    });\n  }, [location]);\n  var rowClick = function rowClick(rowid, sellername) {\n    setLoading(true);\n    toggleRow(rowid);\n    fetch(\"/higestSellReqDetails\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        sellername: sellername\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      var userData = data;\n      for (var i = 0; i < userData.length; i++) {\n        if (userData[i].sellername == sellername) {\n          userData[i].detailList = res;\n          break;\n        }\n      }\n      setLoading(false);\n    });\n  };\n  var showDetails = function showDetails(details) {\n    console.log(details);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, details.forEach(function (details) {\n      /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, details.buyername), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", null, details.price)));\n    }));\n  };\n  var showContent = function showContent() {\n    if (loading) {\n      /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LoadingComponent_Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null);\n    } else {\n      if (admin) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          style: HigestSellContainer\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          striped: true,\n          bordered: true,\n          hover: true\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tbody\", null, data.map(function (user) {\n          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {\n            key: user.rowid\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", {\n            onClick: function onClick() {\n              return rowClick(user.rowid, user.sellername);\n            }\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n            style: {\n              color: \"#003A56\",\n              fontWeight: \"Bold\",\n              fontSize: 20\n            }\n          }, user.sellername), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", {\n            style: {\n              color: \"#003A56\",\n              textAlign: \"right\",\n              fontSize: 20,\n              fontWeight: \"Bold\"\n            }\n          }, \"$\", user.profit)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            \"in\": openRows[user.rowid]\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", {\n            className: \"collapse-row\"\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tbody\", null, user.detailList ? showDetails(user.detailList) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null))))));\n        }))));\n      } else {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Error404_Error404__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          linkAvailable: true\n        });\n      }\n    }\n  };\n  // state to keep track of which rows are expanded\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n    _useState8 = _slicedToArray(_useState7, 2),\n    openRows = _useState8[0],\n    setOpenRows = _useState8[1];\n\n  // function to toggle the collapse state of a row\n  var toggleRow = function toggleRow(id) {\n    setOpenRows(function (prev) {\n      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, id, !prev[id]));\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showContent());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HigestSell);\n\n//# sourceURL=webpack://capstoneprojectnode/./src/components/HigestSell/HigestSell.js?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b300ea144dc43c30791e")
/******/ })();
/******/ 
/******/ }
;