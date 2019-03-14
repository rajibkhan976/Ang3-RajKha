import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
//Class for restricting the user to browse the dashboard without being logged in
export class DashboardGuardService implements CanActivate {

  constructor(public auth: AuthServiceService, public router: Router) {

  }
  //method for restricting the user to browse the dashboard without being logged in
  canActivate(): boolean {
    if (!this.auth.checkIfLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
