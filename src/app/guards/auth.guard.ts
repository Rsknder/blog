import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private auth: AuthService,
        private router: Router) {

    }




    //                    guards!






    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        if (this.auth.isAuth()) {
            return true
        }

        else {
            this.auth.logout()
            this.router.navigate(['/admin', 'login'], {
                queryParams: {
                    loginRequired: true
                }
            })
            return false
        }
    }

}
