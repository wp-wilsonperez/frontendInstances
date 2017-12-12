webpackJsonp([21,29],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_external_link_modal_external_link_modal__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_directives_directives_module__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_pipes_pipes_module__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_routing__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_component__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blank_blank_component__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__theme_components_menu_menu_component__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__theme_components_navbar_navbar_component__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__theme_components_messages_messages_component__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__theme_components_breadcrumb_breadcrumb_component__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__theme_components_back_top_back_top_component__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_search_component__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__theme_directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_4__theme_pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_5__pages_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_14__angular_http__["a" /* HttpModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__pages_component__["a" /* PagesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__blank_blank_component__["a" /* BlankComponent */],
            __WEBPACK_IMPORTED_MODULE_8__theme_components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_9__theme_components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__theme_components_messages_messages_component__["a" /* MessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__theme_components_breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
            __WEBPACK_IMPORTED_MODULE_12__theme_components_back_top_back_top_component__["a" /* BackTopComponent */],
            __WEBPACK_IMPORTED_MODULE_13__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_0__components_external_link_modal_external_link_modal__["a" /* ExternalLinkComponent */]
        ]
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return messages; });
var config = {
    "url": "http://localhost:3001/"
};
var messages = {
    "delete": "Registro Borrado",
    "add": "Agregado Exitoso",
    "edit": "Edicion Exitosa",
    "sure_delete": "Esta seguro de borrar este registro?"
};
//# sourceMappingURL=project-config.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_project_config__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserSessionService = (function () {
    function UserSessionService(http) {
        this.http = http;
    }
    UserSessionService.prototype.getUser = function () {
        if (this.info == undefined) {
            var returnValue = {
                name: localStorage.getItem('name'),
                lastName: localStorage.getItem('lastName'),
                id: localStorage.getItem('id'),
                cedula: localStorage.getItem('cedula'),
                userImg: localStorage.getItem('userImg'),
                token: localStorage.getItem('token'),
            };
            return returnValue;
        }
        else {
            return this.info;
        }
    };
    UserSessionService.prototype.getParams = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'param/list?access_token=' + this.getUser().token).map(function (res) {
            return res.json();
        }).subscribe(function (result) {
            return result;
        });
    };
    UserSessionService.prototype.setUser = function (user) {
        this.info = user;
        console.log(this.info);
        localStorage.setItem('name', user.name);
        localStorage.setItem('id', user._id);
        localStorage.setItem('lastName', user.lastName);
        localStorage.setItem('cedula', user.cedula);
        localStorage.setItem('userImg', user.userImg);
        localStorage.setItem('token', user.token);
        localStorage.setItem('grant', JSON.stringify(user.grant));
    };
    UserSessionService.prototype.checkUser = function () {
        if (localStorage.getItem('id') == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    return UserSessionService;
}());
UserSessionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserSessionService);

var _a;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(2);
var toPromise_1 = __webpack_require__(325);
Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(2);
var map_1 = __webpack_require__(130);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(15);
/* tslint:enable:max-line-length */
/**
 * Converts an Observable sequence to a ES2015 compliant promise.
 *
 * @example
 * // Using normal ES2015
 * let source = Rx.Observable
 *   .just(42)
 *   .toPromise();
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * // Rejected Promise
 * // Using normal ES2015
 * let source = Rx.Observable
 *   .throw(new Error('woops'))
 *   .toPromise();
 *
 * source
 *   .then((value) => console.log('Value: %s', value))
 *   .catch((err) => console.log('Error: %s', err));
 * // => Error: Error: woops
 *
 * // Setting via the config
 * Rx.config.Promise = RSVP.Promise;
 *
 * let source = Rx.Observable
 *   .of(42)
 *   .toPromise();
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * // Setting via the method
 * let source = Rx.Observable
 *   .just(42)
 *   .toPromise(RSVP.Promise);
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * @param PromiseCtor promise The constructor of the promise. If not provided,
 * it will look for a constructor first in Rx.config.Promise then fall back to
 * the native Promise constructor if available.
 * @return {Promise<T>} An ES2015 compatible promise with the last value from
 * the observable sequence.
 * @method toPromise
 * @owner Observable
 */
function toPromise(PromiseCtor) {
    var _this = this;
    if (!PromiseCtor) {
        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
            PromiseCtor = root_1.root.Rx.config.Promise;
        }
        else if (root_1.root.Promise) {
            PromiseCtor = root_1.root.Promise;
        }
    }
    if (!PromiseCtor) {
        throw new Error('no Promise impl found');
    }
    return new PromiseCtor(function (resolve, reject) {
        var value;
        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
    });
}
exports.toPromise = toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Counter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Counter = (function () {
    function Counter(_elementRef) {
        this.element = jQuery(_elementRef.nativeElement);
    }
    Counter.prototype.ngAfterViewInit = function () {
        var elem = this.element, count = this.count, increment = this.increment, interval = this.interval;
        function counter() {
            count = count + increment;
            setTimeout(function () { return counter(); }, interval * 1000);
            elem.html(count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
        counter();
    };
    return Counter;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Counter.prototype, "count", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Counter.prototype, "interval", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], Counter.prototype, "increment", void 0);
Counter = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[counter]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], Counter);

var _a;
//# sourceMappingURL=counter.directive.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slim_scroll_slim_scroll_directive__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widget_widget_directive__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skycon_skycon_directive__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__counter_counter_directive__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__live_tile_live_tile_directive__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_animate_progress_animate_directive__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dropzone_dropzone_directive__ = __webpack_require__(328);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    return DirectivesModule;
}());
DirectivesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__slim_scroll_slim_scroll_directive__["a" /* SlimScroll */],
            __WEBPACK_IMPORTED_MODULE_3__widget_widget_directive__["a" /* Widget */],
            __WEBPACK_IMPORTED_MODULE_4__skycon_skycon_directive__["a" /* Skycon */],
            __WEBPACK_IMPORTED_MODULE_5__counter_counter_directive__["a" /* Counter */],
            __WEBPACK_IMPORTED_MODULE_6__live_tile_live_tile_directive__["a" /* LiveTile */],
            __WEBPACK_IMPORTED_MODULE_7__progress_animate_progress_animate_directive__["a" /* ProgressAnimate */],
            __WEBPACK_IMPORTED_MODULE_8__dropzone_dropzone_directive__["a" /* DropzoneUpload */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__slim_scroll_slim_scroll_directive__["a" /* SlimScroll */],
            __WEBPACK_IMPORTED_MODULE_3__widget_widget_directive__["a" /* Widget */],
            __WEBPACK_IMPORTED_MODULE_4__skycon_skycon_directive__["a" /* Skycon */],
            __WEBPACK_IMPORTED_MODULE_5__counter_counter_directive__["a" /* Counter */],
            __WEBPACK_IMPORTED_MODULE_6__live_tile_live_tile_directive__["a" /* LiveTile */],
            __WEBPACK_IMPORTED_MODULE_7__progress_animate_progress_animate_directive__["a" /* ProgressAnimate */],
            __WEBPACK_IMPORTED_MODULE_8__dropzone_dropzone_directive__["a" /* DropzoneUpload */]
        ]
    })
], DirectivesModule);

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropzoneUpload; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropzoneUpload = (function () {
    function DropzoneUpload(el) {
        this.$el = jQuery(el.nativeElement);
    }
    DropzoneUpload.prototype.ngOnInit = function () {
        var dropzone = new Dropzone(this.$el[0], {
            addRemoveLinks: true
        });
        Dropzone.autoDiscover = false;
        // Dropzone.options.myAwesomeDropzone = false;
    };
    return DropzoneUpload;
}());
DropzoneUpload = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[dropzone]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], DropzoneUpload);

var _a;
//# sourceMappingURL=dropzone.directive.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metrojs_release_MetroJs_Full_MetroJs__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metrojs_release_MetroJs_Full_MetroJs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metrojs_release_MetroJs_Full_MetroJs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveTile; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LiveTile = (function () {
    function LiveTile(el) {
        this.$el = jQuery(el.nativeElement);
    }
    LiveTile.prototype.ngOnInit = function () {
        this.$el
            .css('height', this.$el.data('height'))
            .liveTile();
    };
    return LiveTile;
}());
LiveTile = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[live-tile]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], LiveTile);

var _a;
//# sourceMappingURL=live-tile.directive.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressAnimate; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressAnimate = (function () {
    function ProgressAnimate(_elementRef) {
        this._elementRef = _elementRef;
        this.element = jQuery(_elementRef.nativeElement);
    }
    ProgressAnimate.prototype.ngOnInit = function () {
        var elem = this.element, progress = 0, timeout = 0, increment = 1, maxprogress = elem.attr('aria-valuenow');
        function animate() {
            setTimeout(function () {
                progress += increment;
                if (progress < maxprogress) {
                    elem.css('width', progress + '%');
                    animate();
                }
            }, timeout);
        }
        ;
        animate();
    };
    return ProgressAnimate;
}());
ProgressAnimate = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[progress-animate]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ProgressAnimate);

var _a;
//# sourceMappingURL=progress-animate.directive.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_skycons_skycons__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_skycons_skycons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_skycons_skycons__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skycon; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Skycon = (function () {
    function Skycon(el) {
        this.$el = jQuery(el.nativeElement);
    }
    Skycon.prototype.ngOnInit = function () {
        var icons = new Skycons({ 'color': this.color });
        icons.set(this.$el[0], this.weather);
        icons.play();
    };
    return Skycon;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Skycon.prototype, "color", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Skycon.prototype, "weather", void 0);
Skycon = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[skycon]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], Skycon);

var _a;
//# sourceMappingURL=skycon.directive.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlimScroll; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlimScroll = (function () {
    function SlimScroll(_elementRef) {
        this._elementRef = _elementRef;
    }
    SlimScroll.prototype.ngOnChanges = function (changes) {
        this._scroll();
    };
    SlimScroll.prototype._scroll = function () {
        this._destroy();
        this._init();
    };
    SlimScroll.prototype._init = function () {
        jQuery(this._elementRef.nativeElement).slimScroll(this.slimScrollOptions);
    };
    SlimScroll.prototype._destroy = function () {
        jQuery(this._elementRef.nativeElement).slimScroll({ destroy: true });
    };
    return SlimScroll;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SlimScroll.prototype, "slimScrollOptions", void 0);
SlimScroll = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[slim-scroll]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SlimScroll);

var _a;
//# sourceMappingURL=slim-scroll.directive.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_widgster__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_widgster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_widgster__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Widget = (function () {
    function Widget(el) {
        this.$el = jQuery(el.nativeElement);
        jQuery.fn.widgster.Constructor.DEFAULTS.bodySelector = '.widget-body';
        jQuery(document).on('close.widgster', function (e) {
            var $colWrap = jQuery(e.target).closest(' [class*="col-"]:not(.widget-container)');
            if (!$colWrap.find('.widget').not(e.target).length) {
                $colWrap.remove();
            }
        });
        jQuery(document).on("fullscreened.widgster", function (e) {
            jQuery(e.target).find('div.widget-body').addClass('scrolling');
        }).on("restored.widgster", function (e) {
            jQuery(e.target).find('div.widget-body').removeClass('scrolling');
        });
    }
    Widget.prototype.ngOnInit = function () {
        this.$el.widgster();
    };
    return Widget;
}());
Widget = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[widget]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], Widget);

var _a;
//# sourceMappingURL=widget.directive.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPicturePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppPicturePipe = (function () {
    function AppPicturePipe() {
    }
    AppPicturePipe.prototype.transform = function (input) {
        return '../assets/img/' + input;
    };
    return AppPicturePipe;
}());
AppPicturePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'appPicture' })
], AppPicturePipe);

//# sourceMappingURL=appPicture.pipe.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__urlSatinize_urlSatinize__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appPicture_appPicture_pipe__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profilePicture_profilePicture_pipe__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_mail_search_pipe__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search_pipe__ = __webpack_require__(338);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__appPicture_appPicture_pipe__["a" /* AppPicturePipe */],
            __WEBPACK_IMPORTED_MODULE_4__profilePicture_profilePicture_pipe__["a" /* ProfilePicturePipe */],
            __WEBPACK_IMPORTED_MODULE_5__search_mail_search_pipe__["a" /* MailSearchPipe */],
            __WEBPACK_IMPORTED_MODULE_6__search_search_pipe__["a" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_0__urlSatinize_urlSatinize__["a" /* SafePipe */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__appPicture_appPicture_pipe__["a" /* AppPicturePipe */],
            __WEBPACK_IMPORTED_MODULE_4__profilePicture_profilePicture_pipe__["a" /* ProfilePicturePipe */],
            __WEBPACK_IMPORTED_MODULE_5__search_mail_search_pipe__["a" /* MailSearchPipe */],
            __WEBPACK_IMPORTED_MODULE_6__search_search_pipe__["a" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_0__urlSatinize_urlSatinize__["a" /* SafePipe */]
        ]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePicturePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProfilePicturePipe = (function () {
    function ProfilePicturePipe() {
    }
    ProfilePicturePipe.prototype.transform = function (input, ext) {
        if (ext === void 0) { ext = 'jpg'; }
        return '../assets/img/profile/' + input + '.' + ext;
    };
    return ProfilePicturePipe;
}());
ProfilePicturePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'profilePicture' })
], ProfilePicturePipe);

//# sourceMappingURL=profilePicture.pipe.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailSearchPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MailSearchPipe = (function () {
    function MailSearchPipe() {
    }
    MailSearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (mail) {
                if (mail.sender || mail.subject) {
                    if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                        return true;
                    }
                }
            });
        }
    };
    return MailSearchPipe;
}());
MailSearchPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'MailSearch'
    })
], MailSearchPipe);

//# sourceMappingURL=mail-search.pipe.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (person) {
                if (person.name) {
                    return person.name.search(searchText) !== -1;
                }
            });
        }
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'SearchPipe' })
], SearchPipe);

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
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
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safe' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=urlSatinize.js.map

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function($) {

  $.fn.extend({
    slimScroll: function(options) {

      var defaults = {

        // width in pixels of the visible scroll area
        width : 'auto',

        // height in pixels of the visible scroll area
        height : '250px',

        // width in pixels of the scrollbar and rail
        size : '7px',

        // scrollbar color, accepts any hex/color value
        color: '#000',

        // scrollbar position - left/right
        position : 'right',

        // distance in pixels between the side edge and the scrollbar
        distance : '1px',

        // default scroll position on load - top / bottom / $('selector')
        start : 'top',

        // sets scrollbar opacity
        opacity : .4,

        // enables always-on mode for the scrollbar
        alwaysVisible : false,

        // check if we should hide the scrollbar when user is hovering over
        disableFadeOut : false,

        // sets visibility of the rail
        railVisible : false,

        // sets rail color
        railColor : '#333',

        // sets rail opacity
        railOpacity : .2,

        // whether  we should use jQuery UI Draggable to enable bar dragging
        railDraggable : true,

        // defautlt CSS class of the slimscroll rail
        railClass : 'slimScrollRail',

        // defautlt CSS class of the slimscroll bar
        barClass : 'slimScrollBar',

        // defautlt CSS class of the slimscroll wrapper
        wrapperClass : 'slimScrollDiv',

        // check if mousewheel should scroll the window if we reach top/bottom
        allowPageScroll : false,

        // scroll amount applied to each mouse wheel step
        wheelStep : 20,

        // scroll amount applied when user is using gestures
        touchScrollStep : 200,

        // sets border radius
        borderRadius: '7px',

        // sets border radius of the rail
        railBorderRadius : '7px'
      };

      var o = $.extend(defaults, options);

      // do it for every element that matches selector
      this.each(function(){

      var isOverPanel, isOverBar, isDragg, queueHide, touchDif,
        barHeight, percentScroll, lastScroll,
        divS = '<div></div>',
        minBarHeight = 30,
        releaseScroll = false;

        // used in event handlers and for better minification
        var me = $(this);

        // ensure we are not binding it again
        if (me.parent().hasClass(o.wrapperClass))
        {
            // start from last bar position
            var offset = me.scrollTop();

            // find bar and rail
            bar = me.siblings('.' + o.barClass);
            rail = me.siblings('.' + o.railClass);

            getBarHeight();

            // check if we should scroll existing instance
            if ($.isPlainObject(options))
            {
              // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
              if ( 'height' in options && options.height == 'auto' ) {
                me.parent().css('height', 'auto');
                me.css('height', 'auto');
                var height = me.parent().parent().height();
                me.parent().css('height', height);
                me.css('height', height);
              } else if ('height' in options) {
                var h = options.height;
                me.parent().css('height', h);
                me.css('height', h);
              }

              if ('scrollTo' in options)
              {
                // jump to a static point
                offset = parseInt(o.scrollTo);
              }
              else if ('scrollBy' in options)
              {
                // jump by value pixels
                offset += parseInt(o.scrollBy);
              }
              else if ('destroy' in options)
              {
                // remove slimscroll elements
                bar.remove();
                rail.remove();
                me.unwrap();
                return;
              }

              // scroll content by the given offset
              scrollContent(offset, false, true);
            }

            return;
        }
        else if ($.isPlainObject(options))
        {
            if ('destroy' in options)
            {
            	return;
            }
        }

        // optionally set height to the parent's height
        o.height = (o.height == 'auto') ? me.parent().height() : o.height;

        // wrap content
        var wrapper = $(divS)
          .addClass(o.wrapperClass)
          .css({
            position: 'relative',
            overflow: 'hidden',
            width: o.width,
            height: o.height
          });

        // update style for the div
        me.css({
          overflow: 'hidden',
          width: o.width,
          height: o.height
        });

        // create scrollbar rail
        var rail = $(divS)
          .addClass(o.railClass)
          .css({
            width: o.size,
            height: '100%',
            position: 'absolute',
            top: 0,
            display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
            'border-radius': o.railBorderRadius,
            background: o.railColor,
            opacity: o.railOpacity,
            zIndex: 90
          });

        // create scrollbar
        var bar = $(divS)
          .addClass(o.barClass)
          .css({
            background: o.color,
            width: o.size,
            position: 'absolute',
            top: 0,
            opacity: o.opacity,
            display: o.alwaysVisible ? 'block' : 'none',
            'border-radius' : o.borderRadius,
            BorderRadius: o.borderRadius,
            MozBorderRadius: o.borderRadius,
            WebkitBorderRadius: o.borderRadius,
            zIndex: 99
          });

        // set position
        var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
        rail.css(posCss);
        bar.css(posCss);

        // wrap it
        me.wrap(wrapper);

        // append to parent div
        me.parent().append(bar);
        me.parent().append(rail);

        // make it draggable and no longer dependent on the jqueryUI
        if (o.railDraggable){
          bar.bind("mousedown", function(e) {
            var $doc = $(document);
            isDragg = true;
            t = parseFloat(bar.css('top'));
            pageY = e.pageY;

            $doc.bind("mousemove.slimscroll", function(e){
              currTop = t + e.pageY - pageY;
              bar.css('top', currTop);
              scrollContent(0, bar.position().top, false);// scroll content
            });

            $doc.bind("mouseup.slimscroll", function(e) {
              isDragg = false;hideBar();
              $doc.unbind('.slimscroll');
            });
            return false;
          }).bind("selectstart.slimscroll", function(e){
            e.stopPropagation();
            e.preventDefault();
            return false;
          });
        }

        // on rail over
        rail.hover(function(){
          showBar();
        }, function(){
          hideBar();
        });

        // on bar over
        bar.hover(function(){
          isOverBar = true;
        }, function(){
          isOverBar = false;
        });

        // show on parent mouseover
        me.hover(function(){
          isOverPanel = true;
          showBar();
          hideBar();
        }, function(){
          isOverPanel = false;
          hideBar();
        });

        // support for mobile
        me.bind('touchstart', function(e,b){
          if (e.originalEvent.touches.length)
          {
            // record where touch started
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        me.bind('touchmove', function(e){
          // prevent scrolling the page if necessary
          if(!releaseScroll)
          {
  		      e.originalEvent.preventDefault();
		      }
          if (e.originalEvent.touches.length)
          {
            // see how far user swiped
            var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
            // scroll content
            scrollContent(diff, true);
            touchDif = e.originalEvent.touches[0].pageY;
          }
        });

        // set up initial height
        getBarHeight();

        // check start position
        if (o.start === 'bottom')
        {
          // scroll content to bottom
          bar.css({ top: me.outerHeight() - bar.outerHeight() });
          scrollContent(0, true);
        }
        else if (o.start !== 'top')
        {
          // assume jQuery selector
          scrollContent($(o.start).position().top, null, true);

          // make sure bar stays hidden
          if (!o.alwaysVisible) { bar.hide(); }
        }

        // attach scroll events
        attachWheel(this);

        function _onWheel(e)
        {
          // use mouse wheel only when mouse is over
          if (!isOverPanel) { return; }

          var e = e || window.event;

          var delta = 0;
          if (e.wheelDelta) { delta = -e.wheelDelta/120; }
          if (e.detail) { delta = e.detail / 3; }

          var target = e.target || e.srcTarget || e.srcElement;
          if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
            // scroll content
            scrollContent(delta, true);
          }

          // stop window scroll
          if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
          if (!releaseScroll) { e.returnValue = false; }
        }

        function scrollContent(y, isWheel, isJump)
        {
          releaseScroll = false;
          var delta = y;
          var maxTop = me.outerHeight() - bar.outerHeight();

          if (isWheel)
          {
            // move bar with mouse wheel
            delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

            // move bar, make sure it doesn't go out
            delta = Math.min(Math.max(delta, 0), maxTop);

            // if scrolling down, make sure a fractional change to the
            // scroll position isn't rounded away when the scrollbar's CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

            // scroll the scrollbar
            bar.css({ top: delta + 'px' });
          }

          // calculate actual scroll amount
          percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
          delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

          if (isJump)
          {
            delta = y;
            var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            bar.css({ top: offsetTop + 'px' });
          }

          // scroll content
          me.scrollTop(delta);

          // fire scrolling event
          me.trigger('slimscrolling', ~~delta);

          // ensure bar is visible
          showBar();

          // trigger hide when scroll is stopped
          hideBar();
        }

        function attachWheel(target)
        {
          if (window.addEventListener)
          {
            target.addEventListener('DOMMouseScroll', _onWheel, false );
            target.addEventListener('mousewheel', _onWheel, false );
          }
          else
          {
            document.attachEvent("onmousewheel", _onWheel)
          }
        }

        function getBarHeight()
        {
          // calculate scrollbar height and make sure it is not too small
          barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
          bar.css({ height: barHeight + 'px' });

          // hide scrollbar if content is not long enough
          var display = barHeight == me.outerHeight() ? 'none' : 'block';
          bar.css({ display: display });
        }

        function showBar()
        {
          // recalculate bar height
          getBarHeight();
          clearTimeout(queueHide);

          // when bar reached top or bottom
          if (percentScroll == ~~percentScroll)
          {
            //release wheel
            releaseScroll = o.allowPageScroll;

            // publish approporiate event
            if (lastScroll != percentScroll)
            {
                var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                me.trigger('slimscroll', msg);
            }
          }
          else
          {
            releaseScroll = false;
          }
          lastScroll = percentScroll;

          // show only when required
          if(barHeight >= me.outerHeight()) {
            //allow window scroll
            releaseScroll = true;
            return;
          }
          bar.stop(true,true).fadeIn('fast');
          if (o.railVisible) { rail.stop(true,true).fadeIn('fast'); }
        }

        function hideBar()
        {
          // only hide when options allow it
          if (!o.alwaysVisible)
          {
            queueHide = setTimeout(function(){
              if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDragg)
              {
                bar.fadeOut('slow');
                rail.fadeOut('slow');
              }
            }, 1000);
          }
        }

      });

      // maintain chainability
      return this;
    }
  });

  $.fn.extend({
    slimscroll: $.fn.slimScroll
  });

})(jQuery);


/***/ }),

