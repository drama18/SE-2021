(self["webpackChunkepoka_mentorship_program"] = self["webpackChunkepoka_mentorship_program"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'mentor/home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mentor_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mentor/home/home.module */ 6951)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'mentor/profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mentor_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mentor/profile/profile.module */ 1990)).then(m => m.ProfilePageModule)
    },
    {
        path: 'mentor/students',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mentor_students_students_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mentor/students/students.module */ 5999)).then(m => m.StudentsPageModule)
    },
    {
        path: 'mentor/timetable',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mentor_timetable_timetable_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mentor/timetable/timetable.module */ 9879)).then(m => m.TimetablePageModule)
    },
    {
        path: 'mentor/courses',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mentor_courses_courses_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mentor/courses/courses.module */ 788)).then(m => m.CoursesPageModule)
    },
    {
        path: 'mentor/achievements',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mentor_achievements_achievements_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mentor/achievements/achievements.module */ 524)).then(m => m.AchievementsPageModule)
    },
    {
        path: 'mentor/create-course',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mentor_create-course_create-course_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mentor/create-course/create-course.module */ 8074)).then(m => m.CreateCoursePageModule)
    },
    {
        path: 'mentor/mail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mentor_mail_mail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mentor/mail/mail.module */ 4643)).then(m => m.MailPageModule)
    },
    {
        path: 'student/courses',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_student_courses_courses_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./student/courses/courses.module */ 6259)).then(m => m.CoursesPageModule)
    },
    {
        path: 'student/mentor',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_student_mentor_mentor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./student/mentor/mentor.module */ 7231)).then(m => m.MentorPageModule)
    },
    {
        path: 'student/request-appointment',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_student_request-appointment_request-appointment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./student/request-appointment/request-appointment.module */ 7175)).then(m => m.RequestAppointmentPageModule)
    },
    {
        path: 'student/timetable',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_student_timetable_timetable_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./student/timetable/timetable.module */ 3737)).then(m => m.TimetablePageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_auth_service_ts"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./register/register.module */ 8723)).then(m => m.RegisterPageModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_forgot-password_forgot-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forgot-password/forgot-password.module */ 7157)).then(m => m.ForgotPasswordPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.showSideBar = false;
    }
    showNavbar() {
        if (this.router.url === '/'
            || this.router.url === '/home'
            || this.router.url === '/login'
            || this.router.url === '/register'
            || this.router.url === '/forgot-password')
            return false;
        return true;
    }
    changeSideBarState() {
        this.showSideBar = !this.showSideBar;
    }
    sideBarDisappear() {
        this.showSideBar = false;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 4925);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);









