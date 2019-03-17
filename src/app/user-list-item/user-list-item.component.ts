import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
//This calss accepts the input from the user component and send the singleUser to the single-user component
export class UserListItemComponent implements OnInit {
  //Input properties are defined
  @Input() singleUser:string;
  @Input() listItemColor: any;

  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router) {

   }

   ngOnInit() {
   }
   //method that sends the single user to the single-user component
   navigate(): void {
    this.userService.getUsers()
     .subscribe(
       (response) => {
         for (var individualUser in response) {
           if (this.singleUser === response[individualUser].name) {
             this.router.navigate(['/single-user', response[individualUser].id]);
           }
         }
     },
       (error) => console.log('error', error),
       () => console.log('Completed')
     );
   }

}
