import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private router: Router) {

   }

   ngOnInit() {
   }
   //method that sends the single user to the single-user component 
   navigate(): void {
     this.router.navigate(['/single-user', this.singleUser]);
   }

}
