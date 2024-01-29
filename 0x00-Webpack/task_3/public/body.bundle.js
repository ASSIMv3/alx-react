(self["webpackChunktask_1"] = self["webpackChunktask_1"] || []).push([["body"],{

/***/ "./modules/body/body.js":
/*!******************************!*\
  !*** ./modules/body/body.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body.css */ "./modules/body/body.css");
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_body_css__WEBPACK_IMPORTED_MODULE_0__);

const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
const _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

$("body").append("<button>Click here to get started</button>");
$("body").append('<p id="count"><p>');

const updateCounter = () => {
  let times = $("#count").html() || 0;
  $("button").on("click", () => {
    times++;
    $("#count").html(`${times} clicks on the button`);
  });
};

_.debounce(updateCounter, 500);
updateCounter();


/***/ }),

/***/ "./modules/body/body.css":
/*!*******************************!*\
  !*** ./modules/body/body.css ***!
  \*******************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/css-loader/dist/cjs.js):\n\nSyntaxError\n\n(2:7) C:\\Users\\FRED\\alx-react\\task_3\\modules\\body\\body.css Unknown word\n\n \u001b[90m 1 | \u001b[39m\n\u001b[1m\u001b[31m>\u001b[39m\u001b[22m\u001b[90m 2 | \u001b[39m      import API from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m      \u001b[1m\u001b[31m^\u001b[39m\u001b[22m\n \u001b[90m 3 | \u001b[39m      import domAPI from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/styleDomAPI.js\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 4 | \u001b[39m      import insertFn from \u001b[32m\"!../../node_modules/style-loader/dist/runtime/insertBySelector.js\"\u001b[39m\u001b[33m;\u001b[39m\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_lodash_lodash_js"], () => (__webpack_exec__("./modules/body/body.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW9CO0FBQ3BCLFVBQVUsbUJBQU8sQ0FBQyxvREFBUTtBQUMxQixVQUFVLG1CQUFPLENBQUMsK0NBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2tfMS8uL21vZHVsZXMvYm9keS9ib2R5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vYm9keS5jc3NcIjtcclxuY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XHJcbmNvbnN0IF8gPSByZXF1aXJlKFwibG9kYXNoXCIpO1xyXG5cclxuJChcImJvZHlcIikuYXBwZW5kKFwiPGJ1dHRvbj5DbGljayBoZXJlIHRvIGdldCBzdGFydGVkPC9idXR0b24+XCIpO1xyXG4kKFwiYm9keVwiKS5hcHBlbmQoJzxwIGlkPVwiY291bnRcIj48cD4nKTtcclxuXHJcbmNvbnN0IHVwZGF0ZUNvdW50ZXIgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWVzID0gJChcIiNjb3VudFwiKS5odG1sKCkgfHwgMDtcclxuICAkKFwiYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgdGltZXMrKztcclxuICAgICQoXCIjY291bnRcIikuaHRtbChgJHt0aW1lc30gY2xpY2tzIG9uIHRoZSBidXR0b25gKTtcclxuICB9KTtcclxufTtcclxuXHJcbl8uZGVib3VuY2UodXBkYXRlQ291bnRlciwgNTAwKTtcclxudXBkYXRlQ291bnRlcigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=