import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VolunteerRegisterComponent } from './volunteer-register/volunteer-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { authInterceptorProviders } from "./_helpers/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    VolunteerRegisterComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
