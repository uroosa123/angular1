import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { ProjectConfig } from 'src/app/projectConfiguration';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.css']
})
export class ConfigureComponent implements OnInit {

  project : any;
  role:any;
  pcObj:any;
  x:any;
  readonly APP_URL = 'http://localhost:8083/Billing_Middleware';
  constructor(public fb: FormBuilder,private admin:AdminService,private http:HttpClient) { }

  configureForm = this.fb.group({
    configurationId: [''],
    perHourBilling:['',Validators.min(2)],
    location:['',Validators.required],
    projectId:['',Validators.required],
    roleId:['',Validators.required]
  })

  get perHourBilling(){
    return this.configureForm.get('perHourBilling');
  }

  get location(){
    return this.configureForm.get('location');
  }

  get projectId(){
    return this.configureForm.get('projectId');
  }

  get roleId(){
    return this.configureForm.get('roleId');
  }

  pconfig:ProjectConfig;

  ngOnInit() {
    this.admin.getAllProjects()
    .subscribe(data => {this.project=data;console.log(this.project)},
    error => {
    console.log('Error ocurred',error); 
    }
  );
  this.admin.getRoles()
  .subscribe(data => {this.role=data;console.log(this.role)},
    error => {
      console.log('Error ocurred',error); 
    }
    );
    this.admin.getProjectConfiguration()
    .subscribe(data => {this.pcObj=data;console.log(this.pcObj)},
      error => {
        console.log('Error ocurred',error); 
      }
      );   

  }

  onConfig(){
    console.log(this.configureForm.value);
    this.pconfig=this.configureForm.value;
  this.configureForm.reset();
  console.log("this is "  + this.pconfig.projectId);
  this.http.post(this.APP_URL+'/submitProjectConfig',this.pconfig)
  .subscribe(data => {
    this.x=data;
    if(this.x===true){
      alert("Configured successfully!");
    }
    else{
      alert("Already configured!")
    }
    console.log(this.x)
    this.admin.getProjectConfiguration()
    .subscribe(data => {this.pcObj=data;console.log(this.pcObj)
      
  },
      error => {
        alert("Already configured!");
        console.log('Error ocurred asdsdds',error); 
      }
      );
  },
    error => {
      alert("some error occured!")
      console.log('Error ocurred 1111',error); 
    }
    );
  }

 

}
