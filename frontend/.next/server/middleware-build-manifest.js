self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "rootMainFilesTree": {},
  "pages": {
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/about": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/about.js"
    ],
    "/articles/[id]": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/articles/[id].js"
    ],
    "/consult": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/consult.js"
    ],
    "/forgotpassword": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/forgotpassword.js"
    ],
    "/login": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/login.js"
    ],
    "/news": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/news.js"
    ],
    "/signup": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/signup.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];