import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urls: any = {
    users: 'https://jsonplaceholder.typicode.com/users',
    user: 'https://jsonplaceholder.typicode.com/users/'
  };

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any>{
    return this.http.get(this.urls.users);
  }
  public getSingleUser(userId: number): Observable<any>{
    return this.http.get(this.urls.user + userId);
  }
}
