<template>
  <div class="main-content">
    <md-layout md-gutter class="md-wrap">
      <!--:key="id + '-' + index"-->
      <router-link v-for="(item, index) in recipes"
                   :key="index"
                   :to="{ name: 'Edit', params: { json: toJSON(item) }}">
        <md-card>
          <span v-if="item.title"
                v-bind:class="[config.thumbnailSize[0] > 128 ? 'md-title' : 'md-body-2']">{{item.title}}</span>
          <md-layout md-align="center">
            <draw :recipe="item"
                  :size="config.thumbnailSize"
                  :partials="config.partials"
                  :index="index"
                  v-on:time="onTime($event, index)"
                  :style="{width: config.thumbnailSize[0] + 'px'}"></draw>
          </md-layout>
          <span v-if="config.time" class="mono right">{{(times[index] > -1) ? times[index] : '&mdash;'}} ms</span>
          <span v-if="config.code" class="pre mono">{{toCJSON(item.data)}}</span>
        </md-card>
      </router-link>
      <div class="spacer" v-for="item in getSpacers(config.thumbnailSize[0])"
           :style="{width: config.thumbnailSize[0] + 'px'}"></div>
    </md-layout>
  </div>
</template>

<script>
  import draw from './Draw'
  import config from '../services/config'
  import Vue from 'vue'

  let ID = 1

  export default {
    name: 'list',
    components: {
      draw: draw
    },
    watch: {
      $route () {
        const data = this.getData()
        this.recipes = data.recipes
        this.times = data.times
        this.id = data.id
      }
    },
    data () {
      return this.getData()
//      setTimeout(() => {
//        Object.assign(this, this.getData())
//      })
//
//      return {
//        recipes: [],
//        times: [],
//        id: 0,
//        config: config
//      }
    },
    methods: {
      onTime (v, i) {
        Vue.set(this.times, i, v)
      },
      refresh () {
        Object.assign(this, this.getData())
      },
      toCJSON (o) {
        return CJSON(o, {indent: 1, maxLength: 32})
      },
      toJSON (o) {
        return JSON.stringify(o)
      },
      getSpacers (w) {
        const n = Math.ceil(Math.max(window.screen.width, window.screen.height) / w)
        const ret = []

        for (let i = 0; i < n; i++) {
          ret.push(i)
        }

        return ret
      },
      getData () {
        const recipes = []
        const times = []
        const _list = glt[this.$route.meta.list]
        const _generator = this.generator = glt[this.$route.meta.generator]
        let list

        if (_list) {
          list = _list.call ? _list() : glt.deep(_list)
        }

        while (list ? list.length : recipes.length < 78) {
          times.push(-1)
          if (list) {
            recipes.push(list.shift())
          } else {
            recipes.push(_generator())
          }
        }

        return {
          recipes: recipes,
          times: times,
          id: this.$route.meta.generator ? ID++ : this.$route.meta.list,
          config: config
        }
      }
    }
  }
</script>

<style scoped>
  .md-wrap {
    margin: 6px 6px;
    justify-content: space-around;
    align-items: flex-start;
  }

  .md-wrap > * {
    display: flex;
    margin: 6px 6px;
  }

  .spacer {
    margin-top: 0;
    margin-bottom: 0;
  }

  canvas {
    max-width: inherit;
    display: block;
  }

  .md-body-2 {
    padding: 4px 8px;
  }

  .md-card .md-title {
    padding: 8px 16px;
    color: rgba(0, 0, 0, 0.87) !important;
  }

  .right {
    text-align: right;
    padding-right: 4px;
  }

  .mono {
    font-family: "Roboto Mono", monospace;
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    letter-spacing: 0;
  }

  .pre {
    white-space: pre;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    letter-spacing: 0;
    padding: 8px 8px 8px 8px;
  }

  .md-theme-default a:not(.md-button):hover {
    text-decoration: none;
    color: inherit;
  }

  .md-theme-default a:not(.md-button) {
    color: inherit;
  }
</style>
