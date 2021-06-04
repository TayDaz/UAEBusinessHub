(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 17, vars: 0, consts: [[1, "about"], [1, "row"], [1, "col-md-3"], ["src", "assets/image/UAElogo.png", "alt", "Logo", 1, "logo1"], [1, "col-md-6"], [1, "about-heading"], [2, "padding-top", "10px"], [1, "about-para"], ["src", "assets/image/logo2.png", "alt", "Logo", 1, "logo2"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "UAE Business Hub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "is a unique concept in UAE,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "featuring the team of experts with experience of over 20 years in all the fields of business set-up, structuring and operations globally should it be legal, accounting, tax or wealth management.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "We protect you from one-sided advisory prevalent in the market and make sure you grow your wealth in any transaction. We are based in UAE and have developed a deep network that helps us to excel in our mission of assisting you to achieve objectives in UAE and globally.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about[_ngcontent-%COMP%]\r\n{\r\n    padding-top: 15px;\r\n    \r\n}\r\n.about-heading[_ngcontent-%COMP%]\r\n{\r\n    padding-top: 90px;\r\n    padding-left: 30px;\r\n    font-family: RalewayBold;\r\n    font-size: 40px;\r\n    color: #ee6024;\r\n}\r\n.about-para[_ngcontent-%COMP%]\r\n{\r\n    padding-left: 30px;\r\n    color: #0e585c;\r\n    font-family: RalewaySemiBold;\r\n    font-size: 14px;\r\n    width: 96%;\r\n}\r\n.logo1[_ngcontent-%COMP%]\r\n{\r\n    padding-left: 72px;\r\n    width: 265px;\r\n    height: 205px;\r\n    padding-top: 10px;\r\n    \r\n}\r\n.logo2[_ngcontent-%COMP%]\r\n{\r\n    padding-top: 100px;\r\n    width: 226px;\r\n    height: 328px;\r\n}\r\n.heading2[_ngcontent-%COMP%]\r\n{\r\n    font-size: 55px;\r\n    padding-top: 40px;\r\n    color: white;\r\n    font-family: RalewayBold;\r\n    text-align: center;\r\n}\r\n.logo3[_ngcontent-%COMP%]\r\n{\r\n    padding-top: 25px;\r\n    padding-left: 149px;\r\n    width: 534px;\r\n    height: 371px;\r\n}\r\n.head3[_ngcontent-%COMP%]\r\n{\r\n    padding-top: 25px;\r\n}\r\n.subhead[_ngcontent-%COMP%]\r\n{\r\n    font-family: RalewayBold;\r\n    font-size: 17px;\r\n    color:#FFFFFF;\r\n}\r\n.listbody[_ngcontent-%COMP%]\r\n{\r\n    padding-left: 95px;\r\n    font-family: raleway,sans-serif;\r\n    font-size: 16px;\r\n    color: #f0f0f0\r\n}\r\n.logo4[_ngcontent-%COMP%]\r\n{\r\n    padding-right: 30px;\r\n    width: 90px;\r\n    height: 90px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQkFBaUI7SUFDakI7OytCQUUyQjtBQUMvQjtBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjs7QUFFckI7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBOztJQUVJLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmO0FBQ0o7QUFDQTs7SUFFSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7O0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dFxyXG57XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlL2ltZzEuanBlZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgOyAgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgICovXHJcbn1cclxuLmFib3V0LWhlYWRpbmdcclxue1xyXG4gICAgcGFkZGluZy10b3A6IDkwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogUmFsZXdheUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogI2VlNjAyNDtcclxufVxyXG4uYWJvdXQtcGFyYVxyXG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBjb2xvcjogIzBlNTg1YztcclxuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5U2VtaUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogOTYlO1xyXG59XHJcbi5sb2dvMVxyXG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDcycHg7XHJcbiAgICB3aWR0aDogMjY1cHg7XHJcbiAgICBoZWlnaHQ6IDIwNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBcclxufVxyXG4ubG9nbzJcclxue1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDIyNnB4O1xyXG4gICAgaGVpZ2h0OiAzMjhweDtcclxufVxyXG4uaGVhZGluZzJcclxue1xyXG4gICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogUmFsZXdheUJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvZ28zXHJcbntcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNDlweDtcclxuICAgIHdpZHRoOiA1MzRweDtcclxuICAgIGhlaWdodDogMzcxcHg7XHJcbn1cclxuLmhlYWQzXHJcbntcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG59XHJcbi5zdWJoZWFkXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5Qm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiNGRkZGRkY7XHJcbn1cclxuLmxpc3Rib2R5XHJcbntcclxuICAgIHBhZGRpbmctbGVmdDogOTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiByYWxld2F5LHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2YwZjBmMFxyXG59XHJcbi5sb2dvNFxyXG57XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");






const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'uae';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 30, vars: 0, consts: [[1, "mainfooter"], [1, "row"], [1, "col-md-9"], [1, "row", "foot1", 2, "padding-top", "10px"], [1, "SocialBar"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], ["aria-hidden", "true", 1, "fa", "fa-linkedin"], [1, "SocialBar", "foot2"], [2, "left", "565px"], [2, "color", "#FF4040"], [1, "col-md-3", 2, "padding-top", "14px", "color", "rgb(224, 210, 210)"], [1, "row", 2, "padding-bottom", "5px"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00A9 2021 by Taydaz. Proudly hand-crafted with");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u2764");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Call Us \u00A0\u00A0\u00A0 : +971(0)50 271 47 54");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email Us\u00A0 : login@uaebusinesshub.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".mainfooter[_ngcontent-%COMP%]\r\n{\r\n    background-color: #ee6024;\r\n    padding: 10px;\r\n    margin: 0px;\r\n    position: relative;\r\n    width: 100%;\r\n    bottom: 0;\r\n}\r\n.foot2[_ngcontent-%COMP%]\r\n{\r\n  line-height:1.5em;\r\n  float: left;\r\n  left: 65%;\r\n  font-size:14px;\r\n  color: darkgrey;\r\n}\r\n.SocialBar[_ngcontent-%COMP%]\r\n{\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n\r\n}\r\nli[_ngcontent-%COMP%] {\r\n  padding:10px;\r\n  font-size: 20px;\r\n    float: left;\r\n    left: 62%;\r\n    color:white;\r\n    position:relative;\r\n\r\n  }\r\n.foot2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    padding:0px;\r\n    font-size: 20px;\r\n      float: left;\r\n      left: 55%;\r\n      font-size:14px;\r\n    color: darkgrey;\r\n  \r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7O0FBRXBCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtJQUNiLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLGlCQUFpQjs7RUFFbkI7QUFDRDtJQUNHLFdBQVc7SUFDWCxlQUFlO01BQ2IsV0FBVztNQUNYLFNBQVM7TUFDVCxjQUFjO0lBQ2hCLGVBQWU7O0lBRWYiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbmZvb3RlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU2MDI0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuLmZvb3QyXHJcbntcclxuICBsaW5lLWhlaWdodDoxLjVlbTtcclxuICBmbG9hdDogbGVmdDtcclxuICBsZWZ0OiA2NSU7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbiAgY29sb3I6IGRhcmtncmV5O1xyXG59XHJcblxyXG4uU29jaWFsQmFyXHJcbntcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxufVxyXG5saSB7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbGVmdDogNjIlO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHJcbiAgfVxyXG4gLmZvb3QyIGxpIHtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgbGVmdDogNTUlO1xyXG4gICAgICBmb250LXNpemU6MTRweDtcclxuICAgIGNvbG9yOiBkYXJrZ3JleTtcclxuICBcclxuICAgIH1cclxuICBcclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/about"]; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 18, vars: 4, consts: [[1, "navbar", "navbar-expand", "fixed-top", "navbar-dark", "nav1", 2, "background-color", "#ee6024"], ["id", "navbarSupportedContent", 1, "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", 2, "margin-left", "550px"], [1, "nav-link", "text-white", 3, "routerLink"], [1, "nav-item"], [1, "nav-link", "text-white"], [1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Our Solution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".nav1[_ngcontent-%COMP%]\r\n{\r\n\tfont-family: RalewaySemiBold;\r\n\tfont-size: 14px;\r\n}\r\n.top-nav-item[_ngcontent-%COMP%], .nav-item[_ngcontent-%COMP%]{\r\n\tpadding-right: 12px;\r\n\tbox-shadow: 2px;\r\n\tpadding-top: 0px;\r\n\tpadding-bottom: 0px;\r\n\tpadding-left: 12px;\r\n  \tmargin-right: 40px;\r\n}\r\n.dropdown-menu[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]{\r\n\tbackground-color:#ee6024;\r\n\tcolor:white;\r\n\tpadding: 10px;\r\n}\r\n.nav-link[_ngcontent-%COMP%]:hover\r\n{\r\n\tcolor: gray !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDLDRCQUE0QjtDQUM1QixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0dBQ2hCLGtCQUFrQjtBQUNyQjtBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTs7Q0FFQyxzQkFBc0I7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2MVxyXG57XHJcblx0Zm9udC1mYW1pbHk6IFJhbGV3YXlTZW1pQm9sZDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnRvcC1uYXYtaXRlbSwgLm5hdi1pdGVte1xyXG5cdHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcblx0Ym94LXNoYWRvdzogMnB4O1xyXG5cdHBhZGRpbmctdG9wOiAwcHg7XHJcblx0cGFkZGluZy1ib3R0b206IDBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgXHRtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LCAuZHJvcGRvd24taXRlbXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiNlZTYwMjQ7XHJcblx0Y29sb3I6d2hpdGU7XHJcblx0cGFkZGluZzogMTBweDtcclxufVxyXG4ubmF2LWxpbms6aG92ZXJcclxue1xyXG5cdGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_uae_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/uae-services.service */ "./src/services/uae-services.service.ts");





class HomeComponent {
    constructor(restApiService) {
        this.restApiService = restApiService;
    }
    ngOnInit() {
        this.HomePageApi();
        aos__WEBPACK_IMPORTED_MODULE_2___default.a.init();
    }
    HomePageApi() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.resData = yield this.restApiService.gethomePageRes().toPromise();
            console.log("Response from server :" + this.resData.response);
            console.log("Api called at :" + this.resData.time);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_uae_services_service__WEBPACK_IMPORTED_MODULE_3__["UaeServicesService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 50, vars: 0, consts: [[1, "container"], [1, "border", "border-box", "border-white"], ["src", "assets/image/bg1.png", "alt", "Logo", 1, "bg1", "img-fluid"], [1, "row"], [1, "col-md-2"], ["src", "assets/image/UAElogo.png", "alt", "Logo", "data-aos", "fade-zoom-in", "data-aos-easing", "ease-in-back", "data-aos-delay", "500", "data-aos-duration", "1500", "data-aos-offset", "0", 1, "logo1"], [1, "col-md-8"], [1, "centeredCaption", "d-none", "d-md-block"], ["data-aos", "fade-up", "data-aos-delay", "1500", "data-aos-duration", "1800"], ["data-aos", "fade-right", "data-aos-delay", "1600", "data-aos-duration", "2000", 1, "hr"], [1, "centered", "d-none", "d-md-block"], ["data-aos", "fade-up", "data-aos-delay", "1700", "data-aos-duration", "1800"], ["data-aos", "fade-right", "data-aos-delay", "1800", "data-aos-duration", "2000", 1, "hrDashed", 2, "width", "150px", "border-style", "dotted"], ["src", "assets/image/bg2.png", "alt", "Logo", 1, "bg2"], [1, "container-fluid", "border-box"], [1, "text"], ["data-aos", "fade-up", "data-aos-easing", "linear", "data-aos-duration", "1500", "data-aos-delay", "400", "data-aos-offset", "0"], ["src", "assets/image/threeDot.png", "alt", "Icon", 1, "dotIcon"], [1, "col-6"], [1, "secBtn"], ["src", "assets/image/arrow.png", "alt", "Icon", "data-aos", "fade-right", "data-aos-delay", "900", "data-aos-duration", "1500", 1, "icon"], ["data-aos", "fade-right", "data-aos-delay", "900", "data-aos-duration", "1500", 1, "btn", "btn-light", "btn-lg"], ["src", "assets/image/arrow.png", "alt", "Icon", "data-aos", "fade-right", "data-aos-delay", "1000", "data-aos-duration", "1500", 1, "icon"], ["data-aos", "fade-right", "data-aos-delay", "1000", "data-aos-duration", "1500", 1, "btn", "btn-light", "btn-lg"], ["src", "assets/image/arrow.png", "alt", "Icon", "data-aos", "fade-right", "data-aos-delay", "1100", "data-aos-duration", "1500", 1, "icon"], ["data-aos", "fade-right", "data-aos-delay", "1100", "data-aos-duration", "1500", 1, "btn", "btn-light", "btn-lg"], ["data-aos", "fade-left", "data-aos-delay", "500", "data-aos-duration", "2000", 1, "para"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\"Your one-stop-hub providing elite services for any business or personal need in UAE\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Our team stands apart from any other international market player. We help you to take right solutions today that keep you protected and safe in the future. We have cross-discipline team and feature a boutique Eco-system of tailor made VIP-grade services to achieve any goals you have.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Why UAE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "BECOME A RESIDENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "SET-UP A SOLUTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "INVEST & GROW ASSETS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " During turbulent times UAE stands strong as the global");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "safe business hub, featuring high investor protection,");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " free-tax regimes, profit expatriation and latest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " technologies. this will make business model is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "protected model is protected of the future");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " shocks and uncertainties. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".bg1[_ngcontent-%COMP%] {\r\n  margin-top:20%;\r\n  width:auto;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  height:70vh;\r\n}\r\n.logo1[_ngcontent-%COMP%]\r\n{\r\n    width: 262px;\r\n    height: 270px;\r\n    padding: 28px;\r\n    background-position: left top;\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 50px;\r\n}\r\n.bg2[_ngcontent-%COMP%]{\r\n  width:200px;\r\n  background-position:right top;\r\n  position:absolute;\r\n  height:90vh;\r\n  bottom:10%;\r\n  top:55%;\r\n  right:40px;\r\n  transform: translate(-50%, -50%);\r\n}\r\n.hr[_ngcontent-%COMP%]{\r\n  width: 200px;\r\n  margin-left: 35%;\r\n  top: 15px;\r\n  border-top: 2px solid #EE6024;\r\n}\r\n.hrDashed[_ngcontent-%COMP%]{\r\n  margin-left: 30%;\r\n  top: 15px;\r\n  border-top: 3px black;\r\n  color:transparent;\r\n}\r\n.centeredCaption[_ngcontent-%COMP%]{\r\n  font-size: 28px;\r\n  bottom: 50%;\r\n  color: #EE6024;\r\n  font-family:museo-w01-700,serif;\r\n  line-height: 1.2em;\r\n  font-weight: bold;\r\n  position: absolute;\r\n  top: 33%;\r\n  left: 48.5%;\r\n  transform: translate(-50%, -50%);\r\n  width: 550px;\r\n}\r\n.centered[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  color: #0e585c;\r\n  font-family:raleway-semibold,raleway,sans-serif;\r\n  font-weight: bold;\r\n  position: absolute;\r\n  top: 48%;\r\n  left: 55%;\r\n  width: 750px;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n.container-fluid[_ngcontent-%COMP%]{\r\n  padding-top:5%;\r\n  padding-bottom: 10%;\r\n  background-color: rgb(14 88 92);\r\n}\r\n.dotIcon[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  right: 50px;\r\n}\r\n.secBtn[_ngcontent-%COMP%]{\r\n  list-style-type: none;\r\n    margin-left: 185px;\r\n    margin-right: 110px;\r\n    transition: inherit;\r\n    padding: 20px;\r\n}\r\n.icon[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width:50px;\r\n  padding-left: 15px;\r\n  left: 12%;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n  color:#0e585c;\r\n  font-size: 16px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.09em;\r\n  font-family: raleway-semibold,raleway,sans-serif;\r\n  font-weight: 700;\r\n  border-radius: 40px;\r\n  border:2px solid #EE6024;;\r\n  display: flex;\r\n  flex-basis: auto;flex-direction: row;\r\n  flex-grow: 1;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  height: 100%;\r\n  width: 100%;\r\n  padding-left:30px;\r\n  box-shadow: inset rgb(0 0 0 / 40%) 3px 2px 3px 2px;\r\n\r\n}\r\n.btn[_ngcontent-%COMP%]:hover{\r\n  color:white;\r\n  background-color: #EE6024;\r\n  border: 2px solid white;\r\n  box-shadow: rgb(0 0 0 / 40%) 3px 2px 5px 0px;\r\n\r\n}\r\n.text[_ngcontent-%COMP%]{\r\n  text-align:right;\r\n  margin-right: 25%;\r\n  color:white;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n  font-size:55px;\r\n  padding-top: 25px;\r\n  padding-bottom: 10px;\r\n}\r\n.para[_ngcontent-%COMP%]{\r\n  box-sizing: border-box;\r\n  padding-top:60px;\r\n  margin-right: 200px;\r\n  color:white;\r\n  text-shadow: rgb(0 0 0 / 40%) 0px 4px 5px;\r\n  font-size:18px; line-height:1.5em;\r\n   text-align:center;\r\n  font-family:raleway-semibold,raleway,sans-serif;\r\n  line-height: 1.5em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFDQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsT0FBTztFQUNQLFVBQVU7RUFDVixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLCtDQUErQztFQUMvQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLGdDQUFnQztBQUNsQztBQUNBLGtCQUFrQjtBQUVsQixzQkFBc0I7QUFDdEI7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLCtCQUErQjtBQUNqQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UscUJBQXFCO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGdEQUFnRDtFQUNoRCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsZ0JBQWdCLENBQUMsbUJBQW1CO0VBQ3BDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtEQUFrRDs7QUFFcEQ7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLDRDQUE0Qzs7QUFFOUM7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHlDQUF5QztFQUN6QyxjQUFjLEVBQUUsaUJBQWlCO0dBQ2hDLGlCQUFpQjtFQUNsQiwrQ0FBK0M7RUFDL0Msa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkJhbm5lciBQYXJ0IFN0YXJ0Ki9cclxuLmJnMSB7XHJcbiAgbWFyZ2luLXRvcDoyMCU7XHJcbiAgd2lkdGg6YXV0bztcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDo3MHZoO1xyXG59XHJcbi5sb2dvMVxyXG57XHJcbiAgICB3aWR0aDogMjYycHg7XHJcbiAgICBoZWlnaHQ6IDI3MHB4O1xyXG4gICAgcGFkZGluZzogMjhweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogNTBweDtcclxufVxyXG4uYmcye1xyXG4gIHdpZHRoOjIwMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246cmlnaHQgdG9wO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGhlaWdodDo5MHZoO1xyXG4gIGJvdHRvbToxMCU7XHJcbiAgdG9wOjU1JTtcclxuICByaWdodDo0MHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi5ocntcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICB0b3A6IDE1cHg7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNFRTYwMjQ7XHJcbn1cclxuLmhyRGFzaGVke1xyXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGJvcmRlci10b3A6IDNweCBibGFjaztcclxuICBjb2xvcjp0cmFuc3BhcmVudDtcclxufVxyXG4uY2VudGVyZWRDYXB0aW9ue1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBib3R0b206IDUwJTtcclxuICBjb2xvcjogI0VFNjAyNDtcclxuICBmb250LWZhbWlseTptdXNlby13MDEtNzAwLHNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMyU7XHJcbiAgbGVmdDogNDguNSU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgd2lkdGg6IDU1MHB4O1xyXG59XHJcbi5jZW50ZXJlZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMGU1ODVjO1xyXG4gIGZvbnQtZmFtaWx5OnJhbGV3YXktc2VtaWJvbGQscmFsZXdheSxzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQ4JTtcclxuICBsZWZ0OiA1NSU7XHJcbiAgd2lkdGg6IDc1MHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi8qQmFubmVyIFBhcnQgRW5kKi9cclxuXHJcbi8qIFNlY3Rpb24gUGFydCBTdGFydCovXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgcGFkZGluZy10b3A6NSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQgODggOTIpO1xyXG59XHJcbi5kb3RJY29ue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICByaWdodDogNTBweDtcclxufVxyXG4uc2VjQnRue1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxODVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4uaWNvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6NTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgbGVmdDogMTIlO1xyXG59XHJcbi5idG57XHJcbiAgY29sb3I6IzBlNTg1YztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wOWVtO1xyXG4gIGZvbnQtZmFtaWx5OiByYWxld2F5LXNlbWlib2xkLHJhbGV3YXksc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgYm9yZGVyOjJweCBzb2xpZCAjRUU2MDI0OztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtYmFzaXM6IGF1dG87ZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6MzBweDtcclxuICBib3gtc2hhZG93OiBpbnNldCByZ2IoMCAwIDAgLyA0MCUpIDNweCAycHggM3B4IDJweDtcclxuXHJcbn1cclxuLmJ0bjpob3ZlcntcclxuICBjb2xvcjp3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUU2MDI0O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDQwJSkgM3B4IDJweCA1cHggMHB4O1xyXG5cclxufVxyXG4udGV4dHtcclxuICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMjUlO1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbmgze1xyXG4gIGZvbnQtc2l6ZTo1NXB4O1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5wYXJhe1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZy10b3A6NjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtc2hhZG93OiByZ2IoMCAwIDAgLyA0MCUpIDBweCA0cHggNXB4O1xyXG4gIGZvbnQtc2l6ZToxOHB4OyBsaW5lLWhlaWdodDoxLjVlbTtcclxuICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6cmFsZXdheS1zZW1pYm9sZCxyYWxld2F5LHNhbnMtc2VyaWY7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_uae_services_service__WEBPACK_IMPORTED_MODULE_3__["UaeServicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/services/uae-services.service.ts":
/*!**********************************************!*\
  !*** ./src/services/uae-services.service.ts ***!
  \**********************************************/
/*! exports provided: UaeServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UaeServicesService", function() { return UaeServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UaeServicesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    gethomePageRes() {
        console.log('Request is sent! for home Page');
        let Url = 'http://127.0.0.1:8000/uae/home';
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.httpClient.get(Url, httpOptions);
    }
}
UaeServicesService.ɵfac = function UaeServicesService_Factory(t) { return new (t || UaeServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UaeServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UaeServicesService, factory: UaeServicesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UaeServicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\TayDaz\Project1\uae\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map