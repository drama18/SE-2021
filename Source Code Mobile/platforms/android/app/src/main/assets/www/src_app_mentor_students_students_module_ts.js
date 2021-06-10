(self["webpackChunkepoka_mentorship_program"] = self["webpackChunkepoka_mentorship_program"] || []).push([["src_app_mentor_students_students_module_ts"],{

/***/ 3998:
/*!************************************************************!*\
  !*** ./src/app/mentor/students/students-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsPageRoutingModule": () => (/* binding */ StudentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _students_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./students.page */ 8788);




const routes = [
    {
        path: '',
        component: _students_page__WEBPACK_IMPORTED_MODULE_0__.StudentsPage
    }
];
let StudentsPageRoutingModule = class StudentsPageRoutingModule {
};
StudentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StudentsPageRoutingModule);



/***/ }),

/***/ 5999:
/*!****************************************************!*\
  !*** ./src/app/mentor/students/students.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsPageModule": () => (/* binding */ StudentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _students_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./students-routing.module */ 3998);
/* harmony import */ var _students_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./students.page */ 8788);







let StudentsPageModule = class StudentsPageModule {
};
StudentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _students_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentsPageRoutingModule
        ],
        declarations: [_students_page__WEBPACK_IMPORTED_MODULE_1__.StudentsPage]
    })
], StudentsPageModule);



/***/ }),

/***/ 8788:
/*!**************************************************!*\
  !*** ./src/app/mentor/students/students.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsPage": () => (/* binding */ StudentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_students_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./students.page.html */ 5609);
/* harmony import */ var _students_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./students.page.scss */ 9147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let StudentsPage = class StudentsPage {
    constructor() {
        this.studentsList = [
            {
                Name: "John Mayer",
                Department: "Computer Engineering",
                Degree: "Bachelor",
                CourseNumber: 3,
                StartDate: new Date(2021, 5, 29)
            },
            {
                Name: "John Smith",
                Department: "Architecture",
                Degree: "Bachelor",
                CourseNumber: 6,
                StartDate: new Date(2021, 9, 9)
            },
            {
                Name: "James Bond",
                Department: "Electronic Engineering",
                Degree: "Master",
                CourseNumber: 1,
                StartDate: new Date(2021, 1, 2)
            },
        ];
        this.studentsRequests = [
            {
                Name: "Test Test",
                Department: "Architecture",
                Degree: "Bachelor",
                CourseNumber: 6,
            },
            {
                Name: "Test Test",
                Department: "Electronic Engineering",
                Degree: "Master",
                CourseNumber: 1,
            },
        ];
    }
    ngOnInit() {
    }
};
StudentsPage.ctorParameters = () => [];
StudentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-students',
        template: _raw_loader_students_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_students_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StudentsPage);



/***/ }),

/***/ 9147:
/*!****************************************************!*\
  !*** ./src/app/mentor/students/students.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 5609:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mentor/students/students.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"container-fluid\">\n    <h3 class=\"text-dark mb-4\">Students</h3>\n    <div class=\"card shadow\" style=\"margin-bottom: 20px;\">\n        <div class=\"card-header py-3\">\n            <p class=\"text-primary m-0 font-weight-bold\">Students List</p>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive table mt-2\" id=\"dataTable\" role=\"grid\" aria-describedby=\"dataTable_info\">\n                <table class=\"table my-0\" id=\"dataTable\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Department</th>\n                            <th>Degree</th>\n                            <th>Courses</th>\n                            <th>Start date</th>\n                            <th>Send Mail</th>\n                            <th>Remove Student</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let student of studentsList\">\n                            <td><img class=\"rounded-circle mr-2\" width=\"30\" height=\"30\" src=\"assets/img/avatars/avatar1.jpeg\">{{ student.Name }}</td>\n                            <td>{{ student.Department }}</td>\n                            <td>{{ student.Degree }}</td>\n                            <td>{{ student.CourseNumber }}</td>\n                            <td>{{ student.StartDate.getFullYear() }}/{{ student.StartDate.getMonth() + 1 }}/{{ student.StartDate.getDate() }}</td>\n                            <td><a class=\"btn btn-info btn-circle ml-1\" role=\"button\"><i class=\"fas fa-envelope text-white\"></i></a></td>\n                            <td><a class=\"btn btn-danger btn-circle ml-1\" role=\"button\"><i class=\"fas fa-trash text-white\"></i></a></td>\n                        </tr>\n                    </tbody>\n                    <tfoot>\n                        <tr></tr>\n                    </tfoot>\n                </table>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 align-self-center\">\n                    <p id=\"dataTable_info\" class=\"dataTables_info\" role=\"status\" aria-live=\"polite\">Total of {{ studentsList.length }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"card shadow\" style=\"margin-bottom: 20px;\">\n        <div class=\"card-header py-3\">\n            <p class=\"text-primary m-0 font-weight-bold\">Student Requests</p>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"table-responsive table mt-2\" id=\"dataTable-1\" role=\"grid\" aria-describedby=\"dataTable_info\">\n                <table class=\"table my-0\" id=\"dataTable\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Department</th>\n                            <th>Degree</th>\n                            <th>Courses</th>\n                            <th>Accept</th>\n                            <th>Decline</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let student of studentsRequests\">\n                            <td><img class=\"rounded-circle mr-2\" width=\"30\" height=\"30\" src=\"assets/img/avatars/avatar1.jpeg\">{{ student.Name }}</td>\n                            <td>{{ student.Department }}</td>\n                            <td>{{ student.Degree }}</td>\n                            <td>{{ student.CourseNumber }}</td>\n                            <td><a class=\"btn btn-success btn-circle ml-1\" role=\"button\"><i class=\"fas fa-check text-white\"></i></a></td>\n                            <td><a class=\"btn btn-danger btn-circle ml-1\" role=\"button\"><i class=\"fas fa-trash text-white\"></i></a></td>\n                        </tr>\n                    </tbody>\n                    <tfoot>\n                        <tr></tr>\n                    </tfoot>\n                </table>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 align-self-center\">\n                    <p id=\"dataTable_info\" class=\"dataTables_info\" role=\"status\" aria-live=\"polite\">Total of {{ studentsRequests.length }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mentor_students_students_module_ts.js.map