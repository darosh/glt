import {Component, Input, OnInit} from '@angular/core';
import {ConfigService} from '../services/config.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  config;
  @Input() menu;

  constructor(config: ConfigService) {
    this.config = config;
  }
}
