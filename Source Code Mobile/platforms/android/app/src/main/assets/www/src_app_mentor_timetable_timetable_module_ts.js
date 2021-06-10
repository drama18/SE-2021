(self["webpackChunkepoka_mentorship_program"] = self["webpackChunkepoka_mentorship_program"] || []).push([["src_app_mentor_timetable_timetable_module_ts"],{

/***/ 2837:
/*!**************************************************************!*\
  !*** ./src/app/mentor/timetable/timetable-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimetablePageRoutingModule": () => (/* binding */ TimetablePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _timetable_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timetable.page */ 6261);




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

/***/ 9879:
/*!******************************************************!*\
  !*** ./src/app/mentor/timetable/timetable.module.ts ***!
  \******************************************************/
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
/* harmony import */ var _timetable_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timetable-routing.module */ 2837);
/* harmony import */ var _timetable_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timetable.page */ 6261);







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

/***/ 6261:
/*!****************************************************!*\
  !*** ./src/app/mentor/timetable/timetable.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimetablePage": () => (/* binding */ TimetablePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_timetable_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./timetable.page.html */ 4590);
/* harmony import */ var _timetable_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timetable.page.scss */ 3659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let TimetablePage = class TimetablePage {
    constructor() {
        this.mouseY = 0;
        this.mouseX = 0;
        this.menuShow = false;
        this.presentMenu = "";
        this.currentCourses = [
            { Title: "C-Programming", Code: "CEN-110", color: "red" },
            { Title: "Database Management System", Code: "CEN-200", color: "blue" },
            { Title: "Object Oriented Programming", Code: "CEN-320", color: "green" },
        ];
        this.list = document.getElementsByTagName("td");
    }
    ngOnInit() {
    }
    setTimetable(e, hour, day) {
        var i;
        for (i = 0; i < this.list.length; i++) {
            this.list[i].style.opacity = "100%";
        }
        if (this.presentMenu == hour + "-" + day)
            this.menuShow = !this.menuShow;
        else
            this.menuShow = true;
        if (this.presentMenu == "")
            this.menuShow = true;
        this.mouseY = e.clientY;
        this.mouseX = e.clientX;
        console.log(this.menuShow);
        document.getElementById(hour + "-" + day).style.opacity = "80%";
        this.presentMenu = hour + "-" + day;
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

/***/ 3659:
/*!******************************************************!*\
  !*** ./src/app/mentor/timetable/timetable.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("td {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWV0YWJsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKIiwiZmlsZSI6InRpbWV0YWJsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ 4590:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mentor/timetable/timetable.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"container-fluid\">\n    <h3 class=\"text-dark mb-1\">Timetable</h3>\n    <div class=\"table-responsive table-bordered\" style=\"margin-top: 30px;\">\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th style=\"width: 14%; text-align: center;\">\\</th>\n                    <th style=\"width: 14%;text-align: center;\">Monday</th>\n                    <th style=\"width: 14%;text-align: center;\">Tuesday</th>\n                    <th style=\"width: 14%;text-align: center;\">Wednesday</th>\n                    <th style=\"width: 14%;text-align: center;\">Thursday</th>\n                    <th style=\"width: 14%;text-align: center;\">Friday</th>\n                    <th style=\"width: 14%;text-align: center;\">Saturday</th>\n                </tr>\n            </thead>\n            <tbody style=\"background-color: black;\">\n                <tr>\n                    <td style=\"width: 14%;\">9:00</td>\n                    <td id=\"9-1\" style=\"width: 14%;\" (click)=\"setTimetable($event, 9, 1)\"></td>\n                    <td id=\"9-2\" style=\"width: 14%;\" (click)=\"setTimetable($event, 9, 2)\">Cell 1</td>\n                    <td id=\"9-3\" style=\"width: 14%;\" (click)=\"setTimetable($event, 9, 3)\">Cell 1</td>\n                    <td id=\"9-4\" style=\"width: 14%;\" (click)=\"setTimetable($event, 9, 4)\">Cell 1</td>\n                    <td id=\"9-5\" style=\"width: 14%;\" (click)=\"setTimetable($event, 9, 5)\">Cell 1</td>\n                    <td id=\"9-6\" style=\"width: 14%;\" (click)=\"setTimetable($event, 9, 6)\">Cell 1</td>\n                </tr>\n                <tr>\n                    <td style=\"width: 14%;\">10:00</td>\n                    <td id=\"10-1\" style=\"width: 14%;\" (click)=\"setTimetable($event, 10, 1)\"></td>\n                    <td id=\"10-2\" style=\"width: 14%;\" (click)=\"setTimetable($event, 10, 2)\">Cell 1</td>\n                    <td id=\"10-3\" style=\"width: 14%;\" (click)=\"setTimetable($event, 10, 3)\">Cell 1</td>\n                    <td id=\"10-4\" style=\"width: 14%;\" (click)=\"setTimetable($event, 10, 4)\">Cell 1</td>\n                    <td id=\"10-5\" style=\"width: 14%;\" (click)=\"setTimetable($event, 10, 5)\">Cell 1</td>\n                    <td id=\"10-6\" style=\"width: 14%;\" (click)=\"setTimetable($event, 10, 6)\">Cell 1</td>\n                </tr>\n                <tr>\n                    <td style=\"width: 14%;\">11:00</td>\n                    <td id=\"11-1\" style=\"width: 14%;\" (click)=\"setTimetable($event, 11, 1)\">Cell 1</td>\n                    <td id=\"11-2\" style=\"width: 14%;\" (click)=\"setTimetable($event, 11, 2)\">Cell 1</td>\n                    <td id=\"11-3\" style=\"width: 14%;\" (click)=\"setTimetable($event, 11, 3)\">Cell 1</td>\n                    <td id=\"11-4\" style=\"width: 14%;\" (click)=\"setTimetable($event, 11, 4)\">Cell 1</td>\n                    <td id=\"11-5\" style=\"width: 14%;\" (click)=\"setTimetable($event, 11, 5)\">Cell 1</td>\n                    <td id=\"11-6\" style=\"width: 14%;\" (click)=\"setTimetable($event, 11, 6)\">Cell 1</td>\n                </tr>\n                <tr>\n                    <td style=\"width: 14%;\">12:00</td>\n                    <td id=\"12-1\" style=\"width: 14%;\" (click)=\"setTimetable($event, 12, 1)\">Cell 1</td>\n                    <td id=\"12-2\" style=\"width: 14%;\" (click)=\"setTimetable($event, 12, 2)\">Cell 1</td>\n                    <td id=\"12-3\" style=\"width: 14%;\" (click)=\"setTimetable($event, 12, 3)\">Cell 1</td>\n                    <td id=\"12-4\" style=\"width: 14%;\" (click)=\"setTimetable($event, 12, 4)\">Cell 1</td>\n                    <td id=\"12-5\" style=\"width: 14%;\" (click)=\"setTimetable($event, 12, 5)\">Cell 1</td>\n                    <td id=\"12-6\" style=\"width: 14%;\" (click)=\"setTimetable($event, 12, 6)\">Cell 1</td>\n                </tr>\n                <tr>\n                    <td style=\"width: 14%;\">13:00</td>\n                    <td id=\"13-1\" style=\"width: 14%;\" (click)=\"setTimetable($event, 13, 1)\">Cell 1</td>\n                    <td id=\"13-2\" style=\"width: 14%;\" (click)=\"setTimetable($event, 13, 2)\">Cell 1</td>\n                    <td id=\"13-3\" style=\"width: 14%;\" (click)=\"setTimetable($event, 13, 3)\">Cell 1</td>\n                    <td id=\"13-4\" style=\"width: 14%;\" (click)=\"setTimetable($event, 13, 4)\">Cell 1</td>\n                    <td id=\"13-5\" style=\"width: 14%;\" (click)=\"setTimetable($event, 13, 5)\">Cell 1</td>\n                    <td id=\"13-6\" style=\"width: 14%;\" (click)=\"setTimetable($event, 13, 6)\">Cell 1</td>\n                </tr>\n                <tr>\n                    <td style=\"width: 14%;\">14:00</td>\n                    <td id=\"14-1\" style=\"width: 14%;\" (click)=\"setTimetable($event, 14, 1)\">Cell 1</td>\n                    <td id=\"14-2\" style=\"width: 14%;\" (click)=\"setTimetable($event, 14, 2)\">Cell 1</td>\n                    <td id=\"14-3\" style=\"width: 14%;\" (click)=\"setTimetable($event, 14, 3)\">Cell 1</td>\n                    <td id=\"14-4\" style=\"width: 14%;\" (click)=\"setTimetable($event, 14, 4)\">Cell 1</td>\n                    <td id=\"14-5\" style=\"width: 14%;\" (click)=\"setTimetable($event, 14, 5)\">Cell 1</td>\n                    <td id=\"14-6\" style=\"width: 14%;\" (click)=\"setTimetable($event, 14, 6)\">Cell 1</td>\n                </tr>\n                <tr>\n                    <td style=\"width: 14%;\">15:00</td>\n                    <td id=\"15-1\" style=\"width: 14%;\" (click)=\"setTimetable($event, 15, 1)\">Cell 1</td>\n                    <td id=\"15-2\" style=\"width: 14%;\" (click)=\"setTimetable($event, 15, 2)\">Cell 1</td>\n                    <td id=\"15-3\" style=\"width: 14%;\" (click)=\"setTimetable($event, 15, 3)\">Cell 1</td>\n                    <td id=\"15-4\" style=\"width: 14%;\" (click)=\"setTimetable($event, 15, 4)\">Cell 1</td>\n                    <td id=\"15-5\" style=\"width: 14%;\" (click)=\"setTimetable($event, 15, 5)\">Cell 1</td>\n                    <td id=\"15-6\" style=\"width: 14%;\" (click)=\"setTimetable($event, 15, 6)\">Cell 1</td>\n                </tr>\n                <tr>\n                    <td style=\"width: 14%;\">16:00</td>\n                    <td id=\"16-1\" style=\"width: 14%;\" (click)=\"setTimetable($event, 16, 1)\">Cell 1</td>\n                    <td id=\"16-2\" style=\"width: 14%;\" (click)=\"setTimetable($event, 16, 2)\">Cell 1</td>\n                    <td id=\"16-3\" style=\"width: 14%;\" (click)=\"setTimetable($event, 16, 3)\">Cell 1</td>\n                    <td id=\"16-4\" style=\"width: 14%;\" (click)=\"setTimetable($event, 16, 4)\">Cell 1</td>\n                    <td id=\"16-5\" style=\"width: 14%;\" (click)=\"setTimetable($event, 16, 5)\">Cell 1</td>\n                    <td id=\"16-6\" style=\"width: 14%;\" (click)=\"setTimetable($event, 16, 6)\">Cell 1</td>\n                </tr>\n                <tr>\n                    <td style=\"width: 14%;\">17:00</td>\n                    <td id=\"17-1\" style=\"width: 14%;\" (click)=\"setTimetable($event, 17, 1)\">Cell 1</td>\n                    <td id=\"17-2\" style=\"width: 14%;\" (click)=\"setTimetable($event, 17, 2)\">Cell 1</td>\n                    <td id=\"17-3\" style=\"width: 14%;\" (click)=\"setTimetable($event, 17, 3)\">Cell 1</td>\n                    <td id=\"17-4\" style=\"width: 14%;\" (click)=\"setTimetable($event, 17, 4)\">Cell 1</td>\n                    <td id=\"17-5\" style=\"width: 14%;\" (click)=\"setTimetable($event, 17, 5)\">Cell 1</td>\n                    <td id=\"17-6\" style=\"width: 14%;\" (click)=\"setTimetable($event, 17, 6)\">Cell 1</td>\n                </tr>\n                <tr>\n                    <td style=\"width: 14%;\">18:00</td>\n                    <td id=\"18-1\" style=\"width: 14%;\" (click)=\"setTimetable($event, 18, 1)\">Cell 1</td>\n                    <td id=\"18-2\" style=\"width: 14%;\" (click)=\"setTimetable($event, 18, 2)\">Cell 1</td>\n                    <td id=\"18-3\" style=\"width: 14%;\" (click)=\"setTimetable($event, 18, 3)\">Cell 1</td>\n                    <td id=\"18-4\" style=\"width: 14%;\" (click)=\"setTimetable($event, 18, 4)\">Cell 1</td>\n                    <td id=\"18-5\" style=\"width: 14%;\" (click)=\"setTimetable($event, 18, 5)\">Cell 1</td>\n                    <td id=\"18-6\" style=\"width: 14%;\" (click)=\"setTimetable($event, 18, 6)\">Cell 1</td>\n                </tr>\n                <tr>\n                    <td style=\"width: 14%;\">19:00</td>\n                    <td id=\"19-1\" style=\"width: 14%;\" (click)=\"setTimetable($event, 19, 1)\">Cell 1</td>\n                    <td id=\"19-2\" style=\"width: 14%;\" (click)=\"setTimetable($event, 19, 2)\">Cell 1</td>\n                    <td id=\"19-3\" style=\"width: 14%;\" (click)=\"setTimetable($event, 19, 3)\">Cell 1</td>\n                    <td id=\"19-4\" style=\"width: 14%;\" (click)=\"setTimetable($event, 19, 4)\">Cell 1</td>\n                    <td id=\"19-5\" style=\"width: 14%;\" (click)=\"setTimetable($event, 19, 5)\">Cell 1</td>\n                    <td id=\"19-6\" style=\"width: 14%;\" (click)=\"setTimetable($event, 19, 6)\">Cell 1</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n  </div>\n  <div *ngIf=\"menuShow\" class=\"dropdown\" style=\"position: absolute; width: 300px;\" [style.top.px]='mouseY - 70' [style.left.px]='mouseX'>\n    <ul class=\"dropdown-menu show\">\n      <li *ngFor=\"let course of currentCourses\" [style.backgroundColor]=\"course.color\" style=\"margin-bottom: 3px; border-radius: 2px; width: 96%; margin-left: 2%; text-align: left;\"><a class=\"dropdown-item\" style=\"color: white; padding: 0px; width: 100%;\">{{ course.Title }}</a></li>\n    </ul>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mentor_timetable_timetable_module_ts.js.map