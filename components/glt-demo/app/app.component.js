(function (app) {
    app.AppComponent = ng.core
        .Component({
            selector: '[app]',
            templateUrl: './app/app.component.html'
        })
        .Class({
            constructor: [app.AppService, function (service) {
                this.service = service;
            }],
        });

})(window.app || (window.app = {}));
