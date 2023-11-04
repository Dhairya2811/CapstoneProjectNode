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

/***/ "./src/components/MyCart/MyCart.js":
/*!*****************************************!*\
  !*** ./src/components/MyCart/MyCart.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _Error404_Error404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Error404/Error404 */ \"./src/components/Error404/Error404.js\");\n/* harmony import */ var _LoadingComponent_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoadingComponent/Loading */ \"./src/components/LoadingComponent/Loading.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar DisplayPaymentItems = function DisplayPaymentItems(_ref) {\n  var item = _ref.item;\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();\n  var removeClick = function removeClick() {\n    var user = JSON.parse(sessionStorage.getItem(\"user\"));\n    var username = user.username;\n    fetch(\"/addToCart\", {\n      method: \"post\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      credentials: \"include\",\n      body: JSON.stringify({\n        username: username,\n        itemId: item.rowid,\n        cartAction: false\n      })\n    }).then(function (res) {\n      return res.text();\n    }).then(function (res) {\n      navigate(\"/myCart\");\n    });\n  };\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"cartItem\",\n    onClick: function onClick() {\n      navigate(\"/details/\".concat(item.rowid));\n    }\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"cartItemImage\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"displayImage\",\n    style: {\n      background: \"transparent url(\".concat(item.image, \") no-repeat center\"),\n      backgroundSize: \"contain\"\n    }\n  })), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"cartItemDetails\"\n  }, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"h2\", {\n    className: \"itemTitle\"\n  }, item.title), /*#__PURE__*/React.createElement(\"small\", null, item.category), /*#__PURE__*/React.createElement(\"span\", {\n    className: \"priceNdBtn\"\n  }, /*#__PURE__*/React.createElement(\"h5\", {\n    className: \"itemPrice\"\n  }, \"$\", item.deal == 1 ? item.dealPrice : item.price), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"btnDiv\"\n  }, /*#__PURE__*/React.createElement(\"button\", {\n    onClick: function onClick() {\n      removeClick();\n    },\n    className: \"removeItem btn btn-danger\",\n    style: {\n      backgroundColor: \"#a90119\",\n      borderColor: \"#a90119\"\n    }\n  }, /*#__PURE__*/React.createElement(\"i\", {\n    className: \"fa fa-trash\",\n    \"aria-hidden\": \"true\"\n  })))))));\n};\nvar MyCart = function MyCart() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState2 = _slicedToArray(_useState, 2),\n    items = _useState2[0],\n    setItems = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"true\"),\n    _useState4 = _slicedToArray(_useState3, 2),\n    loading = _useState4[0],\n    setLoading = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n    _useState6 = _slicedToArray(_useState5, 2),\n    username = _useState6[0],\n    setUserName = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n    _useState8 = _slicedToArray(_useState7, 2),\n    blocked = _useState8[0],\n    setBlocked = _useState8[1];\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var pathArr = window.location.pathname.split(\"/\");\n    var user = JSON.parse(sessionStorage.getItem(\"user\"));\n    setUserName(user.username);\n    setBlocked(user.blocked);\n    console.log(user);\n    if (loading == \"true\" && pathArr[1] == \"myCart\" && pathArr[2] == undefined) {\n      fetch(\"/getCartItems/\".concat(username)).then(function (res) {\n        return res.json();\n      }).then(function (res) {\n        setItems(res);\n        setLoading(\"false\");\n      });\n    } else if (loading == \"true\" && pathArr[1] == \"myCart\" && pathArr[2] == \"category\") {\n      fetch(\"/getCartItems/\".concat(username, \"/category/\").concat(pathArr[3])).then(function (res) {\n        return res.json();\n      }).then(function (res) {\n        console.log(res);\n        setItems(res);\n        setLoading(\"false\");\n      });\n    }\n  });\n  var getSubtotal = function getSubtotal() {\n    var subtotal = 0;\n    items.map(function (item) {\n      return subtotal = subtotal + parseFloat(item.deal == 1 ? item.dealPrice : item.price);\n    });\n    var tax = (subtotal * 0.13).toFixed(2);\n    var total = (subtotal + subtotal * 0.13).toFixed(2);\n    return {\n      \"subtotal\": subtotal.toFixed(2),\n      \"tax\": tax,\n      \"total\": total\n    };\n  };\n  var renderItems = function renderItems() {\n    if (items.length === 0) {\n      if (loading === \"false\") {\n        return /*#__PURE__*/React.createElement(\"h2\", null, \"The cart is empty\");\n      }\n    } else {\n      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"displayCartPage\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"displayCartItems\"\n      }, items.map(function (item) {\n        return /*#__PURE__*/React.createElement(DisplayPaymentItems, {\n          item: item\n        });\n      })), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"displayPrice\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"priceText\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"itemList\"\n      }, items.map(function (item) {\n        return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"span\", {\n          className: \"title\",\n          style: {\n            fontWeight: \"bold\"\n          }\n        }, item.title), \": \", /*#__PURE__*/React.createElement(\"span\", {\n          className: \"price\"\n        }, \"$\", parseFloat(item.deal == 1 ? item.dealPrice : item.price).toFixed(2)));\n      })), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"subTotal\"\n      }, /*#__PURE__*/React.createElement(\"span\", {\n        className: \"title\",\n        style: {\n          fontWeight: \"bold\"\n        }\n      }, \"Subtotal (\", items.length, \" \", items.length == 1 ? /*#__PURE__*/React.createElement(\"span\", null, \"item\") : /*#__PURE__*/React.createElement(\"span\", null, \"items\"), \")\"), \":\", /*#__PURE__*/React.createElement(\"span\", {\n        className: \"price\"\n      }, \"$\", getSubtotal().subtotal))), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"cartPaymentButtonDiv\"\n      }, /*#__PURE__*/React.createElement(\"button\", {\n        className: \"btn btn-primary cartPaymentButton\",\n        onClick: function onClick() {\n          checkout();\n        }\n      }, /*#__PURE__*/React.createElement(\"svg\", {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        width: \"16\",\n        height: \"16\",\n        fill: \"currentColor\",\n        className: \"bi bi-bag\",\n        viewBox: \"0 0 16 16\",\n        style: {\n          marginRight: \"6px\",\n          marginTop: \"-5px\"\n        }\n      }, /*#__PURE__*/React.createElement(\"path\", {\n        d: \"M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z\"\n      })), /*#__PURE__*/React.createElement(\"span\", {\n        className: \"text\"\n      }, \"Checkout\"))))));\n    }\n  };\n  var renderComponent = function renderComponent() {\n    if (username === null) {\n      return /*#__PURE__*/React.createElement(_Error404_Error404__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        errorMessage: \"You are not signed in.\",\n        linkAvailable: \"true\"\n      });\n    } else if (blocked == 0) {\n      return /*#__PURE__*/React.createElement(_Error404_Error404__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        errorMessage: \"Your account has been blocked by an admin.\",\n        linkAvailable: \"true\"\n      });\n    }\n    return /*#__PURE__*/React.createElement(React.Fragment, null, loading == \"true\" ? /*#__PURE__*/React.createElement(_LoadingComponent_Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null) : /*#__PURE__*/React.createElement(React.Fragment, null, renderItems()));\n  };\n  var checkout = function checkout() {\n    sessionStorage.setItem(\"items\", JSON.stringify(items));\n    navigate(\"/payment\");\n  };\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"displayMyCartItemsPage\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"displayitems\"\n  }, renderComponent()));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyCart);\n\n//# sourceURL=webpack://capstoneprojectnode/./src/components/MyCart/MyCart.js?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("089f4b1aa41ebd1d5fb9")
/******/ })();
/******/ 
/******/ }
;