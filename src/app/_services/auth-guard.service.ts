import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(
    private tokenStorage: TokenStorageService, 
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    if (!this.tokenStorage.getToken()) {
      // just return false - if user is not logged in
      this.router.navigate(['/'])
      return Promise.resolve(false);
    } else {
      // just return true - if user is logged in
      return Promise.resolve(true);
    }
  }

}
