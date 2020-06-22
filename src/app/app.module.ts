import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { authInterceptorProviders } from "./_helpers/auth.interceptor";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardVolunteersComponent } from './dashboard-volunteers/dashboard-volunteers.component';
import { DashboardModeratorsComponent } from './dashboard-moderators/dashboard-moderators.component';
import { DashboardPostFormComponent } from './dashboard-post-form/dashboard-post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterComponent,
    LoginComponent,
    AdminDashboardComponent,
    DashboardVolunteersComponent,
    DashboardModeratorsComponent,
    DashboardPostFormComponent
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
