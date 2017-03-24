<template>
  <div class="main-content">
    <md-tabs md-elevation="1" :md-dynamic-height="false">
      <md-tab id="tab-1" md-label="Table">
        <md-table-card v-show="prototypesArray.length">
          <md-table md-sort="calories" @sort="prototypesArray = sort(prototypesArray, $event)">
            <md-table-header>
              <md-table-row>
                <md-table-head md-sort-by="4"></md-table-head>
                <md-table-head md-sort-by="0">Type</md-table-head>
                <md-table-head md-sort-by="1">Output</md-table-head>
                <md-table-head md-sort-by="5" md-numeric>Inputs</md-table-head>
                <md-table-head md-sort-by="6" md-numeric>COLOR</md-table-head>
                <md-table-head md-sort-by="7" md-numeric>VALUE</md-table-head>
                <md-table-head md-sort-by="8" md-numeric>POSITION</md-table-head>
                <md-table-head md-sort-by="9" md-numeric>Params</md-table-head>
                <md-table-head md-sort-by="2">Name</md-table-head>
                <md-table-head md-sort-by="3">Signature</md-table-head>
              </md-table-row>
            </md-table-header>
            <md-table-body>
              <md-table-row v-for="(row, index) in prototypesArray" :key="index">
                <md-table-cell>
                  <md-avatar class="md-avatar-icon"
                             :class="{'md-primary': row[1] === 'vec3', 'md-warn': row[1] === 'vec2'}">
                    <md-icon v-if="row[0] === 'blend'">call_merge</md-icon>
                    <md-icon v-else-if="row[0] === 'colorize'">group_work</md-icon>
                    <md-icon v-else-if="row[0] === 'desaturate'">fiber_manual_record</md-icon>
                    <md-icon v-else-if="row[0] === 'generator'">photo</md-icon>
                    <md-icon v-else-if="row[0] === 'modify'">tune</md-icon>
                    <md-icon v-else-if="row[0] === 'transform'">open_with</md-icon>
                  </md-avatar>
                </md-table-cell>
                <md-table-cell>{{row[0]}}</md-table-cell>
                <md-table-cell class="mono">{{row[1]}}</md-table-cell>
                <md-table-cell class="md-body-1" md-numeric>{{row[5]}}</md-table-cell>
                <md-table-cell class="md-body-1" md-numeric :class="row[6] ? 'number' : 'zero'">{{row[6]}}
                </md-table-cell>
                <md-table-cell class="md-body-1" md-numeric :class="row[7] ? 'number' : 'zero'">{{row[7]}}
                </md-table-cell>
                <md-table-cell class="md-body-1" md-numeric :class="row[8] ? 'number' : 'zero'">{{row[8]}}
                </md-table-cell>
                <md-table-cell class="md-body-1" md-numeric :class="row[9] ? 'number' : 'zero'">{{row[9]}}
                </md-table-cell>
                <md-table-cell class="md-body-2">{{row[2]}}</md-table-cell>
                <md-table-cell class="mono">{{row[3]}}</md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>
        </md-table-card>
      </md-tab>
      <md-tab id="tab-2" md-label="Data">
        <div class="mono pre">{{prototypes}}</div>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
  export default {
    name: 'prototypes',
    data: function () {
      setTimeout(() => {
        this.prototypesArray = glt.all
          .map(function (v) {
            return [
              v.type,
              v.output,
              v.name,
              glt.getSignature(v),
              v.type + v.name + v.output,
              v.input.length,
              v.input.filter(d => d[1] === 'COLOR').length,
              v.input.filter(d => d[1] === 'VALUE').length,
              v.input.filter(d => d[1] === 'POSITION').length,
              v.input.filter(d => d[1] !== 'COLOR' && d[1] !== 'VALUE' && d[1] !== 'POSITION').length
            ]
          })
      })

      return {
        scrolled: false,
        sortBy: null,
        prototypes: CJSON(glt.all),
        prototypesArray: []
      }
    },
    methods: {
      onScroll: function (e, p) {
        this.scrolled = p.scrollTop > 0
      },
      sort: function (v, by) {
        if (by) {
          v.sort(function (a, b) {
            return (by.type === 'asc' ? 1 : -1) * a[by.name].toString().localeCompare(b[by.name].toString())
          })
        }
        return v
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
    white-space: pre;
  }

  .zero {
    color: rgba(0, 0, 0, 0.12);
  }
</style>
