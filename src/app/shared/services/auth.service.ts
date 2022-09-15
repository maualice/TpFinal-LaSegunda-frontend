import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterComponent } from '../../modules/auth/views/register/register.component'; //
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://tpfinal-lasegunda.herokuapp.com/api/v1';
  //private URL = `${environment.api}/api/v1`;  no se conecta en el vercel
  //private URL = 'http://localhost:3000/api/v1';
  constructor(private http: HttpClient, private router:Router) { }

 
  
  useradmin!: boolean;
  admin!:string;

  signUp(user: { name: string; email: string; password: string; }) {
    return this.http.post<any>(this.URL + '/auth/register', user);
  }

  signIn(user: { email: string; password: string; }) {
    this.admin = user.email;
    return this.http.post<any>(this.URL + '/auth/login', user)/*.pipe(tap((response:any)=> {
      this.useradmin = response.user; 
    }))*/
  }
  /*
  getOneStore(id:string): Observable <Store> {
    return this.http.get(`${this.apiURL}/stores/`+ id).pipe(map((response:any)=> {
      const store:Store = response.store;
      return store;
    })) */

  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.admin = ''
    //this.router.navigate(['/login'])
  }


/*
  signIn(user) {
    return this.http.get<any>(this.URL + '/auth/admin', user);
*/
  isAdmin(){
    if (this.admin == 'admin@mail.com') return true;
    else return false;
  }
  /*
  isAdmin(){
      console.log(this.useradmin);
      if (this.useradmin == true) {
        return true;
      }
      else return false;
  }
*/
}
