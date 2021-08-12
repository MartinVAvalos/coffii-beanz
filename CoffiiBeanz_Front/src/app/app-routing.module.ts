import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemselectedComponent } from './components/itemselected/itemselected.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { Page404Component } from './components/page404/page404.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { 
    path:'dashboard', component: DashboardComponent, pathMatch: 'full',
    // canActivate: [AuthGuard],
  },
  { 
    path:'profiles', component: ProfilesComponent, pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { 
    path:'addproduct', component: AddItemComponent, pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { 
    path:'product/:id/view',component:ItemselectedComponent,pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { 
    path: '', redirectTo: 'dashboard', pathMatch: 'full',
    // canActivate: [AuthGuard],
  },
  { path: '**', component:Page404Component },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
