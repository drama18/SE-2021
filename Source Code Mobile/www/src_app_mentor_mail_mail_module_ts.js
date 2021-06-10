(self["webpackChunkepoka_mentorship_program"] = self["webpackChunkepoka_mentorship_program"] || []).push([["src_app_mentor_mail_mail_module_ts"],{

/***/ 5986:
/*!****************************************************!*\
  !*** ./src/app/mentor/mail/mail-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailPageRoutingModule": () => (/* binding */ MailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _mail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mail.page */ 886);




const routes = [
    {
        path: '',
        component: _mail_page__WEBPACK_IMPORTED_MODULE_0__.MailPage
    }
];
let MailPageRoutingModule = class MailPageRoutingModule {
};
MailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MailPageRoutingModule);



/***/ }),

/***/ 4643:
/*!********************************************!*\
  !*** ./src/app/mentor/mail/mail.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailPageModule": () => (/* binding */ MailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _mail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mail-routing.module */ 5986);
/* harmony import */ var _mail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mail.page */ 886);







let MailPageModule = class MailPageModule {
};
MailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mail_routing_module__WEBPACK_IMPORTED_MODULE_0__.MailPageRoutingModule
        ],
        declarations: [_mail_page__WEBPACK_IMPORTED_MODULE_1__.MailPage]
    })
], MailPageModule);



/***/ }),

/***/ 886:
/*!******************************************!*\
  !*** ./src/app/mentor/mail/mail.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailPage": () => (/* binding */ MailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_mail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mail.page.html */ 4439);
/* harmony import */ var _mail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mail.page.scss */ 1384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let MailPage = class MailPage {
    constructor() { }
    ngOnInit() {
    }
};
MailPage.ctorParameters = () => [];
MailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-mail',
        template: _raw_loader_mail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MailPage);



/***/ }),

/***/ 1384:
/*!********************************************!*\
  !*** ./src/app/mentor/mail/mail.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 4439:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mentor/mail/mail.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"container-fluid\">\n    <h3 class=\"text-dark mb-1\">Mail</h3>\n    <div style=\"width: 89%;max-width: 600px;margin: auto; margin-top: 30px;\">\n        <div class=\"input-group\" style=\"border-radius: 7px;border: 1px solid rgb(211,211,211);\">\n            <div class=\"input-group-prepend\" style=\"border-style: none;\"><span class=\"input-group-text\" style=\"border-style: none;\">To:</span></div><input class=\"form-control\" type=\"text\" style=\"border-radius: 0px;border-style: none;\">\n        </div>\n        <div class=\"input-group\" style=\"margin-top: 15px;border-radius: 7px;border: 1px solid rgb(211,211,211);margin-bottom: 15px;\">\n            <div class=\"input-group-prepend\" style=\"border-style: none;\"><span class=\"input-group-text\" style=\"border-style: none;\">Subject:</span></div><input class=\"form-control\" type=\"text\" style=\"border-radius: 0px;border-style: none;\">\n        </div><textarea placeholder=\"Message\" style=\"width: 100%;height: 200px;\"></textarea><button class=\"btn btn-primary\" type=\"button\" style=\"height: 38px;width: 100px;margin-top: 10px;\">Send</button>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mentor_mail_mail_module_ts.js.map