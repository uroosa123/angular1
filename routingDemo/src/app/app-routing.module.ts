import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponentComponent } from './employee-list-component/employee-list-component.component';
import { DepartmentListComponentComponent } from './department-list-component/department-list-component.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';


const routes: Routes = [
  {path:'',redirectTo:'/departments',pathMatch:'full'},
  {path:'departments',component:DepartmentListComponentComponent},
  {path:'departments/:deptId',component:DepartmentDetailsComponent},
  {path:'employees',component:EmployeeListComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentListComponentComponent,EmployeeListComponentComponent,DepartmentDetailsComponent];
