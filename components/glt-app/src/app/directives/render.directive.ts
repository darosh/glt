import {Directive, ElementRef, OnInit, EventEmitter, Output} from '@angular/core';
import {RenderService} from '../services/render.service';

import {glt} from '../../vendor';

declare const window;

@Directive({
  selector: '[render]',
  inputs: ['render', 'renderSize', 'renderTime', 'renderPartials', 'renderQuality', 'renderMode', 'renderUpdate']
})
export class RenderDirective implements OnInit {
  render;
  renderSize;
  renderTime;
  renderPartials = false;
  renderQuality = 1;
  renderMode = 0;
  renderUpdate;

  el;
  service;

  compiled;
  frontend;
  destroyed;

  @Output('renderCompiled') renderCompiled = new EventEmitter();

  constructor(service: RenderService, el: ElementRef) {
    this.el = el;
    this.service = service;
  }

  ngOnInit() {
    this.compiled = glt.compile(this.render, this.renderMode);
    this.renderCompiled.emit(this.compiled);
    this.frontend = window.document.createElement('canvas');

    let size = this.getSize();

    this.frontend.width = size[0];
    this.frontend.height = size[1];

    this.el.nativeElement.appendChild(this.frontend);

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
    let sizeA = this.getSize(this.renderQuality);
    let sizeB = this.getSize();
    let start = Date.now();
    this.service.renderer
      .size(sizeA)
      .render(
        this.renderPartials ? this.compiled.partials : this.compiled.shader,
        this.compiled.code,
        this.renderMode ? this.compiled.uniforms : null
      );
    this.renderTime.value = Date.now() - start;
    this.frontend.width = sizeB[0];
    this.frontend.height = sizeB[1];
    this.frontend.getContext('2d')
      .drawImage(
        this.service.canvas,
        0, 0, sizeA[0], sizeA[1],
        0, 0, sizeB[0], sizeB[1]
      );
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

  getSize(quality = 1) {
    let size = this.renderSize ? [this.renderSize[0], this.renderSize[1]] : [128, 128];

    if (this.renderPartials) {
      size[1] = this.compiled.partials.length * size[0];
    }

    return [size[0] / quality, size[1] / quality];
  }
}
