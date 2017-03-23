<template>
  <md-theme md-name="light">
    <md-toolbar class="md-dense">
      <div class="md-toolbar-container">
        <h3 class="md-subheading">Size</h3>
      </div>
    </md-toolbar>
    <md-list>
      <md-list-item v-for="(item, index) in config.editSizes" :key="index">
        <md-radio v-model="config.editSizeIndex"
                  v-on:change="config.editSize = config.editSizes[$event]"
                  :md-value="index" :name="'edit-size-' + index" :id="'edit-size-' + index">
          {{item[0]}} &times; {{item[1]}}
        </md-radio>
      </md-list-item>
    </md-list>
  </md-theme>
</template>

<script>
  import config from '../services/config'

  export default {
    name: 'optionsConfig',
    data: function () {
      return {
        config: config
      }
    }
  }
</script>
