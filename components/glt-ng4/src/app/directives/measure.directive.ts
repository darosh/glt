import {Directive, Output, OnChanges, OnInit, EventEmitter, ElementRef} from '@angular/core';

declare const window;

@Directive({
  selector: '[appMeasure]',
})
export class MeasureDirective implements OnInit, OnChanges {
  @Output() measureRect = new EventEmitter();
  el;
  prev: any = {};

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
  }

  ngOnChanges(e) {
  }

  ngDoCheck() {
    this.getClient();
  }

  getClient() {
    const m = this.el.nativeElement.getBoundingClientRect();
    const c = {
      left: Math.round(m.left),
      right: Math.round(m.right),
      top: Math.round(m.top)
    };

    if (c.left !== this.prev.left || c.top !== this.prev.top || c.right !== this.prev.right) {
      this.prev = c;
      this.measureRect.emit(c);
    }
  }
}
