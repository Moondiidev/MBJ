function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gig-creation-gig-creation-module"], {
  /***/
  "./src/app/gig-creation/gig-creation.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/gig-creation/gig-creation.component.ts ***!
    \********************************************************/

  /*! exports provided: GigCreationComponent */

  /***/
  function srcAppGigCreationGigCreationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GigCreationComponent", function () {
      return GigCreationComponent;
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


    var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/dropdown.directive */
    "./src/app/shared/dropdown.directive.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    function GigCreationComponent_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0425\u0430\u043C\u0433\u0438\u0439\u043D \u0431\u0430\u0433\u0430\u0434\u0430\u0430 15 \u04AF\u0441\u044D\u0433 \u0431\u0438\u0447\u043D\u044D \u04AF\u04AF.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GigCreationComponent_li_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GigCreationComponent_li_24_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r251);

          var category_r249 = ctx.$implicit;

          var ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r250.onSelectCategory(category_r249.key, category_r249.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r249 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r249.key, " ");
      }
    }

    function GigCreationComponent_li_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GigCreationComponent_li_30_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r254);

          var subCategory_r252 = ctx.$implicit;

          var ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r253.onSelectSubCategory(subCategory_r252.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subCategory_r252 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subCategory_r252.value, " ");
      }
    }

    function GigCreationComponent_span_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0425\u0430\u043C\u0433\u0438\u0439\u043D \u0431\u0430\u0433\u0430\u0434\u0430\u0430 1 \u0448\u043E\u0448\u0433\u043E \u043D\u044D\u043C \u043D\u04AF\u04AF.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var GigCreationComponent = /*#__PURE__*/function () {
      function GigCreationComponent() {
        var _this$categories;

        _classCallCheck(this, GigCreationComponent);

        this.professions = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].professions;
        this.graphicDesignNames = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].jobCategories.graphicDesignNames;
        this.marketingNames = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].jobCategories.marketingNames;
        this.soundNames = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].jobCategories.soundNames;
        this.writingNames = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].jobCategories.writingNames;
        this.videoNames = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].jobCategories.videoNames;
        this.programmingNames = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].jobCategories.programmingNames;
        this.otherNames = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].jobCategories.otherNames;
        this.categories = (_this$categories = {}, _defineProperty(_this$categories, this.professions.graphicDesignNames, this.graphicDesignNames), _defineProperty(_this$categories, this.professions.marketingNames, this.marketingNames), _defineProperty(_this$categories, this.professions.soundNames, this.soundNames), _defineProperty(_this$categories, this.professions.writingNames, this.writingNames), _defineProperty(_this$categories, this.professions.videoNames, this.videoNames), _defineProperty(_this$categories, this.professions.programmingNames, this.programmingNames), _defineProperty(_this$categories, this.professions.otherNames, this.otherNames), _this$categories);
        this.chosenCategory = this.writingNames;
        this.chosenCategoryName = this.professions.writingNames;
        this.chosenSubCategory = this.chosenCategory[0];
      }

      _createClass(GigCreationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.gigForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'searchTags': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "onSelectCategory",
        value: function onSelectCategory(chosenCategoryKey, chosenCategoryValue) {
          this.chosenCategoryName = chosenCategoryKey;
          this.chosenCategory = chosenCategoryValue;
          this.chosenSubCategory = this.chosenCategory[0];
        }
      }, {
        key: "onSelectSubCategory",
        value: function onSelectSubCategory(chosenSubCategoryValue) {
          this.chosenSubCategory = chosenSubCategoryValue;
        }
      }]);

      return GigCreationComponent;
    }();

    GigCreationComponent.ɵfac = function GigCreationComponent_Factory(t) {
      return new (t || GigCreationComponent)();
    };

    GigCreationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GigCreationComponent,
      selectors: [["app-gig-creation"]],
      decls: 44,
      vars: 12,
      consts: [[1, "gigCreation", "max-width-container"], ["spellcheck", "false", 1, "gigForm", 3, "formGroup"], [1, "form-input-group"], ["for", "title", 1, "form-input-label"], [1, "form-input-body"], [1, "title-starter"], ["formControlName", "title", "name", "title", "id", "title", "cols", "30", "rows", "3", "maxlength", "60", "minlength", "15", 1, "title-textarea"], ["gigTitle", ""], [1, "form-input-footer"], [1, "form-input-footer__left"], ["class", "error-text error-text__sm", 4, "ngIf"], [1, "form-input-footer__right"], [1, "paragraph"], [1, "form-input-body", "flex-spaceBetween"], ["type", "button", "appDropDown", "", 1, "dropdown"], [1, "dropdown__btn"], [1, "dropdown__options", "animated", "zoomIn", "evenFaster"], ["class", "dropdown__options__el", 3, "click", 4, "ngFor", "ngForOf"], ["formControlName", "searchTags", "type", "text", 1, "form-input-fullText"], [1, "paragraph", "form-input-footer__right"], [1, "error-text", "error-text__sm"], [1, "dropdown__options__el", 3, "click"]],
      template: function GigCreationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0413\u0438\u0433-\u0438\u0439\u043D \u0413\u0430\u0440\u0447\u0438\u0433");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0411\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "textarea", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GigCreationComponent_span_12_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0410\u043D\u0433\u0438\u043B\u0430\u043B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, GigCreationComponent_li_24_Template, 2, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, GigCreationComponent_li_30_Template, 2, 1, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0425\u0430\u0439\u043B\u0442\u044B\u043D \u0428\u043E\u0448\u0433\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, GigCreationComponent_span_39_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " \u0417\u04E9\u0432\u0445\u04E9\u043D \u04AF\u0441\u044D\u0433, \u0442\u043E\u043E \u0430\u0448\u0438\u0433\u043B\u0430\u043D x\u0430\u043C\u0433\u0438\u0439\u043D \u0438\u0445\u0434\u044D\u044D 5\u043D \u0448\u0438\u0440\u0445\u044D\u0433 \u0448\u043E\u0448\u0433\u043E \u043D\u044D\u043C \u043D\u04AF\u04AF. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-footer");
        }

        if (rf & 2) {
          var _r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.gigForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gigForm.get("title").valid && ctx.gigForm.get("title").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r244.value.length, " / 60");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.chosenCategoryName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 8, ctx.categories));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.chosenSubCategory, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 10, ctx.chosenCategory));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.gigForm.get("searchTags").valid && ctx.gigForm.get("searchTags").touched);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_4__["DropdownDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]],
      styles: [".gigForm[_ngcontent-%COMP%] {\n  width: 84rem;\n}\n\n.form-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  padding-bottom: 2rem;\n}\n\n.form-input-label[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 600;\n  margin-right: 4rem;\n  min-width: 15rem;\n  text-align: right;\n}\n\n.form-input-body[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n\n.form-input-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1rem;\n}\n\n.title-starter[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 10px;\n  z-index: 2;\n  color: gray;\n}\n\n.title-starter[_ngcontent-%COMP%], .title-textarea[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  font-weight: 500;\n  font-family: monospace;\n}\n\n.title-textarea[_ngcontent-%COMP%] {\n  text-indent: 50px;\n  padding: 14px 12px;\n  width: 100%;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  max-width: 30rem;\n}\n\n.form-input-fullText[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2lnLWNyZWF0aW9uL0M6XFxVc2Vyc1xcbW9vbmRcXE9uZURyaXZlXFxEZXNrdG9wXFxNQkovc3JjXFxhcHBcXGdpZy1jcmVhdGlvblxcZ2lnLWNyZWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9naWctY3JlYXRpb24vZ2lnLWNyZWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0FDRUY7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FERUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDREo7O0FESUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBREtBO0VBQ0UsZ0JBQUE7QUNGRjs7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9naWctY3JlYXRpb24vZ2lnLWNyZWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdpZ0Zvcm17XG4gIHdpZHRoOiA4NHJlbTtcbn1cbi5mb3JtLWlucHV0LWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG5cbi5mb3JtLWlucHV0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1yaWdodDogNHJlbTtcbiAgbWluLXdpZHRoOiAxNXJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5mb3JtLWlucHV0LWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1pbnB1dC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi50aXRsZSB7XG4gICYtc3RhcnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgY29sb3I6IGdyYXk7XG4gIH1cblxuICAmLXN0YXJ0ZXIsXG4gICYtdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIH1cblxuICAmLXRleHRhcmVhIHtcbiAgICB0ZXh0LWluZGVudDogNTBweDtcbiAgICBwYWRkaW5nOiAxNHB4IDEycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5kcm9wZG93bntcbiAgbWF4LXdpZHRoOiAzMHJlbTtcbn1cbi5mb3JtLWlucHV0LWZ1bGxUZXh0e1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1cmVtO1xufVxuIiwiLmdpZ0Zvcm0ge1xuICB3aWR0aDogODRyZW07XG59XG5cbi5mb3JtLWlucHV0LWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG5cbi5mb3JtLWlucHV0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1yaWdodDogNHJlbTtcbiAgbWluLXdpZHRoOiAxNXJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5mb3JtLWlucHV0LWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1pbnB1dC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi50aXRsZS1zdGFydGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiBncmF5O1xufVxuLnRpdGxlLXN0YXJ0ZXIsIC50aXRsZS10ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cbi50aXRsZS10ZXh0YXJlYSB7XG4gIHRleHQtaW5kZW50OiA1MHB4O1xuICBwYWRkaW5nOiAxNHB4IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZHJvcGRvd24ge1xuICBtYXgtd2lkdGg6IDMwcmVtO1xufVxuXG4uZm9ybS1pbnB1dC1mdWxsVGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GigCreationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gig-creation',
          templateUrl: './gig-creation.component.html',
          styleUrls: ['./gig-creation.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/gig-creation/gig-creation.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/gig-creation/gig-creation.module.ts ***!
    \*****************************************************/

  /*! exports provided: GigCreationModule */

  /***/
  function srcAppGigCreationGigCreationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GigCreationModule", function () {
      return GigCreationModule;
    });
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _gig_creation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./gig-creation.component */
    "./src/app/gig-creation/gig-creation.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GigCreationModule = function GigCreationModule() {
      _classCallCheck(this, GigCreationModule);
    };

    GigCreationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: GigCreationModule
    });
    GigCreationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      factory: function GigCreationModule_Factory(t) {
        return new (t || GigCreationModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _gig_creation_component__WEBPACK_IMPORTED_MODULE_1__["GigCreationComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GigCreationModule, {
        declarations: [_gig_creation_component__WEBPACK_IMPORTED_MODULE_1__["GigCreationComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](GigCreationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          declarations: [_gig_creation_component__WEBPACK_IMPORTED_MODULE_1__["GigCreationComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
            path: '',
            component: _gig_creation_component__WEBPACK_IMPORTED_MODULE_1__["GigCreationComponent"]
          }])]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=gig-creation-gig-creation-module-es5.js.map