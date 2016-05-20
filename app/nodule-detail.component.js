System.register(['angular2/core', 'angular2/router', './nodule', './nodule.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, nodule_1, nodule_service_1;
    var NoduleDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (nodule_1_1) {
                nodule_1 = nodule_1_1;
            },
            function (nodule_service_1_1) {
                nodule_service_1 = nodule_service_1_1;
            }],
        execute: function() {
            NoduleDetailComponent = (function () {
                function NoduleDetailComponent(noduleService, routeParams) {
                    this.noduleService = noduleService;
                    this.routeParams = routeParams;
                }
                NoduleDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this.routeParams.get('id');
                    this.noduleService.getNodule(id)
                        .then(function (nodule) { return _this.nodule = nodule; });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', nodule_1.Nodule)
                ], NoduleDetailComponent.prototype, "nodule", void 0);
                NoduleDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-nodule-detail',
                        templateUrl: 'app/nodule.detail.html'
                    }), 
                    __metadata('design:paramtypes', [nodule_service_1.NoduleService, router_1.RouteParams])
                ], NoduleDetailComponent);
                return NoduleDetailComponent;
            }());
            exports_1("NoduleDetailComponent", NoduleDetailComponent);
        }
    }
});
//# sourceMappingURL=nodule-detail.component.js.map