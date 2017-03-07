import {Directive, ElementRef, OnInit, EventEmitter, Output, HostListener, Input, OnChanges} from '@angular/core';
import {RenderService} from '../services/render.service';

import {glt, screenfull} from '../../vendor';
import {FullService} from '../services/full.service';
import {QueueService} from '../services/queue.service';
import {Queueable} from '../base/queueable';

declare const window;

@Directive({
  selector: '[appRender]',
})
export class RenderDirective extends Queueable implements OnInit, OnChanges {
  @Input() appRender;
  @Input() renderSize;
  @Input() renderPartials = false;
  @Input() renderQuality = 1;
  @Input() renderMode = 0;
  @Input() renderUpdate;
  @Input() renderFull;
  @Input() renderDirect;
  @Input() renderOffScreen;
  @Input() renderPreCompiled;
  @Input() renderHistogramBins;
  @Input() renderHistogram;

  @Output() renderHistogramEvent = new EventEmitter();
  @Output() renderCompiled = new EventEmitter();
  @Output() renderTime = new EventEmitter();
  @Output() renderOffScreenEvent = new EventEmitter();

  full;
  el;
  service;
  compiled;
  frontend;
  fullService;

  constructor(service: RenderService, queue: QueueService, full: FullService, el: ElementRef) {
    super(queue);
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
    const size = this.getSize();
    this.frontend.width = size[0];
    this.frontend.height = size[1];
    this.el.nativeElement.appendChild(this.frontend);

    if (this.compiled) {
      this.update();
    }
  }

  compile() {
    if (this.renderPreCompiled) {
      if (Object.keys(this.renderPreCompiled).length) {
        this.compiled = this.renderPreCompiled;
      }
    } else {
      this.compiled = glt.compile(this.appRender, this.renderMode);
    }

    this.renderCompiled.emit(this.compiled);
  }

  ngOnChanges(e) {
    if (this.frontend) {
      if (e.appRender) {
        this.compile();
      }

      if (this.compiled) {
        this.update();
      }
    }
  }

  paint(full) {
    const sizeA = this.getSize(this.renderQuality);
    const sizeB = this.getSize();
    const start = Date.now();

    (this.renderOffScreen ? this.service.renderer : this.service.renderer.size(sizeA))
      .render(
        this.renderPartials ? this.compiled.partials.map(p => p.shader) : this.compiled.shader,
        this.compiled.code,
        this.renderMode ? this.compiled.uniforms : null,
        this.renderOffScreen ? sizeA : null,
        true
      );

    if (this.renderHistogram) {
      // this.service.renderer.render(
      //   this.renderPartials ? this.compiled.partials : this.compiled.shader,
      //   this.compiled.code,
      //   this.renderMode ? this.compiled.uniforms : null,
      //   this.renderOffScreen ? sizeA : null,
      //   true
      // );

      if (this.renderPartials) {
        // const array = this.service.renderer.pixels(true);
        // this.renderHistogram.value = this.compiled.partials.map((v, i) => {
        //   const s = sizeA[0] * sizeA[0] * 4;
        //   const f = s * i;
        //   const t = s * (i + 1);
        //   return glt.histogram(array, 32, true, f, t);
        // });
      } else {
        const array = this.service.renderer.pixels(false, true);

        this.renderHistogramEvent.emit(glt.getHistogram(array, [0, 255], false, this.renderHistogramBins));
      }
    }

    this.renderTime.emit(Date.now() - start);

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
              this.service.renderer.draw(this.frontend);
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
        if (this.renderOffScreen) {
          // if (typeof this.renderOffScreen === 'object') {
          if (this.renderPartials) {
            this.offScreenPartials(sizeA);
          }
          // } else {
          // this.service.renderer.drawTarget(this.frontend);
          // }
        } else {
          this.service.renderer.draw(this.frontend);
        }
      }
    }
  }

  offScreenPartials(sizeA) {
    const ret: any = {};
    const length = 4 * sizeA[0] * sizeA[0];

    this.compiled.partials.forEach((p, i) => {
      p.offset = length * (this.compiled.partials.length - 1 - i);
      ret[p.syntax.id] = p;
    });

    ret.size = [sizeA[0], sizeA[0]];
    this.service.pixels = this.service.renderer.pixels(true);
    ret.pixels = true;
    this.renderOffScreenEvent.emit(ret);
  }

  getSize(quality = 1) {
    let size;

    if (!this.full) {
      size = this.renderSize ? [this.renderSize[0], this.renderSize[1]] : [128, 128];
    } else {
      size = [window.screen.width, window.screen.height];
    }

    if (this.renderPartials && this.compiled) {
      size[1] = this.compiled.partials.length * size[0];
    }

    return [size[0] / quality, size[1] / quality];
  }
}
