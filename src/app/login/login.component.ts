import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { AdminFull } from '../models/admin-full.model';
import { AdminLogin } from '../models/admin-login.model';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';


/* This class controls the login and logout functionalities by using the methods of injected Auth service*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //definition of properties
  loggedUser: string;
  errorMessage: string = "Please enter correct credentials";
  showCreateFields: boolean = false;
  showLoginButtons: boolean = true;
  model: AdminLogin = new AdminLogin('','');
  adminModel: AdminFull = new AdminFull('','','','');

  //Authservice and router injected in the constructor
  constructor(private modalService: NgbModal, private authService: AuthServiceService, private router: Router) {
    this.loggedUser = this.authService.checkIfLoggedIn();
   }

  ngOnInit() {

  }
  //method for controlling the visualization of buttons
  showHiddenFields():void {
    this.showCreateFields = true;
    this.showLoginButtons = false;
  }
  //Method for registering new user
  createUser():void {
    this.authService.admins.push(new AdminFull(this.adminModel.firstName, this.adminModel.lastName, this.model.email, this.model.password));
    console.log(this.authService.admins);
  }
  //method that controls the user login through using Authservice login method
  logIn():void {
      this.authService.logIn(this.model);
      this.loggedUser = this.authService.checkIfLoggedIn();
      if (this.model.email ===  this.loggedUser) {
        this.router.navigate(['/dashboard']);
      } else {
        const modalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.title = this.errorMessage;
        this.router.navigate(['/login']);
      }
    }
   //method that controls the user log out through using Authservice logout method
   logOut():void {
     this.authService.logOut();
     this.loggedUser = this.authService.checkIfLoggedIn();
   }

}
