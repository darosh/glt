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
        console.log(this.render)
//        this.svg.setAttribute('width', this.histogramSize[0])
//        this.svg.setAttribute('height', this.histogramSize[1])
        const opt = glt.viewHistogram.m(this.dark)
        opt.mid = this.mid
        opt.curve = this.curve
        opt.ticks = !this.floats
        opt.width = this.size[0]
        opt.height = this.size[1]
        let h

        if (this.floats) {
//          h = glt.getHistogram(this.render.arrayFloat, [-1, 1], true, this.histogramBins, this.histogramOffset, this.histogramOffset + this.histogramLength);
        } else {
          h = glt.getHistogram(render.arrayInt, [0, 255], false, this.bins)
        }

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
  }
</style>
