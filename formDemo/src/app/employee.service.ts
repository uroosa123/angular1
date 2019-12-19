import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url:string="http://localhost:1235/Angular_Middleware/addEmployee";

  constructor(private http:HttpClient) { }

  addEmployee(empObj:any):Observable<string>{
  return this.http.post<string>(this.url,empObj,{responseType:'text' as 'json'});
  }
}
