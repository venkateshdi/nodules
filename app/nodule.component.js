System.register(['angular2/core', './nodule.service'], function(exports_1, context_1) {
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
    var core_1, nodule_service_1;
    var NodulesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nodule_service_1_1) {
                nodule_service_1 = nodule_service_1_1;
            }],
        execute: function() {
            NodulesComponent = (function () {
                function NodulesComponent(_noduleService) {
                    this._noduleService = _noduleService;
                    this.title = "Nodules List";
                    this.nodules = [];
                }
                NodulesComponent.prototype.ngOnInit = function () {
                    this.getNodules();
                };
                NodulesComponent.prototype.onselect = function (nodule) {
                    this.selectedNodule = nodule;
                };
                NodulesComponent.prototype.getNodules = function () {
                    var _this = this;
                    var promise = this._noduleService.getNodules();
                    promise.then(function (nodules) { return _this.nodules = nodules; });
                };
                NodulesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-nodules',
                        templateUrl: 'app/nodule.list.html',
                        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .nodules {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n    display:inline;\n  }\n  .nodules li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .nodules li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .nodules li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .nodules .text {\n    position: relative;\n    top: -3px;\n  }\n  .nodules .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
                    }), 
                    __metadata('design:paramtypes', [nodule_service_1.NoduleService])
                ], NodulesComponent);
                return NodulesComponent;
            }());
            exports_1("NodulesComponent", NodulesComponent);
        }
    }
});
//# sourceMappingURL=nodule.component.js.map