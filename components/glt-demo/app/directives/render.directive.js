(function (app) {
    app.RenderDirective = ng.core
        .Directive({
            selector: '[render]',
            inputs: ['render', 'renderSize']
        })
        .Class({
            constructor: [app.AppService, ng.core.ElementRef, function (service, el) {
                this.el = el;
                this.service = service;
            }],
            ngOnInit: function () {
                this.compiled = glt.compile(this.render);
                this.frontend = document.createElement('canvas');
                var size = this.renderSize ? this.renderSize[0] : 128;
                this.frontend.width = this.frontend.height = size;
                this.el.nativeElement.appendChild(this.frontend);
                this.update();
            },
            ngOnChanges: function () {
                if (this.frontend) {
                    this.update();
                }
            },
            ngOnDestroy: function () {
                this.destroyed = true;
            },
            paint: function () {
                var size = this.renderSize ? this.renderSize[0] : 128;
                this.service.renderer.size(size).render(this.compiled.shader, this.compiled.code);
                this.frontend.width = this.frontend.height = size;
                this.frontend.getContext('2d').drawImage(this.service.canvas,
                    0, 0, size, size,
                    0, 0, size, size);
            },
            update: function () {
                var that = this;
                this.service.next((done) => {
                    if (that.destroyed) {
                        return done();
                    }

                    requestAnimationFrame(() => {
                        if (that.destroyed) {
                            return done();
                        }

                        that.paint();
                        done();
                    });
                });
            }
        });
})(window.app || (window.app = {}));
