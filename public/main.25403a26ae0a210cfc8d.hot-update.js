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

/***/ "./src/components/Payment/Payment.js":
/*!*******************************************!*\
  !*** ./src/components/Payment/Payment.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Error404_Error404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Error404/Error404 */ \"./src/components/Error404/Error404.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar DisplayPaymentItems = function DisplayPaymentItems(_ref) {\n  var item = _ref.item;\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"paymentListItem\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"paymentListImage\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"displayImage\",\n    style: {\n      background: \"transparent url(\".concat(item.image, \") no-repeat center\"),\n      height: \"100%\",\n      width: \"184px\",\n      backgroundSize: \"contain\"\n    }\n  })), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"paymentListDetails\"\n  }, /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"h3\", null, item.title), /*#__PURE__*/React.createElement(\"small\", null, item.category), /*#__PURE__*/React.createElement(\"h3\", null, \"$\", item.deal == 1 ? item.dealPrice : item.price))));\n};\nvar Payment = function Payment() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState2 = _slicedToArray(_useState, 2),\n    items = _useState2[0],\n    setItems = _useState2[1];\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var subtotal = 0;\n    items.map(function (item) {\n      return subtotal = subtotal + parseFloat(item.deal == 1 ? item.dealPrice : item.price);\n    });\n    var total = (subtotal + subtotal * 0.13).toFixed(2);\n    paypal.Buttons({\n      createOrder: function createOrder(data, actions) {\n        return actions.order.create({\n          purchase_units: [{\n            amount: {\n              value: \"\".concat(total) // Can also reference a variable or function\n            }\n          }]\n        });\n      },\n\n      onApprove: function onApprove(data, actions) {\n        return actions.order.capture().then(function (orderData) {\n          // console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));\n          // const transaction = orderData.purchase_units[0].payments.captures[0];\n          // alert(`The order has been placed successfully.\\nThank you for shopping.`);\n          document.getElementById(\"purchaseMessage\").style.display = \"block\";\n          var count = 0;\n          setTimeout(function () {\n            var userName = sessionStorage.getItem(\"username\");\n            var itemIds = [];\n            var itemQuantities = [];\n            items.map(function (item) {\n              itemIds.push(item.rowid);\n              itemQuantities.push(item.quantity);\n            });\n            if (count == 0) {\n              var today = new Date();\n              var month = today.toLocaleString('en-US', {\n                month: 'short'\n              });\n              var year = today.getFullYear();\n              var date = month + \" \" + year;\n              fetch(\"/successfulPurchase\", {\n                method: \"post\",\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                credentials: \"include\",\n                body: JSON.stringify({\n                  userName: userName,\n                  items: items,\n                  date: date\n                })\n              }).then(function (res) {\n                return res.text();\n              }).then(function (res) {\n                console.log(res);\n                if (res == \"purchased\") {\n                  document.getElementById(\"purchaseMessage\").style.display = \"none\";\n                  navigate(\"/\");\n                }\n              });\n              count++;\n            }\n          }, 2000);\n          // alert(`Transaction ${transaction.status}: ${transaction.id}\\n\\nSee console for all available details`);\n        });\n      }\n    }).render('#paypal-button-container');\n    console.log(\"effect call.\");\n  });\n  if (sessionStorage.getItem(\"items\") != null) {\n    setItems(JSON.parse(sessionStorage.getItem(\"items\")));\n    sessionStorage.removeItem(\"items\");\n  }\n  var getSubtotal = function getSubtotal() {\n    console.log(items);\n    var subtotal = 0;\n    items.map(function (item) {\n      return subtotal = subtotal + parseFloat(item.deal == 1 ? item.dealPrice : item.price);\n    });\n    var tax = (subtotal * 0.13).toFixed(2);\n    var total = (subtotal + subtotal * 0.13).toFixed(2);\n    return {\n      \"subtotal\": subtotal.toFixed(2),\n      \"tax\": tax,\n      \"total\": total\n    };\n  };\n  var returnComponent = function returnComponent() {\n    if (items.length != 0) {\n      return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"div\", {\n        id: \"purchaseMessage\",\n        className: \"alert alert-success\",\n        style: {\n          display: \"none\"\n        }\n      }, \"The order has been placed successfully. Thank you for shopping.\"), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"paymentPage\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"displayPaymentItems\"\n      }, items.map(function (item) {\n        return /*#__PURE__*/React.createElement(DisplayPaymentItems, {\n          item: item\n        });\n      })), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"checkoutPrice\"\n      }, /*#__PURE__*/React.createElement(\"h2\", null, \"Payment\"), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"itemList\"\n      }, items.map(function (item) {\n        return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"span\", {\n          className: \"title\"\n        }, item.title), \": \", /*#__PURE__*/React.createElement(\"span\", {\n          className: \"price\"\n        }, \"$\", parseFloat(item.deal == 1 ? item.dealPrice : item.price).toFixed(2)));\n      })), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"subTotal\"\n      }, /*#__PURE__*/React.createElement(\"span\", {\n        className: \"title\"\n      }, \"Subtotal\"), \":\", /*#__PURE__*/React.createElement(\"span\", {\n        className: \"price\"\n      }, \"$\", getSubtotal().subtotal)), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"tax\"\n      }, /*#__PURE__*/React.createElement(\"span\", {\n        className: \"title\"\n      }, \"Tax\"), \":\", /*#__PURE__*/React.createElement(\"span\", {\n        className: \"price\"\n      }, \"$\", getSubtotal().tax)), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"total\"\n      }, /*#__PURE__*/React.createElement(\"span\", {\n        className: \"title\"\n      }, \"Total\"), \":\", /*#__PURE__*/React.createElement(\"span\", {\n        className: \"price\"\n      }, \"$\", getSubtotal().total)), /*#__PURE__*/React.createElement(\"div\", {\n        id: \"paymentButtons\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        id: \"paypal-button-container\"\n      })))));\n    } else {\n      return /*#__PURE__*/React.createElement(_Error404_Error404__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        errorMessage: \"There is no URL like this.\",\n        linkAvailable: \"true\"\n      });\n    }\n  };\n  return /*#__PURE__*/React.createElement(React.Fragment, null, returnComponent());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Payment);\n\n//# sourceURL=webpack://capstoneprojectnode/./src/components/Payment/Payment.js?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f7ee9847b94abb0d92fb")
/******/ })();
/******/ 
/******/ }
;