/***/ 341:
/***/ (function(module, exports) {

/*!
* Metro JS for jQuery
* http://drewgreenwell.com/ 
* For details and usage info see: http://drewgreenwell.com/projects/metrojs

Copyright (C) 2013, Drew Greenwell

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
;(function ($) {
    // the metrojs object contains helper methods and theme settings
    $.fn.metrojs = {
        capabilities: null,
        checkCapabilities: function(stgs, recheck){
            if($.fn.metrojs.capabilities == null || (typeof(recheck) != "undefined" && recheck == true))
                $.fn.metrojs.capabilities = new $.fn.metrojs.MetroModernizr(stgs);
            return  $.fn.metrojs.capabilities;
        }
    };
	var metrojs = $.fn.metrojs,
		console = window.console;	
	if (typeof console !== "object") {
		console = {};
		console.log = function() {};
		console.error=function() {};
	}
	var throwError = typeof ($.error) === "function" ? $.error : console.error;
var MAX_LOOP_COUNT = 99000;
// .liveTile
$.fn.liveTile = function (method) {
	if (pubMethods[method]) {
		var args = [];
		for (var i = 1; i <= arguments.length; i++) {
			args[i - 1] = arguments[i];
		}
		return pubMethods[method].apply(this, args);
	} else if (typeof method === 'object' || !method) {
		return pubMethods.init.apply(this, arguments);
	} else {
		$.error('Method ' + method + ' does not exist on jQuery.liveTile');
		return null;
	}
};


$.fn.liveTile.contentModules = {
	modules: [],
	/* the default module layout
    [
        defaultModules.imageSwap,
        defaultModules.htmlSwap
    ],*/
	addContentModule: function (moduleName, module) {
		if (!(this.modules instanceof Array))
			this.modules = [];
		this.modules.push(module);
	},
	hasContentModule: function (moduleName) {
		if (typeof (moduleName) === "undefined" || !(this.modules instanceof Array))
			return -1;
		for (var i = 0; i < this.modules.length; i++) {
			if (typeof (this.modules[i].moduleName) != "undefined" && this.modules[i].moduleName == moduleName)
				return i;
		}
		return -1;
	}
};

// default option values for .liveTile
$.fn.liveTile.defaults = {
	mode: 'slide',                          // 'fade', 'slide', 'flip', 'flip-list', carousel
	speed: 500,                             // how fast should animations be performed, in milliseconds
	initDelay: -1,                          // how long to wait before the initial animation
	delay: 5000,                            // how long to wait between animations 
	stops: "100%",                          // how much of the back tile should 'slide' reveal before starting a delay
	stack: false,                           // should tiles in slide mode appear stacked (e.g Me tile) 
	direction: 'vertical',                  // which direction should animations be performed(horizontal | vertical)
	animationDirection: 'forward',          // the direction that carousel mode uses to determine which way to slide in tiles
	tileSelector: '>div,>li,>p,>img,>a',    // the selector used by carousel mode and flip-list to choose tile containers
	tileFaceSelector: '>div,>li,>p,>img,>a',// the selector used to choose the front and back containers
	ignoreDataAttributes: false,            // should data attributes be ignored
	click: null,                            // function ($tile, tdata) { return true; }
	link: '',                               // a url to go to when clicked
	newWindow: false,                       // should the link be opened in a new window
	bounce: false,                          // should the tile shrink when tapped
	bounceDirections: 'all',                // which direction the tile will tile 'all', 'edges, 'corners'
	bounceFollowsMove: true,                // should a tile in bounce state tilt in the direction of the mouse as it moves
	pauseOnHover: false,                    // should tile animations be paused on hover in and restarted on hover out
	pauseOnHoverEvent: 'both',              // pause is called on mouseover, mouseout, or both
	playOnHover: false,                     // should "play" be called on hover
	playOnHoverEvent: 'both',               // play is called on mouseover, mouseout, or both
	onHoverDelay: 0,						// the amount of time to wait before the onHover event is fired
	onHoverOutDelay: 200,					// the amount of time in addition to the speed to wait before the onHoverOut event is fired
	repeatCount: -1,                        // number of times to repeat the animation        
	appendBack: true,                       // appends the .last tile if one doesnt exist (slide and flip only)        
	alwaysTrigger: false,                   // should every item in a flip list trigger every time a delay passes 
	flipListOnHover: false,                 // should items in flip-list flip and stop when hovered
	flipListOnHoverEvent: 'mouseout',       // which event should be used to trigger the flip-list faces
	noHAflipOpacity: '1',                   // the opacity level set for the backside of the flip animation on unaccelerated browsers
	haTransFunc: 'ease',                    // the tranisiton-timing function to use in hardware accelerated mode
	noHaTransFunc: 'linear',                // the tranisiton-timing function to use in non hardware accelerated mode
	currentIndex: 0,                        // what is the current stop index for slide mode or slide index for carousel mode
	startNow: true,                         // should the tile immediately start or wait util play or restart has been called
	useModernizr: (typeof (window.Modernizr) !== "undefined"), // checks to see if modernizer is already in use
	useHardwareAccel: true,                 // should css animations, transitions and transforms be used when available
	useTranslate: true,
	faces: {
		$front: null,                        // the jQuery element to use as the front face of the tile; this will bypass tileCssSelector
		$back: null                          // the jQuery element to use as the back face of the tile; this will bypass tileCssSelector
	},
	animationStarting: function (tileData, $front, $back) {
		// returning false will cancel the animation
	},
	animationComplete: function (tileData, $front, $back) {
	},
	triggerDelay: function (idx) {          // used by flip-list to decide how random the tile flipping should be
		return Math.random() * 3000;
	},
	swap: '',                               // which swap modules are active for this tile (image, html)
	swapFront: '-',                         // override the available swap modules for the front face
	swapBack: '-',                          // override the available swap modules for the back face
	contentModules: [],
	rebindMessage: "tile data is missing. Are you missing a call to rebind or destroy? You may also be able to avoid this error by calling stop or pause"
};
// public methods that can be called via .liveTile(method name)
var pubMethods = {
	init: function (options) {
		// Setup the public options for the livetile
		var settings = $.extend({}, $.fn.liveTile.defaults, options);
		// checks for browser feature support to enable hardware acceleration                        
		metrojs.checkCapabilities(settings);
		helperMethods.getBrowserPrefix();
		// setup the default content modules
		if ($.fn.liveTile.contentModules.hasContentModule("image") == -1)
			$.fn.liveTile.contentModules.addContentModule("image", defaultModules.imageSwap);
		if ($.fn.liveTile.contentModules.hasContentModule("html") == -1)
			$.fn.liveTile.contentModules.addContentModule("html", defaultModules.htmlSwap);
		// this is where the magic happens
		return $(this).each(function (tileIndex, ele) {
			var $this = $(ele),
            data = privMethods.initTileData($this, settings);
			// append back tiles and add appropriate classes to prepare tiles
			data.faces = privMethods.prepTile($this, data);
			// action methods
			data.fade = function (count) { privMethods.fade($this, count); };
			data.slide = function (count) { privMethods.slide($this, count); };
			data.carousel = function (count) { privMethods.carousel($this, count); };
			data.flip = function (count) { privMethods.flip($this, count); };
			data.flipList = function (count) { privMethods.flipList($this, count); };
			var actions = {
				fade: data.fade,
				slide: data.slide,
				carousel: data.carousel,
				flip: data.flip,
				'flip-list': data.flipList
			};
			data.doAction = function (count) {
				// get the action for the current mode
				var action = actions[data.mode];
				if (typeof (action) === "function") {
					action(count);
					data.hasRun = true;
				}
				// prevent pauseOnHover from resuming a tile that has finished
				if (count == data.timer.repeatCount)
					data.runEvents = false;
			};

			// create a new tile timer
			data.timer = new $.fn.metrojs.TileTimer(data.delay, data.doAction, data.repeatCount);
			// apply the data
			$this.data("LiveTile", data);
			// handle events
			// only bind pause / play on hover if we are not using a fliplist or flipListOnHover isn't set set
			if (data.mode !== "flip-list" || data.flipListOnHover == false) {
				if (data.pauseOnHover) {
					privMethods.bindPauseOnHover($this);
				} else if (data.playOnHover) {
					privMethods.bindPlayOnHover($this, data);
				}
			}
			// add a click / link to the tile
			if (data.link.length > 0 || typeof (data.click) === "function") {
				$this.css({ cursor: 'pointer' }).bind("click.liveTile", function (e) {
					var proceed = true;
					if (typeof (data.click) === "function") {
						proceed = data.click($this, data) || false;
					}
					if (proceed && data.link.length > 0) {
						e.preventDefault();
						if (data.newWindow)
							window.open(data.link);
						else
							window.location = data.link;
					}
				});
			}
			// add bounce if set            
			privMethods.bindBounce($this, data);
			// start timer
			if (data.startNow && data.mode != "none") {
				data.runEvents = true;
				data.timer.start(data.initDelay);
			}
		});
	},
	// goto is a future reserved word
	'goto': function (options) {
		var opts, t = typeof (options);
		if (t === "undefined") {
			opts = {
				index: -99, //  same as next
				delay: 0,
				autoAniDirection: false
			};
		}
		if (t === "number" || !isNaN(options)) {
			opts = {
				index: parseInt(options, 10),
				delay: 0
			};
		} else if (t === "string") {
			if (options == "next") {
				opts = {
					index: -99,
					delay: 0
				};
			} else if (options.indexOf("prev") === 0) {
				opts = {
					index: -100,
					delay: 0
				};
			} else {
				$.error(options + " is not a recognized action for .liveTile(\"goto\")");
				return $(this);
			}
		} else if (t === "object") {
			if (typeof (options.delay) === "undefined") {
				options.delay = 0;
			}
			var ti = typeof (options.index);
			if (ti === "undefined") {
				options.index = 0;
			} else if (ti === "string") {
				if (options.index === "next")
					options.index = -99;
				else if (options.index.indexOf("prev") === 0)
					options.index = -100;
			}
			opts = options;
		}
		return $(this).each(function (tileIndex, ele) {
			var $tile = $(ele),
                data = $tile.data("LiveTile"),
                aniData = $tile.data("metrojs.tile"),
                goTo = opts.index;
			if (aniData.animating === true)
				return $(this);
			if (data.mode === "carousel") {
				// get the index based off of the active carousel slide
				var $cur = data.faces.$listTiles.filter(".active");
				var curIdx = data.faces.$listTiles.index($cur);
				// carousel will look for these values as triggers
				if (goTo === -100) { // prev
					// autoAniDirection determines if a forward or backward animation should be used based on the goTo index
					if (typeof (opts.autoAniDirection) === "undefined" || opts.autoAniDirection == true)
						data.tempValues.animationDirection = typeof (opts.animationDirection) === "undefined" ? "backward" : opts.animationDirection;
					goTo = curIdx === 0 ? data.faces.$listTiles.length - 1 : curIdx - 1;
				} else if (goTo === -99) { // next
					if (typeof (opts.autoAniDirection) === "undefined" || opts.autoAniDirection == true)
						data.tempValues.animationDirection = typeof (opts.animationDirection) === "undefined" ? "forward" : opts.animationDirection;
					goTo = curIdx + 1;
				}
				if (curIdx == goTo) {
					return;
				}
				if (typeof (opts.direction) !== "undefined") {
					data.tempValues.direction = opts.direction;
				}
				if (typeof (opts.animationDirection) !== "undefined") {
					data.tempValues.animationDirection = opts.animationDirection;
				}
				// the index is offset by 1 and incremented on animate
				if (goTo == 0)
					data.currentIndex = data.faces.$listTiles.length;
				else
					data.currentIndex = goTo - 1;
			} else // slide mode will use the index directly
				data.currentIndex = goTo;
			// start the timer
			data.runEvents = true;
			data.timer.start(opts.delay >= 0 ? opts.delay : data.delay);
		});
	},
	play: function (options) {
		var opts, t = typeof (options);
		if (t === "undefined") {
			opts = {
				delay: -1
			};
		} else if (t === "number") {
			opts = {
				delay: options
			};
		} else if (t === "object") {
			if (typeof (options.delay) === "undefined") {
				options.delay = -1;
			}
			opts = options;
		}
		return $(this).each(function (tileIndex, ele) {
			var $tile = $(ele),
                data = $tile.data("LiveTile");
			data.runEvents = true;
			if (opts.delay < 0 && !data.hasRun)
				opts.delay = data.initDelay;
			data.timer.start(opts.delay >= 0 ? opts.delay : data.delay);
		});
	},
	animate: function () { // this is really only useful for certain edge cases in slide mode, use 'play' to toggle animations
		return $(this).each(function (tileIndex, ele) {
			var $tile = $(ele),
                data = $tile.data("LiveTile");
			data.doAction();
		});
	},
	stop: function () {
		return $(this).each(function (tileIndex, ele) {
			var $tile = $(ele),
                data = $tile.data("LiveTile");
			data.hasRun = false;
			data.runEvents = false;
			data.timer.stop();
			window.clearTimeout(data.eventTimeout);
			window.clearTimeout(data.flCompleteTimeout);
			window.clearTimeout(data.completeTimeout);
			if (data.mode === "flip-list") {
				data.faces.$listTiles.each(function (idx, li) {
					var ldata = $(li).data("metrojs.tile");
					window.clearTimeout(ldata.eventTimeout);
					window.clearTimeout(ldata.flCompleteTimeout);
					window.clearTimeout(ldata.completeTimeout);
				});
			}
		});
	},
	pause: function () {
		return $(this).each(function (tileIndex, ele) {
			var $tile = $(ele),
                data = $tile.data("LiveTile");
			data.timer.pause();
			data.runEvents = false;
			window.clearTimeout(data.eventTimeout);
			window.clearTimeout(data.flCompleteTimeout);
			window.clearTimeout(data.completeTimeout);
			if (data.mode === "flip-list") {
				data.faces.$listTiles.each(function (idx, li) {
					var ldata = $(li).data("metrojs.tile");
					window.clearTimeout(ldata.eventTimeout);
					window.clearTimeout(ldata.flCompleteTimeout);
					window.clearTimeout(ldata.completeTimeout);
				});
			}
		});
	},
	restart: function (options) {
		var opts, t = typeof (options);
		if (t === "undefined") {
			opts = {
				delay: -1
			};
		} else if (t === "number") {
			opts = {
				delay: options
			};
		} else if (t === "object") {
			if (typeof (options.delay) === "undefined") {
				options.delay = -1;
			}
			opts = options;
		}
		return $(this).each(function (tileIndex, ele) {
			var $tile = $(ele),
                data = $tile.data("LiveTile");
			if (opts.delay < 0 && !data.hasRun)
				opts.delay = data.initDelay;
			data.hasRun = false;
			data.runEvents = true;
			data.timer.restart(opts.delay >= 0 ? opts.delay : data.delay);
		});
	},
	rebind: function (options) {
		return $(this).each(function (tileIndex, ele) {
			if (typeof (options) !== "undefined") {
				if (typeof (options.timer) !== "undefined" && options.timer != null) {
					options.timer.stop();
				}
				options.hasRun = false;
				pubMethods["init"].apply(ele, [options]);
			} else {
				pubMethods["init"].apply(ele, [{}]);
			}
		});
	},
	destroy: function (options) {
		var t = typeof (options), opts;
		if (t === "undefined") {
			opts = {
				removeCss: false
			};
		} else if (t === "boolean") {
			opts = {
				removeCss: options
			};
		} else if (t === "object") {
			if (typeof (options.removeCss) === "undefined") {
				options.removeCss = false;
			}
			opts = options;
		}
		return $(this).each(function (tileIndex, ele) {
			var $tile = $(ele);
			var data = $tile.data("LiveTile");
			if (typeof (data) === "undefined")
				return;
			$tile.unbind(".liveTile");
			var resetCss = helperMethods.appendStyleProperties({ margin: '', cursor: '' }, ['transform', 'transition'], ['', '']);
			data.timer.stop();
			window.clearTimeout(data.eventTimeout);
			window.clearTimeout(data.flCompleteTimeout);
			window.clearTimeout(data.completeTimeout);
			if (data.faces.$listTiles != null) {
				data.faces.$listTiles.each(function (idx, li) {
					var $li = $(li);
					if (data.mode === "flip-list") {
						var ldata = $li.data("metrojs.tile");
						window.clearTimeout(ldata.eventTimeout);
						window.clearTimeout(ldata.flCompleteTimeout);
						window.clearTimeout(ldata.completeTimeout);
					} else if (data.mode === "carousel") {
						var sdata = data.listData[idx];
						if (sdata.bounce) {
							privMethods.unbindMsBounce($li, sdata);
						}
					}
					if (opts.removeCss) {
						$li.removeClass("ha");
						$li.find(data.tileFaceSelector)
                            .unbind(".liveTile")
                            .removeClass("bounce flip-front flip-back ha slide slide-front slide-back")
                            .css(resetCss);
					} else {
						$li.find(data.tileFaceSelector).unbind(".liveTile");
					}
					$li.removeData("metrojs.tile");
				}).unbind(".liveTile");
			}
			if (data.faces.$front != null && opts.removeCss) {
				data.faces.$front.removeClass("flip-front flip-back ha slide slide-front slide-back")
                    .css(resetCss);
			}
			if (data.faces.$back != null && opts.removeCss) {
				data.faces.$back.removeClass("flip-front flip-back ha slide slide-front slide-back")
                    .css(resetCss);
			}
			// remove the bounce and hover methods
			// todo: combine all mouse/touch events (down, move, up)
			if (data.bounce) {
				privMethods.unbindMsBounce($tile, data);
			}
			if (data.playOnHover) {
				privMethods.unbindMsPlayOnHover($tile, data);
			}
			if (data.pauseOnhover) {
				privMethods.unbindMsPauseOnHover($tile, data);
			}
			$tile.removeClass("ha");
			$tile.removeData("LiveTile");
			$tile.removeData("metrojs.tile");
			data = null;
		});
	}
};

// private methods that are called by .liveTile
var privMethods = {
	//getDataOrDefault for older versions of jQuery that dont look for 'data-' properties
	dataAtr: function ($ele, name, def) {
		return typeof ($ele.attr('data-' + name)) !== "undefined" ? $ele.attr('data-' + name) : def;
	},
	dataMethod: function ($ele, name, def) {
		return typeof ($ele.data(name)) !== "undefined" ? $ele.data(name) : def;
	},
	getDataOrDefault: null,
	initTileData: function ($tile, stgs) {
		var useData = stgs.ignoreDataAttributes == false,
            tdata = null;
		if (this.getDataOrDefault == null)
			this.getDataOrDefault = metrojs.capabilities.isOldJQuery ? this.dataAtr : this.dataMethod;
		if (useData) {
			tdata = { //an object to store settings for later access                
				speed: this.getDataOrDefault($tile, "speed", stgs.speed),
				delay: this.getDataOrDefault($tile, "delay", stgs.delay),
				stops: this.getDataOrDefault($tile, "stops", stgs.stops),
				stack: this.getDataOrDefault($tile, "stack", stgs.stack),
				mode: this.getDataOrDefault($tile, "mode", stgs.mode),
				direction: this.getDataOrDefault($tile, "direction", stgs.direction),
				useHardwareAccel: this.getDataOrDefault($tile, "ha", stgs.useHardwareAccel),
				repeatCount: this.getDataOrDefault($tile, "repeat", stgs.repeatCount),
				swap: this.getDataOrDefault($tile, "swap", stgs.swap),
				appendBack: this.getDataOrDefault($tile, "appendback", stgs.appendBack),
				currentIndex: this.getDataOrDefault($tile, "start-index", stgs.currentIndex),
				animationDirection: this.getDataOrDefault($tile, "ani-direction", stgs.animationDirection),
				startNow: this.getDataOrDefault($tile, "start-now", stgs.startNow),
				tileSelector: this.getDataOrDefault($tile, "tile-selector", stgs.tileSelector),
				tileFaceSelector: this.getDataOrDefault($tile, "face-selector", stgs.tileFaceSelector),
				bounce: this.getDataOrDefault($tile, "bounce", stgs.bounce),
				bounceDirections: this.getDataOrDefault($tile, "bounce-dir", stgs.bounceDirections),
				bounceFollowsMove: this.getDataOrDefault($tile, "bounce-follows", stgs.bounceFollowsMove),
				click: this.getDataOrDefault($tile, "click", stgs.click),
				link: this.getDataOrDefault($tile, "link", stgs.link),
				newWindow: this.getDataOrDefault($tile, "new-window", stgs.newWindow),
				alwaysTrigger: this.getDataOrDefault($tile, "always-trigger", stgs.alwaysTrigger),
				flipListOnHover: this.getDataOrDefault($tile, "flip-onhover", stgs.flipListOnHover),
				pauseOnHover: this.getDataOrDefault($tile, "pause-onhover", stgs.pauseOnHover),
				playOnHover: this.getDataOrDefault($tile, "play-onhover", stgs.playOnHover),
				onHoverDelay: this.getDataOrDefault($tile, "hover-delay", stgs.onHoverDelay),
				onHoverOutDelay: this.getDataOrDefault($tile, "hoverout-delay", stgs.onHoverOutDelay),
				noHAflipOpacity: this.getDataOrDefault($tile, "flip-opacity", stgs.noHAflipOpacity),
				useTranslate: this.getDataOrDefault($tile, "use-translate", stgs.useTranslate),
				runEvents: false,
				isReversed: false,
				loopCount: 0,
				contentModules: [],
				listData: [],
				height: $tile.height(),
				width: $tile.width(),
				tempValues: {}
			};
		} else {
			tdata = $.extend(true, {
				runEvents: false,
				isReversed: false,
				loopCount: 0,
				contentModules: [],
				listData: [],
				height: $tile.height(),
				width: $tile.width(),
				tempValues: {}
			}, stgs);
		}
		tdata.useTranslate = tdata.useTranslate && tdata.useHardwareAccel && metrojs.capabilities.canTransform && metrojs.capabilities.canTransition;
		// set the margin to half of the height or width based on the direction
		tdata.margin = (tdata.direction === "vertical") ? tdata.height / 2 : tdata.width / 2;
		// convert stops if needed
		tdata.stops = (typeof (stgs.stops) === "object" && (stgs.stops instanceof Array)) ? stgs.stops : ("" + tdata.stops).split(",");
		// add a return stop
		if (tdata.stops.length === 1)
			tdata.stops.push("0px");
		// add content modules, start with global swaps            
		var swaps = tdata.swap instanceof Array ? tdata.swap : tdata.swap.replace(' ', '').split(",");
		// get the front and back swap data
		var sf = useData ? this.getDataOrDefault($tile, "swap-front", stgs.swapFront) : stgs.swapFront;
		var sb = useData ? this.getDataOrDefault($tile, "swap-back", stgs.swapBack) : stgs.swapBack;
		// set the data to the global value if its still the default
		if (sf instanceof Array) {
			tdata.swapFront = sf;
		} else {
			tdata.swapFront = sf === '-' ? swaps : sf.replace(' ', '').split(",");
		}

		if (sb instanceof Array) {
			tdata.swapBack = sb;
		} else {
			tdata.swapBack = sb === '-' ? swaps : sb.replace(' ', '').split(",");
		}
		// make sure the swaps includes all front and back swaps
		var i;
		for (i = 0; i < tdata.swapFront.length; i++) {
			if (tdata.swapFront[i].length > 0 && $.inArray(tdata.swapFront[i], swaps) === -1)
				swaps.push(tdata.swapFront[i]);
		}
		for (i = 0; i < tdata.swapBack.length; i++) {
			if (tdata.swapBack[i].length > 0 && $.inArray(tdata.swapBack[i], swaps) === -1)
				swaps.push(tdata.swapBack[i]);
		}
		tdata.swap = swaps;
		// add all required content modules for the swaps
		for (i = 0; i < swaps.length; i++) {
			if (swaps[i].length > 0) {
				var moduleIdx = $.fn.liveTile.contentModules.hasContentModule(swaps[i]);
				if (moduleIdx > -1) {
					tdata.contentModules.push($.fn.liveTile.contentModules.modules[moduleIdx]);
				}
			}
		}
		// set the initDelay value to the delay if it's not set
		tdata.initDelay = useData ? this.getDataOrDefault($tile, "initdelay", stgs.initDelay) : stgs.initDelay;
		// if the delay is -1 call the triggerDelay function to get a value
		if (tdata.delay < -1)
			tdata.delay = stgs.triggerDelay(1);
		else if (tdata.delay < 0)
			tdata.delay = 3500 + (Math.random() * 4501);
		// match the delay value if less than 0
		if (tdata.initDelay < 0)
			tdata.initDelay = tdata.delay;
		// merge the objects
		var mergedData = {};
		for (i = 0; i < tdata.contentModules.length; i++)
			$.extend(mergedData, tdata.contentModules[i].data);
		$.extend(mergedData, stgs, tdata);
		// add flip-list / carousel data
		var $tiles;
		if (mergedData.mode === "flip-list") {
			$tiles = $tile.find(mergedData.tileSelector).not(".tile-title");
			$tiles.each(function (idx, ele) {
				var $li = $(ele);
				var ldata = {
					direction: useData ? privMethods.getDataOrDefault($li, "direction", mergedData.direction) : mergedData.direction,
					newWindow: useData ? privMethods.getDataOrDefault($li, "new-window", false) : false,
					link: useData ? privMethods.getDataOrDefault($li, "link", "") : "",
					faces: { $front: null, $back: null },
					height: $li.height(),
					width: $li.width(),
					isReversed: false
				};
				ldata.margin = ldata.direction === "vertical" ? ldata.height / 2 : ldata.width / 2;
				mergedData.listData.push(ldata);
			});
		} else if (mergedData.mode === "carousel") {
			mergedData.stack = true;
			$tiles = $tile.find(mergedData.tileSelector).not(".tile-title");
			$tiles.each(function (idx, ele) {
				var $slide = $(ele);
				var sdata = {
					bounce: useData ? privMethods.getDataOrDefault($slide, "bounce", false) : false,
					bounceDirections: useData ? privMethods.getDataOrDefault($slide, "bounce-dir", "all") : "all",
					link: useData ? privMethods.getDataOrDefault($slide, "link", "") : "",
					newWindow: useData ? privMethods.getDataOrDefault($slide, "new-window", false) : false,
					animationDirection: useData ? privMethods.getDataOrDefault($slide, "ani-direction", "") : "",
					direction: useData ? privMethods.getDataOrDefault($slide, "direction", "") : ""
				};
				mergedData.listData.push(sdata);
			});
		}
		// get any additional options from the modules
		for (i = 0; i < tdata.contentModules.length; i++) {
			if (typeof (mergedData.contentModules[i].initData) === "function")
				mergedData.contentModules[i].initData(mergedData, $tile);
		}
		tdata = null;
		return mergedData;
	},
	prepTile: function ($tile, tdata) {
		//add the mode to the tile if it's not already there.
		$tile.addClass(tdata.mode);
		var ret = {
			$tileFaces: null,     // all possible tile faces in a liveTile in a non list mode
			$listTiles: null,     // all possible tiles in a liveTile in a list mode
			$front: null,         // the front face of a tile in a non list mode
			$back: null          // the back face of a tile in a non list mode
		};
		var rotateDir, frontCss, backCss, tileCss;
		// prepare the tile based on the current mode
		switch (tdata.mode) {
			case "fade":
				// front and back tile faces
				ret.$tileFaces = $tile.find(tdata.tileFaceSelector).not(".tile-title");
				ret.$front = (tdata.faces.$front != null && tdata.faces.$front.length > 0) ?
                               tdata.faces.$front.addClass('fade-front') :
                               ret.$tileFaces.filter(":first").addClass('fade-front');
				// get back face from settings, via selector, or append it if necessary
				if (tdata.faces.$back != null && tdata.faces.$back.length > 0)    // use $back option
					ret.$back = tdata.faces.$back.addClass('fade-back');
				else if (ret.$tileFaces.length > 1)                             // get the last tile face
					ret.$back = ret.$tileFaces.filter(":last").addClass('fade-back');
				else if (tdata.appendBack)                                       // append the back tile
					ret.$back = $('<div class="fade-back"></div>').appendTo($tile);
				else                                                            // just keep an empty placeholder
					ret.$back = $('<div></div>');
				break;
			case "slide":
				// front and back tile faces
				ret.$tileFaces = $tile.find(tdata.tileFaceSelector).not(".tile-title");
				// get front face from settings or via selector
				ret.$front = (tdata.faces.$front != null && tdata.faces.$front.length > 0) ?
                                tdata.faces.$front.addClass('slide-front') :
                                ret.$tileFaces.filter(":first").addClass('slide-front'); // using :first for pre jQuery 1.4
				// get back face from settings, via selector, or append it if necessary
				if (tdata.faces.$back != null && tdata.faces.$back.length > 0)    // use $back option
					ret.$back = tdata.faces.$back.addClass('slide-back');
				else if (ret.$tileFaces.length > 1)                             // get the last tile face
					ret.$back = ret.$tileFaces.filter(":last").addClass('slide-back');
				else if (tdata.appendBack)                                       // append the back tile
					ret.$back = $('<div class="slide-back"></div>').appendTo($tile);
				else                                                            // just keep an empty placeholder
					ret.$back = $('<div></div>');
				// stack mode
				if (tdata.stack == true) {
					var prop,
                        translate;
					if (tdata.direction === "vertical") {
						prop = "top",
                        translate = 'translate(0%, -100%) translateZ(0)';
					} else {
						prop = "left",
                        translate = 'translate(-100%, 0%) translateZ(0)';
					}
					backCss = {};
					if (tdata.useTranslate)
						helperMethods.appendStyleProperties(backCss, ['transform'], [translate]);
					else
						backCss[prop] = "-100%";
					ret.$back.css(backCss);
				}
				$tile.data("metrojs.tile", { animating: false });
				if (metrojs.capabilities.canTransition && tdata.useHardwareAccel) {   // hardware accelerated :)                        
					$tile.addClass("ha");
					ret.$front.addClass("ha");
					ret.$back.addClass("ha");
				}
				break;
			case "carousel":
				ret.$listTiles = $tile.find(tdata.tileSelector).not(".tile-title");
				var numberOfSlides = ret.$listTiles.length;
				$tile.data("metrojs.tile", { animating: false });
				tdata.currentIndex = Math.min(tdata.currentIndex, numberOfSlides - 1);
				ret.$listTiles.each(function (idx, ele) {
					var $slide = $(ele).addClass("slide");
					var sdata = tdata.listData[idx],
                        aniDir = typeof (sdata.animationDirection) === "string" && sdata.animationDirection.length > 0 ? sdata.animationDirection : tdata.animationDirection,
                        dir = typeof (sdata.direction) === "string" && sdata.direction.length > 0 ? sdata.direction : tdata.direction;
					if (idx == tdata.currentIndex) {
						$slide.addClass("active");
					} else if (aniDir === "forward") {
						if (dir === "vertical") {
							tileCss = tdata.useTranslate ? helperMethods.appendStyleProperties({}, ['transform'], ['translate(0%, 100%) translateZ(0)']) :
                                                   { left: '0%', top: '100%' };
							$slide.css(tileCss);
						} else {
							tileCss = tdata.useTranslate ? helperMethods.appendStyleProperties({}, ['transform'], ['translate(100%, 0%) translateZ(0)']) :
                                                   { left: '100%', top: '0%' };
							$slide.css(tileCss);
						}
					} else if (aniDir === "backward") {
						if (dir === "vertical") {
							tileCss = tdata.useTranslate ? helperMethods.appendStyleProperties({}, ['transform'], ['translate(0%, -100%) translateZ(0)']) :
                                                   { left: '0%', top: '-100%' };
							$slide.css(tileCss);
						} else {
							tileCss = tdata.useTranslate ? helperMethods.appendStyleProperties({}, ['transform'], ['translate(-100%, 0%) translateZ(0)']) :
                                                   { left: '-100%', top: '0%' };
							$slide.css(tileCss);
						}
					}
					// link and bounce can be bound per slide
					// add the click handler and link property
					privMethods.bindLink($slide, sdata);
					// add the bounce effect
					if (tdata.useHardwareAccel && metrojs.capabilities.canTransition)
						privMethods.bindBounce($slide, sdata);
					$slide = null;
					sdata = null;
				});
				// hardware accelerated :)
				if (metrojs.capabilities.canFlip3d && tdata.useHardwareAccel) {
					$tile.addClass("ha");
					ret.$listTiles.addClass("ha");
				}
				break;
			case "flip-list":
				// the tile containers inside the list
				ret.$listTiles = $tile.find(tdata.tileSelector).not(".tile-title");
				ret.$listTiles.each(function (idx, ele) {
					var $li = $(ele).addClass("tile-" + (idx + 1));
					// add the flip class to the front face
					var $lFront = $li.find(tdata.tileFaceSelector).filter(":first").addClass("flip-front").css({ margin: "0px" });
					// append a back tile face if one isnt present
					if ($li.find(tdata.tileFaceSelector).length === 1 && tdata.appendBack == true)
						$li.append("<div></div>");
					// add the flip class to the back face
					var $lBack = $li.find(tdata.tileFaceSelector).filter(":last").addClass("flip-back").css({ margin: "0px" });
					// update the tdata object with the faces
					tdata.listData[idx].faces.$front = $lFront;
					tdata.listData[idx].faces.$back = $lBack;
					// set data for overrides and easy access
					$li.data("metrojs.tile", {
						animating: false,
						count: 1,
						completeTimeout: null,
						flCompleteTimeout: null,
						index: idx
					});
					var ldata = $li.data("metrojs.tile");
					// add the hardware accelerated classes
					if (metrojs.capabilities.canFlip3d && tdata.useHardwareAccel) {   // hardware accelerated :)
						$li.addClass("ha");
						$lFront.addClass("ha");
						$lBack.addClass("ha");
						rotateDir = tdata.listData[idx].direction === "vertical" ? "rotateX(180deg)" : "rotateY(180deg)";
						backCss = helperMethods.appendStyleProperties({}, ["transform"], [rotateDir]);
						$lBack.css(backCss);
					} else { // not hardware accelerated :(
						// the front tile face will take up the entire tile
						frontCss = (tdata.listData[idx].direction === "vertical") ?
				{ height: '100%', width: '100%', marginTop: '0px', opacity: '1' } :
				{ height: '100%', width: '100%', marginLeft: '0px', opacity: '1' };
						// the back tile face is hidden by default and expanded halfway through a flip
						backCss = (tdata.listData[idx].direction === "vertical") ?
				{ height: '0px', width: '100%', marginTop: tdata.listData[idx].margin + 'px', opacity: tdata.noHAflipOpacity } :
				{ height: '100%', width: '0px', marginLeft: tdata.listData[idx].margin + 'px', opacity: tdata.noHAflipOpacity };
						$lFront.css(frontCss);
						$lBack.css(backCss);
					}
					var flipEnded = function () {
						ldata.count++;
						if (ldata.count >= MAX_LOOP_COUNT)
							ldata.count = 1;
					};
					if (tdata.flipListOnHover) {
						var event = tdata.flipListOnHoverEvent + ".liveTile";
						$lFront.bind(event, function () {
							privMethods.flip($li, ldata.count, tdata, flipEnded);
						});
						$lBack.bind(event, function () {
							privMethods.flip($li, ldata.count, tdata, flipEnded);
						});
					}
					if (tdata.listData[idx].link.length > 0) {
						$li.css({ cursor: 'pointer' }).bind("click.liveTile", function () {
							if (tdata.listData[idx].newWindow)
								window.open(tdata.listData[idx].link);
							else
								window.location = tdata.listData[idx].link;
						});
					}
				});
				break;
			case "flip":
				// front and back tile faces
				ret.$tileFaces = $tile.find(tdata.tileFaceSelector).not(".tile-title");
				// get front face from settings or via selector
				ret.$front = (tdata.faces.$front != null && tdata.faces.$front.length > 0) ?
                                tdata.faces.$front.addClass('flip-front') :
                                ret.$tileFaces.filter(":first").addClass('flip-front');
				// get back face from settings, via selector, or append it if necessary
				if (tdata.faces.$back != null && tdata.faces.$back.length > 0) {
					// use $back option
					ret.$back = tdata.faces.$back.addClass('flip-back');
				} else if (ret.$tileFaces.length > 1) {
					// get the last tile face
					ret.$back = ret.$tileFaces.filter(":last").addClass('flip-back');
				} else if (tdata.appendBack) {
					// append the back tile
					ret.$back = $('<div class="flip-back"></div>').appendTo($tile);
				} else {
					// just keep an empty placeholder
					ret.$back = $('<div></div>');
				}
				$tile.data("metrojs.tile", { animating: false });
				if (metrojs.capabilities.canFlip3d && tdata.useHardwareAccel) {
					// hardware accelerated :)
					$tile.addClass("ha");
					ret.$front.addClass("ha");
					ret.$back.addClass("ha");
					rotateDir = tdata.direction === "vertical" ? "rotateX(180deg)" : "rotateY(180deg)";
					backCss = helperMethods.appendStyleProperties({}, ["transform"], [rotateDir]);
					ret.$back.css(backCss);

				} else {
					// not hardware accelerated :(
					// the front tile face will take up the entire tile
					frontCss = (tdata.direction === "vertical") ?
			{ height: '100%', width: '100%', marginTop: '0px', opacity: '1' } :
			{ height: '100%', width: '100%', marginLeft: '0px', opacity: '1' };
					// the back tile face is hidden by default and expanded halfway through a flip
					backCss = (tdata.direction === "vertical") ?
			{ height: '0%', width: '100%', marginTop: tdata.margin + 'px', opacity: '0' } :
			{ height: '100%', width: '0%', marginLeft: tdata.margin + 'px', opacity: '0' };
					ret.$front.css(frontCss);
					ret.$back.css(backCss);
				}
				break;
		}
		return ret;
	},
	bindPauseOnHover: function ($tile) {
		// stop the tile when hovered and resume after a delay
		(function () {
			var data = $tile.data("LiveTile"),
                isOver = false,
                isPending = false,
				touchStartedOver = false,
				touchStartedOut = false,
                pauseIn = (data.pauseOnHoverEvent == "both" || data.pauseOnHoverEvent == "mouseover" || data.pauseOnHoverEvent == "mouseenter"),
                pauseOut = (data.pauseOnHoverEvent == "both" || data.pauseOnHoverEvent == "mouseout" || data.pauseOnHoverEvent == "mouseleave");
			data.pOnHoverMethods = {
				pause: function () {
					data.timer.pause();
					if (data.mode === "flip-list") {
						data.faces.$listTiles.each(function (idx, li) {
							window.clearTimeout($(li).data("metrojs.tile").completeTimeout);
						});
					}
				},
				over: function (e, isTouch) {
					isTouch = typeof (isTouch) == "undefined" ? false : isTouch;
					if (!isTouch && touchStartedOver) {
						return;
					}
					if (isOver || isPending)
						return;
					if (data.runEvents) {
						isPending = true;
						data.eventTimeout = window.setTimeout(function () {
							isPending = false;
							if (pauseOut)
								isOver = true;
							touchStartedOver = false;
							data.pOnHoverMethods.pause();
						}, data.onHoverDelay);
					}
				},
				out: function (e, isTouch) {
					isTouch = typeof (isTouch) == "undefined" ? false : isTouch;
					if (!isTouch && touchStartedOut == true) {
						return;
					}
					if (isPending) {
						window.clearTimeout(data.eventTimeout);
						isPending = false;
						return;
					}
					if (pauseIn) {
						if (!isOver && !isPending)
							return;
						if (data.runEvents) {
							// todo: use a custom value if provided
							data.timer.start(data.hasRun ? data.delay : data.initDelay);
						}
					} else {
						data.pOnHoverMethods.pause();
					}
					isOver = false;
					touchStartedOut = false;
				}
			};
			if (!metrojs.capabilities.canTouch) {
				if (pauseIn)
					$tile.bind("mouseover.liveTile", data.pOnHoverMethods.over);
				if (pauseOut)
					$tile.bind("mouseout.liveTile", data.pOnHoverMethods.out);
			} else {
				if (window.PointerEvent || window.MSPointerEvent) { // pointer
					var eventPrefix = window.MSPointerEvent ? "MS" : "";
					if (pauseIn) {
						$tile[0].addEventListener(eventPrefix + 'PointerOver', data.pOnHoverMethods.over, false);
					}
					if (pauseOut) {
						$tile[0].addEventListener(eventPrefix + 'PointerOut', data.pOnHoverMethods.out, false);
					}
				} else { // touch events
					if (pauseIn) {
						$tile.bind("mouseover.liveTile", data.pOnHoverMethods.over);
						$tile.bind("touchstart.liveTile", function (event) {
							touchStartedOver = false;
							data.pOnHoverMethods.over.apply($tile[0], [event, true]);
						});
					}
					if (pauseOut) {
						$tile.bind("mouseout.liveTile", data.pOnHoverMethods.out);
						$tile.bind("touchend.liveTile", function (event) {
							touchStartedOut = false;
							data.pOnHoverMethods.out.apply($tile[0], [event, true]);
						});
					}
				}
			}
		})();
	},
	unbindMsPauseOnHover: function ($tile, data) {
		if (typeof (data.pOnHoverMethods) !== "undefined" && (window.PointerEvent || window.MSPointerEvent)) {
			var eventPrefix = window.MSPointerEvent ? "MS" : "";
			$tile[0].removeEventListener(eventPrefix + 'PointerOver', data.pOnHoverMethods.over, false);
			$tile[0].removeEventListener(eventPrefix + 'PointerOut', data.pOnHoverMethods.out, false);
		}
	},
	bindPlayOnHover: function ($tile, data) {
		// play the tile immediately when hovered
		(function () {
			var isOver = false,
                isPending = false,
				touchStartedOver = false,
				touchStartedOut = false,
                playIn = (data.playOnHoverEvent == "both" || data.playOnHoverEvent == "mouseover" || data.playOnHoverEvent == "mouseenter"),
                playOut = (data.playOnHoverEvent == "both" || data.playOnHoverEvent == "mouseout" || data.playOnHoverEvent == "mouseleave");
			data.onHoverMethods = {
				over: function (event, isTouch) {
					isTouch = typeof (isTouch) == "undefined" ? false : isTouch;
					if (!isTouch && touchStartedOver) {
						return;
					}
					if (isOver || isPending || (data.bounce && data.bounceMethods.down != "no"))
						return;
					// if startNow is set use the opposite of isReversed so we're in sync            
					var rev = (data.mode == "flip") || (data.startNow ? !data.isReversed : data.isReversed);
					window.clearTimeout(data.eventTimeout);
					if ((data.runEvents && rev) || !data.hasRun) {
						isPending = true;
						data.eventTimeout = window.setTimeout(function () {
							isPending = false;
							if (playOut)
								isOver = true;
							pubMethods["play"].apply($tile[0], [0]);
							touchStartedOver = false;
						}, data.onHoverDelay);
					}
				},
				out: function (event, isTouch) {
					isTouch = typeof(isTouch) == "undefined" ? false : isTouch;
					if (!isTouch && touchStartedOut == true) {
						return;
					}
					if (isPending) {
						window.clearTimeout(data.eventTimeout);
						isPending = false;
						return;
					}
					if (playIn) {
						if (!isOver && !isPending) {
							return;
						}
					}
					window.clearTimeout(data.eventTimeout);
					data.eventTimeout = window.setTimeout(function () {
						var rev = (data.mode == "flip") || (data.startNow ? data.isReversed : !data.isReversed);
						if (data.runEvents && rev) {
							pubMethods["play"].apply($tile[0], [0]);
						}
						touchStartedOut = false;
						isOver = false;
					}, data.speed + data.onHoverOutDelay);
				}
			};
			if (!metrojs.capabilities.canTouch) {
				if (playIn)
					$tile.bind('mouseenter.liveTile', data.onHoverMethods.over);
				if (playOut)
					$tile.bind('mouseleave.liveTile', data.onHoverMethods.out);
			} else {
				if (window.PointerEvent || window.MSPointerEvent) { // pointer
					var eventPrefix = window.MSPointerEvent ? "MS" : "";
					if (playIn) {
						//$tile[0].addEventListener(eventPrefix + 'PointerDown', data.onHoverMethods.over, false);
						$tile[0].addEventListener(eventPrefix + 'PointerEnter', data.onHoverMethods.over, false);
					}
					// mouseleave gives a more consistent effect than out when the children are transformed
					if (playOut)
						$tile[0].addEventListener(eventPrefix + 'PointerLeave', data.onHoverMethods.out, false);
				} else { // touch events
					if (playIn) {
						$tile.bind("touchstart.liveTile", function (event) {
							touchStartedOver = true;
							data.onHoverMethods.over.apply($tile[0], [event, true]);
						});
						$tile.bind("mouseenter.liveTile", data.onHoverMethods.over);
					}
					if (playOut) {
						$tile.bind("touchend.liveTile,touchcancel.liveTile", function (event) {
							touchStartedOut = false;
							data.onHoverMethods.out.apply($tile[0], [event, true]);
						});
						$tile.bind("mouseleave.liveTile", data.onHoverMethods.out);
					}
				}

			}
		})();
	},
	unbindMsPlayOnHover: function ($tile, data) {
		if (typeof (data.onHoverMethods) !== "undefined" && (window.PointerEvent || window.MSPointerEvent)) {
			var eventPrefix = window.MSPointerEvent ? "MS" : "";
			$tile[0].removeEventListener(eventPrefix + 'PointerOver', data.onHoverMethods.over, false);
		}
	},
	bindBounce: function ($tile, data) {
		// add bounce
		if (data.bounce) {
			$tile.addClass("bounce");
			$tile.addClass("noselect");
			(function () {
				data.bounceMethods = {
					down: "no",
					threshold: 30,
					zeroPos: { x: 0, y: 0 },
					eventPos: { x: 0, y: 0 },
					inTilePos: { x: 0, y: 0 },
					pointPos: { x: 0, y: 0 },
					regions: {
						c: [0, 0],      // center
						tl: [-1, -1],   // top left
						tr: [1, -1],    // top right
						bl: [-1, 1],    // bottom left
						br: [1, 1],     // bottom right
						t: [null, -1],  // top
						r: [1, null],   // right
						b: [null, 1],   // bottom
						l: [-1, null]   // left
					},
					targets: {
						all: ['c', 't', 'r', 'b', 'l', 'tl', 'tr', 'bl', 'br'],
						edges: ['c', 't', 'r', 'b', 'l'],
						corners: ['c', 'tl', 'tr', 'bl', 'br']
					},
					hitTest: function ($el, pos, targetRegions, omegaC) {
						var regions = data.bounceMethods.regions,
                            checkFor = data.bounceMethods.targets[targetRegions],
                            i = 0,
                            strictMatch = null,
                            looseMatch = null,
                            defResult = { hit: [0, 0], name: 'c' };
						// scale only for android 2.x and old ie
						if (metrojs.capabilities.isOldAndroid || !metrojs.capabilities.canTransition)
							return defResult;
						if (typeof (checkFor) == "undefined") {
							if (typeof (targetRegions) === "string")
								checkFor = targetRegions.split(',');
							// only default to center if explicitly requested
							if ($.isArray(checkFor) && $.inArray('c') == -1) {
								omegaC = 0;
								defResult = null;
							}
						}
						// check for a matching region
						var w = $el.width(),
                           h = $el.height(),
                           // center threshold -  maximum amount from center
                           ct = [w * omegaC, h * omegaC],
                           // how far from the center is the point
                           diffX = pos.x - (w * 0.5),
                           diffY = pos.y - (h * 0.5),
                            // if we're beyond the center threshold, set -1 or 1 else 0
                           hit = [
                               diffX > 0 ? (Math.abs(diffX) <= ct[0] ? 0 : 1) : (Math.abs(diffX) <= ct[0] ? 0 : -1),
                               diffY > 0 ? (Math.abs(diffY) <= ct[1] ? 0 : 1) : (Math.abs(diffY) <= ct[1] ? 0 : -1)
                           ];
						for (; i < checkFor.length; i++) {
							if (strictMatch != null)
								return strictMatch;
							var r = checkFor[i],
                                region = regions[r];
							if (r == "*") {
								r = checkFor[i + 1];
								return { region: regions[r], name: r };
							}
							if (hit[0] == region[0] && hit[1] == region[1]) {
								// found the region with a strict lookup
								strictMatch = { hit: region, name: r };
							} else if ((hit[0] == region[0] || region[0] == null) && (hit[1] == region[1] || region[1] == null)) {
								// found the region with a loose lookup
								looseMatch = { hit: region, name: r };
							}
						}
						// prefer a strict match
						if (strictMatch != null)
							return strictMatch;
						else if (looseMatch != null)
							return looseMatch;
						else // no matches were found, return center
							return defResult;
					},
					bounceDown: function (e) {
						if (e.target.tagName == "A" && !$(e).is(".bounce"))
							return;
						var point = e.originalEvent && e.originalEvent.touches ? e.originalEvent.touches[0] : e,
                            offsetOfTile = $tile.offset(),
                            scrollX = window.pageXOffset,
                            scrollY = window.pageYOffset;
						data.bounceMethods.pointPos = {
							x: point.pageX,
							y: point.pageY
						};
						data.bounceMethods.inTilePos = {
							x: point.pageX - offsetOfTile.left,
							y: point.pageY - offsetOfTile.top
						};

						if (!data.$tileParent) {
							data.$tileParent = $tile.parent();
						}
						var offsetOfParent = data.$tileParent.offset();
						data.bounceMethods.eventPos = {
							x: (offsetOfTile.left - offsetOfParent.left) + ($tile.width() / 2),
							y: (offsetOfTile.top - offsetOfParent.top) + ($tile.height() / 2)
						};
						var hit = data.bounceMethods.hitTest($tile, data.bounceMethods.inTilePos, data.bounceDirections, 0.25);
						if (hit == null)
							data.bounceMethods.down = "no";
						else {
							if (window.PointerEvent || window.MSPointerEvent) {
								var eventPrefix = window.MSPointerEvent ? "MS" : "";
								document.addEventListener(eventPrefix + 'PointerUp', data.bounceMethods.bounceUp, false);
								$tile[0].addEventListener(eventPrefix + 'PointerUp', data.bounceMethods.bounceUp, false);
								document.addEventListener(eventPrefix + 'PointerCancel', data.bounceMethods.bounceUp, false);
								if (data.bounceFollowsMove)
									$tile[0].addEventListener(eventPrefix + 'PointerMove', data.bounceMethods.bounceMove, false);
							} else {
								$(document).bind("mouseup.liveTile, touchend.liveTile, touchcancel.liveTile, dragstart.liveTile", data.bounceMethods.bounceUp);
								if (data.bounceFollowsMove) {
									$tile.bind("touchmove.liveTile", data.bounceMethods.bounceMove);
									$tile.bind("mousemove.liveTile", data.bounceMethods.bounceMove);
								}
							}
							var bClass = "bounce-" + hit.name;
							$tile.addClass(bClass);
							data.bounceMethods.down = bClass;
							data.bounceMethods.downPcss = helperMethods.appendStyleProperties({}, ['perspective-origin'], [data.bounceMethods.eventPos.x + "px " + data.bounceMethods.eventPos.y + "px"]);
							data.$tileParent.css(data.bounceMethods.downPcss);
						}
					},
					bounceUp: function () {
						if (data.bounceMethods.down != "no") {
							data.bounceMethods.unBounce();
							if (window.PointerEvent || window.MSPointerEvent) {
								var eventPrefix = window.MSPointerEvent ? "MS" : "";
								document.removeEventListener(eventPrefix + 'PointerUp', data.bounceMethods.bounceUp, false);
								$tile[0].removeEventListener(eventPrefix + 'PointerUp', data.bounceMethods.bounceUp, false);
								document.removeEventListener(eventPrefix + 'PointerCancel', data.bounceMethods.bounceUp, false);
								if (data.bounceFollowsMove)
									$tile[0].removeEventListener(eventPrefix + 'PointerMove', data.bounceMethods.bounceMove, false);

							} else
								$(document).unbind("mouseup.liveTile, touchend.liveTile, touchcancel.liveTile, dragstart.liveTile", data.bounceMethods.bounceUp);
							if (data.bounceFollowsMove) {
								$tile.unbind("touchmove.liveTile", data.bounceMethods.bounceMove);
								$tile.unbind("mousemove.liveTile", data.bounceMethods.bounceMove);
							}
						}
					},
					bounceMove: function (e) {
						if (data.bounceMethods.down != "no") {
							var point = e.originalEvent && e.originalEvent.touches ? e.originalEvent.touches[0] : e,
                                x = Math.abs(point.pageX - data.bounceMethods.pointPos.x),
                                y = Math.abs(point.pageY - data.bounceMethods.pointPos.y);
							if (x > data.bounceMethods.threshold || y > data.bounceMethods.threshold) {
								var bounceClass = data.bounceMethods.down;
								data.bounceMethods.bounceDown(e);
								if (bounceClass != data.bounceMethods.down)
									$tile.removeClass(bounceClass);
							}
						}
					},
					unBounce: function () {
						$tile.removeClass(data.bounceMethods.down);
						if (typeof (data.bounceMethods.downPcss) == "object") {
							var names = ['perspective-origin', 'perspective-origin-x', 'perspective-origin-y'],
                                vals = ['', '', ''];
							data.bounceMethods.downPcss = helperMethods.appendStyleProperties({}, names, vals);
							// let the bounce finish and then strip out the perspective
							window.setTimeout(function () {
								data.$tileParent.css(data.bounceMethods.downPcss);
							}, 200);
						}
						data.bounceMethods.down = "no";
						data.bounceMethods.inTilePos = data.bounceMethods.zeroPos;
						data.bounceMethods.eventPos = data.bounceMethods.zeroPos;
					}
				};
				// IE 10+
				if (window.PointerEvent || window.MSPointerEvent) {// touch only -> // && window.navigator.msMaxTouchPoints) {
					var eventPrefix = window.MSPointerEvent ? "MS" : "";
					$tile[0].addEventListener(eventPrefix + 'PointerDown', data.bounceMethods.bounceDown, false);
				} else if (metrojs.capabilities.canTouch) {
					// everybody else                    
					$tile.bind("touchstart.liveTile", data.bounceMethods.bounceDown);
					$tile.bind("mousedown.liveTile", data.bounceMethods.bounceDown);

				} else {
					$tile.bind("mousedown.liveTile", data.bounceMethods.bounceDown);
				}
			})();
		}
	},
	unbindMsBounce: function ($tile, data) {
		if (data.bounce && (window.PointerEvent || window.MSPointerEvent)) {// touch only -> // && window.navigator.msMaxTouchPoints) {
			var eventPrefix = window.MSPointerEvent ? "MS" : "";
			$tile[0].removeEventListener(eventPrefix + 'PointerDown', data.bounceMethods.bounceDown, false);
			$tile[0].removeEventListener(eventPrefix + 'PointerCancel', data.bounceMethods.bounceUp, false);
			$tile[0].removeEventListener(eventPrefix + 'PointerOut', data.bounceMethods.bounceUp, false);
			//$tile[0].removeEventListener(eventPrefix + 'PointerMove', data.bounceMethods.bounceMove, false);
		}
	},
	bindLink: function ($tile, data) {
		if (data.link.length > 0) {
			$tile.css({ cursor: 'pointer' }).bind("click.liveTile", function (e) {
				if (e.target.tagName == "A" && !$(e).is(".live-tile,.slide,.flip"))
					return;
				if (data.newWindow)
					window.open(data.link);
				else
					window.location = data.link;
			});
		}
	},
	runContenModules: function (data, $front, $back, index) {
		for (var i = 0; i < data.contentModules.length; i++) {
			var currentModule = data.contentModules[i];
			if (typeof (currentModule.action) == "function")
				currentModule.action(data, $front, $back, index);
		}
	},
	fade: function ($tile, count, data) {
		var tdata = typeof (data) === "object" ? data : $tile.data("LiveTile"),
            resumeTimer = function () {
            	// if the tile should run again start the timer back with the current delay
            	if (tdata.timer.repeatCount > 0 || tdata.timer.repeatCount == -1) {
            		if (tdata.timer.count != tdata.timer.repeatCount) {
            			tdata.timer.start(tdata.delay);
            		}
            	}
            };
		if (typeof (tdata) === "undefined") {
			throwError($.fn.liveTile.defaults.rebindMessage);
			return;
		}
		if (tdata.faces.$front.is(":animated"))
			return;
		tdata.timer.pause();
		var loopCount = tdata.loopCount + 1;
		tdata.isReversed = loopCount % 2 === 0; // the count starts at 1
		var start = tdata.animationStarting.call($tile[0], tdata, tdata.faces.$front, tdata.faces.$back);
		if (typeof (start) != "undefined" && start == false) {
			resumeTimer();
			return;
		}
		tdata.loopCount = loopCount;
		var faded = function () {
			resumeTimer();
			// run content modules and animationComplete callback
			privMethods.runContenModules(tdata, tdata.faces.$front, tdata.faces.$back);
			tdata.animationComplete.call($tile[0], tdata, tdata.faces.$front, tdata.faces.$back);
		};
		if (tdata.isReversed)
			tdata.faces.$front.fadeIn(tdata.speed, tdata.noHaTransFunc, faded);
		else
			tdata.faces.$front.fadeOut(tdata.speed, tdata.noHaTransFunc, faded);
	},
	slide: function ($tile, count, data, stopIndex, callback) {
		var tdata = typeof (data) === "object" ? data : $tile.data("LiveTile"),
            aniData = $tile.data("metrojs.tile");
		if (typeof (tdata) === "undefined") {
			throwError($.fn.liveTile.defaults.rebindMessage);
			return;
		}
		if (aniData.animating == true || $tile.is(":animated")) {
			tdata = null;
			aniData = null;
			return;
		}
		var resumeTimer = function () {
			// if the tile should run again start the timer back with the current delay
			if (tdata.timer.repeatCount > 0 || tdata.timer.repeatCount == -1) {
				if (tdata.timer.count != tdata.timer.repeatCount) {
					tdata.timer.start(tdata.delay);
				}
			}
		};
		if (tdata.mode !== "carousel") {
			tdata.isReversed = tdata.currentIndex % 2 !== 0;  // the count starts at 1
			// carousel mode maintains its own timer
			tdata.timer.pause();
			var start = tdata.animationStarting.call($tile[0], tdata, tdata.faces.$front, tdata.faces.$back);
			if (typeof (start) != "undefined" && start == false) {
				resumeTimer();
				return;
			}
			tdata.loopCount = tdata.loopCount + 1;
		} else {
			// in carousel mode the face that just left the stage is always the $back
			tdata.isReversed = true;
		}
		// get temp values passed in from data methods
		var direction;
		if (typeof (tdata.tempValues.direction) === "string" && tdata.tempValues.direction.length > 0)
			direction = tdata.tempValues.direction;
		else
			direction = tdata.direction;
		tdata.tempValues.direction = null;
		var css = {},
            cssback = {},
            // the stop index is overridden in carousel mode
            stopIdx = typeof (stopIndex) === "undefined" ? tdata.currentIndex : stopIndex,
            stop = $.trim(tdata.stops[Math.min(stopIdx, tdata.stops.length - 1)]),
            pxIdx = stop.indexOf('px'),
            offset = 0,
            amount = 0,
            metric = (direction === "vertical") ? tdata.height : tdata.width,
            tProp = (direction === "vertical") ? "top" : "left",
            stack = tdata.stack == true;
		// when the slide is complete increment the index or call the callback
		var slideFinished = function () {
			if (typeof (callback) === "undefined") {
				tdata.currentIndex = tdata.currentIndex + 1;
				if (tdata.currentIndex > tdata.stops.length - 1) {
					tdata.currentIndex = 0;
				}
			} else {
				callback();
			}
			if (tdata.mode != "carousel") {
				resumeTimer();
			}
			// run content modules and animationComplete callback            
			privMethods.runContenModules(tdata, tdata.faces.$front, tdata.faces.$back, tdata.currentIndex);
			tdata.animationComplete.call($tile[0], tdata, tdata.faces.$front, tdata.faces.$back);
			tdata = null;
			aniData = null;
		};
		if (pxIdx > 0) {
			amount = parseInt(stop.substring(0, pxIdx), 10);
			offset = (amount - metric) + 'px';
		} else {
			//is a percentage
			amount = parseInt(stop.replace('%', ''), 10);
			offset = (amount - 100) + '%';
		}
		// hardware accelerated :)
		if (metrojs.capabilities.canTransition && tdata.useHardwareAccel) {
			if (typeof (aniData.animating) !== "undefined" && aniData.animating == true)
				return;
			aniData.animating = true;
			var props = ['transition-property', 'transition-duration', 'transition-timing-function'],
                vals = [tdata.useTranslate ? "transform" : tProp, tdata.speed + 'ms', tdata.haTransFunc];
			vals[helperMethods.browserPrefix + 'transition-property'] = helperMethods.browserPrefix + "transform";
			css = helperMethods.appendStyleProperties(css, props, vals);
			cssback = helperMethods.appendStyleProperties(cssback, props, vals);
			var vertical = direction === "vertical",
                prop = vertical ? "top" : "left",
                translateTo;
			if (!tdata.useTranslate) {
				css[prop] = stop;
				if (stack)
					cssback[prop] = offset;
			} else {
				translateTo = vertical ? "translate(0%, " + stop + ")" : "translate(" + stop + ", 0%)";
				css = helperMethods.appendStyleProperties(css, ['transform'], [translateTo + "translateZ(0)"]);
				if (stack) {
					translateTo = vertical ? "translate(0%, " + offset + ")" : "translate(" + offset + ", 0%)";
					cssback = helperMethods.appendStyleProperties(cssback, ['transform'], [translateTo + "translateZ(0)"]);
				}
			}
			tdata.faces.$front.css(css);
			if (stack)
				tdata.faces.$back.css(cssback);
			window.clearTimeout(tdata.completeTimeout);
			tdata.completeTimeout = window.setTimeout(function () {
				aniData.animating = false;
				slideFinished();
			}, tdata.speed);
		} else {
			// not hardware accelerated :(
			css[tProp] = stop;
			cssback[tProp] = offset;
			aniData.animating = true;
			var $front = tdata.faces.$front.stop(),
                $back = tdata.faces.$back.stop();
			$front.animate(css, tdata.speed, tdata.noHaTransFunc, function () {
				aniData.animating = false;
				slideFinished();
			});
			// change the css value to the offset
			if (stack)
				$back.animate(cssback, tdata.speed, tdata.noHaTransFunc, function () { });
		}
	},
	carousel: function ($tile, count) {
		var tdata = $tile.data("LiveTile");
		if (typeof (tdata) === "undefined") {
			throwError($.fn.liveTile.defaults.rebindMessage);
			return;
		}
		// dont update css or call slide if animated or if there's only one face
		var aniData = $tile.data("metrojs.tile");
		if (aniData.animating == true || tdata.faces.$listTiles.length <= 1) {
			aniData = null;
			return;
		}
		var resumeTimer = function () {
			if (tdata.timer.repeatCount > 0 || tdata.timer.repeatCount == -1) {
				if (tdata.timer.count != tdata.timer.repeatCount) {
					tdata.timer.start(tdata.delay);
				}
			}
		};
		// pause the timer and use a per slide delay
		tdata.timer.pause();
		var $cur = tdata.faces.$listTiles.filter(".active"),
            idx = tdata.faces.$listTiles.index($cur),
            goTo = tdata.currentIndex,
            eq = goTo != idx ? goTo : idx,
            nxtIdx = eq + 1 >= tdata.faces.$listTiles.length ? 0 : eq + 1,
            sdata = tdata.listData[nxtIdx];
		if (idx == nxtIdx) {
			aniData = null;
			$cur = null;
			return;
		}
		// get temp values passed in from data methods
		var animationDirection;
		if (typeof (tdata.tempValues.animationDirection) === "string" && tdata.tempValues.animationDirection.length > 0)
			animationDirection = tdata.tempValues.animationDirection;
		else if (typeof (sdata.animationDirection) === "string" && sdata.animationDirection.length > 0) {
			animationDirection = sdata.animationDirection;
		} else
			animationDirection = tdata.animationDirection;
		// the temp value for animation direction is not used in slide so i'm setting it to null
		tdata.tempValues.animationDirection = null;
		var direction;
		if (typeof (tdata.tempValues.direction) === "string" && tdata.tempValues.direction.length > 0) {
			direction = tdata.tempValues.direction;
		} else if (typeof (sdata.direction) === "string" && sdata.direction.length > 0) {
			direction = sdata.direction;
			tdata.tempValues.direction = direction;
		} else {
			direction = tdata.direction;
		}
		var $nxt = tdata.faces.$listTiles.eq(nxtIdx),
            start = tdata.animationStarting.call($tile[0], tdata, $cur, $nxt);
		if (typeof (start) != "undefined" && start == false) {
			resumeTimer();
			return;
		}
		tdata.loopCount = tdata.loopCount + 1;
		var nxtCss = helperMethods.appendStyleProperties({}, ['transition-duration'], ['0s']),
            vertical = direction === "vertical",
            translateTo;
		if (animationDirection === "backward") {
			if (!tdata.useTranslate || !metrojs.capabilities.canTransition) {
				if (vertical) {
					nxtCss.top = "-100%";
					nxtCss.left = "0%";
				} else {
					nxtCss.top = "0%";
					nxtCss.left = "-100%";
				}
				tdata.stops = ['100%'];
			} else {
				translateTo = vertical ? "translate(0%, -100%)" : "translate(-100%, 0%)";
				nxtCss = helperMethods.appendStyleProperties(nxtCss, ["transform"], [translateTo + " translateZ(0)"]);
				tdata.stops = ['100%'];
			}
			tdata.faces.$front = $cur;
			tdata.faces.$back = $nxt;

		} else {
			if (!tdata.useTranslate || !metrojs.capabilities.canTransition) {
				if (vertical) {
					nxtCss.top = "100%";
					nxtCss.left = "0%";
				} else {
					nxtCss.top = "0%";
					nxtCss.left = "100%";
				}
			} else {
				translateTo = vertical ? "translate(0%, 100%)" : "translate(100%, 0%)";
				nxtCss = helperMethods.appendStyleProperties(nxtCss, ["transform"], [translateTo + " translateZ(0)"]);
			}
			tdata.faces.$front = $nxt;
			tdata.faces.$back = $cur;
			tdata.stops = ['0%'];
		}
		$nxt.css(nxtCss);
		// the timeout wrapper gives the css call above enough time to finish in case we dynamically set the direction
		window.setTimeout(function () {
			$cur.removeClass("active");
			$nxt.addClass("active");
			privMethods.slide($tile, count, tdata, 0, function () {
				tdata.currentIndex = nxtIdx;
				aniData = null;
				$cur = null;
				$nxt = null;
				resumeTimer();
			});
		}, 150);

	},
	flip: function ($tile, count, data, callback) {
		var aniData = $tile.data("metrojs.tile");
		if (typeof (aniData) !== "undefined" && aniData.animating == true) {
			aniData = null;
			return;
		}
		var tdata = typeof (data) === "object" ? data : $tile.data("LiveTile");
		if (typeof (tdata) === "undefined") {
			throwError($.fn.liveTile.defaults.rebindMessage);
			return;
		}
		var $front, $back, direction, deg, rotateDir, css,
            raiseEvt = typeof (callback) === "undefined",
            index = 0,
            isReversed,  // the count starts at 1
            resumeTimer = function () {
            	// if the tile should run again start the timer back with the current delay
            	if (tdata.timer.repeatCount > 0 || tdata.timer.repeatCount == -1) {
            		if (tdata.timer.count != tdata.timer.repeatCount) {
            			tdata.timer.start(tdata.delay);
            		}
            	}
            };
		// the timer is only paused if animationComplete is fired
		if (raiseEvt) {
			tdata.timer.pause();
			var loopCount = tdata.loopCount + 1;
			isReversed = loopCount % 2 === 0;
			tdata.isReversed = isReversed;
			$front = tdata.faces.$front;
			$back = tdata.faces.$back;
			var args = isReversed ? [tdata, $back, $front] : [tdata, $front, $back];
			var start = tdata.animationStarting.apply($tile[0], args);
			if (typeof (start) != "undefined" && start == false) {
				resumeTimer();
				return;
			}
			direction = tdata.direction;
			height = tdata.height;
			width = tdata.width;
			margin = tdata.margin;
			tdata.loopCount = loopCount;
		} else {
			isReversed = count % 2 === 0;
			index = aniData.index;
			$front = tdata.listData[index].faces.$front;
			$back = tdata.listData[index].faces.$back;
			tdata.listData[index].isReversed = isReversed;
			direction = tdata.listData[index].direction;
			height = tdata.listData[index].height;
			width = tdata.listData[index].width;
			margin = tdata.listData[index].margin;
		}

		if (metrojs.capabilities.canFlip3d && tdata.useHardwareAccel) { // Hardware accelerated :)
			deg = !isReversed ? "180deg" : "360deg";
			rotateDir = direction === "vertical" ? "rotateX(" + deg + ")" : "rotateY(" + deg + ")";
			css = helperMethods.appendStyleProperties({}, ["transform", "transition"], [rotateDir, "all " + tdata.speed + "ms " + tdata.haTransFunc + " 0s"]);
			var bDeg = !isReversed ? "360deg" : "540deg";
			var bRotateDir = direction === "vertical" ? "rotateX(" + bDeg + ")" : "rotateY(" + bDeg + ")";
			var bCss = helperMethods.appendStyleProperties({}, ["transform", "transition"], [bRotateDir, "all " + tdata.speed + "ms " + tdata.haTransFunc + " 0s"]);
			$front.css(css);
			$back.css(bCss);

			var action = function () {
				aniData.animating = false;
				var resetDir, newCss;
				if (!isReversed) {
					privMethods.runContenModules(tdata, $back, $front, index);
					if (raiseEvt) {
						resumeTimer();
						tdata.animationComplete.call($tile[0], tdata, $back, $front);
					} else
						callback(tdata, $back, $front);
				} else {
					resetDir = direction === "vertical" ? "rotateX(0deg)" : "rotateY(0deg)";
					newCss = helperMethods.appendStyleProperties({}, ["transform", "transition"], [resetDir, "all 0s " + tdata.haTransFunc + " 0s"]);
					$front.css(newCss);
					//call content modules
					privMethods.runContenModules(tdata, $front, $back, index);
					if (raiseEvt) {
						resumeTimer();
						tdata.animationComplete.call($tile[0], tdata, $front, $back);
					} else
						callback(tdata, $front, $back);
					$front = null;
					$back = null;
					tdata = null;
					aniData = null;
				}
			};
			if (tdata.mode === "flip-list") {
				window.clearTimeout(tdata.listData[index].completeTimeout);
				tdata.listData[index].completeTimeout = window.setTimeout(action, tdata.speed);
			} else {
				window.clearTimeout(tdata.completeTimeout);
				tdata.completeTimeout = window.setTimeout(action, tdata.speed);
			}
		} else { // not Hardware accelerated :(
			var speed = tdata.speed / 2;
			var hideCss = (direction === "vertical") ?
						{ height: '0px', width: '100%', marginTop: margin + 'px', opacity: tdata.noHAflipOpacity } :
						{ height: '100%', width: '0px', marginLeft: margin + 'px', opacity: tdata.noHAflipOpacity };
			var showCss = (direction === "vertical") ?
                        { height: '100%', width: '100%', marginTop: '0px', opacity: '1' } :
                        { height: '100%', width: '100%', marginLeft: '0px', opacity: '1' };
			var noHaAction;
			if (!isReversed) {
				aniData.animating = true;
				$front.stop().animate(hideCss, { duration: speed });
				noHaAction = function () {
					aniData.animating = false;
					$back.stop().animate(showCss, {
						duration: speed,
						complete: function () {
							privMethods.runContenModules(tdata, $back, $front, index);
							if (raiseEvt) {
								resumeTimer();
								tdata.animationComplete.call($tile[0], tdata, $back, $front);
							} else
								callback(tdata, $back, $front);
							$front = null;
							$back = null;
							tdata = null;
							aniData = null;
						}
					});
				};
				if (tdata.mode === "flip-list") {
					window.clearTimeout(tdata.listData[aniData.index].completeTimeout);
					tdata.listData[aniData.index].completeTimeout = window.setTimeout(noHaAction, speed);
				} else {
					window.clearTimeout(tdata.completeTimeout);
					tdata.completeTimeout = window.setTimeout(noHaAction, speed);
				}
			} else {
				aniData.animating = true;
				$back.stop().animate(hideCss, { duration: speed });
				noHaAction = function () {
					aniData.animating = false;
					$front.stop().animate(showCss, {
						duration: speed,
						complete: function () {
							privMethods.runContenModules(tdata, $front, $back, index);
							if (raiseEvt) {
								resumeTimer();
								tdata.animationComplete.call($tile[0], tdata, $front, $back);
							} else
								callback(tdata, $front, $back);
							aniData = null;
							$front = null;
							$back = null;
						}
					});
				};
				if (tdata.mode === "flip-list") {
					window.clearTimeout(tdata.listData[aniData.index].completeTimeout);
					tdata.listData[aniData.index].completeTimeout = window.setTimeout(noHaAction, speed);
				} else {
					window.clearTimeout(tdata.completeTimeout);
					tdata.completeTimeout = window.setTimeout(noHaAction, speed);
				}
			}

		}
	},
	flipList: function ($tile, count) {
		var tdata = $tile.data("LiveTile"),
            maxDelay = tdata.speed,
            triggered = false,
            resumeTimer = function () {
            	if (tdata.timer.repeatCount > 0 || tdata.timer.repeatCount == -1) {
            		if (tdata.timer.count != tdata.timer.repeatCount) {
            			tdata.timer.start(tdata.delay);
            		}
            	}
            };
		if (typeof (tdata) === "undefined") {
			throwError($.fn.liveTile.defaults.rebindMessage);
			return;
		}
		tdata.timer.pause();
		var start = tdata.animationStarting.call($tile[0], tdata, null, null);
		if (typeof (start) != "undefined" && start == false) {
			resumeTimer();
			return;
		}
		tdata.loopCount = tdata.loopCount + 1;
		tdata.faces.$listTiles.each(function (idx, ele) {
			var $li = $(ele),
                ldata = $li.data("metrojs.tile"),
                tDelay = tdata.triggerDelay(idx),
                triggerDelay = tdata.speed + Math.max(tDelay, 0),
                trigger = tdata.alwaysTrigger;
			if (!trigger)
				trigger = (Math.random() * 351) > 150 ? true : false;
			if (trigger) {
				triggered = true;
				maxDelay = Math.max(triggerDelay + tdata.speed, maxDelay);
				window.clearTimeout(ldata.flCompleteTimeout);
				ldata.flCompleteTimeout = window.setTimeout(function () {
					// call the flip method with the merged data, but dont fire animationComplete
					privMethods.flip($li, ldata.count, tdata, function (data) {
						ldata.count++;
						if (ldata.count >= MAX_LOOP_COUNT)
							ldata.count = 1;
						$li = null;
						ldata = null;
					});
				}, triggerDelay);
			}
		});
		if (triggered) {
			window.clearTimeout(tdata.flCompleteTimeout);
			tdata.flCompleteTimeout = window.setTimeout(function () {
				privMethods.runContenModules(tdata, null, null, -1);
				tdata.animationComplete.call($tile[0], tdata, null, null);
				resumeTimer();
			}, maxDelay + tdata.speed); // add some padding to make sure the final callback finished

		}
	}
};


// methods that can be called more universally
var helperMethods = {
	stylePrefixes: 'Webkit Moz O ms Khtml '.split(' '),
	domPrefixes: '-webkit- -moz- -o- -ms- -khtml- '.split(' '),
	browserPrefix: null,
	// a method to append css3 properties for each browser
	// note: values are identical for each property
	appendStyleProperties: function (obj, names, values) {
		for (var i = 0; i <= names.length - 1; i++) {
			obj[$.trim(this.browserPrefix + names[i])] = values[i];
			obj[$.trim(names[i])] = values[i];
		}
		return obj;
	},
	applyStyleValue: function (obj, name, value) {
		obj[$.trim(this.browserPrefix + name)] = value;
		obj[name] = value;
		return obj;
	},
	getBrowserPrefix: function () {
		if (this.browserPrefix == null) {
			var prefix = "";
			for (var i = 0; i <= this.domPrefixes.length - 1; i++) {
				if (typeof (document.body.style[this.domPrefixes[i] + "transform"]) != "undefined")
					prefix = this.domPrefixes[i];
			}
			return this.browserPrefix = prefix;
		}
		return this.browserPrefix;
	},
	//a shuffle method to provide more randomness than sort
	//credit: http://javascript.about.com/library/blshuffle.htm
	//note: avoiding prototype for sharepoint compatability
	shuffleArray: function (array) {
		var s = [];
		while (array.length) s.push(array.splice(Math.random() * array.length, 1));
		while (s.length) array.push(s.pop());
		return array;
	}
};

var defaultModules = {
	moduleName: 'custom',
	customSwap: {
		data: {
			customDoSwapFront: function () { return false; },
			customDoSwapBack: function () { return false; },
			customGetContent: function (tdata, $front, $back, index) { return null; }
		},
		initData: function (tdata, $ele) {
			var swapData = {};
			swapData.doSwapFront = $.inArray('custom', tdata.swapFront) > -1 && tdata.customDoSwapFront();
			swapData.doSwapBack = $.inArray('custom', tdata.swapBack) > -1 && tdata.customDoSwapBack();
			if (typeof (tdata.customSwap) !== "undefined")
				tdata.customSwap = $.extend(swapData, tdata.customSwap);
			else
				tdata.customSwap = swapData;
		},
		action: function (tdata, $front, $back, index) {

		}
	},
	htmlSwap: {
		moduleName: 'html',
		data: { // public data for the swap module                
			frontContent: [],                       // a list of html to use for the front
			frontIsRandom: true,                    // should html be chosen at random or in order                
			frontIsInGrid: false,                   // only chooses one item for each iteration in flip-list                
			backContent: [],                        // a list of html to use for the back
			backIsRandom: true,                     // should html be chosen at random or in order                
			backIsInGrid: false                     // only chooses one item for each iteration in flip-list                
		},
		initData: function (tdata, $ele) {
			var swapData = { // private data for the swap module
				backBag: [],
				backIndex: 0,
				backStaticIndex: 0,
				backStaticRndm: -1,
				prevBackIndex: -1,
				frontBag: [],
				frontIndex: 0,
				frontStaticIndex: 0,
				frontStaticRndm: -1,
				prevFrontIndex: -1
			};
			if (!tdata.ignoreDataAttributes) {
				swapData.frontIsRandom = privMethods.getDataOrDefault($ele, "front-israndom", tdata.frontIsRandom);
				swapData.frontIsInGrid = privMethods.getDataOrDefault($ele, "front-isingrid", tdata.frontIsInGrid);
				swapData.backIsRandom = privMethods.getDataOrDefault($ele, "back-israndom", tdata.backIsRandom);
				swapData.backIsInGrid = privMethods.getDataOrDefault($ele, "back-isingrid", tdata.backIsInGrid);
			} else {
				swapData.frontIsRandom = tdata.frontIsRandom;
				swapData.frontIsInGrid = tdata.frontIsInGrid;
				swapData.backIsRandom = tdata.backIsRandom;
				swapData.backIsInGrid = tdata.backIsInGrid;
			}
			swapData.doSwapFront = $.inArray('html', tdata.swapFront) > -1 && (tdata.frontContent instanceof Array) && tdata.frontContent.length > 0;
			swapData.doSwapBack = $.inArray('html', tdata.swapBack) > -1 && (tdata.backContent instanceof Array) && tdata.backContent.length > 0;
			if (typeof (tdata.htmlSwap) !== "undefined")
				tdata.htmlSwap = $.extend(swapData, tdata.htmlSwap);
			else
				tdata.htmlSwap = swapData;
			if (tdata.htmlSwap.doSwapFront) {
				tdata.htmlSwap.frontBag = this.prepBag(tdata.htmlSwap.frontBag, tdata.frontContent, tdata.htmlSwap.prevFrontIndex);
				tdata.htmlSwap.frontStaticRndm = tdata.htmlSwap.frontBag.pop();
			}
			if (tdata.htmlSwap.doSwapBack) {
				tdata.htmlSwap.backBag = this.prepBag(tdata.htmlSwap.backBag, tdata.backContent, tdata.htmlSwap.prevBackIndex);
				tdata.htmlSwap.backStaticRndm = tdata.htmlSwap.backBag.pop();
			}
		},
		prepBag: function (bag, content, prevIdx) {
			bag = bag || [];
			var bagCount = 0;
			for (var i = 0; i < content.length; i++) {
				//make sure there's not an immediate repeat
				if (i != prevIdx || bag.length === 1) {
					bag[bagCount] = i;
					bagCount++;
				}
			}
			return helperMethods.shuffleArray(bag);
		},
		getFrontSwapIndex: function (tdata) {
			var idx = 0;
			if (!tdata.htmlSwap.frontIsRandom) {
				idx = tdata.htmlSwap.frontIsInGrid ? tdata.htmlSwap.frontStaticIndex : tdata.htmlSwap.frontIndex;
			} else {
				if (tdata.htmlSwap.frontBag.length === 0) {
					tdata.htmlSwap.frontBag = this.prepBag(tdata.htmlSwap.frontBag, tdata.frontContent, tdata.htmlSwap.prevFrontIndex);
				}
				if (tdata.htmlSwap.frontIsInGrid) {
					idx = tdata.htmlSwap.frontStaticRndm;
				} else {
					idx = tdata.htmlSwap.frontBag.pop();
				}
			}
			return idx;
		},
		getBackSwapIndex: function (tdata) {
			var idx = 0;
			if (!tdata.htmlSwap.backIsRandom) {
				idx = tdata.htmlSwap.backIsInGrid ? tdata.htmlSwap.backStaticIndex : tdata.htmlSwap.backIndex;
			} else {
				if (tdata.htmlSwap.backBag.length === 0) {
					tdata.htmlSwap.backBag = this.prepBag(tdata.htmlSwap.backBag, tdata.backContent, tdata.htmlSwap.prevBackIndex);
				}
				if (tdata.htmlSwap.backIsInGrid) {
					idx = tdata.htmlSwap.backStaticRndm;
				} else {
					idx = tdata.htmlSwap.backBag.pop();
				}
			}
			return idx;
		},
		action: function (tdata, $front, $back, index) {
			if (!tdata.htmlSwap.doSwapFront && !tdata.htmlSwap.doSwapBack)
				return;
			var isList = tdata.mode === "flip-list";
			var swapIndex = 0;
			var isReversed = isList ? tdata.listData[Math.max(index, 0)].isReversed : tdata.isReversed;
			if (isList && index == -1) {
				// flip list completed
				if (!isReversed) {
					if (tdata.htmlSwap.doSwapFront) {
						// update the random value for grid mode
						if (tdata.htmlSwap.frontBag.length === 0)
							tdata.htmlSwap.frontBag = this.prepBag(tdata.htmlSwap.frontBag, tdata.frontContent, tdata.htmlSwap.frontStaticRndm);
						tdata.htmlSwap.frontStaticRndm = tdata.htmlSwap.frontBag.pop();
						// update the static index
						tdata.htmlSwap.frontStaticIndex++;
						if (tdata.htmlSwap.frontStaticIndex >= tdata.frontContent.length)
							tdata.htmlSwap.frontStaticIndex = 0;
					}
				} else {
					if (tdata.htmlSwap.doSwapBack) {
						// update the random value for grid mode
						if (tdata.htmlSwap.backBag.length === 0)
							tdata.htmlSwap.backBag = this.prepBag(tdata.htmlSwap.backBag, tdata.backContent, tdata.htmlSwap.backStaticRndm);
						tdata.htmlSwap.backStaticRndm = tdata.htmlSwap.backBag.pop();
						// update the static index
						tdata.htmlSwap.backStaticIndex++;
						if (tdata.htmlSwap.backStaticIndex >= tdata.backContent.length)
							tdata.htmlSwap.backStaticIndex = 0;
					}
				}
				return;
			}
			if (!isReversed) {
				if (!tdata.htmlSwap.doSwapFront)
					return;
				swapIndex = this.getFrontSwapIndex(tdata);
				tdata.htmlSwap.prevFrontIndex = swapIndex;
				if (tdata.mode === "slide") {
					if (!tdata.startNow)
						$front.html(tdata.frontContent[swapIndex]);
					else
						$back.html(tdata.frontContent[swapIndex]);
				} else
					$back.html(tdata.frontContent[swapIndex]);
				// increment the front index to get the next item from the list
				tdata.htmlSwap.frontIndex++;
				if (tdata.htmlSwap.frontIndex >= tdata.frontContent.length)
					tdata.htmlSwap.frontIndex = 0;
				if (!isList) {
					// increment the static index if we're not in list mode
					tdata.htmlSwap.frontStaticIndex++;
					if (tdata.htmlSwap.frontStaticIndex >= tdata.frontContent.length)
						tdata.htmlSwap.frontStaticIndex = 0;
				} else {
					// flip list
				}
			} else {
				if (!tdata.htmlSwap.doSwapBack)
					return;
				swapIndex = this.getBackSwapIndex(tdata);
				tdata.htmlSwap.prevBackIndex = swapIndex;
				$back.html(tdata.backContent[tdata.htmlSwap.backIndex]);
				tdata.htmlSwap.backIndex++;
				if (tdata.htmlSwap.backIndex >= tdata.backContent.length)
					tdata.htmlSwap.backIndex = 0;
				if (!isList) {
					tdata.htmlSwap.backStaticIndex++;
					if (tdata.htmlSwap.backStaticIndex >= tdata.backContent.length)
						tdata.htmlSwap.backStaticIndex = 0;
				} else {
					// flip list
				}
			}
		}
	},
	imageSwap: {
		moduleName: 'image',
		data: {
			preloadImages: false,
			imageCssSelector: '>img,>a>img',        // the selector used to choose a an image to apply a src or background to
			fadeSwap: false,                        // fade the image before swapping
			frontImages: [],                        // a list of images to use for the front
			frontIsRandom: true,                    // should images be chosen at random or in order
			frontIsBackgroundImage: false,          // set the src attribute or css background-image property
			frontIsInGrid: false,                   // only chooses one item for each iteration in flip-list
			backImages: null,                       // a list of images to use for the back
			backIsRandom: true,                     // should images be chosen at random or in order
			backIsBackgroundImage: false,           // set the src attribute or css background-image property
			backIsInGrid: false                     // only chooses one item for each iteration in flip-list                
		},
		initData: function (tdata, $ele) {
			var swapData = {
				backBag: [],
				backIndex: 0,
				backStaticIndex: 0,
				backStaticRndm: -1,
				frontBag: [],
				frontIndex: 0,
				frontStaticIndex: 0,
				frontStaticRndm: -1,
				prevBackIndex: -1,
				prevFrontIndex: -1
			}, useData = tdata.ignoreDataAttributes;
			if (useData) {
				swapData.imageCssSelector = privMethods.getDataOrDefault($ele, "image-css", tdata.imageCssSelector);
				swapData.fadeSwap = privMethods.getDataOrDefault($ele, "fadeswap", tdata.fadeSwap);
				swapData.frontIsRandom = privMethods.getDataOrDefault($ele, "front-israndom", tdata.frontIsRandom);
				swapData.frontIsInGrid = privMethods.getDataOrDefault($ele, "front-isingrid", tdata.frontIsInGrid);
				swapData.frontIsBackgroundImage = privMethods.getDataOrDefault($ele, "front-isbg", tdata.frontIsBackgroundImage);
				swapData.backIsRandom = privMethods.getDataOrDefault($ele, "back-israndom", tdata.backIsRandom);
				swapData.backIsInGrid = privMethods.getDataOrDefault($ele, "back-isingrid", tdata.backIsInGrid);
				swapData.backIsBackgroundImage = privMethods.getDataOrDefault($ele, "back-isbg", tdata.backIsBackgroundImage);
				swapData.doSwapFront = $.inArray('image', tdata.swapFront) > -1 && (tdata.frontImages instanceof Array) && tdata.frontImages.length > 0;
				swapData.doSwapBack = $.inArray('image', tdata.swapBack) > -1 && (tdata.backImages instanceof Array) && tdata.backImages.length > 0;
				swapData.alwaysSwapFront = privMethods.getDataOrDefault($ele, "front-alwaysswap", tdata.alwaysSwapFront);
				swapData.alwaysSwapBack = privMethods.getDataOrDefault($ele, "back-alwaysswap", tdata.alwaysSwapBack);
			} else {
				swapData.imageCssSelector = tdata.imageCssSelector;
				swapData.fadeSwap = tdata.fadeSwap;
				swapData.frontIsRandom = tdata.frontIsRandom;
				swapData.frontIsInGrid = tdata.frontIsInGrid;
				swapData.frontIsBackgroundImage = tdata.frontIsBackgroundImage;
				swapData.backIsRandom = tdata.backIsRandom;
				swapData.backIsInGrid = tdata.backIsInGrid;
				swapData.backIsBackgroundImage = tdata.backIsBackgroundImage;
				swapData.doSwapFront = $.inArray('image', tdata.swapFront) > -1 && (tdata.frontImages instanceof Array) && tdata.frontImages.length > 0;
				swapData.doSwapBack = $.inArray('image', tdata.swapBack) > -1 && (tdata.backImages instanceof Array) && tdata.backImages.length > 0;
				swapData.alwaysSwapFront = tdata.alwaysSwapFront;
				swapData.alwaysSwapBack = tdata.alwaysSwapBack;
			}
			if (typeof (tdata.imgSwap) !== "undefined")
				tdata.imgSwap = $.extend(swapData, tdata.imgSwap);
			else
				tdata.imgSwap = swapData;
			if (tdata.imgSwap.doSwapFront) {
				tdata.imgSwap.frontBag = this.prepBag(tdata.imgSwap.frontBag, tdata.frontImages, tdata.imgSwap.prevFrontIndex);
				tdata.imgSwap.frontStaticRndm = tdata.imgSwap.frontBag.pop();
				if (tdata.preloadImages)
					$(tdata.frontImages).metrojs.preloadImages(function () { });
			}
			if (tdata.imgSwap.doSwapBack) {
				tdata.imgSwap.backBag = this.prepBag(tdata.imgSwap.backBag, tdata.backImages, tdata.imgSwap.prevBackIndex);
				tdata.imgSwap.backStaticRndm = tdata.imgSwap.backBag.pop();
				if (tdata.preloadImages)
					$(tdata.backImages).metrojs.preloadImages(function () { });
			}
		},
		prepBag: function (bag, content, prevIdx) {
			bag = bag || [];
			var bagCount = 0;
			for (var i = 0; i < content.length; i++) {
				//make sure there's not an immediate repeat
				if (i != prevIdx || content.length === 1) {
					bag[bagCount] = i;
					bagCount++;
				}
			}
			return helperMethods.shuffleArray(bag);
		},
		getFrontSwapIndex: function (tdata) {
			var idx = 0;
			if (!tdata.imgSwap.frontIsRandom) {
				idx = tdata.imgSwap.frontIsInGrid ? tdata.imgSwap.frontStaticIndex : tdata.imgSwap.frontIndex;
			} else {
				if (tdata.imgSwap.frontBag.length === 0) {
					tdata.imgSwap.frontBag = this.prepBag(tdata.imgSwap.frontBag, tdata.frontImages, tdata.imgSwap.prevFrontIndex);
				}
				if (tdata.imgSwap.frontIsInGrid) {
					idx = tdata.imgSwap.frontStaticRndm;
				} else {
					idx = tdata.imgSwap.frontBag.pop();
				}
			}
			return idx;
		},
		getBackSwapIndex: function (tdata) {
			var idx = 0;
			if (!tdata.imgSwap.backIsRandom) {
				idx = tdata.imgSwap.backIsInGrid ? tdata.imgSwap.backStaticIndex : tdata.imgSwap.backIndex;
			} else {
				if (tdata.imgSwap.backBag.length === 0) {
					tdata.imgSwap.backBag = this.prepBag(tdata.imgSwap.backBag, tdata.backImages, tdata.imgSwap.prevBackIndex);
				}
				if (tdata.imgSwap.backIsInGrid) {
					idx = tdata.imgSwap.backStaticRndm;
				} else {
					idx = tdata.imgSwap.backBag.pop();
				}
			}
			return idx;
		},
		setImageProperties: function ($img, image, isBackground) {
			var css = {}, // css object to apply
                attr = {}; // attribute values to apply
			// get image source
			if (typeof (image.src) !== 'undefined') {
				if (!isBackground)
					attr.src = image.src;
				else
					css.backgroundImage = "url('" + image.src + "')";
			}
			// get alt text
			if (typeof (image.alt) !== 'undefined')
				attr.alt = image.alt;
			// set css
			if (typeof (image.css) === 'object')
				$img.css($.extend(css, image.css));
			else
				$img.css(css);
			// set attributes
			if (typeof (image.attr) === 'object')
				$img.attr($.extend(attr, image.attr));
			else
				$img.attr(attr);
		},
		action: function (tdata, $front, $back, index) {
			if (!tdata.imgSwap.doSwapFront && !tdata.imgSwap.doSwapBack)
				return;
			var isList = tdata.mode === "flip-list",
                isSlide = tdata.mode == "slide",
                swapIndex = 0,
                isReversed = isList ? tdata.listData[Math.max(index, 0)].isReversed : tdata.isReversed;
			if (isList && index == -1) {
				// flip list completed
				if (tdata.alwaysSwapFront || !isReversed) {
					if (tdata.imgSwap.doSwapFront) {
						// update the random value for grid mode
						if (tdata.imgSwap.frontBag.length === 0)
							tdata.imgSwap.frontBag = this.prepBag(tdata.imgSwap.frontBag, tdata.frontImages, tdata.imgSwap.frontStaticRndm);
						tdata.imgSwap.frontStaticRndm = tdata.imgSwap.frontBag.pop();
						// update the static index
						tdata.imgSwap.frontStaticIndex++;
						if (tdata.imgSwap.frontStaticIndex >= tdata.frontImages.length)
							tdata.imgSwap.frontStaticIndex = 0;
					}
				}
				if (tdata.alwaysSwapBack || isReversed) {
					if (tdata.imgSwap.doSwapBack) {
						// update the random value for grid mode
						if (tdata.imgSwap.backBag.length === 0)
							tdata.imgSwap.backBag = this.prepBag(tdata.imgSwap.backBag, tdata.backImages, tdata.imgSwap.backStaticRndm);
						tdata.imgSwap.backStaticRndm = tdata.imgSwap.backBag.pop();
						// update the static index
						tdata.imgSwap.backStaticIndex++;
						if (tdata.imgSwap.backStaticIndex >= tdata.backImages.length)
							tdata.imgSwap.backStaticIndex = 0;
					}
				}
				return;
			}
			var $face, // face being swapped
                $img, // image to apply values
                image,// image object to hold properties
                swap; // wrapper for setimageProperties for fade
			if (tdata.alwaysSwapFront || !isReversed) {
				if (!tdata.imgSwap.doSwapFront)
					return;
				swapIndex = this.getFrontSwapIndex(tdata);
				tdata.imgSwap.prevFrontIndex = swapIndex;
				// slide mode has a static front and back face
				$face = (tdata.mode === "slide") ? $front : $back;
				$img = $face.find(tdata.imgSwap.imageCssSelector);
				image = typeof (tdata.frontImages[swapIndex]) === "object" ? tdata.frontImages[swapIndex] : { src: tdata.frontImages[swapIndex] };
				swap = function (callback) {
					// set src, alt, css and attribute values
					var isBg = tdata.imgSwap.frontIsBackgroundImage;
					if (typeof (callback) == "function") {
						if (isBg)
							window.setTimeout(callback, 100);
						else
							$img[0].onload = callback;
					}
					defaultModules.imageSwap.setImageProperties($img, image, isBg);

				};
				if (tdata.fadeSwap) {
					$img.fadeOut(function () {
						swap(function () {
							$img.fadeIn();
						});
					});
				} else
					swap();
				// increment indexes
				tdata.imgSwap.frontIndex++;
				if (tdata.imgSwap.frontIndex >= tdata.frontImages.length)
					tdata.imgSwap.frontIndex = 0;
				if (!isList) {
					tdata.imgSwap.frontStaticIndex++;
					if (tdata.imgSwap.frontStaticIndex >= tdata.frontImages.length)
						tdata.imgSwap.frontStaticIndex = 0;
				} else {

				}
			}
			if (tdata.alwaysSwapBack || isReversed) {
				if (!tdata.imgSwap.doSwapBack)
					return;
				// get the new index
				swapIndex = this.getBackSwapIndex(tdata);
				tdata.imgSwap.prevBackIndex = swapIndex;
				// use the $face var for consistency
				$face = $back;
				$img = $face.find(tdata.imgSwap.imageCssSelector);
				image = typeof (tdata.backImages[swapIndex]) === "object" ? tdata.backImages[swapIndex] : { src: tdata.backImages[swapIndex] };
				swap = function () {
					// set src, alt, css and attribute values
					defaultModules.imageSwap.setImageProperties($img, image, tdata.imgSwap.backIsBackgroundImage);
				};
				if (tdata.fadeSwap) {
					$img.fadeOut(function () {
						swap(function () {
							$img.fadeIn();
						});
					});
				} else
					swap();
				// increment indexes
				tdata.imgSwap.backIndex++;
				if (tdata.imgSwap.backIndex >= tdata.backImages.length)
					tdata.imgSwap.backIndex = 0;
				if (!isList) {
					tdata.imgSwap.backStaticIndex++;
					if (tdata.imgSwap.backStaticIndex >= tdata.backImages.length)
						tdata.imgSwap.backStaticIndex = 0;
				} else {

				}
			}
		}
	}
};

// object to maintain timer state
$.fn.metrojs.TileTimer = function (interval, callback, repeatCount) {
	this.timerId = null;                                                        // the id of the current timeout
	this.interval = interval;                                                   // the amount of time to wait between each action call
	this.action = callback;                                                     // the method that is fired on each tick
	this.count = 0;                                                             // the number of times the action has been fired
	this.repeatCount = typeof (repeatCount) === "undefined" ? 0 : repeatCount;   // the number of times the action will be fired        
	// call the action method after a delay and call start | stop based on repeat count
	this.start = function (delay) {
		window.clearTimeout(this.timerId);
		var t = this;
		this.timerId = window.setTimeout(function () {
			t.tick.call(t, interval);
		}, delay);
	};

	this.tick = function (when) {
		this.action(this.count + 1);
		this.count++;
		// reset the loop count
		if (this.count >= MAX_LOOP_COUNT)
			this.count = 0;
		if (this.repeatCount > 0 || this.repeatCount == -1) {
			if (this.count != this.repeatCount) {
				this.start(when);
			} else
				this.stop();
		}
	}
	// clear the timer and reset the count
	this.stop = function () {
		this.timerId = window.clearTimeout(this.timerId);
		this.reset();
	};

	this.resume = function () {
		if (this.repeatCount > 0 || this.repeatCount == -1) {
			if (this.count != this.repeatCount) {
				this.start(interval);
			}
		}
	};

	// clear the timer but leave the count intact
	this.pause = function () {
		this.timerId = window.clearTimeout(this.timerId);
	};

	// reset count
	this.reset = function () {
		this.count = 0;
	};

	// reset count and timer
	this.restart = function (delay) {
		this.stop();
		this.start(delay);
	};
};
jQuery.fn.metrojs.theme = {
	loadDefaultTheme: function (stgs) {
		if (typeof (stgs) === "undefined" || stgs == null) {
			stgs = jQuery.fn.metrojs.theme.defaults;
		} else {
			var stg = jQuery.fn.metrojs.theme.defaults;
			jQuery.extend(stg, stgs);
			stgs = stg;
		}
		//get theme from local storage or set base theme
		var hasLocalStorage = typeof (window.localStorage) !== "undefined";
		var hasKeyAndValue = function (key) {
			return (typeof (window.localStorage[key]) !== "undefined" && window.localStorage[key] != null);
		};
		if (hasLocalStorage && (!hasKeyAndValue("Metro.JS.AccentColor") || !hasKeyAndValue("Metro.JS.BaseAccentColor"))) {
			//base theme
			window.localStorage["Metro.JS.AccentColor"] = stgs.accentColor;
			window.localStorage["Metro.JS.BaseAccentColor"] = stgs.baseTheme;
			jQuery(stgs.accentCssSelector).addClass(stgs.accentColor).data("accent", stgs.accentColor);
			jQuery(stgs.baseThemeCssSelector).addClass(stgs.baseTheme);
			if (typeof (stgs.loaded) === "function")
				stgs.loaded(stgs.baseTheme, stgs.accentColor);
			//preload light theme image
			if (typeof (stgs.preloadAltBaseTheme) !== "undefined" && stgs.preloadAltBaseTheme)
				jQuery([(stgs.baseTheme == 'dark') ? stgs.metroLightUrl : stgs.metroDarkUrl]).metrojs.preloadImages(function () { });
		} else {
			if (hasLocalStorage) {
				stgs.accentColor = window.localStorage["Metro.JS.AccentColor"];
				stgs.baseTheme = window.localStorage["Metro.JS.BaseAccentColor"];
				jQuery(stgs.accentCssSelector).addClass(stgs.accentColor).data("accent", stgs.accentColor);
				jQuery(stgs.baseThemeCssSelector).addClass(stgs.baseTheme);
				if (typeof (stgs.loaded) === "function")
					stgs.loaded(stgs.baseTheme, stgs.accentColor);
			} else {
				jQuery(stgs.accentCssSelector).addClass(stgs.accentColor).data("accent", stgs.accentColor);
				jQuery(stgs.baseThemeCssSelector).addClass(stgs.baseTheme);
				if (typeof (stgs.loaded) === "function")
					stgs.loaded(stgs.baseTheme, stgs.accentColor);
				//preload light theme image
				if (typeof (stgs.preloadAltBaseTheme) !== "undefined" && stgs.preloadAltBaseTheme)
					jQuery([(stgs.baseTheme == 'dark') ? stgs.metroLightUrl : stgs.metroDarkUrl]).metrojs.preloadImages(function () { });
			}
		}
	},
	applyTheme: function (tColor, aColor, stgs) {
		if (typeof (stgs) === "undefined" || stgs == null) {
			stgs = jQuery.fn.metrojs.theme.defaults;
		} else {
			var stg = jQuery.fn.metrojs.theme.defaults;
			stgs = jQuery.extend({}, stg, stgs);
		}

		if (typeof (tColor) !== "undefined" && tColor != null) {
			if (typeof (window.localStorage) !== "undefined") {
				window.localStorage["Metro.JS.BaseAccentColor"] = tColor;
			}
			var $theme = jQuery(stgs.baseThemeCssSelector);
			if ($theme.length > 0) {
				if (tColor == "dark")
					$theme.addClass("dark").removeClass("light");
				else if (tColor == "light")
					$theme.addClass("light").removeClass("dark");
			}
		}
		if (typeof (aColor) !== "undefined" && aColor != null) {
			if (typeof (window.localStorage) !== "undefined") {
				window.localStorage["Metro.JS.AccentColor"] = aColor;
			}
			var $accent = jQuery(stgs.accentCssSelector);
			if ($accent.length > 0) {
				var themeset = false;
				$accent.each(function () {
					jQuery(this).addClass(aColor);
					var dAccent = jQuery(this).data("accent");
					if (dAccent != aColor) {
						var cleanClass = jQuery(this).attr("class").replace(dAccent, "");
						cleanClass = cleanClass.replace(/(\s)+/, ' ');
						jQuery(this).attr("class", cleanClass);
						jQuery(this).data("accent", aColor);
						themeset = true;
					}
				});
				if (themeset && typeof (stgs.accentPicked) === "function")
					stgs.accentPicked(aColor);
			}
		}
	},
	appendAccentColors: function (stgs) {
		if (typeof (stgs) === "undefined" || stgs == null) {
			stgs = jQuery.fn.metrojs.theme.defaults;
		} else {
			var stg = jQuery.fn.metrojs.theme.defaults;
			stgs = jQuery.extend({}, stg, stgs);
		}
		var themeList = "";
		var themes = stgs.accentColors;
		var template = stgs.accentListTemplate;
		for (var i = 0; i < themes.length; i++) {
			themeList += template.replace(/\{0\}/g, themes[i]);
		}
		$(themeList).appendTo(stgs.accentListContainer);
	},
	appendBaseThemes: function (stgs) {
		if (typeof (stgs) === "undefined" || stgs == null) {
			stgs = jQuery.fn.metrojs.theme.defaults;
		} else {
			var stg = jQuery.fn.metrojs.theme.defaults;
			stgs = jQuery.extend({}, stg, stgs);
		}
		var themeList = "",
            themes = stgs.baseThemes,
            template = stgs.baseThemeListTemplate;
		for (var i = 0; i < themes.length; i++) {
			themeList += template.replace(/\{0\}/g, themes[i]);
		}
		$(themeList).appendTo(stgs.baseThemeListContainer);
	},
	// default options for theme
	defaults: {
		baseThemeCssSelector: 'body',                           // selector to place dark or light class after load or selection
		accentCssSelector: '.tiles',                            // selector to place accent color class after load or selection
		accentColor: 'blue',                                    // the default accent color. options are blue, brown, green, lime, magenta, mango, pink, purple, red, teal
		baseTheme: 'dark',                                      // the default theme color. options are dark, light
		accentColors: [
             'amber', 'blue', 'brown', 'cobalt', 'crimson', 'cyan',
             'magenta', 'lime', 'indigo', 'green', 'emerald',
             'mango', 'mauve', 'olive', 'orange', 'pink', 'red',
             'sienna', 'steel', 'teal', 'violet', 'yellow'
		],
		baseThemes: [
            'light',
            'dark'
		],
		accentListTemplate: "<li><a href='javascript:;' title='{0}' class='accent {0}'></a></li>", // template to generate accent options
		accentListContainer: "ul.theme-options,.theme-options>ul",                   // selector of container to append accents
		baseThemeListTemplate: "<li><a href='javascript:;' title='{0}' class='accent {0}'></a></li>", // template to generate accent options
		baseThemeListContainer: "ul.base-theme-options,.base-theme-options>ul"                    // selector of container to append accents
	}
};

jQuery.fn.applicationBar = function (options) {    
    /* Setup the public options for the applicationBar  */
    var stgs = typeof (jQuery.fn.metrojs.theme) !== "undefined" ? jQuery.fn.metrojs.theme.defaults : {};
    jQuery.extend(stgs, jQuery.fn.applicationBar.defaults, options);
    if (typeof (jQuery.fn.metrojs.theme) != "undefined") {
        var theme = jQuery.fn.metrojs.theme;
        if (stgs.shouldApplyTheme) {         
            theme.loadDefaultTheme(stgs);
        }
        var themeContainer = stgs.accentListContainer.replace(",", " a,") + " a";
        var themeContainerClick = function () {
            var accent = jQuery(this).attr("class").replace("accent", "").replace(" ", "");
            theme.applyTheme(null, accent, stgs);
            if (typeof (stgs.accentPicked) == "function")
                stgs.accentPicked(accent);
        };
        var baseContainer = stgs.baseThemeListContainer.replace(","," a,") + " a";
        var baseContainerClick = function () {
            var accent = jQuery(this).attr("class").replace("accent", '').replace(' ', '');
            theme.applyTheme(accent, null, stgs);
            if (typeof (stgs.themePicked) == "function")
                stgs.themePicked(accent);
        };
        if (typeof ($.fn.on) === "function") {
            $(this).on("click.appBar", themeContainer, themeContainerClick);
            $(this).on("click.appBar", baseContainer, baseContainerClick);
        } else {
            $(themeContainer).live("click.appBar", themeContainerClick);
            $(baseContainer).live("click.appBar", baseContainerClick);
        }
    }
    //this should really only run once but we can support multiple application bars
    return $(this).each(function (idx, ele) {
    	var $this = $(ele),
            data = $.extend({}, stgs);
    	if(data.collapseHeight == "auto")
        	data.collapseHeight = $(this).outerHeight();

        //unfortunately we have to sniff out mobile browsers because of the inconsistent implementation of position:fixed
        //most desktop methods return false positives on a mobile
        //todo: find/come up with a better fixed position test
        if (navigator.userAgent.match(/(Android|webOS|iPhone|iPod|BlackBerry|PIE|IEMobile)/i)) {
            // IEMobile10 supports position:fixed. This should cover up to IE20 or at least until fixed positioning gets sorted            
            // let iOS 5+ pass as well, hopefully by iOS 9 fixed pos will be standard :/
            if (!navigator.userAgent.match(/(IEMobile\/1)/i) && !navigator.userAgent.match(/(iPhone OS [56789])/i)) {
                $this.css({ position: 'absolute', bottom: '0px' });
            }
        }
        data.slideOpen = function () {
            if (!$this.hasClass("expanded"))
                data.animateAppBar(false);
        };
        data.slideClosed = function () {
            if ($this.hasClass("expanded"))
                data.animateAppBar(true);
        };
        data.animateAppBar = function (isExpanded) {
        	var hgt = isExpanded ? data.collapseHeight : data.expandHeight,
        		t;
        	if (isExpanded) {
        		t = stgs.collapse();
        		if (typeof (t) != "undefined" && t === false)
        			return;
        		$this.removeClass("expanded");
        	} else {
        		t = stgs.expand();
        		if (typeof (t) != "undefined" && t === false)
					return
        		if (!$this.hasClass("expanded"))
        			$this.addClass("expanded");
        	}
            $this.stop().animate({ height: hgt }, { duration: data.duration }, function () {
            	if (isExpanded) {
            		stgs.collapsed();
            	} else {
            		stgs.expanded();
            	}
            });
        };
        $this.data("ApplicationBar", data)

        $this.find(stgs.handleSelector).click(function () {
            data.animateAppBar($this.hasClass("expanded"));
        });

        if (data.bindKeyboard == true) {
            jQuery(document.documentElement).keyup(function (event) {
                // handle cursor keys
                if (event.keyCode == 38) {
                    // expand
                    if (event.target && event.target.tagName.match(/INPUT|TEXTAREA|SELECT/i) == null) {
                        if (!$this.hasClass("expanded")) {
                            data.animateAppBar(false);
                        }
                    }
                    
                } else if (event.keyCode == 40) {
                    // collapse
                    if (event.target && event.target.tagName.match(/INPUT|TEXTAREA|SELECT/i) == null) {
                        if ($this.hasClass("expanded")) {
                            data.animateAppBar(true);
                        }
                    }
                }
            });            
        }
    });
};

// default options for applicationBar, the theme defaults are merged with this object when the applicationBar function is called
jQuery.fn.applicationBar.defaults = {
    applyTheme: true,                                       // should the theme be loaded from local storage and applied to the page
    themePicked: function (tColor) { },                     // called when a new theme is chosen. the chosen theme (dark | light)
    accentPicked: function (aColor) { },                    // called when a new accent is chosen. the chosen theme (blue, mango, purple, etc.)
    loaded: function (tColor, aColor) { },                  // called if applyTheme is true onload when a theme has been loaded from local storage or overridden by options
    duration: 300,                                          // how fast should animation be performed, in milliseconds
    expandHeight: "320px",                                  // height the application bar to expand to when opened
    collapseHeight: "auto",                                 // height the application bar will collapse back to when closed
    bindKeyboard: true,                                     // should up and down keys on keyborad be bound to the application bar
    handleSelector: "a.etc",
    metroLightUrl: 'images/metroIcons_light.jpg',  // the url for the metro light icons (only needed if preload 'preloadAltBaseTheme' is true)
    metroDarkUrl: 'images/metroIcons.jpg',         // the url for the metro dark icons (only needed if preload 'preloadAltBaseTheme' is true)
    preloadAltBaseTheme: false,                             // should the applicationBar icons be pre loaded for the alternate theme to enable fast theme switching
    expand: function () { },								// called before expanding. return false to cancel
    collapse: function() { },								// called before collapsing. return false to cancel
    expanded: function () { },								// called after expanding
    collapsed: function () { }								// called agter collapsing
};
/* Preload Images */
// Usage: jQuery(['img1.jpg', { src: 'img2.jpg' }]).metrojs.preloadImages(function(){ ... });
// Callback function gets called after all images are preloaded
$.fn.metrojs.preloadImages = function (callback) {
        var checklist = $(this).toArray();
        var $img = $("<img style='display:none;' />").appendTo("body");
        $(this).each(function () {
                var src = this;
                if (typeof(this) == "object")
                        src = this.src;
                $img.attr({ src: src }).load(function() {
                        for (var i = 0; i < checklist.length; i++) {
                                if (checklist[i] == element) {
                                        checklist.splice(i, 1);
                                }
                        }
                        if (checklist.length == 0) {
                                callback();
                        }
                });
               
        });
    $img.remove();
};
// object used for compatibility checks
$.fn.metrojs.MetroModernizr = function (stgs) {
    if(typeof(stgs) === "undefined") {
                stgs = { useHardwareAccel: true, useModernizr: typeof(window.Modernizr) !== "undefined" };
        }
    this.isOldJQuery =  /^1\.[0123]/.test($.fn.jquery),
    this.isOldAndroid = (function(){
        try{
            var ua = navigator.userAgent;        
            if( ua.indexOf("Android") >= 0 )
            {
                var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8));
                if (androidversion < 2.3)
                    return true;
            }
        }catch(err){ $.error(err); }
        return false;
    })();
    this.canTransform = false;
    this.canTransition = false;
    this.canTransform3d = false;
    this.canAnimate = false;
    this.canTouch = false;
    this.canFlip3d = stgs.useHardwareAccel;
    if (stgs.useHardwareAccel == true) {
        if (stgs.useModernizr == false) {
            //determine if the browser supports the neccessary accelerated features
            if (typeof (window.MetroModernizr) !== "undefined") {
                this.canTransform = window.MetroModernizr.canTransform;
                this.canTransition = window.MetroModernizr.canTransition;
                this.canTransform3d = window.MetroModernizr.canTransform3d;
                this.canAnimate = window.MetroModernizr.canAnimate;
                this.canTouch = window.MetroModernizr.canTouch;
            } else {
                window.MetroModernizr = {};
                /***** check for browser capabilities credit: modernizr-1.7 http://modernizr.com/ *****/
                var mod = 'metromodernizr';
                var docElement = document.documentElement;
                var docHead = document.head || document.getElementsByTagName('head')[0];
                var modElem = document.createElement(mod);
                var m_style = modElem.style;
                var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
                var domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');
                var test_props = function (props, callback) {
                    for (var i in props) {
                        if (m_style[props[i]] !== undefined && (!callback || callback(props[i], modElem))) {
                            return true;
                        }
                    }
                };
                var test_props_all = function (prop, callback) {
                    var uc_prop = prop.charAt(0).toUpperCase() + prop.substr(1),
                    props = (prop + ' ' + domPrefixes.join(uc_prop + ' ') + uc_prop).split(' ');
                    return !!test_props(props, callback);
                };
                var test_3d = function () {
                    var ret = !!test_props(['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective']);
                    if (ret && 'webkitPerspective' in docElement.style) {
                        // Webkit allows this media query to succeed only if the feature is enabled.
                        // '@media (transform-3d),(-o-transform-3d),(-moz-transform-3d),(-ms-transform-3d),(-webkit-transform-3d),(modernizr){ ... }'
                        ret = testMediaQuery(['@media (',prefixes.join('transform-3d),('),mod,')','{#metromodernizr{left:9px;position:absolute;height:3px;}}'].join(''), function(div){
                            return div.offsetHeight === 3 && div.offsetLeft === 9;
                        });
                    }
                    return ret;
                };
                var testMediaQuery = function (mq, predicate) {
                    var st = document.createElement('style'),
                        div = document.createElement('div'),
                        ret;
                    st.textContent = mq;
                    docHead.appendChild(st);
                    div.id = mod;
                    docElement.appendChild(div);
                    ret = predicate(div);
                    st.parentNode.removeChild(st);
                    div.parentNode.removeChild(div);
                    return !!ret;
                };
                var test_touch = function() {
                    return canTouch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch ||
                        (window.PointerEvent && window.navigator.maxTouchPoints > 0) ||
                        (window.MSPointerEvent && window.navigator.msMaxTouchPoints > 0) ||
                        testMediaQuery(['@media (',prefixes.join('touch-enabled),('),mod,')','{#metromodernizr{top:9px;position:absolute}}'].join(''), function(div){
                            return div.offsetTop === 9;
                        });
                };
                this.canTransform = !!test_props(['transformProperty', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform']);
                this.canTransition = test_props_all('transitionProperty');
                this.canTransform3d = test_3d();
                this.canAnimate = test_props_all('animationName');
                this.canTouch = test_touch();
                window.MetroModernizr.canTransform = this.canTransform;
                window.MetroModernizr.canTransition = this.canTransition;
                window.MetroModernizr.canTransform3d = this.canTransform3d;
                window.MetroModernizr.canAnimate = this.canAnimate;
                window.MetroModernizr.canTouch = this.canTouch;
                docElement = null;
                docHead = null;
                modElem = null;
                m_style = null;
            }
        } else {
            this.canTransform = $("html").hasClass("csstransforms");
            this.canTransition = $("html").hasClass("csstransitions");
            this.canTransform3d = $("html").hasClass("csstransforms3d");
            this.canAnimate = $("html").hasClass("cssanimations");
            this.canTouch = $("html").hasClass("touch") || (typeof(window.navigator.msMaxTouchPoints) !== "undefined" && window.navigator.msMaxTouchPoints > 0);
        }
    }
    this.canFlip3d = this.canFlip3d && this.canAnimate && this.canTransform && this.canTransform3d;
};

})(jQuery);


