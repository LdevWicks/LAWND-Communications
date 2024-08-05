import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.afAuth.authState.pipe(
      take(1),
      map(user => !!user),
      map(_isAuthenticated => {
        if (this.authService.isLoggedIn()) {
          if (this.isAuthenticated()) {
            return true;
          } else {
            this.router.navigate(['/mfa-login']);
            return false;
          }
        } else {
          this.router.navigate(['/mfa-login']);
          return false;
        }
      })
    );
  }

  private isAuthenticated(): boolean {
    return localStorage.getItem('mfaCompleted') === 'true'; // Use local storage to check MFA status
  }
}
