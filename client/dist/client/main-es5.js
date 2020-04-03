function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_all_data_all_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/all-data/all-data.component */
    "./src/app/components/all-data/all-data.component.ts");

    var routes = [{
      path: '',
      component: _components_all_data_all_data_component__WEBPACK_IMPORTED_MODULE_2__["AllDataComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_all_data_all_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/all-data/all-data.component */
    "./src/app/components/all-data/all-data.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'client';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-all-data");
        }
      },
      directives: [_components_all_data_all_data_component__WEBPACK_IMPORTED_MODULE_1__["AllDataComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_all_data_all_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/all-data/all-data.component */
    "./src/app/components/all-data/all-data.component.ts");
    /* harmony import */


    var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/nav-bar/nav-bar.component */
    "./src/app/components/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _components_one_student_one_student_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/one-student/one-student.component */
    "./src/app/components/one-student/one-student.component.ts");
    /* harmony import */


    var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pipes/reverse.pipe */
    "./src/app/pipes/reverse.pipe.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_all_data_all_data_component__WEBPACK_IMPORTED_MODULE_5__["AllDataComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"], _components_one_student_one_student_component__WEBPACK_IMPORTED_MODULE_7__["OneStudentComponent"], _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_8__["ReversePipe"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_all_data_all_data_component__WEBPACK_IMPORTED_MODULE_5__["AllDataComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"], _components_one_student_one_student_component__WEBPACK_IMPORTED_MODULE_7__["OneStudentComponent"], _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_8__["ReversePipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/all-data/all-data.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/all-data/all-data.component.ts ***!
    \***********************************************************/

  /*! exports provided: AllDataComponent */

  /***/
  function srcAppComponentsAllDataAllDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllDataComponent", function () {
      return AllDataComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/server.service */
    "./src/app/services/server.service.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/components/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _one_student_one_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../one-student/one-student.component */
    "./src/app/components/one-student/one-student.component.ts");
    /* harmony import */


    var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../pipes/reverse.pipe */
    "./src/app/pipes/reverse.pipe.ts");

    function AllDataComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-one-student", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var student_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("student", student_r1);
      }
    }

    var AllDataComponent = /*#__PURE__*/function () {
      function AllDataComponent(_http) {
        _classCallCheck(this, AllDataComponent);

        this._http = _http;
      }

      _createClass(AllDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._http.getData().subscribe(function (comingData) {
            _this.data = comingData;
          });
        }
      }]);

      return AllDataComponent;
    }();

    AllDataComponent.ɵfac = function AllDataComponent_Factory(t) {
      return new (t || AllDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]));
    };

    AllDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllDataComponent,
      selectors: [["app-all-data"]],
      decls: 4,
      vars: 3,
      consts: [["id", "allData"], [4, "ngFor", "ngForOf"], [3, "student"]],
      template: function AllDataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllDataComponent_div_2_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "reverse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.data));
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _one_student_one_student_component__WEBPACK_IMPORTED_MODULE_4__["OneStudentComponent"]],
      pipes: [_pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_5__["ReversePipe"]],
      styles: ["#allData[_ngcontent-%COMP%] {\n  margin: 7% 0 5% 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwtZGF0YS9DOlxcVXNlcnNcXEhcXERlc2t0b3BcXHNlcnZlci1leHByZXNzLXNsYXNoLWNvbW1hbmQtc2xhY2tcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWxsLWRhdGFcXGFsbC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FsbC1kYXRhL2FsbC1kYXRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsaUJBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxsLWRhdGEvYWxsLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWxsRGF0YSB7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIG1hcmdpbjogNyUgMCA1JSAwO1xyXG59XHJcbiIsIiNhbGxEYXRhIHtcbiAgbWFyZ2luOiA3JSAwIDUlIDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-all-data',
          templateUrl: './all-data.component.html',
          styleUrls: ['./all-data.component.scss']
        }]
      }], function () {
        return [{
          type: _services_server_service__WEBPACK_IMPORTED_MODULE_1__["ServerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/nav-bar/nav-bar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
    \*********************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppComponentsNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavBarComponent = /*#__PURE__*/function () {
      function NavBarComponent() {
        _classCallCheck(this, NavBarComponent);
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
      return new (t || NavBarComponent)();
    };

    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      decls: 12,
      vars: 0,
      consts: [[1, "navbar", "sticky", "navbar-dark", "bg-dark"], [1, "navbar-nav"], [1, "nav-item"], ["href", "/", 1, "navbar-brand"], ["src", "../../../assets/rbkLogo.png", "alt", "LOGO", 2, "width", "100px"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".navbar[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 17px -5px rgba(0, 0, 0, 0.75);\n}\n\n.sticky[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL0M6XFxVc2Vyc1xcSFxcRGVza3RvcFxcc2VydmVyLWV4cHJlc3Mtc2xhc2gtY29tbWFuZC1zbGFja1xcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXYtYmFyXFxuYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlEQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxN3B4IC01cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG4uc3RpY2t5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIi5uYXZiYXIge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDE3cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4uc3RpY2t5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-bar',
          templateUrl: './nav-bar.component.html',
          styleUrls: ['./nav-bar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/one-student/one-student.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/one-student/one-student.component.ts ***!
    \*****************************************************************/

  /*! exports provided: OneStudentComponent */

  /***/
  function srcAppComponentsOneStudentOneStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OneStudentComponent", function () {
      return OneStudentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OneStudentComponent = /*#__PURE__*/function () {
      function OneStudentComponent() {
        _classCallCheck(this, OneStudentComponent);
      }

      _createClass(OneStudentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OneStudentComponent;
    }();

    OneStudentComponent.ɵfac = function OneStudentComponent_Factory(t) {
      return new (t || OneStudentComponent)();
    };

    OneStudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OneStudentComponent,
      selectors: [["app-one-student"]],
      inputs: {
        student: "student"
      },
      decls: 6,
      vars: 2,
      consts: [[1, "container"], ["id", "data"], ["id", "username"], ["id", "text"]],
      template: function OneStudentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("User Name: ", ctx.student.userName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Text: ", ctx.student.text, "");
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  color: white;\n  font-size: x-large;\n  text-align: center;\n  background: linear-gradient(to bottom, #b52283, #ffffff6b);\n  border-radius: 5px;\n  width: 40%;\n  height: 200px;\n  box-shadow: 0px 3px 17px -5px rgba(0, 0, 0, 0.75);\n  transition: all 0.3s ease-in-out;\n}\n.container[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2, 1.2);\n}\n.container[_ngcontent-%COMP%]   #data[_ngcontent-%COMP%] {\n  margin-right: 30%;\n  padding-top: 8%;\n  padding-left: 30%;\n  width: 100%;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vbmUtc3R1ZGVudC9DOlxcVXNlcnNcXEhcXERlc2t0b3BcXHNlcnZlci1leHByZXNzLXNsYXNoLWNvbW1hbmQtc2xhY2tcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcb25lLXN0dWRlbnRcXG9uZS1zdHVkZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL29uZS1zdHVkZW50L29uZS1zdHVkZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBEQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlEQUFBO0VBQ0EsZ0NBQUE7QUNDRjtBRENFO0VBQ0UsMEJBQUE7QUNDSjtBREVFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb25lLXN0dWRlbnQvb25lLXN0dWRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNiNTIyODMsICNmZmZmZmY2Yik7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDE3cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xyXG4gIH1cclxuXHJcbiAgI2RhdGEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNiNTIyODMsICNmZmZmZmY2Yik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxN3B4IC01cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uY29udGFpbmVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XG59XG4uY29udGFpbmVyICNkYXRhIHtcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XG4gIHBhZGRpbmctdG9wOiA4JTtcbiAgcGFkZGluZy1sZWZ0OiAzMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OneStudentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-one-student',
          templateUrl: './one-student.component.html',
          styleUrls: ['./one-student.component.scss']
        }]
      }], function () {
        return [];
      }, {
        student: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pipes/reverse.pipe.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/reverse.pipe.ts ***!
    \***************************************/

  /*! exports provided: ReversePipe */

  /***/
  function srcAppPipesReversePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReversePipe", function () {
      return ReversePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ReversePipe = /*#__PURE__*/function () {
      function ReversePipe() {
        _classCallCheck(this, ReversePipe);
      }

      _createClass(ReversePipe, [{
        key: "transform",
        value: function transform(value) {
          if (value) return value.slice().reverse();
        }
      }]);

      return ReversePipe;
    }();

    ReversePipe.ɵfac = function ReversePipe_Factory(t) {
      return new (t || ReversePipe)();
    };

    ReversePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "reverse",
      type: ReversePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReversePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'reverse'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/server.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/server.service.ts ***!
    \********************************************/

  /*! exports provided: ServerService */

  /***/
  function srcAppServicesServerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerService", function () {
      return ServerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ServerService = /*#__PURE__*/function () {
      function ServerService(_http) {
        _classCallCheck(this, ServerService);

        this._http = _http;
      }

      _createClass(ServerService, [{
        key: "getData",
        value: function getData() {
          return this._http.get('https://server-slash-command-slack.herokuapp.com/all');
        }
      }]);

      return ServerService;
    }();

    ServerService.ɵfac = function ServerService_Factory(t) {
      return new (t || ServerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ServerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ServerService,
      factory: ServerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\H\Desktop\server-express-slash-command-slack\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map