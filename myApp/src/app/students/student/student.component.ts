import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
/*cityList=[
  {
    "city":"Delhi",
    "student":[
      {
        "studentId":"101",
        "studentName":"Aakriti"
      },
      {
        "studentId":"102",
        "studentName":"Priyanka"
      }
    ]
  },
  {
    "city":"Lucknow",
    "student":[
      {
        "studentId":"103",
        "studentName":"Uroosa"
      },
      {
        "studentId":"104",
        "studentName":"Shubhangi"
      }
    ]
  }
];*/
x:any=0;
y:any=0;
usersList:any=[
  {
    "name":"uroosa",
    "gender":"female",
    "desig":"developer"
  },
  {
    "name":"shubhangi",
    "gender":"female",
    "desig":"tech lead"
  },
  {
    "name":"shubham",
    "gender":"male",
    "desig":"manager"
  },
  {
    "name":"ashutosh",
    "gender":"male",
    "desig":"tech support"
  }
];

filterGender:any='';
 userName="";
isShow=false;
 
ClearText(){
this.userName='';

}

toggle()
{
  this.isShow=!this.isShow;
}

msg: any[]=[];
count: number = 0;
clickMe() {
    this.count = this.count + 1;
    this.msg.push(this.count);
    
}



}
