(self["webpackChunkepoka_mentorship_program"] = self["webpackChunkepoka_mentorship_program"] || []).push([["src_app_mentor_home_home_module_ts"],{

/***/ 970:
/*!****************************************************!*\
  !*** ./src/app/mentor/home/home-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9265);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 6951:
/*!********************************************!*\
  !*** ./src/app/mentor/home/home.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 970);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 9265);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 9265:
/*!******************************************!*\
  !*** ./src/app/mentor/home/home.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9311);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 6337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HomePage = class HomePage {
    constructor() {
        this.weekday = ["SUN", "MON", "TUE", "WEN", "THU", "FRI", "SAT"];
        this.month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.dashboard = {
            studentsNumber: 10,
            pendingRequestNumber: 3,
            nrOfToDO: 4,
            nrOfThisWeekTasks: 3,
            currentCourses: [
                { Title: "C-Programming", Code: "CEN-110" },
                { Title: "Database Management System", Code: "CEN-200" },
                { Title: "Object Oriented Programming", Code: "CEN-320" },
            ],
            thisWeeksActivity: [
                { Code: "CEN-110", Text: "Something to be done 1", Time: new Date(2021, 5, 2, 20, 15) },
                { Code: "CEN-200", Text: "Something to be done 2", Time: new Date(2021, 5, 2, 20, 15) },
                { Code: "CEN-320", Text: "Something to be done 3", Time: new Date(2021, 5, 2, 20, 15) },
            ],
            toDoList: [
                { Title: "Send the homeworks",
                    Date: new Date(2021, 5, 2, 20, 15),
                    Time: "",
                    selected: true
                },
                { Title: "Collect the homeworks",
                    Date: new Date(2021, 5, 12, 20, 15),
                    Time: "",
                    selected: false
                },
                { Title: "Test the students",
                    Date: new Date(2021, 5, 21, 9, 15),
                    Time: "",
                    selected: false
                },
            ]
        };
    }
    ngOnInit() {
        this.dashboard.toDoList.forEach(element => {
            element.Time = element.Date.toLocaleTimeString(undefined, {
                hour: '2-digit',
                minute: '2-digit'
            });
        });
    }
};
HomePage.ctorParameters = () => [];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 6337:
/*!********************************************!*\
  !*** ./src/app/mentor/home/home.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".scroll {\n  overflow-x: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGx7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufSJdfQ== */");

/***/ }),

/***/ 9311:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mentor/home/home.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>    \n  <div class=\"container-fluid\">\n    <div class=\"d-sm-flex justify-content-between align-items-center mb-4\">\n        <h3 class=\"text-dark mb-0\" style=\"margin-bottom: 5px;\">Dashboard</h3><a class=\"btn btn-primary btn-sm\" role=\"button\" routerLink=\"/mentor/create-course\"><i class=\"fas fa-plus fa-sm text-white-50\"></i>&nbsp;Create a new course</a>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6 col-xl-3 mb-4\">\n            <div class=\"card shadow border-left-primary py-2\">\n                <div class=\"card-body\">\n                    <div class=\"row align-items-center no-gutters\">\n                        <div class=\"col mr-2\">\n                            <div class=\"text-uppercase text-primary font-weight-bold text-xs mb-1\"><span>Students Number</span></div>\n                            <div class=\"text-dark font-weight-bold h5 mb-0\"><span>{{ dashboard.studentsNumber }}</span></div>\n                        </div>\n                        <div class=\"col-auto\"><i class=\"fas fa-user fa-2x text-gray-300\"></i></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6 col-xl-3 mb-4\">\n            <div class=\"card shadow border-left-warning py-2\">\n                <div class=\"card-body\">\n                    <div class=\"row align-items-center no-gutters\">\n                        <div class=\"col mr-2\">\n                            <div class=\"text-uppercase text-warning font-weight-bold text-xs mb-1\"><span>Pending Requests</span></div>\n                            <div class=\"text-dark font-weight-bold h5 mb-0\"><span>{{ dashboard.pendingRequestNumber }}</span></div>\n                        </div>\n                        <div class=\"col-auto\"><i class=\"fas fa-user-plus fa-2x text-gray-300\"></i></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6 col-xl-3 mb-4\">\n            <div class=\"card shadow border-left-success py-2\">\n                <div class=\"card-body\">\n                    <div class=\"row align-items-center no-gutters\">\n                        <div class=\"col mr-2\">\n                            <div class=\"text-uppercase text-success font-weight-bold text-xs mb-1\"><span>To do tasks</span></div>\n                            <div class=\"text-dark font-weight-bold h5 mb-0\"><span>{{ dashboard.nrOfToDO }}</span></div>\n                        </div>\n                        <div class=\"col-auto\"><i class=\"fas fa-tasks fa-2x text-gray-300\"></i></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-6 col-xl-3 mb-4\">\n            <div class=\"card shadow border-left-info py-2\">\n                <div class=\"card-body\">\n                    <div class=\"row align-items-center no-gutters\">\n                        <div class=\"col mr-2\">\n                            <div class=\"text-uppercase text-info font-weight-bold text-xs mb-1\"><span>This week Tasks</span></div>\n                            <div class=\"row no-gutters align-items-center\">\n                                <div class=\"col-auto\">\n                                    <div class=\"text-dark font-weight-bold h5 mb-0 mr-3\"><span>{{ dashboard.nrOfThisWeekTasks }}</span></div>\n                                </div>\n                                \n                            </div>\n                        </div>\n                        <div class=\"col-auto\"><i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-7 col-xl-8\">\n            <div class=\"card shadow mb-4\">\n                <div class=\"card-header d-flex justify-content-between align-items-center\">\n                    <h6 class=\"text-primary font-weight-bold m-0\">Current Courses</h6>\n                </div>\n                <div class=\"card-body container-fluid py-2 scroll\">\n                  <div class=\"d-flex flex-row flex-nowrap\">\n                    <div *ngFor=\"let course of dashboard.currentCourses\" style=\"margin-right: 25px;\" class=\"card col-12\">\n                        <div class=\"card-body\">\n                            <div style=\"width: 100%; height: 150px\"><img src=\"assets/img/dogs/image3.jpeg\" style=\"max-height: 100%; margin-left: 50%; transform: translateX(-50%)\"></div>\n                            <hr>\n                            <div class=\"row\">\n                                <div class=\"col col-10\">\n                                    <h4 style=\"margin-top: 10px;font-size: 15px;\">{{ course.Title }}</h4>\n                                    <h6 style=\"margin-top: 10px;font-size: 12px; color: gray;\">{{ course.Code }}</h6>\n                                </div>\n                                <div class=\"col col-1\" style=\"position: relative;right: 0px;margin-top: 10px;margin-left: 10px;\"><a href=\"#\"><i class=\"fas fa-ellipsis-v\" style=\"color: var(--gray);\"></i></a></div>\n                            </div>\n                        </div>\n                    </div>\n                  </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6 mb-4\">\n            <div class=\"card shadow mb-4\">\n                <div class=\"card-header py-3\">\n                    <h6 class=\"text-primary font-weight-bold m-0\">This Week's Activity</h6>\n                </div>\n                <div class=\"card-body container-fluid py-2 scroll\">\n                  <div class=\"d-flex flex-row flex-nowrap\">\n                    <div *ngFor=\"let activity of dashboard.thisWeeksActivity\" style=\"margin-right: 25px;\" class=\"card col-12\">\n                        <div class=\"card-body\">\n                            <div style=\"text-align: center;color: var(--red);\"><span>{{ weekday[activity.Time.getDay()] }}</span>\n                                <p>{{ activity.Time.getDay() + \" \" + month[activity.Time.getMonth()] }}</p>\n                            </div>\n                            <hr style=\"margin: 6px;margin-right: 0px;margin-left: 0px;margin-top: 6px;margin-bottom: 10px;\">\n                            <h4 class=\"card-title\">{{ activity.Code }}</h4>\n                            <p class=\"card-text\">{{ activity.Text }}</p>\n                        </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card-footer\"><a class=\"btn btn-secondary btn-icon-split\" role=\"button\" style=\"margin-bottom: 10px;margin-right: 5px;margin-left: 5px;width: 100%;\"><span class=\"text-white-50 icon\"><i class=\"fas fa-users\"></i></span><span class=\"text-white text\">Setup a meeting</span></a></div>\n            </div>\n        </div>\n        <div class=\"col\">\n            <div class=\"card shadow mb-4\">\n                <div class=\"card-header py-3\">\n                    <h6 class=\"text-primary font-weight-bold m-0\">Todo List</h6>\n                </div>\n                <ul class=\"list-group list-group-flush\">\n                    <li *ngFor=\"let todo of dashboard.toDoList; let i = index\" class=\"list-group-item\">\n                        <div class=\"row align-items-center no-gutters\">\n                            <div class=\"col mr-2\">\n                                <h6 class=\"mb-0\"><strong>{{ todo.Title }}</strong></h6><span class=\"text-xs\">{{ todo.Date.getDate() + \" \" + month[todo.Date.getMonth()] + \" | \" + todo.Time }}</span>\n                            </div>\n                            <div class=\"col-auto\">\n                                <div class=\"custom-control custom-checkbox\"><input class=\"custom-control-input\" type=\"checkbox\" [id]=\"'formCheck-' + i\" [(ngModel)]=\"todo.selected\"><label class=\"custom-control-label\" [for]=\"'formCheck-' + i\"></label></div>\n                            </div>\n                        </div>\n                    </li>\n                </ul><a class=\"btn btn-primary btn-icon-split\" role=\"button\" style=\"border-radius: 0px;\"><span class=\"text-white text\">Add To-do Task</span></a>\n            </div>\n        </div>\n    </div>\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mentor_home_home_module_ts.js.map