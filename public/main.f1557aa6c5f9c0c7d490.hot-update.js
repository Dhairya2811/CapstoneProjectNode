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

/***/ "./src/components/ItmeDetails/ItemDetails.js":
/*!***************************************************!*\
  !*** ./src/components/ItmeDetails/ItemDetails.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _Error404_Error404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Error404/Error404 */ \"./src/components/Error404/Error404.js\");\n/* harmony import */ var _StarRating_StarRating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StarRating/StarRating */ \"./src/components/StarRating/StarRating.js\");\n/* harmony import */ var _LoadingComponent_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LoadingComponent/Loading */ \"./src/components/LoadingComponent/Loading.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nvar _this = undefined;\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar ItemDetails = function ItemDetails() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n    _useState2 = _slicedToArray(_useState, 2),\n    item = _useState2[0],\n    setItem = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState4 = _slicedToArray(_useState3, 2),\n    itemLoaded = _useState4[0],\n    setItemLoaded = _useState4[1];\n  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)(),\n    id = _useParams.id;\n  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();\n  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation)();\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n    _useState6 = _slicedToArray(_useState5, 2),\n    commentLoading = _useState6[0],\n    setCommentLoading = _useState6[1];\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState8 = _slicedToArray(_useState7, 2),\n    comments = _useState8[0],\n    setComments = _useState8[1];\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState10 = _slicedToArray(_useState9, 2),\n    starReviewOpen = _useState10[0],\n    setStarReviewOpen = _useState10[1];\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n    _useState12 = _slicedToArray(_useState11, 2),\n    reviewLoading = _useState12[0],\n    setReviewLoading = _useState12[1];\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n    _useState14 = _slicedToArray(_useState13, 2),\n    rates = _useState14[0],\n    setRates = _useState14[1];\n  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n    _useState16 = _slicedToArray(_useState15, 2),\n    username = _useState16[0],\n    setUserName = _useState16[1];\n  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n    _useState18 = _slicedToArray(_useState17, 2),\n    blocked = _useState18[0],\n    setBlocked = _useState18[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var user = JSON.parse(sessionStorage.getItem(\"user\"));\n    setUserName(user.username);\n    setBlocked(user.blocked);\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {\n        return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n          while (1) switch (_context2.prev = _context2.next) {\n            case 0:\n              if (!(itemLoaded == false)) {\n                _context2.next = 4;\n                break;\n              }\n              _context2.next = 3;\n              return setItemLoaded(true);\n            case 3:\n              fetch(\"/getItem/\".concat(id)).then(function (res) {\n                return res.json();\n              }).then( /*#__PURE__*/function () {\n                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(res) {\n                  return _regeneratorRuntime().wrap(function _callee$(_context) {\n                    while (1) switch (_context.prev = _context.next) {\n                      case 0:\n                        _context.next = 2;\n                        return setItem(res);\n                      case 2:\n                        _context.next = 4;\n                        return setItemLoaded(false);\n                      case 4:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }, _callee);\n                }));\n                return function (_x2) {\n                  return _ref2.apply(this, arguments);\n                };\n              }());\n            case 4:\n              if (!(commentLoading == true)) {\n                _context2.next = 7;\n                break;\n              }\n              _context2.next = 7;\n              return getCommentData();\n            case 7:\n              if (!(reviewLoading == true)) {\n                _context2.next = 10;\n                break;\n              }\n              _context2.next = 10;\n              return getReviewData();\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }, _callee2);\n      }));\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n    fetchData();\n  }, [location]);\n  var getCommentData = function getCommentData() {\n    fetch(\"/getComments/\" + id).then(function (res) {\n      return res.json();\n    }).then(function (res) {\n      setCommentLoading(false);\n      setComments(res);\n    });\n  };\n  var getReviewData = /*#__PURE__*/function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {\n      var res, data;\n      return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n        while (1) switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return fetch(\"/aveReview/?itemid=\" + id);\n          case 3:\n            res = _context3.sent;\n            if (!res.ok) {\n              _context3.next = 11;\n              break;\n            }\n            _context3.next = 7;\n            return res.json();\n          case 7:\n            data = _context3.sent;\n            setRates(data.avg);\n            _context3.next = 12;\n            break;\n          case 11:\n            throw new Error('Something went wrong');\n          case 12:\n            _context3.next = 17;\n            break;\n          case 14:\n            _context3.prev = 14;\n            _context3.t0 = _context3[\"catch\"](0);\n            console.error(_context3.t0);\n          case 17:\n            _context3.prev = 17;\n            setReviewLoading(false);\n            return _context3.finish(17);\n          case 20:\n          case \"end\":\n            return _context3.stop();\n        }\n      }, _callee3, null, [[0, 14, 17, 20]]);\n    }));\n    return function getReviewData() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n  var starReviews = function starReviews() {\n    var stars = [];\n    for (var i = 1; i <= 5; i++) {\n      if (i <= Math.floor(rates)) {\n        stars.push( /*#__PURE__*/React.createElement(\"span\", null, /*#__PURE__*/React.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaStar, {\n          style: _defineProperty({\n            fontSize: 20,\n            color: '#E8F0F4',\n            stroke: '#003A56',\n            strokeWidth: 10\n          }, \"color\", \"#003A56\"),\n          id: \"star1\"\n        }), \"\\t\"));\n      } else {\n        stars.push( /*#__PURE__*/React.createElement(\"span\", null, /*#__PURE__*/React.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaStar, {\n          style: _defineProperty({\n            fontSize: 20,\n            color: '#E8F0F4',\n            stroke: '#003A56',\n            strokeWidth: 10\n          }, \"color\", \"#E8F0F4\"),\n          id: \"star1\"\n        }), \"\\t\"));\n      }\n    }\n    return stars;\n  };\n  var addToCart = function addToCart() {\n    var itemID = id;\n    fetch(\"/addToCart\", {\n      method: \"post\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      credentials: \"include\",\n      body: JSON.stringify({\n        username: username,\n        itemId: itemID,\n        cartAction: !item.inCart\n      })\n    }).then(function (res) {\n      return res.text();\n    }).then(function (res) {\n      navigate(\"/myCart\");\n    });\n  };\n  var editItem = function editItem() {\n    navigate(\"/editItem/\".concat(item.rowid));\n  };\n  var submitComment = function submitComment() {\n    var text = document.getElementById(\"commentText\").value;\n    if (text.length == 0) {} else {\n      var date = new Date();\n      var day = date.getDate();\n      var month = date.getMonth() + 1;\n      var year = date.getFullYear();\n      var currentDate = \"\".concat(day, \"-\").concat(month, \"-\").concat(year);\n      fetch(\"/addComment\", {\n        method: \"post\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        credentials: \"include\",\n        body: JSON.stringify({\n          username: username,\n          datetime: currentDate,\n          comment: text,\n          itemid: id\n        })\n      }).then(function (res) {\n        return res.text();\n      }).then(function (res) {\n        if (res == \"Inserted\") {\n          setCommentLoading(true);\n          navigate(\"/details/\" + id);\n        }\n      });\n      document.getElementById(\"commentText\").value = \"\";\n    }\n  };\n  var delItem = function delItem() {\n    fetch(\"/delete/\".concat(id)).then(function (res) {\n      return res.text();\n    }).then(function (res) {\n      navigate(\"/\");\n    });\n  };\n  var addComment = function addComment() {\n    if (blocked != 1) {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: \"addCommentDiv\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"addCommentTextarea\"\n      }, /*#__PURE__*/React.createElement(\"textarea\", {\n        className: \"form-control\",\n        id: \"commentText\",\n        style: {\n          borderRadius: \"10px 0px 0px 10px\"\n        },\n        rows: \"4\",\n        placeholder: \"Add comment for this item...\"\n      })), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"submitButton\"\n      }, /*#__PURE__*/React.createElement(\"button\", {\n        className: \"submitCommentBtn\",\n        style: {\n          backgroundColor: \"#003A56\"\n        },\n        onClick: submitComment.bind(_this)\n      }, /*#__PURE__*/React.createElement(\"i\", {\n        className: \"material-icons\",\n        style: {\n          color: \"white\"\n        }\n      }, \"send\"))));\n    }\n    return /*#__PURE__*/React.createElement(React.Fragment, null);\n  };\n  var checkout = function checkout() {\n    sessionStorage.setItem(\"items\", JSON.stringify([item]));\n    navigate(\"/payment\");\n  };\n  var addToCartBtnDisplay = function addToCartBtnDisplay() {\n    console.log(item);\n    if (username !== null) {\n      if (item.name == username) {\n        return /*#__PURE__*/React.createElement(\"div\", {\n          style: {\n            width: \"100%\"\n          }\n        }, /*#__PURE__*/React.createElement(\"input\", {\n          className: \"btn btn-primary cartBtn\",\n          style: {\n            backgroundColor: \"#003A56\",\n            borderColor: \"#003A56\"\n          },\n          type: \"button\",\n          value: \"Edit\",\n          onClick: editItem\n        }), /*#__PURE__*/React.createElement(\"input\", {\n          className: \"btn btn-danger cartBtn\",\n          type: \"button\",\n          style: {\n            backgroundColor: \"#a90119\",\n            borderColor: \"#a90119\"\n          },\n          value: \"Delete\",\n          onClick: delItem\n        }));\n      } else if (item.inCart !== true) {\n        return /*#__PURE__*/React.createElement(\"div\", {\n          style: {\n            width: \"100%\"\n          }\n        }, /*#__PURE__*/React.createElement(\"input\", {\n          className: \"btn btn-primary cartBtn\",\n          style: {\n            backgroundColor: \"#003A56\"\n          },\n          type: \"button\",\n          value: \"Add to cart\",\n          onClick: addToCart,\n          disabled: blocked == 1\n        }), /*#__PURE__*/React.createElement(\"input\", {\n          className: \"btn btn-success cartBtn\",\n          type: \"button\",\n          value: \"Checkout\",\n          onClick: checkout,\n          disabled: blocked == 1\n        }));\n      } else {\n        return /*#__PURE__*/React.createElement(\"div\", {\n          style: {\n            width: \"100%\"\n          }\n        }, /*#__PURE__*/React.createElement(\"input\", {\n          className: \"btn btn-danger cartBtn\",\n          type: \"button\",\n          value: \"Remove from cart\",\n          style: {\n            backgroundColor: \"#a90119\",\n            borderColor: \"#a90119\"\n          },\n          onClick: addToCart,\n          disabled: blocked == 1\n        }), /*#__PURE__*/React.createElement(\"input\", {\n          className: \"btn btn-success cartBtn\",\n          type: \"button\",\n          value: \"Checkout\",\n          onClick: checkout,\n          disabled: blocked == 1\n        }));\n      }\n    }\n  };\n  function flagComment(comment) {\n    if (blocked != 1) {\n      fetch(\"/flagComment\", {\n        method: \"post\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        credentials: \"include\",\n        body: JSON.stringify({\n          rowid: comment.rowid,\n          flag: comment.flag\n        })\n      }).then(function (res) {\n        return res.text();\n      }).then(function (res) {\n        if (res == \"flag_change\") {\n          getCommentData();\n        }\n      });\n    }\n  }\n  function displayComment(comment) {\n    return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"commentHeader\"\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"commenterName\"\n    }, /*#__PURE__*/React.createElement(\"h4\", null, comment.name), /*#__PURE__*/React.createElement(\"small\", null, comment.datetime, \" \"), comment.flag == \"0\" ? /*#__PURE__*/React.createElement(\"div\", {\n      style: {\n        color: \"gray\"\n      },\n      id: \"flagBtn\",\n      onClick: function onClick() {\n        return flagComment(comment);\n      }\n    }, \"\\u2691\") : /*#__PURE__*/React.createElement(\"div\", {\n      style: {\n        color: \"red\"\n      },\n      id: \"flagBtn\",\n      onClick: function onClick() {\n        return flagComment(comment);\n      }\n    }, \"\\u2691\"))), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"commentText\"\n    }, comment.comment));\n  }\n  var getComments = function getComments() {\n    if (comments.length != 0) {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        style: {\n          width: \"100%\",\n          padding: \"0 3%\"\n        }\n      }, comments.map(function (comment) {\n        return /*#__PURE__*/React.createElement(\"div\", null, displayComment(comment));\n      }));\n    }\n  };\n  var Overlay = function Overlay(_ref6) {\n    var starReviewOpen = _ref6.starReviewOpen;\n    var style = {\n      position: \"absolute\",\n      top: 0,\n      left: 0,\n      width: document.body.scrollWidth,\n      height: document.body.scrollHeight,\n      backgroundColor: \"rgba(0, 0, 0, 0.5)\",\n      zIndex: 999\n    };\n    return /*#__PURE__*/React.createElement(React.Fragment, null, starReviewOpen && /*#__PURE__*/React.createElement(\"div\", {\n      className: \"overlay\",\n      style: style\n    }));\n  };\n  var StarReviewClick = function StarReviewClick() {\n    setStarReviewOpen(true);\n  };\n  var closeClick = function closeClick() {\n    setTimeout(function () {\n      setStarReviewOpen(false);\n      getReviewData();\n    }, 50);\n  };\n  var returnFun = function returnFun() {\n    if (item == undefined && !itemLoaded) {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        style: {\n          zIndex: 1\n        }\n      }, /*#__PURE__*/React.createElement(_Error404_Error404__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        errorMessage: \"There is no item on this URL\",\n        linkAvailable: \"true\"\n      }));\n    } else if (item.item == \"undefined\" && !itemLoaded) {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        style: {\n          zIndex: 1\n        }\n      }, /*#__PURE__*/React.createElement(_Error404_Error404__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        errorMessage: \"There is no item on this URL\",\n        linkAvailable: \"true\"\n      }));\n    } else {\n      var getComment = getComments();\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: \"displayItemInfo\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"displayInfodiv\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"itemImageDisplay\"\n      }, /*#__PURE__*/React.createElement(\"img\", {\n        style: {\n          height: \"auto\",\n          maxHeight: \"450px\",\n          width: \"70%\",\n          maxWidth: \"450px\"\n        },\n        className: \"itemImage\",\n        src: item.image\n      })), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"itemInfoDisplay\"\n      }, /*#__PURE__*/React.createElement(\"h1\", {\n        className: \"title\"\n      }, item.title), /*#__PURE__*/React.createElement(\"small\", null, item.category), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"reviewDiv\"\n      }, reviewLoading ? /*#__PURE__*/React.createElement(\"p\", null, \"Loading...\") : /*#__PURE__*/React.createElement(\"button\", {\n        title: \"Give your review to this product.\",\n        style: {\n          backgroundColor: \"transparent\",\n          borderColor: \"transparent\",\n          marginLeft: \"-10\"\n        },\n        onClick: StarReviewClick,\n        disabled: blocked == 1\n      }, starReviews().map(function (star) {\n        return star;\n      })), /*#__PURE__*/React.createElement(\"br\", null), username != null && starReviewOpen ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Overlay, {\n        starReviewOpen: starReviewOpen\n      }), /*#__PURE__*/React.createElement(_StarRating_StarRating__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        starReviewOpen: starReviewOpen,\n        closeClick: closeClick,\n        itemid: id\n      })) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement(\"a\", {\n        href: \"#commentsDiv\"\n      }, \" \", comments.length, comments.length == 1 || comments.length == 0 ? /*#__PURE__*/React.createElement(\"span\", null, \" review\") : /*#__PURE__*/React.createElement(\"span\", null, \" reviews\"))), /*#__PURE__*/React.createElement(\"h4\", {\n        className: \"itemPrice\"\n      }, \"$\", item.deal == 1 ? item.dealPrice : item.price), /*#__PURE__*/React.createElement(\"pre\", {\n        className: \"itemDescription\"\n      }, item.description), addToCartBtnDisplay())), /*#__PURE__*/React.createElement(\"br\", null), username != null || comments.length != 0 ? /*#__PURE__*/React.createElement(\"div\", {\n        className: \"commentsDiv\",\n        id: \"commentsDiv\"\n      }, /*#__PURE__*/React.createElement(\"span\", {\n        className: \"commentHeading\"\n      }, /*#__PURE__*/React.createElement(\"h3\", null, \"Comment\")), username != null ? addComment() : /*#__PURE__*/React.createElement(React.Fragment, null), getComment) : /*#__PURE__*/React.createElement(React.Fragment, null));\n    }\n  };\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"itemDetailsPage\"\n  }, itemLoaded ? /*#__PURE__*/React.createElement(_LoadingComponent_Loading__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null) : returnFun());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemDetails);\n\n//# sourceURL=webpack://capstoneprojectnode/./src/components/ItmeDetails/ItemDetails.js?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fc4bc3804d29f5df24b5")
/******/ })();
/******/ 
/******/ }
;