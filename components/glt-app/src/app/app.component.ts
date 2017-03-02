import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ConfigService} from './services/config.service';
import {ResizeService} from './services/resize.service';

declare const window;

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config;
  router;
  route;
  data = {menu: false};
  width = window.innerWidth;
  opened = this.width >= 960;

  constructor(config: ConfigService, resize: ResizeService, router: Router, route: ActivatedRoute) {
    this.config = config;
    this.router = router;
    this.route = route;

    resize.subject.subscribe((val) => {
      if (val) {
        this.width = val.innerWidth;
      }
    });
  }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        console.log(1);
        let currentRoute = this.route.root;
        while (currentRoute.children[0] !== undefined) {
          currentRoute = currentRoute.children[0];
        }
        this.data = currentRoute.snapshot.data;
      })
  }
}
