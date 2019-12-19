import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  Hero:any= [
    { id: 11, 'name': 'Iron man' },
    { id: 12, 'name': 'SuperMan' },
    { id: 13, 'name': 'Wonderwoman' },
    { id: 14, 'name': 'Spiderman' },
    { id: 15, 'name': 'Magneta' },
    { id: 16, 'name': 'RubberMan' },
    { id: 17, 'name': 'Dynamo' },
    { id: 18, 'name': 'Dr Lee' },
    { id: 19, 'name': 'Magma' },
    { id: 20, 'name': 'Tornado' }
  ];
 public obj;

  constructor() { }

  ngOnInit() {
  }

onSelect(hero: any): void {
  this.obj=hero;
  
}

}
