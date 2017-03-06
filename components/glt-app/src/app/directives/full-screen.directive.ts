import {Directive, HostListener, Input} from '@angular/core';

import {screenfull} from '../../vendor';

@Directive({
  selector: '[fullScreen]',
})
export class FullScreenDirective {
  @Input() fullScreen;

  @HostListener('click') clicked() {
    if (screenfull.enabled) {
      screenfull.toggle(this.fullScreen);
    }
  }
}
