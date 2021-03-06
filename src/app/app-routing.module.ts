import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
{ path:'', component:HomeComponent }, // inside router-outlet generates this component
{ path:'list', component:ListComponent },
{ path:'login', component:LoginComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
