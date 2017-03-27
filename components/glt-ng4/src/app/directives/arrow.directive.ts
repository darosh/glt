import {Directive, Input, OnChanges, OnInit} from '@angular/core';

declare const window;

@Directive({
  selector: 'appArrow',
})
export class ArrowDirective implements OnInit, OnChanges {
  @Input() arrowSvg;
  @Input() arrowFrom;
  @Input() arrowTo;
  @Input() arrowOrder;
  l;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(e) {
    setTimeout(() => this.paint(), 0);
  }

  paint() {
    const f = this.arrowFrom;
    const t = this.arrowTo;

    if (!f || !t) {
      return;
    }

    const l = this.l = this.l || window.document.createElementNS('http://www.w3.org/2000/svg', 'path');

    const s = this.arrowSvg.getBoundingClientRect();
    const p = [[(f.left), f.top], [0, (f.top + t.top) / 2], [(t.left + t.right) / 2, t.top]];
    p[1][0] = (p[0][0] + p[2][0]) / 2;
    const mid = (p[0][0] - p[2][0]) / 8;
    p[1][1] -= mid;
    const off = mid / 2 + 2;

    const line = window.d3.line().x(d => d[0] - s.left).y(d => d[1] - s.top).curve(window.d3.curveBasis);

    l.setAttributeNS(null, 'd', line(p));

    l.setAttributeNS(null, 'marker-start', 'url(#point)');
    l.setAttributeNS(null, 'marker-end', 'url(#arrow)');

    l.setAttributeNS(null, 'fill', 'none');
    l.setAttributeNS(null, 'stroke', 'rgba(0,0,0,0.12)');
    l.setAttributeNS(null, 'stroke-dasharray', !this.arrowOrder ? '3 3' : null);
    l.setAttributeNS(null, 'stroke-width', 2);

    l.setAttribute('id', this.arrowFrom + '_' + this.arrowTo);

    this.arrowSvg.appendChild(l);
    this.arrowSvg.parentElement.style.marginTop = Math.max(parseFloat(this.arrowSvg.parentElement.style.marginTop || '0'), off > 16 ? off : 0) + 'px';
  }
}
