class QueueService {
  queue = []
  pending = 0
  time = 0

  next (fn = null, index) {
    if (fn) {
      this.queue.push(fn)

      if (index >= 0) {
        fn.index = index
        this.queue.sort(function (a, b) {
          return (a.index || 0) - (b.index || 0)
        })
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
