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

/***/ "./components/NewsCard.js":
/*!********************************!*\
  !*** ./components/NewsCard.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// components/NewsCard.js\n\n\nconst NewsCard = (param)=>{\n    let { title, description, year, score, imageUrl, link } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.card,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imageUrl,\n                alt: title,\n                style: styles.image\n            }, void 0, false, {\n                fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\components\\\\NewsCard.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: styles.title,\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\components\\\\NewsCard.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: styles.description,\n                children: description\n            }, void 0, false, {\n                fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\components\\\\NewsCard.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {}\n            }, void 0, false, {\n                fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\components\\\\NewsCard.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: link,\n                style: styles.link,\n                children: \"Xem th\\xeam\"\n            }, void 0, false, {\n                fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\components\\\\NewsCard.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\components\\\\NewsCard.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NewsCard;\n// Styles for NewsCard\nconst styles = {\n    card: {\n        background: '#e0f7fa',\n        borderRadius: '20px',\n        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',\n        padding: '20px',\n        textAlign: 'center',\n        transition: 'transform 0.3s',\n        cursor: 'pointer'\n    },\n    image: {\n        width: '100%',\n        height: 'auto',\n        borderRadius: '8px'\n    },\n    title: {\n        fontSize: '1.5rem',\n        color: '#00796b',\n        margin: '10px 0',\n        fontWeight: 'bold'\n    },\n    year: {\n        fontSize: '1rem',\n        color: '#004d40',\n        margin: '5px 0'\n    },\n    description: {\n        color: '#555',\n        fontSize: '0.9rem',\n        margin: '10px 0'\n    },\n    link: {\n        background: '#00796b',\n        color: '#ffffff',\n        padding: '10px 15px',\n        borderRadius: '5px',\n        textDecoration: 'none',\n        display: 'inline-block',\n        marginTop: '10px'\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsCard);\nvar _c;\n$RefreshReg$(_c, \"NewsCard\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports signature on update so we can compare the boundary\r\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\r\n                module.hot.dispose(function (data) {\r\n                    data.prevSignature =\r\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevSignature !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevSignature !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05ld3NDYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEseUJBQXlCOztBQUNDO0FBRTFCLE1BQU1DLFdBQVc7UUFBQyxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFO0lBQ25FLHFCQUNFLDhEQUFDQztRQUFJQyxPQUFPQyxPQUFPQyxJQUFJOzswQkFDckIsOERBQUNDO2dCQUFJQyxLQUFLUDtnQkFBVVEsS0FBS1o7Z0JBQU9PLE9BQU9DLE9BQU9LLEtBQUs7Ozs7OzswQkFDbkQsOERBQUNDO2dCQUFHUCxPQUFPQyxPQUFPUixLQUFLOzBCQUFHQTs7Ozs7OzBCQUMxQiw4REFBQ2U7Z0JBQUVSLE9BQU9DLE9BQU9QLFdBQVc7MEJBQUdBOzs7Ozs7MEJBQy9CLDhEQUFDSztnQkFBSUMsT0FBTyxDQUFDOzs7Ozs7MEJBQ2IsOERBQUNTO2dCQUFFQyxNQUFNWjtnQkFBTUUsT0FBT0MsT0FBT0gsSUFBSTswQkFBRTs7Ozs7Ozs7Ozs7O0FBR3pDO0tBVk1OO0FBWU4sc0JBQXNCO0FBQ3RCLE1BQU1TLFNBQVM7SUFDYkMsTUFBTTtRQUNKUyxZQUFZO1FBQ1pDLGNBQWM7UUFDZEMsV0FBVztRQUNYQyxTQUFTO1FBQ1RDLFdBQVc7UUFDWEMsWUFBWTtRQUNaQyxRQUFRO0lBQ1Y7SUFDQVgsT0FBTztRQUNMWSxPQUFPO1FBQ1BDLFFBQVE7UUFDUlAsY0FBYztJQUNoQjtJQUNBbkIsT0FBTztRQUNMMkIsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E1QixNQUFNO1FBQ0p5QixVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsUUFBUTtJQUNWO0lBQ0E1QixhQUFhO1FBQ1gyQixPQUFPO1FBQ1BELFVBQVU7UUFDVkUsUUFBUTtJQUNWO0lBQ0F4QixNQUFNO1FBQ0phLFlBQVk7UUFDWlUsT0FBTztRQUNQUCxTQUFTO1FBQ1RGLGNBQWM7UUFDZFksZ0JBQWdCO1FBQ2hCQyxTQUFTO1FBQ1RDLFdBQVc7SUFDYjtBQUNGO0FBRUEsaUVBQWVsQyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJEOlxcaGFja2VyXFxJRTEwNCB3ZWJcXEVuZy1MYW5kXFxmcm9udGVuZFxcY29tcG9uZW50c1xcTmV3c0NhcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9OZXdzQ2FyZC5qc1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTmV3c0NhcmQgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIHllYXIsIHNjb3JlLCBpbWFnZVVybCwgbGluayB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBhbHQ9e3RpdGxlfSBzdHlsZT17c3R5bGVzLmltYWdlfSAvPlxyXG4gICAgICA8aDIgc3R5bGU9e3N0eWxlcy50aXRsZX0+e3RpdGxlfTwvaDI+XHJcbiAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3t9fT48L2Rpdj5cclxuICAgICAgPGEgaHJlZj17bGlua30gc3R5bGU9e3N0eWxlcy5saW5rfT5YZW0gdGjDqm08L2E+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gU3R5bGVzIGZvciBOZXdzQ2FyZFxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2FyZDoge1xyXG4gICAgYmFja2dyb3VuZDogJyNlMGY3ZmEnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXHJcbiAgICBib3hTaGFkb3c6ICcwIDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXHJcbiAgICBwYWRkaW5nOiAnMjBweCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjNzJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6ICcxLjVyZW0nLFxyXG4gICAgY29sb3I6ICcjMDA3OTZiJyxcclxuICAgIG1hcmdpbjogJzEwcHggMCcsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgfSxcclxuICB5ZWFyOiB7XHJcbiAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgY29sb3I6ICcjMDA0ZDQwJyxcclxuICAgIG1hcmdpbjogJzVweCAwJyxcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBjb2xvcjogJyM1NTUnLFxyXG4gICAgZm9udFNpemU6ICcwLjlyZW0nLFxyXG4gICAgbWFyZ2luOiAnMTBweCAwJyxcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIGJhY2tncm91bmQ6ICcjMDA3OTZiJyxcclxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICBwYWRkaW5nOiAnMTBweCAxNXB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICBtYXJnaW5Ub3A6ICcxMHB4JyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c0NhcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTmV3c0NhcmQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwieWVhciIsInNjb3JlIiwiaW1hZ2VVcmwiLCJsaW5rIiwiZGl2Iiwic3R5bGUiLCJzdHlsZXMiLCJjYXJkIiwiaW1nIiwic3JjIiwiYWx0IiwiaW1hZ2UiLCJoMiIsInAiLCJhIiwiaHJlZiIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJwYWRkaW5nIiwidGV4dEFsaWduIiwidHJhbnNpdGlvbiIsImN1cnNvciIsIndpZHRoIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsIm1hcmdpbiIsImZvbnRXZWlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NewsCard.js\n"));

/***/ })

});