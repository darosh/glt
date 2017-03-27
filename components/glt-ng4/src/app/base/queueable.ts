import {QueueService} from '../services/queue.service';
import {Injectable, OnDestroy} from '@angular/core';

declare const window;

@Injectable()
export class Queueable implements OnDestroy {
  queue;
  destroyed = false;
  FPS = 1000 / 30;

  constructor(queue: QueueService) {
    this.queue = queue;
  }

  ngOnDestroy() {
    this.destroyed = true;
  }

  paint(...args: any[]) {
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
