import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../services/config.service";
import {ActivatedRoute} from "@angular/router";

import {glt} from '../../vendor';

declare const window;

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  config: any;
  recipes: any = [];
  times: any = [];
  code: any;

  constructor(config: ConfigService, route: ActivatedRoute) {
    this.config = config;
    this.code = route.routeConfig.data['code'];

    const _list = glt[route.routeConfig.data['list']];
    const _generator = glt[route.routeConfig.data['generator']];
    let list;

    if (_list) {
      list = _list.call ? _list() : glt.deep(_list);
    }

    while (list ? list.length : this.recipes.length < this.config.randomItems) {
      this.times.push({value: -1});
      if (list) {
        this.recipes.push(list.shift());
      } else {
        this.recipes.push(_generator());
      }
    }
  }

  ngOnInit() {
  }

  toJson(value) {
    return JSON.stringify(value)
  }

  spacers(w) {
    const n = Math.ceil(Math.max(window.screen.width, window.screen.height) / w);
    const ret = [];

    for (let i = 0; i < n; i++) {
      ret.push(i);
    }

    return ret;
  }
}
