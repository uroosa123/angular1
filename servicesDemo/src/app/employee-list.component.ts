import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees:IEmployee[];

  constructor(private empService:EmployeeService) { }

  ngOnInit() {
    this.empService.getEmployees().subscribe(data=>this.employees=data);
  }

}
