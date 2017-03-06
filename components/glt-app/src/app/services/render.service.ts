import {Injectable} from '@angular/core';

import {glt} from '../../vendor';

declare const window;

@Injectable()
export class RenderService {
  canvas = window.document.createElement('canvas');
  renderer = new glt.Renderer(this.canvas).size(128);
  queue = [];
  pending = 0;
  time = 0;

  constructor() {
    this.canvas.setAttribute('id', 'WEBGL_RENDERER');
  }

  next(fn = null) {
    if (fn) {
      this.queue.push(fn);
    }

    if (this.queue.length && !this.pending) {
      const start = Date.now();
      this.pending++;
      (this.queue.shift())(() => {
        this.time += Date.now() - start;
        this.pending--;
        this.next();
      });
    }
  }
}
