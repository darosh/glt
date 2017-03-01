import {Injectable} from '@angular/core';

import {glt} from '../../vendor';

@Injectable()
export class RenderService {
  canvas = document.createElement('canvas');
  renderer = new glt.Renderer(this.canvas).size(128);
  queue = [];
  pending = 0;

  constructor() {
  }

  next(fn = null) {
    if (fn) {
      this.queue.push(fn);
    }

    if (this.queue.length && !this.pending) {
      this.pending++;
      (this.queue.shift())(() => {
        this.pending--;
        this.next();
      });
    }
  }
}