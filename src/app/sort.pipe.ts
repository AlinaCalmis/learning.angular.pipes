import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, parameter: string): any {
    return value.sort((a, b) => a[parameter]<b[parameter])
  }

}
