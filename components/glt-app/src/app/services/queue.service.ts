export class QueueService {
  queue = [];
  pending = 0;
  time = 0;

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
