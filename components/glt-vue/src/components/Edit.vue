<template>
  <div class="main-content" style="height: 100%">
    <md-layout md-row style="height: 100%">
      <md-layout md-column>
        <md-tabs class="md-transparent" :md-dynamic-height="false" v-on:change="tab = $event">
          <md-tab id="tab-1" md-label="Components"></md-tab>
          <!--<md-tab id="tab-2" md-label="Uniforms">-->
          <!--<div>Uniforms</div>-->
          <!--</md-tab>-->
          <md-tab id="tab-3" md-label="Data"></md-tab>
          <md-tab id="tab-4" md-label="Shader"></md-tab>
        </md-tabs>

        <md-layout v-if="tab === 0 && compiled" md-column>
          <div class="scroll-y padding">
            <md-layout md-row md-gutter>
              <div v-for="(item, index) in compiled.ids" class="margin">
                <md-card style="min-width: 256px">
                  <span class="md-title">{{item[0]}}</span>
                  <div v-for="(v, i) in compiled.uniforms" class="margin" v-if="v.id == index">
                    <span class="md-subheading">{{v.proto[1]}}</span>
                    <md-layout v-if="!v.value.length" class="params">
                      <div>
                        <slider v-model="v.value" v-on:input="v.value = $event, updateParam(v)" :min="v.proto[3][0]" :max="v.proto[3][1]" :step="0.01"></slider>
                      </div>
                      <div>
                        <md-input-container>
                          <md-input v-model.number="v.value" type="number"></md-input>
                        </md-input-container>
                      </div>
                    </md-layout>
                    <md-layout v-else v-for="(w, u) in v.value" :key="u" class="params">
                      <div>
                        <slider v-model="v.value[u]" v-on:input="v.value[u] = $event, updateParam(v)" :min="v.proto[3][0]" :max="v.proto[3][1]" :step="0.01"></slider>
                      </div>
                      <div>
                        <md-input-container>
                          <md-input v-model.number="v.value[u]" type="number"></md-input>
                        </md-input-container>
                      </div>
                    </md-layout>
                  </div>
                </md-card>
              </div>
            </md-layout>
          </div>
        </md-layout>

        <md-layout v-else-if="tab === 1" md-column class="padding-side">
          <md-layout md-row md-gutter md-align="start" class="no-flex padding-top">
            <md-card class="md-whiteframe-1dp">
              <div>
                <md-radio
                  v-for="(item, index) in dataViews" :key="index"
                  v-model="dataView"
                  v-on:change="dataView = $event, dataEdit = toCJSON(data[dataView])"
                  class="md-primary"
                  :md-value="item"
                  :name="'data-view-' + index"
                  :id="'data-view-' + index">
                  {{item}}
                </md-radio>
              </div>
            </md-card>
          </md-layout>
          <textarea class="mono pre padding-bottom scroll-y" style="flex: 1; width: 100%" v-model="dataEdit"
                    :disabled="dataView !== 'Graph'"
                    v-on:change="dataChanged($event)"
                    v-on:keyup="dataChanged($event)"></textarea>
        </md-layout>

        <md-layout v-else-if="tab === 2" md-column class="padding-side">
          <md-layout md-row md-gutter md-align="start" class="no-flex padding-top">
            <md-card class="md-whiteframe-1dp">
              <div>
                <md-radio
                  v-on:change="shaderView = $event, updateShader()"
                  v-for="(item, index) in shaderViews" :key="index"
                  v-model="shaderView"
                  class="md-primary"
                  :md-value="item"
                  :name="'shader-view-' + index"
                  :id="'shader-view-' + index">
                  {{item}}


                </md-radio>
              </div>
            </md-card>
            <md-card class="md-whiteframe-1dp">
              <div>
                <md-radio
                  v-on:change="shaderTarget = $event, updateShader()"
                  v-for="(item, index) in shaderTargets" :key="index"
                  v-model="shaderTarget"
                  class="md-primary"
                  :md-value="item"
                  :name="'shader-target-' + index"
                  :id="'shader-target-' + index">{{item}}


                </md-radio>
              </div>
            </md-card>
            <md-card class="md-whiteframe-1dp">
              <div>
                <md-radio
                  v-on:change="shaderType = $event, updateShader()"
                  v-for="(item, index) in shaderTypes" :key="index"
                  v-model="shaderType"
                  class="md-primary"
                  :md-value="item"
                  :name="'shader-type-' + index"
                  :id="'shader-type-' + index">{{item}}
                </md-radio>
              </div>
            </md-card>
            <md-card class="md-whiteframe-1dp">
              <md-checkbox
                v-on:change="multiLine = $event, updateShader()"
                id="shader-multi-line"
                name="shader-multi-line"
                v-model="multiLine"
                class="md-primary">Multi line
              </md-checkbox>
            </md-card>
          </md-layout>

          <textarea class="mono pre padding-bottom scroll-y" style="flex: 1; width: 100%" v-model="shader"
                    disabled></textarea>
        </md-layout>

      </md-layout>
      <md-layout md-column class="no-flex">
        <draw :recipe="recipe"
              :size="config.editSize"
              direct="true"
              histogram="true"
              v-on:compiled="updateData($event)"
              v-on:histogram="updateHistogram = $event"
              :style="{width: config.editSize[0] + 'px', height: config.editSize[1] + 'px'}"
              class="md-whiteframe-1dp"></draw>
        <histogram
          :render="updateHistogram"
          :dark="config.histogramDark"
          :curve="config.histogramCurve"
          :size="[config.editSize[0], config.editSize[0] / 2]"
          class="md-whiteframe-1dp"></histogram>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>
  import draw from './Draw'
  import histogram from './Histogram'
  import config from '../services/config'
  import slider from './Slider'
