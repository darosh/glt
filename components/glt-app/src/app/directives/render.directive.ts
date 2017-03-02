import {Directive, ElementRef, OnInit, EventEmitter, Output, HostListener} from '@angular/core';
import {RenderService} from '../services/render.service';

import {glt, screenfull} from '../../vendor';
import {FullService} from '../services/full.service';

declare const window;

@Directive({
  selector: '[render]',
  inputs: ['render', 'renderSize', 'renderTime', 'renderPartials', 'renderQuality', 'renderMode', 'renderUpdate', 'renderFull', 'renderDirect']
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
  renderDirect;
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
      this.paint(true);
    }
  }

  ngOnInit() {
    if (this.renderDirect) {
      this.frontend = this.service.canvas;
    } else {
      this.frontend = window.document.createElement('canvas');
    }

    if (this.renderFull) {
      this.fullService.subject.subscribe((e) => {
        if (e && (!e.isFullscreen || (e.element !== null && e.element !== this.frontend)) && this.full) {
          this.clicked();
        }
      });
    }

    this.compile();
    let size = this.getSize();
    this.frontend.width = size[0];
    this.frontend.height = size[1];
    this.el.nativeElement.appendChild(this.frontend);
    this.update();
  }

  compile() {
    this.compiled = glt.compile(this.render, this.renderMode);
    this.renderCompiled.emit(this.compiled);
  }

  ngOnChanges(e) {
    if (this.frontend) {
      if (e.render) {
        this.compile();
      }

      this.update();
    }
  }

  ngOnDestroy() {
    this.destroyed = true;
  }

  paint(full) {
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

    if (this.renderFull && full) {
      window.document.body.style.display = 'none';
      this.frontend.style.visibility = 'hidden';

      if (!this.full) {
        screenfull.exit();
      } else {
        screenfull.request(this.frontend);
      }

      setTimeout(() => {
        window.requestAnimationFrame(() => {
          this.frontend.width = sizeB[0];
          this.frontend.height = sizeB[1];
          window.requestAnimationFrame(() => {
            if (this.frontend !== this.service.canvas) {
              this.frontend.getContext('2d')
                .drawImage(
                  this.service.canvas,
                  0, 0, sizeA[0], sizeA[1],
                  0, 0, sizeB[0], sizeB[1]
                );
            }
            this.frontend.style.visibility = null;
            window.document.body.style.display = null;
          });
        });
      }, 0);
    } else {
      this.frontend.width = sizeB[0];
      this.frontend.height = sizeB[1];

      if (this.frontend !== this.service.canvas) {
        this.frontend.getContext('2d')
          .drawImage(
            this.service.canvas,
            0, 0, sizeA[0], sizeA[1],
            0, 0, sizeB[0], sizeB[1]
          );
      }
    }
  }

  update() {
    const that: any = this;
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
