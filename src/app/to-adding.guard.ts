///<reference path="../../node_modules/@angular/router/src/router.d.ts"/>
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from "rxjs";
import {GuardService} from './services/guard.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ToAdding implements CanActivate{

  constructor(private guardService: GuardService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{

    // the code on the screen should be equal to the code that user enter
    if(this.guardService.code == this.guardService.neededCode) {
      // guard will allow user to go to next page
      return true;
    } else {
      // guard will not allow user to go to next page
      // this.router.navigate(['/']);
      return false;
    }
  }
}
