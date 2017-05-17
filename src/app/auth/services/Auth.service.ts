import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from '../configs/auth0.config';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import Auth0Lock from 'auth0-lock';

@Injectable()
export class AuthService {

  private lock;

  constructor(public router: Router) {
    this.lock = new Auth0Lock(AUTH_CONFIG.clientID, AUTH_CONFIG.domain, {
      oidcConformant: true,
      autoclose: true,
      auth: {
        redirectUrl: AUTH_CONFIG.callbackURL,
        responseType: 'token id_token',
        audience: `https://${AUTH_CONFIG.domain}/userinfo`,
        params: {
          scope: 'openid profile'
        }
      }
    });
  }


  private loadProfile(): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }
    this.lock.getUserInfo(accessToken, (err, profile) => {
      if (profile) {
        localStorage.setItem('user_profile', JSON.stringify(profile));
      }
      const routeTo = JSON.parse(localStorage.getItem('current_route_snapshot')) || ['/home'];
      this.router.navigate(routeTo);
    });
  }

  public getProfile(): any{
    return JSON.parse(localStorage.getItem('user_profile'));
  }

  public login(): void {
    this.lock.show();
  }

  // Call this method in app.component
  // if using path-based routing
  public handleAuthentication(): void {
    this.lock.on('authenticated', (authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.loadProfile();
      }
    });
    this.lock.on('authorization_error', (err) => {
      this.router.navigate(['/error']);
      console.log(err);
      alert(`Error: ${err.error}. Check the console for further details.`);
    });
  }

  // Call this method in app.component
  // if using hash-based routing
  public handleAuthenticationWithHash(): void {
    this
      .router
      .events
      .filter(event => event instanceof NavigationStart)
      .filter((event: NavigationStart) => (/access_token|id_token|error/).test(event.url))
      .subscribe(() => {
        this.lock.resumeAuth(window.location.hash, (err, authResult) => {
          if (err) {
            this.router.navigate(['/']);
            console.log(err);
            alert(`Error: ${err.error}. Check the console for further details.`);
            return;
          }
          this.setSession(authResult);
          this.loadProfile();
        });
      });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_profile');
    localStorage.removeItem('current_route_snapshot');
    localStorage.removeItem('current_app_state');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}
