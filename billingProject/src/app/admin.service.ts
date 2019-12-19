import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Project } from './project';
import { Roles } from './Roles';
import { ProjectConfig } from './projectConfiguration';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 readonly APP_URL = 'http://localhost:8083/Billing_Middleware';
  constructor(private http:HttpClient) { }

  getAllProjects()
    {
      return this.http.get<Project[]>(this.APP_URL + '/getAllProjects');
    }

    getRoles()
    {
      return this.http.get<Roles[]>(this.APP_URL + '/getRoles');
    }

    getProjectConfiguration()
    {
      return this.http.get<ProjectConfig[]>(this.APP_URL+'/getAllProjectConfig');
    }

    getAllEmployees()
    {
      return this.http.get<Employee[]>(this.APP_URL+'/getAllEmployees');
    }

    allocation(projectId,roleId,location,employeeId):Observable<any>{
      return this.http.post<any>("http://localhost:8083/Billing_Middleware/submitProjectAllocate?projectId="+projectId+"&&roleId="+roleId+"&&location="+location+"&&employeeId="+employeeId,
      {responseType:'text' as 'json'});
    
    }

    getReport(employeeId,month,year){
      console.log(this.APP_URL);
      return this.http.get<any>(this.APP_URL+'/viewReport?employeeId='+employeeId+'&&month='+month+'&&year='+year,
      {responseType: 'text' as 'json'});
  
    }
    
  
}