/***/ }),

/***/ 342:
/***/ (function(module, exports) {

(function(global) {
  "use strict";

  /* Set up a RequestAnimationFrame shim so we can animate efficiently FOR
   * GREAT JUSTICE. */
  var requestInterval, cancelInterval;

  (function() {
    var raf = global.requestAnimationFrame       ||
              global.webkitRequestAnimationFrame ||
              global.mozRequestAnimationFrame    ||
              global.oRequestAnimationFrame      ||
              global.msRequestAnimationFrame     ,
        caf = global.cancelAnimationFrame        ||
              global.webkitCancelAnimationFrame  ||
              global.mozCancelAnimationFrame     ||
              global.oCancelAnimationFrame       ||
              global.msCancelAnimationFrame      ;

    if(raf && caf) {
      requestInterval = function(fn, delay) {
        var handle = {value: null};

        function loop() {
          handle.value = raf(loop);
          fn();
        }

        loop();
        return handle;
      };

      cancelInterval = function(handle) {
        caf(handle.value);
      };
    }

    else {
      requestInterval = setInterval;
      cancelInterval = clearInterval;
    }
  }());

  /* Catmull-rom spline stuffs. */
  /*
  function upsample(n, spline) {
    var polyline = [],
        len = spline.length,
        bx  = spline[0],
        by  = spline[1],
        cx  = spline[2],
        cy  = spline[3],
        dx  = spline[4],
        dy  = spline[5],
        i, j, ax, ay, px, qx, rx, sx, py, qy, ry, sy, t;

    for(i = 6; i !== spline.length; i += 2) {
      ax = bx;
      bx = cx;
      cx = dx;
      dx = spline[i    ];
      px = -0.5 * ax + 1.5 * bx - 1.5 * cx + 0.5 * dx;
      qx =        ax - 2.5 * bx + 2.0 * cx - 0.5 * dx;
      rx = -0.5 * ax            + 0.5 * cx           ;
      sx =                   bx                      ;

      ay = by;
      by = cy;
      cy = dy;
      dy = spline[i + 1];
      py = -0.5 * ay + 1.5 * by - 1.5 * cy + 0.5 * dy;
      qy =        ay - 2.5 * by + 2.0 * cy - 0.5 * dy;
      ry = -0.5 * ay            + 0.5 * cy           ;
      sy =                   by                      ;

      for(j = 0; j !== n; ++j) {
        t = j / n;

        polyline.push(
          ((px * t + qx) * t + rx) * t + sx,
          ((py * t + qy) * t + ry) * t + sy
        );
      }
    }

    polyline.push(
      px + qx + rx + sx,
      py + qy + ry + sy
    );

    return polyline;
  }

  function downsample(n, polyline) {
    var len = 0,
        i, dx, dy;

    for(i = 2; i !== polyline.length; i += 2) {
      dx = polyline[i    ] - polyline[i - 2];
      dy = polyline[i + 1] - polyline[i - 1];
      len += Math.sqrt(dx * dx + dy * dy);
    }

    len /= n;

    var small = [],
        target = len,
        min = 0,
        max, t;

    small.push(polyline[0], polyline[1]);

    for(i = 2; i !== polyline.length; i += 2) {
      dx = polyline[i    ] - polyline[i - 2];
      dy = polyline[i + 1] - polyline[i - 1];
      max = min + Math.sqrt(dx * dx + dy * dy);

      if(max > target) {
        t = (target - min) / (max - min);

        small.push(
          polyline[i - 2] + dx * t,
          polyline[i - 1] + dy * t
        );

        target += len;
      }

      min = max;
    }

    small.push(polyline[polyline.length - 2], polyline[polyline.length - 1]);

    return small;
  }
  */

  /* Define skycon things. */
  /* FIXME: I'm *really really* sorry that this code is so gross. Really, I am.
   * I'll try to clean it up eventually! Promise! */
  var KEYFRAME = 500,
      STROKE = 0.08,
      TAU = 2.0 * Math.PI,
      TWO_OVER_SQRT_2 = 2.0 / Math.sqrt(2);

  function circle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, TAU, false);
    ctx.fill();
  }

  function line(ctx, ax, ay, bx, by) {
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.stroke();
  }

  function puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var c = Math.cos(t * TAU),
        s = Math.sin(t * TAU);

    rmax -= rmin;

    circle(
      ctx,
      cx - s * rx,
      cy + c * ry + rmax * 0.5,
      rmin + (1 - c * 0.5) * rmax
    );
  }

  function puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var i;

    for(i = 5; i--; )
      puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
  }

  function cloud(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
        b = cw * 0.12,
        c = cw * 0.24,
        d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  function sun(ctx, t, cx, cy, cw, s, color) {
    t /= 120000;

    var a = cw * 0.25 - s * 0.5,
        b = cw * 0.32 + s * 0.5,
        c = cw * 0.50 - s * 0.5,
        i, p, cos, sin;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.arc(cx, cy, a, 0, TAU, false);
    ctx.stroke();

    for(i = 8; i--; ) {
      p = (t + i / 8) * TAU;
      cos = Math.cos(p);
      sin = Math.sin(p);
      line(ctx, cx + cos * b, cy + sin * b, cx + cos * c, cy + sin * c);
    }
  }

  function moon(ctx, t, cx, cy, cw, s, color) {
    t /= 15000;

    var a = cw * 0.29 - s * 0.5,
        b = cw * 0.05,
        c = Math.cos(t * TAU),
        p = c * TAU / -16;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    cx += c * b;

    ctx.beginPath();
    ctx.arc(cx, cy, a, p + TAU / 8, p + TAU * 7 / 8, false);
    ctx.arc(cx + Math.cos(p) * a * TWO_OVER_SQRT_2, cy + Math.sin(p) * a * TWO_OVER_SQRT_2, a, p + TAU * 5 / 8, p + TAU * 3 / 8, true);
    ctx.closePath();
    ctx.stroke();
  }

  function rain(ctx, t, cx, cy, cw, s, color) {
    t /= 1350;

    var a = cw * 0.16,
        b = TAU * 11 / 12,
        c = TAU *  7 / 12,
        i, p, x, y;

    ctx.fillStyle = color;

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a;
      y = cy + p * p * cw;
      ctx.beginPath();
      ctx.moveTo(x, y - s * 1.5);
      ctx.arc(x, y, s * 0.75, b, c, false);
      ctx.fill();
    }
  }

  function sleet(ctx, t, cx, cy, cw, s, color) {
    t /= 750;

    var a = cw * 0.1875,
        b = TAU * 11 / 12,
        c = TAU *  7 / 12,
        i, p, x, y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = Math.floor(cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a) + 0.5;
      y = cy + p * cw;
      line(ctx, x, y - s * 1.5, x, y + s * 1.5);
    }
  }

  function snow(ctx, t, cx, cy, cw, s, color) {
    t /= 3000;

    var a  = cw * 0.16,
        b  = s * 0.75,
        u  = t * TAU * 0.7,
        ux = Math.cos(u) * b,
        uy = Math.sin(u) * b,
        v  = u + TAU / 3,
        vx = Math.cos(v) * b,
        vy = Math.sin(v) * b,
        w  = u + TAU * 2 / 3,
        wx = Math.cos(w) * b,
        wy = Math.sin(w) * b,
        i, p, x, y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = cx + Math.sin((p + i / 4) * TAU) * a;
      y = cy + p * cw;

      line(ctx, x - ux, y - uy, x + ux, y + uy);
      line(ctx, x - vx, y - vy, x + vx, y + vy);
      line(ctx, x - wx, y - wy, x + wx, y + wy);
    }
  }

  function fogbank(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
        b = cw * 0.06,
        c = cw * 0.21,
        d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  /*
  var WIND_PATHS = [
        downsample(63, upsample(8, [
          -1.00, -0.28,
          -0.75, -0.18,
          -0.50,  0.12,
          -0.20,  0.12,
          -0.04, -0.04,
          -0.07, -0.18,
          -0.19, -0.18,
          -0.23, -0.05,
          -0.12,  0.11,
           0.02,  0.16,
           0.20,  0.15,
           0.50,  0.07,
           0.75,  0.18,
           1.00,  0.28
        ])),
        downsample(31, upsample(16, [
          -1.00, -0.10,
          -0.75,  0.00,
          -0.50,  0.10,
          -0.25,  0.14,
           0.00,  0.10,
           0.25,  0.00,
           0.50, -0.10,
           0.75, -0.14,
           1.00, -0.10
        ]))
      ];
  */

  var WIND_PATHS = [
        [
          -0.7500, -0.1800, -0.7219, -0.1527, -0.6971, -0.1225,
          -0.6739, -0.0910, -0.6516, -0.0588, -0.6298, -0.0262,
          -0.6083,  0.0065, -0.5868,  0.0396, -0.5643,  0.0731,
          -0.5372,  0.1041, -0.5033,  0.1259, -0.4662,  0.1406,
          -0.4275,  0.1493, -0.3881,  0.1530, -0.3487,  0.1526,
          -0.3095,  0.1488, -0.2708,  0.1421, -0.2319,  0.1342,
          -0.1943,  0.1217, -0.1600,  0.1025, -0.1290,  0.0785,
          -0.1012,  0.0509, -0.0764,  0.0206, -0.0547, -0.0120,
          -0.0378, -0.0472, -0.0324, -0.0857, -0.0389, -0.1241,
          -0.0546, -0.1599, -0.0814, -0.1876, -0.1193, -0.1964,
          -0.1582, -0.1935, -0.1931, -0.1769, -0.2157, -0.1453,
          -0.2290, -0.1085, -0.2327, -0.0697, -0.2240, -0.0317,
          -0.2064,  0.0033, -0.1853,  0.0362, -0.1613,  0.0672,
          -0.1350,  0.0961, -0.1051,  0.1213, -0.0706,  0.1397,
          -0.0332,  0.1512,  0.0053,  0.1580,  0.0442,  0.1624,
           0.0833,  0.1636,  0.1224,  0.1615,  0.1613,  0.1565,
           0.1999,  0.1500,  0.2378,  0.1402,  0.2749,  0.1279,
           0.3118,  0.1147,  0.3487,  0.1015,  0.3858,  0.0892,
           0.4236,  0.0787,  0.4621,  0.0715,  0.5012,  0.0702,
           0.5398,  0.0766,  0.5768,  0.0890,  0.6123,  0.1055,
           0.6466,  0.1244,  0.6805,  0.1440,  0.7147,  0.1630,
           0.7500,  0.1800
        ],
        [
          -0.7500,  0.0000, -0.7033,  0.0195, -0.6569,  0.0399,
          -0.6104,  0.0600, -0.5634,  0.0789, -0.5155,  0.0954,
          -0.4667,  0.1089, -0.4174,  0.1206, -0.3676,  0.1299,
          -0.3174,  0.1365, -0.2669,  0.1398, -0.2162,  0.1391,
          -0.1658,  0.1347, -0.1157,  0.1271, -0.0661,  0.1169,
          -0.0170,  0.1046,  0.0316,  0.0903,  0.0791,  0.0728,
           0.1259,  0.0534,  0.1723,  0.0331,  0.2188,  0.0129,
           0.2656, -0.0064,  0.3122, -0.0263,  0.3586, -0.0466,
           0.4052, -0.0665,  0.4525, -0.0847,  0.5007, -0.1002,
           0.5497, -0.1130,  0.5991, -0.1240,  0.6491, -0.1325,
           0.6994, -0.1380,  0.7500, -0.1400
        ]
      ],
      WIND_OFFSETS = [
        {start: 0.36, end: 0.11},
        {start: 0.56, end: 0.16}
      ];

  function leaf(ctx, t, x, y, cw, s, color) {
    var a = cw / 8,
        b = a / 3,
        c = 2 * b,
        d = (t % 1) * TAU,
        e = Math.cos(d),
        f = Math.sin(d);

    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.arc(x        , y        , a, d          , d + Math.PI, false);
    ctx.arc(x - b * e, y - b * f, c, d + Math.PI, d          , false);
    ctx.arc(x + c * e, y + c * f, b, d + Math.PI, d          , true );
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    ctx.stroke();
  }

  function swoosh(ctx, t, cx, cy, cw, s, index, total, color) {
    t /= 2500;

    var path = WIND_PATHS[index],
        a = (t + index - WIND_OFFSETS[index].start) % total,
        c = (t + index - WIND_OFFSETS[index].end  ) % total,
        e = (t + index                            ) % total,
        b, d, f, i;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if(a < 1) {
      ctx.beginPath();

      a *= path.length / 2 - 1;
      b  = Math.floor(a);
      a -= b;
      b *= 2;
      b += 2;

      ctx.moveTo(
        cx + (path[b - 2] * (1 - a) + path[b    ] * a) * cw,
        cy + (path[b - 1] * (1 - a) + path[b + 1] * a) * cw
      );

      if(c < 1) {
        c *= path.length / 2 - 1;
        d  = Math.floor(c);
        c -= d;
        d *= 2;
        d += 2;

        for(i = b; i !== d; i += 2)
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

        ctx.lineTo(
          cx + (path[d - 2] * (1 - c) + path[d    ] * c) * cw,
          cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
        );
      }

      else
        for(i = b; i !== path.length; i += 2)
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

      ctx.stroke();
    }

    else if(c < 1) {
      ctx.beginPath();

      c *= path.length / 2 - 1;
      d  = Math.floor(c);
      c -= d;
      d *= 2;
      d += 2;

      ctx.moveTo(cx + path[0] * cw, cy + path[1] * cw);

      for(i = 2; i !== d; i += 2)
        ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

      ctx.lineTo(
        cx + (path[d - 2] * (1 - c) + path[d    ] * c) * cw,
        cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
      );

      ctx.stroke();
    }

    if(e < 1) {
      e *= path.length / 2 - 1;
      f  = Math.floor(e);
      e -= f;
      f *= 2;
      f += 2;

      leaf(
        ctx,
        t,
        cx + (path[f - 2] * (1 - e) + path[f    ] * e) * cw,
        cy + (path[f - 1] * (1 - e) + path[f + 1] * e) * cw,
        cw,
        s,
        color
      );
    }
  }

  var Skycons = function(opts) {
        this.list        = [];
        this.interval    = null;
        this.color       = opts && opts.color ? opts.color : "black";
        this.resizeClear = !!(opts && opts.resizeClear);
      };

  Skycons.CLEAR_DAY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sun(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.CLEAR_NIGHT = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    moon(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_DAY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sun(ctx, t, w * 0.625, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_NIGHT = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    moon(ctx, t, w * 0.667, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.CLOUDY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    cloud(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.RAIN = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    rain(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SLEET = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sleet(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SNOW = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    snow(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.WIND = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 0, 2, color);
    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 1, 2, color);
  };

  Skycons.FOG = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h),
        k = s * STROKE;

    fogbank(ctx, t, w * 0.5, h * 0.32, s * 0.75, k, color);

    t /= 5000;

    var a = Math.cos((t       ) * TAU) * s * 0.02,
        b = Math.cos((t + 0.25) * TAU) * s * 0.02,
        c = Math.cos((t + 0.50) * TAU) * s * 0.02,
        d = Math.cos((t + 0.75) * TAU) * s * 0.02,
        n = h * 0.936,
        e = Math.floor(n - k * 0.5) + 0.5,
        f = Math.floor(n - k * 2.5) + 0.5;

    ctx.strokeStyle = color;
    ctx.lineWidth = k;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    line(ctx, a + w * 0.2 + k * 0.5, e, b + w * 0.8 - k * 0.5, e);
    line(ctx, c + w * 0.2 + k * 0.5, f, d + w * 0.8 - k * 0.5, f);
  };

  Skycons.prototype = {
    _determineDrawingFunction: function(draw) {
      if(typeof draw === "string")
        draw = Skycons[draw.toUpperCase().replace(/-/g, "_")] || null;

      return draw;
    },
    add: function(el, draw) {
      var obj;

      if(typeof el === "string")
        el = document.getElementById(el);

      // Does nothing if canvas name doesn't exists
      if(el === null)
        return;

      draw = this._determineDrawingFunction(draw);

      // Does nothing if the draw function isn't actually a function
      if(typeof draw !== "function")
        return;

      obj = {
        element: el,
        context: el.getContext("2d"),
        drawing: draw
      };

      this.list.push(obj);
      this.draw(obj, KEYFRAME);
    },
    set: function(el, draw) {
      var i;

      if(typeof el === "string")
        el = document.getElementById(el);

      for(i = this.list.length; i--; )
        if(this.list[i].element === el) {
          this.list[i].drawing = this._determineDrawingFunction(draw);
          this.draw(this.list[i], KEYFRAME);
          return;
        }

      this.add(el, draw);
    },
    remove: function(el) {
      var i;

      if(typeof el === "string")
        el = document.getElementById(el);

      for(i = this.list.length; i--; )
        if(this.list[i].element === el) {
          this.list.splice(i, 1);
          return;
        }
    },
    draw: function(obj, time) {
      var canvas = obj.context.canvas;

      if(this.resizeClear)
        canvas.width = canvas.width;

      else
        obj.context.clearRect(0, 0, canvas.width, canvas.height);

      obj.drawing(obj.context, time, this.color);
    },
    play: function() {
      var self = this;

      this.pause();
      this.interval = requestInterval(function() {
        var now = Date.now(),
            i;

        for(i = self.list.length; i--; )
          self.draw(self.list[i], now);
      }, 1000 / 60);
    },
    pause: function() {
      var i;

      if(this.interval) {
        cancelInterval(this.interval);
        this.interval = null;
      }
    }
  };

  global.Skycons = Skycons;
}(this));


/***/ }),

