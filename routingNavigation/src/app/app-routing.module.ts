import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroListComponent } from './heroes/hero-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/heroes',pathMatch:'full'},
  {path:'heroes',component:HeroListComponent},
  {path:'heroes/:hId/:hName',component:HeroDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HeroListComponent,HeroDetailComponent];