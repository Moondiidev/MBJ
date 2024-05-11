(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, router) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(user => {
            const isAuth = !!user;
            if (isAuth) {
                return true;
            }
            else {
                return this.router.createUrlTree(['/auth/logIn'], { queryParams: { access: 'denied' } });
            }
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    jobCategories: {
        graphicDesignNames: ['Хүүхэлдэйн Кино & Комик Сэтгүүл', '3Д Модель Дүр & Бүдээгтхүүн Дизайн', 'Вэб Дизайн', 'Урилга & Бизнес Карт', 'Тоглоом Дизайн', 'Хүрээлэн Буй Орчин', 'Зар Суртчилгаа', 'Photoshop Эвлүүлэг', 'Лого Дизайн', 'Ном & Цомог Хавтас', 'Инфограпик', 'Архитектур', 'Бусад'],
        marketingNames: ['Эмэйл Маркетинг', 'Вэб Сайт Хөдөлгөөн Ихэсгэх', 'Инфлүнсэр Маркетинг', 'Видео Маркетинг', 'SEO', 'Сошиал Мэдиа Маркетинг', 'Бусад'],
        soundNames: ['Хөгжим Найруулагч & Зохиолч', 'SFX', 'Дуу Оруулаг', 'Дуучин', 'Бусад'],
        writingNames: ['Сэтгүүл & Блог', 'Хяналтын Уншилт & Засах', 'Гадааг Хэл Орчуулагa', 'Хууль Бичвэр', 'Техникийн Бичвэр', 'Бүтээгдэхүүн Тайлбар', 'Уран Бичвэр', 'Товч Намтар (CV)', 'Бусад'],
        videoNames: ['Киноны Трейлер', 'Видео Тоглоомны Трейлер', 'Видео Эвлүүлэг', 'Богино Хэмжээний Зар Сурталчилгаа', '3Д Хүүхэлдэйн Кино', 'VFX', '2Д Хүүхэлдэйн Кино', 'Бусад'],
        programmingNames: ['Вэб Сайт Програмчлал', 'Хөөрөлдөгч Бот', 'Видео Тоглоом Хөгжүүлэх', 'Гар Утасны АПП Програмчлал', 'WordPress', 'Мэдээлэл Судлал & Тайлан', 'Цахим Аюулгуй Байдал', 'Бусад'],
        otherNames: ['Дасгал & Хоол Тэжээл Зөвлөгөө', 'Санхүүгийн Зөвлөгөө', 'Сэтгэл Зүйн Эмчилгээ', 'Бусад']
    },
    professions: {
        graphicDesignNames: 'График Дизайн',
        marketingNames: 'Онлайн Mаркетинг',
        soundNames: 'Дуу & Ая',
        writingNames: 'Бичиг & Орчуулагa',
        videoNames: 'Видео & Аниматион',
        programmingNames: 'Программ & Технологи',
        otherNames: 'Бусад'
    },
};


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map