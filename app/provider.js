System.register(['./mock-nodules'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mock_nodules_1;
    var MockProvider, LocalStorageProvider;
    return {
        setters:[
            function (mock_nodules_1_1) {
                mock_nodules_1 = mock_nodules_1_1;
            }],
        execute: function() {
            MockProvider = (function () {
                function MockProvider() {
                }
                MockProvider.prototype.getData = function () {
                    var nodule = mock_nodules_1.NODULES;
                    return nodule;
                };
                MockProvider.prototype.setData = function (nodule) {
                };
                return MockProvider;
            }());
            exports_1("MockProvider", MockProvider);
            LocalStorageProvider = (function () {
                function LocalStorageProvider() {
                }
                LocalStorageProvider.prototype.getData = function () {
                    var nodule = localStorage.getItem("nodules");
                    return nodule;
                };
                LocalStorageProvider.prototype.setData = function (nodule) {
                    var all = localStorage.getItem("nodules");
                    if (all) {
                        var ar = JSON.parse(all);
                        console.log(ar);
                    }
                    //localStorage.setItem("nodule", JSON.stringify(nodule));
                };
                return LocalStorageProvider;
            }());
            exports_1("LocalStorageProvider", LocalStorageProvider);
        }
    }
});
//# sourceMappingURL=provider.js.map