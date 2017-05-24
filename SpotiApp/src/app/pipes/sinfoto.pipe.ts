import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform( value: any, element:number ):string {

    if ( !value ){
      return "assets/img/noimage.png";
    }

    return ( value.length > element-1 ? value[element-1].url : "assets/img/noimage.png");
  }

}
