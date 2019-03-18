import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
/* Router is injected in this class and the value that fetched from the JSON placeholder is assigned to the user property */
export class SingleUserComponent implements OnInit {

  //Property for the single user
  user: any = [];
  userAddress: any = [];

  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
       this.userService.getSingleUser(params.id)
       .subscribe(
         (response) => {
           this.user = response;
           this.userAddress = this.user.address;
         },
         (error) => console.log(error),
         () => console.log('Successful')
       );
    })
   }
  //assigning the value sent as the parameter to the user property on initialization
  ngOnInit() {

  }

}
