import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from './admin.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit() {
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
  

}
