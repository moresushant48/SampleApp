import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuardService } from './_services/auth-guard.service';
import { DashboardVolunteersComponent } from './dashboard-volunteers/dashboard-volunteers.component';
import { DashboardModeratorsComponent } from './dashboard-moderators/dashboard-moderators.component';
import { DashboardPostFormComponent } from './dashboard-post-form/dashboard-post-form.component';


const routes: Routes = [

  { path: '', component: HomePageComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'dashboard', component: AdminDashboardComponent, canActivate: [AuthGuardService],
    children: [
      { path: 'volunteer', component: DashboardVolunteersComponent },
      { path: 'moderators', component: DashboardModeratorsComponent },
      { path: 'posts', component: DashboardPostFormComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