let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.IonicStorageModule.forRoot()],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-header *ngIf=\"showNavbar()\" style=\"height: 4.375rem;\">\n      <nav class=\"navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top\">\n        <div class=\"container-fluid\"><button class=\"btn btn-link d-inline-block rounded-circle mr-3\" id=\"sidebarToggleTop\" type=\"button\" (click)=\"changeSideBarState()\"><i class=\"fas fa-bars\"></i></button>\n            <ul class=\"navbar-nav flex-nowrap ml-auto\">\n                <li class=\"nav-item dropdown no-arrow mx-1\">\n                    <div class=\"nav-item dropdown no-arrow\"><a class=\"dropdown-toggle nav-link\" aria-expanded=\"false\" data-toggle=\"dropdown\" href=\"#\"><span class=\"badge badge-danger badge-counter\">3+</span><i class=\"fas fa-bell fa-fw\"></i></a>\n                        <div class=\"dropdown-menu dropdown-menu-right dropdown-list animated--grow-in\">\n                            <h6 class=\"dropdown-header\">alerts center</h6><a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                                <div class=\"mr-3\">\n                                    <div class=\"bg-primary icon-circle\"><i class=\"fas fa-file-alt text-white\"></i></div>\n                                </div>\n                                <div><span class=\"small text-gray-500\">December 12, 2019</span>\n                                    <p>A new monthly report is ready to download!</p>\n                                </div>\n                            </a><a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                                <div class=\"mr-3\">\n                                    <div class=\"bg-success icon-circle\"><i class=\"fas fa-donate text-white\"></i></div>\n                                </div>\n                                <div><span class=\"small text-gray-500\">December 7, 2019</span>\n                                    <p>$290.29 has been deposited into your account!</p>\n                                </div>\n                            </a><a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                                <div class=\"mr-3\">\n                                    <div class=\"bg-warning icon-circle\"><i class=\"fas fa-exclamation-triangle text-white\"></i></div>\n                                </div>\n                                <div><span class=\"small text-gray-500\">December 2, 2019</span>\n                                    <p>Spending Alert: We've noticed unusually high spending for your account.</p>\n                                </div>\n                            </a><a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Show All Alerts</a>\n                        </div>\n                    </div>\n                </li>\n                <li class=\"nav-item dropdown no-arrow mx-1\">\n                    <div class=\"nav-item dropdown no-arrow\"><a class=\"dropdown-toggle nav-link\" aria-expanded=\"false\" data-toggle=\"dropdown\" href=\"#\"><span class=\"badge badge-danger badge-counter\">7</span><i class=\"fas fa-envelope fa-fw\"></i></a>\n                        <div class=\"dropdown-menu dropdown-menu-right dropdown-list animated--grow-in\">\n                            <h6 class=\"dropdown-header\">alerts center</h6><a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                                <div class=\"dropdown-list-image mr-3\"><img class=\"rounded-circle\" src=\"assets/img/avatars/avatar4.jpeg\">\n                                    <div class=\"bg-success status-indicator\"></div>\n                                </div>\n                                <div class=\"font-weight-bold\">\n                                    <div class=\"text-truncate\"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>\n                                    <p class=\"small text-gray-500 mb-0\">Emily Fowler - 58m</p>\n                                </div>\n                            </a><a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                                <div class=\"dropdown-list-image mr-3\"><img class=\"rounded-circle\" src=\"assets/img/avatars/avatar2.jpeg\">\n                                    <div class=\"status-indicator\"></div>\n                                </div>\n                                <div class=\"font-weight-bold\">\n                                    <div class=\"text-truncate\"><span>I have the photos that you ordered last month!</span></div>\n                                    <p class=\"small text-gray-500 mb-0\">Jae Chun - 1d</p>\n                                </div>\n                            </a><a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                                <div class=\"dropdown-list-image mr-3\"><img class=\"rounded-circle\" src=\"assets/img/avatars/avatar3.jpeg\">\n                                    <div class=\"bg-warning status-indicator\"></div>\n                                </div>\n                                <div class=\"font-weight-bold\">\n                                    <div class=\"text-truncate\"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>\n                                    <p class=\"small text-gray-500 mb-0\">Morgan Alvarez - 2d</p>\n                                </div>\n                            </a><a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\n                                <div class=\"dropdown-list-image mr-3\"><img class=\"rounded-circle\" src=\"assets/img/avatars/avatar5.jpeg\">\n                                    <div class=\"bg-success status-indicator\"></div>\n                                </div>\n                                <div class=\"font-weight-bold\">\n                                    <div class=\"text-truncate\"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>\n                                    <p class=\"small text-gray-500 mb-0\">Chicken the Dog · 2w</p>\n                                </div>\n                            </a><a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Show All Alerts</a>\n                        </div>\n                    </div>\n                    <div class=\"shadow dropdown-list dropdown-menu dropdown-menu-right\" aria-labelledby=\"alertsDropdown\"></div>\n                </li>\n                <div class=\"d-none d-sm-block topbar-divider\"></div>\n                <li class=\"nav-item dropdown no-arrow\">\n                    <div class=\"nav-item dropdown no-arrow\"><a class=\"dropdown-toggle nav-link\" aria-expanded=\"false\" data-toggle=\"dropdown\" href=\"#\"><span class=\"d-none d-lg-inline mr-2 text-gray-600 small\">Valerie Luna</span><img class=\"border rounded-circle img-profile\" src=\"assets/img/avatars/avatar1.jpeg\"></a>\n                        <div class=\"dropdown-menu shadow dropdown-menu-right animated--grow-in\"><a class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>&nbsp;Profile</a><a class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i>&nbsp;Settings</a><a class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-list fa-sm fa-fw mr-2 text-gray-400\"></i>&nbsp;Activity log</a>\n                            <div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\"><i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>&nbsp;Logout</a>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </nav>\n  </ion-header>\n  \n    <div id=\"wrapper\">\n        <nav *ngIf=\"showSideBar\" class=\"navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0\" style=\"z-index: 3;\">\n            <div class=\"container-fluid d-flex flex-column p-0\"><a class=\"navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0\" href=\"#\">\n                    <div class=\"sidebar-brand-icon rotate-n-15\" style=\"transform: rotate(-1deg);transform-origin: 0;\"><img src=\"assets/img/logo_2.png\" style=\"transform: rotate(2deg);\"></div>\n                    <div class=\"sidebar-brand-text mx-3\"><span style=\"font-size: 13px;\">Epoka university</span></div>\n                </a>\n                <hr class=\"sidebar-divider my-0\">\n                <ul class=\"navbar-nav text-light\" id=\"accordionSidebar\">\n                    <li class=\"nav-item\" style=\"font-size: 24px;\">\n                        <a class=\"nav-link\" routerLink=\"mentor/home\"><i class=\"fa fa-home\"></i><span>Home</span></a>\n                        <a class=\"nav-link\" routerLink=\"mentor/profile\"><i class=\"fa fa-user\"></i><span>Profile</span></a>\n                        <a class=\"nav-link\" routerLink=\"mentor/courses\"><i class=\"fa fa-file\"></i><span>Courses</span></a>\n                        <a class=\"nav-link\" routerLink=\"mentor/students\"><i class=\"fa fa-users\"></i><span>Students</span></a>\n                        <a class=\"nav-link\" routerLink=\"mentor/timetable\"><i class=\"fas fa-clock\"></i><span>Timetable</span></a>\n                        <a class=\"nav-link\" routerLink=\"mentor/achievements\"><i class=\"fas fa-certificate\"></i><span>Achievements</span></a>\n                    </li>\n                </ul>\n                <div class=\"text-center d-none d-md-inline\"><button class=\"btn rounded-circle border-0\" id=\"sidebarToggle\" type=\"button\"></button></div>\n            </div>\n        </nav>\n      <div class=\"d-flex flex-column\" id=\"content-wrapper\" (click)=\"sideBarDisappear()\">\n          <div id=\"content\">\n              <ion-router-outlet style=\"position: absolute;\" [style.top.rem]=\"showNavbar()? 4.375 : 0\"></ion-router-outlet>\n          </div>\n      </div>\n    </div>\n\n</ion-app>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map