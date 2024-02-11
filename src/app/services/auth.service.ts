import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FbAuthResponse, User } from "../interfaces/interfaces";
import { Observable, Subject, catchError, tap, throwError } from "rxjs";
import { environments } from "src/environments/environment";

@Injectable()
export class AuthService {

    public error$: Subject<string> = new Subject<string>()

    constructor(
        private http: HttpClient) {
    }

    get token(): string | null {
        const expDate = new Date(localStorage.getItem('token-exp') + '')
        if (new Date() > expDate) {
            this.logout()
            return null
        }
        return localStorage.getItem('token')
    }

    login(user: User): Observable<any> {
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environments.apiKey}`, user)
            .pipe(
                tap(this.setToken),
                catchError(this.handleError.bind(this))
            )
    }


    logout() {

        this.setToken(null)
    }

    isAuth(): boolean {

        if (this.token) { return true }
        else { return false }

    }

    private handleError(error: HttpErrorResponse): any {
        const { message } = error.error.error
        switch (message) {
            case 'EMAIL_NOT_FOUND':
                this.error$.next('Email not found')
                break
            case 'INVALID_LOGIN_CREDENTIALS':
                this.error$.next('Wrong login')
                break
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                this.error$.next('Too many ateeempts, wait 1h')
                break

        }
        return throwError(error)


    }

    // private setToken(response: FbAuthResponse | null) {
    private setToken(response: any) {
        if (response) {

            const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
            localStorage.setItem('token', response.idToken)
            localStorage.setItem('token-exp', expDate.toString())

        }
        else {
            localStorage.clear()

        }
    }

}