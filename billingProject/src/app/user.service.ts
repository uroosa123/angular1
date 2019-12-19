import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url="http://localhost:8083/Billing_Middleware/validateRole";
  

  constructor(private http:HttpClient,private router:Router) { }

  userValidate(userId:any,userpass:any):Observable<any>{
   
    return this.http.post<any>("http://localhost:8083/Billing_Middleware/validateRole?userId="+userId+"&&userpass="+userpass,null);   
    }

    
    
}
