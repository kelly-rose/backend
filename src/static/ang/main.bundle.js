webpackJsonp([1,4],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 109;


/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(121);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(route) {
        var _this = this;
        this.route = route;
        this.title = 'Hello srvup 2!';
        this.description = 'A new app';
        this.routeSub = route.params.subscribe(function (params) {
            console.log(params);
            _this.query = params['q'];
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(192),
        //template: `<h1>{{ title }}</h1><p>{{ description }} is cool </p>`,
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_dropdown__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_carousel__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utility_safe_pipe__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_detail_search_detail_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__video_list_video_list_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__video_detail_video_detail_component__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// third party imports










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__video_list_video_list_component__["a" /* VideoListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__video_detail_video_detail_component__["a" /* VideoDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__utility_safe_pipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_11__search_detail_search_detail_component__["a" /* SearchDetailComponent */]
        ],
        imports: [
            // ngx-bootstrap
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_detail_search_detail_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__video_list_video_list_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__video_detail_video_detail_component__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// https://angular.io/docs/ts/latest/guide/router.html






var appRoutes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
    },
    {
        path: "search",
        component: __WEBPACK_IMPORTED_MODULE_3__search_detail_search_detail_component__["a" /* SearchDetailComponent */],
    },
    {
        path: "videos",
        component: __WEBPACK_IMPORTED_MODULE_4__video_list_video_list_component__["a" /* VideoListComponent */],
    },
    {
        path: "videos/:slug",
        component: __WEBPACK_IMPORTED_MODULE_5__video_detail_video_detail_component__["a" /* VideoDetailComponent */],
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    function SearchComponent(router) {
        this.router = router;
        this.searchLocation = "Newport Beach";
    }
    SearchComponent.prototype.ngOnInit = function () {
        // console.log(this.passedQuery)
        if (this.passedQuery) {
            this.searchQuery = this.passedQuery;
        }
    };
    SearchComponent.prototype.submitSearch = function (event, formData) {
        console.log(event);
        console.log(formData.value);
        var searchedQuery = formData.value['q'];
        if (searchedQuery) {
            this.router.navigate(['/search', { q: searchedQuery }]);
        }
    };
    SearchComponent.prototype.searchQueryChange = function () {
        this.searchLocation = 'California';
    };
    return SearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", String)
], SearchComponent.prototype, "passedQuery", void 0);
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'search',
        template: __webpack_require__(195),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, args) {
        if (value) {
            return this.sanitizer.bypassSecurityTrustResourceUrl(value);
        }
    };
    return SafePipe;
}());
SafePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'safe'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safe.pipe.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <!-- <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button> -->\r\n      <a class=\"navbar-brand\" routerLink='' routerLinkActive=\"active\">Try Angular v4</a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <search [passedQuery]='query'></search>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li routerLink='/videos/' routerLinkActive=\"active\"><a routerLink='/videos/' routerLinkActive=\"active\">Videos</a></li>\r\n        <!-- <li class=\"dropdown\" dropdown>\r\n          <a href=\"#\" dropdownToggle class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\r\n          <ul *dropdownMenu class=\"dropdown-menu\">\r\n            <li><a href=\"#\">Action</a></li>\r\n            <li><a href=\"#\">Another action</a></li>\r\n            <li><a href=\"#\">Something else here</a></li>\r\n            <li role=\"separator\" class=\"divider\"></li>\r\n            <li><a href=\"#\">Separated link</a></li>\r\n          </ul>\r\n        </li> -->\r\n      </ul>\r\n    </div><!-- /.navbar-collapse -->\r\n  </div><!-- /.container-fluid -->\r\n</nav>\r\n<div class='container main-container' >\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<footer class='container text-center'>\r\n<hr/>\r\n&copy; Srvup\r\n</footer>\r\n"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "\r\n        <div class='row'>\r\n            <div class='col-sm-12'>\r\n            <carousel class='text-center' *ngIf='homeImageList'>\r\n              <slide>\r\n                <a class='' routerLink='/videos/' routerLinkActive=\"active\">\r\n                    <img class='img-main-carousel'  [src]='videoListDefaultImage' alt=\"First slide\">\r\n                </a>\r\n                <div class=\"carousel-caption\">\r\n                  <h3>Video List</h3>\r\n                  \r\n                  <p><a class='btn btn-primary' routerLink='/videos/' routerLinkActive=\"active\">View Videos</a></p>\r\n                </div>\r\n              </slide>\r\n\r\n              <slide *ngFor='let imageObj of homeImageList'>\r\n                <a class='' routerLink='/videos/{{ imageObj.slug }}' routerLinkActive=\"active\">\r\n                    <img class='img-main-carousel'  [src]='imageObj.image' alt=\"First slide\">\r\n                </a>\r\n                <div class=\"carousel-caption\">\r\n                  <h3>{{ imageObj.name }}</h3>\r\n                  \r\n                  <p><a class='btn btn-default' routerLink='/videos/{{ imageObj.slug }}' routerLinkActive=\"active\">View</a></p>\r\n                </div>\r\n              </slide>\r\n             <!--  <slide>\r\n                 <a class='' #imageTwo href='/videos/video-1' (click)='preventNormal($event, imageTwo)'>\r\n                    <img class='img-main-carousel' src=\"assets/images/nature/5.jpg\" alt=\"Second slide\">\r\n                </a>\r\n                <div class=\"carousel-caption\">\r\n                  <h3>Second slide label</h3>\r\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n                  <p><a class='btn btn-default' href='/videos/video-1'>Video 1</a></p>\r\n                </div>\r\n              </slide>\r\n              <slide>\r\n               <a class='' #imageThree href='/videos/video-1' (click)='preventNormal($event, imageThree)'>\r\n                    <img class='img-main-carousel' src=\"assets/images/nature/1.jpg\" alt=\"Third slide\">\r\n                </a>\r\n                <div class=\"carousel-caption\">\r\n                  <h3>Third slide label</h3>\r\n                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n                  <p><a class='btn btn-default' href='/videos/video-1'>Video 1</a></p>\r\n                </div>\r\n              </slide> -->\r\n            </carousel>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<p *ngIf='query'>\r\n  Searched for <b>{{ query }}</b>\r\n</p>\r\n\r\n<div *ngFor='let abc of videoList; let i = index' [ngClass]=\"{'row': (i+1)%3 == 0}\">\r\n    <div class='col-md-4 col-sm-12' >\r\n        <div class=\"thumbnail\">\r\n          <a routerLink='/videos/{{ abc.slug }}' routerLinkActive=\"active\" *ngIf='abc.image'><img [src]='abc.image' alt=\"{{ abc.name }} image\"></a>\r\n          <div class=\"caption\">\r\n            <h3><a routerLink='/videos/{{ abc.slug }}' routerLinkActive=\"active\">{{ abc.name }}</a></h3>\r\n            <p><a routerLink='/videos/{{ abc.slug }}' routerLinkActive=\"active\" class=\"btn btn-primary\" role=\"button\">View</a></p>\r\n          </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<form #searchForm='ngForm' class=\"navbar-form navbar-left\" (ngSubmit)='submitSearch($event, searchForm)'>\r\n    <input type='hidden' name='location'  [(ngModel)]='searchLocation' />\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name='q' [(ngModel)]='searchQuery' (change)='searchQueryChange()'>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-default\">\r\n        Search\r\n    </button>\r\n</form>"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf='!video'>Loading</div>\r\n<div *ngIf='video'>\r\n    <h1>{{ video.name }}</h1>\r\n    <hr/>\r\n    <div style=\"position:relative;height:0;padding-bottom:56.25%\" *ngIf='video.embed'>\r\n        <iframe [src]=\"getEmbedUrl(video) | safe\" width=\"640\" height=\"360\" frameborder=\"0\" style=\"position:absolute;width:100%;height:100%;left:0\" allowfullscreen ></iframe>\r\n    </div>\r\n    <div class='text-center' *ngIf='video.image && !video.embed'>\r\n        <img class='img-responsive img-center' [src]='video.image' alt=\"{{ video.name }} image\" />\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<div class='row'>\r\n    <div class='col-sm-12'>\r\n        <h1>\r\n          {{ title }}\r\n        </h1>\r\n    </div>\r\n</div>\r\n\r\n<div *ngFor='let abc of videoList; let i = index' [ngClass]=\"{'row': (i+1)%3 == 0}\">\r\n    <div class='col-md-4 col-sm-12' >\r\n        <div class=\"thumbnail\">\r\n          <a routerLink='/videos/{{ abc.slug }}' routerLinkActive=\"active\" *ngIf='abc.image'><img [src]='abc.image' alt=\"{{ abc.name }} image\"></a>\r\n          <div class=\"caption\">\r\n            <h3><a routerLink='/videos/{{ abc.slug }}' routerLinkActive=\"active\">{{ abc.name }}</a></h3>\r\n            <p><a routerLink='/videos/{{ abc.slug }}' routerLinkActive=\"active\" class=\"btn btn-primary\" role=\"button\">View</a></p>\r\n          </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(110);


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var endpoint = '/static/ang/assets/json/videos.json'; // http://www.yourdomain.com/api/videos/
var VideoService = (function () {
    function VideoService(http) {
        this.http = http;
    }
    VideoService.prototype.list = function () {
        return this.http.get(endpoint)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    VideoService.prototype.get = function (slug) {
        return this.http.get(endpoint)
            .map(function (response) {
            var data = response.json().filter(function (item) {
                if (item.slug == slug) {
                    return item;
                }
            });
            if (data.length == 1) {
                return data[0];
            }
            return {};
        })
            .catch(this.handleError);
    };
    VideoService.prototype.search = function (query) {
        return this.http.get(endpoint)
            .map(function (response) {
            var data = [];
            var req = response.json().filter(function (item) {
                if (item.name.indexOf(query) >= 0) {
                    data.push(item);
                }
            });
            return data;
        })
            .catch(this.handleError);
    };
    VideoService.prototype.handleError = function (error, caught) {
        console.log(error, caught);
    };
    return VideoService;
}());
VideoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], VideoService);

