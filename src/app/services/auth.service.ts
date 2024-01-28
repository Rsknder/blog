import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FbAuthResponse, User } from "../interfaces/interfaces";
import { Observable, tap } from "rxjs";
import { environments } from "src/environments/environment";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {
    }

    get token(): string | null {
        const expDate = new Date(localStorage.getItem('token-exp') + '')
        if (new Date() > expDate) {
            this.logout()
            return null
        }
        return localStorage.getItem('token') + ''
    }

    login(user: User): Observable<any> {
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environments.apiKey}`, user)
            .pipe(
                tap(this.setToken)
            )
    }

    logout() {
        this.setToken(null)
    }

    isAuth(): boolean {
        return !!this.token
    }

    // private setToken(response: FbAuthResponse | null) {
    private setToken(response: any) {
        if (response) {

            const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
            localStorage.setItem('token', response.idToken)
            localStorage.setItem('token-exp', expDate.toString())
            console.log(response)
        }
        else {
            localStorage.clear
        }
    }

}