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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NewsCard */ \"./components/NewsCard.js\");\n\n\n\n// Test data\nconst newsArticles = [\n    {\n        title: 'Thinh qua dep trai',\n        description: 'Khong the cuong noi...',\n        year: '2023',\n        score: '9.0',\n        imageUrl: 'https://i.ibb.co/kHKq22y/image.png',\n        link: '#'\n    },\n    {\n        title: 'VUS Launches New App for Parents & Teens',\n        description: 'Introducing the Ovi Parents & Ovi Teens apps...',\n        year: '2023',\n        score: '8.5',\n        imageUrl: 'https://i.ibb.co/kHKq22y/image.png',\n        link: '#'\n    }\n];\nconst NewsPage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: styles.header,\n                children: \"Tin Tức\"\n            }, void 0, false, {\n                fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\pages\\\\news.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.newsGrid,\n                children: newsArticles.map((article, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: article.title,\n                        description: article.description,\n                        year: article.year,\n                        score: article.score,\n                        imageUrl: article.imageUrl,\n                        link: article.link\n                    }, index, false, {\n                        fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\pages\\\\news.js\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\pages\\\\news.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\hacker\\\\IE104 web\\\\Eng-Land\\\\frontend\\\\pages\\\\news.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NewsPage;\nconst styles = {\n    container: {\n        padding: '20px',\n        minHeight: '90vh',\n        width: '100%'\n    },\n    header: {\n        fontSize: '2.25rem',\n        fontWeight: 'bold',\n        marginTop: '2rem',\n        marginBottom: '3rem',\n        color: '#38b2ac',\n        textAlign: 'center'\n    },\n    newsGrid: {\n        display: 'grid',\n        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',\n        gap: '20px',\n        marginTop: '20px'\n    },\n    card: {\n        backgroundColor: 'white',\n        borderRadius: '8px',\n        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',\n        padding: '15px',\n        textAlign: 'center'\n    },\n    title: {\n        fontSize: '1.5em'\n    },\n    button: {\n        display: 'inline-block',\n        marginTop: '10px',\n        padding: '10px 15px',\n        backgroundColor: '#0070f3',\n        color: 'white',\n        borderRadius: '5px',\n        textDecoration: 'none'\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsPage);\nvar _c;\n$RefreshReg$(_c, \"NewsPage\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports signature on update so we can compare the boundary\r\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\r\n                module.hot.dispose(function (data) {\r\n                    data.prevSignature =\r\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevSignature !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevSignature !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsWUFBWTtBQUNaLE1BQU1FLGVBQWU7SUFDakI7UUFDRUMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLE1BQU07SUFDUjtJQUNBO1FBQ0VMLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxNQUFNO0lBQ1I7Q0FDRDtBQUVILE1BQU1DLFdBQVc7SUFDZixxQkFDRSw4REFBQ0M7UUFBSUMsT0FBT0MsT0FBT0MsU0FBUzs7MEJBQzFCLDhEQUFDQztnQkFBR0gsT0FBT0MsT0FBT0csTUFBTTswQkFBRTs7Ozs7OzBCQUMxQiw4REFBQ0w7Z0JBQUlDLE9BQU9DLE9BQU9JLFFBQVE7MEJBQ3hCZCxhQUFhZSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3hCLDhEQUFDbEIsNERBQVFBO3dCQUVURSxPQUFPZSxRQUFRZixLQUFLO3dCQUNwQkMsYUFBYWMsUUFBUWQsV0FBVzt3QkFDaENDLE1BQU1hLFFBQVFiLElBQUk7d0JBQ2xCQyxPQUFPWSxRQUFRWixLQUFLO3dCQUNwQkMsVUFBVVcsUUFBUVgsUUFBUTt3QkFDMUJDLE1BQU1VLFFBQVFWLElBQUk7dUJBTmJXOzs7Ozs7Ozs7Ozs7Ozs7O0FBWWpCO0tBbkJNVjtBQXFCTixNQUFNRyxTQUFTO0lBQ2JDLFdBQVc7UUFDVE8sU0FBUztRQUNUQyxXQUFXO1FBQ1hDLE9BQU87SUFDVDtJQUNBUCxRQUFRO1FBQ05RLFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxXQUFXO1FBQ1hDLGNBQWM7UUFDZEMsT0FBTztRQUNQQyxXQUFXO0lBQ2I7SUFDQVosVUFBVTtRQUNSYSxTQUFTO1FBQ1RDLHFCQUFxQjtRQUNyQkMsS0FBSztRQUNMTixXQUFXO0lBQ2I7SUFDQU8sTUFBTTtRQUNKQyxpQkFBaUI7UUFDakJDLGNBQWM7UUFDZEMsV0FBVztRQUNYZixTQUFTO1FBQ1RRLFdBQVc7SUFDYjtJQUNBekIsT0FBTztRQUNMb0IsVUFBVTtJQUNaO0lBQ0FhLFFBQVE7UUFDTlAsU0FBUztRQUNUSixXQUFXO1FBQ1hMLFNBQVM7UUFDVGEsaUJBQWlCO1FBQ2pCTixPQUFPO1FBQ1BPLGNBQWM7UUFDZEcsZ0JBQWdCO0lBQ2xCO0FBQ0Y7QUFFQSxpRUFBZTVCLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIkQ6XFxoYWNrZXJcXElFMTA0IHdlYlxcRW5nLUxhbmRcXGZyb250ZW5kXFxwYWdlc1xcbmV3cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmV3c0NhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9OZXdzQ2FyZCc7XHJcblxyXG4vLyBUZXN0IGRhdGFcclxuY29uc3QgbmV3c0FydGljbGVzID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1RoaW5oIHF1YSBkZXAgdHJhaScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnS2hvbmcgdGhlIGN1b25nIG5vaS4uLicsXHJcbiAgICAgIHllYXI6ICcyMDIzJyxcclxuICAgICAgc2NvcmU6ICc5LjAnLFxyXG4gICAgICBpbWFnZVVybDogJ2h0dHBzOi8vaS5pYmIuY28va0hLcTIyeS9pbWFnZS5wbmcnLFxyXG4gICAgICBsaW5rOiAnIycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1ZVUyBMYXVuY2hlcyBOZXcgQXBwIGZvciBQYXJlbnRzICYgVGVlbnMnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ0ludHJvZHVjaW5nIHRoZSBPdmkgUGFyZW50cyAmIE92aSBUZWVucyBhcHBzLi4uJyxcclxuICAgICAgeWVhcjogJzIwMjMnLFxyXG4gICAgICBzY29yZTogJzguNScsXHJcbiAgICAgIGltYWdlVXJsOiAnaHR0cHM6Ly9pLmliYi5jby9rSEtxMjJ5L2ltYWdlLnBuZycsXHJcbiAgICAgIGxpbms6ICcjJyxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbmNvbnN0IE5ld3NQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGgxIHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5UaW4gVOG7qWM8L2gxPlxyXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubmV3c0dyaWR9PlxyXG4gICAgICAgIHtuZXdzQXJ0aWNsZXMubWFwKChhcnRpY2xlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8TmV3c0NhcmRcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgdGl0bGU9e2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXthcnRpY2xlLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICB5ZWFyPXthcnRpY2xlLnllYXJ9XHJcbiAgICAgICAgICAgIHNjb3JlPXthcnRpY2xlLnNjb3JlfVxyXG4gICAgICAgICAgICBpbWFnZVVybD17YXJ0aWNsZS5pbWFnZVVybH1cclxuICAgICAgICAgICAgbGluaz17YXJ0aWNsZS5saW5rfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nOiAnMjBweCcsXHJcbiAgICBtaW5IZWlnaHQ6ICc5MHZoJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBoZWFkZXI6IHtcclxuICAgIGZvbnRTaXplOiAnMi4yNXJlbScsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBtYXJnaW5Ub3A6ICcycmVtJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzNyZW0nLFxyXG4gICAgY29sb3I6ICcjMzhiMmFjJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBuZXdzR3JpZDoge1xyXG4gICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSknLFxyXG4gICAgZ2FwOiAnMjBweCcsXHJcbiAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXHJcbiAgICBib3hTaGFkb3c6ICcwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpJyxcclxuICAgIHBhZGRpbmc6ICcxNXB4JyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6ICcxLjVlbScsXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgbWFyZ2luVG9wOiAnMTBweCcsXHJcbiAgICBwYWRkaW5nOiAnMTBweCAxNXB4JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDcwZjMnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3c1BhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5ld3NDYXJkIiwibmV3c0FydGljbGVzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInllYXIiLCJzY29yZSIsImltYWdlVXJsIiwibGluayIsIk5ld3NQYWdlIiwiZGl2Iiwic3R5bGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJoMSIsImhlYWRlciIsIm5ld3NHcmlkIiwibWFwIiwiYXJ0aWNsZSIsImluZGV4IiwicGFkZGluZyIsIm1pbkhlaWdodCIsIndpZHRoIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdhcCIsImNhcmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJidXR0b24iLCJ0ZXh0RGVjb3JhdGlvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/news.js\n"));

/***/ })

});