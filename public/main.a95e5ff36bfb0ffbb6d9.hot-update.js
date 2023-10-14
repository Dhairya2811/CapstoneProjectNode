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

/***/ "./src/components/PostAd/PostAd.js":
/*!*****************************************!*\
  !*** ./src/components/PostAd/PostAd.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Error404_Error404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Error404/Error404 */ \"./src/components/Error404/Error404.js\");\n/* harmony import */ var _Image_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image.json */ \"./src/components/PostAd/Image.json\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar PostAd = function PostAd() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    admin = _useState2[0],\n    setAdmin = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n    _useState4 = _slicedToArray(_useState3, 2),\n    url = _useState4[0],\n    setUrl = _useState4[1];\n\n  // Style  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n  // desktop style ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n  var PostAd_container = {\n    height: \"70vh\",\n    width: \"100%\",\n    padding: \"2em 10%\"\n  };\n  var PostAd_div = {\n    display: \"grid\",\n    gridTemplateColumns: \"52% 48%\",\n    height: \"100%\",\n    width: \"100%\",\n    padding: \"30px 1em\"\n  };\n  var video_section = {\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    flexWrap: \"wrap\"\n  };\n  var iframe_style = {\n    borderRadius: \"20px 20px 0 0\"\n  };\n  var details_section = {\n    marginTop: \"4em\",\n    marginLeft: 100,\n    display: \"flex\",\n    alignItems: \"center\",\n    flexWrap: \"wrap\",\n    justifyContent: \"center\",\n    gap: \"2.5em\"\n  };\n  var AdTitle = {\n    fontSize: \"2.5rem\",\n    inlineSize: \"100%\"\n  };\n  var AdDescription = {\n    fontSize: \"1.35em\",\n    inlineSize: \"100%\",\n    overflowWrap: \"break-word\"\n  };\n  var itemid_style = {\n    inlineSize: \"70%\"\n  };\n  var youtube_url = {\n    borderRadius: \"0 0 20px 20px\",\n    paddingInline: \"20px\"\n  };\n  var youtube_URL_image_div = {\n    height: \"90%\",\n    display: \"flex\",\n    alignItems: \"center\"\n  };\n  var youtube_image = {\n    width: \"100%\",\n    height: \"60%\"\n  };\n  var buttonSection = {\n    alignItems: \"flex-end\"\n  };\n  var submitBtn = {\n    backgroundColor: \"#003A56\"\n  };\n  var itemid_div_style = {\n    width: \"100%\",\n    display: \"flex\",\n    justifyContent: \"center\"\n  };\n  // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    fetch(\"userInfo\", {\n      method: \"post\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      credentials: \"include\",\n      body: JSON.stringify({\n        username: sessionStorage.getItem(\"username\")\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      setAdmin(Boolean(res.admin));\n    });\n  }, []);\n  var urlChange = function urlChange(event) {\n    var val = event.target.value;\n    if (val != null) {\n      var arr = val.split(\"/\");\n      var youtube_url = \"https://www.youtube.com/embed/\" + arr[arr.length - 1];\n      setUrl(youtube_url);\n    } else {\n      setUrl(\"\");\n    }\n  };\n  var submitAd = function submitAd() {\n    console.log(\"submit click\");\n  };\n  var showPage = function showPage() {\n    if (admin == true) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        style: PostAd_container\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        style: PostAd_div\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        style: video_section\n      }, url != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"iframe\", {\n        width: \"90%\",\n        height: \"100%\",\n        style: iframe_style,\n        src: url + \"?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0\"\n      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        style: youtube_URL_image_div\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n        style: _objectSpread(_objectSpread({}, youtube_image), iframe_style),\n        src: _Image_json__WEBPACK_IMPORTED_MODULE_2__.youtubeImage\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n        style: youtube_url,\n        placeholder: \"Video URL from YouTube\",\n        className: \"form-control\",\n        id: \"VideoURL\",\n        onChange: urlChange,\n        required: true\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n        style: details_section\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        style: {\n          width: \"100%\"\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n        style: AdTitle,\n        id: \"AdTitle\",\n        placeholder: \"Ad title\",\n        className: \"form-control\",\n        required: true\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        style: {\n          width: \"100%\"\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"textarea\", {\n        style: AdDescription,\n        rows: \"4\",\n        id: \"newItemDescription\",\n        placeholder: \"Ad description\",\n        className: \"form-control\",\n        required: true\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        style: itemid_div_style\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n        style: itemid_style,\n        id: \"itemid\",\n        placeholder: \"Item ID\",\n        className: \"form-control\",\n        required: true\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        className: \"button_section\",\n        style: buttonSection\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n        type: \"submit\",\n        onClick: submitAd(),\n        style: submitBtn,\n        className: \"btn btn-success\"\n      })))));\n    }\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Error404_Error404__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      linkAvailable: \"true\"\n    }));\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showPage());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostAd);\n\n//# sourceURL=webpack://capstoneprojectnode/./src/components/PostAd/PostAd.js?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("764d0dee4f361e851ee2")
/******/ })();
/******/ 
/******/ }
;