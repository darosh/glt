(function (app) {
    app.ScreenFullDirective = ng.core
        .Directive({
            selector: '[toggleFullscreen]',
            host: {
                '(click)': 'clicked()'
            }
        })
        .Class({
            constructor: [function () {
            }],
            clicked: function () {
                if (screenfull.enabled) {
                    screenfull.toggle();
                }
            }
        });
})(window.app || (window.app = {}));
