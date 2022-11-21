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

/***/ "./src/server/cart.js":
/*!****************************!*\
  !*** ./src/server/cart.js ***!
  \****************************/
/***/ ((module) => {

eval("let add = (cart, req) => {\n  cart.contents.push(req.body);\n  cart.countGoods += req.body.quantity;\n  cart.amount += req.body.price;\n  return JSON.stringify(cart, null, 2);\n};\n\nlet change = (cart, req) => {\n  let find = cart.contents.find(el => el.id_product === +req.params.id);\n  find.quantity += req.body.quantity;\n  cart.countGoods += req.body.quantity;\n  cart.amount += find.price * req.body.quantity;\n  return JSON.stringify(cart, null, 2);\n};\n\nlet remove = (cart, req) => {\n  let find = cart.contents.find(el => el.id_product === +req.params.id);\n  cart.countGoods -= req.body.quantity;\n  cart.amount -= find.price;\n  cart.contents.splice(cart.contents.indexOf(find), 1);\n  return JSON.stringify(cart, null, 2);\n};\n\nmodule.exports = {\n  add,\n  change,\n  remove\n};\n\n//# sourceURL=webpack://task-7/./src/server/cart.js?");

/***/ }),

/***/ "./src/server/cartRouter.js":
/*!**********************************!*\
  !*** ./src/server/cartRouter.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst router = express.Router();\n\nconst handler = __webpack_require__(/*! ./handler */ \"./src/server/handler.js\");\n\nrouter.get('/', (req, res) => {\n  fs.readFile('server/db/userCart.json', 'utf-8', (err, data) => {\n    if (err) {\n      res.sendStatus(404, JSON.stringify({\n        result: 0,\n        text: err\n      }));\n    } else {\n      res.send(data);\n    }\n  });\n});\nrouter.post('/', (req, res) => {\n  handler(req, res, 'add', 'server/db/userCart.json');\n});\nrouter.put('/:id', (req, res) => {\n  handler(req, res, 'change', 'server/db/userCart.json');\n});\nrouter.delete('/:id', (req, res) => {\n  handler(req, res, 'remove', 'server/db/userCart.json');\n});\nmodule.exports = router;\n\n//# sourceURL=webpack://task-7/./src/server/cartRouter.js?");

/***/ }),

/***/ "./src/server/handler.js":
/*!*******************************!*\
  !*** ./src/server/handler.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const cart = __webpack_require__(/*! ./cart */ \"./src/server/cart.js\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst actions = {\n  add: cart.add,\n  change: cart.change,\n  remove: cart.remove\n};\n\nlet handler = (req, res, action, file) => {\n  fs.readFile(file, 'utf-8', (err, data) => {\n    if (err) {\n      res.sendStatus(404, JSON.stringify({\n        result: 0,\n        text: err\n      }));\n    } else {\n      let newCart = actions[action](JSON.parse(data), req);\n      fs.writeFile(file, newCart, err => {\n        if (err) {\n          res.sendStatus(404, JSON.stringify({\n            result: 0,\n            text: err\n          }));\n        } else {\n          res.send(JSON.stringify({\n            result: 1\n          }));\n        }\n      });\n    }\n  });\n};\n\nmodule.exports = handler;\n\n//# sourceURL=webpack://task-7/./src/server/handler.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst app = express();\n\nconst cart = __webpack_require__(/*! ./cartRouter */ \"./src/server/cartRouter.js\"); //обработчик всех запросов корзины\n\n\napp.use(express.json());\napp.use('/', express.static('public/'));\napp.use('/api/cart', cart);\napp.get('/api/products', (req, res) => {\n  fs.readFile('server/db/products.json', 'utf-8', (err, data) => {\n    if (err) {\n      res.sendStatus(404, JSON.stringify({\n        result: 0,\n        text: err\n      }));\n    } else {\n      res.send(data);\n    }\n  });\n});\napp.get('/api/featured', (req, res) => {\n  fs.readFile('server/db/featuredItems.json', 'utf-8', (err, data) => {\n    if (err) {\n      res.sendStatus(404, JSON.stringify({\n        result: 0,\n        text: err\n      }));\n    } else {\n      res.send(data);\n    }\n  });\n});\nconst port = process.env.PORT || 3000;\napp.listen(port, () => console.log(`Listen on port ${port}...`));\n\n//# sourceURL=webpack://task-7/./src/server/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;