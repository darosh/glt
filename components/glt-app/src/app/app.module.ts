import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import 'hammerjs';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {KeysPipe} from './pipes/keys.pipe';
import {CjsonPipe} from './pipes/cjson.pipe';
import {RenderDirective} from './directives/render.directive';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';
import {MenuComponent} from './menu/menu.component';
import {PrototypesComponent} from './prototypes/prototypes.component';
import {ExtractorComponent} from './extractor/extractor.component';
import {ConfigService} from './services/config.service';
import {RenderService} from './services/render.service';
import {FullScreenDirective} from './directives/full-screen.directive';
import {ResizeService} from './services/resize.service';
import {FullService} from './services/full.service';

@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    CjsonPipe,
    RenderDirective,
    ListComponent,
    EditComponent,
    MenuComponent,
    PrototypesComponent,
    ExtractorComponent,
    FullScreenDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/edit', pathMatch: 'full'},
      {path: 'edit', component: EditComponent, data: {menu: 'edit'}},
      {path: 'edit/:json', component: EditComponent, data: {menu: 'edit'}},
      {path: 'features', component: ListComponent, data: {menu: 'thumbnails', list: 'generatorGenerators'}},
      {path: 'random', component: ListComponent, data: {menu: 'thumbnails', generator: 'generatorRandomTree'}},
      {path: 'palettes', component: ListComponent, data: {menu: 'thumbnails', generator: 'generatorRandomPalette', refresh: true}},
      {path: 'samples', component: ListComponent, data: {menu: 'thumbnails', list: 'samplesDemo'}},
      {path: 'test', component: ListComponent, data: {menu: 'thumbnails', list: 'samplesTest'}},
      {path: 'prototypes', component: PrototypesComponent},
      {path: 'extractor', component: ExtractorComponent}
    ], {useHash: true})
  ],
  providers: [ConfigService, RenderService, ResizeService, FullService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
