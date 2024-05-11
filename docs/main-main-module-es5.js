function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["main-main-module"],
  {
    /***/
    "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js":
      /*!*************************************************************************************!*\
    !*** ./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js ***!
    \*************************************************************************************/

      /*! exports provided: SlickCarouselComponent, SlickCarouselModule, SlickItemDirective */

      /***/
      function node_modulesNgxSlickCarousel__ivy_ngcc__Fesm2015NgxSlickCarouselJs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "SlickCarouselComponent",
          function () {
            return SlickCarouselComponent;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "SlickCarouselModule",
          function () {
            return SlickCarouselModule;
          }
        );
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "SlickItemDirective",
          function () {
            return SlickItemDirective;
          }
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common */
          "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/forms */
          "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
        );
        /**
         * @fileoverview added by tsickle
         * Generated from: slick.component.ts
         * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
         */

        /**
         * Slick component
         */

        var _c0 = ["*"];

        var SlickCarouselComponent = /*#__PURE__*/ (function () {
          /**
           * Constructor
           * @param {?} el
           * @param {?} zone
           * @param {?} platformId
           */
          function SlickCarouselComponent(el, zone, platformId) {
            _classCallCheck(this, SlickCarouselComponent);

            this.el = el;
            this.zone = zone;
            this.platformId = platformId;
            this.afterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              "EventEmitter"
            ]();
            this.beforeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              "EventEmitter"
            ]();
            this.breakpoint = new _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              "EventEmitter"
            ]();
            this.destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              "EventEmitter"
            ]();
            this.init = new _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              "EventEmitter"
            ]();
            this.slides = [];
            this.initialized = false;
            this._removedSlides = [];
            this._addedSlides = [];
          }
          /**
           * On component destroy
           * @return {?}
           */

          _createClass(SlickCarouselComponent, [
            {
              key: "ngOnDestroy",
              value: function ngOnDestroy() {
                this.unslick();
              },
              /**
               * @return {?}
               */
            },
            {
              key: "ngAfterViewInit",
              value: function ngAfterViewInit() {
                this.ngAfterViewChecked();
              },
              /**
               * On component view checked
               * @return {?}
               */
            },
            {
              key: "ngAfterViewChecked",
              value: function ngAfterViewChecked() {
                var _this = this;

                if (
                  Object(
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__[
                      "isPlatformServer"
                    ]
                  )(this.platformId)
                ) {
                  return;
                }

                if (
                  this._addedSlides.length > 0 ||
                  this._removedSlides.length > 0
                ) {
                  /** @type {?} */
                  var nextSlidesLength =
                    this.slides.length -
                    this._removedSlides.length +
                    this._addedSlides.length;

                  if (!this.initialized) {
                    if (nextSlidesLength > 0) {
                      this.initSlick();
                    } // if nextSlidesLength is zere, do nothing
                  } else if (nextSlidesLength === 0) {
                    // unslick case
                    this.unslick();
                  } else {
                    this._addedSlides.forEach(
                      /**
                       * @param {?} slickItem
                       * @return {?}
                       */
                      function (slickItem) {
                        _this.slides.push(slickItem);

                        _this.zone.runOutsideAngular(
                          /**
                           * @return {?}
                           */
                          function () {
                            _this.$instance.slick(
                              "slickAdd",
                              slickItem.el.nativeElement
                            );
                          }
                        );
                      }
                    );

                    this._addedSlides = [];

                    this._removedSlides.forEach(
                      /**
                       * @param {?} slickItem
                       * @return {?}
                       */
                      function (slickItem) {
                        /** @type {?} */
                        var idx = _this.slides.indexOf(slickItem);

                        _this.slides = _this.slides.filter(
                          /**
                           * @param {?} s
                           * @return {?}
                           */
                          function (s) {
                            return s !== slickItem;
                          }
                        );

                        _this.zone.runOutsideAngular(
                          /**
                           * @return {?}
                           */
                          function () {
                            _this.$instance.slick("slickRemove", idx);
                          }
                        );
                      }
                    );

                    this._removedSlides = [];
                  }
                }
              },
              /**
               * init slick
               * @return {?}
               */
            },
            {
              key: "initSlick",
              value: function initSlick() {
                var _this2 = this;

                this.slides = this._addedSlides;
                this._addedSlides = [];
                this._removedSlides = [];
                this.zone.runOutsideAngular(
                  /**
                   * @return {?}
                   */
                  function () {
                    _this2.$instance = jQuery(_this2.el.nativeElement);

                    _this2.$instance.on(
                      "init",
                      /**
                       * @param {?} event
                       * @param {?} slick
                       * @return {?}
                       */
                      function (event, slick) {
                        _this2.zone.run(
                          /**
                           * @return {?}
                           */
                          function () {
                            _this2.init.emit({
                              event: event,
                              slick: slick,
                            });
                          }
                        );
                      }
                    );

                    _this2.$instance.slick(_this2.config);

                    _this2.zone.run(
                      /**
                       * @return {?}
                       */
                      function () {
                        _this2.initialized = true;
                        _this2.currentIndex =
                          _this2.config && _this2.config.initialSlide
                            ? _this2.config.initialSlide
                            : 0;
                      }
                    );

                    _this2.$instance.on(
                      "afterChange",
                      /**
                       * @param {?} event
                       * @param {?} slick
                       * @param {?} currentSlide
                       * @return {?}
                       */
                      function (event, slick, currentSlide) {
                        _this2.zone.run(
                          /**
                           * @return {?}
                           */
                          function () {
                            _this2.afterChange.emit({
                              event: event,
                              slick: slick,
                              currentSlide: currentSlide,
                            });

                            _this2.currentIndex = currentSlide;
                          }
                        );
                      }
                    );

                    _this2.$instance.on(
                      "beforeChange",
                      /**
                       * @param {?} event
                       * @param {?} slick
                       * @param {?} currentSlide
                       * @param {?} nextSlide
                       * @return {?}
                       */
                      function (event, slick, currentSlide, nextSlide) {
                        _this2.zone.run(
                          /**
                           * @return {?}
                           */
                          function () {
                            _this2.beforeChange.emit({
                              event: event,
                              slick: slick,
                              currentSlide: currentSlide,
                              nextSlide: nextSlide,
                            });

                            _this2.currentIndex = nextSlide;
                          }
                        );
                      }
                    );

                    _this2.$instance.on(
                      "breakpoint",
                      /**
                       * @param {?} event
                       * @param {?} slick
                       * @param {?} breakpoint
                       * @return {?}
                       */
                      function (event, slick, breakpoint) {
                        _this2.zone.run(
                          /**
                           * @return {?}
                           */
                          function () {
                            _this2.breakpoint.emit({
                              event: event,
                              slick: slick,
                              breakpoint: breakpoint,
                            });
                          }
                        );
                      }
                    );

                    _this2.$instance.on(
                      "destroy",
                      /**
                       * @param {?} event
                       * @param {?} slick
                       * @return {?}
                       */
                      function (event, slick) {
                        _this2.zone.run(
                          /**
                           * @return {?}
                           */
                          function () {
                            _this2.destroy.emit({
                              event: event,
                              slick: slick,
                            });

                            _this2.initialized = false;
                          }
                        );
                      }
                    );
                  }
                );
              },
              /**
               * @param {?} slickItem
               * @return {?}
               */
            },
            {
              key: "addSlide",
              value: function addSlide(slickItem) {
                this._addedSlides.push(slickItem);
              },
              /**
               * @param {?} slickItem
               * @return {?}
               */
            },
            {
              key: "removeSlide",
              value: function removeSlide(slickItem) {
                this._removedSlides.push(slickItem);
              },
              /**
               * Slick Method
               * @param {?} index
               * @return {?}
               */
            },
            {
              key: "slickGoTo",
              value: function slickGoTo(index) {
                var _this3 = this;

                this.zone.runOutsideAngular(
                  /**
                   * @return {?}
                   */
                  function () {
                    _this3.$instance.slick("slickGoTo", index);
                  }
                );
              },
              /**
               * @return {?}
               */
            },
            {
              key: "slickNext",
              value: function slickNext() {
                var _this4 = this;

                this.zone.runOutsideAngular(
                  /**
                   * @return {?}
                   */
                  function () {
                    _this4.$instance.slick("slickNext");
                  }
                );
              },
              /**
               * @return {?}
               */
            },
            {
              key: "slickPrev",
              value: function slickPrev() {
                var _this5 = this;

                this.zone.runOutsideAngular(
                  /**
                   * @return {?}
                   */
                  function () {
                    _this5.$instance.slick("slickPrev");
                  }
                );
              },
              /**
               * @return {?}
               */
            },
            {
              key: "slickPause",
              value: function slickPause() {
                var _this6 = this;

                this.zone.runOutsideAngular(
                  /**
                   * @return {?}
                   */
                  function () {
                    _this6.$instance.slick("slickPause");
                  }
                );
              },
              /**
               * @return {?}
               */
            },
            {
              key: "slickPlay",
              value: function slickPlay() {
                var _this7 = this;

                this.zone.runOutsideAngular(
                  /**
                   * @return {?}
                   */
                  function () {
                    _this7.$instance.slick("slickPlay");
                  }
                );
              },
              /**
               * @return {?}
               */
            },
            {
              key: "unslick",
              value: function unslick() {
                var _this8 = this;

                if (this.$instance) {
                  this.zone.runOutsideAngular(
                    /**
                     * @return {?}
                     */
                    function () {
                      _this8.$instance.slick("unslick");
                    }
                  );
                  this.$instance = undefined;
                }

                this.initialized = false;
              },
              /**
               * @param {?} changes
               * @return {?}
               */
            },
            {
              key: "ngOnChanges",
              value: function ngOnChanges(changes) {
                var _this9 = this;

                if (this.initialized) {
                  /** @type {?} */
                  var config = changes["config"];

                  if (
                    config.previousValue !== config.currentValue &&
                    config.currentValue !== undefined
                  ) {
                    /** @type {?} */
                    var refresh = config.currentValue["refresh"];
                    /** @type {?} */

                    var newOptions = Object.assign({}, config.currentValue);
                    delete newOptions["refresh"];
                    this.zone.runOutsideAngular(
                      /**
                       * @return {?}
                       */
                      function () {
                        _this9.$instance.slick(
                          "slickSetOption",
                          newOptions,
                          refresh
                        );
                      }
                    );
                  }
                }
              },
            },
          ]);

          return SlickCarouselComponent;
        })();

        SlickCarouselComponent.ɵfac = function SlickCarouselComponent_Factory(
          t
        ) {
          return new (t || SlickCarouselComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]
            )
          );
        };

        SlickCarouselComponent.ɵcmp =
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
            type: SlickCarouselComponent,
            selectors: [["ngx-slick-carousel"]],
            inputs: {
              config: "config",
            },
            outputs: {
              afterChange: "afterChange",
              beforeChange: "beforeChange",
              breakpoint: "breakpoint",
              destroy: "destroy",
              init: "init",
            },
            exportAs: ["slick-carousel"],
            features: [
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
                {
                  provide:
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
                      "NG_VALUE_ACCESSOR"
                    ],
                  useExisting: Object(
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"]
                  )(
                    /**
                     * @return {?}
                     */
                    function () {
                      return SlickCarouselComponent;
                    }
                  ),
                  multi: true,
                },
              ]),
              _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                "ɵɵNgOnChangesFeature"
              ],
            ],
            ngContentSelectors: _c0,
            decls: 1,
            vars: 0,
            template: function SlickCarouselComponent_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
              }
            },
            encapsulation: 2,
          });
        /** @nocollapse */

        SlickCarouselComponent.ctorParameters = function () {
          return [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            },
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            },
            {
              type: String,
              decorators: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                  args: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],
                  ],
                },
              ],
            },
          ];
        };

        SlickCarouselComponent.propDecorators = {
          config: [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            },
          ],
          afterChange: [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            },
          ],
          beforeChange: [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            },
          ],
          breakpoint: [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            },
          ],
          destroy: [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            },
          ],
          init: [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            },
          ],
        };
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
            SlickCarouselComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
                args: [
                  {
                    selector: "ngx-slick-carousel",
                    exportAs: "slick-carousel",
                    providers: [
                      {
                        provide:
                          _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
                            "NG_VALUE_ACCESSOR"
                          ],
                        useExisting: Object(
                          _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                            "forwardRef"
                          ]
                        )(
                          /**
                           * @return {?}
                           */
                          function () {
                            return SlickCarouselComponent;
                          }
                        ),
                        multi: true,
                      },
                    ],
                    template: "<ng-content></ng-content>",
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                    "ElementRef"
                  ],
                },
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
                },
                {
                  type: String,
                  decorators: [
                    {
                      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                        "Inject"
                      ],
                      args: [
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                          "PLATFORM_ID"
                        ],
                      ],
                    },
                  ],
                },
              ];
            },
            {
              afterChange: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
                },
              ],
              beforeChange: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
                },
              ],
              breakpoint: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
                },
              ],
              destroy: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
                },
              ],
              init: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
                },
              ],
              config: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
                },
              ],
            }
          );
        })();

        if (false) {
        }

        var SlickItemDirective = /*#__PURE__*/ (function () {
          /**
           * @param {?} el
           * @param {?} platformId
           * @param {?} carousel
           */
          function SlickItemDirective(el, platformId, carousel) {
            _classCallCheck(this, SlickItemDirective);

            this.el = el;
            this.platformId = platformId;
            this.carousel = carousel;
          }
          /**
           * @return {?}
           */

          _createClass(SlickItemDirective, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {
                if (
                  Object(
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__[
                      "isPlatformBrowser"
                    ]
                  )(this.platformId)
                ) {
                  this.carousel.addSlide(this);
                }
              },
              /**
               * @return {?}
               */
            },
            {
              key: "ngOnDestroy",
              value: function ngOnDestroy() {
                if (
                  Object(
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__[
                      "isPlatformBrowser"
                    ]
                  )(this.platformId)
                ) {
                  this.carousel.removeSlide(this);
                }
              },
            },
          ]);

          return SlickItemDirective;
        })();

        SlickItemDirective.ɵfac = function SlickItemDirective_Factory(t) {
          return new (t || SlickItemDirective)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              SlickCarouselComponent,
              1
            )
          );
        };

        SlickItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineDirective"
        ]({
          type: SlickItemDirective,
          selectors: [["", "ngxSlickItem", ""]],
        });
        /** @nocollapse */

        SlickItemDirective.ctorParameters = function () {
          return [
            {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            },
            {
              type: String,
              decorators: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                  args: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],
                  ],
                },
              ],
            },
            {
              type: SlickCarouselComponent,
              decorators: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"],
                },
              ],
            },
          ];
        };
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
            SlickItemDirective,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
                args: [
                  {
                    selector: "[ngxSlickItem]",
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                    "ElementRef"
                  ],
                },
                {
                  type: String,
                  decorators: [
                    {
                      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                        "Inject"
                      ],
                      args: [
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                          "PLATFORM_ID"
                        ],
                      ],
                    },
                  ],
                },
                {
                  type: SlickCarouselComponent,
                  decorators: [
                    {
                      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"],
                    },
                  ],
                },
              ];
            },
            null
          );
        })();

        if (false) {
        }
        /**
         * @fileoverview added by tsickle
         * Generated from: index.ts
         * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
         */

        var SlickCarouselModule = function SlickCarouselModule() {
          _classCallCheck(this, SlickCarouselModule);
        };

        SlickCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineNgModule"
        ]({
          type: SlickCarouselModule,
        });
        SlickCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineInjector"
        ]({
          factory: function SlickCarouselModule_Factory(t) {
            return new (t || SlickCarouselModule)();
          },
          imports: [
            [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
          ],
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](
              SlickCarouselModule,
              {
                declarations: function declarations() {
                  return [SlickCarouselComponent, SlickItemDirective];
                },
                imports: function imports() {
                  return [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__[
                      "CommonModule"
                    ],
                  ];
                },
                exports: function exports() {
                  return [SlickCarouselComponent, SlickItemDirective];
                },
              }
            );
        })();
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
            SlickCarouselModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_0__[
                        "CommonModule"
                      ],
                    ],
                    declarations: [SlickCarouselComponent, SlickItemDirective],
                    exports: [SlickCarouselComponent, SlickItemDirective],
                  },
                ],
              },
            ],
            null,
            null
          );
        })();
        /**
         * @fileoverview added by tsickle
         * Generated from: ngx-slick-carousel.ts
         * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
         */
        //# sourceMappingURL=ngx-slick-carousel.js.map

        /***/
      },

    /***/
    "./src/app/main/main.component.ts":
      /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

      /*! exports provided: MainComponent */

      /***/
      function srcAppMainMainComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "MainComponent",
          function () {
            return MainComponent;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _shared_cards_model__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../shared/cards.model */
            "./src/app/shared/cards.model.ts"
          );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/forms */
          "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
        );
        /* harmony import */

        var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ngx-slick-carousel */
            "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js"
          );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common */
          "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */

        var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../footer/footer.component */
            "./src/app/footer/footer.component.ts"
          );

        var _c0 = function _c0(a0) {
          return {
            "background-image": a0,
          };
        };

        function MainComponent_div_38_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "div",
              33
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              1,
              "div",
              34
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              2,
              "p",
              35
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              4,
              "p",
              36
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var popularCard_r4 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
              "ngStyle",
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](
                3,
                _c0,
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(" +
                  popularCard_r4.background +
                  ")"
              )
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              popularCard_r4.description
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](
              popularCard_r4.title
            );
          }
        }

        var MainComponent = /*#__PURE__*/ (function () {
          function MainComponent() {
            _classCallCheck(this, MainComponent);

            this.slides = [
              new _shared_cards_model__WEBPACK_IMPORTED_MODULE_1__[
                "CardsModel"
              ](
                "assets/img/Popular/2danimation.jpg",
                "Зургаа амь оруул",
                "2Д Аниматион"
              ),
              new _shared_cards_model__WEBPACK_IMPORTED_MODULE_1__[
                "CardsModel"
              ](
                "assets/img/Popular/websitecreation.jpg",
                "Бизнэсээ эхлүүл",
                "Вэбсайт дизайн"
              ),
              new _shared_cards_model__WEBPACK_IMPORTED_MODULE_1__[
                "CardsModel"
              ](
                "assets/img/Popular/translation.jpg",
                "Хэлийг нэгтэг",
                "Орчуулаг"
              ),
              new _shared_cards_model__WEBPACK_IMPORTED_MODULE_1__[
                "CardsModel"
              ](
                "assets/img/Popular/illustration.jpg",
                "Төсөөллөө бодит болог",
                "График дүрсэлгээ"
              ),
              new _shared_cards_model__WEBPACK_IMPORTED_MODULE_1__[
                "CardsModel"
              ](
                "assets/img/Popular/logodesign.jpg",
                "Брандаа хөгжүүл",
                "Лого дизайн"
              ),
              new _shared_cards_model__WEBPACK_IMPORTED_MODULE_1__[
                "CardsModel"
              ](
                "assets/img/Popular/voiceover.jpg",
                "Дуу амь оруулна",
                "Дуу орчуулаг"
              ),
              new _shared_cards_model__WEBPACK_IMPORTED_MODULE_1__[
                "CardsModel"
              ](
                "assets/img/Popular/photoshopediting.jpg",
                "Бодит амьдралыг буйснуул",
                "Photoshop эдит"
              ),
              new _shared_cards_model__WEBPACK_IMPORTED_MODULE_1__[
                "CardsModel"
              ](
                "assets/img/Popular/writing.jpg",
                "Үгээр тайлбарлах араггуй",
                "Бичвэр"
              ),
              new _shared_cards_model__WEBPACK_IMPORTED_MODULE_1__[
                "CardsModel"
              ]("assets/img/Popular/SEO.jpg", "Илүү олон хүнд хүр", "SEO"),
              new _shared_cards_model__WEBPACK_IMPORTED_MODULE_1__[
                "CardsModel"
              ](
                "assets/img/Popular/3dmodelling.jpg",
                "Компьютер доторх амьдрал",
                "3Д моделинг"
              ),
            ];
            this.slideConfig = {
              slidesToShow: 5,
              slidesToScroll: 5,
              nextArrow:
                "<img src='assets/img/left.svg' class='slider-btn slider-btn--right next-slide'>",
              prevArrow:
                "<img src='assets/img/left.svg' class='slider-btn slider-btn--left prev-slide'>",
              infinite: true,
              draggable: false,
              responsive: [
                {
                  breakpoint: 1240,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                  },
                },
                {
                  breakpoint: 1060,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  },
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                }, // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ],
            };
          }

          _createClass(MainComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {},
            },
            {
              key: "onClick",
              value: function onClick() {},
            },
          ]);

          return MainComponent;
        })();

        MainComponent.ɵfac = function MainComponent_Factory(t) {
          return new (t || MainComponent)();
        };

        MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: MainComponent,
          selectors: [["app-main"]],
          decls: 56,
          vars: 3,
          consts: [
            [1, "hero-container"],
            [1, "hero"],
            [1, "hero__img"],
            [1, "hero__content"],
            [1, "hero__title"],
            ["action", "", "spellcheck", "false", 1, "search"],
            ["f", "ngForm"],
            [1, "searchBar"],
            ["src", "assets/img/loupe.svg", "alt", "", 1, "searchIcon"],
            [
              "type",
              "text",
              "ngModel",
              "",
              "name",
              "searchQuery",
              "required",
              "",
              1,
              "search-input",
            ],
            ["search", "ngModel"],
            ["type", "button", 1, "search-button", 3, "disabled", "click"],
            [1, "hero__popular"],
            [1, "hero__text"],
            ["href", "#", 1, "hero__popular__link"],
            [1, "companies"],
            [
              "src",
              "assets/img/company-logos/apu.png",
              "alt",
              "",
              1,
              "companies__companyLogo",
            ],
            [
              "src",
              "assets/img/company-logos/unitel.png",
              "alt",
              "",
              1,
              "companies__companyLogo",
            ],
            [
              "src",
              "assets/img/company-logos/mobicom.png",
              "alt",
              "",
              1,
              "companies__companyLogo",
            ],
            [
              "src",
              "assets/img/company-logos/oyu-tolgoi.png",
              "alt",
              "",
              1,
              "companies__companyLogo",
            ],
            [
              "src",
              "assets/img/company-logos/MCS.png",
              "alt",
              "",
              1,
              "companies__companyLogo",
            ],
            [1, "max-width-container"],
            [1, "heading-secondary", "text-center", "margin-bot-lg"],
            [1, "carousel", 3, "config"],
            ["slickModal", "slick-carousel"],
            [
              "ngxSlickItem",
              "",
              "class",
              "card",
              3,
              "ngStyle",
              4,
              "ngFor",
              "ngForOf",
            ],
            [1, "selfPromo", "max-width-container"],
            [1, "selfPromo__features"],
            [1, "selfPromo__feature"],
            ["src", "assets/img/clock.svg", "alt", "", 1, "selfPromo__img"],
            [1, "heading-fourth"],
            [
              "src",
              "assets/img/authentication.svg",
              "alt",
              "",
              1,
              "selfPromo__img",
            ],
            ["src", "assets/img/pay.svg", "alt", "", 1, "selfPromo__img"],
            ["ngxSlickItem", "", 1, "card", 3, "ngStyle"],
            [1, "card__content"],
            [1, "card__description"],
            [1, "card__title"],
          ],
          template: function MainComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "section",
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                2,
                "div",
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "div",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "h1",
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                5,
                "\u0411\u0438\u0437\u043D\u044D\u0441\u0434\u044D\u044D \u0442\u0430\u0430\u0440\u0441\u0430\u043D \u0445\u0430\u043C\u0433\u0438\u0439\u043D \u0448\u0438\u043B\u0434\u044D\u0433 "
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                7,
                " \u0447\u04E9\u043B\u04E9\u04E9\u0442 \u0430\u0436\u0438\u043B\u043B\u0430\u0433\u0441\u0430\u0434\u044B\u0433 \u044D\u043D\u0434\u044D\u044D\u0441 \u043E\u043B"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                8,
                "form",
                5,
                6
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                10,
                "div",
                7
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                11,
                "img",
                8
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                12,
                "input",
                9,
                10
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                14,
                "button",
                11
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function MainComponent_Template_button_click_14_listener() {
                  return ctx.onClick();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                15,
                "\u0425\u0430\u0439\u0445"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                16,
                "div",
                12
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                17,
                "p",
                13
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                18,
                "\u0418\u0440\u044D\u043B\u0434\u0442\u044D\u0439:"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                19,
                "a",
                14
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                20,
                "\u041B\u043E\u0433\u043E \u0414\u0438\u0437\u0430\u0439\u043D"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                21,
                "a",
                14
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                22,
                "\u041E\u0440\u0447\u0443\u0443\u043B\u0430\u0433"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                23,
                "a",
                14
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                24,
                "\u0412\u044D\u0431 \u0421\u0430\u0439\u0442"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                25,
                "a",
                14
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                26,
                "\u041D\u0438\u0439\u0442\u043B\u044D\u043B \u0411\u043E\u043B\u043E\u043D \u04E8\u0433\u04AF\u04AF\u043B\u044D\u0433"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                27,
                "div",
                15
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                28,
                "img",
                16
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                29,
                "img",
                17
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                30,
                "img",
                18
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                31,
                "img",
                19
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                32,
                "img",
                20
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                33,
                "section",
                21
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                34,
                "h2",
                22
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                35,
                " \u0410\u043B\u0434\u0430\u0440\u0442\u0430\u0439 \u041C\u044D\u0440\u0433\u044D\u0436\u043B\u0438\u0439\u043D \u04AE\u0439\u043B\u0447\u0438\u043B\u0433\u044D\u044D\u043D\u04AF\u04AF\u0434 "
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                36,
                "ngx-slick-carousel",
                23,
                24
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                38,
                MainComponent_div_38_Template,
                6,
                5,
                "div",
                25
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                39,
                "section",
                26
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                40,
                "h2",
                22
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                41,
                "\u0410\u0436\u0438\u043B\u0430\u0430 \u0431\u04AF\u0442\u044D\u044D\u043C\u044D\u044D\u0440 \u0431\u0430\u0439\u043D \u0443\u0443?"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                42,
                "div",
                27
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                43,
                "div",
                28
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                44,
                "img",
                29
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                45,
                "h4",
                30
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                46,
                "\u0410\u0441\u0443\u0443\u0445 \u0430\u0441\u0443\u0443\u043B\u0442 \u0431\u0430\u0439\u043D\u0430 \u0433\u044D\u0436 \u04AF\u04AF? \u0411\u0438\u0434\u044D\u043D\u0442\u044D\u0439 \u044F\u043C\u0430\u0440\u0447 \u0446\u0430\u0433\u0442 \u0445\u043E\u043B\u0431\u043E\u0433\u0434\u043E\u0436 \u0431\u043E\u0434\u0438\u0442 \u0445\u04AF\u043C\u04AF\u04AF\u0441\u044D\u044D\u0441 \u0448\u0443\u0443\u0440\u0445\u0430\u0439 \u0442\u0443\u0441\u043B\u0430\u043C\u0436 \u0430\u0432\u043D\u0443\u0443."
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                47,
                "div",
                28
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                48,
                "img",
                31
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                49,
                "h4",
                30
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                50,
                "\u0427\u04E9\u043B\u04E9\u04E9\u0442 \u0430\u0436\u0438\u043B\u043B\u0430\u0433\u0441\u0430\u0434\u0430\u0434 \u0442\u04E9\u043B\u0431\u04E9\u0440 \u0437\u04E9\u0432\u0445\u04E9\u043D \u04E9\u04E9\u0440\u0438\u0439\u0433 \u0447\u0438\u043D\u044C \u0430\u0432\u0441\u0430\u043D \u04AF\u0439\u043B\u0447\u0438\u043B\u0433\u044D\u044D\u043D\u0434\u044D\u044D \u0441\u044D\u0442\u0433\u044D\u043B \u0445\u0430\u043D\u0433\u0430\u043B\u0443\u0443\u043D \u0433\u044D\u0441\u044D\u043D \u04AF\u0435\u0434 \u043B \u043E\u043B\u0433\u043E\u0433\u0434\u0434\u043E\u0433."
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                51,
                "div",
                28
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                52,
                "img",
                32
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                53,
                "h4",
                30
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                54,
                "\u0425\u044D\u0440 \u0438\u0445 \u043C\u04E9\u043D\u0433\u04E9 \u0442\u04E9\u043B\u04E9\u0445\u04E9\u04E9 \u0443\u0440\u0434\u0447\u0438\u043B\u0430\u043D \u043C\u044D\u0434. \u0426\u0430\u0433\u0438\u0439\u043D \u0446\u0430\u043B\u0438\u043D \u0433\u044D\u0436 \u0431\u0430\u0439\u0445\u0433\u0443\u0439, \u0433\u0430\u043D\u0446 \u0443\u0434\u0430\u0430 \u0442\u04E9\u043B\u0436 \u0441\u043E\u043D\u0433\u043E\u0441\u043E\u043D \u04AF\u0439\u043B\u0447\u0438\u043B\u0433\u044D\u044D\u0433\u044D\u044D \u0445\u04AF\u0440\u0442."
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                55,
                "app-footer"
              );
            }

            if (rf & 2) {
              var _r0 =
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "disabled",
                !_r0.valid
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "config",
                ctx.slideConfig
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                "ngForOf",
                ctx.slides
              );
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
              "ɵangular_packages_forms_forms_y"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__[
              "SlickCarouselComponent"
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__[
              "FooterComponent"
            ],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__[
              "SlickItemDirective"
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"],
          ],
          styles: [
            ".hero-container[_ngcontent-%COMP%] {\n  height: 55rem;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('background.jpg') no-repeat center;\n  background-size: cover;\n  margin-bottom: 12rem;\n}\n\n.hero[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 4rem;\n  position: relative;\n}\n\n.hero__content[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.hero__title[_ngcontent-%COMP%], .hero__text[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: center;\n  color: #f7f7f7;\n  z-index: 10;\n}\n\n.hero__title[_ngcontent-%COMP%] {\n  font-size: 4rem;\n}\n\n.hero__text[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n\n.hero__popular[_ngcontent-%COMP%] {\n  z-index: 2;\n  margin-top: 3rem;\n}\n\n.hero__popular__link[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  border: 1px solid #f7f7f7;\n  padding: 1rem;\n  margin: 0 1rem;\n  border-radius: 10px;\n  color: #f7f7f7;\n  transition: 0.2s;\n}\n\n.hero__popular__link[_ngcontent-%COMP%]:hover {\n  background-color: #aaaaaa;\n}\n\n.companies[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 10px -8px rgba(0, 0, 0, 0.25);\n  padding: 1rem 30rem;\n  display: flex;\n  justify-content: space-evenly;\n  background-color: #eeeeee;\n}\n\n.companies__companyLogo[_ngcontent-%COMP%] {\n  height: 6rem;\n}\n\n.search[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  height: 6rem;\n  width: 50rem;\n  display: flex;\n  align-items: center;\n  z-index: 10;\n}\n\n.searchBar[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  background-color: white;\n  border-radius: 100px;\n  box-shadow: 0px 10px 10px -8px rgba(255, 255, 255, 0.25);\n}\n\n.searchIcon[_ngcontent-%COMP%] {\n  height: 60%;\n  margin: 0 2rem;\n  padding-right: 1rem;\n  border-right: 1px solid rgba(138, 133, 133, 0.5);\n}\n\n.search-button[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 2rem;\n  text-align: center;\n  outline: none;\n  font-size: 2rem;\n  border: none;\n  background-color: #9e9595;\n  border-top-right-radius: 100px;\n  border-bottom-right-radius: 100px;\n  color: #f7f7f7;\n  transition: 0.2s;\n  cursor: pointer;\n  font-weight: 400;\n}\n\ninput.ng-valid[_ngcontent-%COMP%]    + .search-button[_ngcontent-%COMP%] {\n  background-color: #00adb5;\n}\n\ninput.ng-valid[_ngcontent-%COMP%]    + .search-button[_ngcontent-%COMP%]:hover {\n  background-color: #07bfc9;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  font-size: 2rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  border-radius: 10px;\n  cursor: pointer;\n  background-position: center;\n  background-size: cover;\n  outline: none;\n}\n\n.card__content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n\n.card__description[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 300;\n  color: #ebebeb;\n}\n\n.card__title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  margin-top: 0.5rem;\n  color: white;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);\n}\n\n.selfPromo[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n\n.selfPromo__features[_ngcontent-%COMP%] {\n  text-align: center;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));\n  padding: 0 2rem;\n  -moz-column-gap: 4rem;\n       column-gap: 4rem;\n}\n\n.selfPromo__img[_ngcontent-%COMP%] {\n  height: 10rem;\n  width: 10rem;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXG1vb25kXFxPbmVEcml2ZVxcRGVza3RvcFxcTUJKL3NyY1xcYXBwXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vQzpcXFVzZXJzXFxtb29uZFxcT25lRHJpdmVcXERlc2t0b3BcXE1CSi9zcmNcXGFwcFxcc2Nzc1xcY2FyZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUUsYUFBQTtFQUNBLHNIQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0hGOztBREtFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNISjs7QURNRTtFQUVFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQTVCaUI7RUE2QmpCLFdBQUE7QUNMSjs7QURRRTtFQUNFLGVBQUE7QUNOSjs7QURTRTtFQUNFLGlCQUFBO0FDUEo7O0FEVUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNSSjs7QURVSTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBRUEsbUJBQUE7RUFDQSxjQW5EZTtFQW9EZixnQkFBQTtBQ1ROOztBRFdNO0VBQ0UseUJBQUE7QUNUUjs7QURlQTtFQUNFLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQ1pGOztBRGNFO0VBQ0UsWUFBQTtBQ1pKOztBRGdCQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDYkY7O0FEZ0JBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3REFBQTtBQ2JGOztBRGdCQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtBQ2JGOztBRGdCQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQTlHbUI7RUErR25CLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDYkY7O0FEZ0JBO0VBQ0UseUJBQUE7QUNiRjs7QURjRTtFQUNFLHlCQUFBO0FDWko7O0FEZ0JBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ2JGOztBQ3BIQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUR1SEo7O0FDdEhJO0VBQ0ksZUFBQTtBRHdIUjs7QUN0SEk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRHdIUjs7QUN0SEk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUR3SFI7O0FDdEhJO0VBQ0ksMERBQUE7QUR3SFI7O0FETkE7RUFDRSxtQkFBQTtBQ1NGOztBRFJFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMERBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtBQ1VKOztBRFBFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQtY29sb3ItcHJpbWFyeTogI2Y3ZjdmNztcblxuLy8gKioqKioqKioqKioqIEhFUk8gU0VDVElPTiAqKioqKioqKioqKioqKiAvL1xuLmhlcm8tY29udGFpbmVyIHtcbiAgLy8gVG8gY29tcGVuc2F0ZSBmb3IgdGhlIGhlYWRlclxuICBoZWlnaHQ6IDU1cmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuMyksIHJnYmEoMCwgMCwgMCwgMC4zKSksIHVybCguLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmQuanBnKSBuby1yZXBlYXQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW4tYm90dG9tOiAxMnJlbTtcbn1cblxuLmhlcm8ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDRyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmX19jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAmX190aXRsZSxcbiAgJl9fdGV4dCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogJGZvbnQtY29sb3ItcHJpbWFyeTtcbiAgICB6LWluZGV4OiAxMDtcbiAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cblxuICAmX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgfVxuXG4gICZfX3BvcHVsYXIge1xuICAgIHotaW5kZXg6IDI7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcblxuICAgICZfX2xpbmsge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGZvbnQtY29sb3ItcHJpbWFyeTtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBtYXJnaW46IDAgMXJlbTtcblxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGNvbG9yOiAkZm9udC1jb2xvci1wcmltYXJ5O1xuICAgICAgdHJhbnNpdGlvbjogMC4ycztcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDE3MCwgMTcwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNvbXBhbmllcyB7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLThweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBwYWRkaW5nOiAxcmVtIDMwcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcblxuICAmX19jb21wYW55TG9nbyB7XG4gICAgaGVpZ2h0OiA2cmVtO1xuICB9XG59XG5cbi5zZWFyY2gge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBoZWlnaHQ6IDZyZW07XG4gIHdpZHRoOiA1MHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTA7XG59XG5cbi5zZWFyY2hCYXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IC04cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbn1cblxuLnNlYXJjaEljb24ge1xuICBoZWlnaHQ6IDYwJTtcbiAgbWFyZ2luOiAwIDJyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTM4LCAxMzMsIDEzMywgMC41KTtcbn1cblxuLnNlYXJjaC1idXR0b24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZTk1OTU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMHB4O1xuICBjb2xvcjogJGZvbnQtY29sb3ItcHJpbWFyeTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pbnB1dC5uZy12YWxpZCsuc2VhcmNoLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFkYjU7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwN2JmYzk7XG4gIH1cbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLy8gKioqKioqKioqKioqIFBPUFVMQVIgU0VDVElPTiAqKioqKioqKioqKioqKiAvL1xuQGltcG9ydCBcIi4uL3Njc3MvY2FyZC5zY3NzXCI7XG5cbi8vICoqKioqKioqKioqKiBTRUxGUFJPTU8gU0VDVElPTiAqKioqKioqKioqKioqKiAvL1xuXG4uc2VsZlByb21vIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgJl9fZmVhdHVyZXMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNXJlbSwgMWZyKSk7XG4gICAgcGFkZGluZzogMCAycmVtO1xuICAgIGNvbHVtbi1nYXA6IDRyZW07XG4gIH1cblxuICAmX19pbWcge1xuICAgIGhlaWdodDogMTByZW07XG4gICAgd2lkdGg6IDEwcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbn1cblxuIiwiLmhlcm8tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1NXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjMpLCByZ2JhKDAsIDAsIDAsIDAuMykpLCB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTJyZW07XG59XG5cbi5oZXJvIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA0cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVyb19fY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaGVyb19fdGl0bGUsIC5oZXJvX190ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZjdmN2Y3O1xuICB6LWluZGV4OiAxMDtcbn1cbi5oZXJvX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cbi5oZXJvX190ZXh0IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG4uaGVyb19fcG9wdWxhciB7XG4gIHotaW5kZXg6IDI7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG4uaGVyb19fcG9wdWxhcl9fbGluayB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZjdmNztcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAwIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZjdmN2Y3O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmhlcm9fX3BvcHVsYXJfX2xpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhYWFhO1xufVxuXG4uY29tcGFuaWVzIHtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHBhZGRpbmc6IDFyZW0gMzByZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xufVxuLmNvbXBhbmllc19fY29tcGFueUxvZ28ge1xuICBoZWlnaHQ6IDZyZW07XG59XG5cbi5zZWFyY2gge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBoZWlnaHQ6IDZyZW07XG4gIHdpZHRoOiA1MHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTA7XG59XG5cbi5zZWFyY2hCYXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IC04cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbn1cblxuLnNlYXJjaEljb24ge1xuICBoZWlnaHQ6IDYwJTtcbiAgbWFyZ2luOiAwIDJyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTM4LCAxMzMsIDEzMywgMC41KTtcbn1cblxuLnNlYXJjaC1idXR0b24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZTk1OTU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMHB4O1xuICBjb2xvcjogI2Y3ZjdmNztcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pbnB1dC5uZy12YWxpZCArIC5zZWFyY2gtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWRiNTtcbn1cbmlucHV0Lm5nLXZhbGlkICsgLnNlYXJjaC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdiZmM5O1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5jYXJkX19jb250ZW50IHtcbiAgcGFkZGluZzogMS41cmVtO1xufVxuLmNhcmRfX2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZWJlYmViO1xufVxuLmNhcmRfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwMHB4IDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLnNlbGZQcm9tbyB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG4uc2VsZlByb21vX19mZWF0dXJlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1cmVtLCAxZnIpKTtcbiAgcGFkZGluZzogMCAycmVtO1xuICBjb2x1bW4tZ2FwOiA0cmVtO1xufVxuLnNlbGZQcm9tb19faW1nIHtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgd2lkdGg6IDEwcmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufSIsIi5jYXJke1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbiA6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgJl9fY29udGVudHtcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgIH1cbiAgICAmX19kZXNjcmlwdGlvbntcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XG4gICAgfVxuICAgICZfX3RpdGxle1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICAmOmhvdmVye1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTAwcHggMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIH1cbn1cblxuIl19 */",
          ],
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            MainComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-main",
                    templateUrl: "./main.component.html",
                    styleUrls: ["./main.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/main/main.module.ts":
      /*!*************************************!*\
    !*** ./src/app/main/main.module.ts ***!
    \*************************************/

      /*! exports provided: MainModule */

      /***/
      function srcAppMainMainModuleTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "MainModule", function () {
          return MainModule;
        });
        /* harmony import */

        var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./../shared/shared.module */
            "./src/app/shared/shared.module.ts"
          );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */
          "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/forms */
          "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./main.component */
          "./src/app/main/main.component.ts"
        );
        /* harmony import */

        var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ngx-slick-carousel */
            "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js"
          );

        var MainModule = function MainModule() {
          _classCallCheck(this, MainModule);
        };

        MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__[
          "ɵɵdefineNgModule"
        ]({
          type: MainModule,
        });
        MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__[
          "ɵɵdefineInjector"
        ]({
          factory: function MainModule_Factory(t) {
            return new (t || MainModule)();
          },
          imports: [
            [
              _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
              ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__[
                "SlickCarouselModule"
              ],
              _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__[
                "SharedModule"
              ],
              _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                "RouterModule"
              ].forChild([
                {
                  path: "",
                  component:
                    _main_component__WEBPACK_IMPORTED_MODULE_4__[
                      "MainComponent"
                    ],
                },
              ]),
            ],
          ],
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](
              MainModule,
              {
                declarations: [
                  _main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                ],
                imports: [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                  ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__[
                    "SlickCarouselModule"
                  ],
                  _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__[
                    "SharedModule"
                  ],
                  _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                ],
              }
            );
        })();
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](
            MainModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
                args: [
                  {
                    declarations: [
                      _main_component__WEBPACK_IMPORTED_MODULE_4__[
                        "MainComponent"
                      ],
                    ],
                    imports: [
                      _angular_forms__WEBPACK_IMPORTED_MODULE_2__[
                        "FormsModule"
                      ],
                      ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_5__[
                        "SlickCarouselModule"
                      ],
                      _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__[
                        "SharedModule"
                      ],
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                        "RouterModule"
                      ].forChild([
                        {
                          path: "",
                          component:
                            _main_component__WEBPACK_IMPORTED_MODULE_4__[
                              "MainComponent"
                            ],
                        },
                      ]),
                    ],
                  },
                ],
              },
            ],
            null,
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/shared/cards.model.ts":
      /*!***************************************!*\
    !*** ./src/app/shared/cards.model.ts ***!
    \***************************************/

      /*! exports provided: CardsModel */

      /***/
      function srcAppSharedCardsModelTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "CardsModel", function () {
          return CardsModel;
        });

        var CardsModel = function CardsModel(background, description, title) {
          _classCallCheck(this, CardsModel);

          this.background = background;
          this.description = description;
          this.title = title;
        };
        /***/
      },
  },
]);
//# sourceMappingURL=main-main-module-es5.js.map
