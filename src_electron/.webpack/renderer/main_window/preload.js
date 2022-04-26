/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/electron/preload.ts":
/*!*********************************!*\
  !*** ./app/electron/preload.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n// All of the Node.js APIs are available in the preload process.\n// It has the same sandbox as a Chrome extension.\n// const { contextBridge, ipcRenderer } = require(\"electron\");\n\nprocess.once(\"loaded\", () => {\n  electron__WEBPACK_IMPORTED_MODULE_0__.contextBridge.exposeInMainWorld(\"ariNote\", {\n    rpc: op => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke(\"rpc\", op),\n    receive: (channel, func) => {\n      const validChannels = [\"app\"];\n\n      if (validChannels.includes(channel)) {\n        // Deliberately strip event as it includes `sender`\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.removeAllListeners(channel);\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on(channel, (event, ...args) => func(...args));\n      }\n    },\n    appPlatform: process.platform\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvZWxlY3Ryb24vcHJlbG9hZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBRSxPQUFPLENBQUNDLElBQVIsQ0FBYSxRQUFiLEVBQXVCLE1BQU07QUFDM0JILEVBQUFBLHFFQUFBLENBQWdDLFNBQWhDLEVBQTJDO0FBQ3pDSyxJQUFBQSxHQUFHLEVBQUdDLEVBQUQsSUFJQ0wsd0RBQUEsQ0FBbUIsS0FBbkIsRUFBMEJLLEVBQTFCLENBTG1DO0FBTXpDRSxJQUFBQSxPQUFPLEVBQUUsQ0FBQ0MsT0FBRCxFQUFrQkMsSUFBbEIsS0FBcUM7QUFDNUMsWUFBTUMsYUFBYSxHQUFHLENBQUMsS0FBRCxDQUF0Qjs7QUFDQSxVQUFJQSxhQUFhLENBQUNDLFFBQWQsQ0FBdUJILE9BQXZCLENBQUosRUFBcUM7QUFDbkM7QUFDQVIsUUFBQUEsb0VBQUEsQ0FBK0JRLE9BQS9CO0FBQ0FSLFFBQUFBLG9EQUFBLENBQWVRLE9BQWYsRUFBd0IsQ0FBQ00sS0FBRCxFQUFRLEdBQUdDLElBQVgsS0FBb0JOLElBQUksQ0FBQyxHQUFHTSxJQUFKLENBQWhEO0FBQ0Q7QUFDRixLQWJ3QztBQWN6Q0MsSUFBQUEsV0FBVyxFQUFFZixPQUFPLENBQUNnQjtBQWRvQixHQUEzQztBQWdCRCxDQWpCRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NyY19lbGVjdHJvbi8uL2FwcC9lbGVjdHJvbi9wcmVsb2FkLnRzPzMwNTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQWxsIG9mIHRoZSBOb2RlLmpzIEFQSXMgYXJlIGF2YWlsYWJsZSBpbiB0aGUgcHJlbG9hZCBwcm9jZXNzLlxyXG4vLyBJdCBoYXMgdGhlIHNhbWUgc2FuZGJveCBhcyBhIENocm9tZSBleHRlbnNpb24uXHJcbi8vIGNvbnN0IHsgY29udGV4dEJyaWRnZSwgaXBjUmVuZGVyZXIgfSA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTtcclxuaW1wb3J0IHsgY29udGV4dEJyaWRnZSwgaXBjUmVuZGVyZXIgfSBmcm9tIFwiZWxlY3Ryb25cIjtcclxucHJvY2Vzcy5vbmNlKFwibG9hZGVkXCIsICgpID0+IHtcclxuICBjb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKFwiYXJpTm90ZVwiLCB7XHJcbiAgICBycGM6IChvcDoge1xyXG4gICAgICB0eXBlOiBcInF1ZXJ5XCIgfCBcIm11dGF0aW9uXCIgfCBcInN1YnNjcmlwdGlvblwiO1xyXG4gICAgICBpbnB1dDogdW5rbm93bjtcclxuICAgICAgcGF0aDogc3RyaW5nO1xyXG4gICAgfSkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKFwicnBjXCIsIG9wKSxcclxuICAgIHJlY2VpdmU6IChjaGFubmVsOiBzdHJpbmcsIGZ1bmM6IEZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbGlkQ2hhbm5lbHMgPSBbXCJhcHBcIl07XHJcbiAgICAgIGlmICh2YWxpZENoYW5uZWxzLmluY2x1ZGVzKGNoYW5uZWwpKSB7XHJcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IHN0cmlwIGV2ZW50IGFzIGl0IGluY2x1ZGVzIGBzZW5kZXJgXHJcbiAgICAgICAgaXBjUmVuZGVyZXIucmVtb3ZlQWxsTGlzdGVuZXJzKGNoYW5uZWwpO1xyXG4gICAgICAgIGlwY1JlbmRlcmVyLm9uKGNoYW5uZWwsIChldmVudCwgLi4uYXJncykgPT4gZnVuYyguLi5hcmdzKSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhcHBQbGF0Zm9ybTogcHJvY2Vzcy5wbGF0Zm9ybSxcclxuICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJjb250ZXh0QnJpZGdlIiwiaXBjUmVuZGVyZXIiLCJwcm9jZXNzIiwib25jZSIsImV4cG9zZUluTWFpbldvcmxkIiwicnBjIiwib3AiLCJpbnZva2UiLCJyZWNlaXZlIiwiY2hhbm5lbCIsImZ1bmMiLCJ2YWxpZENoYW5uZWxzIiwiaW5jbHVkZXMiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJvbiIsImV2ZW50IiwiYXJncyIsImFwcFBsYXRmb3JtIiwicGxhdGZvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/electron/preload.ts\n");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/electron/preload.ts");
/******/ 	
/******/ })()
;