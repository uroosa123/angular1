import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerBooster'
})
export class PowerBoosterPipe implements PipeTransform {

  transform(value:any,param:any): any {
    let num:any=1;
    for(var i=0;i<param;i++)
    {
      num=value*num;

    }
    return num;
  }

}
