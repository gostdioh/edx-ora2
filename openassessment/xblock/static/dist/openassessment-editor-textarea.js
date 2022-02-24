/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./openassessment/xblock/static/js/src/lms/editors/oa_editor_textarea.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./openassessment/xblock/static/js/src/lms/editors/oa_editor_textarea.js":
/*!*******************************************************************************!*\
  !*** ./openassessment/xblock/static/js/src/lms/editors/oa_editor_textarea.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n/**\n Handles Response Editor of simple textarea type.\n * */\n(function (define) {\n  define(function () {\n    var EditorTextarea = /*#__PURE__*/function () {\n      function EditorTextarea() {\n        _classCallCheck(this, EditorTextarea);\n      }\n\n      _createClass(EditorTextarea, [{\n        key: \"load\",\n\n        /**\n         Loads textarea editor.\n         Args:\n        elements (object): editor elements selected by jQuery\n        * */\n        value: function load(elements) {\n          this.elements = elements;\n          return Promise.resolve();\n        }\n        /**\n         Set on change listener to the editor.\n         Args:\n        handler (Function)\n        * */\n\n      }, {\n        key: \"setOnChangeListener\",\n        value: function setOnChangeListener(handler) {\n          this.elements.on('change keyup drop paste', handler);\n        }\n        /**\n         Set the response texts.\n        Retrieve the response texts.\n         Args:\n        texts (array of strings): If specified, the texts to set for the response.\n         Returns:\n        array of strings: The current response texts.\n        * */\n\n        /* eslint-disable-next-line consistent-return */\n\n      }, {\n        key: \"response\",\n        value: function response(texts) {\n          if (typeof texts === 'undefined') {\n            return this.elements.map(function () {\n              return $.trim($(this).val());\n            }).get();\n          }\n\n          this.elements.each(function (index) {\n            $(this).val(texts[index]);\n          });\n        }\n      }]);\n\n      return EditorTextarea;\n    }(); // return a function, to be able to create new instance everytime.\n\n\n    return function () {\n      return new EditorTextarea();\n    };\n  });\n}).call(window, window.define || window.RequireJS.define);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9vcGVuYXNzZXNzbWVudC94YmxvY2svc3RhdGljL2pzL3NyYy9sbXMvZWRpdG9ycy9vYV9lZGl0b3JfdGV4dGFyZWEuanM/YzFmMCJdLCJuYW1lcyI6WyJkZWZpbmUiLCJFZGl0b3JUZXh0YXJlYSIsImVsZW1lbnRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJoYW5kbGVyIiwib24iLCJ0ZXh0cyIsIm1hcCIsIiQiLCJ0cmltIiwidmFsIiwiZ2V0IiwiZWFjaCIsImluZGV4IiwiY2FsbCIsIndpbmRvdyIsIlJlcXVpcmVKUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsQ0FBQyxVQUFVQSxNQUFWLEVBQWtCO0FBQ2pCQSxRQUFNLENBQUMsWUFBTTtBQUFBLFFBQ0xDLGNBREs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFFVDtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBTmUsNkJBUUpDLFFBUkksRUFRTTtBQUNiLGVBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsaUJBQU9DLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQ0Q7QUFFRDtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQWpCZTtBQUFBO0FBQUEsNENBbUJXQyxPQW5CWCxFQW1Cb0I7QUFDM0IsZUFBS0gsUUFBTCxDQUFjSSxFQUFkLENBQWlCLHlCQUFqQixFQUE0Q0QsT0FBNUM7QUFDRDtBQUVEO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR007O0FBakNTO0FBQUE7QUFBQSxpQ0FrQ0FFLEtBbENBLEVBa0NPO0FBQ2QsY0FBSSxPQUFPQSxLQUFQLEtBQWlCLFdBQXJCLEVBQWtDO0FBQ2hDLG1CQUFPLEtBQUtMLFFBQUwsQ0FBY00sR0FBZCxDQUFrQixZQUFZO0FBQ25DLHFCQUFPQyxDQUFDLENBQUNDLElBQUYsQ0FBT0QsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRSxHQUFSLEVBQVAsQ0FBUDtBQUNELGFBRk0sRUFFSkMsR0FGSSxFQUFQO0FBR0Q7O0FBQ0QsZUFBS1YsUUFBTCxDQUFjVyxJQUFkLENBQW1CLFVBQVVDLEtBQVYsRUFBaUI7QUFDbENMLGFBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUUsR0FBUixDQUFZSixLQUFLLENBQUNPLEtBQUQsQ0FBakI7QUFDRCxXQUZEO0FBR0Q7QUEzQ1E7O0FBQUE7QUFBQSxTQThDWDs7O0FBQ0EsV0FBTyxZQUFZO0FBQ2pCLGFBQU8sSUFBSWIsY0FBSixFQUFQO0FBQ0QsS0FGRDtBQUdELEdBbERLLENBQU47QUFtREQsQ0FwREQsRUFvREdjLElBcERILENBb0RRQyxNQXBEUixFQW9EZ0JBLE1BQU0sQ0FBQ2hCLE1BQVAsSUFBaUJnQixNQUFNLENBQUNDLFNBQVAsQ0FBaUJqQixNQXBEbEQiLCJmaWxlIjoiLi9vcGVuYXNzZXNzbWVudC94YmxvY2svc3RhdGljL2pzL3NyYy9sbXMvZWRpdG9ycy9vYV9lZGl0b3JfdGV4dGFyZWEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiBIYW5kbGVzIFJlc3BvbnNlIEVkaXRvciBvZiBzaW1wbGUgdGV4dGFyZWEgdHlwZS5cbiAqICovXG5cbihmdW5jdGlvbiAoZGVmaW5lKSB7XG4gIGRlZmluZSgoKSA9PiB7XG4gICAgY2xhc3MgRWRpdG9yVGV4dGFyZWEge1xuICAgICAgLyoqXG4gICAgICAgTG9hZHMgdGV4dGFyZWEgZWRpdG9yLlxuXG4gICAgICBBcmdzOlxuICAgICAgZWxlbWVudHMgKG9iamVjdCk6IGVkaXRvciBlbGVtZW50cyBzZWxlY3RlZCBieSBqUXVlcnlcbiAgICAgICogKi9cbiAgICAgIGxvYWQoZWxlbWVudHMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgIFNldCBvbiBjaGFuZ2UgbGlzdGVuZXIgdG8gdGhlIGVkaXRvci5cblxuICAgICAgQXJnczpcbiAgICAgIGhhbmRsZXIgKEZ1bmN0aW9uKVxuICAgICAgKiAqL1xuICAgICAgc2V0T25DaGFuZ2VMaXN0ZW5lcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMub24oJ2NoYW5nZSBrZXl1cCBkcm9wIHBhc3RlJywgaGFuZGxlcik7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgIFNldCB0aGUgcmVzcG9uc2UgdGV4dHMuXG4gICAgICBSZXRyaWV2ZSB0aGUgcmVzcG9uc2UgdGV4dHMuXG5cbiAgICAgIEFyZ3M6XG4gICAgICB0ZXh0cyAoYXJyYXkgb2Ygc3RyaW5ncyk6IElmIHNwZWNpZmllZCwgdGhlIHRleHRzIHRvIHNldCBmb3IgdGhlIHJlc3BvbnNlLlxuXG4gICAgICBSZXR1cm5zOlxuICAgICAgYXJyYXkgb2Ygc3RyaW5nczogVGhlIGN1cnJlbnQgcmVzcG9uc2UgdGV4dHMuXG4gICAgICAqICovXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm4gKi9cbiAgICAgIHJlc3BvbnNlKHRleHRzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGV4dHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudHMubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAkLnRyaW0oJCh0aGlzKS52YWwoKSk7XG4gICAgICAgICAgfSkuZ2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50cy5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICQodGhpcykudmFsKHRleHRzW2luZGV4XSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybiBhIGZ1bmN0aW9uLCB0byBiZSBhYmxlIHRvIGNyZWF0ZSBuZXcgaW5zdGFuY2UgZXZlcnl0aW1lLlxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbmV3IEVkaXRvclRleHRhcmVhKCk7XG4gICAgfTtcbiAgfSk7XG59KS5jYWxsKHdpbmRvdywgd2luZG93LmRlZmluZSB8fCB3aW5kb3cuUmVxdWlyZUpTLmRlZmluZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./openassessment/xblock/static/js/src/lms/editors/oa_editor_textarea.js\n");

/***/ })

/******/ });