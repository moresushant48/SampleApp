import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { VolunteerRegisterComponent } from './volunteer-register/volunteer-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuardService } from './_services/auth-guard.service';


const routes: Routes = [

  { path: '', component: HomePageComponent },
  { path: 'vreg', component: VolunteerRegisterComponent },
  { path: 'auth', component: AdminLoginComponent },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuardService],
    children: [
      
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
