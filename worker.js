/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/worker.js":
/*!***********************!*\
  !*** ./src/worker.js ***!
  \***********************/
/***/ (() => {

eval("\r\nconst CACHE_NAME = 'v1.0.' + new Date().getTime();\r\nconst urlsToCache = [\r\n    '../../',                   // home root\r\n    '../../index.html',         // index\r\n    '../../worker.js',         // worker\r\n    '../css/style.css',         // css\r\n    './main.js'                 // js\r\n];\r\n\r\n\r\nself.addEventListener('install', event => {\r\n    event.waitUntil(\r\n      caches.open(CACHE_NAME)\r\n        .then(cache => cache.addAll(urlsToCache))\r\n    );\r\n  });\r\n  \r\n  self.addEventListener('fetch', event => {\r\n    event.respondWith(\r\n      caches.match(event.request)\r\n        .then(response => {\r\n          // Cache hit - return response\r\n          if (response) {\r\n            return response;\r\n          }\r\n  \r\n          // Clone the request\r\n          const fetchRequest = event.request.clone();\r\n  \r\n          // Network request\r\n          return fetch(fetchRequest)\r\n            .then(response => {\r\n              // Check if we received a valid response\r\n              if (!response || response.status !== 200 || response.type !== 'basic') {\r\n                return response;\r\n              }\r\n  \r\n              // Clone the response\r\n              const responseToCache = response.clone();\r\n  \r\n              caches.open(CACHE_NAME)\r\n                .then(cache => {\r\n                  cache.put(event.request, responseToCache);\r\n                });\r\n  \r\n              return response;\r\n            });\r\n        })\r\n    );\r\n  });\r\n  \r\n  self.addEventListener('activate', event => {\r\n    event.waitUntil(\r\n      caches.keys()\r\n        .then(cacheNames => {\r\n          return Promise.all(\r\n            cacheNames.map(cacheName => {\r\n              if (cacheName !== CACHE_NAME) {\r\n                console.log('Service Worke   r: clearing old cache', CACHE_NAME);\r\n                return caches.delete(cacheName);\r\n              }\r\n            })\r\n          );\r\n        })\r\n    );\r\n  });\n\n//# sourceURL=webpack://webpack-base/./src/worker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/worker.js"]();
/******/ 	
/******/ })()
;