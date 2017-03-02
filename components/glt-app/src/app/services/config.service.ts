import {Injectable} from '@angular/core';

import {glt} from '../../vendor';

@Injectable()
export class ConfigService {
  randomItems = 78;
  thumbnailSizes = [[64, 64], [128, 32], [128, 128], [192, 48], [192, 192], [256, 64], [256, 256], [384, 96]];
  thumbnailSize = this.thumbnailSizes[2];
  editSize = [512, 512];
  thumbnailQualities = [0.5, 1, 2, 4, 8];
  thumbnailQuality = this.thumbnailQualities[1];
  show = {
    code: false,
    time: false,
    partials: false
  };
  source = glt.samplesDemo[0];
  original = glt.samplesDemo[0];
}
