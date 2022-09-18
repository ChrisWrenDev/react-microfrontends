"use strict";
(self["webpackChunkui_components"] = self["webpackChunkui_components"] || []).push([["src_Button_jsx"],{

/***/ "./src/Button.jsx":
/*!************************!*\
  !*** ./src/Button.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var shared_libraries_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-libraries/react */ "webpack/container/remote/shared-libraries/react");
/* harmony import */ var shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shared_libraries_react__WEBPACK_IMPORTED_MODULE_0__);

const styleMapping = {
  primary: {
    marginLeft: "10px",
    color: "#fff",
    backgroundColor: "#409eff",
    borderColor: "#409eff",
    padding: "12px 20px",
    fontSize: "14px",
    borderRadius: "4px",
    outline: "none",
    border: "1px solid #dcdfe6",
    cursor: "pointer"
  },
  warning: {
    marginLeft: "10px",
    color: "#fff",
    backgroundColor: "#e6a23c",
    borderColor: "#e6a23c",
    padding: "12px 20px",
    fontSize: "14px",
    borderRadius: "4px",
    outline: "none",
    border: "1px solid #dcdfe6",
    cursor: "pointer"
  }
};
class Button extends (shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    var type = this.props.type || "primary";
    return /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      style: styleMapping[type]
    }, type, " Button");
  }

}

/***/ })

}]);