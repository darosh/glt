(function (app) {
    var appRoutes = [
        {path: '', component: app.EditComponent},
        {path: 'edit', component: app.EditComponent},
        {path: 'edit/:json', component: app.EditComponent},
        {path: 'features', component: app.ListComponent, data: {list: glt.generatorGenerators}},
        {path: 'random', component: app.ListComponent, data: {generator: glt.generatorRandomTree}},
        {path: 'palettes', component: app.ListComponent, data: {generator: glt.generatorRandomPalette}},
        {path: 'samples', component: app.ListComponent, data: {list: glt.samplesDemo}},
        {path: 'test', component: app.ListComponent, data: {list: glt.samplesTest, code: true}},
        {path: 'prototypes', component: app.PrototypesComponent},
        {path: 'extractor', component: app.ExtractorComponent}
    ];

    app.AppModule =
        ng.core
            .NgModule({
                imports: [
                    ng.platformBrowser.BrowserModule,
                    ng.forms.FormsModule,
                    ng.material.MaterialModule,
                    ng.flexLayout.FlexLayoutModule,
                    ng.router.RouterModule.forRoot(appRoutes, {useHash: true})
                ],
                declarations: [
                    app.RenderDirective,
                    app.ListComponent,
                    app.ExtractorComponent,
                    app.PrototypesComponent,
                    app.EditComponent,
                    app.AppComponent,
                    app.KeysPipe,
                    app.CJsonPipe
                ],
                bootstrap: [app.AppComponent]
            })
            .Class({
                constructor: function () {
                }
            });
})(window.app || (window.app = {}));
