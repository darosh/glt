(function (app) {
    app.AppService = ng.core
        .Injectable()
        .Class({
            constructor: [function () {
                this.canvas = document.createElement('canvas');
                this.renderer = new glt.Renderer(this.canvas).size(128);
            }]
        });

})(window.app || (window.app = {}));
