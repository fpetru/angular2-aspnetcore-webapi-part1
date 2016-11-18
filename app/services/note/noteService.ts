import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

import { NoteItem } from "../../models/note/noteModel";
import { Configuration } from "../../app.constants";

@Injectable()
export class NoteService {

    constructor(private _http: Http, private _configuration: Configuration) {
    }

    public getAll = (): Observable<NoteItem[]> => {
        return this._http.get(this._configuration.ServerWithApiUrl) 
            .map(data => data.json());
    };
}