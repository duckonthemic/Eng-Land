"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news",{

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst NewsPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: styles.header,\n                children: \"Tin Tức\"\n            }, void 0, false, {\n                fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\pages\\\\news.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.newsGrid,\n                children: newsArticles.map((article, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: styles.card,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                style: styles.title,\n                                children: article.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\pages\\\\news.js\",\n                                lineNumber: 10,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: article.description\n                            }, void 0, false, {\n                                fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\pages\\\\news.js\",\n                                lineNumber: 11,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                style: styles.button,\n                                children: \"Xem Th\\xeam\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\pages\\\\news.js\",\n                                lineNumber: 12,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\pages\\\\news.js\",\n                        lineNumber: 9,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\pages\\\\news.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\pages\\\\news.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NewsPage;\nconst newsArticles = [\n    {\n        title: 'TPP SCORES AWARD CEREMONY 2023',\n        description: 'Details about the award ceremony...'\n    },\n    {\n        title: 'VUS Launches New App for Parents & Teens',\n        description: 'Introducing the Ovi Parents & Ovi Teens apps...'\n    },\n    {\n        title: 'VUS English Community Celebrates 200th Class',\n        description: 'Celebrating a milestone in English learning...'\n    }\n];\nconst styles = {\n    container: {\n        padding: '20px',\n        backgroundColor: '#f0f8ff',\n        height: '100%',\n        width: '100%'\n    },\n    header: {\n        fontSize: '2.25rem',\n        fontWeight: 'bold',\n        marginBottom: '3rem',\n        color: '#38b2ac',\n        textAlign: 'center'\n    },\n    newsGrid: {\n        display: 'grid',\n        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',\n        gap: '20px',\n        marginTop: '20px'\n    },\n    card: {\n        backgroundColor: 'white',\n        borderRadius: '8px',\n        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',\n        padding: '15px',\n        textAlign: 'center'\n    },\n    title: {\n        fontSize: '1.5em'\n    },\n    button: {\n        display: 'inline-block',\n        marginTop: '10px',\n        padding: '10px 15px',\n        backgroundColor: '#0070f3',\n        color: 'white',\n        borderRadius: '5px',\n        textDecoration: 'none'\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsPage);\nvar _c;\n$RefreshReg$(_c, \"NewsPage\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports signature on update so we can compare the boundary\r\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\r\n                module.hot.dispose(function (data) {\r\n                    data.prevSignature =\r\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevSignature !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevSignature !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxXQUFXO0lBQ2YscUJBQ0UsOERBQUNDO1FBQUlDLE9BQU9DLE9BQU9DLFNBQVM7OzBCQUMxQiw4REFBQ0M7Z0JBQUdILE9BQU9DLE9BQU9HLE1BQU07MEJBQUU7Ozs7OzswQkFDMUIsOERBQUNMO2dCQUFJQyxPQUFPQyxPQUFPSSxRQUFROzBCQUN4QkMsYUFBYUMsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUMxQiw4REFBQ1Y7d0JBQWdCQyxPQUFPQyxPQUFPUyxJQUFJOzswQ0FDakMsOERBQUNDO2dDQUFHWCxPQUFPQyxPQUFPVyxLQUFLOzBDQUFHSixRQUFRSSxLQUFLOzs7Ozs7MENBQ3ZDLDhEQUFDQzswQ0FBR0wsUUFBUU0sV0FBVzs7Ozs7OzBDQUN2Qiw4REFBQ0M7Z0NBQUVDLE1BQUs7Z0NBQUloQixPQUFPQyxPQUFPZ0IsTUFBTTswQ0FBRTs7Ozs7Ozt1QkFIMUJSOzs7Ozs7Ozs7Ozs7Ozs7O0FBU3BCO0tBZk1YO0FBaUJOLE1BQU1RLGVBQWU7SUFDbkI7UUFDRU0sT0FBTztRQUNQRSxhQUFhO0lBQ2Y7SUFDQTtRQUNFRixPQUFPO1FBQ1BFLGFBQWE7SUFDZjtJQUNBO1FBQ0VGLE9BQU87UUFDUEUsYUFBYTtJQUNmO0NBRUQ7QUFFRCxNQUFNYixTQUFTO0lBQ2JDLFdBQVc7UUFDVGdCLFNBQVM7UUFDVEMsaUJBQWlCO1FBQ2pCQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBakIsUUFBUTtRQUNOa0IsVUFBVTtRQUNWQyxZQUFZO1FBQ1pDLGNBQWM7UUFDZEMsT0FBTztRQUNQQyxXQUFXO0lBQ2I7SUFDQXJCLFVBQVU7UUFDUnNCLFNBQVM7UUFDVEMscUJBQXFCO1FBQ3JCQyxLQUFLO1FBQ0xDLFdBQVc7SUFDYjtJQUNBcEIsTUFBTTtRQUNKUyxpQkFBaUI7UUFDakJZLGNBQWM7UUFDZEMsV0FBVztRQUNYZCxTQUFTO1FBQ1RRLFdBQVc7SUFDYjtJQUNBZCxPQUFPO1FBQ0xVLFVBQVU7SUFDWjtJQUNBTCxRQUFRO1FBQ05VLFNBQVM7UUFDVEcsV0FBVztRQUNYWixTQUFTO1FBQ1RDLGlCQUFpQjtRQUNqQk0sT0FBTztRQUNQTSxjQUFjO1FBQ2RFLGdCQUFnQjtJQUNsQjtBQUNGO0FBRUEsaUVBQWVuQyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJEOlxcaGFja2VyXFxJRTEwNCB3ZWJcXEVuZy1MYW5kXFxmcm9udGVuZFxccGFnZXNcXG5ld3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE5ld3NQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGgxIHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5UaW4gVOG7qWM8L2gxPlxyXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubmV3c0dyaWR9PlxyXG4gICAgICAgIHtuZXdzQXJ0aWNsZXMubWFwKChhcnRpY2xlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICA8aDIgc3R5bGU9e3N0eWxlcy50aXRsZX0+e2FydGljbGUudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPHA+e2FydGljbGUuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIHN0eWxlPXtzdHlsZXMuYnV0dG9ufT5YZW0gVGjDqm08L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbmV3c0FydGljbGVzID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnVFBQIFNDT1JFUyBBV0FSRCBDRVJFTU9OWSAyMDIzJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnRGV0YWlscyBhYm91dCB0aGUgYXdhcmQgY2VyZW1vbnkuLi4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdWVVMgTGF1bmNoZXMgTmV3IEFwcCBmb3IgUGFyZW50cyAmIFRlZW5zJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnSW50cm9kdWNpbmcgdGhlIE92aSBQYXJlbnRzICYgT3ZpIFRlZW5zIGFwcHMuLi4nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdWVVMgRW5nbGlzaCBDb21tdW5pdHkgQ2VsZWJyYXRlcyAyMDB0aCBDbGFzcycsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0NlbGVicmF0aW5nIGEgbWlsZXN0b25lIGluIEVuZ2xpc2ggbGVhcm5pbmcuLi4nLFxyXG4gIH0sXHJcbiAgLy8gQWRkIG1vcmUgYXJ0aWNsZXMgYXMgbmVlZGVkXHJcbl07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nOiAnMjBweCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjBmOGZmJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgZm9udFNpemU6ICcyLjI1cmVtJyxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzNyZW0nLFxyXG4gICAgY29sb3I6ICcjMzhiMmFjJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBuZXdzR3JpZDoge1xyXG4gICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSknLFxyXG4gICAgZ2FwOiAnMjBweCcsXHJcbiAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXHJcbiAgICBib3hTaGFkb3c6ICcwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpJyxcclxuICAgIHBhZGRpbmc6ICcxNXB4JyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6ICcxLjVlbScsXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgbWFyZ2luVG9wOiAnMTBweCcsXHJcbiAgICBwYWRkaW5nOiAnMTBweCAxNXB4JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDcwZjMnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c1BhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5ld3NQYWdlIiwiZGl2Iiwic3R5bGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJoMSIsImhlYWRlciIsIm5ld3NHcmlkIiwibmV3c0FydGljbGVzIiwibWFwIiwiYXJ0aWNsZSIsImluZGV4IiwiY2FyZCIsImgyIiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJhIiwiaHJlZiIsImJ1dHRvbiIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWlnaHQiLCJ3aWR0aCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwidGV4dEFsaWduIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJnYXAiLCJtYXJnaW5Ub3AiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJ0ZXh0RGVjb3JhdGlvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/news.js\n"));

/***/ })

});