/***/ 343:
/***/ (function(module, exports) {

/**
 * Widgster plugin.
 */
!function ($) {

    "use strict";

    // WIDGSTER CLASS DEFINITION
    // ======================

    var Widgster = function (el, options) {
        this.$element = $(el);
        this.$collapse = this.$element.find('[data-widgster=collapse]');
        this.$expand = this.$element.find('[data-widgster=expand]');
        this.$fullscreen = this.$element.find('[data-widgster=fullscreen]');
        this.$restore = this.$element.find('[data-widgster=restore]');
        this.options = options;
        this.collapsed = options.collapsed;
        this.fullscreened = options.fullscreened;

        this._initHandlers();

        if (this.collapsed){
            this.collapse(false);
        } else {
            this.$expand.hide();
        }

        if (this.fullscreened){
            this.fullscreen();
        } else {
            this.$restore.hide();
        }

        this.options.autoload && this.load();
        var interval = parseInt(this.options.autoload);
        if (!isNaN(interval)){
            var widgster = this;
            this._autoloadInterval = setInterval(function(){
                widgster.load();
            }, interval)
        }
    };

    Widgster.DEFAULTS = {
        collapsed: false,
        fullscreened: false,
        transitionDuration: 150,
        bodySelector: '.body',
        showLoader: true,
        autoload: false,
        loaderTemplate: '<div style="text-align: center; margin-top: 10px;">Loading...</div>',
        /**
         * provide a way to insert a prompt before removing widget
         * @param callback
         */
        closePrompt: function(callback){
            callback()
        }
    };

    Widgster.prototype.collapse = function(animate){
        animate = typeof animate == "undefined" ? true : animate;
        var e = $.Event('collapse.widgster');
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) return;

        var widgster = this,
            duration = animate ? this.options.transitionDuration : 0;
        this.$element.find(this.options.bodySelector).slideUp(duration, function(){
            widgster.$element.addClass('collapsed');
            widgster.$element.trigger($.Event('collapsed.widgster'));
            widgster.collapsed = true;
        });

        this.$collapse.hide();
        this.$expand.show();

        return false;
    };

    Widgster.prototype.expand = function(animate){
        animate = typeof animate == "undefined" ? true : animate;
        var e = $.Event('expand.widgster');
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) return;

        var widgster = this,
            duration = animate ? this.options.transitionDuration : 0;
        this.$element.find(this.options.bodySelector).slideDown(duration, function(){
            widgster.$element.removeClass('collapsed');
            widgster.$element.trigger($.Event('expanded.widgster'));
            widgster.collapsed = false;
        });

        this.$collapse.show();
        this.$expand.hide();

        return false;
    };

    Widgster.prototype.close = function(){

        this.options.closePrompt && this.options.closePrompt($.proxy(this._doClose, this));

        return false;
    };

    Widgster.prototype.load = function(){
        var e = $.Event('load.widgster');

        this.$element.trigger(e);

        if (e.isDefaultPrevented()) return;

        var widgster = this;
        this.$element.find(this.options.bodySelector).load(this.options.load, function(responseText, textStatus, xhr){
            widgster.expand();
            widgster.options.showLoader && widgster._hideLoader();
            widgster.$element.trigger($.Event('loaded.widgster', {
                responseText: responseText,
                textStatus: textStatus,
                xhr: xhr
            }))
        });
        this.options.showLoader && this._showLoader();

        return false;
    };

    Widgster.prototype.fullscreen = function(){
        var e = $.Event('fullscreen.widgster');

        this.$element.trigger(e);

        if (e.isDefaultPrevented()) return;

        this.$element.css({
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            margin: 0,
            'z-index': 10000
        });
        $('body').css('overflow', 'hidden');

        this.wasCollapsed = this.collapsed;
        this.expand(false);

        this.$fullscreen.hide();
        this.$restore.show();

        this.$collapse.hide(); this.$expand.hide();

        this.$element.addClass('fullscreened');

        this.$element.trigger($.Event('fullscreened.widgster'));

        return false;
    };

    Widgster.prototype.restore = function(){
        var e = $.Event('restore.widgster');

        this.$element.trigger(e);

        if (e.isDefaultPrevented()) return;

        this.$element.css({
            position: '',
            top: '',
            right: '',
            bottom: '',
            left: '',
            margin: '',
            'z-index': ''
        });
        $('body').css('overflow', '');

        this.$fullscreen.show();
        this.$restore.hide();

        if (this.collapsed){
            this.$collapse.hide(); this.$expand.show();
        } else {
            this.$collapse.show(); this.$expand.hide();
        }

        this.wasCollapsed && this.collapse(false);

        this.$element.removeClass('fullscreened');

        this.$element.trigger($.Event('restored.widgster'));

        return false;
    };

    Widgster.prototype._doClose = function(){
        //could have been remove.widgster, but http://bugs.jquery.com/ticket/14600
        var e = $.Event('close.widgster');

        this.$element.trigger(e);

        if (e.isDefaultPrevented()) return;

        $('body').css('overflow', '');

        this.$element.detach();

        e = $.Event('closed.widgster', {$element: this.$element});

        this.$element.trigger(e);
    };

    Widgster.prototype._showLoader = function(){
        var $body = this.$element.find(this.options.bodySelector);

        this.$loaderWrap = this.$element.find('.widgster-loader-wrap');

        //create loader html if does not exist
        if (this.$loaderWrap.length == 0){
            this.$loaderWrap = $('<div class="widgster-loader-wrap" style="position: absolute; top: 0; right: 0; bottom: 0; ' +
                'left: 0; display: none"></div>');
            this.$element.append(this.$loaderWrap);
        }
        this.$loaderWrap.html(this.options.loaderTemplate);
        this.$loaderWrap.css({
            'margin-top': $body.position().top
        });
        if (!this.collapsed){
            $body.fadeTo(this.options.transitionDuration, 0);
            this.$loaderWrap.fadeIn(this.options.transitionDuration)
        }
    };

    Widgster.prototype._hideLoader = function(){
        this.$loaderWrap.fadeOut(this.options.transitionDuration);
        this.$element.find(this.options.bodySelector).fadeTo(this.options.transitionDuration, 1);
    };

    /**
     * Attach all required widgster functions to data-widgster elements.
     * @private
     */
    Widgster.prototype._initHandlers = function(){
        this.$element.on('click.collapse.widgster', '[data-widgster=collapse]', $.proxy(this.collapse, this));
        this.$element.on('click.expand.widgster', '[data-widgster=expand]', $.proxy(this.expand, this));
        this.$element.on('click.close.widgster', '[data-widgster=close]', $.proxy(this.close, this));
        this.$element.on('click.load.widgster', '[data-widgster=load]', $.proxy(this.load, this));
        this.$element.on('click.fullscreen.widgster', '[data-widgster=fullscreen]', $.proxy(this.fullscreen, this));
        this.$element.on('click.restore.widgster', '[data-widgster=restore]', $.proxy(this.restore, this));
    };


    // NAMESPACED DATA ATTRIBUTES
    // =======================

    function getNamespacedData(namespace, data){
        var namespacedData = {};
        for (var key in data){
            // key starts with namespace
            if (key.slice(0, namespace.length) == namespace){
                var namespacedKey = key.slice(namespace.length, key.length);
                namespacedKey = namespacedKey.charAt(0).toLowerCase() + namespacedKey.slice(1);
                namespacedData[namespacedKey] = data[key];
            }
        }

        return namespacedData;
    }

    // WIDGSTER PLUGIN DEFINITION
    // =======================

    $.fn.widgster = function (option) {
        return this.each(function () {
            var $this   = $(this);
            var data    = $this.data('widgster');
            var options = $.extend({}, Widgster.DEFAULTS, getNamespacedData('widgster', $this.data()), typeof option == 'object' && option);

            if (!data) $this.data('widgster', new Widgster(this, options));
            if (typeof option == 'string') data[option]();
        })
    };

    $.fn.widgster.Constructor = Widgster;


}(window.jQuery);


