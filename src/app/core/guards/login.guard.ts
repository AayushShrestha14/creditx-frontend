import { Injectable } from '@angular/core';
import {
  CanActivate,
  Route,
  Router,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageUtil } from '../utils/local-storage-util';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate():
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return this.check();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.check();
  }

  private check():
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    const isAuthenticated = LocalStorageUtil.getStorage().at;
    return isAuthenticated ? this.router.createUrlTree(['/']) : true;
  }
}
