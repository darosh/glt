import {Directive, ElementRef} from '@angular/core';
import {RenderService} from "../services/render.service";

import {glt} from '../../vendor';

declare const window;

@Directive({
  selector: '[render]',
  inputs: ['render', 'renderSize', 'renderTime', 'renderPartials']
})
export class RenderDirective {
  render;
  renderSize;
  renderTime;

  el;
  service;

  compiled;
  frontend;
  destroyed;

  constructor(service: RenderService, el: ElementRef) {
    this.el = el;
    this.service = service;
  }

  ngOnInit() {
    this.compiled = glt.compile(this.render);
    this.frontend = window.document.createElement('canvas');
    let size = this.renderSize ? this.renderSize : [128, 128];
    this.frontend.width = size[0];
    this.frontend.height = size[1];
    let fc = this.el.nativeElement.firstChild;
    if (fc) {
      this.el.nativeElement.insertBefore(this.frontend, fc);
    } else {
      this.el.nativeElement.appendChild(this.frontend);
    }
    this.update();
  }

  ngOnChanges() {
    if (this.frontend) {
      this.update();
    }
  }

  ngOnDestroy() {
    this.destroyed = true;
  }

  paint() {
    let size = this.renderSize ? this.renderSize : [128, 128];
    let start = Date.now();
    this.service.renderer.size(size).render(this.compiled.shader, this.compiled.code);
    this.renderTime.value = Date.now() - start;
    this.frontend.width = size[0];
    this.frontend.height = size[1];
    this.frontend.getContext('2d').drawImage(this.service.canvas,
      0, 0, size[0], size[1],
      0, 0, size[0], size[1]);
  }

  update() {
    const that = this;
    this.service.next((done) => {
      if (that.destroyed) {
        return done();
      }

      window.requestAnimationFrame(() => {
        if (that.destroyed) {
          return done();
        }

        that.paint();
        done();
      });
    });
  }
}
