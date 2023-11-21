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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LoadingComponent_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LoadingComponent/Loading */ \"./src/components/LoadingComponent/Loading.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar Data = function Data(_ref) {\n  var data = _ref.data;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),\n    _useState2 = _slicedToArray(_useState, 2),\n    nextPageNo = _useState2[0],\n    setNextPageNo = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState4 = _slicedToArray(_useState3, 2),\n    items = _useState4[0],\n    setItems = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState6 = _slicedToArray(_useState5, 2),\n    loading = _useState6[0],\n    setLoading = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n    _useState8 = _slicedToArray(_useState7, 2),\n    showLoadMore = _useState8[0],\n    setShowLoadMore = _useState8[1];\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n    _useState10 = _slicedToArray(_useState9, 2),\n    alertText = _useState10[0],\n    setAlertText = _useState10[1];\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState12 = _slicedToArray(_useState11, 2),\n    showAlert = _useState12[0],\n    setShowAlert = _useState12[1];\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n    _useState14 = _slicedToArray(_useState13, 2),\n    comments = _useState14[0],\n    setComments = _useState14[1];\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();\n\n  // style ---------------------------------------------------------------------------------------------------------------------------------------------\n  // desktop style -------------------------------------------------------------------------------------------------------------------------------------\n\n  var itemStyle = {\n    display: \"grid\",\n    gridTemplateColumns: \"29.5% 69.5%\",\n    gap: \"1%\",\n    backgroundColor: \"white\",\n    borderRadius: \"1em\",\n    padding: \"2em\",\n    marginTop: \"1em\",\n    cursor: \"pointer\"\n  };\n  var imageDiv = {\n    backgroundColor: \"white\",\n    width: \"100%\",\n    height: \"10em\",\n    display: \"flex\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    borderRadius: \"10px\"\n  };\n  var imageStyle = {\n    height: \"auto\",\n    maxHeight: \"10em\",\n    width: \"auto\",\n    maxWidth: \"100%\",\n    objectFit: \"cover\",\n    borderRadius: \"10px\"\n  };\n  var detailsDiv = {\n    paddingTop: \"1em\",\n    marginLeft: \"1em\",\n    width: \"100%\",\n    height: \"5em\",\n    display: \"grid\",\n    gridTemplateColumns: \"65% 35%\"\n  };\n  var dealTitleStyle = {\n    fontWeight: \"bold\",\n    fontSize: \"0.9em\",\n    backgroundColor: \"red\",\n    color: \"#E8F0F4\",\n    borderRadius: \"5px\",\n    width: \"fit-content\",\n    padding: \"2px 1em\",\n    textAlign: \"center\",\n    marginBottom: \".5rem\"\n  };\n  var priceDiv = {\n    fontSize: \"1.25em\"\n  };\n  var detailsText = {\n    zIndex: 0\n  };\n  var detailsBtn = {\n    display: \"flex\",\n    justifyContent: \"center\",\n    flexFlow: \"column\",\n    alignItems: \"center\",\n    gap: \"1em\"\n  };\n  var alertDiv = {\n    display: showAlert ? \"block\" : \"none\"\n  };\n\n  // style completed -----------------------------------------------------------------------------------------------------------------------------------\n\n  var loadMoreData = function loadMoreData(page) {\n    console.log(page);\n    setLoading(true);\n    var pathArr = location.pathname.split(\"/\");\n    if (data.length != 0 && pathArr[2] != undefined) {\n      setItems(data);\n      setLoading(false);\n      setShowLoadMore(false);\n    } else {\n      fetch(\"/getAllItems?page=\" + page).then(function (res) {\n        return res.json();\n      }).then(function (res) {\n        console.log(res);\n        setItems(items.concat(res.response));\n        setNextPageNo(res.nextPage);\n        if (res.response.length < 10) {\n          setShowLoadMore(false);\n        }\n        setLoading(false);\n      });\n    }\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    loadMoreData(nextPageNo);\n  }, []);\n\n  // work on the detials page.\n  var showItem = function showItem(category, deal, dealPrice, deal_title, description, image, imageName, name, price, quantity, rowid, title) {\n    var displayDescription = \"\";\n    var newDescription = \"\".concat(description).replace(\"\\n\", \" \");\n    if (newDescription.split(\" \").length > 50 || description.split(\"\\n\").length > 3) {\n      displayDescription = newDescription.split(\" \").slice(0, 50).join(\" \") + \"... \";\n    } else {\n      displayDescription = newDescription;\n    }\n    var clickOnItem = function clickOnItem() {\n      navigate(\"/details/\".concat(rowid));\n    };\n    var deleteBtnClick = function deleteBtnClick(e) {\n      e.stopPropagation();\n      fetch(\"/delete/\" + rowid).then(function (res) {\n        return res.text();\n      }).then(function (res) {\n        if (res == \"deleted\") {\n          setShowAlert(true);\n          setAlertText(\"Item has been deleted.\");\n          setTimeout(function () {\n            setShowAlert(false);\n            setAlertText(\"\");\n            loadMoreData(1);\n            window.location.reload();\n          }, 2000);\n        }\n      });\n    };\n    var showCommentClick = /*#__PURE__*/function () {\n      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {\n        var response, data, existingComments;\n        return _regeneratorRuntime().wrap(function _callee$(_context) {\n          while (1) switch (_context.prev = _context.next) {\n            case 0:\n              e.stopPropagation();\n              _context.next = 3;\n              return fetch('/getComments/' + rowid);\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n            case 6:\n              data = _context.sent;\n              existingComments = comments;\n              existingComments[rowid] = data;\n              _context.next = 11;\n              return setComments(existingComments);\n            case 11:\n              document.getElementById(\"item\".concat(rowid, \"Comments\")).style.display = \"block\";\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }, _callee);\n      }));\n      return function showCommentClick(_x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }();\n    var showCommentsDiv = function showCommentsDiv() {\n      if (rowid in comments) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, comments[rowid].map(function (comment) {\n          /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            key: comment.rowid,\n            style: {\n              marginTop: '5px',\n              marginBottom: '5px'\n            }\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            className: \"commentHeader\"\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            className: \"commenterName\"\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", null, comment.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"small\", null, comment.datetime, \" \"), comment.flag == \"0\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            style: {\n              color: \"gray\"\n            },\n            id: \"flagBtn\",\n            onClick: function onClick() {\n              return flagComment(comment);\n            }\n          }, \"\\u2691\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            style: {\n              color: \"red\"\n            },\n            id: \"flagBtn\",\n            onClick: function onClick() {\n              return flagComment(comment);\n            }\n          }, \"\\u2691\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n            className: \"commentText\"\n          }, comment.comment)));\n        }));\n      }\n    };\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      key: rowid,\n      style: itemStyle\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: imageDiv,\n      onClick: clickOnItem\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n      style: imageStyle,\n      className: \"itemImage\",\n      src: image\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: detailsDiv,\n      onClick: clickOnItem\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: detailsText\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, title), deal == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: dealTitleStyle\n    }, deal_title) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, displayDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: priceDiv\n    }, \"$ \", deal == 1 ? dealPrice : price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: detailsBtn\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: {\n        height: \"fit-content\",\n        zIndex: \"1\"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      type: \"button\",\n      className: \"btn btn-danger\",\n      value: \"Delete\",\n      onClick: deleteBtnClick\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: {\n        height: \"fit-content\",\n        zIndex: \"1\"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n      type: \"button\",\n      className: \"btn btn-success\",\n      value: \"Show Comments\",\n      onClick: showCommentClick\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      id: \"item\".concat(rowid, \"Comments\"),\n      style: {\n        display: \"none\"\n      }\n    }, showCommentsDiv()));\n  };\n  var returnContent = function returnContent() {\n    if (loading) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LoadingComponent_Loading__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n        style: alertDiv,\n        className: \"alert alert-danger\"\n      }, alertText), items.map(function (item) {\n        return showItem(item.category, item.deal, item.dealPrice, item.deal_title, item.description, item.image, item.imageName, item.name, item.price, item.quantity, item.rowid, item.title);\n      }), showLoadMore ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n        type: \"button\",\n        value: \"Load More\",\n        className: \"btn\",\n        onClick: function onClick() {\n          return loadMoreData(nextPageNo);\n        }\n      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null));\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, returnContent());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);\n\n//# sourceURL=webpack://capstoneprojectnode/./src/components/UsersAndData/Data.js?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("104ba4d1761c744f2e42")
/******/ })();
/******/ 
/******/ }
;