var _a;
//# sourceMappingURL=videos.service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__videos_videos_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(http, router, _video) {
        this.http = http;
        this.router = router;
        this._video = _video;
        this.homeImageList = [];
        this.videoListDefaultImage = '/static/ang/assets/images/videos/1.jpg';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.req = this._video.list().subscribe(function (data) {
            //console.log(data.json())
            //this.homeImageList
            data.filter(function (item) {
                if (item.featured) {
                    var dataItem = item;
                    _this.homeImageList.push(dataItem);
                }
            });
            // this.homeImageList = data.json();
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.req.unsubscribe();
    };
    HomeComponent.prototype.preventNormal = function (event, image) {
        if (!image.prevented) {
            event.preventDefault();
            //image.setAttribute("href", "/videos")
            //image.link = '/videos'
            //image.prevented = true;
            this.router.navigate(['./videos']);
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(193),
        styles: [__webpack_require__(176)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__videos_videos_service__["a" /* VideoService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__videos_videos_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__videos_videos_service__["a" /* VideoService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videos_videos_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchDetailComponent = (function () {
    function SearchDetailComponent(route, _video) {
        this.route = route;
        this._video = _video;
    }
    SearchDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.query = params['q'];
            _this.req = _this._video.search(_this.query).subscribe(function (data) {
                _this.videoList = data;
            });
        });
    };
    SearchDetailComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
        this.req.unsubscribe();
    };
    SearchDetailComponent.prototype.getEmbedUrl = function (item) {
        return 'https://www.youtube.com/embed/' + item.embed + '?ecver=2';
    };
    return SearchDetailComponent;
}());
SearchDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-search-detail',
        template: __webpack_require__(194),
        styles: [__webpack_require__(177)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__videos_videos_service__["a" /* VideoService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__videos_videos_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__videos_videos_service__["a" /* VideoService */]) === "function" && _b || Object])
], SearchDetailComponent);

