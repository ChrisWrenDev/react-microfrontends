"use strict";
(self["webpackChunkcef_uk"] = self["webpackChunkcef_uk"] || []).push([["bootstrap_js"],{

/***/ "./App.jsx":
/*!*****************!*\
  !*** ./App.jsx ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var shared_libraries_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared-libraries/react */ "webpack/container/remote/shared-libraries/react");
/* harmony import */ var shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shared_libraries_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ui_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui-components/Button */ "webpack/container/remote/ui-components/Button");
/* harmony import */ var ui_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ui_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ui_components_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui-components/Dialog */ "webpack/container/remote/ui-components/Dialog");
/* harmony import */ var ui_components_Dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ui_components_Dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ui_components_ToolTip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui-components/ToolTip */ "webpack/container/remote/ui-components/ToolTip");
/* harmony import */ var ui_components_ToolTip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ui_components_ToolTip__WEBPACK_IMPORTED_MODULE_3__);




class App extends (shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSwitchVisible = this.handleSwitchVisible.bind(this);
  }

  handleClick(ev) {
    console.log(ev);
    this.setState({
      dialogVisible: true
    });
  }

  handleSwitchVisible(visible) {
    this.setState({
      dialogVisible: visible
    });
  }

  render() {
    return /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "CEF UK"), /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "shared-libraries"), " provides react\u3001react-dom js files to microfrontends"), /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "ui-components"), " provides ui components to microfrontends"), /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Buttons:"), /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement((ui_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
      type: "primary"
    }), /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement((ui_components_Button__WEBPACK_IMPORTED_MODULE_1___default()), {
      type: "warning"
    }), /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "Dialog:"), /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: this.handleClick
    }, "click me to open Dialog"), /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement((ui_components_Dialog__WEBPACK_IMPORTED_MODULE_2___default()), {
      switchVisible: this.handleSwitchVisible,
      visible: this.state.dialogVisible
    }), /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "hover me please!"), /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_0___default().createElement((ui_components_ToolTip__WEBPACK_IMPORTED_MODULE_3___default()), {
      content: "hover me please",
      message: "Hello,world!"
    }));
  }

}

/***/ }),

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.jsx */ "./App.jsx");
/* harmony import */ var shared_libraries_react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared-libraries/react-dom */ "webpack/container/remote/shared-libraries/react-dom");
/* harmony import */ var shared_libraries_react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shared_libraries_react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_libraries_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared-libraries/react */ "webpack/container/remote/shared-libraries/react");
/* harmony import */ var shared_libraries_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shared_libraries_react__WEBPACK_IMPORTED_MODULE_2__);



shared_libraries_react_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/shared_libraries_react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_App_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null), document.getElementById("app"));

/***/ })

}]);