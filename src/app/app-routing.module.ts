import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { VolunteerRegisterComponent } from './volunteer-register/volunteer-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


const routes: Routes = [

  { path: '', component: HomePageComponent },
  { path: 'vreg', component: VolunteerRegisterComponent },
  { path: 'admin', children: [
      { path: 'login', component: AdminLoginComponent} // admin/login
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
