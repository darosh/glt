import {Directive} from '@angular/core';

import {screenfull} from '../../vendor';

@Directive({
  selector: '[fullScreen]',
  inputs: ['fullScreen'],
  host: {
    '(click)': 'clicked()'
  }
})
export class FullScreenDirective {
  fullScreen;

  clicked() {
    if (screenfull.enabled) {
      screenfull.toggle(this.fullScreen);
    }
  }
}
