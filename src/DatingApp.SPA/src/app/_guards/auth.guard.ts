import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router,
    private alertify: AlertifyService) { }

  // is allowed to access the route
  // pipes | -> union type must return one
  // of the given types
  // Observable<boolean> | Promise<boolean> |
  canActivate(): boolean {

    if (this.authService.loggedIn()) {
      return true;
    }

    this.alertify.error('YOU SHALL NOT PASS!!!');
    this.router.navigate(['/home']);
    return false;
  }
}
