import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false //can lead to performance issues , the pipe is recalculated at any change
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): unknown {
    if(value.length == 0 || filterString == '')
      return value

    const resultsArray = []
    for(const item of value){
      if(item[propName] == filterString){
        resultsArray.push(item)
      }
    }
    return resultsArray;
  }

}
