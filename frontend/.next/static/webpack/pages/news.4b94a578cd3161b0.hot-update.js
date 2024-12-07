/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news",{

/***/ "./data/news.js":
/*!**********************!*\
  !*** ./data/news.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NewsCard */ \"./components/NewsCard.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _data_news__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/news */ \"./data/news.js\");\n/* harmony import */ var _data_news__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_news__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n // Import the data from the new file\nconst NewsPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.container,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: styles.header,\n                        children: \"Tin Tức\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\pages\\\\news.js\",\n                        lineNumber: 10,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: styles.newsGrid,\n                        children: _data_news__WEBPACK_IMPORTED_MODULE_4___default().map((article, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                imageUrl: article.imageUrl,\n                                title: article.title,\n                                description: article.description,\n                                link: article.link\n                            }, index, false, {\n                                fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\pages\\\\news.js\",\n                                lineNumber: 13,\n                                columnNumber: 25\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\pages\\\\news.js\",\n                        lineNumber: 11,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\pages\\\\news.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\pages\\\\news.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\pages\\\\news.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, undefined);\n};\n_c = NewsPage;\nconst styles = {\n    container: {\n        minHeight: '90vh',\n        width: '100%',\n        padding: '0 5%',\n        paddingBottom: '12rem'\n    },\n    header: {\n        fontSize: '2.25rem',\n        fontWeight: 'bold',\n        marginTop: '2.5rem',\n        marginBottom: '3rem',\n        color: '#38b2ac',\n        textAlign: 'center'\n    },\n    newsGrid: {\n        display: 'grid',\n        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',\n        gap: '5%',\n        marginTop: '20px'\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsPage);\nvar _c;\n$RefreshReg$(_c, \"NewsPage\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports signature on update so we can compare the boundary\r\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\r\n                module.hot.dispose(function (data) {\r\n                    data.prevSignature =\r\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevSignature !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevSignature !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFDSjtBQUNGLENBQUMsb0NBQW9DO0FBRTdFLE1BQU1JLFdBQVc7SUFDYixxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDQTtnQkFBSUMsT0FBT0MsT0FBT0MsU0FBUzs7a0NBQ3hCLDhEQUFDQzt3QkFBR0gsT0FBT0MsT0FBT0csTUFBTTtrQ0FBRTs7Ozs7O2tDQUMxQiw4REFBQ0w7d0JBQUlDLE9BQU9DLE9BQU9JLFFBQVE7a0NBQ3RCUixxREFBZ0IsQ0FBQyxDQUFDVSxTQUFTQyxzQkFDeEIsOERBQUNiLDREQUFRQTtnQ0FFTGMsVUFBVUYsUUFBUUUsUUFBUTtnQ0FDMUJDLE9BQU9ILFFBQVFHLEtBQUs7Z0NBQ3BCQyxhQUFhSixRQUFRSSxXQUFXO2dDQUNoQ0MsTUFBTUwsUUFBUUssSUFBSTsrQkFKYko7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBU3JCLDhEQUFDWiwwREFBTUE7Ozs7Ozs7Ozs7O0FBR25CO0tBcEJNRTtBQXNCTixNQUFNRyxTQUFTO0lBQ1hDLFdBQVc7UUFDUFcsV0FBVztRQUNYQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsZUFBZTtJQUNuQjtJQUNBWixRQUFRO1FBQ0phLFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxXQUFXO1FBQ1hDLGNBQWM7UUFDZEMsT0FBTztRQUNQQyxXQUFXO0lBQ2Y7SUFDQWpCLFVBQVU7UUFDTmtCLFNBQVM7UUFDVEMscUJBQXFCO1FBQ3JCQyxLQUFLO1FBQ0xOLFdBQVc7SUFDZjtBQUNKO0FBRUEsaUVBQWVyQixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJEOlxcaGFja2VyXFxJRTEwNCB3ZWJcXEVuZy1MYW5kXFxmcm9udGVuZFxccGFnZXNcXG5ld3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5ld3NDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvTmV3c0NhcmQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuaW1wb3J0IG5ld3NBcnRpY2xlcyBmcm9tICcuLi9kYXRhL25ld3MnOyAvLyBJbXBvcnQgdGhlIGRhdGEgZnJvbSB0aGUgbmV3IGZpbGVcclxuXHJcbmNvbnN0IE5ld3NQYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17c3R5bGVzLmhlYWRlcn0+VGluIFThu6ljPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5uZXdzR3JpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAge25ld3NBcnRpY2xlcy5tYXAoKGFydGljbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdzQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gLy8gQWRkIGEgdW5pcXVlIGtleSBmb3IgZWFjaCBjYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybD17YXJ0aWNsZS5pbWFnZVVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2FydGljbGUuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rPXthcnRpY2xlLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgICBtaW5IZWlnaHQ6ICc5MHZoJyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwIDUlJyxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiAnMTJyZW0nLFxyXG4gICAgfSxcclxuICAgIGhlYWRlcjoge1xyXG4gICAgICAgIGZvbnRTaXplOiAnMi4yNXJlbScsXHJcbiAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgIG1hcmdpblRvcDogJzIuNXJlbScsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnM3JlbScsXHJcbiAgICAgICAgY29sb3I6ICcjMzhiMmFjJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIG5ld3NHcmlkOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpJyxcclxuICAgICAgICBnYXA6ICc1JScsXHJcbiAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c1BhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5ld3NDYXJkIiwiRm9vdGVyIiwibmV3c0FydGljbGVzIiwiTmV3c1BhZ2UiLCJkaXYiLCJzdHlsZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImgxIiwiaGVhZGVyIiwibmV3c0dyaWQiLCJtYXAiLCJhcnRpY2xlIiwiaW5kZXgiLCJpbWFnZVVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsaW5rIiwibWluSGVpZ2h0Iiwid2lkdGgiLCJwYWRkaW5nIiwicGFkZGluZ0JvdHRvbSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJnYXAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/news.js\n"));

/***/ })

});