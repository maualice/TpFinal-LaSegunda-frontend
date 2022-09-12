import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  
  constructor(private _router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.loggedIn()){
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
    
  }
  /*
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    
    
    if (localStorage.getItem('isLogged') === 'true') {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
    
  }*/
  canLoad(route: Route, segments: UrlSegment[]): any{

  }
  /*
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    if (localStorage.getItem('isLogged') === 'true') {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
  */
}
