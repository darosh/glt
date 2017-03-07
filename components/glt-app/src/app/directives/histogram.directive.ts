import {Directive, ElementRef, Input, OnChanges, OnInit} from '@angular/core';

import {glt} from '../../vendor';
import {QueueService} from '../services/queue.service';
import {Queueable} from '../base/queueable';

declare const window;

@Directive({
  selector: '[appHistogram]',
})
export class HistogramDirective extends Queueable implements OnInit, OnChanges {
  @Input() appHistogram;
  @Input() histogramSize;
  @Input() histogramOptionsDark;
  @Input() histogramOptionsCurve;
  @Input() histogramOptionsMid;

  el;
  svg;

  constructor(el: ElementRef, queue: QueueService) {
    super(queue);
    this.el = el;
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
    opt.width = this.histogramSize[0];
    opt.height = this.histogramSize[1];
    glt.viewHistogram(this.svg, this.appHistogram, opt);
  }
}
