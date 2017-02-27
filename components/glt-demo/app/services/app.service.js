(function (app) {
    app.AppService = ng.core
        .Injectable()
        .Class({
            constructor: [function () {
                this.canvas = document.createElement('canvas');
                this.renderer = new glt.Renderer(this.canvas).size(128);

                this.previewSizes = [[64, 64], [128, 128], [192, 192], [256, 256]];
                this.previewSize = this.previewSizes[2];

                this.thumbnailSizes = [[64, 64], [128, 128], [192, 192], [256, 256]];
                this.thumbnailSize = this.thumbnailSizes[1];

                this.renderSizes = [[64, 64], [128, 128], [192, 192], [256, 256]];
                this.renderSize = this.renderSizes[2];

                this.previewQualities = [0.5, 1, 2, 4, 8];
                this.previewQuality = this.previewQualities[1];

                this.randomItems = 78;
                this.show = {
                    code: false,
                    time: false
                };

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
