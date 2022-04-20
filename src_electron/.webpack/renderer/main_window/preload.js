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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n// All of the Node.js APIs are available in the preload process.\n// It has the same sandbox as a Chrome extension.\n\nprocess.once(\"loaded\", () => {\n  console.log(\"PRELOADED PROCESS\");\n  electron__WEBPACK_IMPORTED_MODULE_0__.contextBridge.exposeInMainWorld(\"ariNote\", {\n    rpc: op => electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke(\"rpc\", op),\n    receive: (channel, func) => {\n      const validChannels = [\"app\"];\n\n      if (validChannels.includes(channel)) {\n        // Deliberately strip event as it includes `sender`\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.removeAllListeners(channel);\n        electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on(channel, (event, ...args) => func(...args));\n      }\n    },\n    appPlatform: process.platform\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvZWxlY3Ryb24vcHJlbG9hZC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFFQUUsT0FBTyxDQUFDQyxJQUFSLENBQWEsUUFBYixFQUF1QixNQUFNO0FBQzNCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBTCxFQUFBQSxxRUFBQSxDQUFnQyxTQUFoQyxFQUEyQztBQUN6Q08sSUFBQUEsR0FBRyxFQUFHQyxFQUFELElBSUNQLHdEQUFBLENBQW1CLEtBQW5CLEVBQTBCTyxFQUExQixDQUxtQztBQU16Q0UsSUFBQUEsT0FBTyxFQUFFLENBQUNDLE9BQUQsRUFBa0JDLElBQWxCLEtBQW1EO0FBQzFELFlBQU1DLGFBQWEsR0FBRyxDQUFDLEtBQUQsQ0FBdEI7O0FBQ0EsVUFBSUEsYUFBYSxDQUFDQyxRQUFkLENBQXVCSCxPQUF2QixDQUFKLEVBQXFDO0FBQ25DO0FBQ0FWLFFBQUFBLG9FQUFBLENBQStCVSxPQUEvQjtBQUNBVixRQUFBQSxvREFBQSxDQUFlVSxPQUFmLEVBQXdCLENBQUNNLEtBQUQsRUFBUSxHQUFHQyxJQUFYLEtBQW9CTixJQUFJLENBQUMsR0FBR00sSUFBSixDQUFoRDtBQUNEO0FBQ0YsS0Fid0M7QUFjekNDLElBQUFBLFdBQVcsRUFBRWpCLE9BQU8sQ0FBQ2tCO0FBZG9CLEdBQTNDO0FBZ0JELENBbEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjX2VsZWN0cm9uLy4vYXBwL2VsZWN0cm9uL3ByZWxvYWQudHM/MzA1MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbGwgb2YgdGhlIE5vZGUuanMgQVBJcyBhcmUgYXZhaWxhYmxlIGluIHRoZSBwcmVsb2FkIHByb2Nlc3MuXHJcbi8vIEl0IGhhcyB0aGUgc2FtZSBzYW5kYm94IGFzIGEgQ2hyb21lIGV4dGVuc2lvbi5cclxuaW1wb3J0IHsgY29udGV4dEJyaWRnZSwgaXBjUmVuZGVyZXIgfSBmcm9tIFwiZWxlY3Ryb25cIjtcclxuXHJcbnByb2Nlc3Mub25jZShcImxvYWRlZFwiLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJQUkVMT0FERUQgUFJPQ0VTU1wiKTtcclxuICBjb250ZXh0QnJpZGdlLmV4cG9zZUluTWFpbldvcmxkKFwiYXJpTm90ZVwiLCB7XHJcbiAgICBycGM6IChvcDoge1xyXG4gICAgICB0eXBlOiBcInF1ZXJ5XCIgfCBcIm11dGF0aW9uXCIgfCBcInN1YnNjcmlwdGlvblwiO1xyXG4gICAgICBpbnB1dDogdW5rbm93bjtcclxuICAgICAgcGF0aDogc3RyaW5nO1xyXG4gICAgfSkgPT4gaXBjUmVuZGVyZXIuaW52b2tlKFwicnBjXCIsIG9wKSxcclxuICAgIHJlY2VpdmU6IChjaGFubmVsOiBzdHJpbmcsIGZ1bmM6ICguLi5hcmdzOiBhbnkpID0+IHZvaWQpID0+IHtcclxuICAgICAgY29uc3QgdmFsaWRDaGFubmVscyA9IFtcImFwcFwiXTtcclxuICAgICAgaWYgKHZhbGlkQ2hhbm5lbHMuaW5jbHVkZXMoY2hhbm5lbCkpIHtcclxuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgc3RyaXAgZXZlbnQgYXMgaXQgaW5jbHVkZXMgYHNlbmRlcmBcclxuICAgICAgICBpcGNSZW5kZXJlci5yZW1vdmVBbGxMaXN0ZW5lcnMoY2hhbm5lbCk7XHJcbiAgICAgICAgaXBjUmVuZGVyZXIub24oY2hhbm5lbCwgKGV2ZW50LCAuLi5hcmdzKSA9PiBmdW5jKC4uLmFyZ3MpKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFwcFBsYXRmb3JtOiBwcm9jZXNzLnBsYXRmb3JtLFxyXG4gIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbImNvbnRleHRCcmlkZ2UiLCJpcGNSZW5kZXJlciIsInByb2Nlc3MiLCJvbmNlIiwiY29uc29sZSIsImxvZyIsImV4cG9zZUluTWFpbldvcmxkIiwicnBjIiwib3AiLCJpbnZva2UiLCJyZWNlaXZlIiwiY2hhbm5lbCIsImZ1bmMiLCJ2YWxpZENoYW5uZWxzIiwiaW5jbHVkZXMiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJvbiIsImV2ZW50IiwiYXJncyIsImFwcFBsYXRmb3JtIiwicGxhdGZvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/electron/preload.ts\n");

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