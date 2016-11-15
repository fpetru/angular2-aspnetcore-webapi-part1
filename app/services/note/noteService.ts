import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

import { NoteItem } from '../../models/note/noteModel';
import { Configuration } from '../../app.constants';

@Injectable()
export class NoteService {
    private actionUrl: string;

    constructor(private _http: Http, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerWithApiUrl;
    }

    public getAll = (): Observable<NoteItem[]> => {
        return this._http.get(this.actionUrl + "notes", { headers: this.getHeaders() })
            .map(this.mapPersons)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        return headers;
    }

    private mapPersons(response: Response): NoteItem[] {
        // The response of the API has a results
        // property with the actual results
        return response.json().results.map(this.toNote)
    }

    private toNote(r: any): NoteItem {
        let note = <NoteItem>({
            Id: r.Id,
            Body: r.Body,
            CreatedOn: r.CreatedOn,
            UpdatedOn: r.UpdatedOn,
            UserId: r.UserId,
        });

        console.log('Parsed note item:', note);
        return note;
    }
}