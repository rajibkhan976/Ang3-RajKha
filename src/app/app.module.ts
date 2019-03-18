import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersListComponent,
    UserListItemComponent,
    EditUserComponent,
    SingleUserComponent,
    LoginComponent,
    NavBarComponent,
    PageNotFoundComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  entryComponents: [ModalComponent],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
