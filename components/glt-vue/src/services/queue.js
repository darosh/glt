class QueueService {
  queue = []
  pending = 0
  time = 0

  next (fn = null, index) {
    if (fn) {
      if (index >= 0) {
        fn.index = index

        if (this.queue[0] && ((this.queue[0].index || 0) > index)) {
          this.queue.unshift(fn)
        } else {
          this.queue.push(fn)

          if (this.queue.length > 1 && (index < (this.queue[this.queue.length - 2].index || 0))) {
            this.queue.sort(function (a, b) {
              return (a.index || 0) - (b.index || 0)
            })
          }
        }
      } else {
        this.queue.push(fn)
      }
    }

    if (this.queue.length && !this.pending) {
      const start = Date.now()
      this.pending++;
      (this.queue.shift())(() => {
        this.time += Date.now() - start
        this.pending--
        this.next()
      })
    }
  }
}

export default new QueueService()
