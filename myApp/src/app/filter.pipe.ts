import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(objList:any,param: any): any {
    let myList=[];
    if(param==''){
      return objList;
    }
      else{
        for(let obj of objList){
          if(obj.gender==param){
            myList.push(obj);
          }
        }
        return myList;
      }

    }
    
  }


