import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:9090/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(credentials): Observable<any> {
    return this.http.post(API_URL + 'auth/signin', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  addModerator(user): Observable<any> {
    return this.http.post(API_URL + 'admin/addMod', {
      email: user.email,
      username: user.username,
      password: user.password
    }, httpOptions);
  }
}