/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_project_config__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_service__ = __webpack_require__(291);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectService = (function () {
    function SelectService(http, local) {
        this.http = http;
        this.local = local;
    }
    SelectService.prototype.loadBilling = function () {
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'billing/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.billings;
            policies.map(function (result) {
                var obj = {
                    value: result._id,
                    label: result.billingNumber
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadUsers = function () {
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'user/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.users;
            policies.map(function (result) {
                var obj = {
                    value: result._id,
                    label: result.name + ' ' + result.lastName
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadClients = function () {
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'client/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.clients;
            policies.map(function (result) {
                var obj = {
                    value: result._id,
                    label: result.name + ' ' + result.lastName
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadDeductible = function () {
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'deductible/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.deductibles;
            policies.map(function (result) {
                var obj = {
                    value: result._id,
                    label: result.name
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadInsurances = function () {
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'insurance/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.insurances;
            policies.map(function (result) {
                var obj = {
                    value: result._id,
                    label: result.bussinesName
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadNoRenewal = function () {
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'noRenewal/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.noRenewal;
            policies.map(function (result) {
                var obj = {
                    value: result._id,
                    label: result.name
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadFrecuencyOfPayments = function () {
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'frequencyPayment/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.frequencyPayments;
            policies.map(function (result) {
                var obj = {
                    value: result._id,
                    label: result.name
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadCities = function () {
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'city/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.cities;
            policies.map(function (result) {
                var obj = {
                    value: result._id,
                    label: result.name
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadRamos = function () {
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'ramo/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.ramos;
            policies.map(function (result) {
                var obj = {
                    value: result._id,
                    label: result.name
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadCarUse = function () {
        //caruse
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'param/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var apiResult = result.json();
            apiResult.params.carUse.list.forEach(function (element) {
                var obj = {
                    value: element.id,
                    label: element.name
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadTypeList = function () {
        //caruse
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'param/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var apiResult = result.json();
            apiResult.params.typeList.list.forEach(function (element) {
                var obj = {
                    value: element.id,
                    label: element.name
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadRelationship = function () {
        //caruse
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'param/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var apiResult = result.json();
            apiResult.params.relationship.list.forEach(function (element) {
                var obj = {
                    value: element.id,
                    label: element.name
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadDocTypes = function () {
        //caruse
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'param/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var apiResult = result.json();
            apiResult.params.docType.list.forEach(function (element) {
                var obj = {
                    value: element.id,
                    label: element.name
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadPaymentTypes = function () {
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'paymentType/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.paymentTypes;
            policies.map(function (result) {
                var obj = {
                    value: result._id,
                    label: result.name
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadPolicyTypes = function () {
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'policyType/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.policyTypes;
            policies.map(function (result) {
                var obj = {
                    value: result._id,
                    label: result.name
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadCars = function () {
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'car/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.cars;
            policies.map(function (result) {
                var obj = {
                    value: result._id,
                    label: result.placa
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadPolicies = function () {
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'policy/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.policies;
            policies.map(function (result) {
                var obj = {
                    value: result._id,
                    label: result.policyNumber
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadPolicyAnnexs = function (idPolicy) {
        var policyOptions = [];
        var filter = [
            {
                condition: "=",
                field: "idPolicy",
                value: idPolicy
            }
        ];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'policyAnnex/filter/?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.policyAnnexes;
            policies.map(function (result) {
                var obj = {
                    value: result._id,
                    label: result.annexNumber
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadClientsRecipient = function () {
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'client/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.clients;
            policies.map(function (result) {
                var obj = {
                    value: result._id,
                    label: 'Cliente : ' + result.name + ' ' + result.lastName
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadInsurancesRecipient = function () {
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'insurance/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.insurances;
            policies.map(function (result) {
                var obj = {
                    value: result._id,
                    label: 'Aseguradora: ' + result.bussinesName
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadBussinesRecipient = function () {
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'business/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.businesses;
            policies.map(function (result) {
                var obj = {
                    value: result._id,
                    label: 'Empresa: ' + result.name
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadBusiness = function () {
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'business/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.businesses;
            policies.map(function (result) {
                var obj = {
                    value: result._id,
                    label: result.name
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    SelectService.prototype.loadPlanAlternatives = function () {
        var policyOptions = [];
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_project_config__["a" /* config */].url + 'planAlternative/list?access_token=' + this.local.getUser().token).toPromise().then(function (result) {
            var res = result.json();
            var policies = res.planAlternatives;
            policies.map(function (result) {
                var obj = {
                    value: result.value,
                    label: result.name
                };
                policyOptions.push(obj);
            });
            return policyOptions;
        });
    };
    return SelectService;
}());
SelectService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__session_service__["a" /* UserSessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__session_service__["a" /* UserSessionService */]) === "function" && _b || Object])
], SelectService);

var _a, _b;
//# sourceMappingURL=select.service.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppState = (function () {
    function AppState() {
        var _this = this;
        this._data = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._dataStream$ = this._data.asObservable();
        this._subscriptions = new Map();
        this._dataStream$.subscribe(function (data) { return _this._onEvent(data); });
    }
    AppState.prototype.notifyDataChanged = function (event, value) {
        var current = this._data[event];
        if (current != value) {
            this._data[event] = value;
            this._data.next({
                event: event,
                data: this._data[event]
            });
        }
    };
    AppState.prototype.subscribe = function (event, callback) {
        var subscribers = this._subscriptions.get(event) || [];
        subscribers.push(callback);
        this._subscriptions.set(event, subscribers);
    };
    AppState.prototype._onEvent = function (data) {
        var subscribers = this._subscriptions.get(data['event']) || [];
        subscribers.forEach(function (callback) {
            callback.call(null, data['data']);
        });
    };
    return AppState;
}());
AppState = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AppState);

//# sourceMappingURL=app.state.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalLinkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExternalLinkComponent = (function () {
    function ExternalLinkComponent(http) {
        this.http = http;
        this.url = '';
    }
    ExternalLinkComponent.prototype.ngOnInit = function () { };
    ExternalLinkComponent.prototype.getLink = function (url) {
        this.url = url;
    };
    return ExternalLinkComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", String)
], ExternalLinkComponent.prototype, "url", void 0);
ExternalLinkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'external-modal',
        template: __webpack_require__(623),
        styles: [__webpack_require__(621)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ExternalLinkComponent);

var _a;
//# sourceMappingURL=external-link-modal.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_external_link_modal_external_link_modal__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_messaging_service__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_select_service__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_session_service__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_state__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__config_project_config__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PagesComponent = (function () {
    function PagesComponent(_state, _location, local, router, http, messageService) {
        var _this = this;
        this._state = _state;
        this._location = _location;
        this.local = local;
        this.router = router;
        this.http = http;
        this.messageService = messageService;
        this.helpLinks = [];
        this.isMenuCollapsed = false;
        this.local.checkUser() ? null : this.router.navigate(['/login']);
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
    }
    PagesComponent.prototype.ngOnInit = function () {
        this.getCurrentPageName();
        this.loadLinks();
    };
    PagesComponent.prototype.getCurrentPageName = function () {
        var url = this._location.path();
        var hash = (window.location.hash) ? '#' : '';
        setTimeout(function () {
            var subMenu = jQuery('a[href="' + hash + url + '"]').closest("li").closest("ul");
            window.scrollTo(0, 0);
            subMenu.closest("li").addClass("sidebar-item-expanded");
            subMenu.slideDown(250);
        });
    };
    PagesComponent.prototype.hideMenu = function () {
        this._state.notifyDataChanged('menu.isCollapsed', true);
    };
    PagesComponent.prototype.ngAfterViewInit = function () {
        document.getElementById('preloader').style['display'] = 'none';
    };
    PagesComponent.prototype.loadLinks = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_9__config_project_config__["a" /* config */].url + 'helpLink/list?access_token=' + this.local.getUser().token).map(function (res) {
            return res.json();
        }).subscribe(function (result) {
            _this.helpLinks = result.helpLinks;
            console.log('helpLinks', _this.helpLinks);
        });
    };
    PagesComponent.prototype.sendUrl = function (url) {
        this.urlTo = url;
        this.extLink.getLink(this.urlTo);
        console.log(url);
    };
    return PagesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0__components_external_link_modal_external_link_modal__["a" /* ExternalLinkComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__components_external_link_modal_external_link_modal__["a" /* ExternalLinkComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__components_external_link_modal_external_link_modal__["a" /* ExternalLinkComponent */]) === "function" && _a || Object)
], PagesComponent.prototype, "extLink", void 0);
PagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'az-pages',
        encapsulation: __WEBPACK_IMPORTED_MODULE_6__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(624),
        styles: [__webpack_require__(622)],
        providers: [__WEBPACK_IMPORTED_MODULE_8__app_state__["a" /* AppState */], __WEBPACK_IMPORTED_MODULE_5__providers_session_service__["a" /* UserSessionService */], __WEBPACK_IMPORTED_MODULE_3__providers_select_service__["a" /* SelectService */], __WEBPACK_IMPORTED_MODULE_1__providers_messaging_service__["a" /* MessagingService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__app_state__["a" /* AppState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__app_state__["a" /* AppState */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_session_service__["a" /* UserSessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_session_service__["a" /* UserSessionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__providers_messaging_service__["a" /* MessagingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_messaging_service__["a" /* MessagingService */]) === "function" && _g || Object])
], PagesComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=pages.component.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MessagingService = (function () {
    function MessagingService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    MessagingService.prototype.sendMessage = function (message) {
        this.subject.next({ text: message });
    };
    MessagingService.prototype.clearMessage = function () {
        this.subject.next();
    };
    MessagingService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return MessagingService;
}());
MessagingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MessagingService);

//# sourceMappingURL=messaging.service.js.map

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500);", ""]);

// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#000\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#0288d1\",\"gray\":\"#555\",\"gray-light\":\"#bdbdbd\"}';\n  display: none; }\n\n/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#000\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#0288d1\",\"gray\":\"#555\",\"gray-light\":\"#bdbdbd\"}';\n  display: none; }\n\nbody::before {\n  content: '';\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #e9ebee;\n  z-index: -1; }\n\n.main-wrapper {\n  margin-left: 230px;\n  padding: 30px 40px 60px;\n  margin-top: 60px;\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden; }\n  .main-wrapper.menu-collapsed {\n    margin-left: 50px; }\n\n.main {\n  height: 100%;\n  min-height: calc(100vh - 202px); }\n\n.footer {\n  padding-top: 20px;\n  padding-bottom: 10px; }\n  .footer .footer-main {\n    display: inline-block; }\n    .footer .footer-main .copyright {\n      color: #000;\n      font-size: 14px; }\n      .footer .footer-main .copyright a {\n        color: #000; }\n    .footer .footer-main .share {\n      padding-left: 5px;\n      margin: 0; }\n      .footer .footer-main .share li {\n        list-style: none;\n        float: left;\n        margin-left: 10px; }\n        .footer .footer-main .share li i {\n          cursor: pointer;\n          transition: all 0.1s ease;\n          color: white;\n          padding: 9px 9px 6px 9px;\n          font-size: 12px;\n          border-radius: 50%;\n          background-color: #000; }\n          .footer .footer-main .share li i.socicon-facebook {\n            background-color: #3b5998; }\n          .footer .footer-main .share li i.socicon-twitter {\n            background-color: #55acee; }\n          .footer .footer-main .share li i.socicon-instagram {\n            background-color: #8a3ab9; }\n          .footer .footer-main .share li i.socicon-pinterest {\n            background-color: #c92228; }\n          .footer .footer-main .share li i:hover {\n            opacity: 0.9; }\n  .footer .created {\n    color: #000;\n    font-size: 14px; }\n    .footer .created i {\n      color: red; }\n\n.az-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 8;\n  background: rgba(0, 0, 0, 0.2);\n  width: 100%;\n  height: 100%;\n  display: none; }\n\n@media (max-width: 544px) {\n  .main-wrapper, .main-wrapper.menu-collapsed {\n    margin-left: 0;\n    padding: 30px 20px 70px; }\n  .main {\n    min-height: calc(100vh - 240px); }\n  .az-overlay {\n    display: block; }\n  .footer .footer-main, .footer .created {\n    float: none; } }\n\n@media (min-width: 544px) and (max-width: 768px) {\n  .main-wrapper, .main-wrapper.menu-collapsed {\n    margin-left: 50px; }\n  .az-overlay {\n    display: block; } }\n\n.container {\n  bottom: 0 !important;\n  position: fixed !important;\n  margin: 4em !important;\n  right: 0 !important;\n  width: 60px; }\n\n.buttons {\n  box-shadow: 0px 5px 11px -2px rgba(0, 0, 0, 0.18), 0px 4px 12px -7px rgba(0, 0, 0, 0.15);\n  border-radius: 50%;\n  display: block;\n  width: 56px;\n  height: 56px;\n  margin: 20px auto 0;\n  position: relative;\n  transition: all .1s ease-out; }\n\n.buttons:active,\n.buttons:focus,\n.buttons:hover {\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28); }\n\n.buttons:not(:last-child) {\n  width: 40px;\n  height: 40px;\n  margin: 20px auto 0;\n  opacity: 0;\n  -webkit-transform: translateY(50px);\n  transform: translateY(50px); }\n\n.container:hover\n.buttons:not(:last-child) {\n  opacity: 1;\n  -webkit-transform: none;\n  transform: none;\n  margin: 15px auto 0; }\n\n/* Unessential styling for sliding up buttons at differnt speeds */\n.buttons:nth-last-child(1) {\n  transition-delay: 25ms;\n  background-size: contain; }\n\n.buttons:not(:last-child):nth-last-child(2) {\n  transition-delay: 20ms;\n  background-size: contain; }\n\n.buttons:not(:last-child):nth-last-child(3) {\n  transition-delay: 40ms;\n  background-size: contain; }\n\n.buttons:not(:last-child):nth-last-child(4) {\n  transition-delay: 60ms;\n  background-size: contain; }\n\n/* Show tooltip content on hover */\n[tooltip] {\n  text-align: center;\n  font-size: 1.5em; }\n\n[tooltip] i {\n  position: absolute;\n  top: 30%;\n  left: 40%; }\n\n[tooltip]:before {\n  bottom: 25%;\n  font-family: arial;\n  font-weight: 600;\n  border-radius: 2px;\n  background: #585858;\n  color: #fff;\n  content: attr(title);\n  font-size: 12px;\n  visibility: hidden;\n  opacity: 0;\n  padding: 5px 7px;\n  margin-right: 12px;\n  position: absolute;\n  right: 100%;\n  white-space: nowrap; }\n\n[tooltip]:hover:before,\n[tooltip]:hover:after {\n  visibility: visible;\n  opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"external-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-label\" style=\"display: none;\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"modal-label\">Default Modal</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n            </div>\n            <div class=\"modal-body\">\n                <iframe [src]=\" url | safe\" width=\"560\" height=\"315\" allowfullscreen></iframe>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Ok</button>\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = "<az-navbar></az-navbar>\n<div class=\"container-fluid\">         \n    <div class=\"row\"> \n        <az-menu></az-menu>\n        <div class=\"main-wrapper\"  [ngClass]=\"{'menu-collapsed': isMenuCollapsed}\"> \n            <div class=\"az-overlay\" *ngIf=\"!isMenuCollapsed\" (click)=\"hideMenu()\"></div>\n\n            <div class=\"main\">\n                <az-breadcrumb></az-breadcrumb>\n                <router-outlet></router-outlet>\n                 \n            </div>     \n            <footer class=\"footer text-center clearfix\">\n                <div class=\"footer-main pull-left  clearfix\">\n                    <div class=\"copyright pull-left\">&copy; <a class=\"font-weight-bold\" href=\"http://themeseason.com\">YTODOSEGURO</a> 2017</div>\n                    <ul class=\"share clearfix pull-left\">\n                        <li><a href=\"https://www.facebook.com/cintanegranet\" target=\"_blank\"><i class=\"socicon socicon-facebook transition\"></i></a></li>\n                        <li><a href=\"https://twitter.com/cintanegranet\" target=\"_blank\"><i class=\"socicon socicon-twitter transition\"></i></a></li>                                   \n                    </ul>\n                </div>\n                \n\n\n                <div class=\"pull-right created\">Creado con<i class=\"fa fa-heart\"></i><a href=\"http://www.cintanegra.net\" target=\"_blank\" title=\"Cintanegra\"><img style=\"width: 16px\" src=\"assets/img/footer/logo-footer.png\"/></a></div>\n         \n            </footer>\n\n            <az-back-top position=\"200\"></az-back-top>\n\n        </div>\n    </div>\n</div>\n<nav class=\"container\"  > \n    \n                  \n                    \n                    <a *ngFor=\"let help of helpLinks\" class=\"buttons\" data-toggle=\"tooltip\" href='{{help.link}}' target=\"_blank\"   data-animation=\"false\"\n                    data-placement=\"left\" title=\"{{help.name}}\"    tooltip=\"\"> <i class=\"fa fa-link\"></i></a>\n\n                    <a class=\"buttons\"  title=\"Abrir Ayuda\" tooltip=\"Ayuda\"><i class=\"fa fa-question\"></i></a>\n\n </nav>\n <external-modal [url]=\"urlTo\">\n\n </external-modal>\n \n"

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankComponent = (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () {
    };
    return BlankComponent;
}());
BlankComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-blank',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(819),
        styles: [__webpack_require__(736)]
    }),
    __metadata("design:paramtypes", [])
], BlankComponent);

//# sourceMappingURL=blank.component.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_component__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blank_blank_component__ = __webpack_require__(633);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_component__["a" /* PagesComponent */],
        children: [
            { path: '', redirectTo: 'panel', pathMatch: 'full' },
            { path: 'panel', component: __WEBPACK_IMPORTED_MODULE_2__blank_blank_component__["a" /* BlankComponent */], data: { breadcrumb: 'Panel' } },
            { path: 'usuarios', loadChildren: 'app/pages/user/user.module#UserModule', data: { breadcrumb: 'Usuarios' } },
            { path: 'sucursales', loadChildren: 'app/pages/branch/branch.module#BranchModule', data: { breadcrumb: 'Sucursales' } },
            { path: 'seguros', loadChildren: 'app/pages/insurance/insurance.module#InsuranceModule', data: { breadcrumb: 'Ramos' } },
            { path: 'cuenta', loadChildren: 'app/pages/account/account.module#AccountModule', data: { breadcrumb: 'Cuenta' } },
            { path: 'deducibles', loadChildren: 'app/pages/deducibles/deducibles.module#DeduciblesModule', data: { breadcrumb: 'Deducibles' } },
            { path: 'aseguradoras', loadChildren: 'app/pages/aseguradoras/aseguradoras.module#AseguradorasModule', data: { breadcrumb: 'Aseguradoras' } },
            { path: 'empresas', loadChildren: 'app/pages/bussiness/bussiness.module#BussinessModule', data: { breadcrumb: 'Empresas' } },
            { path: 'bancos', loadChildren: 'app/pages/banco/banco.module#BancoModule', data: { breadcrumb: 'Bancos' } },
            { path: 'tasas', loadChildren: 'app/pages/tasa/tasa.module#TasaModule', data: { breadcrumb: 'Tasas' } },
            { path: 'cartas', loadChildren: 'app/pages/carta-accidentes/carta-accidente.module#CartaAccidenteModule', data: { breadcrumb: 'Carta Accidente' } },
            { path: 'pagos', loadChildren: 'app/pages/paymentType/payment-type.module#PaymentTypeModule', data: { breadcrumb: 'Tipos de Pago' } },
            { path: 'presupuestos', loadChildren: 'app/pages/quotes/quotes.module#QuotesModule', data: { breadcrumb: 'Cotizaciones' } },
            { path: 'facturas', loadChildren: 'app/pages/billing/billing.module#BillingModule', data: { breadcrumb: 'Facturas' } },
            { path: 'cartera', loadChildren: 'app/pages/wallet/wallet.module#WalletModule', data: { breadcrumb: 'Cartera' } },
            { path: 'emision', loadChildren: 'app/pages/emision/emision.module#EmisionModule', data: { breadcrumb: 'Derechos de Emision' } },
            { path: 'clientes', loadChildren: 'app/pages/cliente/cliente.module#ClienteModule', data: { breadcrumb: 'Clientes' } },
            { path: 'autos', loadChildren: 'app/pages/autos/auto.module#AutoModule', data: { breadcrumb: 'Autos' } },
            { path: 'polizas', loadChildren: 'app/pages/polizas/poliza.module#PolizaModule', data: { breadcrumb: 'Polizas' } },
            { path: 'siniestros', loadChildren: 'app/pages/siniestro/siniestro.module#SiniestroModule', data: { breadcrumb: 'Siniestros' } },
            { path: 'tipoClientes', loadChildren: 'app/pages/tipoCliente/tipoCliente.module#TipoClienteModule', data: { breadcrumb: 'Tipo de Clientes' } },
            { path: 'renovacion', loadChildren: 'app/pages/renovacion/renovacion.module#RenovacionModule', data: { breadcrumb: 'Renovacion' } },
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes);
//# sourceMappingURL=pages.routing.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-search',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(858)
    })
], SearchComponent);

//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackTopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BackTopComponent = (function () {
    function BackTopComponent() {
        this.position = 400;
        this.showSpeed = 500;
        this.moveSpeed = 1000;
    }
    BackTopComponent.prototype.ngAfterViewInit = function () {
        this._onWindowScroll();
    };
    BackTopComponent.prototype._onClick = function () {
        jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
        return false;
    };
    BackTopComponent.prototype._onWindowScroll = function () {
        var el = this._selector.nativeElement;
        window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
    };
    return BackTopComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], BackTopComponent.prototype, "position", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], BackTopComponent.prototype, "showSpeed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], BackTopComponent.prototype, "moveSpeed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('backTop'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], BackTopComponent.prototype, "_selector", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], BackTopComponent.prototype, "_onClick", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BackTopComponent.prototype, "_onWindowScroll", null);
BackTopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-back-top',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__(785)],
        template: "\n    <i #backTop class=\"fa fa-angle-up back-to-top\" title=\"Subir\"></i>\n  "
    })
], BackTopComponent);

var _a;
//# sourceMappingURL=back-top.component.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(_router, _activatedRoute, _appConfig, _title) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._appConfig = _appConfig;
        this._title = _title;
        this.breadcrumbs = [];
        this.config = this._appConfig.config;
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]) {
                _this.breadcrumbs = [];
                _this.parseRoute(_this._router.routerState.snapshot.root);
                _this.title = "";
                _this.breadcrumbs.forEach(function (breadcrumb) {
                    _this.title += ' > ' + breadcrumb.name;
                });
                _this._title.setTitle(_this.config.name + _this.title);
            }
        });
    };
    BreadcrumbComponent.prototype.parseRoute = function (node) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                var urlSegments_1 = [];
                node.pathFromRoot.forEach(function (routerState) {
                    urlSegments_1 = urlSegments_1.concat(routerState.url);
                });
                var url = urlSegments_1.map(function (urlSegment) {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                });
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    };
    return BreadcrumbComponent;
}());
BreadcrumbComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-breadcrumb',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__(786)],
        template: __webpack_require__(872)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */]) === "function" && _d || Object])
], BreadcrumbComponent);

var _a, _b, _c, _d;
// import { Component, ViewEncapsulation } from '@angular/core';
// import { AppState } from "../../../app.state";
// @Component({
//     selector: 'az-breadcrumb',
//     encapsulation: ViewEncapsulation.None,
//     styleUrls: ['./breadcrumb.component.scss'],
//     templateUrl: './breadcrumb.component.html'
// })
// export class BreadcrumbComponent {
//     public activePageTitle:string = '';
//     constructor(private _state:AppState){
//         this._state.subscribe('menu.activeLink', (activeLink) => {
//             if (activeLink) {
//                 this.activePageTitle = activeLink;
//             }
//         });
//     }
//     public ngOnInit():void {
//         if (!this.activePageTitle) {
//             this.activePageTitle = 'dashboard';
//         }
//     }
// } 
//# sourceMappingURL=breadcrumb.component.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_service__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_state__ = __webpack_require__(615);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = (function () {
    function MenuComponent(_elementRef, _router, _activatedRoute, _menuService, _state) {
        var _this = this;
        this._elementRef = _elementRef;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._menuService = _menuService;
        this._state = _state;
        this.isMenuCollapsed = false;
        this.isMenuShouldCollapsed = false;
        this.menuItems = _menuService.getMenuItems();
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
        this._router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]) {
                var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
                if (width <= 768) {
                    _this._state.notifyDataChanged('menu.isCollapsed', true);
                }
                window.scrollTo(0, 0);
            }
        });
    }
    MenuComponent.prototype.ngOnInit = function () {
        if (this._shouldMenuCollapse()) {
            this.menuCollapse();
        }
        this.updateSidebarHeight();
    };
    MenuComponent.prototype.onWindowResize = function () {
        var isMenuShouldCollapsed = this._shouldMenuCollapse();
        if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
            this.menuCollapseStateChange(isMenuShouldCollapsed);
        }
        this.isMenuShouldCollapsed = isMenuShouldCollapsed;
        this.updateSidebarHeight();
    };
    MenuComponent.prototype._shouldMenuCollapse = function () {
        return window.innerWidth <= 768;
    };
    MenuComponent.prototype.menuCollapse = function () {
        this.menuCollapseStateChange(true);
    };
    MenuComponent.prototype.menuCollapseStateChange = function (isCollapsed) {
        this.isMenuCollapsed = isCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    };
    MenuComponent.prototype.menuExpand = function () {
        this.menuCollapseStateChange(false);
    };
    MenuComponent.prototype.updateSidebarHeight = function () {
        this.menuHeight = this._elementRef.nativeElement.children[0].clientHeight - 84;
    };
    MenuComponent.prototype.hoverItem = function ($event) {
        this.showHoverElem = true;
        this.hoverElemHeight = $event.currentTarget.clientHeight;
        this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 60;
    };
    MenuComponent.prototype.collapseMenu = function ($event, item) {
        var link = jQuery($event.currentTarget);
        if (this.isMenuCollapsed) {
            this.isMenuCollapsed = false;
            this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
            if (link.parent().hasClass('sidebar-item-expanded')) {
                return false;
            }
            else {
                link.parent().parent().find('li').removeClass('sidebar-item-expanded');
                link.parent().parent().find('li .sidebar-sublist').slideUp(250);
                link.parent().addClass('sidebar-item-expanded');
                setTimeout(function () {
                    link.next().css('display', 'block');
                }, 250);
                link.next().slideDown(250);
            }
        }
        else {
            if (link.parent().hasClass('sidebar-item-expanded')) {
                link.parent().removeClass('sidebar-item-expanded');
                link.next().slideUp(250);
            }
            else {
                link.parent().parent().find('li').removeClass('sidebar-item-expanded');
                link.parent().parent().find('li .sidebar-sublist').slideUp(250);
                link.parent().addClass('sidebar-item-expanded');
                link.next().slideDown(250);
            }
        }
        return false;
    };
    return MenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuComponent.prototype, "onWindowResize", null);
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-menu',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(873),
        styles: [__webpack_require__(787)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__menu_service__["a" /* MenuService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__menu_service__["a" /* MenuService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__app_state__["a" /* AppState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_state__["a" /* AppState */]) === "function" && _e || Object])
], MenuComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu__ = __webpack_require__(716);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MenuService = (function () {
    function MenuService() {
    }
    MenuService.prototype.getMenuItems = function () {
        return __WEBPACK_IMPORTED_MODULE_1__menu__["a" /* menuItems */];
    };
    return MenuService;
}());
MenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MenuService);

//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menuItems; });
var menuItems = [
    {
        title: 'Configuracion',
        routerLink: 'tables',
        icon: 'fa fa-cog',
        selected: false,
        expanded: false,
        order: 400,
        subMenu: [
            {
                title: 'Configuracion de Sistema',
                routerLink: 'usuarios/configuracion',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Sucursales',
                subMenu: [
                    {
                        title: 'Nueva Sucursal',
                        routerLink: 'sucursales/crear',
                        disabled: true,
                        selected: false,
                        expanded: false
                    },
                    {
                        title: 'Listado de Sucursales',
                        routerLink: 'sucursales/listado',
                        disabled: true,
                        selected: false,
                        expanded: false
                    }
                ]
            },
            {
                title: 'Configuracion de Cuenta',
                routerLink: 'cuenta/ver',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Tiempos de Liquidaciones',
                routerLink: 'usuarios/tiempos-liquidaciones',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Links de ayuda',
                routerLink: 'usuarios/links',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Logs del sistema',
                routerLink: 'usuarios/logs',
                disabled: true,
                selected: false,
                expanded: false
            },
        ]
    },
    {
        title: 'Roles',
        routerLink: 'tables',
        icon: 'fa fa-tasks',
        selected: false,
        expanded: false,
        order: 400,
        subMenu: [
            {
                title: 'Nuevo Rol',
                routerLink: 'usuarios/nuevo_rol',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Listado de Roles',
                routerLink: 'usuarios/roles',
                disabled: true,
                selected: false,
                expanded: false
            }
        ]
    },
    {
        title: 'Usuarios',
        routerLink: 'tables',
        icon: 'fa-user',
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
            {
                title: 'Crear Usuario',
                routerLink: 'usuarios/crear',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Listado de Usuarios',
                routerLink: 'usuarios/listado',
                disabled: true,
                selected: false,
                expanded: false
            }
        ]
    },
    {
        title: 'Empresas',
        routerLink: 'tables',
        icon: 'fa-user',
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
            {
                title: 'Nueva empresa',
                routerLink: 'empresas/crear',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Listado',
                routerLink: 'empresas/listado',
                disabled: true,
                selected: false,
                expanded: false
            },
        ]
    },
    {
        title: 'Ramos',
        routerLink: 'seguros',
        icon: 'fa-building',
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
            {
                title: 'Crear Ramo',
                routerLink: 'seguros/crear',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Listado de Ramos',
                routerLink: 'seguros/listado',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Porcentaje del Ramo',
                routerLink: 'seguros/porcentaje',
                disabled: true,
                selected: false,
                expanded: false
            }
        ]
    },
    {
        title: 'Aseguradoras',
        routerLink: 'seguros',
        icon: 'fa-building',
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
            {
                title: 'Nueva Aseguradora',
                routerLink: 'aseguradoras/crear',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Listado de Aseguradoras',
                routerLink: 'aseguradoras/listado',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Deducibles',
                subMenu: [
                    {
                        title: 'Crear deducible',
                        routerLink: 'deducibles/crear',
                        disabled: true,
                        selected: false,
                        expanded: false
                    },
                    {
                        title: 'Deducibles',
                        routerLink: 'deducibles/listado',
                        disabled: true,
                        selected: false,
                        expanded: false
                    }
                ]
            },
            {
                title: 'Derechos de Emision',
                routerLink: 'emision',
                icon: 'fa-building',
                selected: false,
                expanded: false,
                order: 0,
                subMenu: [
                    {
                        title: 'Listado',
                        routerLink: 'emision/listado',
                        disabled: false,
                        selected: false,
                        expanded: false
                    }
                ]
            },
            {
                title: 'Tipos de Pago',
                routerLink: 'bancos',
                icon: 'fa-building',
                selected: false,
                expanded: false,
                order: 0,
                subMenu: [
                    {
                        title: 'Listado',
                        routerLink: 'pagos/listado',
                        disabled: false,
                        selected: false,
                        expanded: false
                    }
                ]
            },
            {
                title: 'Tasas',
                routerLink: 'tasas',
                icon: 'fa-building',
                selected: false,
                expanded: false,
                order: 0,
                subMenu: [
                    {
                        title: 'Listado de Tasas',
                        routerLink: 'tasas/tasa',
                        disabled: false,
                        selected: false,
                        expanded: false
                    }
                ]
            },
            {
                title: 'Formato Carta Accidente',
                routerLink: 'cartas',
                icon: 'fa-building',
                selected: false,
                expanded: false,
                order: 0,
                subMenu: [
                    {
                        title: 'Listado de Formatos',
                        routerLink: 'cartas/listado',
                        disabled: false,
                        selected: false,
                        expanded: false
                    }
                ]
            },
        ]
    },
    {
        title: 'Recepcion',
        routerLink: 'presupuestos',
        icon: 'fa-building',
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
            {
                title: 'Rutas',
                routerLink: 'polizas/rutas',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Ingresos',
                routerLink: 'polizas/ingresos',
                disabled: true,
                selected: false,
                expanded: false
            },
        ]
    },
    {
        title: 'AMV',
        routerLink: 'presupuestos',
        icon: 'fa-building',
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
            {
                title: 'Planes',
                routerLink: 'empresas/plan',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Alternativas',
                routerLink: 'empresas/alternativas',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Planes Alternativos',
                routerLink: 'empresas/plan-alternativo',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Asociacion de Planes',
                routerLink: 'empresas/asociaciones',
                disabled: true,
                selected: false,
                expanded: false
            },
        ]
    },
    {
        title: 'Clientes',
        routerLink: 'clientes',
        icon: 'fa-building',
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
            {
                title: 'Listado',
                routerLink: 'clientes/listado',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Tipo de Clientes',
                routerLink: 'tipoClientes',
                icon: 'fa-building',
                selected: false,
                expanded: false,
                order: 0,
                subMenu: [
                    {
                        title: 'Listado',
                        routerLink: 'tipoClientes/listado',
                        disabled: true,
                        selected: false,
                        expanded: false
                    },
                ]
            },
            {
                title: 'Empresas Clientes',
                routerLink: 'clientes/empresas',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Dependiente',
                routerLink: 'clientes/dependiente',
                disabled: true,
                selected: false,
                expanded: false
            },
        ]
    },
    {
        title: 'Carros',
        routerLink: 'clientes',
        icon: 'fa-car',
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
            {
                title: 'Listado',
                routerLink: 'autos/listado',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Tipos de Carros',
                routerLink: 'autos/car-types',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Marcas de Carros',
                routerLink: 'autos/car-brands',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Modelos de Carros',
                routerLink: 'autos/car-models',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Colores de Carros',
                routerLink: 'autos/car-colors',
                disabled: true,
                selected: false,
                expanded: false
            },
        ]
    },
    {
        title: 'Bancos',
        routerLink: 'bancos',
        icon: 'fa-building',
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
            {
                title: 'Listado de Bancos',
                routerLink: 'bancos/banco',
                disabled: false,
                selected: false,
                expanded: false
            },
            {
                title: 'Banco Seguro',
                routerLink: 'bancos/banco-seguro',
                disabled: false,
                selected: false,
                expanded: false
            }
        ]
    },
    {
        title: 'Polizas',
        routerLink: 'polizas',
        icon: 'fa-building',
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
            {
                title: 'Listado de Polizas',
                routerLink: 'polizas/polizas',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Tipo de Polizas',
                routerLink: 'polizas/tipo-polizas',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Frecuencias de Pago',
                routerLink: 'polizas/frecuencias',
                disabled: true,
                selected: false,
                expanded: false
            }
        ]
    },
    {
        title: 'Renovaciones',
        routerLink: 'presupuestos',
        icon: 'fa-file-text',
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
            {
                title: 'Causas No Renovacion',
                routerLink: 'renovacion/no-renovacion',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Causas por ramo',
                routerLink: 'renovacion/no-renovacion-ramo',
                disabled: true,
                selected: false,
                expanded: false
            },
        ]
    },
    {
        title: 'Cotizaciones',
        routerLink: 'presupuestos',
        icon: 'fa-building',
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
            {
                title: 'Listado',
                routerLink: 'presupuestos/listado',
                disabled: true,
                selected: false,
                expanded: false
            },
        ]
    },
    {
        title: 'Facturacion',
        routerLink: 'polizas',
        icon: 'fa-building',
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
            {
                title: 'Listado de Facturas',
                routerLink: 'facturas/facturas',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Notas de Credito',
                routerLink: 'facturas/notas-credito',
                disabled: true,
                selected: false,
                expanded: false
            }
        ]
    },
    {
        title: 'Cartera',
        routerLink: 'cartera',
        icon: 'fa-building',
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
            {
                title: 'Carteras',
                routerLink: 'cartera/listado',
                disabled: true,
                selected: false,
                expanded: false
            }
        ]
    },
    // Reportes
    // SUBITEMS
    // Reporte Pólizas
    // Reporte Renovaciones
    // Reporte Facturación
    // Reporte Siniestros
    // Reporte Cartera
    // Reporte Super Compañias
    {
        title: 'Siniestros',
        routerLink: 'siniestros',
        icon: 'fa-building',
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
            {
                title: 'Listado de Siniestros',
                routerLink: 'siniestros/listado',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Listado de Documentacion',
                routerLink: 'siniestros/documentacion',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Documentacion Ramo',
                routerLink: 'siniestros/documentacion-ramo',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Siniestro de Carros',
                routerLink: 'siniestros/carros',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Estados',
                routerLink: 'siniestros/state',
                disabled: true,
                selected: false,
                expanded: false
            },
        ]
    },
    {
        title: 'Reportes',
        routerLink: 'reportes',
        icon: 'fa-bar-chart',
        selected: false,
        expanded: false,
        order: 0,
        subMenu: [
            {
                title: 'Reporte Pólizas',
                routerLink: '',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Reporte Renovaciones',
                routerLink: 'siniestros/medicos',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Reporte Facturación',
                routerLink: '',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Reporte Siniestros',
                routerLink: '',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Reporte Cartera',
                routerLink: '',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Reporte Super Compañias',
                routerLink: '',
                disabled: true,
                selected: false,
                expanded: false
            },
        ]
    },
];
var menuExamples = [
    {
        title: 'Charts',
        routerLink: 'charts',
        icon: 'fa-bar-chart',
        selected: false,
        expanded: false,
        order: 200,
        subMenu: [
            {
                title: 'Ng2-Charts',
                routerLink: 'charts/ng2charts',
            },
        ]
    },
    {
        title: 'UI Features',
        routerLink: 'ui',
        icon: 'fa-laptop',
        selected: false,
        expanded: false,
        order: 300,
        subMenu: [
            {
                title: 'Buttons',
                routerLink: 'ui/buttons'
            },
            {
                title: 'Cards',
                routerLink: 'ui/cards'
            },
            {
                title: 'Components',
                routerLink: 'ui/components'
            },
            {
                title: 'Icons',
                routerLink: 'ui/icons'
            },
            {
                title: 'Grid',
                routerLink: 'ui/grid'
            },
            {
                title: 'List Group',
                routerLink: 'ui/list-group'
            },
            {
                title: 'Media Objects',
                routerLink: 'ui/media-objects'
            },
            {
                title: 'Tabs & Accordions',
                routerLink: 'ui/tabs-accordions'
            },
            {
                title: 'Typography',
                routerLink: 'ui/typography'
            }
        ]
    },
    {
        title: 'Mail',
        routerLink: 'mail/mail-list/inbox',
        icon: 'fa-envelope-o',
        selected: false,
        expanded: false,
        order: 330
    },
    {
        title: 'Calendar',
        routerLink: 'calendar',
        icon: 'fa-calendar',
        selected: false,
        expanded: false,
        order: 350
    },
    {
        title: 'Form Elements',
        routerLink: 'form-elements',
        icon: 'fa-pencil-square-o',
        selected: false,
        expanded: false,
        order: 400,
        subMenu: [
            {
                title: 'Form Inputs',
                routerLink: 'form-elements/inputs'
            },
            {
                title: 'Form Layouts',
                routerLink: 'form-elements/layouts'
            },
            {
                title: 'Form Validations',
                routerLink: 'form-elements/validations'
            },
            {
                title: 'Form Wizard',
                routerLink: 'form-elements/wizard'
            }
        ]
    },
    {
        title: 'Tables',
        routerLink: 'tables',
        icon: 'fa-table',
        selected: false,
        expanded: false,
        order: 500,
        subMenu: [
            {
                title: 'Basic Tables',
                routerLink: 'tables/basic-tables'
            },
            {
                title: 'Dynamic Tables',
                routerLink: 'tables/dynamic-tables'
            }
        ]
    },
    {
        title: 'Editors',
        routerLink: 'editors',
        icon: 'fa-pencil',
        selected: false,
        expanded: false,
        order: 550,
        subMenu: [
            {
                title: 'Froala Editor',
                routerLink: 'editors/froala-editor'
            },
            {
                title: 'Ckeditor',
                routerLink: 'editors/ckeditor'
            }
        ]
    },
    {
        title: 'Maps',
        routerLink: 'maps',
        icon: 'fa-globe',
        selected: false,
        expanded: false,
        order: 600,
        subMenu: [
            {
                title: 'Vector Maps',
                routerLink: 'maps/vectormaps'
            },
            {
                title: 'Google Maps',
                routerLink: 'maps/googlemaps'
            },
            {
                title: 'Leaflet Maps',
                routerLink: 'maps/leafletmaps'
            }
        ]
    },
    {
        title: 'Pages',
        routerLink: ' ',
        icon: 'fa-file-o',
        selected: false,
        expanded: false,
        order: 650,
        subMenu: [
            {
                title: 'Login',
                routerLink: '/login'
            },
            {
                title: 'Register',
                routerLink: '/register'
            },
            {
                title: 'Blank Page',
                routerLink: 'blank'
            },
            {
                title: 'Error Page',
                routerLink: '/pagenotfound'
            }
        ]
    },
    {
        title: 'Menu Level 1',
        icon: 'fa-ellipsis-h',
        selected: false,
        expanded: false,
        order: 700,
        subMenu: [
            {
                title: 'Menu Level 1.1',
                url: '#',
                disabled: true,
                selected: false,
                expanded: false
            },
            {
                title: 'Menu Level 1.2',
                url: '#',
                subMenu: [{
                        title: 'Menu Level 1.2.1',
                        url: '#',
                        disabled: true,
                        selected: false,
                        expanded: false
                    }]
            }
        ]
    },
    {
        title: 'External Link',
        url: 'http://themeseason.com',
        icon: 'fa-external-link',
        selected: false,
        expanded: false,
        order: 800,
        target: '_blank'
    }
];
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__messages_service__ = __webpack_require__(718);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = (function () {
    function MessagesComponent(_messagesService) {
        this._messagesService = _messagesService;
        this.messages = _messagesService.getMessages();
        this.notifications = _messagesService.getNotifications();
        this.tasks = _messagesService.getTasks();
    }
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'az-messages',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__(788)],
        template: __webpack_require__(874),
        providers: [__WEBPACK_IMPORTED_MODULE_1__messages_service__["a" /* MessagesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__messages_service__["a" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__messages_service__["a" /* MessagesService */]) === "function" && _a || Object])
], MessagesComponent);

var _a;
//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessagesService = (function () {
    function MessagesService() {
        this._messages = [
            {
                name: 'ashley',
                text: 'After you get up and running, you can place Font Awesome icons just about...',
                time: '1 min ago'
            },
            {
                name: 'michael',
                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
                time: '2 hrs ago'
            },
            {
                name: 'julia',
                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
                time: '10 hrs ago'
            },
            {
                name: 'bruno',
                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
                time: '1 day ago'
            },
            {
                name: 'tereza',
                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
                time: '1 day ago'
            },
            {
                name: 'adam',
                text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
                time: '2 days ago'
            },
            {
                name: 'michael',
                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
                time: '1 week ago'
            }
        ];
        this._notifications = [
            {
                name: 'michael',
                text: 'Michael posted a new article.',
                time: '1 min ago'
            },
            {
                name: 'adam',
                text: 'Adam changed his contact information.',
                time: '2 hrs ago'
            },
            {
                image: '../assets/img/shopping-cart.svg',
                text: 'New orders received.',
                time: '5 hrs ago'
            },
            {
                name: 'ashley',
                text: 'Ashley replied to your comment.',
                time: '1 day ago'
            },
            {
                name: 'tereza',
                text: 'Today is Tereza\'s birthday.',
                time: '2 days ago'
            },
            {
                image: '../assets/img/comments.svg',
                text: 'New comments on your post.',
                time: '3 days ago'
            },
            {
                name: 'bruno',
                text: 'Bruno invited you to join the event.',
                time: '1 week ago'
            }
        ];
        this._tasks = [
            {
                text: 'Design some buttons',
                value: '20%',
                class: 'info'
            },
            {
                text: 'Create a nice theme',
                value: '40%',
                class: 'danger'
            },
            {
                text: 'Some task I need to do',
                value: '60%',
                class: 'success'
            },
            {
                text: 'Make beautiful transitions',
                value: '80%',
                class: 'warning'
            },
            {
                text: 'Another task I need to do',
                value: '15%',
                class: 'info'
            },
            {
                text: 'Debug and find last bugs',
                value: '55%',
                class: 'danger'
            }
        ];
    }
    MessagesService.prototype.getMessages = function () {
        return this._messages;
    };
    MessagesService.prototype.getNotifications = function () {
        return this._notifications;
    };
    MessagesService.prototype.getTasks = function () {
        return this._tasks;
    };
    return MessagesService;
}());
MessagesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MessagesService);

//# sourceMappingURL=messages.service.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_session_service__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_state__ = __webpack_require__(615);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(_state, user, router) {
        var _this = this;
        this._state = _state;
        this.user = user;
        this.router = router;
        this.isMenuCollapsed = false;
        this._state.subscribe('menu.isCollapsed', function (isCollapsed) {
            _this.isMenuCollapsed = isCollapsed;
        });
        this.userInfo = user.getUser();
        console.log(this.userInfo);
    }
    NavbarComponent.prototype.closeSession = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    NavbarComponent.prototype.toggleMenu = function () {
        this.isMenuCollapsed = !this.isMenuCollapsed;
        this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'az-navbar',
        encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(875),
        styles: [__webpack_require__(789)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__providers_session_service__["a" /* UserSessionService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__app_state__["a" /* AppState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_state__["a" /* AppState */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_session_service__["a" /* UserSessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_session_service__["a" /* UserSessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#000\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#0288d1\",\"gray\":\"#555\",\"gray-light\":\"#bdbdbd\"}';\n  display: none; }\n\n.back-to-top {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 9999;\n  display: none;\n  text-decoration: none;\n  right: 40px;\n  bottom: 40px !important;\n  font-size: 30px;\n  text-align: center;\n  opacity: 0.4;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 50%;\n  line-height: 34px; }\n  .back-to-top:hover {\n    opacity: 0.8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#000\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#0288d1\",\"gray\":\"#555\",\"gray-light\":\"#bdbdbd\"}';\n  display: none; }\n\n.here {\n  padding-right: 5px; }\n\n.breadcrumb {\n  padding: 0;\n  background: transparent;\n  color: #000;\n  font-size: 14px;\n  margin-bottom: 30px; }\n\n.breadcrumb-item + .breadcrumb-item::before {\n  color: #000;\n  content: \">\";\n  font-size: 16px;\n  margin-top: -2px;\n  padding-right: 0.3rem; }\n\n.breadcrumb-item {\n  float: left; }\n  .breadcrumb-item.active {\n    color: #000;\n    font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#000\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#0288d1\",\"gray\":\"#555\",\"gray-light\":\"#bdbdbd\"}';\n  display: none; }\n\n/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#000\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#0288d1\",\"gray\":\"#555\",\"gray-light\":\"#bdbdbd\"}';\n  display: none; }\n\n.sidebar {\n  background: #0288d1;\n  height: 100%;\n  min-height: 100%;\n  position: fixed;\n  width: 230px;\n  overflow: hidden;\n  display: block;\n  z-index: 9;\n  margin-top: 60px; }\n  .sidebar.menu-collapsed {\n    width: 50px; }\n    .sidebar.menu-collapsed a.sidebar-list-link b {\n      display: none; }\n    .sidebar.menu-collapsed .sidebar-sublist {\n      position: absolute;\n      top: -1px;\n      left: 52px;\n      width: 0;\n      display: block;\n      overflow: hidden; }\n\n.sidebar-list-item {\n  display: block;\n  position: relative;\n  float: none;\n  padding: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1); }\n\na.sidebar-list-link {\n  display: block;\n  height: 42px;\n  padding-left: 18px !important;\n  padding-top: 0 !important;\n  text-shadow: none;\n  font-size: 13px;\n  letter-spacing: 0.02em;\n  text-decoration: none;\n  color: #fff;\n  line-height: 42px;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.2s ease; }\n  a.sidebar-list-link i {\n    margin-right: 16px;\n    width: 16px;\n    display: inline-block; }\n  a.sidebar-list-link b {\n    display: block;\n    opacity: 1;\n    width: 14px;\n    height: 14px;\n    line-height: 14px;\n    text-shadow: none;\n    font-size: 18px;\n    position: absolute;\n    right: 10px;\n    top: 14px;\n    padding: 0;\n    text-align: center;\n    color: #fff;\n    transition: -webkit-transform 0.2s linear;\n    transition: transform 0.2s linear;\n    transition: transform 0.2s linear, -webkit-transform 0.2s linear; }\n  a.sidebar-list-link:hover {\n    background-color: #000; }\n\n.sidebar-list-item.sidebar-item-expanded > .sidebar-list-link b,\n.sidebar-sublist-item.sidebar-item-expanded > .sidebar-list-link b {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\na.sssss > b {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sidebar-sublist {\n  display: none;\n  padding: 0;\n  list-style: none;\n  position: relative; }\n  .sidebar-sublist li {\n    display: block;\n    float: none;\n    padding: 0;\n    border-bottom: none;\n    position: relative;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.7); }\n    .sidebar-sublist li:last-child {\n      border-bottom: none; }\n    .sidebar-sublist li a {\n      display: block;\n      text-shadow: none;\n      font-size: 13px;\n      text-decoration: none;\n      color: #fff;\n      padding-left: 50px !important;\n      height: 42px;\n      line-height: 42px; }\n      .sidebar-sublist li a:before {\n        font-family: FontAwesome;\n        content: \"\\F1DB\";\n        margin-right: 10px;\n        font-size: 10px; }\n      .sidebar-sublist li a:hover {\n        background-color: #000; }\n  .sidebar-sublist .subitem-submenu-list li {\n    border-top: 1px solid rgba(0, 0, 0, 0.7); }\n    .sidebar-sublist .subitem-submenu-list li a {\n      padding-left: 65px !important; }\n\n.sidebar-item-expanded > ul.sidebar-sublist {\n  background-color: #607d8b; }\n\n.subitem-submenu-link .fa {\n  top: 14px; }\n\n.sidebar-hover-elem {\n  width: 4px;\n  background: #607d8b;\n  position: absolute;\n  top: -150px;\n  left: 226px;\n  transition: all 0.2s ease;\n  transition-property: top, height;\n  height: 36px;\n  display: block; }\n\n.sidebar.menu-collapsed .sidebar-hover-elem {\n  left: 46px; }\n\n.active-link {\n  background-color: #607d8b; }\n\n@media (max-width: 544px) {\n  .sidebar.menu-collapsed {\n    width: 0; }\n  .sidebar-hover-elem, .sidebar-select-elem {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#000\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#0288d1\",\"gray\":\"#555\",\"gray-light\":\"#bdbdbd\"}';\n  display: none; }\n\n/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#000\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#0288d1\",\"gray\":\"#555\",\"gray-light\":\"#bdbdbd\"}';\n  display: none; }\n\n@-webkit-keyframes pulsate {\n  30% {\n    -webkit-transform: scale(0.1, 0.1);\n    opacity: 0.0; }\n  35% {\n    opacity: 1.0; }\n  40% {\n    -webkit-transform: scale(1.2, 1.2);\n    opacity: 0.0; } }\n\n@keyframes pulsate {\n  30% {\n    -webkit-transform: scale(0.1, 0.1);\n            transform: scale(0.1, 0.1);\n    opacity: 0.0; }\n  35% {\n    opacity: 1.0; }\n  40% {\n    -webkit-transform: scale(1.2, 1.2);\n            transform: scale(1.2, 1.2);\n    opacity: 0.0; } }\n\n.notifications {\n  margin-right: 10px;\n  margin-top: 10px;\n  list-style: none;\n  padding-left: 0;\n  font-size: 14px; }\n  .notifications li {\n    display: inline-block;\n    margin-right: 30px; }\n    .notifications li a {\n      color: #000; }\n      .notifications li a:hover {\n        text-decoration: none; }\n      .notifications li a::after {\n        display: none; }\n      .notifications li a.dropdown-toggle span {\n        display: inline-block;\n        min-width: 10px;\n        padding: 2px 4px 2px 4px;\n        color: #fff;\n        vertical-align: baseline;\n        white-space: nowrap;\n        text-align: center;\n        border-radius: 13px;\n        text-shadow: none;\n        line-height: 11px;\n        position: absolute;\n        top: -5px;\n        right: -14px;\n        font-size: 11px; }\n      .notifications li a.message span {\n        background-color: #0099cc; }\n      .notifications li a.notification span {\n        background-color: #e63e4d; }\n      .notifications li a.task span {\n        background-color: #00a65a; }\n      .notifications li a .pulsate {\n        border-radius: 100px;\n        height: 40px;\n        width: 40px;\n        position: absolute;\n        top: -18px;\n        right: -27px;\n        -webkit-animation: pulsate 8s ease-out;\n        animation: pulsate 8s ease-out;\n        -webkit-animation-iteration-count: infinite;\n        animation-iteration-count: infinite;\n        opacity: 0.0; }\n      .notifications li a.message .pulsate {\n        border: 1px solid #0099cc; }\n      .notifications li a.notification .pulsate {\n        border: 1px solid #e63e4d; }\n      .notifications li a.task .pulsate {\n        border: 1px solid #00a65a; }\n\n.top-dropdown-menu {\n  width: 316px;\n  left: auto;\n  right: -30px;\n  top: 38px;\n  padding-top: 0;\n  padding-bottom: 0;\n  border-radius: 0; }\n  .top-dropdown-menu i.dropdown-arr {\n    position: absolute;\n    top: -12px;\n    right: 30px;\n    display: block;\n    width: 0;\n    height: 0;\n    border: 6px solid transparent;\n    border-bottom-color: #fff; }\n  .top-dropdown-menu:before {\n    content: none; }\n  .top-dropdown-menu .header {\n    padding: 10px 12px;\n    font-size: 12px;\n    background-color: #000; }\n    .top-dropdown-menu .header span {\n      float: left;\n      color: rgba(255, 255, 255, 0.8);\n      letter-spacing: 0.03em; }\n    .top-dropdown-menu .header a {\n      float: right;\n      margin-left: 12px;\n      text-decoration: none;\n      color: #607d8b; }\n      .top-dropdown-menu .header a:hover {\n        color: rgba(255, 255, 255, 0.8); }\n  .top-dropdown-menu .list {\n    max-height: 250px;\n    overflow: scroll;\n    overflow-x: hidden; }\n    .top-dropdown-menu .list a {\n      float: left;\n      width: 100%;\n      display: block;\n      padding: 10px;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n      .top-dropdown-menu .list a:hover {\n        background: #f5f5f5; }\n      .top-dropdown-menu .list a h3 {\n        font-size: 12px;\n        padding: 0;\n        margin: 0 0 4px 0;\n        color: #666666; }\n    .top-dropdown-menu .list .progress {\n      margin-bottom: 2px; }\n    .top-dropdown-menu .list span {\n      font-size: 10px; }\n    .top-dropdown-menu .list .list-content {\n      float: right;\n      width: 235px; }\n    .top-dropdown-menu .list img {\n      float: left;\n      width: 45px;\n      margin-right: 10px;\n      border-radius: 50%; }\n    .top-dropdown-menu .list p {\n      color: #7d7d7d;\n      font-size: 11px;\n      margin: 0; }\n  .top-dropdown-menu .footer {\n    padding: 10px 12px;\n    border-top: 1px solid #ccc;\n    font-size: 12px;\n    text-align: center; }\n    .top-dropdown-menu .footer a {\n      color: #000;\n      font-weight: bold; }\n      .top-dropdown-menu .footer a:hover {\n        opacity: 0.8;\n        color: white; }\n\n@media (max-width: 543px) {\n  .message-menu .top-dropdown-menu.dropdown-menu {\n    right: -188px; }\n    .message-menu .top-dropdown-menu.dropdown-menu i.dropdown-arr {\n      right: 188px; }\n  .notification-menu .top-dropdown-menu.dropdown-menu {\n    right: -141px; }\n    .notification-menu .top-dropdown-menu.dropdown-menu i.dropdown-arr {\n      right: 141px; }\n  .task-menu .top-dropdown-menu.dropdown-menu {\n    right: -94px; }\n    .task-menu .top-dropdown-menu.dropdown-menu i.dropdown-arr {\n      right: 94px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#000\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#0288d1\",\"gray\":\"#555\",\"gray-light\":\"#bdbdbd\"}';\n  display: none; }\n\n/**** Colors (recommended use HEX colors) ****/\n/**** App roots ****/\n/**** General ****/\n/**** Navbar ****/\n/**** Sidebar ****/\n/**** Progress ****/\n/**** Fonts ****/\n/**** Social icons ****/\nbody::after {\n  content: '{\"main-color\":\"#000\",\"default-color\":\"#fff\",\"dark-color\":\"#000\",\"primary-color\":\"#024a88\",\"success-color\":\"#2d922d\",\"warning-color\":\"#f79a17\",\"danger-color\":\"#bf1725\",\"info-color\":\"#248dad\",\"sidebar-bg-color\":\"#0288d1\",\"gray\":\"#555\",\"gray-light\":\"#bdbdbd\"}';\n  display: none; }\n\n.nav.az-navbar {\n  height: 60px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #fff; }\n  .nav.az-navbar .navbar-brand {\n    width: 205px;\n    padding-top: 0;\n    font-size: 0;\n    margin-left: 10px; }\n\n#lines {\n  border-bottom: 7px double;\n  color: #000 !important;\n  border-top: 2px solid;\n  content: \"\";\n  height: 3px;\n  width: 20px;\n  box-sizing: content-box;\n  cursor: pointer; }\n  #lines:hover {\n    opacity: 0.8; }\n\n.app-search {\n  position: relative;\n  margin-left: 20px; }\n  .app-search a {\n    position: absolute;\n    top: 3px;\n    right: 14px;\n    font-size: 16px;\n    color: rgba(0, 0, 0, 0.3); }\n  .app-search .form-control {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    font-size: 13px;\n    letter-spacing: 0.03em;\n    height: 30px;\n    color: #000;\n    padding: 7px 40px 7px 20px;\n    background: rgba(0, 0, 0, 0.05);\n    box-shadow: none;\n    border-radius: 30px;\n    width: 190px; }\n\n.right-section {\n  position: absolute;\n  right: 10px;\n  top: 10px; }\n\n.user-menu {\n  font-size: 14px; }\n  .user-menu .dropdown-toggle::after {\n    display: none; }\n  .user-menu .dropdown-menu {\n    right: 0;\n    left: auto;\n    margin-top: 10px;\n    padding-top: 0;\n    overflow: hidden;\n    border-radius: 0;\n    font-size: 14px;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); }\n    .user-menu .dropdown-menu a {\n      color: #000; }\n      .user-menu .dropdown-menu a:hover {\n        color: white;\n        background-color: #000; }\n      .user-menu .dropdown-menu a i {\n        margin-right: 8px; }\n\n.user-link {\n  margin-right: 6px; }\n  .user-link span {\n    color: #000;\n    margin-left: 7px;\n    letter-spacing: 0.02em; }\n  .user-link img {\n    width: 40px;\n    border-radius: 50%; }\n  .user-link:hover, .user-link:focus {\n    text-decoration: none; }\n\n.user-info {\n  background-color: #000;\n  padding: 8px;\n  text-align: center;\n  width: 240px;\n  margin-bottom: 5px; }\n  .user-info img {\n    width: 100px;\n    margin-top: 5px;\n    border-radius: 50%; }\n  .user-info p {\n    color: #ebebeb;\n    margin-top: 10px; }\n  .user-info small {\n    display: block; }\n\n@media (max-width: 767px) {\n  .nav.az-navbar .navbar-brand {\n    width: auto; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 858:
/***/ (function(module, exports) {

module.exports = "<h4>Resultados de la Búsqueda...</h4>"

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

module.exports = "<div class=\"clearfix\">\n   <span class=\"text-uppercase pull-left here\"></span>\n    <ol class=\"breadcrumb\">        \n        <li *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\" class=\"breadcrumb-item text-uppercase\">\n            <a  [hidden]=\"i == (breadcrumbs.length - 1)\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.name}}</a>          \n            <span [hidden]=\"i != (breadcrumbs.length - 1)\"><b>{{breadcrumb.name}}</b></span>\n        </li>       \n    </ol>\n</div>"

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar \" [ngClass]=\"{'menu-collapsed': isMenuCollapsed}\" (mouseleave)=\"hoverElemTop=-200\">\r\n    <ul class=\"nav nav-sidebar flex-column\" slim-scroll [slimScrollOptions]=\"{height: menuHeight}\">\r\n        <li *ngFor=\"let item of menuItems\" class=\"sidebar-list-item\">           \r\n            \r\n            <a *ngIf=\"!item.routerLink && !item.subMenu\" [attr.href]=\"item.url || ''\" [attr.target]=\"item.target || ''\" (mouseenter)=\"hoverItem($event, item)\"  class=\"sidebar-list-link\">\r\n                <i class=\"fa {{ item.icon }}\"></i><span>{{ item.title }}</span>\r\n            </a>\r\n\r\n            <a *ngIf=\"item.routerLink && !item.subMenu\" [routerLink]=\"[item.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"collapseMenu($event, item)\" (mouseenter)=\"hoverItem($event, item)\" class=\"sidebar-list-link\">\r\n                <i class=\"fa {{ item.icon }}\"></i><span>{{ item.title }}</span>\r\n            </a>\r\n       \r\n            <a *ngIf=\"item.subMenu\" [attr.href]=\"''\" (click)=\"collapseMenu($event, item)\" (mouseenter)=\"hoverItem($event, item)\" class=\"sidebar-list-link\">\r\n                <i class=\"fa {{ item.icon }}\"></i><span>{{ item.title }}</span>\r\n                <b class=\"fa fa-angle-down\"></b>\r\n            </a>\r\n\r\n            <ul *ngIf=\"item.subMenu\" class=\"sidebar-sublist\">\r\n                <li *ngFor=\"let subitem of item.subMenu\" class=\"sidebar-sublist-item\">            \r\n\r\n                    <a *ngIf=\"subitem.subMenu\" [attr.href]=\"''\" (click)=\"collapseMenu($event, item)\" (mouseenter)=\"hoverItem($event, item)\" class=\"sidebar-list-link subitem-submenu-link\">\r\n                        <span>{{ subitem.title }}</span>\r\n                        <b class=\"fa fa-angle-down\"></b>\r\n                    </a>\r\n\r\n                    <ul *ngIf=\"subitem.subMenu\" class=\"sidebar-sublist subitem-submenu-list\">\r\n                        <li *ngFor=\"let subSubitem of subitem.subMenu\" (mouseenter)=\"hoverItem($event, item)\">\r\n                        <a *ngIf=\"!item.routerLink\" (mouseenter)=\"hoverItem($event, item)\" [attr.href]=\"subSubitem.url || ''\" [attr.target]=\"subSubitem.target || ''\">\r\n                            {{ subSubitem.title }}</a>\r\n                        <a *ngIf=\"item.routerLink\" (mouseenter)=\"hoverItem($event, item)\" [attr.target]=\"subSubitem.target || ''\" [routerLink]=\"[subSubitem.routerLink]\">\r\n                            {{ subSubitem.title }}</a>\r\n                        </li>\r\n                    </ul>\r\n\r\n                    <a *ngIf=\"item.routerLink && !subitem.subMenu\" [routerLink]=\"[subitem.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"collapseMenu($event, item)\" (mouseenter)=\"hoverItem($event, item)\">\r\n                        {{ subitem.title}}\r\n                    </a>\r\n\r\n                    <a *ngIf=\"!item.routerLink && !subitem.subMenu\" [attr.href]=\"subitem.url || ''\" [attr.target]=\"subitem.target || ''\" (mouseenter)=\"hoverItem($event, item)\">\r\n                        {{ subitem.title}}\r\n                    </a>\r\n\r\n                </li>\r\n            </ul>\r\n\r\n        </li>\r\n    </ul>\r\n    <div class=\"sidebar-hover-elem\" [ngStyle]=\"{top: hoverElemTop + 'px', height: hoverElemHeight + 'px'}\" [ngClass]=\"{'show-hover-elem': showHoverElem }\"></div>\r\n</div>"

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = "<ul class=\"notifications\"> \n \n    <li class=\"dropdown message-menu\">\n        <a href class=\"dropdown-toggle message\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n            <i class=\"fa fa-envelope-o\"></i>\n            <span>7</span>\n            <div class=\"pulsate\"></div>\n        </a>\n        <div class=\"top-dropdown-menu dropdown-menu\">\n            <i class=\"dropdown-arr\"></i>\n            <div class=\"header clearfix\">\n                <span>Messages</span>\n                <a href class=\"transition\">Mark All as Read</a>\n                <a href class=\"transition\">Settings</a>\n            </div>\n            <div class=\"list\" slim-scroll [slimScrollOptions]=\"{height: 250}\">\n                <a *ngFor=\"let message of messages\" href class=\"transition\">\n                    <img src=\"{{ ( message.image || (message.name | profilePicture)) }}\">                    \n                    <div class=\"list-content\">\n                        <h3>{{message.name}} <span class=\"pull-right\"><i class=\"fa fa-clock-o\"></i> {{message.time}}</span></h3>\n                        <p>{{message.text}}</p>\n                    </div>\n                </a>\n            </div> \n            <div class=\"footer\">\n                <a href=\"#\" class=\"transition\">View all messages</a>\n            </div> \n        </div>\n    </li>\n\n    <li class=\"dropdown notification-menu\">\n        <a href class=\"dropdown-toggle notification\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n            <i class=\"fa fa-bell-o\"></i>\n            <span>5</span>\n            <div class=\"pulsate\"></div>\n        </a>\n\n        <div class=\"top-dropdown-menu dropdown-menu\">\n            <i class=\"dropdown-arr\"></i>\n            <div class=\"header clearfix\">\n                <span>Notificaciones</span>                \n            </div>\n            <div class=\"list\" slim-scroll [slimScrollOptions]=\"{height: 250}\"> \n                <a *ngFor=\"let notification of notifications\" href class=\"transition\">\n                    <img src=\"{{ ( notification.image || (notification.name | profilePicture)) }}\">                    \n                    <div class=\"list-content\">\n                        <h3>{{notification.name}} <span class=\"pull-right\"> {{notification.time}}</span></h3>\n                        <p>{{notification.text}}</p>\n                    </div>\n                </a>\n            </div> \n            <div class=\"footer\">\n                <a href=\"#\" class=\"transition\">Ver Todas las notificaciones</a>\n            </div> \n        </div> \n    </li>\n\n    <li class=\"dropdown task-menu\">\n        <a href class=\"dropdown-toggle task\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n            <i class=\"fa fa-tasks\"></i>\n            <span>6</span>\n            <div class=\"pulsate\"></div>\n        </a>\n        <div class=\"top-dropdown-menu dropdown-menu\">\n            <i class=\"dropdown-arr\"></i>\n            <div class=\"header clearfix\">\n                <span>Tasks</span>\n                <a href class=\"transition\">Mark All as Read</a>\n                <a href class=\"transition\">Settings</a>\n            </div>\n            <div class=\"list\" slim-scroll [slimScrollOptions]=\"{height: 250}\">\n                <a *ngFor=\"let task of tasks\" href class=\"transition\">\n                    <h3>{{task.text}} <span class=\"pull-right\">{{task.value}}</span></h3>\n                    <div class=\"progress progress-sm\">\n                        <div class=\"progress-bar bg-{{task.class}}\" role=\"progressbar\" [style.width]=\"task.value\"  aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                    </div>\n                </a>\n            </div>\n            <div class=\"footer\">\n                <a href=\"#\" class=\"transition\">View all tasks</a>\n            </div>     \n        </div>\n    </li>\n</ul>"

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav az-navbar fixed-top\">\n    <a class=\"navbar-brand\" routerLink=\"/pages/panel\">\n        <img src=\"assets/img/logo/az_logo_full.png\" alt=\"\" class=\"hidden-sm-down\"> \n        <img src=\"assets/img/logo/az_logo.png\" alt=\"\" class=\"hidden-md-up\"> \n    </a>\n    <div id=\"lines\" class=\"transition\" (click)=\"toggleMenu()\"></div>\n    \n    <form role=\"search\" class=\"app-search hidden-sm-down\">\n        <input type=\"text\" placeholder=\"Buscar...\" class=\"form-control\">\n        <a href=\"javascript:void(0)\"><i class=\"fa fa-search\"></i></a>\n    </form>\n\n    <ul class=\"nav right-section\">\n        <li class=\"nav-item\">\n           <az-messages></az-messages>\n        </li>\n        <li class=\"nav-item\">\n          <div class=\"dropdown float-right user-menu\">\n              <a class=\"dropdown-toggle user-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-expanded=\"false\">\n                    <img *ngIf=\"userInfo.userImg == undefined || userInfo.userImg == '' \" src=\"assets/img/profile/holder.png\" alt=\"\" class=\"img-circle user-img\">                    \n                  <img  *ngIf=\"userInfo.userImg != undefined || userInfo.userImg != '' \" src=\"http://localhost:3001/uploads/user/{{userInfo.userImg}}\" alt=\"\" class=\"img-circle user-img\">\n                  <span class=\"hidden-md-down\">{{userInfo.name}} {{userInfo.lastName}}</span>\n              </a>\n\n              <ul class=\"dropdown-menu\">\n                  <li class=\"user-info\">\n                      <img *ngIf=\"userInfo.userImg == undefined  || userInfo.userImg == ''\" src=\"assets/img/profile/holder.png\" alt=\"\" class=\"img-circle user-img\">                    \n                      <img *ngIf=\"userInfo.userImg != undefined || userInfo.userImg != ''\"  src=\"http://localhost:3001/uploads/user/{{userInfo.userImg}}\" alt=\"\" class=\"img-circle user-img\">                    \n                      <p>\n                          {{userInfo.name}} {{userInfo.lastName}}\n                          <small>Cedula : {{userInfo.cedula}}</small>\n                      </p>\n                  </li>\n                  <a class=\"dropdown-item\" routerLink=\"cuenta/ver\"><i class=\"fa fa-user\"></i>Cuenta</a>\n\n       \n                  <a class=\"dropdown-item\" routerLink=\"/\"><i class=\"fa fa-lock\"></i>Bloquear Sistema</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a class=\"dropdown-item\" (click)=\"closeSession()\"><i class=\"fa fa-power-off\"></i>Cerrar Sesión</a>\n              </ul>\n          </div>\n        </li>\n    </ul>\n</nav>"

/***/ })

});
//# sourceMappingURL=21.chunk.js.map