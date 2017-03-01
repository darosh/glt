import {Component} from '@angular/core';
import {ConfigService} from './services/config.service';
import {ResizeService} from "./services/resize.service";

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config;
  width = window.innerWidth;
  opened = this.width >= 960;

  constructor(config: ConfigService, resize: ResizeService) {
    this.config = config;
    resize.window.subscribe((val) => {
      if (val) {
        this.width = val.innerWidth;
      }
    });
  }
}
