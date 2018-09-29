import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false
  // con pure el angular esta al pendiente del cambio del objeto y si no existe la propiedad no truena
})
export class KeysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    let keys = [];
    for(let key in value){
      keys.push(key)
    }

    return keys;
  }

}
