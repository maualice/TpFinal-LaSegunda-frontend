import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterComponent } from '../../modules/auth/views/register/register.component'; //
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api/v1'  //variable de entrono se podría usar

  constructor(private http: HttpClient, private router:Router) { }

  signUp(user: { name: string; email: string; password: string; }) {
    return this.http.post<any>(this.URL + '/auth/register', user);
  }

  signIn(user: { email: string; password: string; }) {
    return this.http.post<any>(this.URL + '/auth/login', user);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    //this.router.navigate(['/login'])
  }


}
