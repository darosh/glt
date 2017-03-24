<template>
  <div class="main-content">
    <md-tabs md-elevation="1">
      <md-tab id="tab-1" md-label="Source">
        <div class="mono pre">{{source}}</div>
      </md-tab>
      <md-tab id="tab-2" md-label="Extracted">
        <div class="mono pre">{{extracted}}</div>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
  export default {
    name: 'extractor',
    data () {
      return {
        source: glt.GLSL[0] === '\n' ? glt.GLSL.slice(1) : glt.GLSL,
        extracted: CJSON(glt.getFragments())
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
</style>
