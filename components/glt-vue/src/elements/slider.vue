<template>
  <input ref="input"
         type="range"
         class="mdl-slider mdl-js-slider"
         :min="min"
         :max="max"
         :step="step"
         v-model="valueNumber"
         @input="onInput"
         :disabled="disabled">
</template>

<script>
  export default {
    computed: {
      valueNumber () {
        return Number(this.value)
      },
      stepNumber () {
        return Number(this.step)
      },
      minNumber () {
        return Number(this.min)
      },
      maxNumber () {
        return Number(this.max)
      },
      relativeValue () {
        const val = Math.round((this.valueNumber - this.minNumber) / this.stepNumber) * this.stepNumber
        return val / (this.maxNumber - this.minNumber)
      }
    },
    props: {
      value: {
        type: [String, Number],
        required: true
      },
      step: {
        type: [String, Number],
        default: 1
      },
      min: {
        type: [String, Number],
        default: 0
      },
      max: {
        type: [String, Number],
        required: true
      },
      disabled: {
        required: false
      }
    },
    methods: {
      onInput ({target: {value}}) {
        this.$emit('input', typeof this.value === 'string' ? value : Number(value)
        )
      }
    },
    mounted () {
      /* eslint-disable no-undef */
      componentHandler.upgradeElement(this.$el, 'MaterialSlider')
    }
  }
</script>
