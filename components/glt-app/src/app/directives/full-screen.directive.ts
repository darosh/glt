import {Directive} from '@angular/core';

import {screenfull} from '../../vendor';

@Directive({
  selector: '[fullScreen]',
  host: {
    '(click)': 'clicked()'
  }
})
export class FullScreenDirective {
  clicked() {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }
}
