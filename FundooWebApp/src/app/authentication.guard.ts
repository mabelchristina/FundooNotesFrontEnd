import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouteConfigLoadStart,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './services/AuthGuard/auth-guard.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authguardservice: AuthGuardService,
    private router: Router
  ) {}
  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authguardservice.gettoken()) {
      this.router.navigateByUrl('/login');
    }
    return this.authguardservice.gettoken();
  }
}
