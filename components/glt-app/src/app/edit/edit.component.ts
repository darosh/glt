import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ConfigService} from "../services/config.service";
import {RenderService} from "../services/render.service";

import {glt, CJSON} from '../../vendor';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  indexFn = (i) => i;
  config;
  render;

  route;
  view;
  compiled;
  display;

  source;
  syntax;
  syntaxJson;
  graph;
  graphJson;
  tree;
  treeJson;

  constructor(config: ConfigService, render: RenderService, route: ActivatedRoute) {
    this.config = config;
    this.render = render;
    this.route = route;
    this.render.renderer.size(512);
    this.view = {data: 'graph', shader: 'all', type: 'three', vars: 2, multi: false};

    this.source = this.route.params.value.json
      ? JSON.parse(this.route.params.value.json)
      : glt.samplesDemo[0];
  }

  ngOnInit() {
    glt.select('#canvas').appendChild(this.render.canvas);
    this.sourceChanged();
  }

  change(e, v) {
    glt.valueToGraph(this.compiled.ids, v);
    this.graphJson = CJSON(this.graph);
    this.render.renderer.update();
  }

  sourceChanged() {
    this.compiled = glt.compile(this.source, 1);
    this.graph = this.compiled.graph;
    this.tree = this.compiled.tree;
    this.graphJson = CJSON(this.graph);
    this.treeJson = CJSON(this.tree);
    this.graphChanged();
  }

  graphChanged() {
    this.treeChanged();
  }

  treeChanged() {
    this.syntaxJson = CJSON(this.compiled.syntax);
    this.render.renderer.render(this.compiled.shader, this.compiled.code, this.compiled.uniforms);

    for (let key in this.compiled.uniforms) {
      this.compiled.uniforms[key].animate = this.compiled.uniforms[key].value.length ? [] : true;
    }

    this.updateDisplay();
  }

  updateDisplay() {
    const shaders = {
      three: glt.getShaderThree,
      glsl: glt.getShaderGlslSandbox,
      toy: glt.getShaderShadertoy,
    };
    this.display = glt.formatShader(this.tree, parseInt(this.view.vars), this.view.multi, this.compiled.uniforms, shaders[this.view.type]);
  }

  randomize() {
    this.treeJson = CJSON(glt.randomTree2());
    this.treeChanged();
  }
}
