(self["webpackChunkepoka_mentorship_program"] = self["webpackChunkepoka_mentorship_program"] || []).push([["src_app_student_timetable_timetable_module_ts"],{

/***/ 2571:
/*!***************************************************************!*\
  !*** ./src/app/student/timetable/timetable-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimetablePageRoutingModule": () => (/* binding */ TimetablePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _timetable_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timetable.page */ 5464);




const routes = [
    {
        path: '',
        component: _timetable_page__WEBPACK_IMPORTED_MODULE_0__.TimetablePage
    }
];
let TimetablePageRoutingModule = class TimetablePageRoutingModule {
};
TimetablePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TimetablePageRoutingModule);



/***/ }),

/***/ 3737:
/*!*******************************************************!*\
  !*** ./src/app/student/timetable/timetable.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimetablePageModule": () => (/* binding */ TimetablePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _timetable_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timetable-routing.module */ 2571);
/* harmony import */ var _timetable_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timetable.page */ 5464);







let TimetablePageModule = class TimetablePageModule {
};
TimetablePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _timetable_routing_module__WEBPACK_IMPORTED_MODULE_0__.TimetablePageRoutingModule
        ],
        declarations: [_timetable_page__WEBPACK_IMPORTED_MODULE_1__.TimetablePage]
    })
], TimetablePageModule);



/***/ }),

/***/ 5464:
/*!*****************************************************!*\
  !*** ./src/app/student/timetable/timetable.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimetablePage": () => (/* binding */ TimetablePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_timetable_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./timetable.page.html */ 1178);
/* harmony import */ var _timetable_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timetable.page.scss */ 4586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let TimetablePage = class TimetablePage {
    constructor() { }
    ngOnInit() {
    }
};
TimetablePage.ctorParameters = () => [];
TimetablePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-timetable',
        template: _raw_loader_timetable_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_timetable_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TimetablePage);



/***/ }),

/***/ 4586:
/*!*******************************************************!*\
  !*** ./src/app/student/timetable/timetable.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1ldGFibGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 1178:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/student/timetable/timetable.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>timetable</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_student_timetable_timetable_module_ts.js.map