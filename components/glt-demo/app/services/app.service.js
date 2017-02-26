(function (app) {
    var canvas;
    var renderer;

    app.AppService = ng.core
        .Injectable()
        .Class({
            constructor: [function () {
                if (!renderer) {
                    canvas = document.createElement('canvas');
                    renderer = new glt.Renderer(canvas).size(128);
                }

                this.canvas = canvas;
                this.renderer = renderer;
            }],
        });

})(window.app || (window.app = {}));
