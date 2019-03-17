import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { DashboardGuardService } from '../dashboard-guard.service';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

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
  Users: any;
  userList: string[] = [];
  addUser:string;
  //Authservice and router injected into the constructor
  constructor(private userService: UsersService, private authService: AuthServiceService, private dashGuard: DashboardGuardService, private router: Router) {
    authService.loggedUser = this.authService.checkIfLoggedIn();
    this.userService.getUsers()
      .subscribe(
        (response) => {
          this.Users = response;
          for (var individualUser in this.Users) {
            this.userList.push(this.Users[individualUser].name);
          }
      },
        (error) => console.log('error', error),
        () => console.log('Completed')
      );
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
