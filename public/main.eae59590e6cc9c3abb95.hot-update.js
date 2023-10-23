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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Error404_Error404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Error404/Error404 */ \"./src/components/Error404/Error404.js\");\n/* harmony import */ var _LoadingComponent_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoadingComponent/Loading */ \"./src/components/LoadingComponent/Loading.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar HigestSell = function HigestSell() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    admin = _useState2[0],\n    setAdmin = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n    _useState4 = _slicedToArray(_useState3, 2),\n    loading = _useState4[0],\n    setLoading = _useState4[1];\n  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();\n\n  // Style ------------------------------------------------------------------------------------------------\n  // Desktop Style ----------------------------------------------------------------------------------------\n  var HigestSellContainer = {\n    height: \"70vh\",\n    width: \"100%\",\n    padding: \"2em 10%\"\n  };\n  // Style Completed --------------------------------------------------------------------------------------\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setLoading(true);\n    fetch(\"/userInfo\", {\n      method: \"post\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      credentials: \"include\",\n      body: JSON.stringify({\n        username: sessionStorage.getItem(\"username\")\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      setAdmin(Boolean(res.admin));\n    });\n    fetch(\"/higestSellReq\").then(function (res) {\n      return res.text();\n    }).then(function (res) {\n      console.log(res);\n      setLoading(false);\n    });\n  }, [location]);\n  var showContent = function showContent() {\n    if (loading) {\n      /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LoadingComponent_Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null);\n    } else {\n      if (admin) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n          style: HigestSellContainer\n        }, \"Higest Purchase Page...\");\n      } else {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Error404_Error404__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          linkAvailable: true\n        });\n      }\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showContent());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HigestSell);\n\n//# sourceURL=webpack://capstoneprojectnode/./src/components/HigestSell/HigestSell.js?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ff42e453ee7e23d51430")
/******/ })();
/******/ 
/******/ }
;