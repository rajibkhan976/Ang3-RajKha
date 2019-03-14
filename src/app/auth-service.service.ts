import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// this class controls the login, log out and also checks whether the user is logged in or not
export class AuthServiceService {
  //  a property  is defined to store the user who is logged in
  loggedUser:string;

  constructor() { }
  //method for checking whethre the user is logged in or not
  checkIfLoggedIn() {
    return localStorage.getItem('user');
  }
  //method for controlling the user login
  public logIn(user) {
    localStorage.setItem('user', user);
    this.loggedUser = user;
    return this.loggedUser;
  }
  //method for logging out the user
  public logOut() {
    localStorage.clear();
    this.loggedUser = undefined;
    return this.loggedUser;
  }
}
