import {Directive, ElementRef, Input, OnChanges, OnInit} from '@angular/core';
import {QueueService} from '../services/queue.service';
import {RenderService} from '../services/render.service';
import {Queueable} from '../base/queueable';

declare const window;

@Directive({
  selector: '[appCanvas]',
})
export class CanvasDirective extends Queueable implements OnInit, OnChanges {
  @Input() appCanvas;
  @Input() canvasOffset;
  @Input() canvasSize;

  el;
  ctx;
  canvas;
  render;

  constructor(el: ElementRef, queue: QueueService, render: RenderService) {
    super(queue);
    this.el = el;
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

  paint() {
    this.canvas.width = this.canvasSize[0];
    this.canvas.height = this.canvasSize[1];
    const id = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const l = this.canvas.width * this.canvas.height * 4;
    for (let i = 0; i < l; i++) {
      id.data[i] = this.render.arrayFloat[i + this.canvasOffset] * 255;
    }
    this.ctx.putImageData(id, 0, 0, 0, 0, this.canvas.width, this.canvas.height);
  }
}
