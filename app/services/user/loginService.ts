import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { UserLoginModel } from "../../models/user/userLoginModel";

@Injectable()
export class LoginService {
    private loginUrl = 'login';

    constructor(private http: Http) { }

    login(userData: UserLoginModel): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/login', userData, { headers })
            .map(data => data.json());
    }
}