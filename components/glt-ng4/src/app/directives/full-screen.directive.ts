import {Directive, HostListener, Input} from '@angular/core';

import {screenfull} from '../../vendor';

@Directive({
  selector: '[appFullScreen]',
})
export class FullScreenDirective {
  @Input() appFullScreen;

  @HostListener('click') clicked() {
    if (screenfull.enabled) {
      screenfull.toggle(this.appFullScreen);
    }
  }
}
