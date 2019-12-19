import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.css']
})
export class ViewReportComponent implements OnInit {

  employee:any;
  constructor(public fb:FormBuilder,private admin:AdminService,private router:Router) { }

  viewReportForm=this.fb.group({
    employeeId:[''],
    month:[''],
    year:['']
  })

  ngOnInit() {
    this.admin.getAllEmployees().subscribe(data => {this.employee=data;console.log(this.employee)},

    error => { console.log('Error ocurred',error); 

    }

    );

  }
  showReport(){
    console.log(this.viewReportForm.value.employeeId,this.viewReportForm.value.month,this.viewReportForm.value.year);
    this.admin.getReport(this.viewReportForm.value.employeeId,this.viewReportForm.value.month,this.viewReportForm.value.year)
    .subscribe(
      data=>{
        alert("Calculated total bill of the selected employee="+this.viewReportForm.value.employeeId+" is=Rs." +data+"for the month="+this.viewReportForm.value.month);
        this.viewReportForm.reset();

      },
      error=>{
        alert("Some error occured in calculating bill!Attendance not marked yet!");
      }
    );

    }
}
