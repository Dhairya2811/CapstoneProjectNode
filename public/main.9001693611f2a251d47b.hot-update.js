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

/***/ "./src/components/Navigationbar/Navigationbar.js":
/*!*******************************************************!*\
  !*** ./src/components/Navigationbar/Navigationbar.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/NavDropdown */ \"./node_modules/react-bootstrap/esm/NavDropdown.js\");\n/* harmony import */ var react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Offcanvas */ \"./node_modules/react-bootstrap/esm/Offcanvas.js\");\n/* harmony import */ var _images_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images.json */ \"./src/components/Navigationbar/images.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nvar Navigationbar = function Navigationbar() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    show = _useState2[0],\n    setShow = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    _useState4 = _slicedToArray(_useState3, 2),\n    categoryShow = _useState4[0],\n    setCategoryShow = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    _useState6 = _slicedToArray(_useState5, 2),\n    searchShow = _useState6[0],\n    setSearchShow = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n    _useState8 = _slicedToArray(_useState7, 2),\n    adminUser = _useState8[0],\n    setAdminUser = _useState8[1];\n  var site_logo = _images_json__WEBPACK_IMPORTED_MODULE_0__.name_logo;\n  var theme_color = \"#003A56\";\n  var username = sessionStorage.getItem(\"username\");\n  var returnNav;\n  var rightSide;\n  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var path = window.location.pathname;\n    var pathArr = window.location.pathname.split(\"/\");\n    if (path == \"/\" || path == \"/myItems\" || path == \"/myCart\") {\n      setCategoryShow(true);\n      setSearchShow(true);\n    } else if (pathArr[1] == \"category\") {\n      setSearchShow(false);\n      setCategoryShow(true);\n    } else if (pathArr[1] == \"search\") {\n      setSearchShow(true);\n      setCategoryShow(false);\n    } else {\n      setSearchShow(false);\n      setCategoryShow(false);\n    }\n    if (username != null) {\n      fetch(\"/userInfo\", {\n        method: \"post\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        credentials: \"include\",\n        body: JSON.stringify({\n          username: username\n        })\n      }).then(function (res) {\n        return res.json();\n      }).then(function (res) {\n        var admin = Boolean(res.admin);\n        setAdminUser(admin);\n      });\n    }\n  }, [location]);\n  var onDropDown = function onDropDown(e) {\n    var path = window.location.pathname;\n    var pathArr = window.location.pathname.split(\"/\");\n    if (pathArr[1] == \"category\" || path == \"/\") {\n      window.location.href = \"/category/\" + e;\n    } else {\n      window.location.pathname = pathArr[1] + \"/category/\" + e;\n    }\n  };\n  var searchItem = function searchItem(event) {\n    var search = document.getElementById(\"search_NavbarFormInput\");\n    var search_by = search.value;\n    var path = window.location.pathname;\n    var pathArr = window.location.pathname.split(\"/\");\n    if (pathArr[1] == \"search\" || path == \"/\") {\n      window.location.href = \"/search/\" + search_by;\n    } else {\n      window.location.pathname = pathArr[1] + \"/search/\" + search_by;\n    }\n    event.preventDefault();\n  };\n  var logout = function logout() {\n    sessionStorage.removeItem(\"username\");\n    window.location.href = \"/\";\n  };\n  var showChange = function showChange() {\n    return setShow(!show);\n  };\n\n  // display the Navlinks as per sign in status\n  if (username === null) {\n    returnNav = /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      id: \"NavbarBody\",\n      className: \"justify-content-end flex-grow-1 pe-3\"\n    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Link, {\n      className: \"NavFonts NavbarLink Navitem\",\n      as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink,\n      to: \"/\",\n      onClick: showChange\n    }, \"Home\"), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Link, {\n      className: \"NavFonts NavbarLink Navitem\",\n      as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink,\n      to: \"/register\",\n      onClick: showChange\n    }, \"Register\"), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Link, {\n      className: \"NavFonts NavbarLink Navitem\",\n      as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink,\n      to: \"/signin\",\n      onClick: showChange\n    }, \"Sign In\"), categoryShow == true ? /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      title: \"Category\",\n      className: \"NavbarLink NavFonts\",\n      onSelect: onDropDown,\n      id: \"offcanvasNavbarDropdown-expand-true\",\n      style: {\n        fontSize: \"large\"\n      }\n    }, /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n      className: \"NavFonts NavbarLink Navitem\",\n      eventKey: \"All\"\n    }, \"All\"), /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n      className: \"NavFonts NavbarLink Navitem\",\n      eventKey: \"Toys\"\n    }, \"Toys\"), /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n      className: \"NavFonts NavbarLink Navitem\",\n      eventKey: \"Home\"\n    }, \"Home\"), /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n      className: \"NavFonts NavbarLink Navitem\",\n      eventKey: \"Fashion\"\n    }, \"Fashion\"), /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n      className: \"NavFonts NavbarLink Navitem\",\n      eventKey: \"Electronics\"\n    }, \"Electronics\"), /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Divider, {\n      style: {\n        color: \"#E8F0F4\"\n      }\n    }), /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n      className: \"NavFonts NavbarLink Navitem\",\n      eventKey: \"Lowtohigh\"\n    }, \"Price: Low to High\"), /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n      className: \"NavFonts NavbarLink Navitem\",\n      eventKey: \"Hightolow\"\n    }, \"Price: Hign to Low\")) : /*#__PURE__*/React.createElement(React.Fragment, null));\n    rightSide = /*#__PURE__*/React.createElement(React.Fragment, null);\n  } else {\n    returnNav = /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      id: \"NavbarBody\",\n      className: \"justify-content-end flex-grow-1 pe-3\"\n    }, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Link, {\n      className: \"NavFonts NavbarLink Navitem\",\n      as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink,\n      to: \"/\",\n      onClick: showChange\n    }, \"Home\"), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Link, {\n      className: \"NavFonts NavbarLink Navitem\",\n      as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink,\n      to: \"/myItems\",\n      onClick: showChange\n    }, \"My Item\"), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Link, {\n      className: \"NavFonts NavbarLink Navitem\",\n      as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink,\n      to: \"/addItem\",\n      onClick: showChange\n    }, \"Add Item\"), adminUser == true ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Link, {\n      className: \"NavFonts NavbarLink Navitem\",\n      as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink,\n      to: \"/postad\",\n      onClick: showChange\n    }, \"Post Ad\"), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Link, {\n      className: \"NavFonts NavbarLink Navitem\",\n      as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink,\n      to: \"/higestSale\",\n      onClick: showChange\n    }, \"Higest Sale\"), /*#__PURE__*/React.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Link, {\n      className: \"NavFonts NavbarLink Navitem\",\n      as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink,\n      to: \"/UsersAndData\",\n      onClick: showChange\n    }, \"Users and Data\")) : /*#__PURE__*/React.createElement(React.Fragment, null), categoryShow == true ? /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      title: \"Category\",\n      className: \"NavbarLink NavFonts\",\n      onSelect: onDropDown,\n      id: \"offcanvasNavbarDropdown-expand-true\",\n      style: {\n        fontSize: \"large\"\n      }\n    }, /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n      className: \"NavFonts NavbarLink Navitem\",\n      eventKey: \"All\"\n    }, \"All\"), /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n      className: \"NavFonts NavbarLink Navitem\",\n      eventKey: \"Toys\"\n    }, \"Toys\"), /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n      className: \"NavFonts NavbarLink Navitem\",\n      eventKey: \"Home\"\n    }, \"Home\"), /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n      className: \"NavFonts NavbarLink Navitem\",\n      eventKey: \"Fashion\"\n    }, \"Fashion\"), /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n      className: \"NavFonts NavbarLink Navitem\",\n      eventKey: \"Electronics\"\n    }, \"Electronics\"), /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Divider, {\n      style: {\n        color: \"#E8F0F4\"\n      }\n    }), /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n      className: \"NavFonts NavbarLink Navitem\",\n      eventKey: \"Lowtohigh\"\n    }, \"Price: Low to High\"), /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n      className: \"NavFonts NavbarLink Navitem\",\n      eventKey: \"Hightolow\"\n    }, \"Price: Hign to Low\")) : /*#__PURE__*/React.createElement(React.Fragment, null));\n    rightSide = /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      id: \"username_Dropdown\",\n      title: username,\n      className: \"NavFonts\"\n    }, /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n      className: \"username_Dropdown_items NavFonts\",\n      id: \"myCart\",\n      as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink,\n      to: \"/myCart\"\n    }, \"My Cart\"), /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Divider, {\n      style: {\n        color: \"#003A56\"\n      }\n    }), /*#__PURE__*/React.createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Item, {\n      className: \"username_Dropdown_items NavFonts\",\n      id: \"logout\",\n      onClick: logout\n    }, \"Log Out\"));\n  }\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    variant: \"dark\",\n    id: \"Navbar\",\n    expand: \"true\",\n    className: \"mb-3\",\n    style: {\n      backgroundColor: theme_color,\n      fontFamily: \"Nunito\"\n    }\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    id: \"NavBar_leftside\"\n  }, /*#__PURE__*/React.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Toggle, {\n    \"aria-controls\": \"offcanvasNavbar-expand-true\",\n    id: \"navbar_menubtn\",\n    onClick: showChange\n  }), /*#__PURE__*/React.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Offcanvas, {\n    show: show,\n    id: \"offcanvasNavbar-expand-true\",\n    \"aria-labelledby\": \"offcanvasNavbarLabel-expand-true\",\n    style: {\n      backgroundColor: theme_color\n    },\n    onHide: showChange\n  }, /*#__PURE__*/React.createElement(react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Header, {\n    closeButton: true,\n    closeVariant: \"#E8F0F4\",\n    className: \"navbar_offcanvas\"\n  }, /*#__PURE__*/React.createElement(react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Title, {\n    id: \"offcanvasNavbarLabel-expand-true\"\n  }, /*#__PURE__*/React.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Brand, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink,\n    to: \"/\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    className: \"navbar_image\",\n    src: site_logo\n  })))), /*#__PURE__*/React.createElement(react_bootstrap_Offcanvas__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Body, null, returnNav)), /*#__PURE__*/React.createElement(\"div\", {\n    id: \"name_form\"\n  }, /*#__PURE__*/React.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Brand, {\n    as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink,\n    to: \"/\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    className: \"navbar_image\",\n    src: site_logo\n  })), searchShow == true ? /*#__PURE__*/React.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    className: \"d-flex\",\n    id: \"navbar_search_form\",\n    onSubmit: searchItem\n  }, /*#__PURE__*/React.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Control, {\n    type: \"search\",\n    placeholder: \"Search\",\n    className: \"me-2\",\n    \"aria-label\": \"Search\",\n    id: \"search_NavbarFormInput\"\n  }), /*#__PURE__*/React.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    className: \"btn\",\n    id: \"search_NavbarFormBtn\",\n    onClick: searchItem\n  }, /*#__PURE__*/React.createElement(\"i\", {\n    className: \"fa fa-search\"\n  }))) : /*#__PURE__*/React.createElement(React.Fragment, null))), /*#__PURE__*/React.createElement(\"div\", {\n    id: \"NavBar_rightside\"\n  }, /*#__PURE__*/React.createElement(\"div\", null, rightSide))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigationbar);\n\n//# sourceURL=webpack://capstoneprojectnode/./src/components/Navigationbar/Navigationbar.js?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bc78192263e752aa1998")
/******/ })();
/******/ 
/******/ }
;