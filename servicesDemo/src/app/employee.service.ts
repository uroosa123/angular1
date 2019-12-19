import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private serviceUrl:string="http://localhost:1235/Angular_Middleware/getAllEmployees";
  constructor(private http:HttpClient) { }

 getEmployees():Observable<IEmployee[]>{
   return this.http.get<IEmployee[]>(this.serviceUrl);
 }
}
