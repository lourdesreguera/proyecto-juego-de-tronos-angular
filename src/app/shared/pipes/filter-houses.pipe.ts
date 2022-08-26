import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHouses'
})
export class FilterHousesPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const result = [];
    for (const houses of value){
      if (houses.name.toLowerCase().includes(arg.toString())){
        result.push(houses)
      }
    }
    return result;
  }

}
