import { Injectable } from '@angular/core';
import { AdminFull } from './models/admin-full.model';

@Injectable({
  providedIn: 'root'
})
// this class controls the login, log out and also checks whether the user is logged in or not
export class AuthServiceService {
  //  a property  is defined to store the user who is logged in
  loggedUser:string;
  public admins : AdminFull [] = [{
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@email.com',
  password: '1234567890'
  }, {
  firstName: 'Kylie',
  lastName: 'Johnson',
  email: 'kylie.johnson@email.com',
  password: '0987654321'
  }];

  constructor() { }
  //method for checking whethre the user is logged in or not
  checkIfLoggedIn() {
    return localStorage.getItem('user');
  }
  //method for controlling the user login
  public logIn(user) {
    for (var loginAuthentication in this.admins) {
      if (user.email === this.admins[loginAuthentication].email && user.password === this.admins[loginAuthentication].password) {
        localStorage.setItem('user', user.email);
        this.loggedUser = user.email
      } else {
        this.loggedUser = undefined;
      }
    }
    return this.loggedUser;
  }
  //method for logging out the user
  public logOut() {
    localStorage.clear();
    this.loggedUser = undefined;
    return this.loggedUser;
  }
}
