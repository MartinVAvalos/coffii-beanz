import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ItemselectedComponent } from './components/itemselected/itemselected.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { HttpClientModule } from '@angular/common/http';
import { Page404Component } from './components/page404/page404.component';
import { CardSummaryComponent } from './components/card-summary/card-summary.component';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from 'src/environments/environment';
import { ProfilesComponent } from './components/profiles/profiles.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemselectedComponent,
    CheckoutComponent,
    NavbarComponent,
    AddItemComponent,
    Page404Component,
    CardSummaryComponent,
    ProfilesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      ...env.auth
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }