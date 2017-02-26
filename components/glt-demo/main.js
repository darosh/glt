(function (app) {
    document.addEventListener('DOMContentLoaded', function () {
        ng.core.enableProdMode();
        ng.platformBrowserDynamic
            .platformBrowserDynamic()
            .bootstrapModule(app.AppModule);
    });
})(window.app || (window.app = {}));
