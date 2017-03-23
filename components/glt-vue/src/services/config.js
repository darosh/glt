class ConfigService {
  time = true
  code = false
  partials = false
  size = 1

  editSizes = [[128, 128], [256, 256], [384, 384], [512, 512]];
  editSizeIndex = 1;
  editSize = this.editSizes[this.editSizeIndex];

  thumbnailSizes = [[64, 64], [128, 32], [128, 128], [192, 48], [192, 192], [256, 64], [256, 256], [384, 96]]
  thumbnailSizeIndex = 2
  thumbnailSize = this.thumbnailSizes[this.thumbnailSizeIndex]
}

export default new ConfigService()
