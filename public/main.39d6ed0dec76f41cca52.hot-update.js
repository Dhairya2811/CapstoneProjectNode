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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LoadingComponent_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LoadingComponent/Loading */ \"./src/components/LoadingComponent/Loading.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar Data = function Data(_ref) {\n  var data = _ref.data;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),\n    _useState2 = _slicedToArray(_useState, 2),\n    nextPageNo = _useState2[0],\n    setNextPageNo = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState4 = _slicedToArray(_useState3, 2),\n    items = _useState4[0],\n    setItems = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState6 = _slicedToArray(_useState5, 2),\n    loading = _useState6[0],\n    setLoading = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n    _useState8 = _slicedToArray(_useState7, 2),\n    showLoadMore = _useState8[0],\n    setShowLoadMore = _useState8[1];\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n    _useState10 = _slicedToArray(_useState9, 2),\n    alertText = _useState10[0],\n    setAlertText = _useState10[1];\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState12 = _slicedToArray(_useState11, 2),\n    showAlert = _useState12[0],\n    setShowAlert = _useState12[1];\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();\n\n  // style ---------------------------------------------------------------------------------------------------------------------------------------------\n  // desktop style -------------------------------------------------------------------------------------------------------------------------------------\n\n  var itemStyle = {\n    display: \"grid\",\n    gridTemplateColumns: \"29.5% 69.5%\",\n    gap: \"1%\",\n    backgroundColor: \"white\",\n    borderRadius: \"1em\",\n    padding: \"2em\",\n    marginTop: \"1em\",\n    cursor: \"pointer\"\n  };\n  var imageDiv = {\n    backgroundColor: \"white\",\n    width: \"100%\",\n    height: \"10em\",\n    display: \"flex\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    borderRadius: \"10px\"\n  };\n  var imageStyle = {\n    height: \"auto\",\n    maxHeight: \"10em\",\n    width: \"auto\",\n    maxWidth: \"100%\",\n    objectFit: \"cover\",\n    borderRadius: \"10px\"\n  };\n  var detailsDiv = {\n    paddingTop: \"1em\",\n    marginLeft: \"1em\",\n    width: \"100%\",\n    height: \"5em\",\n    display: \"grid\",\n    gridTemplateColumns: \"65% 35%\"\n  };\n  var dealTitleStyle = {\n    fontWeight: \"bold\",\n    fontSize: \"0.9em\",\n    backgroundColor: \"red\",\n    color: \"#E8F0F4\",\n    borderRadius: \"5px\",\n    width: \"fit-content\",\n    padding: \"2px 1em\",\n    textAlign: \"center\",\n    marginBottom: \".5rem\"\n  };\n  var priceDiv = {\n    fontSize: \"1.25em\"\n  };\n  var detailsText = {\n    zIndex: 0\n  };\n  var detailsBtn = {\n    display: \"flex\",\n    justifyContent: \"center\",\n    flexFlow: \"column\",\n    alignItems: \"center\",\n    gap: \"1em\"\n  };\n  var alertDiv = {\n    display: showAlert ? \"block\" : \"none\"\n  };\n\n  // style completed -----------------------------------------------------------------------------------------------------------------------------------\n\n  var loadMoreData = function loadMoreData(page) {\n    console.log(page);\n    setLoading(true);\n    var pathArr = location.pathname.split(\"/\");\n    if (data.length != 0 && pathArr[2] != undefined) {\n      setItems(data);\n      setLoading(false);\n      setShowLoadMore(false);\n    } else {\n      fetch(\"/getAllItems?page=\" + page).then(function (res) {\n        return res.json();\n      }).then(function (res) {\n        console.log(res);\n        setItems(items.concat(res.response));\n        setNextPageNo(res.nextPage);\n        if (res.response.length < 10) {\n          setShowLoadMore(false);\n        }\n        setLoading(false);\n      });\n    }\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    loadMoreData(nextPageNo);\n  }, []);\n\n  // work on the detials page.\n  var showItem = function showItem(category, deal, dealPrice, deal_title, description, image, imageName, name, price, quantity, rowid, title) {\n    var displayDescription = \"\";\n    var newDescription = \"\".concat(description).replace(\"\\n\", \" \");\n    if (newDescription.split(\" \").length > 50 || description.split(\"\\n\").length > 3) {\n      displayDescription = newDescription.split(\" \").slice(0, 50).join(\" \") + \"... \";\n    } else {\n      displayDescription = newDescription;\n    }\n    var clickOnItem = function clickOnItem() {\n      navigate(\"/details/\".concat(rowid));\n    };\n    var deleteBtnClick = function deleteBtnClick(e) {\n      e.stopPropagation();\n      setItems([]);\n      setNextPageNo(1);\n      setLoading(true);\n      fetch(\"/delete/\" + rowid).then(function (res) {\n        return res.text();\n      }).then(function (res) {\n        if (res == \"deleted\") {\n          setShowAlert(true);\n          setAlertText(\"Item has been deleted.\");\n          setTimeout(function () {\n            setShowAlert(false);\n            setAlertText(\"\");\n            loadMoreData(1);\n          }, 2000);\n        }\n      });\n    };\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: rowid,\n      style: itemStyle\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: imageDiv,\n      onClick: clickOnItem\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      style: imageStyle,\n      className: \"itemImage\",\n      src: image\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: detailsDiv,\n      onClick: clickOnItem\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: detailsText\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, title), deal == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: dealTitleStyle\n    }, deal_title) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, displayDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: priceDiv\n    }, \"$ \", deal == 1 ? dealPrice : price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: detailsBtn\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: {\n        height: \"fit-content\",\n        zIndex: \"1\"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      type: \"button\",\n      className: \"btn btn-danger\",\n      value: \"Delete\",\n      onClick: deleteBtnClick\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: {\n        height: \"fit-content\",\n        zIndex: \"1\"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      type: \"button\",\n      className: \"btn btn-success\",\n      value: \"Show Comments\"\n    })))));\n  };\n  var returnContent = function returnContent() {\n    if (loading) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LoadingComponent_Loading__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        style: alertDiv,\n        className: \"alert alert-danger\"\n      }, alertText), items.map(function (item) {\n        return showItem(item.category, item.deal, item.dealPrice, item.deal_title, item.description, item.image, item.imageName, item.name, item.price, item.quantity, item.rowid, item.title);\n      }), showLoadMore ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n        type: \"button\",\n        value: \"Load More\",\n        className: \"btn\",\n        onClick: function onClick() {\n          return loadMoreData(nextPageNo);\n        }\n      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null));\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, returnContent());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);\n\n//# sourceURL=webpack://capstoneprojectnode/./src/components/UsersAndData/Data.js?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5bc33e2e8288f0c0440d")
/******/ })();
/******/ 
/******/ }
;