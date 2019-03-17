import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { AdminFull } from '../models/admin-full.model';
import { AdminLogin } from '../models/admin-login.model';

/* This class controls the login and logout functionalities by using the methods of injected Auth service*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedUser: string;
  model: AdminLogin = new AdminLogin('','');

  //Authservice and router injected in the constructor
  constructor(private authService: AuthServiceService, private router: Router) {
    this.loggedUser = this.authService.checkIfLoggedIn();
   }

  ngOnInit() {

  }

  //method that controls the user login through using Authservice login method
  logIn():void {
      this.authService.logIn(this.model);
      this.loggedUser = this.authService.checkIfLoggedIn();
      if (this.model.email ===  this.loggedUser) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/login']);
      }
    }
   //method that controls the user log out through using Authservice logout method
   logOut():void {
     this.authService.logOut();
     this.loggedUser = this.authService.checkIfLoggedIn();
   }

}
