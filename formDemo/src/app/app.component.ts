import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formDemo';
  empObj=new Employee();
  addPerson:any;
  constructor(private fb:FormBuilder){

  }

  registerform=this.fb.group({
    eName:['',Validators.required],
    eAge:['',Validators.required],
    ePassword:['',Validators.required],
    eGender:[''],
    eDesig:['']
  })

  get eName(){
    return this.registerform.get('eName');
  }

  get eAge(){
    return this.registerform.get('eAge');
  }

  get ePassword(){
    return this.registerform.get('ePassword');
  }

  get eGender(){
    return this.registerform.get('eGender');
  }

  get eDesig(){
    return this.registerform.get('eDesig');
  }



  
  

  onSubmit(){
    console.log(this.empObj);
    //this.empService.addEmployee(this.empObj).subscribe(data=>this.addPerson=data);
  
}
}
