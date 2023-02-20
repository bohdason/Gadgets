/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/chekbox.js":
/*!**********************************!*\
  !*** ./src/assets/js/chekbox.js ***!
  \**********************************/
/***/ (function() {

eval("\r\nconst inputs = document.querySelectorAll(\".chekbox\");\r\nconst button = document.querySelector(\".chekbox_button\");\r\n\r\nconst handler = (e) => {\r\n  const chacked = document.querySelectorAll(\"input:checked\");\r\n  if (chacked.length === inputs.length) {\r\n    button.removeAttribute(\"disabled\");\r\n  } else {\r\n    button.setAttribute(\"disabled\", \"disabled\");\r\n  }\r\n}\r\n\r\ninputs.forEach(el => {\r\n  el.addEventListener(\"change\", handler);\r\n})\r\n\r\nconsole.log('heloo');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/chekbox.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/chekbox.js"]();
/******/ 	
/******/ })()
;