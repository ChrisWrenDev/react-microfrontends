"use strict";
(self["webpackChunkui_components"] = self["webpackChunkui_components"] || []).push([["src_Dialog_jsx"],{

/***/ "./src/Dialog.jsx":
/*!************************!*\
  !*** ./src/Dialog.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dialog)
/* harmony export */ });
/* harmony import */ var shared_libraries_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-libraries/react */ "webpack/container/remote/shared-libraries/react");
/* harmony import */ var shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shared_libraries_react__WEBPACK_IMPORTED_MODULE_0__);

const wrapperStyle = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 2000,
  height: "100%",
  backgroundColor: "rgba(0,0,0,.5)",
  overflow: "auto"
};
const boxStyle = {
  width: "30%",
  margin: "0 auto 50px",
  marginTop: "15vh",
  padding: "20px",
  backgroundColor: "#fff"
};
class Dialog extends (shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.visible) {
      return /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: wrapperStyle
      }, /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        style: boxStyle
      }, /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "What is your name ?"), /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
        style: {
          fontSize: "18px",
          lineHeight: 2
        },
        type: "text"
      })), /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        style: {
          marginTop: "10px"
        },
        onClick: () => this.props.switchVisible(false)
      }, "close It!")));
    } else {
      return null;
    }
  }

}

/***/ })

}]);