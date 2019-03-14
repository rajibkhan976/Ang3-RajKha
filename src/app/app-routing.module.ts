import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthServiceService } from './auth-service.service';
import { DashboardGuardService } from './dashboard-guard.service';
//Defining the routes for the app
const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [DashboardGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [DashboardGuardService]},
  {path: 'single-user/:id', component:  SingleUserComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
