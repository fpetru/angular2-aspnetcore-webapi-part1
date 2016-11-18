import { Component, OnInit } from '@angular/core';
import { NoteService } from "../../services/note/noteService";
import { NoteItem } from "../../models/note/noteModel";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';

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
            .subscribe((data: NoteItem[]) => { console.log("Message received on init: "); this.myItems = data; console.log(data[0]); },
            error => console.log(error),
            () => console.log("getAllItems() complete from init"));
    }
}

