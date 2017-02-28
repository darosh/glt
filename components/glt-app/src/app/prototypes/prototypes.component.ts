import {Component} from '@angular/core';

import {glt} from '../../vendor';

@Component({
  selector: 'app-prototypes',
  templateUrl: './prototypes.component.html',
  styleUrls: ['./prototypes.component.css']
})
export class PrototypesComponent {
  features = glt.toJson(glt.features);
  all = glt.toJson(glt.all);
  prototypes = glt.all
    .map(function (v) {
      return v.type + ', ' + v.name + ', ' + glt.getSignature(v);
    })
    .join('\n');
}
