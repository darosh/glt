<!--Based on https://github.com/lepture/vui-->

<template>
  <div class="v-range-slider">
    <input type="range" :value="value" :min="min" :max="max" :step="step" :name="name" v-on:input="updateValue($event.target.value)">
  </div>
</template>

<script>
  export default {
    props: {
      min: {
        type: Number
      },
      max: {
        type: Number
      },
      step: {
        type: Number
      },
      name: {
        type: String
      },
      value: {
        type: Number
      }
    },
    methods: {
      updateValue: function (value) {
        this.$emit('input', Number(value))
      }
    }
  }
</script>

<style>
  :root {
    --android-green: #2196f3;
  }

  .v-range-slider {
    display: flex;
    align-items: center;
  }

  .v-range-slider input[type=range] {
    -webkit-appearance: none;
    flex: 1;
    display: block;
    /*overflow: hidden;*/
    margin: 0;
    padding: 16px 1px 20px;
    box-sizing: border-box;
    outline: none;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }

  .v-range-slider input::-webkit-slider-runnable-track {
    position: relative;
    height: 2px;
    background: #BDBDBD;
    border: none;
    border-radius: 1px;
  }

  .v-range-slider input::-webkit-slider-thumb {
    -webkit-appearance: none;
    position: relative;
    margin-top: -12px;
    cursor: pointer;
    width: 14px;
    height: 14px;
    border: 0;
    border-radius: 50%;
    background: white;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  }

  .v-range-slider input::-webkit-slider-thumb:before {
    position: absolute;
    display: inline-block;
    content: '';
    top: 12px;
    left: -2001px;
    width: 2000px;
    height: 2px;
  }

  .v-range-slider input::-webkit-slider-thumb:before {
    background: var(--android-green);
    top: 9px;
  }
  .v-range-slider input::-webkit-slider-thumb {
    background: var(--android-green);
    border: 0;
    box-shadow: none;
    width: 14px;
    height: 14px;
    margin-top: -5px;
  }

  .v-range-slider input::-moz-range-track {
    /*width: 300px;*/
    height: 2px;
    background: #BDBDBD;
    border: none;
    border-radius: 1px;
  }
  .v-range-slider input::-moz-range-thumb {
    border: none;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: var(--android-green);
  }
</style>
