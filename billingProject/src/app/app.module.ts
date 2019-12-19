import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AdminDashboardComponent } from './adminModule/admin-dashboard/admin-dashboard.component';
import { ConfigureComponent } from './adminModule/configure/configure.component';
import { AllocationComponent } from './adminModule/allocation/allocation.component';
import { DeoDashboardComponent } from './deo/deo-dashboard/deo-dashboard.component';
import { AttendanceComponent } from './deo/attendance/attendance.component';
import { ViewReportComponent } from './adminModule/view-report/view-report.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
   AdminDashboardComponent,
   ConfigureComponent,
   AllocationComponent,
   DeoDashboardComponent,
   AttendanceComponent,
   ViewReportComponent,
   AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
