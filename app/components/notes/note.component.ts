import { Component, OnInit } from '@angular/core';
import { NoteService } from "../../services/note/noteService";
import { NoteItem } from "../../models/note/noteModel";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'notes',
    providers: [NoteService],
    templateUrl: 'html/note.component.html'
})

export class NotesComponent implements OnInit {
    public myItems: NoteItem[];

    constructor(private _dataService: NoteService) {
    }

    ngOnInit() {
        this._dataService
            .getAll()
            .subscribe((data: NoteItem[]) => this.myItems = data,
            error => console.log(error),
            () => console.log("getAllItems() complete from init"));
    }
}