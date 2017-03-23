class RenderService {
  canvas = window.document.createElement('canvas')
  renderer = new glt.Renderer(this.canvas).size(128)

  arrayCount = 0
  arrayInt = null
  arrayFloat = null

  constructor () {
    this.canvas.setAttribute('id', 'WEBGL_RENDERER')
  }
}

export default new RenderService()
