import {glt} from '../../vendor';

declare const window;

export class RenderService {
  canvas = window.document.createElement('canvas');
  renderer = new glt.Renderer(this.canvas).size(128);
  pixels: any = null;
  pixelsCount: any = 0;

  constructor() {
    this.canvas.setAttribute('id', 'WEBGL_RENDERER');
  }
}
