(function (app) {
    app.RenderDirective = ng.core
        .Directive({
            selector: '[render]',
            inputs: ['render'],
            providers: [app.AppService]
        })
        .Class({
            constructor: [app.AppService, ng.core.ElementRef, function (service, el) {
                this.el = el;
                this.service = service;
            }],
            ngOnInit: function () {
                var compiled = glt.compile(this.render);
                this.service.renderer.size(128).render(compiled.shader, compiled.code);
                var frontend = document.createElement('canvas');
                var size = 128;
                frontend.width = frontend.height = size;
                frontend.getContext('2d').drawImage(this.service.canvas,
                    0, 0, size, size,
                    0, 0, size, size);
                this.el.nativeElement.appendChild(frontend);
            },
        });

})(window.app || (window.app = {}));
