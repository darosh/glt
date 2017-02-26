(function (app) {
    app.EditComponent = ng.core
        .Component({
            templateUrl: './app/edit/edit.html',
            imports: [ng.router.ActivatedRoute],
            providers: [app.AppService]
        })
        .Class({
            constructor: [app.AppService, ng.router.ActivatedRoute, function (service, route) {
                this.service = service;
                this.route = route;
                this.indexFn = (i) => i;
                this.service.renderer.size(512);
                this.tree = this.route.params.value.json ? JSON.parse(this.route.params.value.json) : glt.samplesDemo[0];
                this.treeJson = CJSON(this.tree);
                this.view = {data: 'tree', shader: 'all', type: 'three', vars: 2, multi: false};
            }],
            ngOnInit: function () {
                glt.select('#canvas').appendChild(this.service.canvas);
                this.treeChanged();
            },
            change: function () {
                this.service.renderer.update();
            },
            treeChanged: function () {
                this.tree = JSON.parse(this.treeJson);
                this.compiled = glt.compile(this.tree, 1);
                this.syntaxJson = CJSON(this.compiled.syntax);
                this.service.renderer.render(this.compiled.shader, this.compiled.code, this.compiled.uniforms);

                for (let key in this.compiled.uniforms) {
                    this.compiled.uniforms[key].animate = this.compiled.uniforms[key].value.length ? [] : true;
                }

                this.updateDisplay();
            },
            updateDisplay: function () {
                const shaders = {
                    three: glt.getShaderThree,
                    glsl: glt.getShaderGlslSandbox,
                    toy: glt.getShaderShadertoy,
                };
                this.display = glt.formatShader(this.tree, parseInt(this.view.vars), this.view.multi, this.compiled.uniforms, shaders[this.view.type]);
            },
            randomize: function () {
                this.treeJson = CJSON(glt.randomTree2());
                this.treeChanged();
            }
        });

})(window.app || (window.app = {}));
