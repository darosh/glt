import {Pipe, PipeTransform} from '@angular/core';

import {glt, CJSON} from '../../vendor';

@Pipe({
  name: 'cjson'
})
export class CjsonPipe implements PipeTransform {
  transform(value: any, i, l): any {
    const v = glt.deep(value);
    delete v.title;
    delete v.example;
    return CJSON(v, {indent: i, maxLength: Math.max(24, Math.floor(l))});
  }
}
