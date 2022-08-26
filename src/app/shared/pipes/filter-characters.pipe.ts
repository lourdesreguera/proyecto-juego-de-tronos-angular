import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCharacters'
})
export class FilterCharactersPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const result = [];
    for(const char of value){
      if (char.name.toLowerCase().includes(arg.toString().toLowerCase())){
        result.push(char)
      }
    }
    return result;
  }

}
