<template>
  <div class="main-content">
    <md-layout>
      <md-layout>
        <md-tabs class="md-transparent" :md-dynamic-height="false" v-on:change="tab = $event">
          <!--<md-tab id="tab-1" md-label="Components">-->
          <!--<div>Components</div>-->
          <!--</md-tab>-->
          <!--<md-tab id="tab-2" md-label="Uniforms">-->
          <!--<div>Uniforms</div>-->
          <!--</md-tab>-->
          <md-tab id="tab-3" md-label="Data"></md-tab>
          <md-tab id="tab-4" md-label="Shader"></md-tab>
        </md-tabs>

        <md-layout v-if="!tab" md-column class="padding">
          <md-layout md-row md-gutter md-align="start" class="no-flex">
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
          <textarea class="mono pre" style="flex: 1; overflow-y: auto; width: 100%" v-model="dataEdit"
                    :disabled="dataView !== 'Graph'"
                    v-on:change="dataChanged($event)"
                    v-on:keyup="dataChanged($event)"></textarea>
        </md-layout>

        <md-layout v-else-if="tab === 1" md-column class="padding">
          <md-layout md-row md-gutter md-align="start" class="no-flex">
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
          <md-layout md-flex class="mono pre" style="flex: 1; overflow-y: auto">{{shader}}</md-layout>
        </md-layout>

      </md-layout>
      <md-layout md-column class="no-flex">
        <draw :recipe="recipe" :size="config.editSize"
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

  export default {
    name: 'edit',
    components: {
      draw: draw,
      histogram: histogram
    },
    data: function () {
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
        updateHistogram: 0
      }
    },
    methods: {
      toCJSON: function (o) {
        return CJSON(o)
      },
      dataChanged: function (e) {
        if (this.dataView === 'Graph') {
          try {
            let o = JSON.parse(e.target.value)
            this.recipe = o
          } catch (ign) {}
        }
      },
      updateData: function (compiled) {
        this.data = {
          Graph: this.recipe,
          Tree: compiled.tree,
          Syntax: compiled.syntax
        }
      },
      updateShader: function () {
        this.shader = this.getShader(this.recipe, this.shaderTarget, this.shaderType, this.multiLine)[this.shaderView.toLowerCase()]
      },
      getShader: function (recipe, shaderTarget, shaderType, multiLine) {
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

  .md-card {
    padding-left: 16px;
    padding-right: 8px;
    margin-right: 16px;
    margin-bottom: 16px;
  }

  .no-flex {
    flex: initial !important;
  }

  .md-card, textarea {
    border: 1px solid rgba(0, 0, 0, .12);
    box-shadow: none;
  }

  textarea {
    resize: none;
    border-radius: 2px;
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
    padding: 161px 16px 16px 16px;
    height: 100vh;
    margin-top: -145px
  }
</style>
