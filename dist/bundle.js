/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/index.css"
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/utils/dom.ts"
/*!**************************!*\
  !*** ./src/utils/dom.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   getElementById: () => (/* binding */ getElementById),
/* harmony export */   getInputElementById: () => (/* binding */ getInputElementById)
/* harmony export */ });
/**
 * id属性からhtml要素を取得する
 * @param id
 * @return HTMLelement
 **/
const getElementById = (id) => {
    const element = document.getElementById(id);
    if (element === null) {
        throw new Error(`Element with id ${id} not found`);
    }
    return element;
};
const getInputElementById = (id) => {
    const element = document.getElementById(id);
    if (element === null) {
        throw new Error(`Element with id ${id} not found`);
    }
    return element;
};
/**
 * 引数に受け取った名前のDOM,textを生成する
 * @param elementName 要素名
 * @param textContent　要素のtextcontent
 * @returns HTMLElement
 */
const createElement = (elementName, textContent) => {
    const element = document.createElement(elementName);
    if (typeof textContent !== "undefined") {
        element.textContent = textContent;
    }
    return element;
};


/***/ },

/***/ "./src/utils/todo.ts"
/*!***************************!*\
  !*** ./src/utils/todo.ts ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendTodoList: () => (/* binding */ appendTodoList),
/* harmony export */   getNewTodo: () => (/* binding */ getNewTodo)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/utils/dom.ts");

/**
 * DOMのinput要素から新しいTODOの値を取得する
 * @returns Todo
 */
const getNewTodo = () => ({
    name: (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getInputElementById)("new-todo-name").value,
    person: (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getInputElementById)("new-person").value,
    deadline: (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getInputElementById)("deadline").value
});
/**
 *DOMにTODO一覧を表示する
 */
const appendTodoList = (todoList) => {
    todoList.forEach((todo) => {
        const nameTd = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", todo.name);
        const personTd = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", todo.name);
        const deadline = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", todo.name);
        const tr = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr");
        tr.appendChild(nameTd);
        tr.appendChild(personTd);
        tr.appendChild(deadline);
        const tbody = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getElementById)("todo-data");
        tbody.appendChild(tr);
    });
};


/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _utils_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/todo */ "./src/utils/todo.ts");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom */ "./src/utils/dom.ts");



const todoList = [];
document.addEventListener("DOMContentLoaded", () => {
    const registerButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_2__.getElementById)("register");
    registerButton.addEventListener("click", () => {
        // 新しいTODOをDOMから取得する
        todoList.push((0,_utils_todo__WEBPACK_IMPORTED_MODULE_1__.getNewTodo)());
        // TODO一覧を取得する
        (0,_utils_todo__WEBPACK_IMPORTED_MODULE_1__.appendTodoList)(todoList);
    });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map