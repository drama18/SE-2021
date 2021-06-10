(self["webpackChunkepoka_mentorship_program"] = self["webpackChunkepoka_mentorship_program"] || []).push([["default-src_app_services_auth_service_ts"],{

/***/ 6686:
/*!************************************************************************************!*\
  !*** ./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JWT_OPTIONS": () => (/* binding */ JWT_OPTIONS),
/* harmony export */   "JwtHelperService": () => (/* binding */ JwtHelperService),
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor),
/* harmony export */   "JwtModule": () => (/* binding */ JwtModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9412);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);







const JWT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('JWT_OPTIONS');

// tslint:disable:no-bitwise
class JwtHelperService {
    constructor(config = null) {
        this.tokenGetter = (config && config.tokenGetter) || function () { };
    }
    urlBase64Decode(str) {
        let output = str.replace(/-/g, "+").replace(/_/g, "/");
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += "==";
                break;
            }
            case 3: {
                output += "=";
                break;
            }
            default: {
                throw new Error("Illegal base64url string!");
            }
        }
        return this.b64DecodeUnicode(output);
    }
    // credits for decoder goes to https://github.com/atk
    b64decode(str) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        let output = "";
        str = String(str).replace(/=+$/, "");
        if (str.length % 4 === 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (
        // initialize result and counters
        let bc = 0, bs, buffer, idx = 0; 
        // get next character
        (buffer = str.charAt(idx++)); 
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer &&
            ((bs = bc % 4 ? bs * 64 + buffer : buffer),
                // and if not first of each 4 characters,
                // convert the first 8 bits to one ascii character
                bc++ % 4)
            ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
            : 0) {
            // try to find character in table (0-63, not found => -1)
            buffer = chars.indexOf(buffer);
        }
        return output;
    }
    b64DecodeUnicode(str) {
        return decodeURIComponent(Array.prototype.map
            .call(this.b64decode(str), (c) => {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
            .join(""));
    }
    decodeToken(token = this.tokenGetter()) {
        if (!token || token === "") {
            return null;
        }
        const parts = token.split(".");
        if (parts.length !== 3) {
            throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");
        }
        const decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error("Cannot decode the token.");
        }
        return JSON.parse(decoded);
    }
    getTokenExpirationDate(token = this.tokenGetter()) {
        let decoded;
        decoded = this.decodeToken(token);
        if (!decoded || !decoded.hasOwnProperty("exp")) {
            return null;
        }
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }
    isTokenExpired(token = this.tokenGetter(), offsetSeconds) {
        if (!token || token === "") {
            return true;
        }
        const date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (date === null) {
            return false;
        }
        return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
    }
    getAuthScheme(authScheme, request) {
        if (typeof authScheme === "function") {
            return authScheme(request);
        }
        return authScheme;
    }
}
JwtHelperService.ɵfac = function JwtHelperService_Factory(t) { return new (t || JwtHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JWT_OPTIONS)); };
JwtHelperService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtHelperService, factory: JwtHelperService.ɵfac });
JwtHelperService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [JWT_OPTIONS,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [JWT_OPTIONS]
            }] }]; }, null); })();

class JwtInterceptor {
    constructor(config, jwtHelper, document) {
        this.jwtHelper = jwtHelper;
        this.document = document;
        this.standardPorts = ["80", "443"];
        this.tokenGetter = config.tokenGetter;
        this.headerName = config.headerName || "Authorization";
        this.authScheme =
            config.authScheme || config.authScheme === ""
                ? config.authScheme
                : "Bearer ";
        this.allowedDomains = config.allowedDomains || [];
        this.disallowedRoutes = config.disallowedRoutes || [];
        this.throwNoTokenError = config.throwNoTokenError || false;
        this.skipWhenExpired = config.skipWhenExpired;
    }
    isAllowedDomain(request) {
        const requestUrl = new URL(request.url, this.document.location.origin);
        // If the host equals the current window origin,
        // the domain is allowed by default
        if (requestUrl.host === this.document.location.host) {
            return true;
        }
        // If not the current domain, check the allowed list
        const hostName = `${requestUrl.hostname}${requestUrl.port && !this.standardPorts.includes(requestUrl.port)
            ? ":" + requestUrl.port
            : ""}`;
        return (this.allowedDomains.findIndex((domain) => typeof domain === "string"
            ? domain === hostName
            : domain instanceof RegExp
                ? domain.test(hostName)
                : false) > -1);
    }
    isDisallowedRoute(request) {
        const requestedUrl = new URL(request.url, this.document.location.origin);
        return (this.disallowedRoutes.findIndex((route) => {
            if (typeof route === "string") {
                const parsedRoute = new URL(route, this.document.location.origin);
                return (parsedRoute.hostname === requestedUrl.hostname &&
                    parsedRoute.pathname === requestedUrl.pathname);
            }
            if (route instanceof RegExp) {
                return route.test(request.url);
            }
            return false;
        }) > -1);
    }
    handleInterception(token, request, next) {
        const authScheme = this.jwtHelper.getAuthScheme(this.authScheme, request);
        let tokenIsExpired = false;
        if (!token && this.throwNoTokenError) {
            throw new Error("Could not get token from tokenGetter function.");
        }
        if (this.skipWhenExpired) {
            tokenIsExpired = token ? this.jwtHelper.isTokenExpired(token) : true;
        }
        if (token && tokenIsExpired && this.skipWhenExpired) {
            request = request.clone();
        }
        else if (token) {
            request = request.clone({
                setHeaders: {
                    [this.headerName]: `${authScheme}${token}`,
                },
            });
        }
        return next.handle(request);
    }
    intercept(request, next) {
        if (!this.isAllowedDomain(request) || this.isDisallowedRoute(request)) {
            return next.handle(request);
        }
        const token = this.tokenGetter(request);
        if (token instanceof Promise) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(token).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((asyncToken) => {
                return this.handleInterception(asyncToken, request, next);
            }));
        }
        else {
            return this.handleInterception(token, request, next);
        }
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JWT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JwtHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });
JwtInterceptor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [JWT_OPTIONS,] }] },
    { type: JwtHelperService },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [JWT_OPTIONS]
            }] }, { type: JwtHelperService }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
            }] }]; }, null); })();

class JwtModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error("JwtModule is already loaded. It should only be imported in your application's main module.");
        }
    }
    static forRoot(options) {
        return {
            ngModule: JwtModule,
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HTTP_INTERCEPTORS,
                    useClass: JwtInterceptor,
                    multi: true,
                },
                options.jwtOptionsProvider || {
                    provide: JWT_OPTIONS,
                    useValue: options.config,
                },
                JwtHelperService,
            ],
        };
    }
}
JwtModule.ɵfac = function JwtModule_Factory(t) { return new (t || JwtModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JwtModule, 12)); };
JwtModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: JwtModule });
JwtModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
JwtModule.ctorParameters = () => [
    { type: JwtModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule
    }], function () { return [{ type: JwtModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }] }]; }, null); })();

/*
 * Public API Surface of angular-jwt
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=auth0-angular-jwt.js.map

/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ 6686);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);





const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtHelperService();
const TOKEN_KEY = 'jwt-token';
let AuthService = class AuthService {
    constructor(storage, http) {
        this.storage = storage;
        this.http = http;
        this.storage.create();
    }
    saveToken() {
        this.storage.set(TOKEN_KEY, "token");
    }
    getToken() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            var token;
            yield this.storage.get(TOKEN_KEY).then(res => { token = res; });
            return token;
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_auth_service_ts.js.map