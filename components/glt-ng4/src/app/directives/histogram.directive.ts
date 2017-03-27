import {Directive, ElementRef, Input, OnChanges, OnInit} from '@angular/core';

import {glt} from '../../vendor';
import {QueueService} from '../services/queue.service';
import {Queueable} from '../base/queueable';
import {RenderService} from '../services/render.service';

declare const window;

@Directive({
  selector: '[appHistogram]',
})
export class HistogramDirective extends Queueable implements OnInit, OnChanges {
  @Input() appHistogram;
  @Input() histogramSize;
  @Input() histogramFloats;
  @Input() histogramOffset;
  @Input() histogramLength;
  @Input() histogramBins;
  @Input() histogramOptionsDark;
  @Input() histogramOptionsCurve;
  @Input() histogramOptionsMid;

  el;
  svg;
  render;

  constructor(el: ElementRef, queue: QueueService, render: RenderService) {
    super(queue);
    this.el = el;
    this.render = render;
  }

  ngOnInit() {
    this.svg = window.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.el.nativeElement.appendChild(this.svg);
    this.svg.setAttribute('width', this.histogramSize[0]);
    this.svg.setAttribute('height', this.histogramSize[1]);
    this.ngOnChanges(null);
  }

  ngOnChanges(e) {
    if (this.svg && this.appHistogram && this.histogramSize) {
      this.update();
    }
  }

  paint() {
    this.svg.setAttribute('width', this.histogramSize[0]);
    this.svg.setAttribute('height', this.histogramSize[1]);
    const opt = glt.viewHistogram.m(this.histogramOptionsDark);
    opt.mid = this.histogramOptionsMid;
    opt.curve = this.histogramOptionsCurve;
    opt.ticks = !this.histogramFloats;
    opt.width = this.histogramSize[0];
    opt.height = this.histogramSize[1];
    let h;

    if (this.histogramFloats) {
      h = glt.getHistogram(this.render.arrayFloat, [-1, 1], true, this.histogramBins, this.histogramOffset, this.histogramOffset + this.histogramLength);
    } else {
      h = glt.getHistogram(this.render.arrayInt, [0, 255], false, this.histogramBins);
    }

    glt.viewHistogram(this.svg, h, opt);
  }
}
