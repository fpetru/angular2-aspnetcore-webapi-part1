import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

import { NoteModel } from "../../models/note/noteModel";

@Injectable()
export class NoteService {
    constructor(private http: Http) { }

    login(noteData: NoteModel): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/login', noteData, { headers }).map(data => data.json());
    }
}