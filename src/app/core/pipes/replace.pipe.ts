import { Pipe, PipeTransform } from '@angular/core';
import { ObjectUtil } from '../utils/ObjectUtil';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  transform(value: any, regexValue: string, replaceValue: string): any {
    const regex = new RegExp(regexValue, 'g');
    if (ObjectUtil.isEmpty(value)) {
      return value;
    }
    return value.replace(regex, replaceValue);
  }
}
