function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
  /***/
  "./src/app/auth/auth.component.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/auth.component.ts ***!
    \****************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _head_error_header_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../head-error/header-error.service */
    "./src/app/head-error/header-error.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_loading_dots_loading_dots_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/loading-dots/loading-dots.component */
    "./src/app/shared/loading-dots/loading-dots.component.ts");
    /* harmony import */


    var _head_error_head_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../head-error/head-error.component */
    "./src/app/head-error/head-error.component.ts");

    function AuthComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-dots");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_app_head_error_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-head-error");
      }
    }

    function AuthComponent_div_7_ul_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0411\u0430\u0439\u0436 \u0431\u043E\u043B\u043E\u0445 \u044D\u043C\u044D\u0439\u043B \u0445\u0430\u044F\u0433 \u043E\u0440\u0443\u0443\u043B\u043D\u0430 \u0443\u0443.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AuthComponent_div_7_ul_3_Template, 3, 0, "ul", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_div_7_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.togglePasswordVisibility();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.authForm.get("email").valid && ctx_r7.authForm.get("email").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r7.passwordShow === true ? "text" : "password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.passwordShow === true ? "../../assets/img/eye.svg" : "../../assets/img/hidden.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AuthComponent_div_8_img_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 27);
      }
    }

    function AuthComponent_div_8_ul_4_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u043D\u044D \u043D\u044D\u0440 \u0430\u043B\u044C \u0445\u044D\u0434\u0438\u0439\u043D\u044D\u044D \u0430\u0448\u0438\u0433\u043B\u0430\u043B\u0442\u0430\u0434 \u0431\u0430\u0439\u043D\u0430, \u04E9\u04E9\u0440 \u043D\u044D\u0440 \u0445\u0430\u0439\u0436 \u043E\u043B \u043D\u0443\u0443. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_div_8_ul_4_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "6-\u0430\u0430\u0441 \u0434\u044D\u044D\u0448 \u04AF\u0441\u044D\u0433\u0442\u044D\u0439 \u043D\u044D\u0440 \u043E\u0440\u0443\u0443\u043B\u043D\u0430 \u0443\u0443");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_div_8_ul_4_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u044D\u0440 \u0437\u0430\u0430\u0432\u0430\u043B \u04AF\u0441\u0433\u044D\u044D\u0440 \u044D\u0445\u044D\u043B\u0436, \u0437\u04E9\u0432\u0445\u04E9\u043D \u0434\u043E\u043E\u0433\u0443\u0443\u0440 \u0437\u0443\u0440\u0430\u0430\u0441 \u0431\u043E\u043B\u043E\u043D \u0442\u043E\u043E \u0430\u0433\u0443\u0443\u043B\u0436 \u0431\u043E\u043B\u043D\u043E.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_div_8_ul_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthComponent_div_8_ul_4_li_1_Template, 2, 0, "li", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthComponent_div_8_ul_4_li_2_Template, 2, 0, "li", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AuthComponent_div_8_ul_4_li_3_Template, 2, 0, "li", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.authForm.get("userName").errors == null ? null : ctx_r19.authForm.get("userName").errors.isNotUniqueUserName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.authForm.get("userName").errors == null ? null : ctx_r19.authForm.get("userName").errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.authForm.get("userName").errors == null ? null : ctx_r19.authForm.get("userName").errors.pattern);
      }
    }

    function AuthComponent_div_8_ul_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0411\u0430\u0439\u0436 \u0431\u043E\u043B\u043E\u0445 \u044D\u043C\u044D\u0439\u043B \u0445\u0430\u044F\u0433 \u043E\u0440\u0443\u0443\u043B\u043D\u0430 \u0443\u0443.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_div_8_ul_12_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "8-\u0430\u0430\u0441 \u0434\u044D\u044D\u0448 \u04AF\u0441\u044D\u0433\u0442\u044D\u0439 \u043D\u0443\u0443\u0446 \u04AF\u0433 \u043E\u0440\u0443\u0443\u043B\u043D\u0430 \u0443\u0443");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_div_8_ul_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthComponent_div_8_ul_12_li_1_Template, 2, 0, "li", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.authForm.get("password").errors == null ? null : ctx_r21.authForm.get("password").errors.minlength);
      }
    }

    function AuthComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AuthComponent_div_8_img_3_Template, 1, 0, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AuthComponent_div_8_ul_4_Template, 4, 3, "ul", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AuthComponent_div_8_ul_7_Template, 3, 0, "ul", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_div_8_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.togglePasswordVisibility();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AuthComponent_div_8_ul_12_Template, 2, 1, "ul", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.checkingUserName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.authForm.get("userName").valid && ctx_r8.authForm.get("userName").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.authForm.get("email").valid && ctx_r8.authForm.get("email").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r8.passwordShow === true ? "text" : "password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r8.passwordShow === true ? "../../assets/img/eye.svg" : "../../assets/img/hidden.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.authForm.get("password").valid);
      }
    }

    function AuthComponent_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.error);
      }
    }

    function AuthComponent_label_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_label_13_Template_input_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.rememberMeToggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u041D\u0430\u043C\u0430\u0439\u0433 \u0441\u0430\u043D\u0430 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_p_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0411\u04AF\u0440\u0442\u0433\u04AF\u04AF\u043B\u0441\u044D\u043D\u044D\u044D\u0440 \u041C\u0411\u0416-\u044D\u044D\u0441 \u0438\u043C\u044D\u0439\u043B \u0445\u04AF\u043B\u044D\u044D\u043D \u0430\u0432\u0430\u0445\u044B\u0433 \u0431\u0438 \u0445\u04AF\u043B\u044D\u044D\u043D \u0437\u04E9\u0432\u0448\u04E9\u04E9\u0440\u0447 \u0431\u0430\u0439\u043D\u0430.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_p_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0425\u0430\u044F\u0433 \u0431\u0430\u0439\u0445\u0433\u0443\u0439 \u0433\u044D\u0436 \u04AF\u04AF? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0411\u04AF\u0440\u0442\u0433\u04AF\u04AF\u043B\u044D\u0445");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AuthComponent_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0410\u043B\u044C \u0445\u044D\u0434\u0438\u0439\u043D \u0445\u0430\u044F\u0433 \u0431\u0430\u0439\u0433\u0430\u0430 \u0433\u044D\u0436 \u04AF\u04AF? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041D\u044D\u0432\u0442\u0440\u044D\u0445");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AuthComponent = /*#__PURE__*/function () {
      function AuthComponent(route, authService, router, headerErrorService) {
        _classCallCheck(this, AuthComponent);

        this.route = route;
        this.authService = authService;
        this.router = router;
        this.headerErrorService = headerErrorService;
        this.error = null;
        this.isLoading = false;
        this.isLogIn = false;
        this.passwordShow = false;
        this.checkingUserName = false;
        this.signupData = {
          userName: '',
          joinDate: '',
          email: '',
          password: ''
        };
        this.accessDeniedError = true;
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //See if user came from access denied error
          this.accessDeniedError = !!this.route.snapshot.queryParamMap.get('access');

          if (this.accessDeniedError) {
            this.headerErrorService.headerErrorMsg.next('Энэ хуудас луу орохын тулд та нэвтэрсэн байх шаардлагатай.');
          } //Decide whether form should be signUp or logIn


          this.route.params.subscribe(function (params) {
            _this.isLogIn = 'logIn' === params['isLogIn'] ? true : false;
            _this.error = null;

            if (_this.isLogIn) {
              _this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
                'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
              });
            } else {
              _this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                'userName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[A-Za-z]+(?:[_A-Za-z0-9])*$')], _this.uniqueUserName.bind(_this)),
                'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
                'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
              });
            }
          });
        }
      }, {
        key: "uniqueUserName",
        value: function uniqueUserName(control) {
          var _this2 = this;

          clearTimeout(this.uniqueUserTimeout);
          var allUsedUserNames;
          var promise = new Promise(function (resolve, reject) {
            //Time delay allows some time after user stops typing in order to check the validation. Otherwise,
            // validation gets run many times whenever new char is typed or deleted
            _this2.uniqueUserTimeout = setTimeout(function () {
              _this2.checkingUserName = true; //Get all used user names stored on database

              _this2.userNameSub = _this2.authService.getUserNames().subscribe(function (names) {
                allUsedUserNames = names;
                console.log(allUsedUserNames);

                if (allUsedUserNames !== null) {
                  for (var i = 0; i < allUsedUserNames.length; i++) {
                    if (allUsedUserNames[i].toLowerCase() === _this2.authForm.get('userName').value.toLowerCase()) {
                      resolve({
                        'isNotUniqueUserName': true
                      });
                      _this2.checkingUserName = false;
                      break;
                    }
                  }

                  resolve(null);
                  _this2.checkingUserName = false;
                } else {
                  resolve(null);
                  _this2.checkingUserName = false;
                }
              });
            }, 700);
          });
          return promise;
        } // validateUserName(control: FormControl): {[s:string] : boolean} {
        //   let name: string = this.authForm.get('userName').value;
        //   if(name[0].)
        //   // if (/\s/.test(this.authForm.get('userName').value)) {
        //   //   // It has any kind of whitespace
        //   //   return {'unwantedCharacters':true};
        //   // }
        // }

      }, {
        key: "togglePasswordVisibility",
        value: function togglePasswordVisibility() {
          this.passwordShow = !this.passwordShow;
        }
      }, {
        key: "rememberMeToggle",
        value: function rememberMeToggle() {
          this.authService.rememberToggle = !this.authService.rememberToggle;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.userNameSub !== undefined) {
            this.userNameSub.unsubscribe();
          } //Removes error if it was present


          if (this.accessDeniedError) {
            this.headerErrorService.headerErrorMsg.next(null);
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          //If not valid, exit
          if (!this.authForm.valid) {
            return;
          } //Save all data to firebase database


          var email = this.authForm.get('email').value;
          var password = this.authForm.get('password').value;

          if (!this.isLogIn) {
            this.signupData.userName = this.authForm.get('userName').value;
            var today = new Date();
            this.signupData.joinDate = "".concat(today.getFullYear(), " ").concat(today.getMonth() + 1, "-\u0440 \u0441\u0430\u0440");
            this.signupData.email = email;
            this.signupData.password = password;
          } //Start loading


          this.isLoading = true; //Login or signup using firebase authentication

          var authObs;

          if (this.isLogIn) {
            authObs = this.authService.login(email, password);
          } else {
            authObs = this.authService.signup(this.signupData.userName, email, password);
          }

          authObs.subscribe(function (resData) {
            //On Valid authentication, if it is signup form, save username to database 
            if (!_this3.isLogIn) {
              console.log(_this3.signupData);

              _this3.authService.saveSignupData(_this3.signupData);
            }

            console.log(resData);

            _this3.authService.setUserName(resData.displayName);

            _this3.authForm.reset();

            _this3.isLoading = false;

            _this3.router.navigate(['']);
          }, function (errorMessage) {
            console.log(errorMessage);
            _this3.error = errorMessage;

            _this3.authForm.reset();

            _this3.isLoading = false;
          });
        }
      }]);

      return AuthComponent;
    }();

    AuthComponent.ɵfac = function AuthComponent_Factory(t) {
      return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_head_error_header_error_service__WEBPACK_IMPORTED_MODULE_4__["HeaderErrorService"]));
    };

    AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthComponent,
      selectors: [["app-auth"]],
      decls: 19,
      vars: 14,
      consts: [[4, "ngIf"], [3, "ngClass"], ["spellcheck", "false", 1, "auth-form", 3, "formGroup", "ngSubmit"], ["src", "../../assets/img/user.svg", "alt", "", 1, "userLogo"], [1, "heading-secondary", "auth-form__header"], ["class", "auth-form__inputs", 4, "ngIf"], ["type", "submit", 1, "auth-form__submit", 3, "disabled"], ["class", "auth-form__submitErrorMessage error-text", 4, "ngIf"], [1, "auth-form-textArea"], ["class", "paragraph checkbox-container checkbox-container__center checkbox-container__blue", 4, "ngIf"], ["class", "paragraph", 4, "ngIf"], [1, "horizontalLine"], ["class", "auth-form__redirectText", 4, "ngIf", "ngIfElse"], ["signUpRedirect", ""], [1, "auth-form__inputs"], [1, "auth-form__emailInput"], ["type", "text", "placeholder", "\u042D\u043C\u044D\u0439\u043B", "formControlName", "email", 1, "auth-form__input"], ["class", "auth-form__inputErrors", 4, "ngIf"], [1, "auth-form__passwordContainer"], ["placeholder", "\u041D\u0443\u0443\u0446 \u04AE\u0433", "formControlName", "password", 1, "auth-form__input", "auth-form__passwordInput", 3, "type"], [3, "click"], ["alt", "", 1, "auth-form__hidden", 3, "src"], [1, "auth-form__inputErrors"], [1, "auth-form__inputError", "error-text"], [1, "auth-form__userNameContainer"], ["type", "text", "placeholder", "\u0411\u0443\u0441\u0434\u0430\u0434 \u0425\u0430\u0440\u0430\u0433\u0434\u0430\u0445 \u041D\u044D\u0440", "maxlength", "15", "formControlName", "userName", 1, "auth-form__input"], ["src", "../../assets/img/spinner.svg", "class", "auth-form__spinner", "alt", "", 4, "ngIf"], ["src", "../../assets/img/spinner.svg", "alt", "", 1, "auth-form__spinner"], ["class", "auth-form__inputError error-text", 4, "ngIf"], [1, "auth-form__submitErrorMessage", "error-text"], [1, "paragraph", "checkbox-container", "checkbox-container__center", "checkbox-container__blue"], ["type", "checkbox", 1, "checkbox", 3, "click"], [1, "checkmark"], [1, "paragraph"], [1, "auth-form__redirectText"], ["routerLink", "/auth/signUp", 1, "emphasis-link"], ["routerLink", "/auth/logIn", 1, "emphasis-link"]],
      template: function AuthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AuthComponent_div_0_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AuthComponent_app_head_error_1_Template, 1, 0, "app-head-error", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AuthComponent_div_7_Template, 8, 3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AuthComponent_div_8_Template, 13, 6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AuthComponent_p_11_Template, 2, 1, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AuthComponent_label_13_Template, 4, 0, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AuthComponent_p_14_Template, 2, 0, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AuthComponent_p_16_Template, 4, 0, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AuthComponent_ng_template_17_Template, 4, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accessDeniedError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.accessDeniedError ? "auth-container auth-container--withError" : "auth-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.authForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isLogIn === true ? "\u0422\u0430\u0432\u0442\u0430\u0439 \u043C\u043E\u0440\u0438\u043B\u043D\u0443\u0443" : "\u0411\u04AF\u0440\u0442\u0433\u04AF\u04AF\u043B\u044D\u0445");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.authForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isLogIn === true ? "\u041D\u044D\u0432\u0442\u0440\u044D\u0445" : "\u041C\u0411\u0416-\u0434 \u043D\u044D\u0433\u0434");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogIn)("ngIfElse", _r13);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_loading_dots_loading_dots_component__WEBPACK_IMPORTED_MODULE_6__["LoadingDotsComponent"], _head_error_head_error_component__WEBPACK_IMPORTED_MODULE_7__["HeadErrorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".checkbox-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  font-size: 1.6rem;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  padding-bottom: 2rem;\n}\n.checkbox-container__center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.checkbox-container__left[_ngcontent-%COMP%] {\n  justify-content: start;\n}\n\n.checkbox-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.checkmark[_ngcontent-%COMP%] {\n  position: relative;\n  height: 1.6rem;\n  width: 1.6rem;\n  background-color: #eee;\n  margin-right: 5px;\n}\n\n.checkbox-container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #ccc;\n}\n\n.checkbox-container__blue[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #2196F3;\n}\n\n.checkbox-container__green[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #00b8a9;\n}\n\n.checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.checkbox-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n\n.checkbox-container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  left: 50%;\n  top: 50%;\n  width: 5px;\n  height: 9px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n.max-width-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 32px 32px 64px;\n}\n.boxWrapper[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0 0 6px 1px rgba(48, 48, 48, 0.2);\n  border: 1px solid #bebebe;\n  padding: 4rem;\n}\n.oneByOneSplit__left[_ngcontent-%COMP%] {\n  width: 35%;\n  margin-right: 3%;\n  display: flex;\n  flex-direction: column;\n}\n.oneByOneSplit__right[_ngcontent-%COMP%] {\n  width: 62%;\n}\n.oneByOneSplit--smLeft__left[_ngcontent-%COMP%] {\n  width: 30%;\n  margin-right: 3%;\n  display: flex;\n  flex-direction: column;\n}\n.oneByOneSplit--smLeft__right[_ngcontent-%COMP%] {\n  width: 67%;\n}\n.flex-verticalCentered[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.flex-verticalStart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n.flex-spaceBetween[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.margin-bot-xs[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.margin-bot-sm[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.margin-bot-md[_ngcontent-%COMP%] {\n  margin-bottom: 4rem;\n}\n.margin-bot-lg[_ngcontent-%COMP%] {\n  margin-bottom: 5rem;\n}\n.margin-top-xxs[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.margin-top-xs[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.margin-top-sm[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.margin-top-md[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n.margin-left-xs[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.margin-right-sm[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n}\n.padding-bot-sm[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n.marginVertical-sm[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n}\n.marginVertical-md[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.horizontalLine[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 1.5rem 0;\n}\n.horizontalLine--sm[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n.horizontalLine--lg[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.horizontalLine--xl[_ngcontent-%COMP%] {\n  margin: 2.5rem 0;\n}\n.horizontalLine--xxl[_ngcontent-%COMP%] {\n  margin: 3rem 0;\n}\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.auth-container[_ngcontent-%COMP%] {\n  width: 34rem;\n  margin-top: 5rem;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n}\n.auth-container--withError[_ngcontent-%COMP%] {\n  margin-top: 8rem;\n}\n.auth-form[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 3.5rem;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);\n}\n.auth-form__userNameContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.auth-form__spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2rem;\n  width: 2rem;\n  height: 2rem;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n.auth-form__header[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  margin-bottom: 3rem;\n}\n.auth-form__input[_ngcontent-%COMP%], .auth-form__submit[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 1.6rem;\n  border-radius: 100px;\n  padding: 1rem 1.5rem;\n  outline: none;\n}\n.auth-form__input[_ngcontent-%COMP%] {\n  border: 1.3px solid rgba(65, 62, 62, 0.5);\n  transition: 0.2s;\n}\n.auth-form__input[_ngcontent-%COMP%]:focus {\n  border: 1.3px solid #0078da;\n}\n.auth-form__emailInput[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.auth-form__submit[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: #007deb;\n  margin: 2.5rem 0;\n  font-weight: 600;\n  color: white;\n  transition: 0.2s;\n}\n.auth-form__submit[_ngcontent-%COMP%]:disabled {\n  background-color: #6e7f8d;\n}\n.auth-form__redirectText[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.auth-form__inputErrors[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-right: auto;\n  margin-left: 2rem;\n  list-style-type: circle;\n}\n.auth-form__inputError[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.auth-form__submitErrorMessage[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1rem;\n  font-size: 1.2rem;\n}\n.auth-form__hidden[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translate(120%, -50%);\n  width: 2rem;\n  height: 2rem;\n  cursor: pointer;\n}\n.auth-form__inputs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.auth-form__passwordContainer[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.userLogo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 8rem;\n  height: 8rem;\n}\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border: 1.3px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9DOlxcVXNlcnNcXG1vb25kXFxPbmVEcml2ZVxcRGVza3RvcFxcTUJKL3NyY1xcYXBwXFxzY3NzXFxjaGVja2JveC5zY3NzIiwic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvQzpcXFVzZXJzXFxtb29uZFxcT25lRHJpdmVcXERlc2t0b3BcXE1CSi9zcmNcXGFwcFxcc2Nzc1xcdXRpbGl0aWVzLnNjc3MiLCJzcmMvYXBwL2F1dGgvQzpcXFVzZXJzXFxtb29uZFxcT25lRHJpdmVcXERlc2t0b3BcXE1CSi9zcmNcXGFwcFxcc2Nzc1xcYW5pbWF0aW9ucy5zY3NzIiwic3JjL2FwcC9hdXRoL0M6XFxVc2Vyc1xcbW9vbmRcXE9uZURyaXZlXFxEZXNrdG9wXFxNQkovc3JjXFxhcHBcXGF1dGhcXGF1dGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvQzpcXFVzZXJzXFxtb29uZFxcT25lRHJpdmVcXERlc2t0b3BcXE1CSi9zcmNcXGFwcFxcc2Nzc1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUUsK0JBQUE7QUFDQTs4RUFBQTtBQUlBLHdDQUFBO0FBQ0Y7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFSSztFQVNMLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNERjtBREVFO0VBQ0UsdUJBQUE7QUNBSjtBREVFO0VBQ0Usc0JBQUE7QUNBSjtBRElBLHdDQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNERjtBRElBLDZCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGNBbENLO0VBbUNMLGFBbkNLO0VBb0NMLHNCQUFBO0VBQ0EsaUJBQUE7QUNERjtBRElBLCtDQUFBO0FBQ0E7RUFDRSxzQkFBQTtBQ0RGO0FESUEsd0RBQUE7QUFDQTtFQUNFLHlCQUFBO0FDREY7QURHQSx3REFBQTtBQUNBO0VBQ0UseUJBbERvQjtBQ2tEdEI7QURHQSw2REFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0FGO0FER0Esb0NBQUE7QUFDQTtFQUNFLGNBQUE7QUNBRjtBREdBLGtDQUFBO0FBQ0E7RUFDRSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUdBLDhDQUFBO0FDQUY7QUM3RUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBRGdGRjtBQzdFQTtFQUNFLHVCQUFBO0VBQ0EsNkNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QURnRkY7QUM1RUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUQrRUo7QUM3RUU7RUFDRSxVQUFBO0FEK0VKO0FDM0VFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FEOEVKO0FDNUVFO0VBQ0UsVUFBQTtBRDhFSjtBQ3pFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBRDRFRjtBQ3pFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBRDRFRjtBQzFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBRDZFRjtBQ3hFQTtFQUNFLG1CQUFBO0FEMkVGO0FDeEVBO0VBQ0UsbUJBQUE7QUQyRUY7QUN4RUE7RUFDRSxtQkFBQTtBRDJFRjtBQ3hFQTtFQUNFLG1CQUFBO0FEMkVGO0FDeEVBO0VBQ0UsZUFBQTtBRDJFRjtBQ3hFQTtFQUNFLGdCQUFBO0FEMkVGO0FDeEVBO0VBQ0UsZ0JBQUE7QUQyRUY7QUN4RUE7RUFDRSxnQkFBQTtBRDJFRjtBQ3ZFQTtFQUNFLGlCQUFBO0FEMEVGO0FDdkVBO0VBQ0Usa0JBQUE7QUQwRUY7QUN2RUE7RUFDRSxvQkFBQTtBRDBFRjtBQ3ZFQTtFQUNFLGdCQUFBO0FEMEVGO0FDdkVBO0VBQ0UsY0FBQTtBRDBFRjtBQ3JFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBRHdFRjtBQ3ZFRTtFQUNFLGNBQUE7QUR5RUo7QUN2RUU7RUFDRSxjQUFBO0FEeUVKO0FDdkVFO0VBQ0UsZ0JBQUE7QUR5RUo7QUN2RUU7RUFDRSxjQUFBO0FEeUVKO0FDbkVBO0VBQ0UsY0FBQTtBRHNFRjtBRXhNQTtFQUNJO0lBQ0ksdUJBQUE7RUYyTU47RUV6TUU7SUFDSSx5QkFBQTtFRjJNTjtBQUNGO0FFak5BO0VBQ0k7SUFDSSx1QkFBQTtFRjJNTjtFRXpNRTtJQUNJLHlCQUFBO0VGMk1OO0FBQ0Y7QUc1TUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUNRRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RURURix1QkFBQTtBSGlORjtBR2hORTtFQUNFLGdCQUFBO0FIa05KO0FHOU1BO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0FIaU5GO0FHL01FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUhpTko7QUc5TUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7QUhnTko7QUc3TUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FIK01KO0FHNU1FO0VBRUUsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUg2TUo7QUcxTUU7RUFDRSx5Q0FBQTtFQUNBLGdCQUFBO0FINE1KO0FHMU1JO0VBQ0UsMkJBQUE7QUg0TU47QUd2TUU7RUFDRSxjQUFBO0FIeU1KO0FHdE1FO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBSHdNSjtBR3RNSTtFQUNFLHlCQUFBO0FId01OO0FHcE1FO0VBQ0Usa0JBQUE7QUhzTUo7QUduTUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBSHFNSjtBR2xNRTtFQUNFLGdCQUFBO0FIb01KO0FHak1FO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FIbU1KO0FHaE1FO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FIa01KO0FHL0xFO0VBQ0UsV0FBQTtBSGlNSjtBRzlMRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBSGdNSjtBRzVMQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FIK0xGO0FHNUxBO0VBQ0UsdUJBQUE7QUgrTEYiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC8qICoqKioqKiBDSEVDS0JPWCAqKioqKioqKioqKiovXG4gIC8qIE1VU1QgREVGSU5FIElGIENIRUNLQk9YIFdJTEwgQkUgQUxJR05FRCBDRU5URVIgQU5EIFdIQVQgQ09MT1IgSVQgSVMgXG4gIGNoZWNrYm94LWNvbnRhaW5lciBjaGVja2JveC1jb250YWluZXJfX2dyZWVuIGNoZWNrYm94LWNvbnRhaW5lcl9fY2VudGVyIGV0Yy4uKi9cbiRzaXplOiAxLjZyZW07XG4kY2hlY2tlZC1ncmVlbkNvbG9yIDogIzAwYjhhOTtcbiAgLyogQ3VzdG9taXplIHRoZSBsYWJlbCAodGhlIGNvbnRhaW5lcikgKi9cbi5jaGVja2JveC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICZfX2NlbnRlcntcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAmX19sZWZ0e1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIH1cbn1cblxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cbi5jaGVja2JveC1jb250YWluZXIgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cblxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXG4uY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6ICRzaXplO1xuICB3aWR0aDogJHNpemU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cbi5jaGVja2JveC1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLyogV2hlbiB0aGUgY2hlY2tib3ggaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXG4uY2hlY2tib3gtY29udGFpbmVyX19ibHVlIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbn1cbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuLmNoZWNrYm94LWNvbnRhaW5lcl9fZ3JlZW4gaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hlY2tlZC1ncmVlbkNvbG9yO1xufVxuXG4vKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuLmNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xuLmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xuLmNoZWNrYm94LWNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA5cHg7XG4gIGJvcmRlcjogc29saWQgd2hpdGU7XG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSg0NWRlZyk7XG59IiwiLyogKioqKioqIENIRUNLQk9YICoqKioqKioqKioqKi9cbi8qIE1VU1QgREVGSU5FIElGIENIRUNLQk9YIFdJTEwgQkUgQUxJR05FRCBDRU5URVIgQU5EIFdIQVQgQ09MT1IgSVQgSVMgXG5jaGVja2JveC1jb250YWluZXIgY2hlY2tib3gtY29udGFpbmVyX19ncmVlbiBjaGVja2JveC1jb250YWluZXJfX2NlbnRlciBldGMuLiovXG4vKiBDdXN0b21pemUgdGhlIGxhYmVsICh0aGUgY29udGFpbmVyKSAqL1xuLmNoZWNrYm94LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG4uY2hlY2tib3gtY29udGFpbmVyX19jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jaGVja2JveC1jb250YWluZXJfX2xlZnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xuLmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufVxuXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cbi5jaGVja21hcmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMS42cmVtO1xuICB3aWR0aDogMS42cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXG4uY2hlY2tib3gtY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuLmNoZWNrYm94LWNvbnRhaW5lcl9fYmx1ZSBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG59XG5cbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuLmNoZWNrYm94LWNvbnRhaW5lcl9fZ3JlZW4gaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiOGE5O1xufVxuXG4vKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuLmNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xuLmNoZWNrYm94LWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xuLmNoZWNrYm94LWNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA5cHg7XG4gIGJvcmRlcjogc29saWQgd2hpdGU7XG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5tYXgtd2lkdGgtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAzMnB4IDMycHggNjRweDtcbn1cblxuLmJveFdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDZweCAxcHggcmdiYSg0OCwgNDgsIDQ4LCAwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmViZWJlO1xuICBwYWRkaW5nOiA0cmVtO1xufVxuXG4ub25lQnlPbmVTcGxpdF9fbGVmdCB7XG4gIHdpZHRoOiAzNSU7XG4gIG1hcmdpbi1yaWdodDogMyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ub25lQnlPbmVTcGxpdF9fcmlnaHQge1xuICB3aWR0aDogNjIlO1xufVxuXG4ub25lQnlPbmVTcGxpdC0tc21MZWZ0X19sZWZ0IHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5vbmVCeU9uZVNwbGl0LS1zbUxlZnRfX3JpZ2h0IHtcbiAgd2lkdGg6IDY3JTtcbn1cblxuLmZsZXgtdmVydGljYWxDZW50ZXJlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mbGV4LXZlcnRpY2FsU3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmZsZXgtc3BhY2VCZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubWFyZ2luLWJvdC14cyB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5tYXJnaW4tYm90LXNtIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLm1hcmdpbi1ib3QtbWQge1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG4ubWFyZ2luLWJvdC1sZyB7XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG5cbi5tYXJnaW4tdG9wLXh4cyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm1hcmdpbi10b3AteHMge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4ubWFyZ2luLXRvcC1zbSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5tYXJnaW4tdG9wLW1kIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbn1cblxuLm1hcmdpbi1sZWZ0LXhzIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5tYXJnaW4tcmlnaHQtc20ge1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbi5wYWRkaW5nLWJvdC1zbSB7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4ubWFyZ2luVmVydGljYWwtc20ge1xuICBtYXJnaW46IDEuNXJlbSAwO1xufVxuXG4ubWFyZ2luVmVydGljYWwtbWQge1xuICBtYXJnaW46IDJyZW0gMDtcbn1cblxuLmhvcml6b250YWxMaW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMS41cmVtIDA7XG59XG4uaG9yaXpvbnRhbExpbmUtLXNtIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG4uaG9yaXpvbnRhbExpbmUtLWxnIHtcbiAgbWFyZ2luOiAycmVtIDA7XG59XG4uaG9yaXpvbnRhbExpbmUtLXhsIHtcbiAgbWFyZ2luOiAyLjVyZW0gMDtcbn1cbi5ob3Jpem9udGFsTGluZS0teHhsIHtcbiAgbWFyZ2luOiAzcmVtIDA7XG59XG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuLmF1dGgtY29udGFpbmVyIHtcbiAgd2lkdGg6IDM0cmVtO1xuICBtYXJnaW4tdG9wOiA1cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5hdXRoLWNvbnRhaW5lci0td2l0aEVycm9yIHtcbiAgbWFyZ2luLXRvcDogOHJlbTtcbn1cblxuLmF1dGgtZm9ybSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzLjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4uYXV0aC1mb3JtX191c2VyTmFtZUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hdXRoLWZvcm1fX3NwaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuLmF1dGgtZm9ybV9faGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cbi5hdXRoLWZvcm1fX2lucHV0LCAuYXV0aC1mb3JtX19zdWJtaXQge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5hdXRoLWZvcm1fX2lucHV0IHtcbiAgYm9yZGVyOiAxLjNweCBzb2xpZCByZ2JhKDY1LCA2MiwgNjIsIDAuNSk7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uYXV0aC1mb3JtX19pbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogMS4zcHggc29saWQgIzAwNzhkYTtcbn1cbi5hdXRoLWZvcm1fX2VtYWlsSW5wdXQge1xuICBtYXJnaW46IDJyZW0gMDtcbn1cbi5hdXRoLWZvcm1fX3N1Ym1pdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2RlYjtcbiAgbWFyZ2luOiAyLjVyZW0gMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmF1dGgtZm9ybV9fc3VibWl0OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlN2Y4ZDtcbn1cbi5hdXRoLWZvcm1fX3JlZGlyZWN0VGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbi5hdXRoLWZvcm1fX2lucHV0RXJyb3JzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG59XG4uYXV0aC1mb3JtX19pbnB1dEVycm9yIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5hdXRoLWZvcm1fX3N1Ym1pdEVycm9yTWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4uYXV0aC1mb3JtX19oaWRkZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTIwJSwgLTUwJSk7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hdXRoLWZvcm1fX2lucHV0cyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmF1dGgtZm9ybV9fcGFzc3dvcmRDb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udXNlckxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDhyZW07XG4gIGhlaWdodDogOHJlbTtcbn1cblxuaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyOiAxLjNweCBzb2xpZCByZWQ7XG59IiwiQGltcG9ydCAnLi92YXJpYWJsZXMuc2Nzcyc7XG5cbi5tYXgtd2lkdGgtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAzMnB4IDMycHggNjRweDtcbn1cblxuLmJveFdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDZweCAxcHggcmdiYSg0OCwgNDgsIDQ4LCAwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkwLCAxOTAsIDE5MCk7XG4gIHBhZGRpbmc6IDRyZW07XG59XG5cbi5vbmVCeU9uZVNwbGl0e1xuICAmX19sZWZ0e1xuICAgIHdpZHRoOiAzNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgJl9fcmlnaHR7XG4gICAgd2lkdGg6IDYyJTtcbiAgfVxufVxuLm9uZUJ5T25lU3BsaXQtLXNtTGVmdHtcbiAgJl9fbGVmdHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gICZfX3JpZ2h0e1xuICAgIHdpZHRoOiA2NyU7XG4gIH1cbn1cbi8vICoqKioqKioqKioqKiBGTEVYICoqKioqKioqKioqKioqXG5cbi5mbGV4LXZlcnRpY2FsQ2VudGVyZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmxleC12ZXJ0aWNhbFN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uZmxleC1zcGFjZUJldHdlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi8vICoqKioqKioqKioqKiBNQVJHSU5TICoqKioqKioqKioqKioqXG5cbi5tYXJnaW4tYm90LXhzIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLm1hcmdpbi1ib3Qtc20ge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4ubWFyZ2luLWJvdC1tZCB7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG5cbi5tYXJnaW4tYm90LWxnIHtcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbn1cblxuLm1hcmdpbi10b3AteHhzIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubWFyZ2luLXRvcC14cyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5tYXJnaW4tdG9wLXNtIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLm1hcmdpbi10b3AtbWQge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuXG5cbi5tYXJnaW4tbGVmdC14cyB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ubWFyZ2luLXJpZ2h0LXNtIHtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuXG4ucGFkZGluZy1ib3Qtc20ge1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cblxuLm1hcmdpblZlcnRpY2FsLXNtIHtcbiAgbWFyZ2luOiAxLjVyZW0gMDtcbn1cblxuLm1hcmdpblZlcnRpY2FsLW1kIHtcbiAgbWFyZ2luOiAycmVtIDA7XG59XG5cbi8vICoqKioqKioqKioqKiBIT1JJWk9OVEFMIExJTkUgKioqKioqKioqKipcblxuLmhvcml6b250YWxMaW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMS41cmVtIDA7XG4gICYtLXNte1xuICAgIG1hcmdpbjogMXJlbSAwO1xuICB9XG4gICYtLWxne1xuICAgIG1hcmdpbjogMnJlbSAwO1xuICB9XG4gICYtLXhse1xuICAgIG1hcmdpbjogMi41cmVtIDA7XG4gIH1cbiAgJi0teHhse1xuICAgIG1hcmdpbjogM3JlbSAwO1xuICB9XG5cbn1cblxuXG4uYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiIsIkBrZXlmcmFtZXMgc3BpbntcbiAgICAwJXtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxufSIsIkBpbXBvcnQgJy4uL3Njc3MvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnLi4vc2Nzcy9jaGVja2JveC5zY3NzJztcbkBpbXBvcnQgJy4uL3Njc3MvdXRpbGl0aWVzLnNjc3MnO1xuQGltcG9ydCAnLi4vc2Nzcy9hbmltYXRpb25zLnNjc3MnO1xuXG4uYXV0aC1jb250YWluZXIge1xuICB3aWR0aDogMzRyZW07XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIEBpbmNsdWRlIGFic0NlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAmLS13aXRoRXJyb3J7XG4gICAgbWFyZ2luLXRvcDogOHJlbTtcbiAgfVxufVxuXG4uYXV0aC1mb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMuNXJlbTtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcblxuICAmX191c2VyTmFtZUNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gICZfX3NwaW5uZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuXG4gICZfX2hlYWRlciB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICB9XG5cbiAgJl9faW5wdXQsXG4gICZfX3N1Ym1pdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gICZfX2lucHV0IHtcbiAgICBib3JkZXI6IDEuM3B4IHNvbGlkIHJnYmEoNjUsIDYyLCA2MiwgMC41KTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXI6IDEuM3B4IHNvbGlkIHJnYigwLCAxMjAsIDIxOCk7XG4gICAgfVxuXG4gIH1cblxuICAmX19lbWFpbElucHV0IHtcbiAgICBtYXJnaW46IDJyZW0gMDtcbiAgfVxuXG4gICZfX3N1Ym1pdCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjUsIDIzNSk7XG4gICAgbWFyZ2luOiAyLjVyZW0gMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEwLCAxMjcsIDE0MSk7XG4gICAgfVxuICB9XG5cbiAgJl9fcmVkaXJlY3RUZXh0IHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cblxuICAmX19pbnB1dEVycm9ycyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG4gIH1cblxuICAmX19pbnB1dEVycm9yIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG5cbiAgJl9fc3VibWl0RXJyb3JNZXNzYWdlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgfVxuXG4gICZfX2hpZGRlbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEyMCUsIC01MCUpO1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAmX19pbnB1dHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJl9fcGFzc3dvcmRDb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4udXNlckxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDhyZW07XG4gIGhlaWdodDogOHJlbTtcbn1cblxuaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyOiAxLjNweCBzb2xpZCByZ2IoMjU1LCAwLCAwKTtcbn1cbiIsIkBtaXhpbiBtZWRpYSgkYnJlYWtwb2ludCl7XG4gICAgQGlmICRicmVha3BvaW50ID09IHBob25le1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4ZW0pIHtAY29udGVudH07IC8vIDYwMHB4XG4gICAgfSBcbiAgICBAaWYgJGJyZWFrcG9pbnQgPT0gdGFiLXBvcnR7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIuNWVtKSB7QGNvbnRlbnR9OyAvLyAxMDAwcHhcbiAgICB9IFxuICAgIEBpZiAkYnJlYWtwb2ludCA9PSB0YWItbGFuZHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7QGNvbnRlbnR9OyAvLyAxMjAwcHhcbiAgICB9IFxuICAgIEBpZiAkYnJlYWtwb2ludCA9PSBiaWctZGVza3RvcHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTIuNWVtKSB7QGNvbnRlbnR9OyAvLyAxODAwcHhcbiAgICB9IFxufVxuQG1peGluIGFic0NlbnRlcigpe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-auth',
          templateUrl: './auth.component.html',
          styleUrls: ['./auth.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _head_error_header_error_service__WEBPACK_IMPORTED_MODULE_4__["HeaderErrorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var _head_error_head_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../head-error/head-error.component */
    "./src/app/head-error/head-error.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth.component */
    "./src/app/auth/auth.component.ts");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
    AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AuthModule_Factory(t) {
        return new (t || AuthModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: ':isLogIn',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthModule, {
        declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"], _head_error_head_error_component__WEBPACK_IMPORTED_MODULE_0__["HeadErrorComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"], _head_error_head_error_component__WEBPACK_IMPORTED_MODULE_0__["HeadErrorComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
            path: ':isLogIn',
            component: _auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"]
          }])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/head-error/head-error.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/head-error/head-error.component.ts ***!
    \****************************************************/

  /*! exports provided: HeadErrorComponent */

  /***/
  function srcAppHeadErrorHeadErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeadErrorComponent", function () {
      return HeadErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header-error.service */
    "./src/app/head-error/header-error.service.ts");

    var HeadErrorComponent = /*#__PURE__*/function () {
      function HeadErrorComponent(headerErrorService) {
        _classCallCheck(this, HeadErrorComponent);

        this.headerErrorService = headerErrorService;
      }

      _createClass(HeadErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.headerErrorService.headerErrorMsg.subscribe(function (error) {
            _this4.errorMsg = error;
          });
        }
      }]);

      return HeadErrorComponent;
    }();

    HeadErrorComponent.ɵfac = function HeadErrorComponent_Factory(t) {
      return new (t || HeadErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_header_error_service__WEBPACK_IMPORTED_MODULE_1__["HeaderErrorService"]));
    };

    HeadErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeadErrorComponent,
      selectors: [["app-head-error"]],
      decls: 4,
      vars: 1,
      consts: [[1, "headerError"], ["src", "../../assets/img/error.svg", "alt", "", 1, "headerError__errorImg"], [1, "headerError__errorText"]],
      template: function HeadErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMsg);
        }
      },
      styles: [".headerError[_ngcontent-%COMP%] {\n  background-color: #c01f1f;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem 0;\n  height: 4rem;\n}\n.headerError__errorImg[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n  height: 100%;\n}\n.headerError__errorText[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZC1lcnJvci9DOlxcVXNlcnNcXG1vb25kXFxPbmVEcml2ZVxcRGVza3RvcFxcTUJKL3NyY1xcYXBwXFxoZWFkLWVycm9yXFxoZWFkLWVycm9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkLWVycm9yL0M6XFxVc2Vyc1xcbW9vbmRcXE9uZURyaXZlXFxEZXNrdG9wXFxNQkovc3JjXFxhcHBcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9oZWFkLWVycm9yL2hlYWQtZXJyb3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQ05vQjtBQ010QjtBRkNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FFQ0o7QUZDRTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBRUNOIiwiZmlsZSI6InNyYy9hcHAvaGVhZC1lcnJvci9oZWFkLWVycm9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG4uaGVhZGVyRXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAzMSwgMzEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIGhlaWdodDogJGhlYWRlckVycm9yLWhlaWdodDtcbiAgJl9fZXJyb3JJbWcge1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgJl9fZXJyb3JUZXh0e1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbn1cbiIsIiRuYXYtaGVpZ2h0IDogN3JlbTtcbiRoZWFkZXJFcnJvci1oZWlnaHQgOiA0cmVtO1xuJGRpc2FibGVkLWNvbG9yOiByZ2IoMTEwLCAxMTAsIDExMCk7IiwiLmhlYWRlckVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwMWYxZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuICBoZWlnaHQ6IDRyZW07XG59XG4uaGVhZGVyRXJyb3JfX2Vycm9ySW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaGVhZGVyRXJyb3JfX2Vycm9yVGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-head-error',
          templateUrl: './head-error.component.html',
          styleUrls: ['./head-error.component.scss']
        }]
      }], function () {
        return [{
          type: _header_error_service__WEBPACK_IMPORTED_MODULE_1__["HeaderErrorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/head-error/header-error.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/head-error/header-error.service.ts ***!
    \****************************************************/

  /*! exports provided: HeaderErrorService */

  /***/
  function srcAppHeadErrorHeaderErrorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderErrorService", function () {
      return HeaderErrorService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderErrorService = function HeaderErrorService() {
      _classCallCheck(this, HeaderErrorService);

      this.headerErrorMsg = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    };

    HeaderErrorService.ɵfac = function HeaderErrorService_Factory(t) {
      return new (t || HeaderErrorService)();
    };

    HeaderErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: HeaderErrorService,
      factory: HeaderErrorService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=auth-auth-module-es5.js.map