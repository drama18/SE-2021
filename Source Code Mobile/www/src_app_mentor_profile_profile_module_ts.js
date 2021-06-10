(self["webpackChunkepoka_mentorship_program"] = self["webpackChunkepoka_mentorship_program"] || []).push([["src_app_mentor_profile_profile_module_ts"],{

/***/ 330:
/*!**********************************************************!*\
  !*** ./src/app/mentor/profile/profile-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 6207);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 1990:
/*!**************************************************!*\
  !*** ./src/app/mentor/profile/profile.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 330);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 6207);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 6207:
/*!************************************************!*\
  !*** ./src/app/mentor/profile/profile.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 4088);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 3162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ProfilePage = class ProfilePage {
    constructor() {
        this.profile = {
            picture: "",
            biography: "This is a text"
        };
    }
    ngOnInit() {
    }
};
ProfilePage.ctorParameters = () => [];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 3162:
/*!**************************************************!*\
  !*** ./src/app/mentor/profile/profile.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 4088:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mentor/profile/profile.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"container-fluid\">\n    <h3 class=\"text-dark mb-4\">Profile</h3>\n    <div class=\"row mb-3\">\n        <div class=\"col-lg-4\">\n            <div class=\"card mb-3\">\n                <div class=\"card-body text-center shadow\"><img class=\"rounded-circle mb-3 mt-4\" src=\"assets/img/dogs/image2.jpeg\" width=\"160\" height=\"160\">\n                    <div class=\"mb-3\"><button class=\"btn btn-primary btn-sm\" type=\"button\">Change Photo</button></div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-8\">\n            <div class=\"row mb-3 d-none\">\n                <div class=\"col\">\n                    <div class=\"card text-white bg-primary shadow\">\n                        <div class=\"card-body\">\n                            <div class=\"row mb-2\">\n                                <div class=\"col\">\n                                    <p class=\"m-0\">Peformance</p>\n                                    <p class=\"m-0\"><strong>65.2%</strong></p>\n                                </div>\n                                <div class=\"col-auto\"><i class=\"fas fa-rocket fa-2x\"></i></div>\n                            </div>\n                            <p class=\"text-white-50 small m-0\"><i class=\"fas fa-arrow-up\"></i>&nbsp;5% since last month</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col\">\n                    <div class=\"card text-white bg-success shadow\">\n                        <div class=\"card-body\">\n                            <div class=\"row mb-2\">\n                                <div class=\"col\">\n                                    <p class=\"m-0\">Peformance</p>\n                                    <p class=\"m-0\"><strong>65.2%</strong></p>\n                                </div>\n                                <div class=\"col-auto\"><i class=\"fas fa-rocket fa-2x\"></i></div>\n                            </div>\n                            <p class=\"text-white-50 small m-0\"><i class=\"fas fa-arrow-up\"></i>&nbsp;5% since last month</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col\">\n                    <div class=\"card shadow\">\n                        <div class=\"card-header py-3\">\n                            <p class=\"text-primary m-0 font-weight-bold\">Change Biography</p>\n                        </div>\n                        <div class=\"card-body\">\n                            <form>\n                                <div class=\"form-group\"><label for=\"address\"><strong>Biography</strong></label><textarea class=\"form-control\" id=\"signature\" rows=\"4\" name=\"signature\" [(ngModel)]=\"profile.biography\"></textarea></div>\n                                <div class=\"form-group\"><button class=\"btn btn-primary btn-sm\" type=\"submit\">Save Changes</button></div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mentor_profile_profile_module_ts.js.map