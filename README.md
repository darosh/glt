# glt

[WebGL](https://en.wikipedia.org/wiki/WebGL)/[GLSL](https://en.wikipedia.org/wiki/OpenGL_Shading_Language) Procedural Texture Generator

> _We all began as something [else&hellip;](https://github.com/darosh/texgen-explorer)_

__Early stage! Work in progress!__

## Demo

[darosh.github.io/glt/components/glt-app/dist/](https://darosh.github.io/glt/components/glt-app/dist/index.html)

## Components

### glt

- [x] compile graph JSON format to shader
- [x] shader format [Three.js](https://threejs.org/)
- [x] shader format [GLSL Sandbox](http://glslsandbox.com/)
- [x] shader format [Shadertoy](https://shadertoy.com/)
- [x] Three.js based renderer

### glt-app

[components/glt-app/dist/](https://darosh.github.io/glt/components/glt-app/dist/index.html)

- [x] angular-cli based single page application
- [x] reusing single rendering context

### glt-vue

[components/glt-vue/dist/](https://darosh.github.io/glt/components/glt-vue/dist/)

- [x] vue.js based single page application, replacing glt-app

### glt-extractor

- [x] build utility parsing GLSL functions to JSON with dependencies

### glt-minify

- [x] reducing whitespaces in GLSL
- [x] based on glsl-parser and glsl-deparser

### glt-samples

- [x] testing samples in graph JSON format
- [x] demo samples in graph JSON format
