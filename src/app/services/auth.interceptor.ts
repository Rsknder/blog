import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { catchError } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService.isAuth() && this.authService.token) {
            req = req.clone({
                setParams: {

                    auth: this.authService.token
                }
            })
        }
        return next.handle(req)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log("Error from Interceptor: ", error)
                    if (error.status === 401) {
                        this.authService.logout()
                        this.router.navigate(['/admin', 'login'], {
                            queryParams: {
                                rejectedAuth: true
                            }
                        })
                    }
                    return throwError(error)
                })
            )
    }

}