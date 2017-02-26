(function (app) {
    app.PrototypesComponent = ng.core
        .Component({
            templateUrl: './app/prototypes/prototypes.html'
        })
        .Class({
            constructor: [function () {
                this.features = glt.toJson(glt.features);
                this.all = glt.toJson(glt.all);
                this.prototypes = glt.all
                    .map(function (v) {
                        return v.type + ', ' + v.name + ', ' + glt.getSignature(v);
                    })
                    .join('\n');
            }]
        });
})(window.app || (window.app = {}));
