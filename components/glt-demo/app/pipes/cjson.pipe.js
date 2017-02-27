(function (app) {
    app.CJsonPipe = ng.core
        .Pipe({name: 'cjson'})
        .Class({
            constructor: function () {
            },
            transform: (value, i, l) => {
                let v = glt.deep(value);
                delete v.title;
                delete v.example;
                return CJSON(v, {indent: i, maxLength: Math.max(32, Math.round(l))});
            }
        });
})(window.app || (window.app = {}));
