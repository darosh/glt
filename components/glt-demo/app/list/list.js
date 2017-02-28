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
                this.times = [];
                this.code = route.routeConfig.data.code;

                if (route.routeConfig.data.list) {
                    var list = route.routeConfig.data.list.call
                        ? route.routeConfig.data.list()
                        : glt.deep(route.routeConfig.data.list);
                }

                while (list ? list.length : this.recipes.length < this.service.randomItems) {
                    this.times.push({value: -1});
                    if (list) {
                        this.recipes.push(list.shift());
                    } else {
                        this.recipes.push(route.routeConfig.data.generator());
                    }
                }
            }],
            toJson: (o) => glt.toJson(o, 0)
        });
})(window.app || (window.app = {}));
