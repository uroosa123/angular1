import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-department-list-component',
  templateUrl: './department-list-component.component.html',
  styleUrls: ['./department-list-component.component.css']
})
export class DepartmentListComponentComponent implements OnInit {

  departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"Mongo DB"},
    {"id":4,"name":"Ruby Rails"},
    {"id":5,"name":"Bootstrap"},
    {"id":6,"name":"Java"}
  ];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSelect(dept:any){
    this.router.navigate(['/departments',dept.id]);
  }

}

