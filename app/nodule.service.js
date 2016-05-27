System.register(['angular2/core', './provider'], function(exports_1, context_1) {
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
    var core_1, provider_1;
    var NoduleService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (provider_1_1) {
                provider_1 = provider_1_1;
            }],
        execute: function() {
            NoduleService = (function () {
                function NoduleService() {
                }
                NoduleService.prototype.getNodules = function (useMock) {
                    if (useMock === void 0) { useMock = false; }
                    if (useMock) {
                        this.provider = new provider_1.MockProvider();
                    }
                    else
                        this.provider = new provider_1.LocalStorageProvider();
                    // let nodules: any = localStorage.getItem("nodules") 
                    //                    || (useMock ? NODULES : null);
                    var nodules = this.provider.getData();
                    if (nodules)
                        return Promise.resolve(nodules);
                    else
                        return Promise.resolve(null);
                };
                NoduleService.prototype.getNodule = function (id) {
                    var nodules = this.provider.getData();
                    return Promise.resolve(nodules).then(function (nodules) { return nodules.filter(function (nodule) { return nodule.id === id; })[0]; }).catch(function (rea) { return console.log(rea); });
                };
                NoduleService.prototype.save = function (nodule) {
                    if (nodule.id) {
                        return this.put(nodule);
                    }
                    return this.post(nodule);
                };
                NoduleService.prototype.put = function (nodule) {
                    this.provider.setData(nodule);
                    return Promise.resolve(nodule).then(function (n) { return n; });
                    // .catch(this.handleError)
                };
                NoduleService.prototype.post = function (nodule) {
                    return Promise.resolve(nodule).then(function (n) { return n; });
                };
                NoduleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], NoduleService);
                return NoduleService;
            }());
            exports_1("NoduleService", NoduleService);
        }
    }
});
//# sourceMappingURL=nodule.service.js.map