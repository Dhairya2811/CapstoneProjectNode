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

/***/ "./src/components/UsersAndData/User.js":
/*!*********************************************!*\
  !*** ./src/components/UsersAndData/User.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n/**\r\n * {username: 'das', email: 'das@s.s', blocked: 0, admin: 0}\r\n */\n\nvar User = function User(_ref) {\n  var data = _ref.data;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState2 = _slicedToArray(_useState, 2),\n    users = _useState2[0],\n    setUsers = _useState2[1];\n\n  // style for the each user in the list ***********************************************************************************************\n  // desktop style *********************************************************************************************************************\n  var userListDiv = {\n    display: \"flex\",\n    flexWrap: \"nowrap\",\n    width: \"100%\",\n    padding: \"10px 1em\",\n    borderRadius: \"10px\",\n    margin: \"0.5em 0\",\n    backgroundColor: \"white\",\n    flexDirection: window.innerWidth > 700 ? \"row\" : \"column\",\n    gap: \"1em\"\n  };\n  var userDetail = {\n    display: \"flex\",\n    flex: \"1\",\n    alignItems: \"center\"\n  };\n  var usernameStyle = {\n    paddingLeft: \"1em\",\n    fontWeight: \"bold\",\n    fontSize: \"1.25em\"\n  };\n  var userBtn = {\n    width: \"auto\",\n    margin: \"0 1em\"\n  };\n  // style completed *******************************************************************************************************************\n\n  var fetchUsers = function fetchUsers() {\n    var pathArr = location.pathname.split(\"/\");\n    if (data.length != 0 && pathArr[2] != undefined) {\n      setUsers(data);\n      console.log(data.length);\n      console.log(data);\n    } else {\n      fetch(\"/users\", {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n          user: JSON.parse(sessionStorage.getItem(\"user\")).username\n        })\n      }).then(function (res) {\n        return res.json();\n      }).then(function (res) {\n        setUsers(res.res);\n      });\n    }\n  };\n  var buttonClickFun = function buttonClickFun(username, block, admin) {\n    fetch(\"userblockadmin\", {\n      method: \"PUT\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        username: username,\n        block: block,\n        admin: admin\n      })\n    }).then(function (res) {\n      return res.text();\n    }).then(function (res) {\n      if (res == \"USER INFO UPDATED\") {\n        fetchUsers();\n      }\n    });\n  };\n  var displayUser = function displayUser(user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: userListDiv\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: userDetail\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n      style: usernameStyle\n    }, user.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: _objectSpread(_objectSpread({}, userDetail), {}, {\n        marginLeft: \"1.25em\"\n      })\n    }, user.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: userBtn\n    }, user.blocked == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n      className: \"btn btn-danger\",\n      onClick: function onClick() {\n        return buttonClickFun(\"\".concat(user.username), 1, user.admin);\n      }\n    }, \"Block\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n      className: \"btn btn-success\",\n      onClick: function onClick() {\n        return buttonClickFun(\"\".concat(user.username), 0, user.admin);\n      }\n    }, \"Unblock\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: userBtn\n    }, user.admin == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n      className: \"btn btn-success\",\n      onClick: function onClick() {\n        return buttonClickFun(\"\".concat(user.username), user.blocked, 1);\n      }\n    }, \"Add as Admin\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n      className: \"btn btn-danger\",\n      onClick: function onClick() {\n        return buttonClickFun(\"\".concat(user.username), user.blocked, 0);\n      }\n    }, \"Remove as Admin\"))));\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    fetchUsers();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, users.map(function (user) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: user.username\n    }, displayUser(user));\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n//# sourceURL=webpack://capstoneprojectnode/./src/components/UsersAndData/User.js?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b562efddadb4c0fc60d6")
/******/ })();
/******/ 
/******/ }
;