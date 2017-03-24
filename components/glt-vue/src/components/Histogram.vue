<template>
  <svg :width="size[0]" :height="size[1]"></svg>
</template>

<script>
  import queue from '../services/queue'
  import render from '../services/render'
  const FPS = 60

  export default {
    name: 'histogram',
    props: [
      'size',
      'render',
      'curve',
      'dark'
    ],
    mounted: function () {
      if (this.render) {
        this.update()
      }
    },
    watch: {
      size: function () {
        if (this.render) {
          this.update()
        }
      },
      render: function () {
        this.update()
      }
    },
    methods: {
      paint: function () {
        const opt = glt.viewHistogram.m(this.dark)
        opt.mid = this.mid
        opt.curve = this.curve
        opt.ticks = !this.floats
        opt.width = this.size[0]
        opt.height = this.size[1]
        let h

        if (this.floats) {
          h = glt.getHistogram(this.render.arrayFloat, [-1, 1], true, this.bins, this.offset, this.offset + this.length)
        } else {
          h = glt.getHistogram(render.arrayInt, [0, 255], false, this.bins)
        }

        this.$el.style.backgroundImage = 'none'
        glt.viewHistogram(this.$el, h, opt)
      },
      update: function () {
        const self = this

        queue.next((done) => {
          if (self.destroyed) {
            return done()
          }

          if ((queue.time > FPS) || ((Date.now() - queue.last) > FPS)) {
            queue.time = 0
          }

          if (!queue.time) {
            window.requestAnimationFrame(next)
          } else {
            next()
          }

          function next () {
            if (self.destroyed) {
              return done()
            }

            self.paint()
            done()
          }
        })
      }
    }
  }
</script>

<style scoped>
  svg {
    display: block;
    font-style: normal;
    letter-spacing: 0;
    background-image: linear-gradient(45deg, #e0e0e0 25%, transparent 25%), linear-gradient(-45deg, #e0e0e0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e0e0e0 75%), linear-gradient(-45deg, transparent 75%, #e0e0e0 75%);
    background-size: 16px 16px;
    background-position: 0 0, 0 8px, 8px -8px, -8px 0;
  }
</style>
