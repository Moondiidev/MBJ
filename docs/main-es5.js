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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["main"],
  {
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
            e.code = "MODULE_NOT_FOUND";
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
      function srcAppAppRoutingModuleTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "AppRoutingModule",
          function () {
            return AppRoutingModule;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */
          "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
        );

        var appRoutes = [
          {
            path: "",
            redirectTo: "/main",
            pathMatch: "full",
          },
          {
            path: "main",
            loadChildren: function loadChildren() {
              return __webpack_require__
                .e(
                  /*! import() | main-main-module */
                  "main-main-module"
                )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./main/main.module */
                    "./src/app/main/main.module.ts"
                  )
                )
                .then(function (m) {
                  return m.MainModule;
                });
            },
          },
          {
            path: "auth",
            loadChildren: function loadChildren() {
              return __webpack_require__
                .e(
                  /*! import() | auth-auth-module */
                  "auth-auth-module"
                )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./auth/auth.module */
                    "./src/app/auth/auth.module.ts"
                  )
                )
                .then(function (m) {
                  return m.AuthModule;
                });
            },
          },
          {
            path: "seller-set-up",
            loadChildren: function loadChildren() {
              return Promise.all(
                /*! import() | seller-set-up-seller-set-up-module */
                [
                  __webpack_require__.e("common"),
                  __webpack_require__.e("seller-set-up-seller-set-up-module"),
                ]
              )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./seller-set-up/seller-set-up.module */
                    "./src/app/seller-set-up/seller-set-up.module.ts"
                  )
                )
                .then(function (m) {
                  return m.SellerModule;
                });
            },
          },
          {
            path: "seller-board",
            loadChildren: function loadChildren() {
              return __webpack_require__
                .e(
                  /*! import() | seller-board-seller-board-module */
                  "seller-board-seller-board-module"
                )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./seller-board/seller-board.module */
                    "./src/app/seller-board/seller-board.module.ts"
                  )
                )
                .then(function (m) {
                  return m.SellerBoardModule;
                });
            },
          },
          {
            path: "user-profile",
            loadChildren: function loadChildren() {
              return Promise.all(
                /*! import() | user-profile-user-profile-module */
                [
                  __webpack_require__.e("common"),
                  __webpack_require__.e("user-profile-user-profile-module"),
                ]
              )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./user-profile/user-profile.module */
                    "./src/app/user-profile/user-profile.module.ts"
                  )
                )
                .then(function (m) {
                  return m.UserProfileModule;
                });
            },
          },
          {
            path: "gig-creation",
            loadChildren: function loadChildren() {
              return Promise.all(
                /*! import() | gig-creation-gig-creation-module */
                [
                  __webpack_require__.e("common"),
                  __webpack_require__.e("gig-creation-gig-creation-module"),
                ]
              )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./gig-creation/gig-creation.module */
                    "./src/app/gig-creation/gig-creation.module.ts"
                  )
                )
                .then(function (m) {
                  return m.GigCreationModule;
                });
            },
          },
        ];

        var AppRoutingModule = function AppRoutingModule() {
          _classCallCheck(this, AppRoutingModule);
        };

        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineNgModule"
        ]({
          type: AppRoutingModule,
        });
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjector"
        ]({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)();
          },
          imports: [
            [
              _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                "RouterModule"
              ].forRoot(appRoutes, {
                preloadingStrategy:
                  _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                    "PreloadAllModules"
                  ],
                scrollPositionRestoration: "enabled",
              }),
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
          ],
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](
              AppRoutingModule,
              {
                imports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                ],
                exports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                ],
              }
            );
        })();
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AppRoutingModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                args: [
                  {
                    imports: [
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                        "RouterModule"
                      ].forRoot(appRoutes, {
                        preloadingStrategy:
                          _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                            "PreloadAllModules"
                          ],
                        scrollPositionRestoration: "enabled",
                      }),
                    ],
                    exports: [
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                        "RouterModule"
                      ],
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
    "./src/app/app.component.ts":
      /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

      /*! exports provided: AppComponent */

      /***/
      function srcAppAppComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
          return AppComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./auth/auth.service */
            "./src/app/auth/auth.service.ts"
          );
        /* harmony import */

        var _shared_app_manager_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./shared/app-manager.service */
            "./src/app/shared/app-manager.service.ts"
          );
        /* harmony import */

        var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ./header/header.component */
            "./src/app/header/header.component.ts"
          );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/router */
          "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
        );

        var AppComponent = /*#__PURE__*/ (function () {
          function AppComponent(authService, appManagerService) {
            _classCallCheck(this, AppComponent);

            this.authService = authService;
            this.appManagerService = appManagerService;
          }

          _createClass(AppComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {
                var _this = this;

                //Get username
                this.savedUserName = localStorage.getItem("userName");
                this.appManagerService.userName.next(this.savedUserName);
                console.log(this.appManagerService.userName); //Gets email and password of the user

                this.emailAndPasswordSub = this.authService
                  .getEmailAndPass(this.savedUserName)
                  .subscribe(function (data) {
                    console.log(data);
                    _this.authService.currentUserEmail = data.email;
                    _this.authService.currentUserPass = data.password;
                  }); //This component loads first so do auto login here

                this.authService.rememberer();

                if (this.authService.rememberUser) {
                  this.authService.autoLogin();
                }
              },
            },
            {
              key: "ngOnDestroy",
              value: function ngOnDestroy() {
                //Called once, before the instance is destroyed.
                //Add 'implements OnDestroy' to the class.
                this.emailAndPasswordSub.unsubscribe();
              },
            },
          ]);

          return AppComponent;
        })();

        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _shared_app_manager_service__WEBPACK_IMPORTED_MODULE_2__[
                "AppManagerService"
              ]
            )
          );
        };

        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: AppComponent,
          selectors: [["app-root"]],
          decls: 2,
          vars: 0,
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                0,
                "app-header"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                1,
                "router-outlet"
              );
            }
          },
          directives: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__[
              "HeaderComponent"
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"],
          ],
          styles: [
            "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */",
          ],
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AppComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-root",
                    templateUrl: "./app.component.html",
                    styleUrls: ["./app.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__[
                    "AuthService"
                  ],
                },
                {
                  type: _shared_app_manager_service__WEBPACK_IMPORTED_MODULE_2__[
                    "AppManagerService"
                  ],
                },
              ];
            },
            null
          );
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
      function srcAppAppModuleTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "AppModule", function () {
          return AppModule;
        });
        /* harmony import */

        var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./shared/shared.module */
            "./src/app/shared/shared.module.ts"
          );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */
          "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
        );
        /* harmony import */

        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @angular/platform-browser */
            "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"
          );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./app-routing.module */
            "./src/app/app-routing.module.ts"
          );
        /* harmony import */

        var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./app.component */
          "./src/app/app.component.ts"
        );
        /* harmony import */

        var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./header/header.component */
            "./src/app/header/header.component.ts"
          );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/forms */
          "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
        );
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! @angular/common/http */
            "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
          );
        /* harmony import */

        var angularfire2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! angularfire2 */
          "./node_modules/angularfire2/index.js"
        );
        /* harmony import */

        var angularfire2__WEBPACK_IMPORTED_MODULE_9___default =
          /*#__PURE__*/ __webpack_require__.n(
            angularfire2__WEBPACK_IMPORTED_MODULE_9__
          );
        /* harmony import */

        var angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! angularfire2/storage */
            "./node_modules/angularfire2/storage/index.js"
          );
        /* harmony import */

        var angularfire2_storage__WEBPACK_IMPORTED_MODULE_10___default =
          /*#__PURE__*/ __webpack_require__.n(
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__
          );
        /* harmony import */

        var angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! angularfire2/auth */
            "./node_modules/angularfire2/auth/index.js"
          );
        /* harmony import */

        var angularfire2_auth__WEBPACK_IMPORTED_MODULE_11___default =
          /*#__PURE__*/ __webpack_require__.n(
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__
          );

        var AppModule = function AppModule() {
          _classCallCheck(this, AppModule);
        };

        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__[
          "ɵɵdefineNgModule"
        ]({
          type: AppModule,
          bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
          ],
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__[
          "ɵɵdefineInjector"
        ]({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          providers: [],
          imports: [
            [
              angularfire2__WEBPACK_IMPORTED_MODULE_9__[
                "AngularFireModule"
              ].initializeApp({
                apiKey: "AIzaSyA5Y-a9JJesQov7UMNrlBHFDN5wfaA9ANw",
                authDomain: "mbj-2f9fa.firebaseapp.com",
                projectId: "mbj-2f9fa",
                storageBucket: "mbj-2f9fa.appspot.com",
              }),
              angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__[
                "AngularFireStorageModule"
              ],
              angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__[
                "AngularFireAuthModule"
              ],
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__[
                "BrowserModule"
              ],
              _app_routing_module__WEBPACK_IMPORTED_MODULE_4__[
                "AppRoutingModule"
              ],
              _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
              _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
              _angular_common_http__WEBPACK_IMPORTED_MODULE_8__[
                "HttpClientModule"
              ],
              _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__[
                "SharedModule"
              ],
            ],
          ],
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](
              AppModule,
              {
                declarations: [
                  _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                  _header_header_component__WEBPACK_IMPORTED_MODULE_6__[
                    "HeaderComponent"
                  ],
                ],
                imports: [
                  angularfire2__WEBPACK_IMPORTED_MODULE_9__[
                    "AngularFireModule"
                  ],
                  angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__[
                    "AngularFireStorageModule"
                  ],
                  angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__[
                    "AngularFireAuthModule"
                  ],
                  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__[
                    "BrowserModule"
                  ],
                  _app_routing_module__WEBPACK_IMPORTED_MODULE_4__[
                    "AppRoutingModule"
                  ],
                  _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                  _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                  _angular_common_http__WEBPACK_IMPORTED_MODULE_8__[
                    "HttpClientModule"
                  ],
                  _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__[
                    "SharedModule"
                  ],
                ],
              }
            );
        })();
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](
            AppModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
                args: [
                  {
                    declarations: [
                      _app_component__WEBPACK_IMPORTED_MODULE_5__[
                        "AppComponent"
                      ],
                      _header_header_component__WEBPACK_IMPORTED_MODULE_6__[
                        "HeaderComponent"
                      ],
                    ],
                    imports: [
                      angularfire2__WEBPACK_IMPORTED_MODULE_9__[
                        "AngularFireModule"
                      ].initializeApp({
                        apiKey: "AIzaSyA5Y-a9JJesQov7UMNrlBHFDN5wfaA9ANw",
                        authDomain: "mbj-2f9fa.firebaseapp.com",
                        projectId: "mbj-2f9fa",
                        storageBucket: "mbj-2f9fa.appspot.com",
                      }),
                      angularfire2_storage__WEBPACK_IMPORTED_MODULE_10__[
                        "AngularFireStorageModule"
                      ],
                      angularfire2_auth__WEBPACK_IMPORTED_MODULE_11__[
                        "AngularFireAuthModule"
                      ],
                      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__[
                        "BrowserModule"
                      ],
                      _app_routing_module__WEBPACK_IMPORTED_MODULE_4__[
                        "AppRoutingModule"
                      ],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_7__[
                        "FormsModule"
                      ],
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                        "RouterModule"
                      ],
                      _angular_common_http__WEBPACK_IMPORTED_MODULE_8__[
                        "HttpClientModule"
                      ],
                      _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__[
                        "SharedModule"
                      ],
                    ],
                    providers: [],
                    bootstrap: [
                      _app_component__WEBPACK_IMPORTED_MODULE_5__[
                        "AppComponent"
                      ],
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
    "./src/app/auth/auth.service.ts":
      /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

      /*! exports provided: AuthService */

      /***/
      function srcAppAuthAuthServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "AuthService", function () {
          return AuthService;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs/operators */
          "./node_modules/rxjs/_esm2015/operators/index.js"
        );
        /* harmony import */

        var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */
          "./node_modules/rxjs/_esm2015/index.js"
        );
        /* harmony import */

        var _user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./user.model */
          "./src/app/auth/user.model.ts"
        );
        /* harmony import */

        var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! src/environments/environment */
            "./src/environments/environment.ts"
          );
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! @angular/common/http */
            "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
          );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/router */
          "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
        );
        /* harmony import */

        var _shared_app_manager_service__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./../shared/app-manager.service */
            "./src/app/shared/app-manager.service.ts"
          );
        /* harmony import */

        var angularfire2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! angularfire2 */
          "./node_modules/angularfire2/index.js"
        );
        /* harmony import */

        var angularfire2__WEBPACK_IMPORTED_MODULE_8___default =
          /*#__PURE__*/ __webpack_require__.n(
            angularfire2__WEBPACK_IMPORTED_MODULE_8__
          );

        var AuthService = /*#__PURE__*/ (function () {
          function AuthService(http, router, appManagerService, firebase) {
            _classCallCheck(this, AuthService);

            this.http = http;
            this.router = router;
            this.appManagerService = appManagerService;
            this.firebase = firebase;
            this.user = new rxjs__WEBPACK_IMPORTED_MODULE_2__[
              "BehaviorSubject"
            ](null);
            this.rememberToggle = false;
            this.rememberUser = false;
          }

          _createClass(AuthService, [
            {
              key: "handleError",
              value: function handleError(errorRes) {
                console.log(errorRes);
                var errorMessage = "An unknown  error occured!";

                if (!errorRes.error.error) {
                  return Object(
                    rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"]
                  )(errorMessage);
                }

                switch (errorRes.error.error.message) {
                  case "EMAIL_EXISTS":
                    errorMessage =
                      "Эмэйл хаяг аль хэдийн бүртгэгдсэн байна. Энэ хаягаараа нэвтэрнүү.";
                    break;

                  case "INVALID_PASSWORD":
                    errorMessage =
                      "Уучлаарай, таны нууц үг буруу байна. Нууц үгээ дахин шалгана уу.";
                    break;

                  case "INVALID_EMAIL":
                    errorMessage =
                      "Уучлаарай, таны эмэйл хаяг буруу байна. Эмэйл хаягаа дахин шалгана уу.";
                    break;

                  case "EMAIL_NOT_FOUND":
                    errorMessage =
                      "Эмэйл хаяг бүртгэлд байхгүй байна. Шинэ хаяг бүртгүүлэн үү.";
                    break;
                }

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(
                  errorMessage
                );
              },
            },
            {
              key: "handleAuthentication",
              value: function handleAuthentication(
                email,
                token,
                userId,
                expiresIn
              ) {
                var expirationDate = new Date(
                  new Date().getTime() + expiresIn * 1000
                );
                var user = new _user_model__WEBPACK_IMPORTED_MODULE_3__["User"](
                  email,
                  userId,
                  token,
                  expirationDate
                );
                this.user.next(user);
                this.refreshToken(expiresIn * 1000);
                localStorage.setItem("userData", JSON.stringify(user));
              },
            },
            {
              key: "signup",
              value: function signup(userName, email, password) {
                var _this2 = this;

                this.firebase
                  .auth()
                  .signInWithEmailAndPassword(email, password);
                return this.http
                  .post(
                    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA5Y-a9JJesQov7UMNrlBHFDN5wfaA9ANw",
                    {
                      email: email,
                      password: password,
                      displayName: userName,
                      returnSecureToken: true,
                    }
                  )
                  .pipe(
                    Object(
                      rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"]
                    )(this.handleError),
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(
                      function (resData) {
                        _this2.handleAuthentication(
                          resData.email,
                          resData.idToken,
                          resData.localId,
                          +resData.expiresIn
                        );
                      }
                    )
                  );
              },
            },
            {
              key: "logout",
              value: function logout() {
                this.user.next(null);
                this.router.navigate([""]);
                localStorage.removeItem("userData");

                if (this.tokenExpirationTimer) {
                  clearTimeout(this.tokenExpirationTimer);
                  this.tokenExpirationTimer = null;
                }

                console.log("LOGOUT");
              },
            },
            {
              key: "refreshToken",
              value: function refreshToken(expirationDuration) {
                var _this3 = this;

                this.tokenExpirationTimer = setTimeout(function () {
                  // Sign in the user again in firebase
                  _this3.firebase
                    .auth()
                    .signInWithEmailAndPassword(
                      _this3.currentUserEmail,
                      _this3.currentUserPass
                    );

                  alert("signoff " + _this3.currentUserEmail);
                  alert("signoff " + _this3.currentUserPass);
                  console.log(_this3.firebase.auth().currentUser);

                  _this3.firebase
                    .auth()
                    .currentUser.getIdToken(true)
                    .then(function (idToken) {
                      console.log(idToken);
                    })
                    ["catch"](function (error) {
                      console.log(error);
                    }); // refresh token 5seconds before expiration
                }, expirationDuration - 5000);
              },
            },
            {
              key: "login",
              value: function login(email, password) {
                var _this4 = this;

                /* rememberToggle is connected to namaig sana checkbox in login section and will always be true when
          checked and false when not. rememberUser is used to store and check if user had clciked namaig sana
          checkbox before clicking login. */
                this.currentUserEmail = email;
                this.currentUserPass = password;
                this.rememberUser = this.rememberToggle;
                this.rememberToggle = false;
                localStorage.setItem(
                  "userRemember",
                  JSON.stringify(this.rememberUser)
                );
                console.log(localStorage);
                this.firebase
                  .auth()
                  .signInWithEmailAndPassword(
                    this.currentUserEmail,
                    this.currentUserPass
                  );
                return this.http
                  .post(
                    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA5Y-a9JJesQov7UMNrlBHFDN5wfaA9ANw",
                    {
                      email: email,
                      password: password,
                      returnSecureToken: true,
                    }
                  )
                  .pipe(
                    Object(
                      rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"]
                    )(this.handleError),
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(
                      function (resData) {
                        _this4.handleAuthentication(
                          resData.email,
                          resData.idToken,
                          resData.localId,
                          +resData.expiresIn
                        );
                      }
                    )
                  );
              },
            },
            {
              key: "rememberer",
              value: function rememberer() {
                this.rememberUser = JSON.parse(
                  localStorage.getItem("userRemember")
                );
              },
            },
            {
              key: "autoLogin",
              value: function autoLogin() {
                var userData = JSON.parse(localStorage.getItem("userData"));
                console.log(userData);

                if (!userData) {
                  return;
                }

                var loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_3__[
                  "User"
                ](
                  userData.email,
                  userData.id,
                  userData._token,
                  new Date(userData._tokenExpirationDate)
                );

                if (loadedUser.token) {
                  this.user.next(loadedUser);
                  var expirationDuration =
                    new Date(userData._tokenExpirationDate).getTime() -
                    new Date().getTime();
                  this.refreshToken(expirationDuration);
                }
              },
            },
            {
              key: "saveSignupData",
              value: function saveSignupData(data) {
                //Creates a unique folder using the name
                console.log(data);
                this.http
                  .post(
                    ""
                      .concat(
                        src_environments_environment__WEBPACK_IMPORTED_MODULE_4__[
                          "environment"
                        ].cors
                      )
                      .concat(
                        src_environments_environment__WEBPACK_IMPORTED_MODULE_4__[
                          "environment"
                        ].databaseURL,
                        "signupData.json"
                      ),
                    data
                  )
                  .subscribe(function (res) {
                    console.log(res);
                  });
              },
            },
            {
              key: "getUserNames",
              value: function getUserNames() {
                return this.http
                  .get(
                    ""
                      .concat(
                        src_environments_environment__WEBPACK_IMPORTED_MODULE_4__[
                          "environment"
                        ].cors
                      )
                      .concat(
                        src_environments_environment__WEBPACK_IMPORTED_MODULE_4__[
                          "environment"
                        ].databaseURL,
                        "signupData.json"
                      )
                  )
                  .pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(
                      function (res) {
                        var namesArr = [];
                        console.log(res);

                        for (var key in res) {
                          if (res.hasOwnProperty(key)) {
                            namesArr.push(res[key].userName);
                          }
                        }

                        console.log(namesArr);
                        return namesArr;
                      }
                    )
                  );
              },
            },
            {
              key: "getUserJoinDate",
              value: function getUserJoinDate(userName) {
                return this.http
                  .get(
                    ""
                      .concat(
                        src_environments_environment__WEBPACK_IMPORTED_MODULE_4__[
                          "environment"
                        ].cors
                      )
                      .concat(
                        src_environments_environment__WEBPACK_IMPORTED_MODULE_4__[
                          "environment"
                        ].databaseURL,
                        "signupData.json"
                      )
                  )
                  .pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(
                      function (res) {
                        var dataArr = [];
                        var namesArr = [];
                        console.log(res);

                        for (var key in res) {
                          if (res.hasOwnProperty(key)) {
                            dataArr.push(res[key]);
                            namesArr.push(res[key].userName);
                          }
                        }

                        var currentUserIndex = namesArr.indexOf(userName);
                        var joinDate = dataArr[currentUserIndex].joinDate;
                        console.log(dataArr);
                        console.log(joinDate);
                        return joinDate;
                      }
                    )
                  );
              },
            },
            {
              key: "setUserName",
              value: function setUserName(name) {
                this.appManagerService.userName.next(name);
                localStorage.setItem("userName", name);
              },
            },
            {
              key: "getEmailAndPass",
              value: function getEmailAndPass(userName) {
                //Getting stored email and pass to later use to signInWithEmailAndPassword in firebase
                return this.http
                  .get(
                    ""
                      .concat(
                        src_environments_environment__WEBPACK_IMPORTED_MODULE_4__[
                          "environment"
                        ].cors
                      )
                      .concat(
                        src_environments_environment__WEBPACK_IMPORTED_MODULE_4__[
                          "environment"
                        ].databaseURL,
                        "signupData.json"
                      )
                  )
                  .pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(
                      function (res) {
                        var dataArr = [];
                        var namesArr = [];
                        console.log(res);

                        for (var key in res) {
                          if (res.hasOwnProperty(key)) {
                            dataArr.push(res[key]);
                            namesArr.push(res[key].userName);
                          }
                        }

                        var currentUserIndex = namesArr.indexOf(userName);
                        var emailAndPassword = {
                          email: dataArr[currentUserIndex].email,
                          password: dataArr[currentUserIndex].password,
                        };
                        return emailAndPassword;
                      }
                    )
                  );
              },
            },
          ]);

          return AuthService;
        })();

        AuthService.ɵfac = function AuthService_Factory(t) {
          return new (t || AuthService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _shared_app_manager_service__WEBPACK_IMPORTED_MODULE_7__[
                "AppManagerService"
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              angularfire2__WEBPACK_IMPORTED_MODULE_8__["FirebaseApp"]
            )
          );
        };

        AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineInjectable"
        ]({
          token: AuthService,
          factory: AuthService.ɵfac,
          providedIn: "root",
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            AuthService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                args: [
                  {
                    providedIn: "root",
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__[
                    "HttpClient"
                  ],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
                },
                {
                  type: _shared_app_manager_service__WEBPACK_IMPORTED_MODULE_7__[
                    "AppManagerService"
                  ],
                },
                {
                  type: angularfire2__WEBPACK_IMPORTED_MODULE_8__[
                    "FirebaseApp"
                  ],
                },
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/auth/user.model.ts":
      /*!************************************!*\
    !*** ./src/app/auth/user.model.ts ***!
    \************************************/

      /*! exports provided: User */

      /***/
      function srcAppAuthUserModelTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "User", function () {
          return User;
        });

        var User = /*#__PURE__*/ (function () {
          function User(email, id, _token, _tokenExpirationDate) {
            _classCallCheck(this, User);

            this.email = email;
            this.id = id;
            this._token = _token;
            this._tokenExpirationDate = _tokenExpirationDate;
          }

          _createClass(User, [
            {
              key: "token",
              get: function get() {
                if (
                  !this._tokenExpirationDate ||
                  new Date() > this._tokenExpirationDate
                ) {
                  return null;
                }

                return this._token;
              },
            },
          ]);

          return User;
        })();
        /***/
      },

    /***/
    "./src/app/footer/footer.component.ts":
      /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

      /*! exports provided: FooterComponent */

      /***/
      function srcAppFooterFooterComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "FooterComponent",
          function () {
            return FooterComponent;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );

        var FooterComponent = /*#__PURE__*/ (function () {
          function FooterComponent() {
            _classCallCheck(this, FooterComponent);
          }

          _createClass(FooterComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {},
            },
          ]);

          return FooterComponent;
        })();

        FooterComponent.ɵfac = function FooterComponent_Factory(t) {
          return new (t || FooterComponent)();
        };

        FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: FooterComponent,
          selectors: [["app-footer"]],
          decls: 52,
          vars: 0,
          consts: [
            [1, "footer-container"],
            [1, "footer", "max-width-container"],
            [1, "footer__left"],
            [1, "footer__links"],
            [1, "footer__text", "footer__link"],
            [1, "footer__right"],
            [1, "footer__socialLinks"],
            ["href", "http://facebook.com", "target", "_blank"],
            [
              "src",
              "assets/img/company-logos/facebook.svg",
              1,
              "footer__social",
            ],
            ["href", "http://instagram.com", "target", "_blank"],
            [
              "src",
              "assets/img/company-logos/instagram.svg",
              1,
              "footer__social",
            ],
            ["href", "http://twitter.com", "target", "_blank"],
            [
              "src",
              "assets/img/company-logos/twitter.svg",
              1,
              "footer__social",
            ],
            ["href", "http://youtube.com", "target", "_blank"],
            [
              "src",
              "assets/img/company-logos/youtube.svg",
              1,
              "footer__social",
              "footer__social__youtube",
            ],
            [1, "footer__contact"],
            [1, "footer__contact__address"],
            [1, "footer__text", "footer__text--grey"],
            [1, "footer__contact__reach"],
          ],
          template: function FooterComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "footer",
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                3,
                "ul",
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                4,
                "li",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                5,
                "p"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                6,
                "\u0410\u043D\u0433\u0438\u043B\u0430\u043B"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                7,
                "a",
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                8,
                "\u0413\u0440\u0430\u0444\u0438\u043A \u0414\u0438\u0437\u0430\u0439\u043D"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                9,
                "a",
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                10,
                "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u041C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                11,
                "a",
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                12,
                "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C & \u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                13,
                "a",
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                14,
                "\u0414\u0443\u0443 & \u0410\u044F"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                15,
                "a",
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                16,
                "\u0412\u0438\u0434\u0438\u043E & \u0414\u04AF\u0440\u0441 \u0410\u043C\u0438\u043B\u0443\u0443\u043B\u0430\u043B"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                17,
                "a",
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                18,
                "\u0411\u0438\u0447\u0432\u044D\u0440 & \u041E\u0440\u0447\u0443\u0443\u043B\u0430\u0433"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                19,
                "li",
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                20,
                "p"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                21,
                "\u0422\u0443\u0441\u043B\u0430\u043B\u0446\u0430\u0430"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                22,
                "a",
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                23,
                "\u041C\u0411\u0416-\u0434\u044D\u044D\u0440 \u0437\u0430\u0440\u0430\u0445"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                24,
                "a",
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                25,
                "\u041C\u0411\u0416-\u044D\u044D\u0441 \u0445\u0443\u0434\u0430\u043B\u0434\u0430\u0445"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                26,
                "ul",
                5
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                27,
                "li"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                28,
                "p"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                29,
                "\u0421\u043E\u0448\u0438\u0430\u043B \u043C\u0435\u0434\u0438\u0430"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                30,
                "div",
                6
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                31,
                "a",
                7
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                32,
                "img",
                8
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                33,
                "a",
                9
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                34,
                "img",
                10
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                35,
                "a",
                11
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                36,
                "img",
                12
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                37,
                "a",
                13
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                38,
                "img",
                14
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                39,
                "div",
                15
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                40,
                "p"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                41,
                "\u0425\u043E\u043B\u0431\u043E\u043E \u0431\u0430\u0440\u0438\u0445"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                42,
                "div",
                16
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                43,
                "p",
                17
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                44,
                "\u201C\u041C\u0411\u0416\u201D \u0425\u0425\u041A \u0442\u04E9\u0432 \u043E\u0444\u0444\u0438\u0441"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                45,
                "p",
                17
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                46,
                "\u041C\u043E\u043D\u0433\u043E\u043B \u0443\u043B\u0441, \u0423\u043B\u0430\u0430\u043D\u0431\u0430\u0430\u0442\u0430\u0440 - 16420, \u0421\u04AF\u0445\u0431\u0430\u0430\u0442\u0430\u0440 \u0434\u04AF\u04AF\u0440\u044D\u0433, \u0427\u0438\u043D\u0433\u0438\u0441\u0438\u0439\u043D \u04E9\u0440\u0433\u04E9\u043D \u0447\u04E9\u043B\u04E9\u04E9 - 10, \u041C\u0411 \u0446\u0430\u043C\u0445\u0430\u0433"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                47,
                "div",
                18
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                48,
                "p",
                17
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                49,
                "\u0423\u0442\u0430\u0441: +(976) - (11) - 999999"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                50,
                "p",
                17
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                51,
                "moondiidev@gmail.com"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [
            ".max-width-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 32px 32px 64px;\n}\n\n.boxWrapper[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0 0 6px 1px rgba(48, 48, 48, 0.2);\n  border: 1px solid #bebebe;\n  padding: 4rem;\n}\n\n.oneByOneSplit__left[_ngcontent-%COMP%] {\n  width: 35%;\n  margin-right: 3%;\n  display: flex;\n  flex-direction: column;\n}\n\n.oneByOneSplit__right[_ngcontent-%COMP%] {\n  width: 62%;\n}\n\n.oneByOneSplit--smLeft__left[_ngcontent-%COMP%] {\n  width: 30%;\n  margin-right: 3%;\n  display: flex;\n  flex-direction: column;\n}\n\n.oneByOneSplit--smLeft__right[_ngcontent-%COMP%] {\n  width: 67%;\n}\n\n.flex-verticalCentered[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.flex-verticalStart[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n}\n\n.flex-spaceBetween[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.margin-bot-xs[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.margin-bot-sm[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.margin-bot-md[_ngcontent-%COMP%] {\n  margin-bottom: 4rem;\n}\n\n.margin-bot-lg[_ngcontent-%COMP%] {\n  margin-bottom: 5rem;\n}\n\n.margin-top-xxs[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.margin-top-xs[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.margin-top-sm[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.margin-top-md[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n\n.margin-left-xs[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.margin-right-sm[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n}\n\n.padding-bot-sm[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n\n.marginVertical-sm[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n}\n\n.marginVertical-md[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n\n.horizontalLine[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 1.5rem 0;\n}\n\n.horizontalLine--sm[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n\n.horizontalLine--lg[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n\n.horizontalLine--xl[_ngcontent-%COMP%] {\n  margin: 2.5rem 0;\n}\n\n.horizontalLine--xxl[_ngcontent-%COMP%] {\n  margin: 3rem 0;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.footer-container[_ngcontent-%COMP%] {\n  background-color: #20232b;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  font-size: 1.6rem;\n}\n\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #eeeeee;\n}\n\n.footer__left[_ngcontent-%COMP%], .footer__right[_ngcontent-%COMP%] {\n  display: flex;\n  width: 50%;\n}\n\n.footer__left[_ngcontent-%COMP%] {\n  line-height: 6rem;\n  justify-content: center;\n}\n\n.footer__right[_ngcontent-%COMP%] {\n  flex-direction: column;\n  line-height: 4rem;\n}\n\n.footer__link[_ngcontent-%COMP%] {\n  color: #778DA9;\n  transition: 0.2s;\n}\n\n.footer__link[_ngcontent-%COMP%]:hover {\n  color: #eeeeee;\n}\n\n.footer__text[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n\n.footer__text--grey[_ngcontent-%COMP%] {\n  color: #bdbdbd !important;\n}\n\n.footer__links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-right: 4rem;\n}\n\n.footer__link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.footer__socialLinks[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 2rem;\n}\n\n.footer__social[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n  border-radius: 10%;\n  margin-right: 6rem;\n  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);\n  transition: 0.2s;\n}\n\n.footer__social[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.7);\n}\n\n.footer__social__youtube[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.footer__contact[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n\n.footer__contact__address[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcbW9vbmRcXE9uZURyaXZlXFxEZXNrdG9wXFxNQkovc3JjXFxhcHBcXHNjc3NcXHV0aWxpdGllcy5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvQzpcXFVzZXJzXFxtb29uZFxcT25lRHJpdmVcXERlc2t0b3BcXE1CSi9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ0RGOztBRElBO0VBQ0UsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQ0RGOztBREtFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRko7O0FESUU7RUFDRSxVQUFBO0FDRko7O0FETUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNISjs7QURLRTtFQUNFLFVBQUE7QUNISjs7QURRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDTEY7O0FET0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNKRjs7QURTQTtFQUNFLG1CQUFBO0FDTkY7O0FEU0E7RUFDRSxtQkFBQTtBQ05GOztBRFNBO0VBQ0UsbUJBQUE7QUNORjs7QURTQTtFQUNFLG1CQUFBO0FDTkY7O0FEU0E7RUFDRSxlQUFBO0FDTkY7O0FEU0E7RUFDRSxnQkFBQTtBQ05GOztBRFNBO0VBQ0UsZ0JBQUE7QUNORjs7QURTQTtFQUNFLGdCQUFBO0FDTkY7O0FEVUE7RUFDRSxpQkFBQTtBQ1BGOztBRFVBO0VBQ0Usa0JBQUE7QUNQRjs7QURVQTtFQUNFLG9CQUFBO0FDUEY7O0FEVUE7RUFDRSxnQkFBQTtBQ1BGOztBRFVBO0VBQ0UsY0FBQTtBQ1BGOztBRFlBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDVEY7O0FEVUU7RUFDRSxjQUFBO0FDUko7O0FEVUU7RUFDRSxjQUFBO0FDUko7O0FEVUU7RUFDRSxnQkFBQTtBQ1JKOztBRFVFO0VBQ0UsY0FBQTtBQ1JKOztBRGNBO0VBQ0UsY0FBQTtBQ1hGOztBQ2xIQTtFQUNFLHlCQUFBO0FEcUhGOztBQ2xIQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBRHFIRjs7QUNuSEU7RUFDRSxjQWRzQjtBRG1JMUI7O0FDbEhFO0VBRUUsYUFBQTtFQUNBLFVBQUE7QURtSEo7O0FDaEhFO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtBRGtISjs7QUMvR0U7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FEaUhKOztBQzlHRTtFQUNFLGNBakN3QjtFQWtDeEIsZ0JBQUE7QURnSEo7O0FDOUdJO0VBQ0UsY0F0Q29CO0FEc0oxQjs7QUM1R0U7RUFDRSxpQkFBQTtBRDhHSjs7QUM3R0k7RUFDRSx5QkFBQTtBRCtHTjs7QUMzR0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBRDZHSjs7QUMxR0U7RUFDRSxlQUFBO0FENEdKOztBQ3pHRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBRDJHSjs7QUN4R0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0FEMEdKOztBQ3hHSTtFQUNFLHNCQUFBO0VBQ0EsNENBQUE7QUQwR047O0FDdkdJO0VBQ0Usa0JBQUE7QUR5R047O0FDckdFO0VBQ0UsZ0JBQUE7QUR1R0o7O0FDckdJO0VBQ0UsZ0JBQUE7QUR1R04iLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi92YXJpYWJsZXMuc2Nzcyc7XG5cbi5tYXgtd2lkdGgtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAzMnB4IDMycHggNjRweDtcbn1cblxuLmJveFdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDZweCAxcHggcmdiYSg0OCwgNDgsIDQ4LCAwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkwLCAxOTAsIDE5MCk7XG4gIHBhZGRpbmc6IDRyZW07XG59XG5cbi5vbmVCeU9uZVNwbGl0e1xuICAmX19sZWZ0e1xuICAgIHdpZHRoOiAzNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgJl9fcmlnaHR7XG4gICAgd2lkdGg6IDYyJTtcbiAgfVxufVxuLm9uZUJ5T25lU3BsaXQtLXNtTGVmdHtcbiAgJl9fbGVmdHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbi1yaWdodDogMyU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gICZfX3JpZ2h0e1xuICAgIHdpZHRoOiA2NyU7XG4gIH1cbn1cbi8vICoqKioqKioqKioqKiBGTEVYICoqKioqKioqKioqKioqXG5cbi5mbGV4LXZlcnRpY2FsQ2VudGVyZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmxleC12ZXJ0aWNhbFN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uZmxleC1zcGFjZUJldHdlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi8vICoqKioqKioqKioqKiBNQVJHSU5TICoqKioqKioqKioqKioqXG5cbi5tYXJnaW4tYm90LXhzIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLm1hcmdpbi1ib3Qtc20ge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4ubWFyZ2luLWJvdC1tZCB7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG5cbi5tYXJnaW4tYm90LWxnIHtcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbn1cblxuLm1hcmdpbi10b3AteHhzIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubWFyZ2luLXRvcC14cyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5tYXJnaW4tdG9wLXNtIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLm1hcmdpbi10b3AtbWQge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xufVxuXG5cbi5tYXJnaW4tbGVmdC14cyB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ubWFyZ2luLXJpZ2h0LXNtIHtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xufVxuXG4ucGFkZGluZy1ib3Qtc20ge1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cblxuLm1hcmdpblZlcnRpY2FsLXNtIHtcbiAgbWFyZ2luOiAxLjVyZW0gMDtcbn1cblxuLm1hcmdpblZlcnRpY2FsLW1kIHtcbiAgbWFyZ2luOiAycmVtIDA7XG59XG5cbi8vICoqKioqKioqKioqKiBIT1JJWk9OVEFMIExJTkUgKioqKioqKioqKipcblxuLmhvcml6b250YWxMaW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMS41cmVtIDA7XG4gICYtLXNte1xuICAgIG1hcmdpbjogMXJlbSAwO1xuICB9XG4gICYtLWxne1xuICAgIG1hcmdpbjogMnJlbSAwO1xuICB9XG4gICYtLXhse1xuICAgIG1hcmdpbjogMi41cmVtIDA7XG4gIH1cbiAgJi0teHhse1xuICAgIG1hcmdpbjogM3JlbSAwO1xuICB9XG5cbn1cblxuXG4uYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiIsIi5tYXgtd2lkdGgtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAzMnB4IDMycHggNjRweDtcbn1cblxuLmJveFdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDZweCAxcHggcmdiYSg0OCwgNDgsIDQ4LCAwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmViZWJlO1xuICBwYWRkaW5nOiA0cmVtO1xufVxuXG4ub25lQnlPbmVTcGxpdF9fbGVmdCB7XG4gIHdpZHRoOiAzNSU7XG4gIG1hcmdpbi1yaWdodDogMyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ub25lQnlPbmVTcGxpdF9fcmlnaHQge1xuICB3aWR0aDogNjIlO1xufVxuXG4ub25lQnlPbmVTcGxpdC0tc21MZWZ0X19sZWZ0IHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5vbmVCeU9uZVNwbGl0LS1zbUxlZnRfX3JpZ2h0IHtcbiAgd2lkdGg6IDY3JTtcbn1cblxuLmZsZXgtdmVydGljYWxDZW50ZXJlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mbGV4LXZlcnRpY2FsU3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmZsZXgtc3BhY2VCZXR3ZWVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubWFyZ2luLWJvdC14cyB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5tYXJnaW4tYm90LXNtIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLm1hcmdpbi1ib3QtbWQge1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG4ubWFyZ2luLWJvdC1sZyB7XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG5cbi5tYXJnaW4tdG9wLXh4cyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm1hcmdpbi10b3AteHMge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4ubWFyZ2luLXRvcC1zbSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5tYXJnaW4tdG9wLW1kIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbn1cblxuLm1hcmdpbi1sZWZ0LXhzIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5tYXJnaW4tcmlnaHQtc20ge1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG5cbi5wYWRkaW5nLWJvdC1zbSB7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4ubWFyZ2luVmVydGljYWwtc20ge1xuICBtYXJnaW46IDEuNXJlbSAwO1xufVxuXG4ubWFyZ2luVmVydGljYWwtbWQge1xuICBtYXJnaW46IDJyZW0gMDtcbn1cblxuLmhvcml6b250YWxMaW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMS41cmVtIDA7XG59XG4uaG9yaXpvbnRhbExpbmUtLXNtIHtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG4uaG9yaXpvbnRhbExpbmUtLWxnIHtcbiAgbWFyZ2luOiAycmVtIDA7XG59XG4uaG9yaXpvbnRhbExpbmUtLXhsIHtcbiAgbWFyZ2luOiAyLjVyZW0gMDtcbn1cbi5ob3Jpem9udGFsTGluZS0teHhsIHtcbiAgbWFyZ2luOiAzcmVtIDA7XG59XG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9vdGVyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIzMmI7XG59XG5cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cbi5mb290ZXIgcCB7XG4gIGNvbG9yOiAjZWVlZWVlO1xufVxuLmZvb3Rlcl9fbGVmdCwgLmZvb3Rlcl9fcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTAlO1xufVxuLmZvb3Rlcl9fbGVmdCB7XG4gIGxpbmUtaGVpZ2h0OiA2cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mb290ZXJfX3JpZ2h0IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IDRyZW07XG59XG4uZm9vdGVyX19saW5rIHtcbiAgY29sb3I6ICM3NzhEQTk7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4uZm9vdGVyX19saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNlZWVlZWU7XG59XG4uZm9vdGVyX190ZXh0IHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG4uZm9vdGVyX190ZXh0LS1ncmV5IHtcbiAgY29sb3I6ICNiZGJkYmQgIWltcG9ydGFudDtcbn1cbi5mb290ZXJfX2xpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xufVxuLmZvb3Rlcl9fbGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb290ZXJfX3NvY2lhbExpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbi5mb290ZXJfX3NvY2lhbCB7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiA2cmVtO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmZvb3Rlcl9fc29jaWFsOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4uZm9vdGVyX19zb2NpYWxfX3lvdXR1YmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZm9vdGVyX19jb250YWN0IHtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbn1cbi5mb290ZXJfX2NvbnRhY3RfX2FkZHJlc3Mge1xuICBtYXJnaW46IDEuNXJlbSAwO1xufSIsIkBpbXBvcnQgJy4uL3Njc3MvdXRpbGl0aWVzLnNjc3MnO1xuXG4kZm9udC1mb290ZXJDb2xvclByaW1hcnk6ICNlZWVlZWU7XG4kZm9udC1mb290ZXJDb2xvclNlY29uZGFyeTogIzc3OERBOTtcblxuLmZvb3Rlci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDM1LCA0Myk7XG59XG5cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDEuNnJlbTtcblxuICBwIHtcbiAgICBjb2xvcjogJGZvbnQtZm9vdGVyQ29sb3JQcmltYXJ5O1xuICB9XG5cbiAgJl9fbGVmdCxcbiAgJl9fcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuXG4gICZfX2xlZnQge1xuICAgIGxpbmUtaGVpZ2h0OiA2cmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgJl9fcmlnaHQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gIH1cblxuICAmX19saW5rIHtcbiAgICBjb2xvcjogJGZvbnQtZm9vdGVyQ29sb3JTZWNvbmRhcnk7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICRmb250LWZvb3RlckNvbG9yUHJpbWFyeTtcbiAgICB9XG4gIH1cblxuICAmX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAmLS1ncmV5e1xuICAgICAgY29sb3I6IHJnYigxODksIDE4OSwgMTg5KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gICZfX2xpbmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xuICB9XG5cbiAgJl9fbGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgJl9fc29jaWFsTGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxuXG4gICZfX3NvY2lhbCB7XG4gICAgd2lkdGg6IDVyZW07XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDZyZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgfVxuXG4gICAgJl9feW91dHViZSB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG5cbiAgJl9fY29udGFjdCB7XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcblxuICAgICZfX2FkZHJlc3Mge1xuICAgICAgbWFyZ2luOiAxLjVyZW0gMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */",
          ],
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            FooterComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-footer",
                    templateUrl: "./footer.component.html",
                    styleUrls: ["./footer.component.scss"],
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
    "./src/app/header/header.component.ts":
      /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

      /*! exports provided: HeaderComponent */

      /***/
      function srcAppHeaderHeaderComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "HeaderComponent",
          function () {
            return HeaderComponent;
          }
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/router */
          "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs/operators */
          "./node_modules/rxjs/_esm2015/operators/index.js"
        );
        /* harmony import */

        var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! ../auth/auth.service */
            "./src/app/auth/auth.service.ts"
          );
        /* harmony import */

        var _shared_app_manager_service__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./../shared/app-manager.service */
            "./src/app/shared/app-manager.service.ts"
          );
        /* harmony import */

        var _seller_set_up_seller_set_up_service__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./../seller-set-up/seller-set-up.service */
            "./src/app/seller-set-up/seller-set-up.service.ts"
          );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/common */
          "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/forms */
          "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"
        );
        /* harmony import */

        var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ../shared/dropdown.directive */
            "./src/app/shared/dropdown.directive.ts"
          );

        function HeaderComponent_div_1_Template(rf, ctx) {
          if (rf & 1) {
            var _r263 =
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "div"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              1,
              "nav",
              3
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              2,
              "div",
              4
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              3,
              "a",
              5
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
              4,
              "img",
              6
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              5,
              "form",
              7,
              8
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              7,
              "div",
              9
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
              8,
              "img",
              10
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
              9,
              "input",
              11,
              12
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              11,
              "button",
              13
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"](
              "click",
              function HeaderComponent_div_1_Template_button_click_11_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](
                  _r263
                );

                var ctx_r262 =
                  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

                return ctx_r262.onClick();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              12,
              "\u0425\u0430\u0439\u0445"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              13,
              "div",
              14
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              14,
              "a",
              15
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              15,
              "\u041C\u0435\u0441\u0441\u0435\u0436"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              16,
              "a",
              15
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              17,
              "\u0425\u0430\u0434\u0433\u0430\u043B\u0441\u0430\u043D \u0413\u0438\u0433-\u04AF\u04AF\u0434"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              18,
              "a",
              15
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              19,
              "\u0417\u0430\u0445\u0438\u0430\u043B\u0433\u0443\u0443\u0434"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              20,
              "a",
              16
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"](
              "click",
              function HeaderComponent_div_1_Template_a_click_20_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](
                  _r263
                );

                var ctx_r264 =
                  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

                return ctx_r264.switchLogInMode();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              22,
              "div"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              23,
              "button",
              17
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"](
              "click",
              function HeaderComponent_div_1_Template_button_click_23_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](
                  _r263
                );

                var _r261 =
                  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);

                return _r261.click();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
              24,
              "img",
              18
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
              25,
              "div",
              19
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              26,
              "div",
              20,
              21
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              28,
              "a",
              22
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              29,
              "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              30,
              "a",
              23
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              31,
              "\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              33,
              "div",
              24
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              34,
              "a",
              25
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              35,
              "\u0428\u0430\u0433\u043D\u0430\u043B"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
              36,
              "img",
              26
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              37,
              "div",
              27
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"](
              "click",
              function HeaderComponent_div_1_Template_div_click_37_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](
                  _r263
                );

                var ctx_r266 =
                  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

                return ctx_r266.logout();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              38,
              "a",
              25
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              39,
              "\u0413\u0430\u0440\u0430\u0445"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
              40,
              "img",
              28
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r259 =
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

            var ctx_r255 =
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
              "disabled",
              !_r259.valid
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](
              "",
              ctx_r255.nextModeName,
              "\u0434 \u0428\u0438\u043B\u0436\u0438\u0445"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
              "src",
              ctx_r255.profileImgUrl,
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              "ɵɵpropertyInterpolate1"
            ]("routerLink", "/user-profile/", ctx_r255.userName, "");
          }
        }

        function HeaderComponent_div_2_Template(rf, ctx) {
          if (rf & 1) {
            var _r269 =
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "div"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              1,
              "nav",
              3
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              2,
              "div",
              4
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              3,
              "a",
              29
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
              4,
              "img",
              6
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              5,
              "a",
              15
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              6,
              "\u0425\u044F\u043D\u0430\u043B\u0442\u044B\u043D C\u0430\u043C\u0431\u0430\u0440"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              7,
              "a",
              15
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              8,
              "\u0413\u0438\u0433-\u04AF\u04AF\u0434"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              9,
              "a",
              15
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              10,
              "\u0417\u0430\u0445\u0438\u0430\u043B\u0433\u0443\u0443\u0434"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              11,
              "a",
              15
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              12,
              "\u041E\u0440\u043B\u043E\u0433o"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              13,
              "a",
              15
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              14,
              "\u041C\u0435\u0441\u0441\u0435\u0436"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              15,
              "div",
              14
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              16,
              "a",
              16
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"](
              "click",
              function HeaderComponent_div_2_Template_a_click_16_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](
                  _r269
                );

                var ctx_r268 =
                  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

                return ctx_r268.switchLogInMode();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              18,
              "div"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              19,
              "button",
              17
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"](
              "click",
              function HeaderComponent_div_2_Template_button_click_19_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](
                  _r269
                );

                var _r267 =
                  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);

                return _r267.click();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
              20,
              "img",
              18
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
              21,
              "div",
              19
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              22,
              "div",
              20,
              21
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              24,
              "a",
              22
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              25,
              "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              26,
              "a",
              23
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              27,
              "\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              29,
              "div",
              24
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              30,
              "a",
              25
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              31,
              "\u0428\u0430\u0433\u043D\u0430\u043B"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
              32,
              "img",
              26
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              33,
              "div",
              27
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"](
              "click",
              function HeaderComponent_div_2_Template_div_click_33_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](
                  _r269
                );

                var ctx_r271 =
                  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

                return ctx_r271.logout();
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              34,
              "a",
              25
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              35,
              "\u0413\u0430\u0440\u0430\u0445"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
              36,
              "img",
              28
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var ctx_r256 =
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              "ɵɵpropertyInterpolate1"
            ]("routerLink", "/seller-board/", ctx_r256.userName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](
              "",
              ctx_r256.nextModeName,
              "\u0434 \u0428\u0438\u043B\u0436\u0438\u0445"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
              "src",
              ctx_r256.profileImgUrl,
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              "ɵɵpropertyInterpolate1"
            ]("routerLink", "/user-profile/", ctx_r256.userName, "");
          }
        }

        function HeaderComponent_div_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "div"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              1,
              "nav",
              3
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              2,
              "div",
              4
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              3,
              "a",
              5
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
              4,
              "img",
              6
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        }

        function HeaderComponent_div_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              0,
              "div"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              1,
              "nav",
              3
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              2,
              "div",
              4
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              3,
              "a",
              5
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
              4,
              "img",
              6
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              5,
              "div",
              14
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              6,
              "a",
              30
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              7,
              "\u041D\u044D\u0432\u0442\u0440\u044D\u0445"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](
              8,
              "div",
              31
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
              9,
              "a",
              32
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](
              10,
              "\u0411\u04AF\u0440\u0442\u0433\u04AF\u04AF\u043B\u044D\u0445"
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        }

        var HeaderComponent = /*#__PURE__*/ (function () {
          function HeaderComponent(
            authService,
            appManagerService,
            sellerService,
            router
          ) {
            _classCallCheck(this, HeaderComponent);

            this.authService = authService;
            this.appManagerService = appManagerService;
            this.sellerService = sellerService;
            this.router = router;
            this.currentState = "main";
            this.isAuthenticated = false;
            this.isSellerMode = false;
            this.profileImgUrl = "assets/img/profilePlaceholder.svg";
            this.nextModeName = "Худалдагчийн Горим";
            this.hasSellerAccount = false;
          }

          _createClass(HeaderComponent, [
            {
              key: "ngOnInit",
              value: function ngOnInit() {
                var _this5 = this;

                //If user exists, authenticated
                //I listened to only changes below so, current state needs to be set initially like this
                this.userSub = this.authService.user.subscribe(function (user) {
                  _this5.isAuthenticated = !!user;

                  if (_this5.isAuthenticated) {
                    _this5.appManagerService.headerStateSub.next(
                      _this5.appManagerService.headerStates.buyerMain
                    );

                    _this5.userNameSub =
                      _this5.appManagerService.userName.subscribe(function (
                        name
                      ) {
                        _this5.userName = name;
                      });
                  } else {
                    _this5.appManagerService.headerStateSub.next(
                      _this5.appManagerService.headerStates.main
                    );
                  }
                }); //Whenever url changes, check it and change the headerState

                this.router.events
                  .pipe(
                    Object(
                      rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"]
                    )(function (event) {
                      return (
                        event instanceof
                        _angular_router__WEBPACK_IMPORTED_MODULE_0__[
                          "NavigationEnd"
                        ]
                      );
                    })
                  )
                  .subscribe(function () {
                    var url = _this5.router.url;
                    _this5.profileImgSub = _this5.sellerService
                      .getProfileImg()
                      .subscribe(function (url) {
                        if (url != null || url != undefined) {
                          _this5.profileImgUrl = url;
                        }
                      });

                    if (url === "/main") {
                      if (_this5.isAuthenticated) {
                        _this5.appManagerService.headerStateSub.next(
                          _this5.appManagerService.headerStates.buyerMain
                        );
                      } else {
                        _this5.appManagerService.headerStateSub.next(
                          _this5.appManagerService.headerStates.main
                        );
                      }
                    } else if (url.includes("/seller-set-up")) {
                      _this5.appManagerService.headerStateSub.next(
                        _this5.appManagerService.headerStates.onlyLogo
                      );
                    } else if (_this5.hasSellerAccount) {
                      if (
                        url.includes(
                          "/".concat(_this5.appManagerService.userName)
                        )
                      )
                        _this5.appManagerService.headerStateSub.next(
                          _this5.appManagerService.headerStates.sellerMain
                        );
                    }
                  }); //Based on the header state, change the header DOM

                this.headerStateSub =
                  this.appManagerService.headerStateSub.subscribe(function (
                    state
                  ) {
                    if (state != null) {
                      _this5.currentState = state;
                    }
                  }); //See if user has created seller account

                this.hasSellerAccountSub = this.appManagerService
                  .fetchHasSellerAccount()
                  .subscribe(function (hasOrNot) {
                    alert(hasOrNot[0]);
                    _this5.hasSellerAccount = hasOrNot[0];
                  });
              },
            },
            {
              key: "logout",
              value: function logout() {
                this.authService.logout();
              },
            },
            {
              key: "switchLogInMode",
              value: function switchLogInMode() {
                if (!this.hasSellerAccount) {
                  this.router.navigate(["/seller-set-up/personal"]);
                } else {
                  if (this.isSellerMode) {
                    this.buyerModeActive();
                  } else {
                    this.sellerModeActive();
                  }
                }
              },
            },
            {
              key: "buyerModeActive",
              value: function buyerModeActive() {
                this.isSellerMode = false;
                this.appManagerService.headerStateSub.next(
                  this.appManagerService.headerStates.buyerMain
                );
                this.nextModeName = "Худалдагчийн Горим";
                this.router.navigate(["/"]);
              },
            },
            {
              key: "sellerModeActive",
              value: function sellerModeActive() {
                this.isSellerMode = true;
                this.appManagerService.headerStateSub.next(
                  this.appManagerService.headerStates.sellerMain
                );
                this.nextModeName = "Худалдан Авагчийн Горим";
                this.router.navigate(["/seller-board/".concat(this.userName)]);
              },
            },
            {
              key: "onClick",
              value: function onClick() {
                alert("bruh");
              },
            },
            {
              key: "ngOnDestroy",
              value: function ngOnDestroy() {
                this.userSub.unsubscribe();
                this.headerStateSub.unsubscribe();
                this.profileImgSub.unsubscribe();
                this.userNameSub.unsubscribe();
                this.logInStateSub.unsubscribe();
              },
            },
          ]);

          return HeaderComponent;
        })();

        HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
          return new (t || HeaderComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _shared_app_manager_service__WEBPACK_IMPORTED_MODULE_4__[
                "AppManagerService"
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _seller_set_up_seller_set_up_service__WEBPACK_IMPORTED_MODULE_5__[
                "SellerSetUpService"
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]
            )
          );
        };

        HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineComponent"
        ]({
          type: HeaderComponent,
          selectors: [["app-header"]],
          decls: 5,
          vars: 4,
          consts: [
            [3, "ngSwitch"],
            [4, "ngSwitchCase"],
            [4, "ngSwitchDefault"],
            [1, "header-container"],
            [1, "header", "header__left"],
            ["routerLink", ""],
            ["src", "assets/img/MBJ.svg", 1, "header__logo"],
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
            [1, "header", "header__right"],
            [1, "nav-text"],
            [1, "nav-specialText", 3, "click"],
            ["type", "button", 1, "profileBtn", 3, "click"],
            ["alt", "", 1, "profileBtn__img", 3, "src"],
            [1, "profileBtn__downArrow"],
            ["appDropDown", "", 1, "profileOptions"],
            ["profileDropdown", ""],
            [1, "profileOption", 3, "routerLink"],
            [1, "profileOption"],
            [
              1,
              "profileOption",
              "profileOption__flexed",
              "profileOption__green",
            ],
            [1, "whiteText"],
            [
              "src",
              "assets/img/referal.svg",
              "alt",
              "",
              1,
              "profileOption__img",
            ],
            [
              1,
              "profileOption",
              "profileOption__flexed",
              "profileOption__blue",
              3,
              "click",
            ],
            [
              "src",
              "assets/img/logout.svg",
              "alt",
              "",
              1,
              "profileOption__img",
            ],
            [3, "routerLink"],
            ["routerLink", "/auth/logIn", 1, "nav-text"],
            [1, "verticalLine"],
            ["routerLink", "/auth/signUp", 1, "nav-text"],
          ],
          template: function HeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](
                0,
                "div",
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                1,
                HeaderComponent_div_1_Template,
                41,
                4,
                "div",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                2,
                HeaderComponent_div_2_Template,
                37,
                4,
                "div",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                3,
                HeaderComponent_div_3_Template,
                5,
                0,
                "div",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](
                4,
                HeaderComponent_div_4_Template,
                11,
                0,
                "div",
                2
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                "ngSwitch",
                ctx.currentState
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                "ngSwitchCase",
                "buyerMain"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                "ngSwitchCase",
                "sellerMain"
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"](
                "ngSwitchCase",
                "onlyLogo"
              );
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchDefault"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__[
              "ɵangular_packages_forms_forms_y"
            ],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"],
            _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_8__[
              "DropdownDirective"
            ],
          ],
          styles: [
            '.heading-primary[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n.heading-secondary[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n\n.heading-tertiary[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n.heading-fourth[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n\n.emphasis-link[_ngcontent-%COMP%] {\n  color: #1e87ff;\n  cursor: pointer;\n}\n\n.emphasis-link--2[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #126781;\n  transition: 0.2s;\n}\n\n.emphasis-link--2[_ngcontent-%COMP%]:hover {\n  color: #1297c0;\n}\n\n.whiteText[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.greyText[_ngcontent-%COMP%] {\n  color: #8F999A !important;\n}\n\n.paragraph[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #62646a;\n}\n\n.paragraph-md[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.paragraph-lg[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n\n.paragraph-xl[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n\n.noWrapText[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.labelText[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: #969696;\n}\n\n.labelText--2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: #838383;\n}\n\n.nav-text[_ngcontent-%COMP%], .nav-specialText[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 0 2rem;\n  font-size: 1.4rem;\n  white-space: nowrap;\n  transition: 0.2s;\n  font-weight: 500;\n}\n\n.nav-text[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n  border-bottom: 2px solid rgba(0, 0, 0, 0);\n  color: black;\n}\n\n.nav-text[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid black;\n}\n\n.nav-specialText[_ngcontent-%COMP%] {\n  border-right: 2px solid #1AAB8A;\n  border-left: 2px solid #1AAB8A;\n  color: black;\n  border-radius: 2px;\n  position: relative;\n  margin-bottom: 1rem;\n  padding: 1rem 2rem;\n  transition: 0.8s ease all;\n  outline: none;\n}\n\n.nav-specialText[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #169174;\n}\n\n.nav-specialText[_ngcontent-%COMP%]:before, .nav-specialText[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 2px;\n  width: 0;\n  background: #1AAB8A;\n  transition: 0.4s ease all;\n}\n\n.nav-specialText[_ngcontent-%COMP%]:after {\n  right: inherit;\n  top: inherit;\n  left: 0;\n  bottom: 0;\n}\n\n.nav-specialText[_ngcontent-%COMP%]:hover:before, .nav-specialText[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  transition: 0.8s ease all;\n}\n\n.boldText[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: bold;\n  text-align: left;\n}\n\n.boldText-lg[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n.boldText-xl[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: bold;\n}\n\n.boldText-xxl[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: bold;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 1.2rem;\n}\n\n.error-text__sm[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.text-left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.header-container[_ngcontent-%COMP%] {\n  height: 7rem;\n  padding: 2rem 4rem 1rem 4rem;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1rem;\n  box-shadow: 0px 5px 10px -8px rgba(0, 0, 0, 0.25);\n  width: 100%;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  background-color: white;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header__logo[_ngcontent-%COMP%] {\n  width: 6rem;\n  height: 4rem;\n  margin-right: 2rem;\n  cursor: pointer;\n}\n\n.verticalLine[_ngcontent-%COMP%] {\n  height: 50%;\n  border-left: 2px solid rgba(102, 102, 102, 0.2);\n  margin-left: -3px;\n  margin-bottom: 6px;\n}\n\n.activeNav[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #1c9ed1;\n}\n\n.search[_ngcontent-%COMP%] {\n  height: 3.5rem;\n  width: 38rem;\n  margin-left: 1rem;\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n}\n\n.searchBar[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 0px 10px 10px -8px rgba(255, 255, 255, 0.25);\n}\n\n.searchIcon[_ngcontent-%COMP%] {\n  height: 60%;\n  margin-left: 1rem;\n  margin-right: 1.5rem;\n  padding-right: 1rem;\n  border-right: 1px solid rgba(138, 133, 133, 0.5);\n}\n\n.search-button[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 1rem 2rem;\n  text-align: center;\n  outline: none;\n  font-size: 1.3rem;\n  border: none;\n  background-color: #9e9595;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  color: white;\n  transition: 0.2s;\n  cursor: pointer;\n  font-weight: 400;\n}\n\ninput.ng-valid[_ngcontent-%COMP%]    + .search-button[_ngcontent-%COMP%] {\n  background-color: #00adb5;\n}\n\ninput.ng-valid[_ngcontent-%COMP%]    + .search-button[_ngcontent-%COMP%]:hover {\n  background-color: #07bfc9;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  font-size: 1.6rem;\n}\n\n.profileBtn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 0.8rem;\n  padding-bottom: 1rem;\n  cursor: pointer;\n}\n\n.profileBtn__img[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  margin: 0 1rem;\n  border-radius: 50%;\n}\n\n.profileBtn__downArrow[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-left: 1rem solid transparent;\n  border-right: 1rem solid transparent;\n  border-top: 1rem solid black;\n}\n\n.profileOptions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 75px;\n  right: 35px;\n  transform: scale(0);\n  transform-origin: 250px 0;\n  opacity: 0;\n  border-radius: 4px;\n  transition: transform 0.3s, opacity 0.3s;\n  width: 240px;\n  background-color: #f6f9fc;\n  box-shadow: 0 0 40px 5px rgba(0, 0, 0, 0.5);\n  padding: 2rem;\n}\n\n.profileOptions[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1.5rem;\n}\n\n.profileOptions[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  border: 10px solid transparent;\n  border-bottom-color: #fff;\n  top: -20px;\n  right: 20px;\n}\n\n.profileOption[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  width: 100%;\n  padding: 0.7rem 0;\n  text-align: center;\n  font-size: 1.4rem;\n  color: white;\n  cursor: pointer;\n  background-color: #52616b;\n  border-radius: 4px;\n  transition: 0.3s;\n}\n\n.profileOption[_ngcontent-%COMP%]:hover {\n  background-color: #3f4c55;\n}\n\n.profileOption__flexed[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.profileOption__flexed[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0;\n}\n\n.profileOption__blue[_ngcontent-%COMP%] {\n  background-color: #112d4e;\n}\n\n.profileOption__blue[_ngcontent-%COMP%]:hover {\n  background-color: #0b233f;\n}\n\n.profileOption__green[_ngcontent-%COMP%] {\n  background-color: #15775e;\n}\n\n.profileOption__green[_ngcontent-%COMP%]:hover {\n  background-color: #126b55;\n}\n\n.profileOption__img[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  width: 2rem;\n  height: 2rem;\n}\n\n.ddOpen[_ngcontent-%COMP%] {\n  z-index: 10000;\n  opacity: 1;\n  transform: scale(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcbW9vbmRcXE9uZURyaXZlXFxEZXNrdG9wXFxNQkovc3JjXFxhcHBcXHNjc3NcXHR5cG9ncmFwaHkuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcbW9vbmRcXE9uZURyaXZlXFxEZXNrdG9wXFxNQkovc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvQzpcXFVzZXJzXFxtb29uZFxcT25lRHJpdmVcXERlc2t0b3BcXE1CSi9zcmNcXGFwcFxcc2Nzc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0k7RUFDRSxjQUFBO0FDQ047O0FETUE7RUFDRSx1QkFBQTtBQ0hGOztBRE1BO0VBQ0UseUJBQUE7QUNIRjs7QURVQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ1BGOztBRFVBO0VBQ0UsaUJBQUE7QUNQRjs7QURVQTtFQUNFLGlCQUFBO0FDUEY7O0FEVUE7RUFDRSxpQkFBQTtBQ1BGOztBRFlBO0VBQ0UsbUJBQUE7QUNURjs7QURXQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFVFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDUko7O0FEWUE7O0VBRUUsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1RGOztBRFlBO0VBQ0Usb0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7QUNURjs7QURXRTtFQUNFLDhCQUFBO0FDVEo7O0FEYUE7RUFDRSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDVkY7O0FEYUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNWRjs7QURhQTs7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ1ZGOztBRGFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQ1ZGOztBRGFBOztFQUVFLFdBQUE7RUFDQSx5QkFBQTtBQ1ZGOztBRGFBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDVkY7O0FEYUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDVkY7O0FEYUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDVkY7O0FEYUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDVkY7O0FEYUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNWRjs7QURXRTtFQUNFLGlCQUFBO0FDVEo7O0FEYUE7RUFDRSxrQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsZ0JBQUE7QUNWRjs7QURhQTtFQUNFLHFCQUFBO0FDVkY7O0FEYUE7RUFDRSxxQkFBQTtBQ1ZGOztBQ3hLQTtFQUNFLFlDSlk7RURLWiw0QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaURBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7QUQyS0Y7O0FDeEtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FEMktGOztBQ3pLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEMktKOztBQ3ZLQTtFQUNFLFdBQUE7RUFDQSwrQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUQwS0Y7O0FDdktBO0VBQ0UsZ0NBQUE7QUQwS0Y7O0FDdktBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FEMEtGOztBQ3ZLQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0RBQUE7QUQwS0Y7O0FDdktBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0FEMEtGOztBQ3ZLQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRDBLRjs7QUN0S0E7RUFDRSx5QkFBQTtBRHlLRjs7QUN2S0U7RUFDRSx5QkFBQTtBRHlLSjs7QUNyS0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBRHdLRjs7QUNyS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBRHdLRjs7QUN2S0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRHlLSjs7QUN0S0U7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtBRHdLSjs7QUNwS0E7RUFNRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFFQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGFBQUE7QURpS0Y7O0FDckxFO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FEdUxKOztBQ25LRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBRHFLSjs7QUNqS0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRG9LRjs7QUNsS0U7RUFDRSx5QkFBQTtBRG9LSjs7QUNqS0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRG1LSjs7QUNqS0k7RUFDRSxnQkFBQTtBRG1LTjs7QUMvSkU7RUFDRSx5QkFBQTtBRGlLSjs7QUMvSkk7RUFDRSx5QkFBQTtBRGlLTjs7QUM3SkU7RUFDRSx5QkFBQTtBRCtKSjs7QUM3Skk7RUFDRSx5QkFBQTtBRCtKTjs7QUMzSkU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FENkpKOztBQ3pKQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUQ0SkYiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmctcHJpbWFyeSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLmhlYWRpbmctc2Vjb25kYXJ5IHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5oZWFkaW5nLXRlcnRpYXJ5IHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uaGVhZGluZy1mb3VydGgge1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmVtcGhhc2lzLWxpbmsge1xuICBjb2xvcjogcmdiKDMwLCAxMzUsIDI1NSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmLS0yIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHJnYigxOCwgMTAzLCAxMjkpO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiByZ2IoMTgsIDE1MSwgMTkyKTtcblxuICAgIH1cbiAgfVxufVxuXG4vLyAqKioqKioqKiogQ09MT1JFRCBURVhUICoqKioqKioqKipcbi53aGl0ZVRleHQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmdyZXlUZXh0IHtcbiAgY29sb3I6ICM4Rjk5OUEgIWltcG9ydGFudDtcbn1cblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuXG4vLyAqKioqKioqKioqKiBQQVJBR1JBUEggKioqKioqKioqKioqKlxuLnBhcmFncmFwaCB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogIzYyNjQ2YTtcbn1cblxuLnBhcmFncmFwaC1tZCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ucGFyYWdyYXBoLWxnIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5wYXJhZ3JhcGgteGwge1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLm5vV3JhcFRleHR7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7O1xufVxuLmxhYmVsVGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xuXG4gICYtLTIge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGNvbG9yOiByZ2IoMTMxLCAxMzEsIDEzMSk7XG4gIH1cbn1cblxuLm5hdi10ZXh0LFxuLm5hdi1zcGVjaWFsVGV4dCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwIDJyZW07XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubmF2LXRleHQge1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gIGNvbG9yOiBibGFjaztcblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG4gIH1cbn1cblxuLm5hdi1zcGVjaWFsVGV4dCB7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMxQUFCOEE7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzFBQUI4QTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICB0cmFuc2l0aW9uOiAwLjhzIGVhc2UgYWxsO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubmF2LXNwZWNpYWxUZXh0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMxNjkxNzQ7XG59XG5cbi5uYXYtc3BlY2lhbFRleHQ6YmVmb3JlLFxuLm5hdi1zcGVjaWFsVGV4dDphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogMDtcbiAgYmFja2dyb3VuZDogIzFBQUI4QTtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlIGFsbDtcbn1cblxuLm5hdi1zcGVjaWFsVGV4dDphZnRlciB7XG4gIHJpZ2h0OiBpbmhlcml0O1xuICB0b3A6IGluaGVyaXQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLm5hdi1zcGVjaWFsVGV4dDpob3ZlcjpiZWZvcmUsXG4ubmF2LXNwZWNpYWxUZXh0OmhvdmVyOmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuOHMgZWFzZSBhbGw7XG59XG5cbi5ib2xkVGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJvbGRUZXh0LWxnIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYm9sZFRleHQteGwge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib2xkVGV4dC14eGwge1xuICBmb250LXNpemU6IDIuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lcnJvci10ZXh0IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gICZfX3Nte1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuIiwiLmhlYWRpbmctcHJpbWFyeSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLmhlYWRpbmctc2Vjb25kYXJ5IHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi5oZWFkaW5nLXRlcnRpYXJ5IHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uaGVhZGluZy1mb3VydGgge1xuICBmb250LXNpemU6IDEuOHJlbTtcbn1cblxuLmVtcGhhc2lzLWxpbmsge1xuICBjb2xvcjogIzFlODdmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmVtcGhhc2lzLWxpbmstLTIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMTI2NzgxO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLmVtcGhhc2lzLWxpbmstLTI6aG92ZXIge1xuICBjb2xvcjogIzEyOTdjMDtcbn1cblxuLndoaXRlVGV4dCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uZ3JleVRleHQge1xuICBjb2xvcjogIzhGOTk5QSAhaW1wb3J0YW50O1xufVxuXG4ucGFyYWdyYXBoIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGNvbG9yOiAjNjI2NDZhO1xufVxuXG4ucGFyYWdyYXBoLW1kIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5wYXJhZ3JhcGgtbGcge1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLnBhcmFncmFwaC14bCB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4ubm9XcmFwVGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5sYWJlbFRleHQge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICM5Njk2OTY7XG59XG4ubGFiZWxUZXh0LS0yIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiAjODM4MzgzO1xufVxuXG4ubmF2LXRleHQsXG4ubmF2LXNwZWNpYWxUZXh0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgMnJlbTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5uYXYtdGV4dCB7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLm5hdi10ZXh0OmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubmF2LXNwZWNpYWxUZXh0IHtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzFBQUI4QTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMUFBQjhBO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIHRyYW5zaXRpb246IDAuOHMgZWFzZSBhbGw7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5uYXYtc3BlY2lhbFRleHQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzE2OTE3NDtcbn1cblxuLm5hdi1zcGVjaWFsVGV4dDpiZWZvcmUsXG4ubmF2LXNwZWNpYWxUZXh0OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDA7XG4gIGJhY2tncm91bmQ6ICMxQUFCOEE7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZSBhbGw7XG59XG5cbi5uYXYtc3BlY2lhbFRleHQ6YWZ0ZXIge1xuICByaWdodDogaW5oZXJpdDtcbiAgdG9wOiBpbmhlcml0O1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi5uYXYtc3BlY2lhbFRleHQ6aG92ZXI6YmVmb3JlLFxuLm5hdi1zcGVjaWFsVGV4dDpob3ZlcjphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjhzIGVhc2UgYWxsO1xufVxuXG4uYm9sZFRleHQge1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5ib2xkVGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJvbGRUZXh0LXhsIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYm9sZFRleHQteHhsIHtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZXJyb3ItdGV4dCB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLmVycm9yLXRleHRfX3NtIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogN3JlbTtcbiAgcGFkZGluZzogMnJlbSA0cmVtIDFyZW0gNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggLThweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyX19sb2dvIHtcbiAgd2lkdGg6IDZyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52ZXJ0aWNhbExpbmUge1xuICBoZWlnaHQ6IDUwJTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKDEwMiwgMTAyLCAxMDIsIDAuMik7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5hY3RpdmVOYXYge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFjOWVkMTtcbn1cblxuLnNlYXJjaCB7XG4gIGhlaWdodDogMy41cmVtO1xuICB3aWR0aDogMzhyZW07XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VhcmNoQmFyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLThweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xufVxuXG4uc2VhcmNoSWNvbiB7XG4gIGhlaWdodDogNjAlO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTM4LCAxMzMsIDEzMywgMC41KTtcbn1cblxuLnNlYXJjaC1idXR0b24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWU5NTk1O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaW5wdXQubmctdmFsaWQgKyAuc2VhcmNoLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFkYjU7XG59XG5pbnB1dC5uZy12YWxpZCArIC5zZWFyY2gtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3YmZjOTtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4ucHJvZmlsZUJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMC44cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByb2ZpbGVCdG5fX2ltZyB7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIG1hcmdpbjogMCAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucHJvZmlsZUJ0bl9fZG93bkFycm93IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDFyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogMXJlbSBzb2xpZCBibGFjaztcbn1cblxuLnByb2ZpbGVPcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDc1cHg7XG4gIHJpZ2h0OiAzNXB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAyNTBweCAwO1xuICBvcGFjaXR5OiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBvcGFjaXR5IDAuM3M7XG4gIHdpZHRoOiAyNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjlmYztcbiAgYm94LXNoYWRvdzogMCAwIDQwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcGFkZGluZzogMnJlbTtcbn1cbi5wcm9maWxlT3B0aW9ucyBociB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4ucHJvZmlsZU9wdGlvbnM6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG4gIHRvcDogLTIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xufVxuXG4ucHJvZmlsZU9wdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuN3JlbSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNjE2YjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLnByb2ZpbGVPcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y0YzU1O1xufVxuLnByb2ZpbGVPcHRpb25fX2ZsZXhlZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnByb2ZpbGVPcHRpb25fX2ZsZXhlZDpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnByb2ZpbGVPcHRpb25fX2JsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyZDRlO1xufVxuLnByb2ZpbGVPcHRpb25fX2JsdWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIyMzNmO1xufVxuLnByb2ZpbGVPcHRpb25fX2dyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1Nzc1ZTtcbn1cbi5wcm9maWxlT3B0aW9uX19ncmVlbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjZiNTU7XG59XG4ucHJvZmlsZU9wdGlvbl9faW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbi5kZE9wZW4ge1xuICB6LWluZGV4OiAxMDAwMDtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn0iLCJAaW1wb3J0ICcuLi9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcbkBpbXBvcnQgJy4uL3Njc3MvdHlwb2dyYXBoeS5zY3NzJztcblxuLmhlYWRlci1jb250YWluZXIge1xuICBoZWlnaHQ6ICRuYXYtaGVpZ2h0O1xuICBwYWRkaW5nOiAycmVtIDRyZW0gMXJlbSA0cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAtOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmX19sb2dvIHtcbiAgICB3aWR0aDogNnJlbTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4udmVydGljYWxMaW5lIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiYSgxMDIsIDEwMiwgMTAyLCAwLjIpO1xuICBtYXJnaW4tbGVmdDogLTNweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uYWN0aXZlTmF2IHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyOCwgMTU4LCAyMDkpO1xufVxuXG4uc2VhcmNoIHtcbiAgaGVpZ2h0OiAzLjVyZW07XG4gIHdpZHRoOiAzOHJlbTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2hCYXIge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG59XG5cbi5zZWFyY2hJY29uIHtcbiAgaGVpZ2h0OiA2MCU7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxMzgsIDEzMywgMTMzLCAwLjUpO1xufVxuXG4uc2VhcmNoLWJ1dHRvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZTk1OTU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5cbmlucHV0Lm5nLXZhbGlkKy5zZWFyY2gtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWRiNTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdiZmM5O1xuICB9XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cblxuLnByb2ZpbGVCdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDAuOHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJl9faW1nIHtcbiAgICB3aWR0aDogNHJlbTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgbWFyZ2luOiAwIDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgJl9fZG93bkFycm93IHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDFyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3A6IDFyZW0gc29saWQgYmxhY2s7XG4gIH1cbn1cblxuLnByb2ZpbGVPcHRpb25zIHtcbiAgaHIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgfVxuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3NXB4O1xuICByaWdodDogMzVweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMjUwcHggMDtcbiAgb3BhY2l0eTogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzLFxuICBvcGFjaXR5IC4zcztcbiAgd2lkdGg6IDI0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOWZjO1xuICBib3gtc2hhZG93OiAwIDAgNDBweCA1cHggcmdiYSgwLCAwLCAwLCAuNSk7XG4gIHBhZGRpbmc6IDJyZW07XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xuICAgIHRvcDogLTIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gIH1cbn1cblxuLnByb2ZpbGVPcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjdyZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjYxNmI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y0YzU1O1xuICB9XG5cbiAgJl9fZmxleGVkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuXG4gICZfX2JsdWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTJkNGU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjIzM2Y7XG4gICAgfVxuICB9XG5cbiAgJl9fZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTc3NWU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjZiNTU7XG4gICAgfVxuICB9XG5cbiAgJl9faW1nIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IDJyZW07XG4gIH1cbn1cblxuLmRkT3BlbiB7XG4gIHotaW5kZXg6IDEwMDAwO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuIiwiJG5hdi1oZWlnaHQgOiA3cmVtO1xuJGhlYWRlckVycm9yLWhlaWdodCA6IDRyZW07XG4kZGlzYWJsZWQtY29sb3I6IHJnYigxMTAsIDExMCwgMTEwKTsiXX0= */',
          ],
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
            HeaderComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
                args: [
                  {
                    selector: "app-header",
                    templateUrl: "./header.component.html",
                    styleUrls: ["./header.component.scss"],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__[
                    "AuthService"
                  ],
                },
                {
                  type: _shared_app_manager_service__WEBPACK_IMPORTED_MODULE_4__[
                    "AppManagerService"
                  ],
                },
                {
                  type: _seller_set_up_seller_set_up_service__WEBPACK_IMPORTED_MODULE_5__[
                    "SellerSetUpService"
                  ],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
                },
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/seller-set-up/seller-set-up.service.ts":
      /*!********************************************************!*\
    !*** ./src/app/seller-set-up/seller-set-up.service.ts ***!
    \********************************************************/

      /*! exports provided: SellerSetUpService */

      /***/
      function srcAppSellerSetUpSellerSetUpServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "SellerSetUpService",
          function () {
            return SellerSetUpService;
          }
        );
        /* harmony import */

        var _shared_personal_model__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./../shared/personal.model */
            "./src/app/shared/personal.model.ts"
          );
        /* harmony import */

        var src_app_shared_professional_model__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! src/app/shared/professional.model */
            "./src/app/shared/professional.model.ts"
          );
        /* harmony import */

        var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */
          "./node_modules/rxjs/_esm2015/index.js"
        );
        /* harmony import */

        var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! rxjs/operators */
          "./node_modules/rxjs/_esm2015/operators/index.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! src/environments/environment */
            "./src/environments/environment.ts"
          );
        /* harmony import */

        var _shared_validity_model__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../shared/validity.model */
            "./src/app/shared/validity.model.ts"
          );
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! @angular/common/http */
            "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
          );
        /* harmony import */

        var _shared_app_manager_service__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./../shared/app-manager.service */
            "./src/app/shared/app-manager.service.ts"
          );
        /* harmony import */

        var angularfire2_storage__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! angularfire2/storage */
            "./node_modules/angularfire2/storage/index.js"
          );
        /* harmony import */

        var angularfire2_storage__WEBPACK_IMPORTED_MODULE_9___default =
          /*#__PURE__*/ __webpack_require__.n(
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_9__
          );

        var SellerSetUpService = /*#__PURE__*/ (function () {
          function SellerSetUpService(http, appManagerService, afStorage) {
            _classCallCheck(this, SellerSetUpService);

            this.http = http;
            this.appManagerService = appManagerService;
            this.afStorage = afStorage;
            this.personalFormValid = new rxjs__WEBPACK_IMPORTED_MODULE_2__[
              "Subject"
            ]();
            this.savedPersonalInfo = new rxjs__WEBPACK_IMPORTED_MODULE_2__[
              "Subject"
            ]();
            this.folderName = "profileImages";
          }

          _createClass(SellerSetUpService, [
            {
              key: "saveValidityInfo",
              value: function saveValidityInfo(personalFormValid) {
                this.validityInfo =
                  new _shared_validity_model__WEBPACK_IMPORTED_MODULE_6__[
                    "ValidityModel"
                  ]({
                    personalFormValid: personalFormValid,
                  });
                this.http
                  .put(
                    ""
                      .concat(
                        src_environments_environment__WEBPACK_IMPORTED_MODULE_5__[
                          "environment"
                        ].cors
                      )
                      .concat(
                        src_environments_environment__WEBPACK_IMPORTED_MODULE_5__[
                          "environment"
                        ].databaseURL,
                        "sellerAccounts/"
                      )
                      .concat(
                        this.appManagerService.userName.value,
                        "/validityInfo.json"
                      ),
                    this.validityInfo
                  )
                  .subscribe(function (res) {
                    console.log(res);
                  });
              },
            },
            {
              key: "fetchValidityInfo",
              value: function fetchValidityInfo() {
                return this.http.get(
                  ""
                    .concat(
                      src_environments_environment__WEBPACK_IMPORTED_MODULE_5__[
                        "environment"
                      ].cors
                    )
                    .concat(
                      src_environments_environment__WEBPACK_IMPORTED_MODULE_5__[
                        "environment"
                      ].databaseURL,
                      "sellerAccounts/"
                    )
                    .concat(
                      this.appManagerService.userName.value,
                      "/validityInfo.json"
                    )
                );
              },
            },
            {
              key: "savePersonalInfo",
              value: function savePersonalInfo(
                firstName,
                lastName,
                description,
                btn
              ) {
                var _this6 = this;

                this.personalModel =
                  new _shared_personal_model__WEBPACK_IMPORTED_MODULE_0__[
                    "PersonalModel"
                  ](firstName, lastName, description);
                this.http
                  .put(
                    ""
                      .concat(
                        src_environments_environment__WEBPACK_IMPORTED_MODULE_5__[
                          "environment"
                        ].cors
                      )
                      .concat(
                        src_environments_environment__WEBPACK_IMPORTED_MODULE_5__[
                          "environment"
                        ].databaseURL,
                        "sellerAccounts/"
                      )
                      .concat(
                        this.appManagerService.userName.value,
                        "/personalInfo.json"
                      ),
                    this.personalModel
                  )
                  .subscribe(function (res) {
                    console.log(res);

                    if (btn) {
                      _this6.savedPersonalInfo.next(true);
                    }
                  });
              },
            },
            {
              key: "fetchPersonalInfo",
              value: function fetchPersonalInfo() {
                return this.http.get(
                  ""
                    .concat(
                      src_environments_environment__WEBPACK_IMPORTED_MODULE_5__[
                        "environment"
                      ].cors
                    )
                    .concat(
                      src_environments_environment__WEBPACK_IMPORTED_MODULE_5__[
                        "environment"
                      ].databaseURL,
                      "sellerAccounts/"
                    )
                    .concat(
                      this.appManagerService.userName.value,
                      "/personalInfo.json"
                    )
                );
              },
            },
            {
              key: "saveProfessionalInfo",
              value: function saveProfessionalInfo(
                selectedProfession,
                checkedProfessions,
                selectedFromYear,
                selectedToYear,
                skills,
                educations,
                certifications
              ) {
                this.professionalModel =
                  new src_app_shared_professional_model__WEBPACK_IMPORTED_MODULE_1__[
                    "ProfessionalModel"
                  ](
                    selectedProfession,
                    checkedProfessions,
                    selectedFromYear,
                    selectedToYear,
                    skills,
                    educations,
                    certifications
                  );
                this.http
                  .put(
                    ""
                      .concat(
                        src_environments_environment__WEBPACK_IMPORTED_MODULE_5__[
                          "environment"
                        ].cors
                      )
                      .concat(
                        src_environments_environment__WEBPACK_IMPORTED_MODULE_5__[
                          "environment"
                        ].databaseURL,
                        "sellerAccounts/"
                      )
                      .concat(
                        this.appManagerService.userName.value,
                        "/professionalInfo.json"
                      ),
                    this.professionalModel
                  )
                  .subscribe(function (res) {
                    console.log(res);
                  });
              },
            },
            {
              key: "fetchProfessionalInfo",
              value: function fetchProfessionalInfo() {
                return this.http.get(
                  ""
                    .concat(
                      src_environments_environment__WEBPACK_IMPORTED_MODULE_5__[
                        "environment"
                      ].cors
                    )
                    .concat(
                      src_environments_environment__WEBPACK_IMPORTED_MODULE_5__[
                        "environment"
                      ].databaseURL,
                      "sellerAccounts/"
                    )
                    .concat(
                      this.appManagerService.userName.value,
                      "/professionalInfo.json"
                    )
                );
              },
            },
            {
              key: "getProfileImg",
              value: function getProfileImg() {
                //Get profile image and show it
                //Check if file exists and only get it if it does.
                return this.afStorage
                  .ref(
                    ""
                      .concat(this.folderName, "/")
                      .concat(this.appManagerService.userName.value)
                  )
                  .getDownloadURL()
                  .pipe(
                    Object(
                      rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"]
                    )(function () {
                      return Object(
                        rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"]
                      )(
                        "profile image was not retrieved from firebase storage"
                      );
                    })
                  );
              },
            },
          ]);

          return SellerSetUpService;
        })();

        SellerSetUpService.ɵfac = function SellerSetUpService_Factory(t) {
          return new (t || SellerSetUpService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](
              _shared_app_manager_service__WEBPACK_IMPORTED_MODULE_8__[
                "AppManagerService"
              ]
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](
              angularfire2_storage__WEBPACK_IMPORTED_MODULE_9__[
                "AngularFireStorage"
              ]
            )
          );
        };

        SellerSetUpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__[
          "ɵɵdefineInjectable"
        ]({
          token: SellerSetUpService,
          factory: SellerSetUpService.ɵfac,
          providedIn: "root",
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](
            SellerSetUpService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
                args: [
                  {
                    providedIn: "root",
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__[
                    "HttpClient"
                  ],
                },
                {
                  type: _shared_app_manager_service__WEBPACK_IMPORTED_MODULE_8__[
                    "AppManagerService"
                  ],
                },
                {
                  type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_9__[
                    "AngularFireStorage"
                  ],
                },
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/shared/app-manager.service.ts":
      /*!***********************************************!*\
    !*** ./src/app/shared/app-manager.service.ts ***!
    \***********************************************/

      /*! exports provided: AppManagerService */

      /***/
      function srcAppSharedAppManagerServiceTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "AppManagerService",
          function () {
            return AppManagerService;
          }
        );
        /* harmony import */

        var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! rxjs */
          "./node_modules/rxjs/_esm2015/index.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! src/environments/environment */
            "./src/environments/environment.ts"
          );
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @angular/common/http */
            "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"
          );

        var AppManagerService = /*#__PURE__*/ (function () {
          function AppManagerService(http) {
            _classCallCheck(this, AppManagerService);

            this.http = http;
            this.headerStateSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__[
              "BehaviorSubject"
            ](null);
            this.userName = new rxjs__WEBPACK_IMPORTED_MODULE_0__[
              "BehaviorSubject"
            ](null);
            this.headerStates = {
              main: "main",
              buyerMain: "buyerMain",
              sellerMain: "sellerMain",
              onlyLogo: "onlyLogo",
            };
          }

          _createClass(AppManagerService, [
            {
              key: "saveHasSellerAccount",
              value: function saveHasSellerAccount(hasSellerAccount) {
                var temp = [hasSellerAccount];
                this.http
                  .put(
                    ""
                      .concat(
                        src_environments_environment__WEBPACK_IMPORTED_MODULE_2__[
                          "environment"
                        ].cors
                      )
                      .concat(
                        src_environments_environment__WEBPACK_IMPORTED_MODULE_2__[
                          "environment"
                        ].databaseURL,
                        "sellerAccounts/"
                      )
                      .concat(this.userName.value, "/hasSellerAccount.json"),
                    temp
                  )
                  .subscribe(function (res) {
                    console.log(res);
                  });
              },
            },
            {
              key: "fetchHasSellerAccount",
              value: function fetchHasSellerAccount() {
                return this.http.get(
                  ""
                    .concat(
                      src_environments_environment__WEBPACK_IMPORTED_MODULE_2__[
                        "environment"
                      ].cors
                    )
                    .concat(
                      src_environments_environment__WEBPACK_IMPORTED_MODULE_2__[
                        "environment"
                      ].databaseURL,
                      "sellerAccounts/"
                    )
                    .concat(this.userName.value, "/hasSellerAccount.json")
                );
              },
            },
          ]);

          return AppManagerService;
        })();

        AppManagerService.ɵfac = function AppManagerService_Factory(t) {
          return new (t || AppManagerService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](
              _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
            )
          );
        };

        AppManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          "ɵɵdefineInjectable"
        ]({
          token: AppManagerService,
          factory: AppManagerService.ɵfac,
          providedIn: "root",
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](
            AppManagerService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
                args: [
                  {
                    providedIn: "root",
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__[
                    "HttpClient"
                  ],
                },
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    "./src/app/shared/dropdown.directive.ts":
      /*!**********************************************!*\
    !*** ./src/app/shared/dropdown.directive.ts ***!
    \**********************************************/

      /*! exports provided: DropdownDirective */

      /***/
      function srcAppSharedDropdownDirectiveTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "DropdownDirective",
          function () {
            return DropdownDirective;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );

        var DropdownDirective = /*#__PURE__*/ (function () {
          function DropdownDirective(eRef) {
            _classCallCheck(this, DropdownDirective);

            this.eRef = eRef;
            this.isOpen = false;
          }

          _createClass(DropdownDirective, [
            {
              key: "toggleClick",
              value: function toggleClick(event) {
                var _this7 = this;

                if (this.eRef.nativeElement.contains(event.target)) {
                  this.isOpen = !this.isOpen; // This allows cross element (click) = "anotherEl.click()" functionality.

                  this.bouncer = setTimeout(function () {
                    return (_this7.bouncer = null);
                  }, 100);
                } else if (this.bouncer === null) {
                  this.isOpen = false;
                }
              },
            },
          ]);

          return DropdownDirective;
        })();

        DropdownDirective.ɵfac = function DropdownDirective_Factory(t) {
          return new (t || DropdownDirective)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
            )
          );
        };

        DropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineDirective"
        ]({
          type: DropdownDirective,
          selectors: [["", "appDropDown", ""]],
          hostVars: 2,
          hostBindings: function DropdownDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
                "click",
                function DropdownDirective_click_HostBindingHandler($event) {
                  return ctx.toggleClick($event);
                },
                false,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]
              );
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"](
                "ddOpen",
                ctx.isOpen
              );
            }
          },
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            DropdownDirective,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
                args: [
                  {
                    selector: "[appDropDown]",
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                    "ElementRef"
                  ],
                },
              ];
            },
            {
              isOpen: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                    "HostBinding"
                  ],
                  args: ["class.ddOpen"],
                },
              ],
              toggleClick: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                    "HostListener"
                  ],
                  args: ["document:click", ["$event"]],
                },
              ],
            }
          );
        })();
        /***/
      },

    /***/
    "./src/app/shared/loading-dots/loading-dots.component.ts":
      /*!***************************************************************!*\
    !*** ./src/app/shared/loading-dots/loading-dots.component.ts ***!
    \***************************************************************/

      /*! exports provided: LoadingDotsComponent */

      /***/
      function srcAppSharedLoadingDotsLoadingDotsComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "LoadingDotsComponent",
          function () {
            return LoadingDotsComponent;
          }
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );

        var LoadingDotsComponent = function LoadingDotsComponent() {
          _classCallCheck(this, LoadingDotsComponent);
        };

        LoadingDotsComponent.ɵfac = function LoadingDotsComponent_Factory(t) {
          return new (t || LoadingDotsComponent)();
        };

        LoadingDotsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          "ɵɵdefineComponent"
        ]({
          type: LoadingDotsComponent,
          selectors: [["app-loading-dots"]],
          decls: 6,
          vars: 0,
          consts: [
            ["id", "dots"],
            [1, "lds-ellipsis"],
          ],
          template: function LoadingDotsComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                0,
                "div",
                0
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                1,
                "div",
                1
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          styles: [
            "#dots[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 10000;\n}\n\n.lds-ellipsis[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #00ff40;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n          animation: lds-ellipsis1 0.6s infinite;\n}\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  left: 8px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  left: 32px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  left: 56px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n          animation: lds-ellipsis3 0.6s infinite;\n}\n\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmctZG90cy9DOlxcVXNlcnNcXG1vb25kXFxPbmVEcml2ZVxcRGVza3RvcFxcTUJKL3NyY1xcYXBwXFxzaGFyZWRcXGxvYWRpbmctZG90c1xcbG9hZGluZy1kb3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbG9hZGluZy1kb3RzL2xvYWRpbmctZG90cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2xvYWRpbmctZG90cy9DOlxcVXNlcnNcXG1vb25kXFxPbmVEcml2ZVxcRGVza3RvcFxcTUJKL3NyY1xcYXBwXFxzY3NzXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREVBO0VFT0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VGUkEscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkRBQUE7VUFBQSxtREFBQTtBQ0tKOztBREhFO0VBQ0UsU0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNNSjs7QURKRTtFQUNFLFNBQUE7RUFDQSw4Q0FBQTtVQUFBLHNDQUFBO0FDT0o7O0FETEU7RUFDRSxVQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ1FKOztBRE5FO0VBQ0UsVUFBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7QUNTSjs7QURQRTtFQUNFO0lBQ0UsbUJBQUE7RUNVSjtFRFJFO0lBQ0UsbUJBQUE7RUNVSjtBQUNGOztBRGhCRTtFQUNFO0lBQ0UsbUJBQUE7RUNVSjtFRFJFO0lBQ0UsbUJBQUE7RUNVSjtBQUNGOztBRFJFO0VBQ0U7SUFDRSxtQkFBQTtFQ1VKO0VEUkU7SUFDRSxtQkFBQTtFQ1VKO0FBQ0Y7O0FEaEJFO0VBQ0U7SUFDRSxtQkFBQTtFQ1VKO0VEUkU7SUFDRSxtQkFBQTtFQ1VKO0FBQ0Y7O0FEUkU7RUFDRTtJQUNFLDBCQUFBO0VDVUo7RURSRTtJQUNFLDZCQUFBO0VDVUo7QUFDRjs7QURoQkU7RUFDRTtJQUNFLDBCQUFBO0VDVUo7RURSRTtJQUNFLDZCQUFBO0VDVUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2FkaW5nLWRvdHMvbG9hZGluZy1kb3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3Njc3MvbWl4aW5zLnNjc3NcIjtcbiNkb3Rze1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB6LWluZGV4OiAxMDAwMDtcbn1cbi5sZHMtZWxsaXBzaXMge1xuICAgIEBpbmNsdWRlIGFic0NlbnRlcjsgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgfVxuICAubGRzLWVsbGlwc2lzIGRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzNweDtcbiAgICB3aWR0aDogMTNweDtcbiAgICBoZWlnaHQ6IDEzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHJnYigwLCAyNTUsIDY0KTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XG4gIH1cbiAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICBsZWZ0OiA4cHg7XG4gICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XG4gIH1cbiAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBsZWZ0OiA4cHg7XG4gICAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XG4gIH1cbiAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICBsZWZ0OiAzMnB4O1xuICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xuICB9XG4gIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgbGVmdDogNTZweDtcbiAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcbiAgfVxuICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XG4gICAgfVxuICB9XG4gICIsIiNkb3RzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgei1pbmRleDogMTAwMDA7XG59XG5cbi5sZHMtZWxsaXBzaXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5sZHMtZWxsaXBzaXMgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMzcHg7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzAwZmY0MDtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDEsIDApO1xufVxuXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiA4cHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMSAwLjZzIGluZmluaXRlO1xufVxuXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMikge1xuICBsZWZ0OiA4cHg7XG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xufVxuXG4ubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xuICBsZWZ0OiAzMnB4O1xuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczIgMC42cyBpbmZpbml0ZTtcbn1cblxuLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgbGVmdDogNTZweDtcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMzIDAuNnMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNHB4LCAwKTtcbiAgfVxufSIsIkBtaXhpbiBtZWRpYSgkYnJlYWtwb2ludCl7XG4gICAgQGlmICRicmVha3BvaW50ID09IHBob25le1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4ZW0pIHtAY29udGVudH07IC8vIDYwMHB4XG4gICAgfSBcbiAgICBAaWYgJGJyZWFrcG9pbnQgPT0gdGFiLXBvcnR7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIuNWVtKSB7QGNvbnRlbnR9OyAvLyAxMDAwcHhcbiAgICB9IFxuICAgIEBpZiAkYnJlYWtwb2ludCA9PSB0YWItbGFuZHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7QGNvbnRlbnR9OyAvLyAxMjAwcHhcbiAgICB9IFxuICAgIEBpZiAkYnJlYWtwb2ludCA9PSBiaWctZGVza3RvcHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTIuNWVtKSB7QGNvbnRlbnR9OyAvLyAxODAwcHhcbiAgICB9IFxufVxuQG1peGluIGFic0NlbnRlcigpe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbn0iXX0= */",
          ],
        });
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](
            LoadingDotsComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [
                  {
                    selector: "app-loading-dots",
                    template:
                      '<div id="dots"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
                    styleUrls: ["./loading-dots.component.scss"],
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
    "./src/app/shared/personal.model.ts":
      /*!******************************************!*\
    !*** ./src/app/shared/personal.model.ts ***!
    \******************************************/

      /*! exports provided: PersonalModel */

      /***/
      function srcAppSharedPersonalModelTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "PersonalModel",
          function () {
            return PersonalModel;
          }
        );

        var PersonalModel = function PersonalModel(
          firstname,
          lastname,
          personalDescription
        ) {
          _classCallCheck(this, PersonalModel);

          this.firstname = firstname;
          this.lastname = lastname;
          this.personalDescription = personalDescription;
        };
        /***/
      },

    /***/
    "./src/app/shared/professional.model.ts":
      /*!**********************************************!*\
    !*** ./src/app/shared/professional.model.ts ***!
    \**********************************************/

      /*! exports provided: ProfessionalModel */

      /***/
      function srcAppSharedProfessionalModelTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "ProfessionalModel",
          function () {
            return ProfessionalModel;
          }
        );

        var ProfessionalModel = function ProfessionalModel(
          profession,
          professionSkills,
          fromYear,
          toYear,
          skills,
          educations,
          certifications
        ) {
          _classCallCheck(this, ProfessionalModel);

          this.profession = profession;
          this.professionSkills = professionSkills;
          this.fromYear = fromYear;
          this.toYear = toYear;
          this.skills = skills;
          this.educations = educations;
          this.certifications = certifications;
        };
        /***/
      },

    /***/
    "./src/app/shared/shared.module.ts":
      /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

      /*! exports provided: SharedModule */

      /***/
      function srcAppSharedSharedModuleTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
          return SharedModule;
        });
        /* harmony import */

        var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./../footer/footer.component */
            "./src/app/footer/footer.component.ts"
          );
        /* harmony import */

        var _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./dropdown.directive */
            "./src/app/shared/dropdown.directive.ts"
          );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/core */
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _loading_dots_loading_dots_component__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./loading-dots/loading-dots.component */
            "./src/app/shared/loading-dots/loading-dots.component.ts"
          );

        var SharedModule = function SharedModule() {
          _classCallCheck(this, SharedModule);
        };

        SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__[
          "ɵɵdefineNgModule"
        ]({
          type: SharedModule,
        });
        SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__[
          "ɵɵdefineInjector"
        ]({
          factory: function SharedModule_Factory(t) {
            return new (t || SharedModule)();
          },
          imports: [
            [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
          ],
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](
              SharedModule,
              {
                declarations: [
                  _loading_dots_loading_dots_component__WEBPACK_IMPORTED_MODULE_4__[
                    "LoadingDotsComponent"
                  ],
                  _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__[
                    "DropdownDirective"
                  ],
                  _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__[
                    "FooterComponent"
                  ],
                ],
                imports: [
                  _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ],
                exports: [
                  _loading_dots_loading_dots_component__WEBPACK_IMPORTED_MODULE_4__[
                    "LoadingDotsComponent"
                  ],
                  _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__[
                    "FooterComponent"
                  ],
                  _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                  _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__[
                    "DropdownDirective"
                  ],
                ],
              }
            );
        })();
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](
            SharedModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
                args: [
                  {
                    declarations: [
                      _loading_dots_loading_dots_component__WEBPACK_IMPORTED_MODULE_4__[
                        "LoadingDotsComponent"
                      ],
                      _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__[
                        "DropdownDirective"
                      ],
                      _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__[
                        "FooterComponent"
                      ],
                    ],
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_2__[
                        "CommonModule"
                      ],
                    ],
                    exports: [
                      _loading_dots_loading_dots_component__WEBPACK_IMPORTED_MODULE_4__[
                        "LoadingDotsComponent"
                      ],
                      _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__[
                        "FooterComponent"
                      ],
                      _angular_common__WEBPACK_IMPORTED_MODULE_2__[
                        "CommonModule"
                      ],
                      _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__[
                        "DropdownDirective"
                      ],
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
    "./src/app/shared/validity.model.ts":
      /*!******************************************!*\
    !*** ./src/app/shared/validity.model.ts ***!
    \******************************************/

      /*! exports provided: ValidityModel */

      /***/
      function srcAppSharedValidityModelTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(
          __webpack_exports__,
          "ValidityModel",
          function () {
            return ValidityModel;
          }
        );

        var ValidityModel = function ValidityModel(validity) {
          _classCallCheck(this, ValidityModel);

          this.validity = validity;
        };
        /***/
      },

    /***/
    "./src/environments/environment.ts":
      /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

      /*! exports provided: environment */

      /***/
      function srcEnvironmentsEnvironmentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, "environment", function () {
          return environment;
        }); // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.

        var environment = {
          production: false,
          cors: "https://cors-anywhere.herokuapp.com/",
          databaseURL: "https://mbj-2f9fa.firebaseio.com/",
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
          "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"
        );
        /* harmony import */

        var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./environments/environment */
            "./src/environments/environment.ts"
          );
        /* harmony import */

        var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app/app.module */
          "./src/app/app.module.ts"
        );
        /* harmony import */

        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @angular/platform-browser */
            "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"
          );

        if (
          _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]
            .production
        ) {
          Object(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"]
          )();
        }

        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__[
          "platformBrowser"
        ]()
          .bootstrapModule(
            _app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]
          )
          ["catch"](function (err) {
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
          /*! C:\Users\moond\OneDrive\Desktop\MBJ\src\main.ts */
          "./src/main.ts"
        );
        /***/
      },
  },
  [[0, "runtime", "vendor"]],
]);
//# sourceMappingURL=main-es5.js.map
