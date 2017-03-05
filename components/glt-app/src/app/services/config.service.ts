import {Injectable} from '@angular/core';

import {glt} from '../../vendor';

@Injectable()
export class ConfigService {
  randomItems = 78;

  thumbnailSizes = [[64, 64], [128, 32], [128, 128], [192, 48], [192, 192], [256, 64], [256, 256], [384, 96]];
  thumbnailSize = this.thumbnailSizes[2];

  partialSizes = [[64, 64], [96, 96], [128, 128]];
  partialSize = this.partialSizes[1];

  editSizes = [[256, 256], [384, 384], [512, 512], [640, 640], [768, 768]];
  editSize = this.editSizes[1];

  thumbnailQualities = [0.5, 1, 2, 4, 8];
  thumbnailQuality = this.thumbnailQualities[1];

  editQualities = [0.5, 1, 2, 4, 8];
  editQuality = this.editQualities[1];

  histogramSizes = [64, 96, 128, 194];
  histogramSize = this.histogramSizes[3];

  histogramDark = false;
  histogramCurve = true;
  histogramBins = [16, 32, 64, 128, 256];
  histogramBin = this.histogramBins[2];

  show = {
    code: false,
    time: false,
    partials: false
  };

  source = glt.samplesDemo[0];
  original = glt.samplesDemo[0];
}