//  import Vue from 'vue'

  export default {
    name: 'edit',
    components: {
      draw: draw,
      histogram: histogram,
      slider: slider
    },
    data () {
      const recipe = this.$route.params.json ? JSON.parse(this.$route.params.json) : glt.samplesDemo[0]
      return {
        tab: 0,
        recipe: recipe,
        config: config,
        dataView: 'Graph',
        dataViews: ['Graph', 'Tree', 'Syntax'],
        shaderView: 'All',
        shaderViews: ['All', 'Color', 'Functions', 'Variables'],
        shaderTarget: 'Three.js',
        shaderTargets: ['Three.js', 'glslsandbox.com', 'shadertoy.com'],
        shaderType: 'Define',
        shaderTypes: ['Define', 'Uniforms', 'Inline'],
        multiLine: false,
        shader: this.getShader(recipe, 'Three.js', 'Define', false)['all'],
        data: {
          Graph: recipe
        },
        dataEdit: this.toCJSON(recipe),
        updateHistogram: 0,
        compiled: null
      }
    },
    methods: {
      toCJSON (o) {
        return CJSON(o)
      },
      updateParam (v) {
        this.valueToGraph(this.compiled.ids, v)
        this.recipe = Object.assign({}, this.compiled.graph)
      },
      valueToGraph (ids, value) {
        glt.valueToGraph(ids, value)
//        Vue.set(ids[value.id], value.index, value.value)
      },
      dataChanged (e) {
        if (this.dataView === 'Graph') {
          try {
            let o = JSON.parse(e.target.value)
            this.recipe = o
          } catch (ign) {}
        }
      },
      updateData (compiled) {
        this.data = {
          Graph: compiled.graph,
          Tree: compiled.tree,
          Syntax: compiled.syntax
        }
        this.compiled = compiled
        this.dataEdit = this.toCJSON(this.data[this.dataView])
      },
      updateShader () {
        this.shader = this.getShader(this.recipe, this.shaderTarget, this.shaderType, this.multiLine)[this.shaderView.toLowerCase()]
      },
      getShader (recipe, shaderTarget, shaderType, multiLine) {
        const shaders = {
          'Three.js': glt.getShaderThree,
          'glslsandbox.com': glt.getShaderGlslSandbox,
          'shadertoy.com': glt.getShaderShadertoy
        }

        const vars = {
          Define: 2,
          Uniforms: 1,
          Inline: 0
        }

        return glt.formatShader(
          recipe,
          vars[shaderType],
          multiLine,
          {},
          shaders[shaderTarget]
        )
      }
    }
  }
</script>

<style scoped>
  .mono {
    font-family: "Roboto Mono", monospace;
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    letter-spacing: 0;
  }

  .pre {
    white-space: pre-wrap;
  }

  .no-flex {
    flex: initial !important;
  }

  .md-card.md-whiteframe-1dp, textarea {
    padding-left: 16px;
    padding-right: 8px;
    margin-right: 16px;
    margin-bottom: 16px;
    border: 1px solid rgba(0, 0, 0, .12);
    box-shadow: none;
  }

  textarea {
    resize: none;
    border-radius: 2px;
    margin: 0;
    padding: 0;
  }

  textarea:focus {
    outline: none;
  }

  textarea:disabled {
    background-color: transparent;
    border: none;
  }

  .md-tabs .md-tab {
    padding: 0;
  }

  .padding {
    padding: 8px;
  }

  .md-title {
    color: rgba(0, 0, 0, .87) !important;
    padding: 8px 16px;
  }

  .margin {
    margin: 8px;
  }

  .padding-top {
    margin: 16px 0 0 0;
  }

  .padding-bottom {
    margin-bottom: 16px;
  }

  .padding-side {
    padding: 0 16px;
  }

  .scroll-y {
    overflow-y: auto;
  }

  .v-range-slider {
    margin-top: 10px;
    margin-right: 8px;
    width: 160px;
    margin-bottom: -8px;
  }

  .md-input-container {
    width: 60px;
    min-height: 0;
    margin: -4px 0 4px;
    padding-top: 0;
  }

  .md-subheading {
    margin-bottom: -16px;
    padding-left: 8px;
    display: block;
  }

  .params {
    padding: 0 6px;
  }
</style>
