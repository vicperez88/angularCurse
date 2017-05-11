import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, active: boolean = true): string {
    let retValue: string;
    retValue = value;
    if (active) {
      retValue = value.replace(value, "*****");
    }

    return retValue;
  }

}
