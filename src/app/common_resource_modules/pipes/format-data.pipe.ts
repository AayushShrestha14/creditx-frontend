import { Pipe, PipeTransform } from '@angular/core';
import { ObjectUtil } from 'src/app/core/utils/ObjectUtil';

@Pipe({
  name: 'dataFormat'
})
export class FormatDataPipe implements PipeTransform {
  constructor() {}

  transform(value: any, format: string) {
    if (ObjectUtil.isEmpty(value)) {
      return 'Not Available';
    }
    if (format === 'default') {
      if (Array.isArray(value)) {
        if (typeof value[0] !== 'object') {
          return value.join(', ');
        } else {
          return value
            .map((obj) => {
              return obj.name;
            })
            .join(', ');
        }
      }
      if (typeof value === 'object') {
        return value.name;
      }
    }
    return value;
  }
}
