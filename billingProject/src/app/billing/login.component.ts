import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private router: Router,private fb:FormBuilder,private uService:UserService) {
    
   }
  role:any;
  userObj:any;
  userForm=this.fb.group({
    userId:['',Validators.required],
    userpass:['',Validators.required],
    userRole:['']
  });

 

  get userId(){
    return this.userForm.get('userId');
  }

  get userpass(){
    return this.userForm.get('userpass');
  }

  ngOnInit() {
    this.userObj=JSON.parse(sessionStorage.userObj);
  }

  onSubmit(){
    console.log(this.userForm.value);
    this.uService.userValidate(this.userForm.value.userId,this.userForm.value.userpass).subscribe
    (data=>{
      this.userObj=data;
      sessionStorage.setItem("userObj",JSON.stringify(this.userObj));
      if(this.userObj.userRole==="admin"){
        alert("welcome admin!");
        this.router.navigate(['/admin']);
      }
      else if(this.userObj.userRole==="DEO")
      {
        alert("welcome DEO!");
        this.router.navigate(['/deo'])
      }
  },
  error=>{
    alert("UserId or Password incorrect");

  }
  );
  }
}
