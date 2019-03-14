import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
//This classaccepts the userList array as input and toggle the color of userlist items
export class UsersListComponent {
  //Input property and properties for toggling color is defined
  @Input() myUsers: string[];
  toggleUserItem:boolean = true;
  usersListItemColor:any = {'color' : 'red'};

  constructor() { }
  //method for toggling userList item color
  toggleUserListItem():void {
    this.toggleUserItem = !this.toggleUserItem;
    if (this.toggleUserItem === true) {
      this.usersListItemColor = {'color' : 'red'};
    } else {
      this.usersListItemColor = {'color' : 'green'};
    }
  }

}
