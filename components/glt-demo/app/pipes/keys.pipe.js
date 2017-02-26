(function (app) {
    app.KeysPipe = ng.core
        .Pipe({name: 'keys'})
        .Class({
            constructor: function () {
            },
            transform: (value) => {
                let keys = [];
                for (let key in value) {
                    keys.push({key: key, value: value[key]});
                }
                return keys;
            }
        });
})(window.app || (window.app = {}));
