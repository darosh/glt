import {Directive, ElementRef, OnInit, EventEmitter, Output, HostListener} from '@angular/core';
import {RenderService} from '../services/render.service';

import {glt, screenfull} from '../../vendor';
import {FullService} from '../services/full.service';

declare const window;

@Directive({
  selector: '[render]',
  inputs: ['render', 'renderSize', 'renderTime', 'renderPartials', 'renderQuality', 'renderMode', 'renderUpdate', 'renderFull']
})
export class RenderDirective implements OnInit {
  render;
  renderSize;
  renderTime;
  renderPartials = false;
  renderQuality = 1;
  renderMode = 0;
  renderUpdate;
  renderFull;
  full;

  el;
  service;

  compiled;
  frontend;
  destroyed;
  fullService;


  @Output('renderCompiled') renderCompiled = new EventEmitter();

  constructor(service: RenderService, full: FullService, el: ElementRef) {
    this.el = el;
    this.service = service;
    this.fullService = full;
  }

  @HostListener('click')
  clicked() {
    if (this.renderFull) {
      this.full = !this.full;
      this.paint();
    }
  }

  ngOnInit() {
    if (this.renderFull) {
      this.fullService.subject.subscribe((e) => {
        if (e && (!e.isFullscreen || (e.element !== null && e.element !== this.frontend)) && this.full) {
          this.clicked();
        }
      });
    }

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

    if (this.renderFull) {
      this.frontend.style.visibility = 'hidden';

      if (!this.full) {
        screenfull.exit();
      } else {
        screenfull.request(this.frontend);
      }

      setTimeout(() => {
        this.frontend.width = sizeB[0];
        this.frontend.height = sizeB[1];
        setTimeout(() => {
          this.frontend.getContext('2d')
            .drawImage(
              this.service.canvas,
              0, 0, sizeA[0], sizeA[1],
              0, 0, sizeB[0], sizeB[1]
            );
          this.frontend.style.visibility = null;
        }, 0);
      }, 0);

    } else {
      this.frontend.width = sizeB[0];
      this.frontend.height = sizeB[1];
      this.frontend.getContext('2d')
        .drawImage(
          this.service.canvas,
          0, 0, sizeA[0], sizeA[1],
          0, 0, sizeB[0], sizeB[1]
        );
    }
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
    let size;

    if (!this.full) {
      size = this.renderSize ? [this.renderSize[0], this.renderSize[1]] : [128, 128];
    } else {
      size = [window.screen.width, window.screen.height];
    }

    if (this.renderPartials) {
      size[1] = this.compiled.partials.length * size[0];
    }

    return [size[0] / quality, size[1] / quality];
  }
}
