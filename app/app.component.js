System.register(['angular2/core', 'angular2/router', './nodule.service', './nodule.component', './nodule-detail.component'], function(exports_1, context_1) {
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
    var core_1, router_1, nodule_service_1, nodule_component_1, nodule_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (nodule_service_1_1) {
                nodule_service_1 = nodule_service_1_1;
            },
            function (nodule_component_1_1) {
                nodule_component_1 = nodule_component_1_1;
            },
            function (nodule_detail_component_1_1) {
                nodule_detail_component_1 = nodule_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Nodules App';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h4>{{title}}</h4>\n    <a [routerLink]=\"['Nodules']\">Nodules</a>\n  <router-outlet></router-outlet>\n\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            nodule_service_1.NoduleService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/nodules',
                            name: 'Nodules',
                            component: nodule_component_1.NodulesComponent
                        },
                        {
                            path: '/nodule/:id',
                            name: 'NoduleDetail',
                            component: nodule_detail_component_1.NoduleDetailComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map