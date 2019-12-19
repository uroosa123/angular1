import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  isValid=true;
  /*projectsList=[
    {
      'projectId':'101',
      'projectName':'ERP',
      'active':'yes'
    },
    {
      'projectId':'102',
      'projectName':'MRD',
      'active':'yes'
    },
    {
      'projectId':'103',
      'projectName':'CITI',
      'active':'no'
    },
    {
      'projectId':'104',
      'projectName':'OTRS',
      'active':'no'
    },
    {
      'projectId':'105',
      'projectName':'AXIS',
      'active':'yes'
    }
  ];
  changeVal(inp:any){
    this.isValid=inp;
  }

  addNewRow(pId:any,pName:any,stat:any){
    let project={
      'projectId':pId,
      'projectName':pName,
      'active':stat
    };
    this.projectsList.push(project);
  }*/

}
