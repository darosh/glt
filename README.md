# glt

[WebGL](https://en.wikipedia.org/wiki/WebGL)/[GLSL](https://en.wikipedia.org/wiki/OpenGL_Shading_Language) Procedural Texture Generator

> _We all began as something [else&hellip;](https://github.com/darosh/texgen-explorer)_

__Early stage! Work in progress!__

## Demo

_Desktop Chrome should work._

### [glt-vue](https://darosh.github.io/glt/components/glt-vue/dist/)

Powered by:

- [vue](https://github.com/vuejs/vue)
- [vue-material](https://github.com/marcosmoura/vue-material)
- [material-design-lite](https://github.com/google/material-design-lite) for slider

### [glt-ng4](https://darosh.github.io/glt/components/glt-ng4/dist/index.html)

Powered by:

- [angular](https://github.com/angular/angular) 
- [material2](https://github.com/angular/material2) 
- [flex-layout](https://github.com/angular/flex-layout)

### vue vs ng4 notes

_I am new to both ng2/ng4 and vue._

#### vue
- smaller footprint
- easier to learn
- faster development state preserving hot reload
- route using same component preserves the component, it means less _new \<canvas\>_ created
- UI components: 
  - mostly missing focus highlight
  - vue-mdl might be better choice?
  - cross-browser compatibility
  - future? perhaps [MDC](https://github.com/material-components/material-components-web/tree/master/framework-examples/vue)?
- sometimes feels (in a good way) more like AngularJS than Angular 2
  
#### ng4
- switched from ng2/ts, and ng2/js before, js was purely documented
- experimental Angular 4.0.0
- ng4 smaller than ng2, also faster dev reload
- slower app loading, but ng4 is better than ng2
- bigger download size
- more browser memory used
- UI components backed by Google

## Components

### glt

- [x] compile graph JSON format to shader
- [x] shader format [Three.js](https://threejs.org/)
- [x] shader format [GLSL Sandbox](http://glslsandbox.com/)
- [x] shader format [Shadertoy](https://shadertoy.com/)
- [x] Three.js based renderer

### glt-vue

[components/glt-vue/dist/](https://darosh.github.io/glt/components/glt-vue/dist/)

- [x] vue.js based single page application

### glt-ng4

[components/glt-ng4/dist/](https://darosh.github.io/glt/components/glt-ng4/dist/index.html)

- [x] angular-cli based single page application
- [x] reusing single rendering context

### glt-extractor

- [x] build utility parsing GLSL functions to JSON with dependencies

### glt-minify

- [x] reducing whitespaces in GLSL
- [x] based on glsl-parser and glsl-deparser

### glt-samples

- [x] testing samples in graph JSON format
- [x] demo samples in graph JSON format
