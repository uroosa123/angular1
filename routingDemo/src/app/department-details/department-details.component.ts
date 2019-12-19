import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  private departmentId:number;
  private departmentName:string;

  constructor(private activatedRouteObj:ActivatedRoute) { }

  ngOnInit() {
    let id=parseInt(this.activatedRouteObj.snapshot.paramMap.get('deptId'));
    let name=this.activatedRouteObj.snapshot.paramMap.get(this.departmentName);
    this.departmentId=id;
    this.departmentName=name;
  }

}