var _a, _b;
//# sourceMappingURL=search-detail.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__videos_videos_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoDetailComponent = (function () {
    function VideoDetailComponent(route, _video) {
        this.route = route;
        this._video = _video;
    }
    VideoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.slug = params['slug'];
            _this.req = _this._video.get(_this.slug).subscribe(function (data) {
                _this.video = data;
            });
        });
    };
    VideoDetailComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
        this.req.unsubscribe();
    };
    VideoDetailComponent.prototype.getEmbedUrl = function (item) {
        return 'https://www.youtube.com/embed/' + item.embed + '?ecver=2';
    };
    return VideoDetailComponent;
}());
VideoDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'video-detail',
        template: __webpack_require__(196),
        styles: [__webpack_require__(179)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__videos_videos_service__["a" /* VideoService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__videos_videos_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__videos_videos_service__["a" /* VideoService */]) === "function" && _b || Object])
], VideoDetailComponent);

var _a, _b;
//# sourceMappingURL=video-detail.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__videos_videos_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoListComponent = (function () {
    function VideoListComponent(_video) {
        this._video = _video;
        this.title = "Video List";
    }
    VideoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.todayDate = new Date()
        this.req = this._video.list().subscribe(function (data) {
            _this.videoList = data;
        });
    };
    VideoListComponent.prototype.ngOnDestroy = function () {
        this.req.unsubscribe();
    };
    return VideoListComponent;
}());
VideoListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'video-list',
        template: __webpack_require__(197),
        styles: [__webpack_require__(180)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__videos_videos_service__["a" /* VideoService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__videos_videos_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__videos_videos_service__["a" /* VideoService */]) === "function" && _a || Object])
], VideoListComponent);

var _a;
// ng g component youComponentName
//# sourceMappingURL=video-list.component.js.map

/***/ })

},[229]);
//# sourceMappingURL=main.bundle.js.map