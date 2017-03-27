import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {screenfull} from '../../vendor';

declare const window;

@Injectable()
export class FullService {
  public subject = new BehaviorSubject(null);

  constructor() {
    window.addEventListener('resize', () => this.subject.next(screenfull));
    window.addEventListener(screenfull.raw.fullscreenchange, () => this.subject.next(screenfull));
  }
}
