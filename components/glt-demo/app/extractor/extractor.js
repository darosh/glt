(function (app) {
    app.ExtractorComponent = ng.core
        .Component({
            templateUrl: './app/extractor/extractor.html'
        })
        .Class({
            constructor: [function () {
                this.source = glt.GLSL;
                this.extracted = glt.toJson(glt.getFragments());
                var libs = ['SinX', 'SinXY', 'WorleyF1', 'pnoise'];
                this.input = glt.toJson(libs);
                this.output = glt.getLib(libs);
            }]
        });
})(window.app || (window.app = {}));
