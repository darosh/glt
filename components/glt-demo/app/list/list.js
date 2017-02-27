(function (app) {
    app.ListComponent = ng.core
        .Component({
            templateUrl: './app/list/list.html',
            imports: [ng.router.ActivatedRoute]
        })
        .Class({
            constructor: [app.AppService, ng.router.ActivatedRoute, function (service, route) {
                this.service = service;
                this.recipes = [];
                this.code = route.routeConfig.data.code;

                if (route.routeConfig.data.list) {
                    var list = route.routeConfig.data.list.call
                        ? route.routeConfig.data.list()
                        : glt.deep(route.routeConfig.data.list);
                }

                function add(that) {
                    if (!that.destroyed && (list ? list.length : that.recipes.length < that.service.randomItems)) {

                        if (list) {
                            that.recipes.push(list.shift());
                        } else {
                            that.recipes.push(route.routeConfig.data.generator());
                        }
                        setTimeout(function () {
                            add(that);
                        }, 25)
                    }
                }

                add(this);
            }],
            toJson: (o) => glt.toJson(o, 0),
            ngOnDestroy: () => {
                this.destroyed = true;
            }
        });
})(window.app || (window.app = {}));
