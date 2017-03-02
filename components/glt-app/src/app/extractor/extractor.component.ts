import {Component, OnInit} from '@angular/core';

import {glt} from '../../vendor';

@Component({
  selector: 'app-extractor',
  templateUrl: './extractor.component.html',
  styleUrls: ['./extractor.component.css']
})
export class ExtractorComponent implements OnInit {
  source;
  extracted;
  input;
  output;

  constructor() {
    this.source = glt.GLSL;
    this.extracted = glt.toJson(glt.getFragments());
    const libs = ['SinX', 'SinXY', 'WorleyF1', 'pnoise'];
    this.input = glt.toJson(libs);
    this.output = glt.getLib(libs);
  }

  ngOnInit() {
  }
}
