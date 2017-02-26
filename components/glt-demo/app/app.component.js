(function (app) {
    app.AppComponent = ng.core
        .Component({
            selector: '[app]',
            templateUrl: './app/app.component.html',
            providers: []
        })
        .Class({
            constructor: [function () {
            }],
        });

})(window.app || (window.app = {}));
