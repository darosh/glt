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
      {path: '', component: EditComponent},
      {path: 'edit', component: EditComponent},
      {path: 'edit/:json', component: EditComponent},
      {path: 'features', component: ListComponent, data: {list: 'generatorGenerators'}},
      {path: 'random', component: ListComponent, data: {generator: 'generatorRandomTree'}},
      {path: 'palettes', component: ListComponent, data: {generator: 'generatorRandomPalette', refresh: true}},
      {path: 'samples', component: ListComponent, data: {list: 'samplesDemo'}},
      {path: 'test', component: ListComponent, data: {list: 'samplesTest'}},
      {path: 'prototypes', component: PrototypesComponent},
      {path: 'extractor', component: ExtractorComponent}
    ], {useHash: true})
  ],
  providers: [ConfigService, RenderService, ResizeService, FullService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
