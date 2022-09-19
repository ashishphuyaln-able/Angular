import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], value:string) {
    
    if(!value) return arr;

    value = value.toLowerCase();
    return arr.filter(item => {
      return item.name.toLowerCase().includes(value);
    })
  }

}
