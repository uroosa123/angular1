import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string,param:string): string {
    let str:string="";
    for(var i=param.length;i>=0;i--){
      str= str+param.charAt(i);
    }
    return str;
  }

}
