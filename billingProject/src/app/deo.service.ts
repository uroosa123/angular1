import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class DeoService {
  readonly APP_URL = 'http://localhost:8083/Billing_Middleware';
  constructor(private http:HttpClient) { }

  getprojectdeveloper(projectId):Observable<[Employee]>{

    return this.http.get<[Employee]>("http://localhost:8083/Billing_Middleware/getEmployeesList?projectId="+projectId);

  }

  markattendance(attendanceObj:any):Observable<boolean> {
    return this.http.post<any>("http://localhost:8083/Billing_Middleware/submitAttendance",attendanceObj,{responseType:'text'as'json'})
 }
}
