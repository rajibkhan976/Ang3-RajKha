import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
//This is the class component for Navbar but it does not do anything specific without the router being injected
export class NavBarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
  }

}
