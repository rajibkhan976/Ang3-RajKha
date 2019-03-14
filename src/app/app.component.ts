import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'AngU2-RajKha';

  constructor (private authService: AuthServiceService) {
    authService.loggedUser = this.authService.checkIfLoggedIn();
  }

  ngOnInit() {
  }

}
