import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

declare const window;
declare const CustomEvent;

// https://developer.mozilla.org/en-US/docs/Web/Events/resize
function utilThrottle(type, name, obj = window) {
  let running = false;
  const func = function () {
    if (running) {
      return;
    }
    running = true;
    setTimeout(function () {
      obj.dispatchEvent(new CustomEvent(name));
      running = false;
    }, 200);
  };
  obj.addEventListener(type, func);
}

@Injectable()
export class ResizeService {
  public subject = new BehaviorSubject(null);

  constructor() {
    utilThrottle('resize', 'optimizedResize');
    window.addEventListener('optimizedResize', (e) => this.subject.next(e.target));
  }
}
