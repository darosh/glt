import Vue from 'vue'
import Router from 'vue-router'

import Edit from '../components/Edit'
import List from '../components/List'
import Prototypes from '../components/Prototypes'
import Extractor from '../components/Extractor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Edit,
      meta: {
        menu: 'edit'
      }
    },
    {
      path: '/edit/:json',
      name: 'Edit',
      component: Edit,
      meta: {
        menu: 'edit'
      }
    },
    {
      path: '/palettes',
      name: 'Palettes',
      component: List,
      meta: {
        menu: 'thumbnails',
        generator: 'generatorRandomPalette',
        refresh: true
      }
    },
    {
      path: '/features',
      name: 'Features',
      component: List,
      meta: {
        menu: 'thumbnails',
        list: 'generatorGenerators'
      }
    },
    {
      path: '/samples',
      name: 'Samples',
      component: List,
      meta: {
        menu: 'thumbnails',
        list: 'samplesDemo'
      }
    },
    {
      path: '/tests',
      name: 'Tests',
      component: List,
      meta: {
        menu: 'thumbnails',
        list: 'samplesTest'
      }
    },
    {
      path: '/prototypes',
      name: 'Prototypes',
      component: Prototypes,
      meta: {tabs: true}
    },
    {
      path: '/extractor',
      name: 'Extractor',
      component: Extractor,
      meta: {tabs: true}
    }
  ]
})
