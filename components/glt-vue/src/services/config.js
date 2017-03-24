class ConfigService {
  time = false
  code = false
  partials = false
  size = 1

  editSizes = [[256, 256], [384, 384], [512, 512]]
  editSizeIndex = 0
  editSize = this.editSizes[this.editSizeIndex]

  thumbnailSizes = [[128, 32], [128, 128], [192, 48], [192, 192], [256, 64], [256, 256]]
  thumbnailSizeIndex = 1
  thumbnailSize = this.thumbnailSizes[this.thumbnailSizeIndex]

  histogramDark = false
  histogramCurve = true
}

export default new ConfigService()
