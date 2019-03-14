import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { DashboardGuardService } from '../dashboard-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
/* This class shows the user list in the dashboard and also enables to add, remove and toggle the text color of the user list.
The authservice is also injected in this class which restricts someone to view the content without being logged in. Router is also
injected to allow the user to browse through different pages */
export class DashboardComponent implements OnInit {

  name:string = "Dashboard";
  //userList array and two way data binding property defined
  userList: string[] = ['Rajib','Hossain','Khan'];
  addUser:string;
  //Authservice and router injected into the constructor
  constructor(private authService: AuthServiceService, private dashGuard: DashboardGuardService, private router: Router) {
    authService.loggedUser = this.authService.checkIfLoggedIn();
   }

   ngOnInit() {

   }
   //method for adding user name
   AddUser():void {
   if(this.addUser != undefined) {
     this.userList.unshift(this.addUser);
    }   
   }
   //method for removing user name
   RemoveUser():void {
     this.userList.pop();
   }
}
