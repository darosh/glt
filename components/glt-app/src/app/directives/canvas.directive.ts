import {Directive, ElementRef, Input, OnChanges, OnInit} from '@angular/core';
import {QueueService} from '../services/queue.service';
import {RenderService} from '../services/render.service';

declare const window;

@Directive({
  selector: '[appCanvas]',
})
export class CanvasDirective implements OnInit, OnChanges {
  @Input() appCanvas;
  @Input() canvasOffset;
  @Input() canvasSize;

  el;
  ctx;
  canvas;
  queue;
  render;
  destroyed;

  constructor(el: ElementRef, queue: QueueService, render: RenderService) {
    this.el = el;
    this.queue = queue;
    this.render = render;
  }

  ngOnInit() {
    this.canvas = window.document.createElement('canvas');
    this.canvas.width = this.canvasSize[0];
    this.canvas.height = this.canvasSize[1];
    this.ctx = this.canvas.getContext('2d');
    this.el.nativeElement.appendChild(this.canvas);
    this.ngOnChanges(null);
  }

  ngOnChanges(e) {
    if (this.canvas && this.appCanvas && this.canvasSize) {
      this.update();
    }
  }

  ngOnDestroy() {
    this.destroyed = true;
  }

  paint() {
    const id = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const l = this.canvas.width * this.canvas.height * 4;
    for (let i = 0; i < l; i++) {
      id.data[i] = this.render.pixels[i + this.canvasOffset] * 255;
    }
    this.ctx.putImageData(id, 0, 0, 0, 0, this.canvas.width, this.canvas.height);
  }

  update() {
    const self: any = this;

    this.queue.next((done) => {
      if (self.destroyed) {
        return done();
      }

      if ((this.queue.time > self.FPS) || ((Date.now() - this.queue.last) > self.FPS)) {
        this.queue.time = 0;
      }

      if (!this.queue.time) {
        window.requestAnimationFrame(next);
      } else {
        next();
      }

      function next() {
        if (self.destroyed) {
          return done();
        }

        self.paint();
        done();
      }
    });
  }
}
