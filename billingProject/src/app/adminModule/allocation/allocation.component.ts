import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {

  project : any;
  role:any;
  employees:any;
  constructor(public fb: FormBuilder,private admin:AdminService) {}
  /*allocationForm = this.fb.group({

    
  });*/
  allocationForm = new FormGroup({
    proObj: new FormControl(this.project,Validators.required),
     roleObj: new FormControl(this.role,Validators.required),
     empObj: new FormControl(this.employees,Validators.required),
     location: new FormControl('',Validators.required),
     
  });

  get proObj(){
    return this.allocationForm.get('proObj');
  }

  get roleObj(){
    return this.allocationForm.get('roleObj');
  }

  get empObj(){
    return this.allocationForm.get('empObj');
  }

  get location(){
    return this.allocationForm.get('location');
  }

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
    this.admin.getAllEmployees()
  .subscribe(data => {this.employees=data;console.log(this.employees)},
    error => {
      console.log('Error ocurred',error); 
    }
    );
    }  

    onAllocate(){
      console.log(this.allocationForm.value.proObj,this.allocationForm.value.roleObj,this.allocationForm.value.empObj,this.allocationForm.value.location);
    // this.allocationForm.reset();
      this.admin.allocation(this.allocationForm.value.proObj,this.allocationForm.value.roleObj,this.allocationForm.value.location,this.allocationForm.value.empObj).subscribe(
        data=>{
         if(data===true){
           alert("Allocated successfully!")
         }
         else{
           alert("Already allocated!")
         }
          this.allocationForm.reset(); },
    
    
    
      error=>{
    
        alert("Allocation already done! ");
    
      });



}
}
