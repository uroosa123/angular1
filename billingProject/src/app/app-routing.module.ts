import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './billing/login.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { BannerComponent } from './banner.component';
import { AdminDashboardComponent } from './adminModule/admin-dashboard/admin-dashboard.component';
import { ConfigureComponent } from './adminModule/configure/configure.component';
import { AllocationComponent } from './adminModule/allocation/allocation.component';
import { DeoDashboardComponent } from './deo/deo-dashboard/deo-dashboard.component';
import { AttendanceComponent } from './deo/attendance/attendance.component';
import { ViewReportComponent } from './adminModule/view-report/view-report.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'',redirectTo:'/banner',pathMatch:'full'},
  {path:'header',component:HeaderComponent},
  {path:'banner',component:BannerComponent},
  {path:'footer',component:FooterComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminDashboardComponent},
  {path:'admin/admin/configure',component:ConfigureComponent},
  {path:'admin/admin/allocate',component:AllocationComponent},
  {path:'deo',component:DeoDashboardComponent},
  {path:'deo/deo/markAttendance',component:AttendanceComponent},
  {path:'admin/admin/viewReport',component:ViewReportComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[BannerComponent,HeaderComponent,FooterComponent,LoginComponent,AdminDashboardComponent,ConfigureComponent,AboutComponent]