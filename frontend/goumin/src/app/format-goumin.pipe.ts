import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatGoumin'
})
export class FormatGouminPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == null) return value;
    // let result = parseFloat(Math.round(radius * 100) / 100).toFixed(2);
    let result = Number(value).toFixed(2);
    return result;
  }

}
