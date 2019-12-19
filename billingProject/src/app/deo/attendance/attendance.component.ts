import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DeoService } from 'src/app/deo.service';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/admin.service';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  project:any;
  employee:any;


  constructor(public fb: FormBuilder,private deo:DeoService,private admin:AdminService,private http:HttpClient) { }

  attendanceForm=this.fb.group({
    month:['',Validators.required],
    year:['',Validators.required],
    halfDay:['',Validators.required],
    fullDay:['',Validators.required],
    projectId:['',Validators.required],
    employeeId:['',Validators.required]
  })

  get month(){
    return this.attendanceForm.get('month');
  }

  get year(){
    return this.attendanceForm.get('year');
  }

  get halfDay(){
    return this.attendanceForm.get('halfDay');
  }

  get fullDay(){
    return this.attendanceForm.get('fullDay');
  }

  get projectId(){
    return this.attendanceForm.get('projectId');
  }

  get employeeId(){
    return this.attendanceForm.get('employeeId');
  }



  ngOnInit() {
    this.admin.getAllProjects()
    .subscribe(data => {this.project=data;console.log(this.project)},
    error => {
    console.log('Error ocurred',error); 
    }
  );
  
  this.admin.getAllEmployees()
  .subscribe(data => {this.employee=data;console.log(this.employee)},
    error => {
      console.log('Error ocurred',error); 
    }
    );
 
  }
  projectselect(projectId:any){

    console.log(this.attendanceForm.value.projectId);
    this.deo.getprojectdeveloper(this.attendanceForm.value.projectId).subscribe(data=>this.employee=data);
}​

mark(){
  console.log(this.attendanceForm.value);
  this.deo.markattendance(this.attendanceForm.value).subscribe(
    data=>{
      alert(data);
      this.attendanceForm.reset(); },
    error=>{
    
        alert("Some error occured!");
    
      });
}

}
