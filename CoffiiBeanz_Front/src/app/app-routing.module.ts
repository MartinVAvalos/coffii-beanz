import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component'
import { LoginComponent } from './components/login/login.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemselectedComponent } from './components/itemselected/itemselected.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent,pathMatch: 'full'},
  {path:'login',component:LoginComponent,pathMatch: 'full'},
  {path:'dashboard', component: DashboardComponent, pathMatch: 'full'},
  {path:'addproduct', component: AddItemComponent, pathMatch: 'full'},
  {path:'product/:id/view',component:ItemselectedComponent,pathMatch: 'full'},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component:Page404Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
