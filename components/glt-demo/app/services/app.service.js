(function (app) {
    app.AppService = ng.core
        .Injectable()
        .Class({
            constructor: [function () {
                this.canvas = document.createElement('canvas');
                this.renderer = new glt.Renderer(this.canvas).size(128);

                this.previewSizes = [[256, 256], [192, 192], [128, 128], [64, 64]];
                this.previewSize = this.previewSizes[2];

                this.thumbnailSizes = [[256, 256], [192, 192], [128, 128], [64, 64]];
                this.thumbnailSize = this.thumbnailSizes[2];

                this.renderSizes = [[256, 256], [192, 192], [128, 128], [64, 64]];
                this.renderSize = this.renderSizes[2];

                this.previewQualities = [0.5, 1, 2, 4, 8];
                this.previewQuality = this.previewQualities[1];

                this.randomItems = 78;

                var queue = this.queue = [];
                var pending = 0;
                var next = this.next = (fn) => {
                    if (fn) {
                        queue.push(fn);
                    }

                    if (queue.length && !pending) {
                        pending++;
                        (queue.shift())(() => {
                            pending--;
                            next();
                        });
                    }
                };
            }]
        });

})(window.app || (window.app = {}));
