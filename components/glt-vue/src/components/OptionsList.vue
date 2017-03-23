<template>
  <md-theme md-name="light">
    <md-toolbar class="md-dense">
      <div class="md-toolbar-container">
        <h3 class="md-subheading">Show</h3>
      </div>
    </md-toolbar>

    <md-list>
      <md-list-item>
        <md-switch v-model="config.time" id="config-time" name="config-time">Time</md-switch>
      </md-list-item>
      <md-list-item>
        <md-switch v-model="config.code" id="config-code" name="config-code">Code</md-switch>
      </md-list-item>
      <md-list-item>
        <md-switch v-model="config.partials" id="config-partials" name="config-partials">
          Partials


        </md-switch>
      </md-list-item>
    </md-list>

    <md-toolbar class="md-dense">
      <div class="md-toolbar-container">
        <h3 class="md-subheading">Size</h3>
      </div>
    </md-toolbar>
    <md-list>
      <md-list-item v-for="(item, index) in config.thumbnailSizes" :key="index">
        <md-radio v-model="config.thumbnailSizeIndex"
                  v-on:change="config.thumbnailSize = config.thumbnailSizes[$event]"
                  :md-value="index" :name="'thumb-size-' + index" :id="'thumb-size-' + index">
          {{item[0]}} &times; {{item[1]}}


        </md-radio>
      </md-list-item>
    </md-list>
  </md-theme>
</template>

<script>
  import config from '../services/config'

  export default {
    name: 'optionsList',
    data: function () {
      return {
        config: config
      }
    }
  }
</script>
