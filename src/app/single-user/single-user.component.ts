import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
/* Router is injected in this class and the value that is send as the parameter is assigned to the property to show the single user */
export class SingleUserComponent implements OnInit {

  //Property for the single user
  user: string;

  constructor(private route: ActivatedRoute, private router: Router) { }
  //assigning the value sent as the parameter to the user property on initialization
  ngOnInit() {
    this.route.params.subscribe(params => {
       this.user = params.id;
    })
  }

}
