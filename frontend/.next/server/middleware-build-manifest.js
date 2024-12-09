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
    "/": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/index.js"
    ],
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
    "/consult": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/consult.js"
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
    "/news/[id]": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/news/[id].js"
    ],
    "/selfstudy": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/selfstudy.js"
    ],
    "/selfstudy/study-together": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/selfstudy/study-together.js"
    ],
    "/test": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/test.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];