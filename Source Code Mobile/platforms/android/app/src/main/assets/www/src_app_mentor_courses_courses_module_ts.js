(self["webpackChunkepoka_mentorship_program"] = self["webpackChunkepoka_mentorship_program"] || []).push([["src_app_mentor_courses_courses_module_ts"],{

/***/ 1903:
/*!**********************************************************!*\
  !*** ./src/app/mentor/courses/courses-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesPageRoutingModule": () => (/* binding */ CoursesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _courses_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses.page */ 9442);




const routes = [
    {
        path: '',
        component: _courses_page__WEBPACK_IMPORTED_MODULE_0__.CoursesPage
    }
];
let CoursesPageRoutingModule = class CoursesPageRoutingModule {
};
CoursesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoursesPageRoutingModule);



/***/ }),

/***/ 788:
/*!**************************************************!*\
  !*** ./src/app/mentor/courses/courses.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesPageModule": () => (/* binding */ CoursesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _courses_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses-routing.module */ 1903);
/* harmony import */ var _courses_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses.page */ 9442);







let CoursesPageModule = class CoursesPageModule {
};
CoursesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _courses_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoursesPageRoutingModule
        ],
        declarations: [_courses_page__WEBPACK_IMPORTED_MODULE_1__.CoursesPage]
    })
], CoursesPageModule);



/***/ }),

/***/ 9442:
/*!************************************************!*\
  !*** ./src/app/mentor/courses/courses.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesPage": () => (/* binding */ CoursesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_courses_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./courses.page.html */ 5271);
/* harmony import */ var _courses_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courses.page.scss */ 6137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let CoursesPage = class CoursesPage {
    constructor() {
        this.currentCourses = [
            { Title: "C-Programming", Code: "CEN-110" },
            { Title: "Database Management System", Code: "CEN-110" },
            { Title: "Object Oriented Programming", Code: "CEN-110" }
        ];
        this.completedCourses = [
            { Title: "Data Structure", Code: "CEN-110" },
            { Title: "Software Engineering", Code: "CEN-110" },
            { Title: "C-Programming", Code: "CEN-110" }
        ];
    }
    ngOnInit() {
    }
};
CoursesPage.ctorParameters = () => [];
CoursesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-courses',
        template: _raw_loader_courses_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_courses_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CoursesPage);



/***/ }),

/***/ 6137:
/*!**************************************************!*\
  !*** ./src/app/mentor/courses/courses.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".scroll {\n  overflow-x: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXJzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJjb3Vyc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGx7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufSJdfQ== */");

/***/ }),

/***/ 5271:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mentor/courses/courses.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"container-fluid\">\n    <div class=\"d-sm-flex justify-content-between align-items-center mb-4\">\n        <h3 class=\"text-dark mb-1\">Courses</h3>\n        <a class=\"btn btn-primary btn-sm\" role=\"button\" href=\"#\"><i class=\"fas fa-plus fa-sm text-white-50\"></i>&nbsp;Add Course</a>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-7 col-xl-8\">\n            <div class=\"card shadow mb-4\">\n                <div class=\"card-header d-flex justify-content-between align-items-center\">\n                    <h6 class=\"text-primary font-weight-bold m-0\">Currently enrolled Courses</h6>\n                </div>\n                <div class=\"card-body container-fluid py-2 scroll\">\n                    <div class=\"d-flex flex-row flex-nowrap\">\n                        <div *ngFor=\"let course of currentCourses\" style=\"margin-right: 25px;\" class=\"card col-12\">\n                            <div class=\"card-body\">\n                                <div style=\"width: 100%; height: 150px\"><img src=\"assets/img/dogs/image3.jpeg\" style=\"max-height: 100%; margin-left: 50%; transform: translateX(-50%)\"></div>\n                                <hr>\n                                <div class=\"row\">\n                                    <div class=\"col col-10\">\n                                        <h4 style=\"margin-top: 10px;font-size: 15px;\">{{ course.Title }}</h4>\n                                        <h6 style=\"margin-top: 10px;font-size: 12px; color: gray;\">{{ course.Code }}</h6>\n                                    </div>\n                                    <div class=\"col col-1\" style=\"position: relative;right: 0px;margin-top: 10px;margin-left: 10px;\"><a href=\"#\"><i class=\"fas fa-ellipsis-v\" style=\"color: var(--gray);\"></i></a></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-7 col-xl-8\">\n            <div class=\"card shadow mb-4\">\n                <div class=\"card-header d-flex justify-content-between align-items-center\">\n                    <h6 class=\"text-primary font-weight-bold m-0\">Completed Courses</h6>\n                </div>\n                <div class=\"card-body container-fluid py-2 scroll\">\n                    <div class=\"d-flex flex-row flex-nowrap\">\n                        <div *ngFor=\"let course of completedCourses\" style=\"margin-right: 25px;\" class=\"card col-12\">\n                            <div class=\"card-body\">\n                                <div style=\"width: 100%; height: 150px\"><img src=\"assets/img/dogs/image3.jpeg\" style=\"max-height: 100%; margin-left: 50%; transform: translateX(-50%)\"></div>\n                                <hr>\n                                <div class=\"row\">\n                                    <div class=\"col col-10\">\n                                        <h4 style=\"margin-top: 10px;font-size: 15px;\">{{ course.Title }}</h4>\n                                        <h6 style=\"margin-top: 10px;font-size: 12px; color: gray;\">{{ course.Code }}</h6>\n                                    </div>\n                                    <div class=\"col col-1\" style=\"position: relative;right: 0px;margin-top: 10px;margin-left: 10px;\"><a href=\"#\"><i class=\"fas fa-ellipsis-v\" style=\"color: var(--gray);\"></i></a></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mentor_courses_courses_module_ts.js.map