<template>
  <canvas></canvas>
</template>

<script>
  import queue from '../services/queue'
  import render from '../services/render'
  const FPS = 60

  export default {
    name: 'draw',
    props: [
      'recipe',
      'size',
      'partials',
      'quality',
      'mode',
      'full',
      'direct',
      'offScreen',
      'preCompiled',
      'renderHistogram'
    ],
    beforeDestroy: function () {
      this.destroyed = true
    },
    mounted: function () {
      this.$el.width = this.size[0]
      this.$el.height = this.size[1]
      this.compiled = glt.compile(this.recipe, 1)
      this.$emit('compiled', this.compiled)
      this.update()
    },
    watch: {
      size: function () {
        this.$el.width = this.size[0]
        this.$el.height = this.size[1]
        this.update()
      },
      partials: function () {
        this.update()
      },
      recipe: function () {
        this.compiled = glt.compile(this.recipe, 1)
        this.$emit('compiled', this.compiled)
        this.update()
      }
    },
    methods: {
      getSize: function (quality = 1) {
        let size

        if (!this.full) {
          size = this.size ? [this.size[0], this.size[1]] : [128, 128]
        } else {
          size = [window.screen.width, window.screen.height]
        }

        if (this.partials && this.compiled) {
          size[1] = this.compiled.partials.length * size[0]
        }

        return [size[0] / quality, size[1] / quality]
      },
      paint: function () {
        const sizeA = this.getSize(this.quality)
        const sizeB = this.getSize()

        if (!this.offScreen) {
          render.renderer.size(sizeA)
        }

        const start = Date.now()

        render.renderer.render(
          this.partials ? this.compiled.partials.map(p => p.shader) : this.compiled.shader,
          this.compiled.code,
          this.compiled.uniforms,
          null,
          true
        )

        this.$emit('time', Date.now() - start)

        this.$el.width = sizeB[0]
        this.$el.height = sizeB[1]

        render.renderer.draw(this.$el)
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
  canvas {
    display: block;
    background-image: linear-gradient(45deg, #e0e0e0 25%, transparent 25%), linear-gradient(-45deg, #e0e0e0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e0e0e0 75%), linear-gradient(-45deg, transparent 75%, #e0e0e0 75%);
    background-size: 16px 16px;
    background-position: 0 0, 0 8px, 8px -8px, -8px 0;
  }
</style>
