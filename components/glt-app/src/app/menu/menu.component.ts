import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../services/config.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  inputs: ['menu']
})
export class MenuComponent {
  config;
  menu;

  constructor(config: ConfigService) {
    this.config = config;
  }
}
