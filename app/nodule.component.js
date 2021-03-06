System.register(['angular2/core', 'angular2/router', './nodule-detail.component', './nodule.service'], function(exports_1, context_1) {
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
    var core_1, router_1, nodule_detail_component_1, nodule_service_1;
    var NodulesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (nodule_detail_component_1_1) {
                nodule_detail_component_1 = nodule_detail_component_1_1;
            },
            function (nodule_service_1_1) {
                nodule_service_1 = nodule_service_1_1;
            }],
        execute: function() {
            NodulesComponent = (function () {
                function NodulesComponent(router, noduleService, useMockData) {
                    this.router = router;
                    this.noduleService = noduleService;
                    this.useMockData = useMockData;
                    this.title = "Nodules List";
                    this.nodules = [];
                    this.useMock = useMockData;
                }
                NodulesComponent.prototype.ngOnInit = function () {
                    this.getNodules();
                };
                NodulesComponent.prototype.onselect = function (nodule) {
                    this.selectedNodule = nodule;
                };
                NodulesComponent.prototype.getNodules = function () {
                    var _this = this;
                    var promise = this.noduleService.getNodules(this.useMock || false);
                    promise
                        .then(function (nodules) { return _this.nodules = nodules; })
                        .catch(console.log('No items found'));
                };
                NodulesComponent.prototype.gotoDetail = function () {
                    this.router.navigate(['NoduleDetail', { id: this.selectedNodule.id }]);
                };
                NodulesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-nodules',
                        templateUrl: 'app/nodule.list.html',
                        directives: [nodule_detail_component_1.NoduleDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, nodule_service_1.NoduleService, Boolean])
                ], NodulesComponent);
                return NodulesComponent;
            }());
            exports_1("NodulesComponent", NodulesComponent);
        }
    }
});
//# sourceMappingURL=nodule.component.js.map