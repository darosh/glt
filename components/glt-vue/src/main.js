// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import mdCore from 'vue-material/dist/components/mdCore'
import mdBackdrop from 'vue-material/dist/components/mdBackdrop'
import mdButton from 'vue-material/dist/components/mdButton'
import mdCard from 'vue-material/dist/components/mdCard'
import mdIcon from 'vue-material/dist/components/mdIcon'
import mdLayout from 'vue-material/dist/components/mdLayout'
import mdList from 'vue-material/dist/components/mdList'
import mdMenu from 'vue-material/dist/components/mdMenu'
import mdRadio from 'vue-material/dist/components/mdRadio'
import mdSidenav from 'vue-material/dist/components/mdSidenav'
import mdSwitch from 'vue-material/dist/components/mdSwitch'
import mdToolbar from 'vue-material/dist/components/mdToolbar'
import mdWhiteframe from 'vue-material/dist/components/mdWhiteframe'
import mdTabs from 'vue-material/dist/components/mdTabs'
import mdTable from 'vue-material/dist/components/mdTable'
import mdAvatar from 'vue-material/dist/components/mdAvatar'
import mdInputContainer from 'vue-material/dist/components/mdInputContainer'
import mdCheckbox from 'vue-material/dist/components/mdCheckbox'
import mdTooltip from 'vue-material/dist/components/mdTooltip'
import mdDivider from 'vue-material/dist/components/mdDivider'

import vueScroll from 'vue-scroll'

Vue.use(vueScroll)

Vue.use(mdCore)
Vue.use(mdBackdrop)
Vue.use(mdButton)
Vue.use(mdCard)
Vue.use(mdIcon)
Vue.use(mdLayout)
Vue.use(mdList)
Vue.use(mdMenu)
Vue.use(mdRadio)
Vue.use(mdSidenav)
Vue.use(mdSwitch)
Vue.use(mdToolbar)
Vue.use(mdWhiteframe)
Vue.use(mdTabs)
Vue.use(mdTable)
Vue.use(mdAvatar)
Vue.use(mdInputContainer)
Vue.use(mdCheckbox)
Vue.use(mdTooltip)
Vue.use(mdDivider)

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'white',
  warn: 'deep-orange',
  background: 'white'
})

Vue.material.registerTheme('light', {
  primary: {
    color: 'grey',
    hue: '300'
  },
  accent: 'blue',
  warn: 'deep-orange',
  background: 'white'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
