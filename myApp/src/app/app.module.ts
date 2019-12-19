import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UroosaComponent } from './uroosaProj/uroosa/uroosa.component';
import { StudentComponent } from './students/student/student.component';
import {FormsModule} from '@angular/forms';
import { ReversePipe } from './reverse.pipe';
import { FilterPipe } from './filter.pipe';
import { PowerBoosterPipe } from './power-booster.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UroosaComponent,
    StudentComponent,
    ReversePipe,
    FilterPipe,
    PowerBoosterPipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
