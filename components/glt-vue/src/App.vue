<template>
  <div id="app" class="container">
    <md-toolbar class="md-whiteframe-1dp" v-bind:style="{'z-index': $route.meta.tabs && !scrolled ? null : 1}">
      <md-button v-if="$route.meta.menu" class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">glt</h2>

      <router-link to="/" class="md-link-button">
        <md-button class="md-icon-button">
          <md-icon>edit</md-icon>
          <md-tooltip>Edit</md-tooltip>
        </md-button>
      </router-link>

      <router-link to="/palettes" class="md-link-button">
        <md-button class="md-icon-button">
          <md-icon>palette</md-icon>
          <md-tooltip>Random palettes</md-tooltip>
        </md-button>
      </router-link>

      <router-link to="/features" class="md-link-button">
        <md-button class="md-icon-button">
          <md-icon>collections</md-icon>
          <md-tooltip>Features</md-tooltip>
        </md-button>
      </router-link>

      <router-link to="/samples" class="md-link-button">
        <md-button class="md-icon-button">
          <md-icon>collections_bookmarked</md-icon>
          <md-tooltip>Samples</md-tooltip>
        </md-button>
      </router-link>

      <md-menu md-direction="bottom left">
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>more_vert</md-icon>
        </md-button>

        <md-menu-content>
          <md-menu-item v-on:selected="go('/tests')">
            <span>Tests</span>
            <md-icon>library_books</md-icon>
          </md-menu-item>
          <md-menu-item v-on:selected="go('/prototypes')">
            <span>Prototypes</span>
          </md-menu-item>
          <md-menu-item v-on:selected="go('/extractor')">
            <span>Extractor</span>
          </md-menu-item>
          <md-menu-item v-on:selected="nav('https://github.com/darosh/glt/')">
            <span>Github</span>
          </md-menu-item>
        </md-menu-content>
      </md-menu>

    </md-toolbar>

    <div v-scroll="onScroll" class="main-content">
      <router-view ref="view"></router-view>
    </div>

    <md-sidenav class="md-left" ref="leftSidenav" md-fixed md-swipeable @open="open('Left')" @close="close('Left')">
      <options-list v-if="$route.meta.menu === 'thumbnails'"></options-list>
      <options-edit v-else-if="$route.meta.menu === 'edit'"></options-edit>
    </md-sidenav>

    <md-button v-if="$route.meta.refresh" v-on:click.native="onRefresh()" class="md-fab md-fab-bottom-right md-primary">
      <md-icon>refresh</md-icon>
    </md-button>
  </div>
</template>

<script>
  import config from './services/config'
  import OptionsList from './components/OptionsList'
  import OptionsEdit from './components/OptionsEdit'

  export default {
    name: 'app',
    components: {
      'options-list': OptionsList,
      'options-edit': OptionsEdit
    },
    watch: {
      $route: function () {
        this.scrolled = false
      }
    },
    methods: {
      onRefresh: function () {
        this.$refs.view.refresh()
      },
      onScroll: function (e, p) {
        this.scrolled = p.scrollTop > 0
      },
      toggleLeftSidenav: function () {
        this.$refs.leftSidenav.toggle()
      },
      open: function () {
      },
      close: function () {
      },
      go: function (to) {
        this.$router.push(to)
      },
      nav: function (to) {
        window.open(to)
      }
    },
    data: function () {
      return {
        scrolled: false,
        config: config
      }
    }
  }
</script>

<style>
  html,
  body {
    height: 100%;
    overflow: hidden;
  }

  body {
    display: flex;
  }

  .container {
    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
  }

  .main-content {
    /*padding: 16px;*/
    flex: 1;
    overflow: auto;
    transform: translate3D(0, 0, 0);
    background-color: #fafafa;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @import "../node_modules/vue-material/dist/components/mdBackdrop/index.css";
  @import "../node_modules/vue-material/dist/components/mdButton/index.css";
  @import "../node_modules/vue-material/dist/components/mdCard/index.css";
  @import "../node_modules/vue-material/dist/components/mdCore/index.css";
  @import "../node_modules/vue-material/dist/components/mdIcon/index.css";
  @import "../node_modules/vue-material/dist/components/mdLayout/index.css";
  @import "../node_modules/vue-material/dist/components/mdList/index.css";
  @import "../node_modules/vue-material/dist/components/mdMenu/index.css";
  @import "../node_modules/vue-material/dist/components/mdRadio/index.css";
  @import "../node_modules/vue-material/dist/components/mdSidenav/index.css";
  @import "../node_modules/vue-material/dist/components/mdSwitch/index.css";
  @import "../node_modules/vue-material/dist/components/mdToolbar/index.css";
  @import "../node_modules/vue-material/dist/components/mdWhiteframe/index.css";
  @import "../node_modules/vue-material/dist/components/mdTabs/index.css";
  @import "../node_modules/vue-material/dist/components/mdTable/index.css";
  @import "../node_modules/vue-material/dist/components/mdAvatar/index.css";
  @import "../node_modules/vue-material/dist/components/mdInputContainer/index.css";
  @import "../node_modules/vue-material/dist/components/mdCheckbox/index.css";
  @import "../node_modules/vue-material/dist/components/mdTooltip/index.css";

  .md-theme-default a.md-link-button {
    /*color: #fff !important;*/
  }

  .md-title {
    color: #fff !important;
  }

  .md-theme-light .md-subheading {
    color: #757575 !important;
    padding-left: 8px;
  }
</style>