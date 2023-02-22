import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../user/authenticate/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  
  constructor(
    private router:Router,
    private authenticateService:AuthenticateService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const currentUser = this.authenticateService.currentUserValue;
    if(currentUser){
      return true;
      
    }
    
    this.router.navigate(['/home'], {queryParams: { returnUrl: state.url }});
    return false;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = this.authenticateService.currentUserValue;
      if(currentUser){
        return true;
        
      }
      
      this.router.navigate(['/home'], {queryParams: { returnUrl: state.url }});
      return false;
  }
  
}
